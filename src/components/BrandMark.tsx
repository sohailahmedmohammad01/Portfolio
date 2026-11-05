import { useId } from "react";

/**
 * MS monogram: a bold geometric M (upper left) and S (lower right), sliced by one diagonal stroke.
 * A mask cuts a hairline gap through both letters along the diagonal; the tapered slash sits inside that gap.
 */
export function BrandMark({ className = "" }: { className?: string }) {
  const mask = useId().replace(/:/g, "");
  return <svg className={"brand-mark " + className} viewBox="3 2 60 62" aria-hidden="true" focusable="false">
    <defs>
      <mask id={mask} maskUnits="userSpaceOnUse" x="0" y="0" width="66" height="66">
        <rect x="0" y="0" width="66" height="66" fill="#fff" />
        <line x1="9" y1="65.6" x2="63" y2="0.4" stroke="#000" strokeWidth="3.4" />
      </mask>
    </defs>
    <g mask={`url(#${mask})`}>
      <path className="brand-mark-m" d="M8 40V14h6l8 14 8-14h6v26h-6V25l-8 13.5L14 25v15z" />
      <path className="brand-mark-s" d="M53 35H36q-5 0-5 5.5T37 46h8q8 0 8 6t-8 6H30" fill="none" strokeWidth="5.6" />
    </g>
    <path className="brand-mark-slash" d="M12 62 39.1 30.7 60 4 37.7 29.5z" />
  </svg>;
}
