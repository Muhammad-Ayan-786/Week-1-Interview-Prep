import React from 'react';
import { SlidersHorizontal, CircleCheck, Clock3, ListTodo } from 'lucide-react';

export const MetricCards = ({ total, completed, inProgress, pending }) => {
  const metrics = [
    { title: 'QUESTIONS TRACKED', value: total, subtext: 'Saved questions', icon: SlidersHorizontal },
    { title: 'COMPLETED', value: completed, subtext: 'Marked done', icon: CircleCheck },
    { title: 'IN PROGRESS', value: inProgress, subtext: 'Currently practicing', icon: Clock3 },
    { title: 'PENDING', value: pending, subtext: 'Waiting to start', icon: ListTodo },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className="bg-(--color-surface) p-6 rounded-2xl border border-(--color-border)/80 shadow-xs flex flex-col justify-between space-y-4"
          >
            {/* Header Title & Icon */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-(--color-text-secondary)">
                {item.title}
              </span>
              <Icon className="w-4 h-4 text-(--color-text-secondary)" />
            </div>

            {/* Big Stat Value */}
            <div className="font-serif text-3xl sm:text-4xl font-normal text-(--color-neutral)">
              {item.value}
            </div>

            {/* Subtext or Badge */}
            <div>
              <span className="text-xs font-mono font-bold text-(--color-secondary)">
                {item.subtext}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MetricCards;