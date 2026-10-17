import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import {
  authInitialized,
  userLoggedIn,
  userLoggedOut,
  userRegistered,
} from '../states/authSlice';

const USERS_KEY = 'sunday-ready-users';
const CURRENT_USER_KEY = 'sunday-ready-current-user';
const PASSWORD_ITERATIONS = 120000;

const readUsers = () => {
  const usersJson = window.localStorage.getItem(USERS_KEY);
  if (!usersJson) return [];

  const users = JSON.parse(usersJson);
  if (!Array.isArray(users)) {
    throw new Error('Saved users are not in the expected format.');
  }

  return users;
};

const createPasswordHash = async (password, salt) => {
  const encoder = new TextEncoder();
  const key = await window.crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    'PBKDF2',
    false,
    ['deriveBits'],
  );
  const hash = await window.crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt: encoder.encode(salt),
      iterations: PASSWORD_ITERATIONS,
      hash: 'SHA-256',
    },
    key,
    256,
  );

  return Array.from(new Uint8Array(hash), (byte) => byte.toString(16).padStart(2, '0')).join('');
};

const publicUser = (user) => ({
  id: user.id,
  fullName: user.fullName,
  email: user.email,
});

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, currentUser, isInitialized } = useSelector((state) => state.auth);

  useEffect(() => {
    try {
      const savedUsers = readUsers();
      const savedCurrentUser = JSON.parse(
        window.localStorage.getItem(CURRENT_USER_KEY) || 'null',
      );
      const matchingUser = savedUsers.find((user) => user.id === savedCurrentUser?.id);
      dispatch(authInitialized({
        users: savedUsers,
        currentUser: matchingUser ? publicUser(matchingUser) : null,
      }));
      if (!matchingUser) {
        window.localStorage.removeItem(CURRENT_USER_KEY);
      }
    } catch (error) {
      console.error('Could not load local account data:', error);
      toast.error('Could not load local account data. Check browser storage and reload.');
      dispatch(authInitialized({ users: [], currentUser: null }));
    }
  }, [dispatch]);

  const registerUser = useCallback(async ({ fullName, email, password }) => {
    const savedUsers = readUsers();
    const normalizedEmail = email.trim().toLowerCase();
    if (savedUsers.some((user) => user.email === normalizedEmail)) {
      throw new Error('An account with this email already exists.');
    }

    const salt = window.crypto.randomUUID();
    const user = {
      id: window.crypto.randomUUID(),
      fullName: fullName.trim(),
      email: normalizedEmail,
      passwordSalt: salt,
      passwordHash: await createPasswordHash(password, salt),
      createdAt: new Date().toISOString(),
    };
    const nextUsers = [...savedUsers, user];
    const signedInUser = publicUser(user);

    window.localStorage.setItem(USERS_KEY, JSON.stringify(nextUsers));
    window.localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(signedInUser));
    dispatch(userRegistered({ user, currentUser: signedInUser }));
    toast.success('Your account has been created.');
    navigate('/dashboard', { replace: true });
  }, [dispatch, navigate]);

  const loginUser = useCallback(async ({ email, password, rememberMe }) => {
    const savedUsers = readUsers();
    const normalizedEmail = email.trim().toLowerCase();
    const user = savedUsers.find((savedUser) => savedUser.email === normalizedEmail);
    if (!user) {
      throw new Error('Email or password is incorrect.');
    }

    const passwordHash = await createPasswordHash(password, user.passwordSalt);
    if (passwordHash !== user.passwordHash) {
      throw new Error('Email or password is incorrect.');
    }

    const signedInUser = publicUser(user);
    if (rememberMe) {
      window.localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(signedInUser));
    } else {
      window.localStorage.removeItem(CURRENT_USER_KEY);
    }
    dispatch(userLoggedIn(signedInUser));
    toast.success(`Welcome back, ${user.fullName}.`);
    navigate('/dashboard', { replace: true });
  }, [dispatch, navigate]);

  const logout = useCallback(() => {
    window.localStorage.removeItem(CURRENT_USER_KEY);
    dispatch(userLoggedOut());
    navigate('/', { replace: true });
  }, [dispatch, navigate]);

  return {
    users,
    currentUser,
    isInitialized,
    registerUser,
    loginUser,
    logout,
  };
};

export default useAuth;
