import React from 'react';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';
import AuthEditorialPanel from '../components/AuthEditorialPanel';
import AuthFeatureCards from '../components/AuthFeatureCards';
import { useNavigate } from 'react-router';
import { useLoginForm } from '../../hooks/useLoginForm';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { register, submitLogin, showPassword, setShowPassword } = useLoginForm();

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6">
      {/* Main Auth Card */}
      <div className="bg-(--color-surface) rounded-3xl border border-(--color-border)/80 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-2">

        {/* Left Form Panel */}
        <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between">

          {/* Top Switcher */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-(--color-primary)" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-(--color-text-secondary)">
                Authentication Protocol
              </span>
            </div>

            <div className="bg-(--color-surface-muted) p-1 rounded-xl flex items-center gap-1 border border-(--color-border)/60">
              <button
                type="button"
                className="px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer bg-(--color-surface) text-(--color-neutral) shadow-xs"
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => {
                  navigate('/register');
                }}
                className="px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer text-(--color-text-secondary) hover:text-(--color-neutral)"
              >
                Register
              </button>
            </div>
          </div>

          {/* Form Body */}
          <div className="space-y-6 my-auto">
            <div className="space-y-2">
              <h1 className="font-serif text-3xl sm:text-4xl font-normal text-(--color-neutral) tracking-tight">
                Welcome back.
              </h1>
              <p className="text-sm font-sans text-(--color-text-secondary) leading-relaxed">
                Enter your credentials to access your weekly practice logs, LeetCode approach notes, and mock recordings.
              </p>
            </div>

            <form onSubmit={submitLogin} className="space-y-4">
              {/* Email Input */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-(--color-neutral)">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  autoComplete="email"
                  required
                  {...register('email', { required: true })}
                  className="w-full px-3.5 py-2.5 bg-[#FAFAFA] border border-(--color-border) rounded-xl text-sm text-(--color-neutral) focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:border-transparent transition-all"
                />
              </div>

              {/* Password Input */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-(--color-neutral)">
                    Password
                  </label>
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter password"
                    autoComplete="current-password"
                    required
                    {...register('password', { required: true })}
                    className="w-full px-3.5 py-2.5 pr-10 bg-[#FAFAFA] border border-(--color-border) rounded-xl text-sm text-(--color-neutral) focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-(--color-text-secondary) hover:text-(--color-neutral) transition-colors cursor-pointer"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <label className="flex items-center gap-2 text-xs text-(--color-text-secondary)">
                <input
                  type="checkbox"
                  {...register('rememberMe')}
                  className="h-4 w-4 accent-(--color-neutral)"
                />
                Keep me signed in on this device
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl font-semibold text-sm bg-(--color-primary) text-(--color-neutral) hover:brightness-95 shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                Sign In to Sunday Ready
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <p className="text-center text-xs font-sans text-(--color-text-secondary) pt-2">
              Not registered in this cohort yet?{' '}
              <button
                type="button"
                onClick={() => navigate('/register')}
                className="font-bold text-(--color-neutral) underline hover:no-underline cursor-pointer"
              >
                Create an account
              </button>
            </p>
          </div>

          {/* Bottom links */}
          <div className="flex items-center justify-between text-[11px] font-mono text-(--color-text-secondary) pt-6 border-t border-(--color-border)/40 mt-8">
            <span>Sunday Ready v1.4</span>
            <div className="flex items-center gap-3">
              <a href="#terms" className="hover:underline">Terms</a>
              <span>•</span>
              <a href="#privacy" className="hover:underline">Privacy</a>
              <span>•</span>
              <a href="#support" className="hover:underline">Support</a>
            </div>
          </div>
        </div>

        {/* Right Yellow Statement Panel */}
        <AuthEditorialPanel />
      </div>

      {/* Feature Highlight Cards */}
      <AuthFeatureCards />
    </div>
  );
};

export default LoginPage;