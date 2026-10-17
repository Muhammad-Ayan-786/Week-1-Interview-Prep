import { ArrowLeft, ImagePlus, Link as LinkIcon, RefreshCw, Trash2 } from 'lucide-react';
import { useAddDsaEntryForm } from '../../hooks/useAddDsaEntryForm';

const difficultyOptions = ['Easy', 'Medium', 'Hard'];

export const AddDsaEntryPage = () => {
  const {
    assignedWeek,
    setAssignedWeek,
    availableWeeks,
    isLoaded,
    questions,
    questionFields,
    errors,
    imageErrors,
    selectImage,
    removeImage,
    submitEntries,
    cancel,
  } = useAddDsaEntryForm();

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div>
        <button
          type="button"
          onClick={cancel}
          className="mb-1 inline-flex cursor-pointer items-center gap-1.5 text-xs font-mono font-bold text-(--color-text-secondary) hover:text-(--color-neutral)"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> PRACTICE / DATA STRUCTURES & ALGORITHMS / ADD DSA ENTRY
        </button>
        <h1 className="font-serif text-3xl font-normal text-(--color-neutral) sm:text-4xl">
          Add DSA Entries
        </h1>
        <p className="mt-1 max-w-xl text-xs text-(--color-text-secondary)">
          Add five questions for one week. Upload a solution screenshot and record the approach for each problem.
        </p>
      </div>

      <form onSubmit={submitEntries} className="space-y-6">
        <section className="rounded-3xl border border-(--color-border)/80 bg-(--color-surface) p-5 shadow-xs sm:p-7">
          <label htmlFor="assigned-week" className="mb-2 block text-xs font-mono font-bold uppercase text-(--color-neutral)">
            Week for these five questions
          </label>
          <select
            id="assigned-week"
            value={assignedWeek}
            onChange={(event) => setAssignedWeek(event.target.value)}
            className="w-full rounded-xl border border-(--color-border) bg-(--color-bg) px-4 py-2.5 text-sm text-(--color-neutral) sm:w-auto"
          >
            {availableWeeks.map((week) => <option key={week} value={week}>{week.replace('W', 'Week ')}</option>)}
          </select>
        </section>

        {questionFields.map(({ index, fields }) => {
          const question = questions?.[index] || {};
          const fieldErrors = errors.questions?.[index] || {};
          const imageError = imageErrors[index] || fieldErrors.image?.message;

          return (
            <section
              key={index}
              className="space-y-5 rounded-3xl border border-(--color-border)/80 bg-(--color-surface) p-5 shadow-xs sm:p-7"
            >
              <div className="flex items-center justify-between border-b border-(--color-border)/60 pb-3">
                <h2 className="font-serif text-xl text-(--color-neutral)">Question {index + 1}</h2>
                <span className="text-xs font-mono text-(--color-text-secondary)">{assignedWeek}</span>
              </div>

              <div className="grid gap-4 sm:grid-cols-[1fr_2fr]">
                <label className="space-y-1.5 text-xs font-mono font-bold text-(--color-neutral)">
                  LEETCODE ID *
                  <input
                    type="text"
                    placeholder="LC #300"
                    {...fields.leetcodeId}
                    className="w-full rounded-xl border border-(--color-border) bg-(--color-bg) px-4 py-2.5 font-sans font-normal"
                  />
                  {fieldErrors.leetcodeId && <span role="alert" className="font-sans text-rose-700">{fieldErrors.leetcodeId.message}</span>}
                </label>
                <label className="space-y-1.5 text-xs font-mono font-bold text-(--color-neutral)">
                  PROBLEM TITLE *
                  <input
                    type="text"
                    placeholder="Problem title"
                    {...fields.title}
                    className="w-full rounded-xl border border-(--color-border) bg-(--color-bg) px-4 py-2.5 font-sans font-normal"
                  />
                  {fieldErrors.title && <span role="alert" className="font-sans text-rose-700">{fieldErrors.title.message}</span>}
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-1.5 text-xs font-mono font-bold text-(--color-neutral)">
                  DIFFICULTY
                  <select {...fields.difficulty} className="w-full rounded-xl border border-(--color-border) bg-(--color-bg) px-4 py-2.5 font-sans font-normal">
                    {difficultyOptions.map((difficulty) => <option key={difficulty}>{difficulty}</option>)}
                  </select>
                </label>
                <label className="space-y-1.5 text-xs font-mono font-bold text-(--color-neutral)">
                  LEETCODE LINK
                  <span className="relative block">
                    <LinkIcon className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-(--color-text-secondary)" />
                    <input
                      type="url"
                      placeholder="https://leetcode.com/problems/..."
                      {...fields.leetcodeLink}
                      className="w-full rounded-xl border border-(--color-border) bg-(--color-bg) py-2.5 pl-10 pr-4 font-sans font-normal"
                    />
                  </span>
                </label>
              </div>

              <label className="block space-y-1.5 text-xs font-mono font-bold text-(--color-neutral)">
                CATEGORIES
                <input
                  type="text"
                  placeholder="Two pointers, Arrays (comma separated)"
                  {...fields.categories}
                  className="w-full rounded-xl border border-(--color-border) bg-(--color-bg) px-4 py-2.5 font-sans font-normal"
                />
              </label>

              <div className="space-y-2">
                <label htmlFor={`solution-image-${index}`} className="block text-xs font-mono font-bold text-(--color-neutral)">
                  SOLUTION IMAGE *
                </label>
                <input
                  id={`solution-image-${index}`}
                  type="file"
                  accept="image/*"
                  onChange={(event) => selectImage(index, event.target.files?.[0])}
                  className="block w-full cursor-pointer rounded-xl border border-(--color-border) bg-(--color-bg) p-3 text-xs text-(--color-text-secondary)"
                />
                <p className="text-[11px] text-(--color-text-secondary)">Image files up to 500 KB are stored locally in this browser.</p>
                {imageError && <p role="alert" className="text-xs text-rose-700">{imageError}</p>}
                {question.image && (
                  <div className="flex items-start gap-3 rounded-xl border border-(--color-border) bg-(--color-bg) p-3">
                    <img src={question.image} alt={`Preview for question ${index + 1}`} className="h-24 w-32 rounded-lg object-cover" />
                    <div className="min-w-0 flex-1 text-xs text-(--color-text-secondary)">{question.imageName}</div>
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      aria-label={`Remove image for question ${index + 1}`}
                      className="rounded-lg p-2 text-rose-700 hover:bg-rose-500/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>

              <label className="block space-y-1.5 text-xs font-mono font-bold text-(--color-neutral)">
                APPROACH *
                <textarea
                  rows={4}
                  placeholder="Explain the algorithm and why it works."
                  {...fields.explanation}
                  className="w-full rounded-xl border border-(--color-border) bg-(--color-bg) p-4 font-sans font-normal"
                />
                {fieldErrors.explanation && <span role="alert" className="font-sans text-rose-700">{fieldErrors.explanation.message}</span>}
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block space-y-1.5 text-xs font-mono font-bold text-(--color-neutral)">
                  TIME COMPLEXITY
                  <input type="text" placeholder="O(n)" {...fields.timeComplexity} className="w-full rounded-xl border border-(--color-border) bg-(--color-bg) px-4 py-2.5 font-sans font-normal" />
                </label>
                <label className="block space-y-1.5 text-xs font-mono font-bold text-(--color-neutral)">
                  SPACE COMPLEXITY
                  <input type="text" placeholder="O(1)" {...fields.spaceComplexity} className="w-full rounded-xl border border-(--color-border) bg-(--color-bg) px-4 py-2.5 font-sans font-normal" />
                </label>
              </div>

              <label className="block space-y-1.5 text-xs font-mono font-bold text-(--color-neutral)">
                KEY INVARIANT / RECALL NOTE
                <span className="flex items-center gap-2">
                  <RefreshCw className="h-4 w-4 shrink-0" />
                  <input type="text" {...fields.panicAnchor} className="w-full rounded-xl border border-(--color-border) bg-(--color-bg) px-4 py-2.5 font-sans font-normal" />
                </span>
              </label>
            </section>
          );
        })}

        <div className="flex justify-end gap-3">
          <button type="button" onClick={cancel} className="rounded-xl px-5 py-2.5 text-xs font-mono font-bold text-(--color-text-secondary)">
            Cancel
          </button>
          <button
            type="submit"
            disabled={!isLoaded}
            className="rounded-xl bg-(--color-primary) px-6 py-2.5 text-xs font-mono font-bold text-(--color-neutral) disabled:cursor-not-allowed disabled:opacity-60"
          >
            <ImagePlus className="mr-1.5 inline h-4 w-4" /> Save five questions
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDsaEntryPage;
