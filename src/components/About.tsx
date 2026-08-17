import Image from "next/image";
import Section from "./Section";
import Reveal from "./Reveal";
import { person, languages } from "@/data/content";

export default function About() {
  return (
    <Section id="about" title="About" aside="Who you'd be working with.">
      <div className="grid gap-10 md:grid-cols-5 md:gap-12">
        <Reveal className="md:col-span-2">
          <div className="group relative aspect-4/5 w-full overflow-hidden border border-line bg-surface">
            <Image
              src={person.photo}
              alt={person.photoAlt}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
            />
          </div>
        </Reveal>

        <div className="md:col-span-3">
          <Reveal delay={80}>
            <div className="space-y-6 text-lg leading-relaxed text-dim">
              {person.about.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-10 border-t border-line pt-6">
              <h3 className="label text-dim">Away from the keyboard</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {person.hobbies.map((hobby) => (
                  <li key={hobby} className="border border-line px-3 py-1.5 text-sm text-paper">
                    {hobby}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-8 border-t border-line pt-6">
              <h3 className="label text-dim">Languages</h3>
              <ul className="mt-4 space-y-1 text-sm text-paper">
                {languages.map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
