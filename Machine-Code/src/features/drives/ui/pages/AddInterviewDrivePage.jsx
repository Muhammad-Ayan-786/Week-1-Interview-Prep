import React from 'react';
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Link as LinkIcon,
} from 'lucide-react';
import { useAddDriveForm } from '../../hooks/useAddDriveForm';

export const AddInterviewDrivePage = () => {
  const { register, submitDrive, assignedWeek, isLoaded, cancel } = useAddDriveForm();

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Top Header & Breadcrumb */}
      <div className="flex flex-wrap flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1">
          <button
            type="button"
            onClick={cancel}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-(--color-text-secondary) hover:text-(--color-neutral) mb-1 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> LIBRARY / INTERVIEW DRIVE LINKS / ADD DRIVE LINK
          </button>
          <h1 className="font-serif text-3xl sm:text-4xl font-normal text-(--color-neutral)">
            Add Interview Drive Link
          </h1>
          <p className="text-xs font-sans text-(--color-text-secondary) leading-relaxed max-w-xl">
            Catalog Google Drive interview evaluation sheets, company debrief audio, and preparation runbooks into your structured rehearsal library.
          </p>
        </div>

      </div>

      {/* Main Form Card */}
      <form
        onSubmit={submitDrive}
        className="bg-(--color-surface) p-6 sm:p-8 rounded-3xl border border-(--color-border)/80 shadow-xs space-y-6"
      >
        {/* Banner ID & Calibration Node */}
        <div className="flex items-center justify-between border-b border-(--color-border)/60 pb-4 text-xs font-mono">
          <span className="text-(--color-text-secondary)">
            DOCUMENT RECORD ID: <strong className="text-(--color-neutral)">SR-DRV-{new Date().getFullYear()}-{assignedWeek}</strong>
          </span>
          <span className="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-800 rounded-full font-bold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Live Calibration Node
          </span>
        </div>

        {/* 01 Automatically Assigned Preparation Sprint */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-mono">
            <label className="font-bold text-(--color-neutral) uppercase tracking-wider text-[11px]">
              01 AUTOMATICALLY ASSIGNED PREPARATION SPRINT
            </label>
            <span className="text-(--color-text-secondary)">Assigned in sequence</span>
          </div>
          <div className="rounded-xl border border-(--color-border) bg-(--color-bg) px-4 py-3 text-sm font-mono text-(--color-neutral)">
            {isLoaded ? `This drive will be assigned to ${assignedWeek}` : 'Loading the next week...'}
          </div>
        </div>

        {/* 02 Resource Title & Scope */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-mono">
            <label className="font-bold text-(--color-neutral) uppercase tracking-wider text-[11px]">
              02 RESOURCE TITLE & SCOPE
            </label>
            <span className="text-(--color-text-secondary) text-[11px]">Max 100 characters</span>
          </div>
          <input
            type="text"
            required
            maxLength={100}
            {...register('title')}
            className="w-full bg-(--color-bg) border border-(--color-border) rounded-xl px-4 py-2.5 text-xs font-sans text-(--color-neutral) focus:outline-none focus:border-(--color-primary)"
          />
        </div>

        {/* 03 Google Drive Resource URI */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-mono">
            <label className="font-bold text-(--color-neutral) uppercase tracking-wider text-[11px]">
              03 GOOGLE DRIVE RESOURCE URI
            </label>
          </div>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <LinkIcon className="w-4 h-4 text-(--color-text-secondary) absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="url"
                required
                placeholder="https://drive.google.com/..."
                {...register('resourceUri')}
                className="w-full bg-(--color-bg) border border-(--color-border) rounded-xl pl-10 pr-4 py-2.5 text-xs font-mono text-(--color-neutral) focus:outline-none focus:border-(--color-primary)"
              />
            </div>
          </div>
          <div className="text-xs font-mono text-emerald-700 flex items-center gap-1.5 pt-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> Link accessible by service account (Read-Only Granted)
          </div>
        </div>

        {/* 04 Rehearsal Focus & Core Content Summary */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-mono">
            <label className="font-bold text-(--color-neutral) uppercase tracking-wider text-[11px]">
              04 REHEARSAL FOCUS & CORE CONTENT SUMMARY
            </label>
            <span className="text-(--color-text-secondary)">Rubric & Tactical Highlights</span>
          </div>
          <textarea
            rows={4}
            {...register('rehearsalFocus')}
            className="w-full bg-(--color-bg) border border-(--color-border) rounded-xl p-3.5 text-xs font-sans text-(--color-neutral) focus:outline-none"
          />
        </div>

        {/* Action Buttons & Autosave Status */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-(--color-border)/60">
          <span className="text-[11px] font-mono text-emerald-700 font-medium">
            ● Drive details save locally when submitted
          </span>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={cancel}
              className="flex-1 sm:flex-initial px-5 py-2.5 text-xs font-mono font-bold text-(--color-text-secondary) hover:text-(--color-neutral) cursor-pointer text-center"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!isLoaded}
              className="flex-1 sm:flex-initial px-6 py-2.5 bg-(--color-primary) text-(--color-neutral) rounded-xl text-xs font-mono font-bold hover:brightness-95 shadow-xs flex items-center justify-center gap-1.5 cursor-pointer text-center"
            >
              Save Drive Link <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddInterviewDrivePage;