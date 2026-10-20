'use client';

import { useState } from 'react';

export interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
}

export default function Accordion({ items, defaultOpenId }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

  return (
    <div className="divide-y divide-border border border-border rounded-lg bg-white overflow-hidden">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const buttonId = `accordion-button-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-sky/50 transition-colors"
              >
                <span className="text-[18px] font-semibold text-text-dark">Q. {item.question}</span>
                <span
                  aria-hidden="true"
                  className={`shrink-0 text-navy text-lg transition-transform duration-300 ease-out ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                >
                  ▾
                </span>
              </button>
            </h3>

            {/* 높이는 grid-rows로, 투명도는 opacity로 함께 바꿔서 부드럽게 열고 닫는다 */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <p
                  className={`px-6 pb-6 text-[18px] text-text-muted leading-relaxed transition-opacity duration-300 ease-out ${
                    isOpen ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
