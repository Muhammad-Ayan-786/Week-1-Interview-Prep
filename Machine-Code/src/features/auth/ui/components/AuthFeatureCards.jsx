import React from 'react';

const features = [
  {
    badge: 'Specification Compliant',
    badgeColor: 'bg-(--color-success)',
    title: 'Half-and-Half Split',
    description: 'Left pure white form area with inputs & submit; right solid #FFD400 yellow serif statement panel.',
  },
  {
    badge: 'Interactive Toggle',
    badgeColor: 'bg-(--color-primary)',
    title: 'Login & Register Modes',
    description: 'Easily toggle between Sign In (email, password) and Register (name, email, password, confirm).',
  },
  {
    badge: 'Validation States',
    badgeColor: 'bg-(--color-neutral)',
    title: 'Clear Error & Success Cues',
    description: 'Inline green validation tokens, password strength metrics, and verified TLS connection indicator.',
  },
];

export const AuthFeatureCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 w-full max-w-7xl mx-auto">
      {features.map((item, index) => (
        <div
          key={index}
          className="bg-(--color-surface) p-5 rounded-2xl border border-(--color-border)/60 shadow-xs flex flex-col justify-between"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${item.badgeColor}`} />
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-(--color-text-secondary)">
                {item.badge}
              </span>
            </div>
            <h3 className="font-sans font-bold text-sm text-(--color-neutral)">
              {item.title}
            </h3>
            <p className="text-xs font-sans text-(--color-text-secondary) leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AuthFeatureCards;