import Section from "./Section";
import Reveal from "./Reveal";
import { person, socials } from "@/data/content";
import { iconFor, ArrowIcon } from "./Icons";

export default function Contact() {
  return (
    <Section id="contact" title="Contact" aside="Open to good work.">
      <Reveal>
        <p className="max-w-xl text-lg leading-relaxed text-dim">
          Have a project, a role, or a question? Send me an email — I read everything and reply.
        </p>
      </Reveal>

      <Reveal delay={80}>
        <a
          href={`mailto:${person.email}`}
          className="group mt-8 inline-block max-w-full wrap-break-word text-[clamp(1.6rem,5vw,3.25rem)] font-black tracking-tight"
        >
          {person.email}
          <span className="mt-2 block h-px w-full origin-left scale-x-0 bg-paper transition-transform duration-500 ease-out group-hover:scale-x-100" />
        </a>
      </Reveal>

      <Reveal delay={160}>
        <ul className="mt-12 border-t border-line">
          {socials.map((social) => {
            const Icon = iconFor[social.label];
            return (
              <li key={social.label} className="border-b border-line">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative isolate flex items-center justify-between px-4 py-5 transition-colors duration-300 hover:text-ink"
                >
                  <span className="sweep-fill" />

                  <span className="flex items-center gap-4">
                    <Icon className="h-5 w-5" />
                    <span className="text-lg font-bold">{social.label}</span>
                  </span>

                  <span className="flex items-center gap-3">
                    <span className="hidden text-sm text-dim transition-colors duration-300 group-hover:text-ink/70 sm:inline">
                      @{social.handle}
                    </span>
                    <ArrowIcon className="h-4 w-4" />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </Section>
  );
}
