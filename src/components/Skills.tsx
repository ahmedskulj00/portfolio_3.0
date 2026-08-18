import Section from "./Section";
import Reveal from "./Reveal";
import { skills } from "@/data/content";

export default function Skills() {
  return (
    <Section id="skills" title="Skills" aside="What I reach for.">
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
        {skills.map((group, index) => (
          <Reveal key={group.group} delay={index * 80}>
            <h3 className="label text-paper">{group.group}</h3>
            <ul className="mt-5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="border-t border-line py-2.5 text-dim transition-colors duration-200 hover:text-paper"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
