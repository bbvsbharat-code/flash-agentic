export const GLASS_KINDS = ["mug", "iced", "latte", "cappuccino", "espresso", "tumbler"] as const;

export type GlassKind = (typeof GLASS_KINDS)[number];

export type StartGlass = {
  id: string;
  kind: GlassKind;
  corner: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "left" | "right";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  size: number;
  tilt: number;
  dx: number;
  dy: number;
  spin: number;
  fromX: number;
  fromY: number;
  dur: number;
  delay: number;
  fade: number;
  edge?: boolean;
};

/** Cups sit in the corners and side edges, outside the title column. */
export const START_GLASSES: readonly StartGlass[] = [
  { id: "tl", kind: "mug", corner: "top-left", top: 4, left: 4, size: 108, tilt: -12, dx: 14, dy: 18, spin: 5, fromX: -48, fromY: -36, dur: 17, delay: 0.2, fade: 0.72 },
  { id: "tr", kind: "iced", corner: "top-right", top: 5, right: 4.5, size: 96, tilt: 11, dx: -16, dy: 14, spin: -4, fromX: 52, fromY: -40, dur: 19, delay: 1.1, fade: 0.68 },
  { id: "bl", kind: "latte", corner: "bottom-left", bottom: 6, left: 5, size: 112, tilt: 8, dx: 12, dy: -16, spin: 4, fromX: -44, fromY: 42, dur: 18, delay: 0.5, fade: 0.7 },
  { id: "br", kind: "cappuccino", corner: "bottom-right", bottom: 5, right: 4, size: 104, tilt: -9, dx: -14, dy: -18, spin: -5, fromX: 46, fromY: 40, dur: 16, delay: 1.6, fade: 0.7 },
  { id: "el", kind: "espresso", corner: "left", top: 44, left: 2.2, size: 72, tilt: -6, dx: 10, dy: -12, spin: 3, fromX: -36, fromY: 8, dur: 15, delay: 0.8, fade: 0.58, edge: true },
  { id: "er", kind: "tumbler", corner: "right", top: 40, right: 2.2, size: 84, tilt: 7, dx: -12, dy: 16, spin: -4, fromX: 40, fromY: -10, dur: 20, delay: 1.4, fade: 0.62, edge: true },
];

const CORNERS = ["top-left", "top-right", "bottom-left", "bottom-right"] as const;

export function glassesCoverCorners(glasses: readonly { corner: string }[]): boolean {
  return CORNERS.every((corner) => glasses.some((glass) => glass.corner === corner));
}

/** Anchor sits in the outer band, so it does not land on the title, hint, or Start button. */
export function glassStaysPeripheral(glass: Pick<StartGlass, "top" | "bottom" | "left" | "right">): boolean {
  const x = glass.left ?? (glass.right != null ? 100 - glass.right : 50);
  const y = glass.top ?? (glass.bottom != null ? 100 - glass.bottom : 50);
  return x <= 16 || x >= 84 || y <= 14 || y >= 86;
}
