import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionProps {
  id: string;
  title: string;
  aside?: string;
  children: ReactNode;
}

export default function Section({ id, title, aside, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-line scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-3">
            <div className="md:sticky md:top-28">
              <Reveal>
                <h2 className="label text-dim">{title}</h2>
                {aside ? (
                  <p className="mt-4 hidden max-w-[16ch] text-sm leading-relaxed text-dim md:block">
                    {aside}
                  </p>
                ) : null}
              </Reveal>
            </div>
          </div>
          <div className="md:col-span-9">{children}</div>
        </div>
      </div>
    </section>
  );
}
