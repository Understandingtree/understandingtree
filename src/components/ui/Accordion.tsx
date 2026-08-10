"use client";

import { useState } from "react";

export type AccordionSection = {
  id: string;
  title: string;
  content: React.ReactNode;
};

export default function Accordion({ sections }: { sections: AccordionSection[] }) {
  const [openId, setOpenId] = useState<string | null>(sections[0]?.id ?? null);

  return (
    <div>
      {sections.map((section) => {
        const isOpen = openId === section.id;
        const panelId = `${section.id}-panel`;
        const triggerId = `${section.id}-trigger`;
        return (
          <div className="accordion-item" key={section.id} id={section.id}>
            <h3>
              <button
                type="button"
                id={triggerId}
                className="accordion-trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : section.id)}
              >
                <span>{section.title}</span>
                <span className="accordion-icon" aria-hidden="true">
                  {isOpen ? "–" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className="accordion-panel"
              hidden={!isOpen}
            >
              {section.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
