import Section from "./Section";
import Reveal from "./Reveal";
import { education } from "@/data/content";

export default function Education() {
  return (
    <Section id="education" title="Education" aside="Where it started.">
      <ol>
        {education.map((item, index) => (
          <li key={item.school} className="border-t border-line first:border-t-0">
            <Reveal delay={index * 80}>
              <div className="grid gap-3 py-8 md:grid-cols-12 md:gap-8 md:py-10">
                <p className="label text-dim md:col-span-4">{item.period}</p>

                <div className="md:col-span-8">
                  <h3 className="text-xl font-black tracking-tight md:text-2xl">{item.school}</h3>
                  <p className="mt-1 text-dim">{item.field}</p>
                  <p className="mt-1 text-sm text-dim">{item.place}</p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
