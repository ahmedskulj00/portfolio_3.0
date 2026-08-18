import { person } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="flex py-10 text-sm text-dim justify-center">
        <p>
          © {new Date().getFullYear()} {person.name}
        </p>
      </div>
    </footer>
  );
}
