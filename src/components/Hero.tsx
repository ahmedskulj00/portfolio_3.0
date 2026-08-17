import { person, socials } from "@/data/content";
import { iconFor, ArrowIcon } from "./Icons";

const [firstName, lastName] = person.name.split(" ");

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-32 md:px-10 md:pb-24 md:pt-44">
        <p className="label rise text-dim" style={{ animationDelay: "80ms" }}>
          {person.role} · {person.location}
        </p>

        <h1
          className="display rise mt-8 text-[clamp(3.25rem,14vw,10.5rem)]"
          style={{ animationDelay: "160ms" }}
        >
          <span className="block">{firstName}</span>
          <span className="block text-dim">{lastName}</span>
        </h1>

        <div className="rise mt-12 pt-8" style={{ animationDelay: "300ms" }}>
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <p className="max-w-xl text-lg leading-relaxed text-dim md:col-span-7 md:text-xl">
              {person.intro}
            </p>

            <div className="md:col-span-5 md:pl-6">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 border border-paper px-6 py-3 text-sm font-bold transition-colors duration-300 hover:text-ink"
              >
                <span className="sweep-fill" />
                Get in touch
                <ArrowIcon className="h-3.5 w-3.5" />
              </a>

              <ul className="mt-8 flex items-center gap-5">
                {socials.map((social) => {
                  const Icon = iconFor[social.label];
                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="block text-dim transition-colors duration-200 hover:text-paper"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
