import Section from "./Section";
import Reveal from "./Reveal";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <Section id="experience" title="Experience" aside="Six roles, newest first.">
      <ol>
        {experience.map((job, index) => (
          <li key={job.company} className="group relative border-t border-line first:border-t-0">
            <span
              aria-hidden="true"
              className="absolute -left-4 top-0 hidden h-full w-px origin-top scale-y-0 bg-paper transition-transform duration-500 ease-out group-hover:scale-y-100 md:-left-6 md:block"
            />

            <Reveal delay={index * 60}>
              <div className="grid gap-3 py-9 md:grid-cols-12 md:gap-8 md:py-11">
                <div className="md:col-span-4">
                  <p className="label text-dim transition-colors duration-300 group-hover:text-paper">
                    {job.period}
                  </p>
                  {job.current ? (
                    <p className="label mt-3 flex items-center gap-2 text-paper">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-paper" />
                      Current
                    </p>
                  ) : null}
                </div>

                <div className="md:col-span-8">
                  <h3 className="text-2xl font-black tracking-tight md:text-[1.75rem]">
                    {job.company}
                  </h3>
                  <p className="mt-1 text-sm text-dim">{job.role}</p>

                  <ul className="mt-5 space-y-3">
                    {job.points.map((point) => (
                      <li
                        key={point.slice(0, 24)}
                        className="relative pl-6 leading-relaxed text-dim transition-colors duration-300 before:absolute before:left-0 before:top-[0.72em] before:h-px before:w-3.5 before:bg-line before:transition-colors before:duration-300 group-hover:text-paper/80 group-hover:before:bg-paper"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
