import type { GlassKind } from "@/lib/start-scene";

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export default function CoffeeGlass({ kind }: { kind: GlassKind }) {
  return (
    <svg viewBox="0 0 120 150" className="h-auto w-full overflow-visible" aria-hidden>
      {kind === "mug" && <Mug />}
      {kind === "iced" && <Iced />}
      {kind === "latte" && <Latte />}
      {kind === "cappuccino" && <Cappuccino />}
      {kind === "espresso" && <Espresso />}
      {kind === "tumbler" && <Tumbler />}
    </svg>
  );
}

function Mug() {
  return (
    <g {...stroke}>
      <path d="M38 28c2-10 8-11 6-20" strokeWidth="1.7" />
      <path d="M54 26c2-10 8-11 6-20" strokeWidth="1.7" />
      <path d="M70 28c2-10 8-11 6-20" strokeWidth="1.7" />
      <path d="M22 40h58l-4 68c-1 12-10 18-25 18s-24-6-25-18L22 40z" fill="currentColor" fillOpacity="0.1" strokeWidth="1.8" />
      <path d="M28 58c10 4 22 4 34-1" strokeWidth="1.4" opacity="0.7" />
      <ellipse cx="51" cy="46" rx="24" ry="5.5" fill="#c4a484" fillOpacity="0.72" stroke="none" />
      <path d="M80 54c12 2 16 14 14 24-2 9-9 12-16 10" strokeWidth="1.8" />
    </g>
  );
}

function Iced() {
  return (
    <g {...stroke}>
      <path d="M24 16h72l-8 112c-1 8-8 12-28 12s-27-4-28-12L24 16z" fill="currentColor" fillOpacity="0.08" strokeWidth="1.8" />
      <path d="M30 62h60l-6 64c-.8 6-6 9-24 9s-23-3-24-9L30 62z" fill="#8aa57c" fillOpacity="0.72" stroke="none" />
      <path d="M36 36h16l-4 14h-8z" strokeWidth="1.4" />
      <path d="M62 30h18l-5 16h-8z" strokeWidth="1.4" />
      <path d="M78 8 L68 132" strokeWidth="1.7" />
      <path d="M34 78h52M36 96h46" strokeWidth="1.2" opacity="0.45" />
    </g>
  );
}

function Latte() {
  return (
    <g {...stroke}>
      <path d="M30 18h60c3 34-2 52-6 86-2 14-10 22-24 22s-22-8-24-22c-4-34-9-52-6-86z" fill="currentColor" fillOpacity="0.08" strokeWidth="1.8" />
      <path d="M34 70h52c-2 28-6 44-10 52-3 8-8 12-16 12s-13-4-16-12c-4-8-8-24-10-52z" fill="#d7c2a4" fillOpacity="0.62" stroke="none" />
      <ellipse cx="60" cy="28" rx="26" ry="6" fill="#f4f0e6" fillOpacity="0.88" stroke="none" />
      <path d="M48 28c3 5 8 7 12 7s9-2 12-7" strokeWidth="1.4" />
      <path d="M56 27c2 2 4 2 6 0" strokeWidth="1.3" />
    </g>
  );
}

function Cappuccino() {
  return (
    <g {...stroke}>
      <path d="M18 48h70l-5 58c-1 12-10 18-30 18s-29-6-30-18L18 48z" fill="currentColor" fillOpacity="0.1" strokeWidth="1.8" />
      <path d="M24 70c14 6 32 6 48-2" strokeWidth="1.4" opacity="0.65" />
      <ellipse cx="53" cy="52" rx="30" ry="8" fill="#f4f0e6" fillOpacity="0.9" stroke="none" />
      <path d="M42 50c4 4 8 5 12 4 3 3 8 4 12 1" strokeWidth="1.4" />
      <path d="M88 62c14 1 18 16 12 26-5 8-12 8-16 4" strokeWidth="1.8" />
      <path d="M34 124h38" strokeWidth="1.6" />
    </g>
  );
}

function Espresso() {
  return (
    <g {...stroke}>
      <path d="M34 58h48l-3 36c-.6 8-7 12-21 12s-20-4-21-12l-3-36z" fill="currentColor" fillOpacity="0.1" strokeWidth="1.8" />
      <ellipse cx="58" cy="62" rx="20" ry="4.5" fill="#c4a574" fillOpacity="0.85" stroke="none" />
      <path d="M82 68c8 1 11 8 9 14s-7 7-11 5" strokeWidth="1.7" />
      <path d="M28 112h64" strokeWidth="1.6" />
      <path d="M36 112c2 6 8 8 22 8s20-2 22-8" strokeWidth="1.5" />
    </g>
  );
}

function Tumbler() {
  return (
    <g {...stroke}>
      <path d="M30 14h60l-6 118H36L30 14z" fill="currentColor" fillOpacity="0.08" strokeWidth="1.8" />
      <path d="M33 48h54l-5 78H38L33 48z" fill="#8d6b52" fillOpacity="0.7" stroke="none" />
      <path d="M40 28h14l-3 12h-8z" strokeWidth="1.4" />
      <path d="M64 24h16l-4 14h-8z" strokeWidth="1.4" />
      <path d="M36 70h48M38 96h44" strokeWidth="1.2" opacity="0.4" />
      <path d="M34 14h52" strokeWidth="1.8" />
    </g>
  );
}
