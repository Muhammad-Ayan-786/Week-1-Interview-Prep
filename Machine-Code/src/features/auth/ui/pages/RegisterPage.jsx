import React from 'react';
import { Link, useNavigate } from 'react-router';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';
import AuthEditorialPanel from '../components/AuthEditorialPanel';
import AuthFeatureCards from '../components/AuthFeatureCards';
import { useRegisterForm } from '../../hooks/useRegisterForm';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const {
    register,
    submitRegistration,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
  } = useRegisterForm();

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
                onClick={() => navigate('/')}
                className="px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer text-(--color-text-secondary) hover:text-(--color-neutral)"
              >
                Sign In
              </button>
              <button
                type="button"
                className="px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer bg-(--color-surface) text-(--color-neutral) shadow-xs"
              >
                Register
              </button>
            </div>
          </div>

          {/* Form Body */}
          <div className="space-y-6 my-auto">
            <div className="space-y-2">
              <h1 className="font-serif text-3xl sm:text-4xl font-normal text-(--color-neutral) tracking-tight">
                Create an account.
              </h1>
              <p className="text-sm font-sans text-(--color-text-secondary) leading-relaxed">
                Join your cohort to track algorithms, structure mock interviews, and build interview confidence.
              </p>
            </div>

            <form onSubmit={submitRegistration} className="space-y-3.5">
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-(--color-neutral)">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Ayan Khan"
                  autoComplete="name"
                  required
                  {...register('fullName', { required: true, minLength: 2 })}
                  className="w-full px-3.5 py-2.5 bg-[#FAFAFA] border border-(--color-border) rounded-xl text-sm text-(--color-neutral) focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:border-transparent transition-all"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-1">
                <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-(--color-neutral)">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="ayan@sundayready.dev"
                  autoComplete="email"
                  required
                  {...register('email', { required: true })}
                  className="w-full px-3.5 py-2.5 bg-[#FAFAFA] border border-(--color-border) rounded-xl text-sm text-(--color-neutral) focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:border-transparent transition-all"
                />
              </div>

              {/* Password */}
              <div className="space-y-1">
                <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-(--color-neutral)">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a strong password"
                    autoComplete="new-password"
                    required
                    minLength={8}
                    {...register('password', { required: true, minLength: 8 })}
                    className="w-full px-3.5 py-2.5 pr-10 bg-[#FAFAFA] border border-(--color-border) rounded-xl text-sm text-(--color-neutral) focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-(--color-text-secondary) hover:text-(--color-neutral) transition-colors cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-1">
                <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-(--color-neutral)">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Re-enter your password"
                    autoComplete="new-password"
                    required
                    {...register('confirmPassword', { required: true })}
                    className="w-full px-3.5 py-2.5 pr-10 bg-[#FAFAFA] border border-(--color-border) rounded-xl text-sm text-(--color-neutral) focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-(--color-text-secondary) hover:text-(--color-neutral) transition-colors cursor-pointer"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-center justify-between pt-1 pb-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    {...register('agreeTerms')}
                    className="w-4 h-4 rounded border-(--color-border) text-(--color-neutral) focus:ring-(--color-primary) accent-(--color-neutral)"
                  />
                  <span className="text-xs font-sans text-(--color-text-secondary)">
                    I accept the cohort terms and preparation guidelines
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl font-semibold text-sm bg-(--color-primary) text-(--color-neutral) hover:brightness-95 shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer mt-2"
              >
                Register Account
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <p className="text-center text-xs font-sans text-(--color-text-secondary) pt-1">
              Already registered in this cohort?{' '}
              <Link
                to="/"
                className="font-bold text-(--color-neutral) underline hover:no-underline cursor-pointer"
              >
                Sign in instead
              </Link>
            </p>
          </div>

          {/* Bottom Links */}
          <div className="flex items-center justify-between text-[11px] font-mono text-(--color-text-secondary) pt-6 border-t border-(--color-border)/40 mt-6">
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

export default RegisterPage;