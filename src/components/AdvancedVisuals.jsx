import React, { useState } from 'react'
import { M } from './MathTex'
import { Sliders, Code2, Network, Activity, AlertTriangle, CheckCircle2 } from 'lucide-react'

/* ========================================================================= */
/* 1. TAB 1: TƯƠNG TÁC ĐỒ THỊ GIAO DỊCH G_t -> MA TRẬN ĐẶC TRƯNG 4D X_t      */
/* ========================================================================= */
const SAMPLE_NODES = [
  { id: 'U1', label: 'U1', x: 95, y: 120, role: 'Trung tâm (Hub)' },
  { id: 'U2', label: 'U2', x: 245, y: 55, role: 'Giao dịch hai chiều' },
  { id: 'U3', label: 'U3', x: 255, y: 185, role: 'Chỉ nhận tiền' },
  { id: 'U4', label: 'U4', x: 405, y: 75, role: 'Trùng đặc trưng với U5' },
  { id: 'U5', label: 'U5', x: 405, y: 165, role: 'Trùng đặc trưng với U4' },
]

const SAMPLE_EDGES = [
  { from: 'U1', to: 'U2', w: 5 },
  { from: 'U1', to: 'U3', w: 3 },
  { from: 'U2', to: 'U1', w: 2 },
  { from: 'U2', to: 'U3', w: 4 },
  { from: 'U4', to: 'U2', w: 1 },
  { from: 'U5', to: 'U3', w: 1 },
]

function compute4D(nodeId) {
  const outE = SAMPLE_EDGES.filter((e) => e.from === nodeId)
  const inE = SAMPLE_EDGES.filter((e) => e.to === nodeId)
  return {
    wOut: outE.reduce((s, e) => s + e.w, 0),
    wIn: inE.reduce((s, e) => s + e.w, 0),
    degOut: outE.length,
    degIn: inE.length,
    outList: outE,
    inList: inE,
  }
}

export function GraphTo4DFeatureLab() {
  const [selected, setSelected] = useState('U1')
  const info = compute4D(selected)

  return (
    <div className="p-5 rounded-2xl bg-slate-50 border-2 border-blue-200 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
            <Network size={14} /> MÔ PHỎNG TƯƠNG TÁC 1.0 • TỪ ĐỒ THỊ GIAO DỊCH SANG MA TRẬN 4 CHIỀU
          </div>
          <h3 className="text-lg font-extrabold text-slate-900 mt-0.5">
            Cách chuyển ảnh chụp đồ thị ngày <M tex="G_t" /> thành ma trận đặc trưng nút <M tex="\mathbf{X}_t \in \mathbb{R}^{N_t \times 4}" />
          </h3>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {SAMPLE_NODES.map((n) => (
            <button
              key={n.id}
              onClick={() => setSelected(n.id)}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold border cursor-pointer transition ${
                selected === n.id
                  ? 'bg-blue-700 text-white border-blue-700'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-blue-50'
              }`}
            >
              Nút {n.id}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        {/* Left: Interactive Directed Weighted Graph */}
        <div className="lg:col-span-6 bg-white rounded-xl border border-slate-200 p-3">
          <div className="text-xs font-bold text-slate-600 mb-1 flex items-center justify-between">
            <span>Đồ thị giao dịch mẫu ngày <M tex="t" /> (bấm vào nút để kiểm tra)</span>
            <span className="flex items-center gap-3 text-[11px]">
              <span className="text-blue-700 font-bold">● Cạnh gửi ra</span>
              <span className="text-amber-600 font-bold">● Cạnh nhận vào</span>
            </span>
          </div>
          <svg viewBox="0 0 490 240" className="w-full h-auto">
            <defs>
              <marker id="g2f-gray" viewBox="0 0 10 10" refX="22" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M0 1 L10 5 L0 9 Z" fill="#94a3b8" />
              </marker>
              <marker id="g2f-blue" viewBox="0 0 10 10" refX="22" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M0 1 L10 5 L0 9 Z" fill="#1d4ed8" />
              </marker>
              <marker id="g2f-amber" viewBox="0 0 10 10" refX="22" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M0 1 L10 5 L0 9 Z" fill="#d97706" />
              </marker>
            </defs>

            {SAMPLE_EDGES.map((e, idx) => {
              const a = SAMPLE_NODES.find((n) => n.id === e.from)
              const b = SAMPLE_NODES.find((n) => n.id === e.to)
              const isOut = e.from === selected
              const isIn = e.to === selected
              // Curve slightly if bidirectional U1<->U2
              const curved = (e.from === 'U1' && e.to === 'U2') || (e.from === 'U2' && e.to === 'U1')
              const mx = (a.x + b.x) / 2
              const my = (a.y + b.y) / 2 + (e.from === 'U1' && e.to === 'U2' ? -22 : e.from === 'U2' && e.to === 'U1' ? 22 : 0)
              const stroke = isOut ? '#1d4ed8' : isIn ? '#d97706' : '#cbd5e1'
              const marker = isOut ? 'url(#g2f-blue)' : isIn ? 'url(#g2f-amber)' : 'url(#g2f-gray)'
              const d = curved ? `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}` : `M ${a.x} ${a.y} L ${b.x} ${b.y}`
              const lx = curved ? mx : (a.x + b.x) / 2
              const ly = curved ? (my + (a.y + b.y) / 2) / 2 : (a.y + b.y) / 2 - 8
              return (
                <g key={idx}>
                  <path d={d} fill="none" stroke={stroke} strokeWidth={isOut || isIn ? 2.6 : 1.5} markerEnd={marker} />
                  <rect x={lx - 11} y={ly - 9} width="22" height="16" rx="4" fill="#ffffff" stroke={stroke} strokeWidth="1" />
                  <text x={lx} y={ly + 3} textAnchor="middle" fontSize="10.5" fontWeight="700" fill={isOut ? '#1d4ed8' : isIn ? '#b45309' : '#64748b'}>
                    {e.w}
                  </text>
                </g>
              )
            })}

            {SAMPLE_NODES.map((n) => {
              const active = n.id === selected
              const isTie = n.id === 'U4' || n.id === 'U5'
              return (
                <g key={n.id} onClick={() => setSelected(n.id)} className="cursor-pointer">
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r={active ? 21 : 18}
                    fill={active ? '#1d4ed8' : isTie ? '#fff7ed' : '#f1f5f9'}
                    stroke={active ? '#1e3a8a' : isTie ? '#ea580c' : '#475569'}
                    strokeWidth={active ? 3 : 1.8}
                  />
                  <text x={n.x} y={n.y + 4} textAnchor="middle" fontSize="12" fontWeight="800" fill={active ? '#ffffff' : '#0f172a'}>
                    {n.label}
                  </text>
                </g>
              )
            })}
          </svg>
        </div>

        {/* Right: 4D Matrix + Formula Breakdown */}
        <div className="lg:col-span-6 space-y-3">
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-xs">
              <thead className="bg-slate-100 text-slate-800">
                <tr>
                  <th className="py-2 px-2.5 text-left">Nút</th>
                  <th className="py-2 px-2 text-right text-blue-800">Tổng gửi (<M tex="w^+" />)</th>
                  <th className="py-2 px-2 text-right text-amber-800">Tổng nhận (<M tex="w^-" />)</th>
                  <th className="py-2 px-2 text-right text-blue-800">Số gửi (<M tex="\deg^+" />)</th>
                  <th className="py-2 px-2 text-right text-amber-800">Số nhận (<M tex="\deg^-" />)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {SAMPLE_NODES.map((n) => {
                  const row = compute4D(n.id)
                  const active = n.id === selected
                  const isTie = n.id === 'U4' || n.id === 'U5'
                  return (
                    <tr
                      key={n.id}
                      onClick={() => setSelected(n.id)}
                      className={`cursor-pointer transition ${
                        active ? 'bg-blue-50 font-bold text-slate-900' : isTie ? 'bg-orange-50/50 hover:bg-orange-50' : 'hover:bg-slate-50'
                      }`}
                    >
                      <td className="py-2 px-2.5 font-bold">
                        {n.id} {isTie && <span className="ml-1 px-1.5 py-0.5 text-[10px] rounded bg-orange-100 text-orange-800">Trùng</span>}
                      </td>
                      <td className="py-2 px-2 text-right">{row.wOut}</td>
                      <td className="py-2 px-2 text-right">{row.wIn}</td>
                      <td className="py-2 px-2 text-right">{row.degOut}</td>
                      <td className="py-2 px-2 text-right">{row.degIn}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-blue-200 text-xs text-slate-800 space-y-1.5">
            <div className="font-extrabold text-blue-900">
              Diễn giải véc-tơ 4D của nút {selected}: <code className="px-1.5 py-0.5 rounded bg-blue-50 text-blue-800">[{info.wOut}, {info.wIn}, {info.degOut}, {info.degIn}]</code>
            </div>
            <p>
              • <strong className="text-blue-800">Gửi đi:</strong> {info.degOut} giao dịch ({info.outList.length ? info.outList.map((e) => `${e.from}→${e.to}: ${e.w}`).join(', ') : 'không có'}) ⇒ tổng gửi = <strong>{info.wOut}</strong>.<br />
              • <strong className="text-amber-700">Nhận vào:</strong> {info.degIn} giao dịch ({info.inList.length ? info.inList.map((e) => `${e.from}→${e.to}: ${e.w}`).join(', ') : 'không có'}) ⇒ tổng nhận = <strong>{info.wIn}</strong>.
            </p>
            <p className="text-orange-900 bg-orange-50 border border-orange-200 rounded-lg p-2">
              <strong>Lưu ý khái niệm Điểm trùng (Ties):</strong> Nút <strong>U4</strong> và <strong>U5</strong> gửi tới hai đích khác nhau nhưng cùng có véc-tơ <code>[1, 0, 1, 0]</code>. Trên MathOverflow và Reddit, tới <strong>88,8% – 96,2%</strong> số nút bị trùng đặc trưng như vậy!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ========================================================================= */
/* 2. TAB 2: MÔ PHỎNG MỆNH ĐỀ 1 & HIỆN TƯỢNG VỠ CỤM KHI h <= 10^-5          */
/* ========================================================================= */
const DEMO_PTS = [
  { id: 1, x: 115, y: 110, z: 0.22 },
  { id: 2, x: 152, y: 98, z: 0.25 },
  { id: 3, x: 145, y: 142, z: 0.27 },
  { id: 4, x: 325, y: 105, z: 0.72 },
  { id: 5, x: 365, y: 132, z: 0.76 },
]
// Cover boundary at x = 240 (gap between left cluster & right cluster)
const BOUNDARY_X = 240

export function Prop1AndCollapseLab() {
  const [epsPct, setEpsPct] = useState(1.0) // noise % (0 .. 3.0)
  const [hLevel, setHLevel] = useState(65) // visual radius scale (2 .. 90), where <= 8 simulates h <= 10^-5

  const deltaPx = epsPct * 26 // displacement in pixels
  const isTinyH = hLevel <= 10
  const effectiveRadius = isTinyH ? 6 : hLevel

  // Perturbed positions (deterministic directions so user sees smooth motion)
  const dirs = [
    [0.85, -0.5],
    [0.95, 0.3],
    [-0.6, 0.8],
    [-0.95, -0.25],
    [0.5, 0.85],
  ]

  const ptsPerturbed = DEMO_PTS.map((p, idx) => ({
    ...p,
    px: p.x + dirs[idx][0] * deltaPx,
    py: p.y + dirs[idx][1] * deltaPx,
  }))

  // Check boundary crossing: original side vs perturbed side relative to BOUNDARY_X
  const crossedBoundary = ptsPerturbed.some((p) => (p.x < BOUNDARY_X) !== (p.px < BOUNDARY_X))

  // Compute edges in original vs perturbed radius graph (same cover cell)
  const dist = (a, b, perturbed) => {
    const dx = (perturbed ? a.px : a.x) - (perturbed ? b.px : b.x)
    const dy = (perturbed ? a.py : a.y) - (perturbed ? b.py : b.y)
    return Math.hypot(dx, dy)
  }

  const origEdges = []
  const pertEdges = []
  for (let i = 0; i < ptsPerturbed.length; i++) {
    for (let j = i + 1; j < ptsPerturbed.length; j++) {
      const a = ptsPerturbed[i]
      const b = ptsPerturbed[j]
      const sameOrigCell = (a.x < BOUNDARY_X) === (b.x < BOUNDARY_X)
      const samePertCell = (a.px < BOUNDARY_X) === (b.px < BOUNDARY_X)
      if (sameOrigCell && dist(a, b, false) <= effectiveRadius) origEdges.push([i, j])
      if (samePertCell && dist(a, b, true) <= effectiveRadius) pertEdges.push([i, j])
    }
  }

  const edgesSame =
    origEdges.length === pertEdges.length &&
    origEdges.every(([i, j], k) => pertEdges[k][0] === i && pertEdges[k][1] === j)

  const prop1Holds = !crossedBoundary && edgesSame && origEdges.length > 0
  const collapsed = isTinyH && epsPct > 0.2

  const status = collapsed
    ? {
        bg: 'bg-red-50 border-red-300 text-red-900',
        title: 'Suy biến vỡ cụm do ngưỡng h quá nhỏ (h ≤ 10⁻⁵) — S ≈ 1,0000',
        desc: 'Vòng tròn bán kính h nhỏ hơn độ dịch do nhiễu 1% ⇒ mọi cạnh kết nối bị đứt sạch, các cụm vỡ thành điểm đơn lẻ (tái hiện đúng kết quả âm trên 5/9 tập token ở Bảng 5).',
      }
    : prop1Holds
      ? {
          bg: 'bg-emerald-50 border-emerald-300 text-emerald-900',
          title: 'Mệnh đề 1 thỏa mãn (Điều kiện đủ bất biến cục bộ) — S = 0,0000',
          desc: 'Mọi điểm giữ lề an toàn m_i > δ_i với biên phủ và không có cặp nào cắt ngang ngưỡng h ⇒ tập đỉnh, cạnh và đồ thị Mapper bất biến 100%.',
        }
      : {
          bg: 'bg-amber-50 border-amber-300 text-amber-900',
          title: 'Vượt ngưỡng Mệnh đề 1 (Đổi ô phủ hoặc đứt/thêm cạnh bán kính)',
          desc: crossedBoundary
            ? 'Nhiễu lớn đã đẩy ít nhất một điểm vượt qua biên ô phủ cố định (vi phạm m_i > δ_i) ⇒ cấu trúc cụm thay đổi.'
            : 'Khoảng cách giữa ít nhất một cặp điểm đã vượt qua ngưỡng bán kính h ⇒ đồ thị bán kính đổi cạnh.',
        }

  return (
    <div className="p-5 rounded-2xl bg-slate-50 border-2 border-indigo-200 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-700">
            <Sliders size={14} /> MÔ PHỎNG TƯƠNG TÁC 2.2 • MỆNH ĐỀ 1 &amp; ĐIỀU KIỆN BIÊN h ≤ 10⁻⁵
          </div>
          <h3 className="text-lg font-extrabold text-slate-900 mt-0.5">
            Khi nào đồ thị Mapper bất biến (<M tex="S=0" />) và khi nào bị vỡ cụm (<M tex="S\approx 1" />)?
          </h3>
        </div>
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => { setEpsPct(0.8); setHLevel(65) }}
            className="px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-300 hover:bg-emerald-200 cursor-pointer"
          >
            Chế độ ổn định (Mệnh đề 1)
          </button>
          <button
            onClick={() => { setEpsPct(1.0); setHLevel(6) }}
            className="px-2.5 py-1 rounded-lg text-xs font-bold bg-red-100 text-red-900 border border-red-300 hover:bg-red-200 cursor-pointer"
          >
            Vỡ cụm h ≤ 10⁻⁵ (5 tập token)
          </button>
          <button
            onClick={() => { setEpsPct(2.8); setHLevel(65) }}
            className="px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200 cursor-pointer"
          >
            Nhiễu lớn vượt biên
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-3.5 rounded-xl border border-slate-200 text-xs">
        <div className="space-y-1">
          <div className="flex justify-between font-bold text-slate-800">
            <span>Cường độ nhiễu đặc trưng (<M tex="\varepsilon" />)</span>
            <span className="text-blue-700">{epsPct.toFixed(1)}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="3.0"
            step="0.1"
            value={epsPct}
            onChange={(e) => setEpsPct(parseFloat(e.target.value))}
            className="w-full accent-blue-700"
          />
        </div>
        <div className="space-y-1">
          <div className="flex justify-between font-bold text-slate-800">
            <span>Ngưỡng bán kính gom cụm (<M tex="h" />)</span>
            <span className={isTinyH ? 'text-red-700' : 'text-emerald-700'}>
              {isTinyH ? 'h ≤ 10⁻⁵ (quá nhỏ!)' : `h = ${(hLevel / 400).toFixed(3)} (hợp lý)`}
            </span>
          </div>
          <input
            type="range"
            min="4"
            max="85"
            step="1"
            value={hLevel}
            onChange={(e) => setHLevel(parseInt(e.target.value, 10))}
            className="w-full accent-emerald-700"
          />
        </div>
      </div>

      {/* Visual Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-3">
          <svg viewBox="0 0 480 220" className="w-full h-auto">
            {/* Two cover cells */}
            <rect x="14" y="16" width={BOUNDARY_X - 18} height="188" rx="8" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1.2" />
            <rect x={BOUNDARY_X + 4} y="16" width={466 - BOUNDARY_X - 4} height="188" rx="8" fill="#f0fdf4" stroke="#86efac" strokeWidth="1.2" />
            <line x1={BOUNDARY_X} y1="12" x2={BOUNDARY_X} y2="208" stroke="#0f172a" strokeWidth="2" strokeDasharray="5,4" />
            <text x={BOUNDARY_X} y="10" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0f172a">Biên phủ cố định (đặt trong khe trống)</text>
            <text x="26" y="34" fontSize="10.5" fontWeight="700" fill="#1d4ed8">Ô phủ C₁</text>
            <text x={BOUNDARY_X + 16} y="34" fontSize="10.5" fontWeight="700" fill="#047857">Ô phủ C₂</text>

            {/* Perturbed radius circles */}
            {ptsPerturbed.map((p) => (
              <circle
                key={`rad-${p.id}`}
                cx={p.px}
                cy={p.py}
                r={effectiveRadius / 2}
                fill={isTinyH ? '#fee2e2' : '#dbeafe'}
                fillOpacity="0.35"
                stroke={isTinyH ? '#dc2626' : '#3b82f6'}
                strokeWidth="1"
                strokeDasharray="3,2"
              />
            ))}

            {/* Perturbed edges */}
            {pertEdges.map(([i, j], k) => (
              <line
                key={`pe-${k}`}
                x1={ptsPerturbed[i].px}
                y1={ptsPerturbed[i].py}
                x2={ptsPerturbed[j].px}
                y2={ptsPerturbed[j].py}
                stroke="#047857"
                strokeWidth="2.5"
              />
            ))}

            {/* Displacement arrows & points */}
            {ptsPerturbed.map((p) => (
              <g key={`pt-${p.id}`}>
                <circle cx={p.x} cy={p.y} r="4.5" fill="none" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="2,2" />
                {epsPct > 0 && (
                  <line x1={p.x} y1={p.y} x2={p.px} y2={p.py} stroke="#ef4444" strokeWidth="1.4" />
                )}
                <circle cx={p.px} cy={p.py} r="6" fill={isTinyH ? '#dc2626' : '#1d4ed8'} stroke="#ffffff" strokeWidth="1.5" />
                <text x={p.px + 9} y={p.py + 3} fontSize="10" fontWeight="700" fill="#0f172a">P{p.id}</text>
              </g>
            ))}
          </svg>
        </div>

        {/* Status Card */}
        <div className="lg:col-span-5 space-y-3">
          <div className={`p-4 rounded-xl border-2 space-y-2 ${status.bg}`}>
            <div className="flex items-start gap-2 font-extrabold text-sm">
              {prop1Holds ? <CheckCircle2 size={18} className="shrink-0 mt-0.5" /> : <AlertTriangle size={18} className="shrink-0 mt-0.5" />}
              <span>{status.title}</span>
            </div>
            <p className="text-xs leading-relaxed">{status.desc}</p>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 space-y-1">
            <div>• Số cạnh đồ thị bán kính ban đầu: <strong>{origEdges.length}</strong></div>
            <div>• Số cạnh sau khi thêm nhiễu {epsPct.toFixed(1)}%: <strong>{pertEdges.length}</strong></div>
            <div>• Điểm vượt biên phủ cố định: <strong className={crossedBoundary ? 'text-red-700' : 'text-emerald-700'}>{crossedBoundary ? 'Có (vi phạm m_i > δ_i)' : 'Không (m_i > δ_i thỏa mãn)'}</strong></div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ========================================================================= */
/* 3. TAB 2: MÃ GIẢ CHUẨN HỌC THUẬT (APts-Fit & APts-Transform)              */
/* ========================================================================= */
export function APtsPseudocodeSection() {
  const [algoTab, setAlgoTab] = useState('fit')

  return (
    <div className="p-5 rounded-2xl bg-slate-50 border-2 border-slate-300 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700">
            <Code2 size={14} /> ĐẶC TẢ THUẬT TOÁN HÌNH THỨC (ĐỒNG BỘ MỤC 2.2.5 ĐỀ CƯƠNG PDF)
          </div>
          <h3 className="text-lg font-extrabold text-slate-900 mt-0.5">
            Mã giả hai pha <code>APts-Fit</code> (ước lượng 1 lần) và <code>APts-Transform</code> (biến đổi hằng ngày)
          </h3>
        </div>
        <div className="flex gap-1.5">
          <button
            onClick={() => setAlgoTab('fit')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold border cursor-pointer transition ${
              algoTab === 'fit' ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-slate-700 border-slate-300 hover:bg-blue-50'
            }`}
          >
            Thuật toán 1: APts-Fit (Quá khứ)
          </button>
          <button
            onClick={() => setAlgoTab('transform')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold border cursor-pointer transition ${
              algoTab === 'transform' ? 'bg-emerald-700 text-white border-emerald-700' : 'bg-white text-slate-700 border-slate-300 hover:bg-emerald-50'
            }`}
          >
            Thuật toán 2: APts-Transform (Ngày mới)
          </button>
        </div>
      </div>

      {algoTab === 'fit' ? (
        <div className="bg-white rounded-xl border border-blue-200 p-4 text-xs font-mono text-slate-800 space-y-2">
          <div className="font-sans border-b border-slate-200 pb-2 space-y-1">
            <div className="font-extrabold text-sm text-blue-900">Thuật toán 1. APts-Fit — Ước lượng trạng thái neo trên dữ liệu quá khứ (t ≤ t₀)</div>
            <div><strong>Đầu vào:</strong> Chuỗi đồ thị tham chiếu {'{'}G_t{'}'}_(t ≤ t₀); tham số (k, n, p, δ, q_h); giới hạn mẫu M_max; hạt giống ω.</div>
            <div><strong>Đầu ra:</strong> Trạng thái khóa Θ = (co giãn trọng số, ℓ, u, b, μ, W, 𝒞, h) hoặc cờ NOT_APPLICABLE.</div>
          </div>
          <ol className="space-y-1 list-decimal pl-5 leading-relaxed">
            <li>Ước lượng phép co giãn trọng số cạnh <strong>chỉ từ</strong> {'{'}G_t{'}'}_(t ≤ t₀) và áp dụng cho giai đoạn tham chiếu.</li>
            <li>Trích đặc trưng nút X_t ∈ ℝ^(N_t × 4) cho mọi t ≤ t₀; gộp thành ma trận X_dev.</li>
            <li><strong>if</strong> X_dev rỗng hoặc chứa giá trị không hữu hạn/âm <strong>then return</strong> NOT_APPLICABLE.</li>
            <li className="text-blue-900"><strong>[A]</strong> Tính ℓ_j, u_j, b_j của log(1 + X_dev) theo từng tọa độ j; tính Z_dev = clip((log(1 + X_dev) − ℓ) / b, 0, 1).</li>
            <li className="text-blue-900"><strong>[P]</strong> Ước lượng PCA k chiều trên Z_dev để thu tâm μ và ma trận trực chuẩn W; tính L_dev = (Z_dev − μ)Wᵀ.</li>
            <li className="text-indigo-900"><strong>[t] for</strong> từng trục lọc j = 1, ..., k <strong>do</strong></li>
            <li className="pl-4 text-indigo-900">Sắp các giá trị phân biệt v₁ &lt; ... &lt; v_m trên trục j của L_dev và tính hàm phân phối thực nghiệm F̂(v_a).</li>
            <li className="pl-4 text-indigo-900">Với mỗi biên danh nghĩa q ∈ (0, 1), tìm khe trống lớn nhất a* trong cửa sổ |F̂(v_a) − q| ≤ δ và đặt biên tại (v_(a*) + v_(a*+1)) / 2; mở hai biên ngoài cùng ra ±∞.</li>
            <li className="text-indigo-900">Dựng họ ô tích Descartes 𝒞 = {'{'}C_a{'}'} từ k trục.</li>
            <li className="text-emerald-900"><strong>[s]</strong> Lấy tập véc-tơ phân biệt U ⊆ Z_dev; nếu |U| &gt; M_max lấy mẫu không hoàn lại U&apos; theo hạt giống ω.</li>
            <li className="text-emerald-900">Tính khoảng cách 1-NN ρ(z) cho mọi z ∈ U&apos; và đặt h = Q_(q_h)({'{'}ρ(z){'}'}).</li>
            <li><strong>if</strong> h không hữu hạn hoặc |U&apos;| &lt; 2 <strong>then return</strong> NOT_APPLICABLE.</li>
            <li><strong>return</strong> Θ = (co giãn trọng số, ℓ, u, b, μ, W, 𝒞, h).</li>
          </ol>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-emerald-200 p-4 text-xs font-mono text-slate-800 space-y-2">
          <div className="font-sans border-b border-slate-200 pb-2 space-y-1">
            <div className="font-extrabold text-sm text-emerald-900">Thuật toán 2. APts-Transform — Biến đổi một ngày mới (t &gt; t₀) không ước lượng lại</div>
            <div><strong>Đầu vào:</strong> Ảnh chụp đồ thị G_t = (V_t, E_t, w_t); trạng thái tham số đã khóa Θ.</div>
            <div><strong>Đầu ra:</strong> Đồ thị Mapper M_t = (𝒱_t^M, ℰ_t^M) và bản ghi chẩn đoán suy biến 𝒟_t.</div>
          </div>
          <ol className="space-y-1 list-decimal pl-5 leading-relaxed">
            <li>Áp dụng phép co giãn trọng số đã lưu trong Θ lên w_t; trích ma trận đặc trưng nút X_t ∈ ℝ^(N_t × 4).</li>
            <li className="text-blue-900"><strong>[A]</strong> Tính Z_t = s(X_t) bằng (ℓ, u, b) cố định; ghi nhận tỷ lệ tọa độ bị cắt ở biên [0, 1].</li>
            <li className="text-blue-900"><strong>[P]</strong> Chiếu hàm lọc tuyến tính L_t = (Z_t − μ)Wᵀ (tuyệt đối không ước lượng lại μ, W).</li>
            <li>Khởi tạo tập đỉnh Mapper 𝒱_t^M ← ∅.</li>
            <li className="text-indigo-900"><strong>[t] for</strong> mỗi ô cố định C_a ∈ 𝒞 <strong>do</strong></li>
            <li className="pl-4 text-indigo-900">Lấy tập chỉ số nút I_a = {'{'}i ∈ V_t : L_t[i] ∈ C_a{'}'}; <strong>if</strong> I_a = ∅ <strong>then continue</strong>.</li>
            <li className="pl-4 text-emerald-900"><strong>[s]</strong> Dựng đồ thị bán kính H_a trên I_a, nối cặp (i, j) nếu ‖Z_t[i] − Z_t[j]‖₂ ≤ h.</li>
            <li className="pl-4 text-emerald-900">Tìm các thành phần liên thông của H_a; thêm mỗi thành phần (kể cả cụm 1 điểm) vào 𝒱_t^M.</li>
            <li>Dựng tập cạnh ℰ_t^M = {'{'}(c, c&apos;) ⊂ 𝒱_t^M : c ∩ c&apos; ≠ ∅{'}'} với trọng số |c ∩ c&apos;|.</li>
            <li>Tính bản ghi chẩn đoán 𝒟_t (số nút |V_t|, số cụm |𝒱_t^M|, số cạnh |ℰ_t^M|, tỷ lệ cụm 1 điểm, tỷ lệ bị cắt).</li>
            <li><strong>return</strong> (M_t, 𝒟_t).</li>
          </ol>
        </div>
      )}
    </div>
  )
}

/* ========================================================================= */
/* 4. TAB 3: ĐỐI CHỨNG DƯƠNG (REWIRE HUB) & CỬA SỔ 5 NGÀY HỒI CỨU            */
/* ========================================================================= */
const REWIRE_LEVELS = [
  { pct: 0, label: '0% (Gốc)', sMed: '0,0000', desc: 'Mạng cân bằng bình thường, chưa có can thiệp tập trung cạnh.' },
  { pct: 5, label: '5%', sMed: '0,0118', desc: '5% cạnh được chuyển hướng về nút trung tâm (Hub) — APts bắt đầu ghi nhận dịch chuyển.' },
  { pct: 10, label: '10%', sMed: '0,0325', desc: '10% cạnh dồn về Hub — bậc và tổng giao dịch của Hub tăng mạnh, độ bất ổn S tăng rõ rệt.' },
  { pct: 20, label: '20%', sMed: '0,0738', desc: '20% cạnh tập trung vào Hub — cấu trúc đồ thị Mapper biến đổi mạnh (tăng đơn điệu trên 9/9 tập).' },
]

export function SensitivityAndWindowVisual() {
  const [rewIdx, setRewIdx] = useState(2)
  const cur = REWIRE_LEVELS[rewIdx]

  // 6 outer nodes + 1 central hub
  const hub = { x: 160, y: 105 }
  const outer = [
    { id: '1', x: 65, y: 45 },
    { id: '2', x: 160, y: 28 },
    { id: '3', x: 255, y: 45 },
    { id: '4', x: 265, y: 155 },
    { id: '5', x: 160, y: 182 },
    { id: '6', x: 55, y: 155 },
  ]
  const ringEdges = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0]]
  const rewiredCount = rewIdx === 0 ? 0 : rewIdx === 1 ? 2 : rewIdx === 2 ? 4 : 6

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {/* Left: Rewire Hub Interactive Visual */}
      <div className="p-5 rounded-2xl bg-slate-50 border-2 border-emerald-200 space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700">
          <Activity size={14} /> TRỰC QUAN HÓA ĐỐI CHỨNG DƯƠNG (REWIRE HUB)
        </div>
        <h4 className="text-base font-extrabold text-slate-900">
          Kiểm tra APts không bị &ldquo;trơ&rdquo;: kéo mức gom cạnh về nút trung tâm
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {REWIRE_LEVELS.map((lv, idx) => (
            <button
              key={lv.pct}
              onClick={() => setRewIdx(idx)}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold border cursor-pointer transition ${
                rewIdx === idx
                  ? 'bg-emerald-700 text-white border-emerald-700'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-emerald-50'
              }`}
            >
              Rewire {lv.label}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-3">
          <svg viewBox="0 0 320 210" className="w-full h-auto max-h-[210px]">
            {/* Ring edges that haven't been rewired */}
            {ringEdges.map(([i, j], idx) => {
              const isRewired = idx < rewiredCount
              if (isRewired) {
                return (
                  <line
                    key={`rw-${idx}`}
                    x1={outer[i].x}
                    y1={outer[i].y}
                    x2={hub.x}
                    y2={hub.y}
                    stroke="#dc2626"
                    strokeWidth="2.4"
                  />
                )
              }
              return (
                <line
                  key={`rg-${idx}`}
                  x1={outer[i].x}
                  y1={outer[i].y}
                  x2={outer[j].x}
                  y2={outer[j].y}
                  stroke="#94a3b8"
                  strokeWidth="1.6"
                />
              )
            })}
            {/* Hub node */}
            <circle cx={hub.x} cy={hub.y} r={14 + rewIdx * 3.5} fill={rewIdx > 0 ? '#dc2626' : '#64748b'} stroke="#ffffff" strokeWidth="2" />
            <text x={hub.x} y={hub.y + 4} textAnchor="middle" fontSize="10" fontWeight="800" fill="#ffffff">HUB</text>
            {/* Outer nodes */}
            {outer.map((n) => (
              <g key={n.id}>
                <circle cx={n.x} cy={n.y} r="11" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.8" />
                <text x={n.x} y={n.y + 3.5} textAnchor="middle" fontSize="10" fontWeight="700" fill="#1e3a8a">N{n.id}</text>
              </g>
            ))}
          </svg>
        </div>

        <div className="p-3 rounded-xl bg-white border border-emerald-200 text-xs text-slate-700 space-y-1">
          <div className="font-bold text-emerald-900">
            Mức Rewire {cur.label} → Trung vị độ bất ổn APts (minh họa 9 tập): <span className="text-red-700">S ≈ {cur.sMed}</span>
          </div>
          <p>{cur.desc}</p>
        </div>
      </div>

      {/* Right: Retrospective 5-Day Sliding Window SVG */}
      <div className="p-5 rounded-2xl bg-slate-50 border-2 border-indigo-200 space-y-3 flex flex-col justify-between">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-700">
            <Activity size={14} /> CƠ CHẾ PHÁT HIỆN ĐIỂM CHUYỂN HỒI CỨU
          </div>
          <h4 className="text-base font-extrabold text-slate-900">
            So sánh trung bình 2 cửa sổ 5 ngày liên tiếp quanh mốc <M tex="t" />
          </h4>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-3">
          <svg viewBox="0 0 420 205" className="w-full h-auto">
            {/* Timeline axis */}
            <line x1="20" y1="150" x2="400" y2="150" stroke="#64748b" strokeWidth="1.8" />
            {/* Left window [t-5 .. t-1] */}
            <rect x="35" y="45" width="165" height="92" rx="8" fill="#dbeafe" fillOpacity="0.6" stroke="#2563eb" strokeWidth="1.8" />
            <text x="117" y="64" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1e40af">Cửa sổ TRƯỚC (5 ngày)</text>
            <text x="117" y="80" textAnchor="middle" fontSize="10" fill="#1e3a8a">[t−5, t−4, t−3, t−2, t−1]</text>
            {/* Signal bars left (low regime) */}
            {[55, 85, 115, 145, 175].map((bx, i) => (
              <rect key={`bl-${i}`} x={bx} y={114 - (i % 2) * 6} width="14" height={23 + (i % 2) * 6} rx="2" fill="#2563eb" />
            ))}
            <line x1="42" y1="111" x2="195" y2="111" stroke="#1e3a8a" strokeWidth="1.8" strokeDasharray="4,3" />
            <text x="117" y="104" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#1e3a8a">Trung bình μ_trước</text>

            {/* Right window [t .. t+4] */}
            <rect x="212" y="25" width="170" height="112" rx="8" fill="#fef3c7" fillOpacity="0.7" stroke="#d97706" strokeWidth="1.8" />
            <text x="297" y="44" textAnchor="middle" fontSize="11" fontWeight="800" fill="#92400e">Cửa sổ SAU (5 ngày)</text>
            <text x="297" y="60" textAnchor="middle" fontSize="10" fill="#78350f">[t, t+1, t+2, t+3, t+4]</text>
            {/* Signal bars right (high regime) */}
            {[226, 256, 286, 316, 346].map((bx, i) => (
              <rect key={`br-${i}`} x={bx} y={78 + (i % 2) * 7} width="14" height={59 - (i % 2) * 7} rx="2" fill="#d97706" />
            ))}
            <line x1="220" y1="81" x2="374" y2="81" stroke="#92400e" strokeWidth="1.8" strokeDasharray="4,3" />
            <text x="297" y="74" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#92400e">Trung bình μ_sau</text>

            {/* Cutoff t marker */}
            <line x1="206" y1="18" x2="206" y2="164" stroke="#dc2626" strokeWidth="2.2" strokeDasharray="4,3" />
            <rect x="190" y="166" width="32" height="18" rx="4" fill="#fef2f2" stroke="#dc2626" strokeWidth="1.2" />
            <text x="206" y="179" textAnchor="middle" fontSize="10" fontWeight="800" fill="#b91c1c">t</text>

            {/* Score formula */}
            <text x="210" y="199" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#0f172a">
              Điểm đổi trạng thái(t) = ‖ μ_sau(t) − μ_trước(t) ‖₂  (không cần học tham số)
            </text>
          </svg>
        </div>

        <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 leading-relaxed">
          <strong>Tại sao gọi là phát hiện hồi cứu (Retrospective)?</strong> Vì tại ngày <M tex="t" />, công thức cần nhìn thấy trước dữ liệu của 4 ngày sau đó (<M tex="t+1 \dots t+4" />). Do đó, AUC phát hiện điểm chuyển (<code>APts = 0,69</code> vs <code>GraphPulse = 0,47</code>) <strong>không được diễn giải</strong> là khả năng dự báo tương lai.
        </div>
      </div>
    </div>
  )
}
