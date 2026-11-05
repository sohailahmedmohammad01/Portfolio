import { useEffect, useId, useRef, useState, type CSSProperties } from "react";

export type FlowNode = {
  id: string;
  x: number;
  y: number;
  label: string;
  sub?: string;
  /** start: filled accent · end: outlined accent (outcome / human step) · ai: tinted */
  kind?: "start" | "end" | "ai";
  w?: number;
};

export type FlowEdge = {
  from: string;
  to: string;
  dashed?: boolean;
  label?: string;
  /** h: side to side (default) · v: top/bottom · below/above: looping curve under or over the row */
  route?: "h" | "v" | "below" | "above";
  depth?: number;
};

export type FlowSpec = {
  width: number;
  height: number;
  nodes: FlowNode[];
  edges: FlowEdge[];
  lanes?: { y: number; label: string }[];
  ariaLabel: string;
};

const NODE_W = 124;
const NODE_H = 46;

function edgeGeometry(a: FlowNode, b: FlowNode, edge: FlowEdge) {
  const aw = (a.w ?? NODE_W) / 2, bw = (b.w ?? NODE_W) / 2, h = NODE_H / 2;
  const route = edge.route ?? "h";
  if (route === "v") {
    const down = b.y > a.y;
    const y1 = a.y + (down ? h : -h), y2 = b.y + (down ? -h : h), my = (y1 + y2) / 2;
    return { d: `M${a.x},${y1} C${a.x},${my} ${b.x},${my} ${b.x},${y2}`, lx: (a.x + b.x) / 2 + 10, ly: my, anchor: "start" as const };
  }
  if (route === "below" || route === "above") {
    const sign = route === "below" ? 1 : -1, depth = (edge.depth ?? 70) * sign;
    const y1 = a.y + h * sign, y2 = b.y + h * sign;
    const edgeY = sign > 0 ? Math.max(y1, y2) : Math.min(y1, y2);
    return { d: `M${a.x},${y1} C${a.x},${y1 + depth} ${b.x},${y2 + depth} ${b.x},${y2}`, lx: (a.x + b.x) / 2, ly: edgeY + depth * 0.75 + sign * 14, anchor: "middle" as const };
  }
  const right = b.x > a.x;
  const x1 = a.x + (right ? aw : -aw), x2 = b.x + (right ? -bw : bw), mx = (x1 + x2) / 2;
  return { d: `M${x1},${a.y} C${mx},${a.y} ${mx},${b.y} ${x2},${b.y}`, lx: mx, ly: Math.min(a.y, b.y) - 8, anchor: "middle" as const };
}

export function FlowDiagram({ spec, tone = "dark", className = "" }: { spec: FlowSpec; tone?: "dark" | "light"; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);
  const markerId = useId().replace(/:/g, "");
  const byId = new Map(spec.nodes.map((node) => [node.id, node]));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { setDrawn(true); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setDrawn(true); observer.disconnect(); }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`flow flow-${tone}${drawn ? " is-drawn" : ""} ${className}`}>
    <div className="flow-scroll">
      <svg viewBox={`0 0 ${spec.width} ${spec.height}`} role="img" aria-label={spec.ariaLabel} style={{ maxWidth: spec.width * 1.18, minWidth: Math.round(spec.width * 0.75) }}>
        <defs>
          <marker id={markerId} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M1,1 L7,4 L1,7" className="flow-arrow" />
          </marker>
        </defs>
        {spec.lanes?.map((lane) => <text key={lane.label} className="flow-lane" x="8" y={lane.y}>{lane.label}</text>)}
        <g>{spec.edges.map((edge, i) => {
          const a = byId.get(edge.from), b = byId.get(edge.to);
          if (!a || !b) return null;
          const g = edgeGeometry(a, b, edge);
          return <g key={`${edge.from}-${edge.to}`} style={{ "--i": i } as CSSProperties}>
            <path d={g.d} pathLength={edge.dashed ? undefined : 1} className={"flow-edge" + (edge.dashed ? " flow-edge-dashed" : "")} markerEnd={`url(#${markerId})`} />
            {edge.label && <text className="flow-edge-label" x={g.lx} y={g.ly} textAnchor={g.anchor}>{edge.label}</text>}
          </g>;
        })}</g>
        <g>{spec.nodes.map((node, i) => {
          const w = node.w ?? NODE_W;
          return <g key={node.id} className={"flow-node" + (node.kind ? ` flow-node-${node.kind}` : "")} transform={`translate(${node.x},${node.y})`} style={{ "--i": i } as CSSProperties}>
            <rect x={-w / 2} y={-NODE_H / 2} width={w} height={NODE_H} rx="11" />
            <text className="flow-label" y={node.sub ? -3 : 4} textAnchor="middle">{node.label}</text>
            {node.sub && <text className="flow-sub" y="12" textAnchor="middle">{node.sub}</text>}
          </g>;
        })}</g>
      </svg>
    </div>
    <span className="flow-hint" aria-hidden="true">SWIPE TO EXPLORE →</span>
  </div>;
}
