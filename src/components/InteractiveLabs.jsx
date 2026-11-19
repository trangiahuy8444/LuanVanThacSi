import React, { useState } from 'react'
import { M } from './MathTex'

const WB_POINTS = [
  { x: 0.22, y: 0.25 }, { x: 0.28, y: 0.32 }, { x: 0.45, y: 0.28 },
  { x: 0.55, y: 0.30 }, { x: 0.75, y: 0.24 }, { x: 0.80, y: 0.34 },
  { x: 0.24, y: 0.72 }, { x: 0.32, y: 0.78 }, { x: 0.46, y: 0.74 },
  { x: 0.54, y: 0.70 }, { x: 0.74, y: 0.75 }, { x: 0.82, y: 0.68 },
]

export function MapperWorkbenchLab() {
  const [step, setStep] = useState(4)
  const [overlap, setOverlap] = useState(0.4)

  const i1End = 0.5 + overlap * 0.45
  const i2Start = 0.5 - overlap * 0.45
  const hasEdge = step === 4 && overlap >= 0.15
  const clusterSize = overlap >= 0.1 ? 4 : 3
  const numEdges = hasEdge ? 2 : 0

  const pad = 20
  const W = 380
  const H = 220

  return (
    <div className="rounded-2xl border-2 border-blue-400 bg-white overflow-hidden shadow-sm">
      <div className="bg-blue-50/80 border-b border-slate-200 px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-xs font-bold uppercase text-blue-800">MÔ PHỎNG TƯƠNG TÁC 1.1 • BÀN THÍ NGHIỆM 4 BƯỚC MAPPER &amp; ĐỘ CHỒNG LẤN (OVERLAP)</div>
          <div className="font-bold text-slate-900 text-base">Bấm từng bước và kéo thanh Overlap về 0 để tự kiểm chứng câu hỏi phản biện</div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[1, 2, 3, 4].map((s) => (
            <button
              key={s}
              onClick={() => setStep(s)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition cursor-pointer ${
                step === s ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-slate-800 border-slate-300 hover:bg-blue-50'
              }`}
            >
              {s === 1 ? '1. Chiếu 2D' : s === 2 ? '2. Phủ 2×2' : s === 3 ? '3. Gom cụm' : '4. Nối cạnh & 5D'}
            </button>
          ))}
        </div>
      </div>

      <div className="p-5 space-y-4">
        <div className="flex flex-wrap items-center gap-4 bg-slate-50 p-3 rounded-xl border border-slate-200">
          <span className="text-sm font-bold text-slate-800">
            Độ chồng lấn <M tex="p" />:
          </span>
          <input
            type="range"
            min="0"
            max="0.5"
            step="0.05"
            value={overlap}
            onChange={(e) => setOverlap(parseFloat(e.target.value))}
            className="w-56 accent-blue-700 cursor-pointer"
          />
          <span className="font-mono font-extrabold text-blue-800 text-sm">
            {overlap.toFixed(2)} ({Math.round(overlap * 100)}%)
          </span>
          <span className="text-xs text-slate-600">(Thử kéo về <strong>0,00</strong> để thấy toàn bộ cạnh xanh lá biến mất!)</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="border border-slate-300 rounded-xl p-3 bg-white">
            <div className="text-xs font-bold text-slate-700 mb-2">Mặt phẳng hàm lọc 2D &amp; Lưới phủ Cover (2×2)</div>
            <svg viewBox="0 0 420 260" className="w-full h-auto block">
              {step >= 2 && overlap > 0 && (
                <g fill="rgba(16, 185, 129, 0.14)">
                  <rect x={pad + i2Start * W} y={pad} width={(i1End - i2Start) * W} height={H} />
                  <rect x={pad} y={pad + i2Start * H} width={W} height={(i1End - i2Start) * H} />
                </g>
              )}
              {step >= 2 && (
                <g fill="none" strokeWidth="2">
                  <rect x={pad} y={pad} width={i1End * W} height={i1End * H} stroke="#1d4ed8" />
                  <rect x={pad + i2Start * W} y={pad} width={(1 - i2Start) * W} height={i1End * H} stroke="#d97706" />
                  <rect x={pad} y={pad + i2Start * H} width={i1End * W} height={(1 - i2Start) * H} stroke="#047857" />
                  <rect x={pad + i2Start * W} y={pad + i2Start * H} width={(1 - i2Start) * W} height={(1 - i2Start) * H} stroke="#7c3aed" />
                </g>
              )}
              {WB_POINTS.map((pt, idx) => {
                const inX = pt.x <= i1End && pt.x >= i2Start
                const inY = pt.y <= i1End && pt.y >= i2Start
                const shared = step >= 2 && (inX || inY)
                const cx = pad + pt.x * W
                const cy = pad + pt.y * H
                return (
                  <g key={idx}>
                    {step >= 3 && <circle cx={cx} cy={cy} r="13" fill="rgba(29, 78, 216, 0.12)" />}
                    <circle cx={cx} cy={cy} r={shared ? 7 : 5.5} fill={shared ? '#047857' : '#0f172a'} />
                  </g>
                )
              })}
            </svg>
          </div>

          <div className="border border-slate-300 rounded-xl p-3 bg-white">
            <div className="text-xs font-bold text-slate-700 mb-2">Đồ thị Mapper đầu ra (Nerve) &amp; Vector 5 đặc trưng (5D)</div>
            <svg viewBox="0 0 460 260" className="w-full h-auto block">
              {step < 3 ? (
                <text x="230" y="130" fontSize="12" fontWeight="700" fill="#64748b" textAnchor="middle">
                  Bấm sang Bước 3 &amp; Bước 4 để dựng Cụm và Cạnh Mapper
                </text>
              ) : (
                <>
                  {hasEdge && (
                    <g stroke="#047857" strokeWidth="4">
                      <line x1="88" y1="80" x2="215" y2="80" />
                      <line x1="88" y1="180" x2="215" y2="180" />
                    </g>
                  )}
                  {[
                    { x: 88, y: 80, lbl: 'Cụm Ô 0', col: '#1d4ed8' },
                    { x: 215, y: 80, lbl: 'Cụm Ô 1', col: '#d97706' },
                    { x: 88, y: 180, lbl: 'Cụm Ô 2', col: '#047857' },
                    { x: 215, y: 180, lbl: 'Cụm Ô 3', col: '#7c3aed' },
                  ].map((n, i) => (
                    <g key={i}>
                      <circle cx={n.x} cy={n.y} r="22" fill={n.col} />
                      <text x={n.x} y={n.y + 4} fontSize="11" fontWeight="bold" fill="#fff" textAnchor="middle" fontFamily="monospace">
                        {clusterSize} nút
                      </text>
                      <text x={n.x} y={n.y + 38} fontSize="11.5" fontWeight="bold" fill="#0f172a" textAnchor="middle">
                        {n.lbl}
                      </text>
                    </g>
                  ))}
                  <rect x="285" y="24" width="162" height="212" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
                  <text x="298" y="48" fontSize="11.5" fontWeight="800" fill="#1d4ed8" fontFamily="monospace">5 Đặc trưng (5D):</text>
                  <text x="298" y="80" fontSize="11.5" fill="#0f172a" fontFamily="monospace">1. Số nút:  4</text>
                  <text x="298" y="108" fontSize="11.5" fill={hasEdge ? '#047857' : '#dc2626'} fontWeight="bold" fontFamily="monospace">2. Số cạnh: {numEdges}</text>
                  <text x="298" y="136" fontSize="11.5" fill="#0f172a" fontFamily="monospace">3. Cụm Max: {clusterSize}</text>
                  <text x="298" y="164" fontSize="11.5" fill="#0f172a" fontFamily="monospace">4. Cụm TB:  {clusterSize}.0</text>
                  <text x="298" y="192" fontSize="11.5" fill="#0f172a" fontFamily="monospace">5. W_cạnh:  {hasEdge ? '2.0' : '0.0'}</text>
                </>
              )}
            </svg>
          </div>
        </div>

        <div className={`p-3.5 rounded-xl border text-sm ${step === 4 && !hasEdge ? 'bg-red-50 border-red-300 text-red-900' : 'bg-slate-50 border-slate-300 text-slate-800'}`}>
          {step === 1 && <><strong>Bước 1 (Hàm lọc 2D):</strong> 12 tài khoản từ không gian 4D được chiếu xuống mặt phẳng 2D.</>}
          {step === 2 && <><strong>Bước 2 (Phép phủ Cover 2×2 chồng lấn):</strong> Vùng xanh nhạt ở giữa là vùng giao giữa các ô. Các chấm xanh lá là các tài khoản nằm chung ở 2 ô cùng lúc.</>}
          {step === 3 && <><strong>Bước 3 (Phân cụm cục bộ):</strong> Trong từng ô, các điểm được gom thành cụm — mỗi cụm trở thành 1 nút lớn trên Đồ thị Mapper.</>}
          {step === 4 && hasEdge && <><strong>Bước 4 (Nối cạnh Nerve &amp; Trích 5 đặc trưng):</strong> Vì có các chấm xanh lá nằm chung ở vùng giao, Đồ thị Mapper nối 2 cạnh xanh lá. Vector 5D = <code>[4, 2, {clusterSize}, {clusterSize}.0, 2.0]</code>.</>}
          {step === 4 && !hasEdge && <><strong>CẢNH BÁO (Overlap quá nhỏ → 0 cạnh!):</strong> Khi kéo Overlap về 0, các ô chia rời nhau hoàn toàn → không có nút nào thuộc 2 ô cùng lúc → Đồ thị Mapper mất sạch cạnh (Edgeless)!</>}
        </div>
      </div>
    </div>
  )
}

export function WhaleOutlierLab() {
  const [whale, setWhale] = useState(false)
  const nodes = [
    { id: 'u1', x: 64, y: 66, role: 'hub', outW: whale ? 10000 : 80, inW: 20, outD: 4, inD: 1 },
    { id: 'u2', x: 64, y: 178, role: 'hub', outW: 60, inW: 10, outD: 3, inD: 1 },
    { id: 'u3', x: 190, y: 72, role: 'mid', outW: 30, inW: whale ? 10000 : 50, outD: 2, inD: 2 },
    { id: 'u4', x: 190, y: 174, role: 'mid', outW: 20, inW: 40, outD: 2, inD: 2 },
    { id: 'u5', x: 334, y: 38, role: 'tie', outW: 0, inW: 10, outD: 0, inD: 1 },
    { id: 'u6', x: 334, y: 94, role: 'tie', outW: 0, inW: 10, outD: 0, inD: 1 },
    { id: 'u7', x: 334, y: 150, role: 'tie', outW: 0, inW: 10, outD: 0, inD: 1 },
    { id: 'u8', x: 334, y: 206, role: 'tie', outW: 0, inW: 10, outD: 0, inD: 1 },
  ]
  const edges = [
    [0, 2, whale ? '10.000!' : '50'], [0, 4, '10'], [0, 5, '10'], [1, 3, '40'], [1, 6, '10'], [2, 7, '10'],
  ]
  const maxOutW = whale ? 10000 : 80
  const devMaxLog = Math.log1p(80)

  return (
    <div className="rounded-2xl border-2 border-blue-400 bg-white overflow-hidden shadow-sm">
      <div className="bg-blue-50/80 border-b border-slate-200 px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-xs font-bold uppercase text-blue-800">MÔ PHỎNG DỮ LIỆU 1.2 • THẢM HỌA "CÁ MẬP NGOẠI LAI" (OUTLIER) &amp; KHỐI ĐIỂM TRÙNG (TIES)</div>
          <div className="font-bold text-slate-900 text-base">Bấm nút tạo giao dịch cá mập để thấy MinMax sập thang đo, còn APts (log1p + Neo) giữ nguyên tuyệt đối</div>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setWhale(false)} className={`px-3.5 py-1.5 rounded-lg text-xs font-bold border cursor-pointer ${!whale ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-slate-800 border-slate-300'}`}>
            Ngày bình thường
          </button>
          <button onClick={() => setWhale(true)} className={`px-3.5 py-1.5 rounded-lg text-xs font-bold border cursor-pointer ${whale ? 'bg-red-700 text-white border-red-700' : 'bg-white text-slate-800 border-slate-300'}`}>
            + Thêm 1 giao dịch Cá mập (10.000)
          </button>
        </div>
      </div>

      <div className="p-5 grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
        <div className="lg:col-span-5 border border-slate-300 rounded-xl p-3 bg-white">
          <div className="text-xs font-bold text-slate-700 mb-2">Đồ thị giao dịch 8 ví trong ngày (4 ví vàng là Ties giống hệt nhau)</div>
          <svg viewBox="0 0 390 244" className="w-full h-auto block">
            {edges.map(([s, d, lbl], idx) => {
              const n1 = nodes[s]
              const n2 = nodes[d]
              const isWhaleEdge = idx === 0 && whale
              return (
                <g key={idx}>
                  <line x1={n1.x} y1={n1.y} x2={n2.x} y2={n2.y} stroke={isWhaleEdge ? '#dc2626' : '#94a3b8'} strokeWidth={isWhaleEdge ? 3.5 : 1.8} />
                  <text x={(n1.x + n2.x) / 2} y={(n1.y + n2.y) / 2 - 6} fontSize="10.5" fontWeight="bold" fill={isWhaleEdge ? '#dc2626' : '#334155'} textAnchor="middle" fontFamily="monospace">
                    {lbl}
                  </text>
                </g>
              )
            })}
            {nodes.map((n) => (
              <g key={n.id}>
                <circle cx={n.x} cy={n.y} r="15" fill={n.role === 'hub' ? '#1d4ed8' : n.role === 'mid' ? '#7c3aed' : '#d97706'} />
                <text x={n.x} y={n.y + 4} fontSize="11" fontWeight="bold" fill="#fff" textAnchor="middle" fontFamily="monospace">{n.id}</text>
              </g>
            ))}
          </svg>
        </div>

        <div className="lg:col-span-7 space-y-3">
          <div className="overflow-x-auto border border-slate-300 rounded-xl">
            <table className="w-full text-xs font-mono border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-300 text-left text-slate-700">
                  <th className="p-2">Ví</th>
                  <th className="p-2">4D [Gửi, Nhận, BậcG, BậcN]</th>
                  <th className="p-2">GraphPulse (MinMax)</th>
                  <th className="p-2">APts (log1p + Neo)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {nodes.map((n) => {
                  const gp = (n.outW / maxOutW).toFixed(3)
                  const ap = Math.min(1, Math.log1p(n.outW) / devMaxLog).toFixed(3)
                  const gpW = Math.max(2, Math.round((n.outW / maxOutW) * 70))
                  const apW = Math.max(2, Math.round(Math.min(1, Math.log1p(n.outW) / devMaxLog) * 70))
                  return (
                    <tr key={n.id} className={n.role === 'tie' ? 'bg-amber-50' : ''}>
                      <td className={`p-2 font-bold ${n.role === 'tie' ? 'text-amber-800' : 'text-blue-800'}`}>{n.id}</td>
                      <td className="p-2">[{n.outW}, {n.inW}, {n.outD}, {n.inD}]</td>
                      <td className="p-2">
                        <div className="flex items-center gap-2">
                          <span className={whale && n.id !== 'u1' && n.outW > 0 ? 'text-red-700 font-bold' : ''}>{gp}</span>
                          <div className="h-2.5 rounded bg-red-600" style={{ width: `${gpW}px` }} />
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-800 font-bold">{ap}</span>
                          <div className="h-2.5 rounded bg-emerald-600" style={{ width: `${apW}px` }} />
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className={`p-3 rounded-xl border text-xs md:text-sm ${whale ? 'bg-red-50 border-red-300 text-red-950' : 'bg-amber-50 border-amber-300 text-amber-950'}`}>
            {whale ? (
              <><strong>MinMax bị nén thang đo!</strong> Khi <code>u1</code> chuyển 10.000, các ví <code>u2, u3, u4</code> không đổi hành vi nhưng bị nén từ <code>0.750, 0.375, 0.250</code> xuống <code>0.006, 0.003, 0.002</code>. Còn ở cột <strong>APts (Chữ A)</strong>, nhờ <code>log1p</code> và neo quá khứ, tọa độ của <code>u2, u3, u4</code> giữ nguyên tuyệt đối (<code>0.936, 0.782, 0.693</code>).</>
            ) : (
              <>Chú ý 4 dòng màu vàng (<code>u5, u6, u7, u8</code>): cả 4 ví đều chỉ nhận đúng 1 giao dịch giá trị 10 nên có vector 4D giống hệt nhau <code>[0, 10, 0, 1]</code> — tạo thành <strong>khối giá trị trùng (Ties)</strong>!</>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export function MechanismDuelLab() {
  const [mode, setMode] = useState(0)
  const [perturbed, setPerturbed] = useState(false)

  const changeMode = (m) => {
    setMode(m)
    setPerturbed(false)
  }

  return (
    <div className="rounded-2xl border-2 border-blue-400 bg-white overflow-hidden shadow-sm">
      <div className="bg-blue-50/80 border-b border-slate-200 px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-xs font-bold uppercase text-blue-800">MÔ PHỎNG TƯƠNG TÁC 2.1 • ĐỐI KHÁNG TRỰC TIẾP GRAPHPULSE (B) VS. APts</div>
          <div className="font-bold text-slate-900 text-base">Chọn từng cơ chế (P, t, s) rồi bấm "⚡ Chọc nhiễu nhẹ 1–2%" để thấy sự khác biệt</div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {['1. Cơ chế P (t-SNE vs PCA neo)', '2. Cơ chế t (Biên cắt ties vs Né trùng)', '3. Cơ chế s (KMeans k=5 vs Liên kết đơn h)'].map((lbl, idx) => (
            <button
              key={idx}
              onClick={() => changeMode(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold border cursor-pointer ${
                mode === idx ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-slate-800 border-slate-300 hover:bg-blue-50'
              }`}
            >
              {lbl}
            </button>
          ))}
        </div>
      </div>

      <div className="p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 bg-amber-50 p-3 rounded-xl border border-amber-300">
          <span className="text-sm font-semibold text-amber-950">👉 Bấm nút bên phải để bơm nhiễu nhẹ 1–2% vào dữ liệu của cùng một ngày:</span>
          <button
            onClick={() => setPerturbed((p) => !p)}
            className="px-4 py-2 rounded-lg font-bold text-sm bg-amber-500 hover:bg-amber-600 text-white shadow cursor-pointer"
          >
            {perturbed ? '↺ Khôi phục trạng thái Gốc (Trước nhiễu)' : '⚡ Bấm để Chọc nhiễu nhẹ 1–2%'}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* GraphPulse B */}
          <div className="border-2 border-red-400 rounded-xl p-3 bg-white">
            <div className="flex justify-between text-xs font-bold mb-2">
              <span className="text-red-700">
                {mode === 0 ? 'Nhánh B: t-SNE fit lại mỗi ngày' : mode === 1 ? 'Nhánh B: Biên ô cắt sát đám trùng' : 'Nhánh B: KMeans ép k = 5 cụm'}
              </span>
              <span className={`font-mono ${perturbed ? 'text-red-700' : 'text-slate-600'}`}>
                {perturbed ? 'Sau nhiễu: BẤT ỔN!' : 'Trước nhiễu (Gốc)'}
              </span>
            </div>
            <svg viewBox="0 0 420 210" className="w-full h-auto block">
              {mode === 0 && (
                <>
                  <line x1="210" y1="10" x2="210" y2="200" stroke="#cbd5e1" strokeDasharray="4,4" />
                  <line x1="15" y1="105" x2="405" y2="105" stroke="#cbd5e1" strokeDasharray="4,4" />
                  {[
                    { x: 105, y: 60, col: '#1d4ed8' }, { x: 128, y: 78, col: '#1d4ed8' }, { x: 92, y: 84, col: '#1d4ed8' },
                    { x: 300, y: 148, col: '#047857' }, { x: 325, y: 136, col: '#047857' }, { x: 288, y: 164, col: '#047857' },
                  ].map((pt, i) => {
                    const cx = perturbed ? 420 - pt.x + 25 : pt.x
                    const cy = perturbed ? 210 - pt.y - 10 : pt.y
                    return <circle key={i} cx={cx} cy={cy} r="7" fill={pt.col} />
                  })}
                  {perturbed && <text x="210" y="196" fontSize="11" fontWeight="800" fill="#dc2626" textAnchor="middle">↻ Đám điểm xoay lật 180° sang góc khác!</text>}
                </>
              )}
              {mode === 1 && (
                <>
                  <line x1="30" y1="105" x2="390" y2="105" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="210" y1="22" x2="210" y2="188" stroke="#dc2626" strokeWidth="3" strokeDasharray="5,4" />
                  <text x="210" y="18" fontSize="10.5" fontWeight="800" fill="#dc2626" textAnchor="middle">Biên ô cắt sát đám điểm trùng!</text>
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <circle
                      key={i}
                      cx={(perturbed ? 222 : 198) + (i % 2) * 8}
                      cy={82 + Math.floor(i / 2) * 20}
                      r="7"
                      fill={perturbed ? '#dc2626' : '#d97706'}
                    />
                  ))}
                  {perturbed && <text x="305" y="165" fontSize="10.5" fontWeight="800" fill="#dc2626" textAnchor="middle">Cả đám nhảy ồ ạt sang Ô Phải!</text>}
                </>
              )}
              {mode === 2 && (
                <>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
                    const ang = (i / 10) * Math.PI * 2
                    const cx = 210 + Math.cos(ang) * 44
                    const cy = 105 + Math.sin(ang) * 44
                    const cols = ['#dc2626', '#d97706', '#7c3aed', '#1d4ed8', '#047857']
                    const cIdx = perturbed ? (i + 2) % 5 : i % 5
                    return <circle key={i} cx={cx} cy={cy} r="7.5" fill={cols[cIdx]} />
                  })}
                  <text x="210" y="190" fontSize="10.5" fontWeight="800" fill="#dc2626" textAnchor="middle">
                    {perturbed ? 'Ranh giới chẻ 5 mảnh xoay đổi → Xáo trộn màu cụm!' : '1 đám tự nhiên bị KMeans chẻ cưỡng bức làm 5 màu!'}
                  </text>
                </>
              )}
            </svg>
          </div>

          {/* APts */}
          <div className="border-2 border-emerald-500 rounded-xl p-3 bg-white">
            <div className="flex justify-between text-xs font-bold mb-2">
              <span className="text-emerald-800">
                {mode === 0 ? 'APts: Trục PCA neo cố định từ quá khứ' : mode === 1 ? 'APts: Phép phủ né trùng (Tie-aware)' : 'APts: Liên kết đơn ngưỡng h cố định'}
              </span>
              <span className="font-mono text-emerald-700">{perturbed ? 'Sau nhiễu: BẤT BIẾN (S = 0)!' : 'Trước nhiễu (Gốc)'}</span>
            </div>
            <svg viewBox="0 0 420 210" className="w-full h-auto block">
              {mode === 0 && (
                <>
                  <line x1="210" y1="10" x2="210" y2="200" stroke="#10b981" strokeDasharray="4,4" />
                  <line x1="15" y1="105" x2="405" y2="105" stroke="#10b981" strokeDasharray="4,4" />
                  {[
                    { x: 105, y: 60, col: '#1d4ed8' }, { x: 128, y: 78, col: '#1d4ed8' }, { x: 92, y: 84, col: '#1d4ed8' },
                    { x: 300, y: 148, col: '#047857' }, { x: 325, y: 136, col: '#047857' }, { x: 288, y: 164, col: '#047857' },
                  ].map((pt, i) => (
                    <circle key={i} cx={pt.x + (perturbed ? 3 : 0)} cy={pt.y + (perturbed ? 2 : 0)} r="7" fill={pt.col} />
                  ))}
                  {perturbed && <text x="210" y="196" fontSize="11" fontWeight="800" fill="#047857" textAnchor="middle">✓ Giữ nguyên vị trí trên 2 trục PCA cố định!</text>}
                </>
              )}
              {mode === 1 && (
                <>
                  <line x1="30" y1="105" x2="390" y2="105" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="295" y1="22" x2="295" y2="188" stroke="#047857" strokeWidth="3" />
                  <text x="295" y="18" fontSize="10.5" fontWeight="800" fill="#047857" textAnchor="middle">Biên né vào khe trống lớn nhất!</text>
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <circle
                      key={i}
                      cx={(perturbed ? 204 : 198) + (i % 2) * 8}
                      cy={82 + Math.floor(i / 2) * 20}
                      r="7"
                      fill="#047857"
                    />
                  ))}
                  {perturbed && <text x="150" y="165" fontSize="10.5" fontWeight="800" fill="#047857" textAnchor="middle">✓ Nhích nhẹ vẫn nằm gọn bên Trái biên!</text>}
                </>
              )}
              {mode === 2 && (
                <>
                  <circle cx="210" cy="105" r="64" fill="rgba(16, 185, 129, 0.14)" stroke="#047857" strokeWidth="2" strokeDasharray="5,3" />
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
                    const ang = (i / 10) * Math.PI * 2
                    const cx = 210 + Math.cos(ang) * 44 + (perturbed ? 2 : 0)
                    const cy = 105 + Math.sin(ang) * 44
                    return <circle key={i} cx={cx} cy={cy} r="7.5" fill="#047857" />
                  })}
                  <text x="210" y="190" fontSize="10.5" fontWeight="800" fill="#047857" textAnchor="middle">
                    ✓ Toàn bộ nằm trong bán kính h → Giữ nguyên 1 cụm duy nhất!
                  </text>
                </>
              )}
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CoMembershipKappaLab() {
  const [scIdx, setScIdx] = useState(0)
  const pairs = ['(A,B)', '(A,C)', '(A,D)', '(B,C)', '(B,D)', '(C,D)']
  const scenarios = [
    { name: 'Kịch bản 1: Bất biến (APts)', orig: [1, 1, 0, 1, 0, 0], pert: [1, 1, 0, 1, 0, 0], kappa: '1,000', s: '0,000', note: 'Tất cả 6 cặp tài khoản giữ nguyên trạng thái chung/khác cụm → κ = 1,000, Độ bất ổn S = 0,000.' },
    { name: 'Kịch bản 2: Đổi nhẹ 1 cặp', orig: [1, 1, 0, 1, 0, 0], pert: [1, 1, 0, 0, 0, 0], kappa: '0,667', s: '0,333', note: 'Chỉ có cặp (B,C) đang chung cụm (1) bị tách ra (0) sau nhiễu → κ = 0,667, S = 1 − κ = 0,333.' },
    { name: 'Kịch bản 3: Xáo trộn mạnh (GraphPulse)', orig: [1, 1, 0, 1, 0, 0], pert: [0, 1, 1, 0, 1, 0], kappa: '−0,333', s: '1,333 (≈ 1)', note: 'Các cụm bị xé lẻ và ghép lại ngẫu nhiên → Độ bất ổn S vọt lên mức rất cao.' },
  ]
  const sc = scenarios[scIdx]

  return (
    <div className="rounded-2xl border-2 border-blue-400 bg-white overflow-hidden shadow-sm">
      <div className="bg-blue-50/80 border-b border-slate-200 px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-xs font-bold uppercase text-blue-800">MÔ PHỎNG TƯƠNG TÁC 3.1 • CÁCH TÍNH CO-MEMBERSHIP KAPPA</div>
          <div className="font-bold text-slate-900 text-base">Xét 4 tài khoản A, B, C, D (tạo thành 6 cặp nút): Bấm thử 3 kịch bản để xem <M tex="S = 1 - \kappa" /></div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {scenarios.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setScIdx(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold border cursor-pointer ${
                scIdx === idx ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-slate-800 border-slate-300 hover:bg-blue-50'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      <div className="p-5 grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
        <div className="lg:col-span-5 p-4 rounded-xl bg-slate-50 border border-slate-300 text-sm space-y-2">
          <div className="font-extrabold text-blue-900">{sc.name}</div>
          <div className="font-mono text-base">
            Cohen&apos;s κ = <strong>{sc.kappa}</strong> &nbsp;⇒&nbsp; <strong className="text-red-700">S = 1 − κ = {sc.s}</strong>
          </div>
          <div className="text-slate-700">{sc.note}</div>
        </div>
        <div className="lg:col-span-7 overflow-x-auto border border-slate-300 rounded-xl p-2">
          <table className="w-full text-sm text-center font-mono border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-300 bg-slate-100 text-slate-700">
                <th className="py-2 px-2 text-left">Đồ thị</th>
                {pairs.map((p) => <th key={p} className="py-2">{p}</th>)}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="py-2 px-2 font-sans font-bold text-left">Bản gốc (M)</td>
                {sc.orig.map((v, i) => <td key={i} className="py-2">{v}</td>)}
              </tr>
              <tr>
                <td className="py-2 px-2 font-sans font-bold text-left">Sau nhiễu (M&apos;)</td>
                {sc.pert.map((v, i) => (
                  <td key={i} className={`py-2 font-extrabold ${v === sc.orig[i] ? 'text-emerald-700 bg-emerald-50' : 'text-red-700 bg-red-50'}`}>
                    {v}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
