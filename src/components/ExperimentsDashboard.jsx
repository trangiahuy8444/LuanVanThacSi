import React, { useState } from 'react'
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts'
import {
  DATASET_STATS, LENS_TIMING, PRIOR_DIRECTIONS, CONSECUTIVE_DAY_ROWS,
  ROBUSTNESS_993_DATA, CAUSAL_54_DATA, CHANGEPOINT_SUMMARY, CHANGEPOINT_REAL_18, CHANGEPOINT_SYNTH_8,
} from '../data/experimentsData'
import { M } from './MathTex'

const fmt4 = (v) => v.toFixed(4).replace('.', ',')
const fmt2 = (v) => v.toFixed(2).replace('.', ',')

export function ExperimentsDashboard() {
  const [chartTab, setChartTab] = useState('sdrop')
  const [tab993, setTab993] = useState('sdrop')
  const [tab54, setTab54] = useState('drop')
  const [tabCP, setTabCP] = useState('summary')

  const sdropChartData = ROBUSTNESS_993_DATA.map((r) => ({
    ds: r.ds,
    'Nhánh B (t-SNE)': r.B.sdrop,
    'PCA ngày (P)': r.P.sdrop,
    'APts (Đề xuất)': r.APts.sdrop,
  }))

  const snoiseChartData = ROBUSTNESS_993_DATA.map((r) => ({
    ds: r.ds,
    'Nhánh B (t-SNE)': r.B.snoise,
    'AP': r.AP.snoise,
    'APs': r.APs.snoise,
    'APts (Đề xuất)': r.APts.snoise,
  }))

  const speedChartData = ROBUSTNESS_993_DATA.map((r) => ({
    ds: r.ds,
    'Hệ số tăng tốc B/APts (×)': r.speedupB,
  }))

  const cpChartData = CHANGEPOINT_SUMMARY.map((r) => ({
    name: r.method.replace(' (Đề xuất đầy đủ)', ''),
    'Toàn bộ 26 ô': r.med26,
    '18 ô Dữ liệu thật': r.medReal,
  }))

  return (
    <div className="space-y-8">
      {/* 4 THẺ TỔNG HỢP NHANH */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">
          <div className="text-xs font-bold uppercase text-blue-800">1. Quy mô dữ liệu thực nghiệm</div>
          <div className="text-2xl font-extrabold text-blue-950 mt-1">9 tập • 6.421 ngày</div>
          <div className="text-xs text-slate-700 mt-1">7 mạng giao dịch token Ethereum + 2 mạng tương tác xã hội (mốc cắt thời gian 70% tham chiếu / 30% đánh giá).</div>
        </div>
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
          <div className="text-xs font-bold uppercase text-emerald-800">2. Độ bền vững khi bỏ 2% giao dịch</div>
          <div className="text-2xl font-extrabold text-emerald-950 mt-1">0,168 → 0,012 (14,5×)</div>
          <div className="text-xs text-slate-700 mt-1"><code>APts</code> giảm bất ổn trên cả 9/9 tập dữ liệu (trung vị tỷ số 13,1×; Hodges–Lehmann 14,5×; <M tex="p = 0{,}00195" />). <em>Co giãn trọng số theo toàn chuỗi (có dùng tương lai).</em></div>
        </div>
        <div className="p-4 rounded-xl bg-purple-50 border border-purple-200">
          <div className="text-xs font-bold uppercase text-purple-800">3. Tốc độ dựng Mapper mỗi ngày</div>
          <div className="text-2xl font-extrabold text-purple-950 mt-1">186× (và 146× qua API)</div>
          <div className="text-xs text-slate-700 mt-1">Từ trung vị ~302 ms/ngày (nhánh B) xuống ~1,61 ms/ngày (<code>APts</code>). Phần lớn nhờ bỏ t-SNE (chiếm 98,2% thời gian của nhánh B); so với PCA tính lại mỗi ngày, <code>APts</code> chỉ nhanh hơn 2,57×.</div>
        </div>
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
          <div className="text-xs font-bold uppercase text-amber-800">4. Phát hiện điểm chuyển cấu trúc</div>
          <div className="text-2xl font-extrabold text-amber-950 mt-1">AUC: 0,47 → 0,69</div>
          <div className="text-xs text-slate-700 mt-1"><code>APts</code> cao hơn nhánh B ở 22/26 ô (<M tex="p = 0{,}00002" />) và 8/9 tập (<M tex="p = 0{,}0098" />), nhưng thống kê đơn giản cao hơn mọi nhánh Mapper (0,81). <em>Hồi cứu, co giãn toàn chuỗi.</em></div>
        </div>
      </div>

      {/* BIỂU ĐỒ RECHARTS TƯƠNG TÁC */}
      <div className="rounded-2xl border-2 border-emerald-500 bg-white overflow-hidden shadow-sm">
        <div className="bg-emerald-50/80 border-b border-slate-200 px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-xs font-bold uppercase text-emerald-800">BIỂU ĐỒ TƯƠNG TÁC RECHARTS • DI CHUỘT LÊN TỪNG CỘT ĐỂ XEM SỐ LIỆU CHÍNH XÁC</div>
            <div className="font-bold text-slate-900 text-base">Trực quan hóa toàn bộ kết quả thực nghiệm trên 9 tập dữ liệu &amp; 26 ô điểm chuyển</div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {[
              ['sdrop', '1. Bỏ 2% cạnh (S_drop)'],
              ['snoise', '2. Nhiễu nhân 1% (Ablation)'],
              ['speed', '3. Hệ số tăng tốc (×)'],
              ['auc', '4. Phát hiện điểm chuyển (AUC)'],
            ].map(([k, lbl]) => (
              <button
                key={k}
                onClick={() => setChartTab(k)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold border cursor-pointer ${
                  chartTab === k ? 'bg-emerald-700 text-white border-emerald-700' : 'bg-white text-slate-800 border-slate-300 hover:bg-emerald-50'
                }`}
              >
                {lbl}
              </button>
            ))}
          </div>
        </div>

        <div className="p-5">
          <div className="h-[340px] w-full">
            {chartTab === 'sdrop' && (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sdropChartData} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="ds" tick={{ fontSize: 12, fontWeight: 700 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Nhánh B (t-SNE)" fill="#dc2626" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="PCA ngày (P)" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="APts (Đề xuất)" fill="#059669" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
            {chartTab === 'snoise' && (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={snoiseChartData} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="ds" tick={{ fontSize: 12, fontWeight: 700 }} />
                  <YAxis domain={[0, 1.05]} tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Nhánh B (t-SNE)" fill="#dc2626" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="AP" fill="#6366f1" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="APs" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="APts (Đề xuất)" fill="#059669" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
            {chartTab === 'speed' && (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={speedChartData} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="ds" tick={{ fontSize: 12, fontWeight: 700 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Legend />
                  <ReferenceLine y={186.1} stroke="#7c3aed" strokeDasharray="4 4" label={{ value: 'Trung vị 186,1×', position: 'top', fill: '#6d28d9', fontSize: 12, fontWeight: 700 }} />
                  <Bar dataKey="Hệ số tăng tốc B/APts (×)" fill="#7c3aed" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
            {chartTab === 'auc' && (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={cpChartData} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="name" tick={{ fontSize: 11, fontWeight: 700 }} interval={0} angle={-10} textAnchor="end" height={55} />
                  <YAxis domain={[0, 1]} tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Legend />
                  <ReferenceLine y={0.5} stroke="#dc2626" strokeDasharray="4 4" label={{ value: 'Đoán ngẫu nhiên (0,50)', position: 'right', fill: '#dc2626', fontSize: 11 }} />
                  <Bar dataKey="Toàn bộ 26 ô" fill="#1d4ed8" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="18 ô Dữ liệu thật" fill="#059669" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      </div>

      {/* BẢNG 1: THỐNG KÊ 9 TẬP DỮ LIỆU */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-xl font-extrabold text-slate-900">Bảng 1. Thống kê mô tả 9 tập dữ liệu đồ thị động &amp; tỷ lệ nút trùng đặc trưng 4D</h3>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-200 text-slate-800">Tương ứng Bảng 1.5 Đề cương</span>
        </div>
        <div className="overflow-x-auto border border-slate-300 rounded-xl bg-white">
          <table className="w-full text-xs md:text-sm text-left border-collapse">
            <thead>
              <tr className="bg-slate-800 text-white font-bold">
                <th className="p-2.5 border-r border-slate-600">Tập dữ liệu</th>
                <th className="p-2.5 border-r border-slate-600">Loại mạng</th>
                <th className="p-2.5 border-r border-slate-600 text-right">Tổng số cạnh</th>
                <th className="p-2.5 border-r border-slate-600 text-right">Số ngày</th>
                <th className="p-2.5 border-r border-slate-600 text-center">Mốc cắt 70%</th>
                <th className="p-2.5 border-r border-slate-600 text-center">Tham chiếu / Đánh giá</th>
                <th className="p-2.5 border-r border-slate-600 text-right">Nút/ngày (Max)</th>
                <th className="p-2.5 border-r border-slate-600 text-right">Cạnh/ngày</th>
                <th className="p-2.5 text-right bg-amber-900">Tỷ lệ nút trùng 4D</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-mono">
              {DATASET_STATS.map((r) => (
                <tr key={r.ds} className="hover:bg-slate-50">
                  <td className="p-2.5 font-sans font-bold text-blue-900">{r.ds}</td>
                  <td className="p-2.5 font-sans">{r.type}</td>
                  <td className="p-2.5 text-right">{r.edges}</td>
                  <td className="p-2.5 text-right">{r.days.toLocaleString('vi-VN')}</td>
                  <td className="p-2.5 text-center">{r.cut}</td>
                  <td className="p-2.5 text-center">{r.split}</td>
                  <td className="p-2.5 text-right">{r.nodesMed}</td>
                  <td className="p-2.5 text-right">{r.edgesMed}</td>
                  <td className={`p-2.5 text-right font-extrabold ${r.tieNum > 50 ? 'text-red-700 bg-red-50' : 'text-amber-800 bg-amber-50'}`}>{r.tieShare}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-600">
          * Trong tổng số 6.421 ngày có giao dịch của 9 tập dữ liệu, có <strong>241 ngày</strong> có số nút hoạt động <M tex="N_t \le 30" /> làm <code>t-SNE</code> mặc định (<code>perplexity = 30</code>) báo lỗi dừng chương trình. Tỷ lệ nút lặp lại giữa 2 ngày liên tiếp chỉ đạt trung vị <strong>7%–33%</strong>.
        </p>
      </div>

      {/* BẢNG 2A & 2B: CHI PHÍ 5 HÀM LỌC & 4 HƯỚNG TIỀN ĐỀ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-2.5">
          <h3 className="text-lg font-extrabold text-slate-900">Bảng 2A. Phân rã thời gian 5 phương pháp hàm lọc (144 ngày thực tế &amp; đồ thị 20.000 nút)</h3>
          <div className="overflow-x-auto border border-slate-300 rounded-xl bg-white">
            <table className="w-full text-xs md:text-sm text-left border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white font-bold">
                  <th className="p-2.5 border-r border-slate-600">Phương pháp hàm lọc</th>
                  <th className="p-2.5 border-r border-slate-600 text-right">Tỷ trọng hàm lọc</th>
                  <th className="p-2.5 border-r border-slate-600 text-right">Trung vị/ngày</th>
                  <th className="p-2.5 border-r border-slate-600 text-right">So với t-SNE BH</th>
                  <th className="p-2.5 text-right">Ở N = 20.000 nút</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-mono">
                {LENS_TIMING.map((r) => (
                  <tr key={r.name} className={r.highlight === 'red' ? 'bg-red-50/70' : r.highlight === 'green' ? 'bg-emerald-50' : ''}>
                    <td className="p-2.5 font-sans font-bold">{r.name}</td>
                    <td className="p-2.5 text-right">{r.share}</td>
                    <td className="p-2.5 text-right">{r.medMs}</td>
                    <td className="p-2.5 text-right font-bold">{r.speedup}</td>
                    <td className="p-2.5 text-right">{r.n20k}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-2.5">
          <h3 className="text-lg font-extrabold text-slate-900">Bảng 2B. Kết quả 4 hướng khảo sát tiền đề trước khi thiết kế tổ hợp đồng bộ APts</h3>
          <div className="overflow-x-auto border border-slate-300 rounded-xl bg-white">
            <table className="w-full text-xs md:text-sm text-left border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white font-bold">
                  <th className="p-2.5 border-r border-slate-600">Hướng khảo sát đơn lẻ</th>
                  <th className="p-2.5 border-r border-slate-600">Kết quả đạt được</th>
                  <th className="p-2.5">Tác dụng phụ / Lý do thất bại</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {PRIOR_DIRECTIONS.map((r) => (
                  <tr key={r.name}>
                    <td className="p-2.5 font-bold text-blue-900">{r.name}</td>
                    <td className="p-2.5">{r.gain}</td>
                    <td className="p-2.5 text-red-800">{r.failure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* BẢNG 3: THỰC NGHIỆM KIỂM ĐỊNH HAI NGÀY LIÊN TIẾP */}
      <div className="space-y-2.5">
        <h3 className="text-xl font-extrabold text-slate-900">Bảng 3. Thực nghiệm kiểm định thước đo giữa hai ngày liên tiếp trên 16 chuỗi giả lập (736 ngày)</h3>
        <div className="overflow-x-auto border border-slate-300 rounded-xl bg-white">
          <table className="w-full text-xs md:text-sm text-left border-collapse">
            <thead>
              <tr className="bg-slate-800 text-white font-bold">
                <th className="p-2.5 border-r border-slate-600">Kịch bản chuyển chế độ giả lập</th>
                <th className="p-2.5 border-r border-slate-600 text-right">Tương quan Spearman (ρ)</th>
                <th className="p-2.5 border-r border-slate-600 text-right">AUC ngày liên tiếp (B)</th>
                <th className="p-2.5 border-r border-slate-600 text-right">AUC ngày liên tiếp (P)</th>
                <th className="p-2.5 text-right">AUC ngày liên tiếp (AP)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-mono">
              {CONSECUTIVE_DAY_ROWS.map((r) => (
                <tr key={r.scen}>
                  <td className="p-2.5 font-sans font-bold">{r.scen}</td>
                  <td className="p-2.5 text-right">{r.rho}</td>
                  <td className="p-2.5 text-right">{r.aucB}</td>
                  <td className="p-2.5 text-right">{r.aucP}</td>
                  <td className="p-2.5 text-right">{r.aucAP}</td>
                </tr>
              ))}
              <tr className="bg-amber-50 font-extrabold">
                <td className="p-2.5 font-sans text-amber-950">Tổng hợp toàn bộ 36 cấu hình</td>
                <td className="p-2.5 text-right text-red-700">ρ gộp = 0,1956 (&lt; 0,60 → Bác bỏ!)</td>
                <td className="p-2.5 text-right">Đạt 1/4 kịch bản</td>
                <td className="p-2.5 text-right">Đạt 1/4 kịch bản</td>
                <td className="p-2.5 text-right">Đạt 2/4 kịch bản</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* BẢNG 4: ĐỘ BỀN VỮNG CHUẨN & CẮT GIẢM 6 NHÁNH (993 NGÀY) */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-1.5"><h3 className="text-xl font-extrabold text-slate-900">Bảng 4. Thực nghiệm đánh giá độ bền vững &amp; Nghiên cứu cắt giảm 6 nhánh trên 993 ngày đánh giá</h3>
          <p className="text-xs text-amber-900 bg-amber-50 border border-amber-200 rounded-lg p-2.5 max-w-4xl"><strong>Điều kiện đọc kèm:</strong> thực nghiệm này co giãn trọng số giao dịch theo cực đại của toàn chuỗi, tức là có dùng thông tin của giai đoạn đánh giá (tương lai). Kết quả khi chỉ dùng quá khứ xem Bảng 5 (54 ngày); phép so cùng điều kiện trên toàn bộ 993 ngày chưa có. Nhánh B là phần dựng Mapper bằng t-SNE theo cấu hình bài báo GraphPulse (độ chồng lấn 0,4; KMeans 5 cụm), do em cài lại; mã công bố của GraphPulse dùng độ chồng lấn 0,3 và 2 cụm. Phân tích 6 nhánh là thăm dò.</p></div>
          <div className="flex flex-wrap gap-1.5">
            {[
              ['sdrop', '1. Bỏ 2% giao dịch (S_drop)'],
              ['snoise', '2. Nhiễu nhân 1% (S_noise)'],
              ['edgeless', '3. Ngày không cạnh (%) & Số nút'],
              ['time', '4. Thời gian (ms) & Tăng tốc'],
            ].map(([k, lbl]) => (
              <button
                key={k}
                onClick={() => setTab993(k)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold border cursor-pointer ${
                  tab993 === k ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-slate-800 border-slate-300 hover:bg-blue-50'
                }`}
              >
                {lbl}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto border-2 border-blue-300 rounded-xl bg-white">
          <table className="w-full text-xs md:text-sm text-left border-collapse">
            <thead>
              <tr className="bg-slate-800 text-white font-bold">
                <th className="p-2.5 border-r border-slate-600">Tập dữ liệu</th>
                {tab993 === 'snoise' && <th className="p-2.5 border-r border-slate-600 text-right">Ngưỡng h</th>}
                <th className="p-2.5 border-r border-slate-600 text-right">B</th>
                <th className="p-2.5 border-r border-slate-600 text-right">P</th>
                <th className="p-2.5 border-r border-slate-600 text-right">AP</th>
                <th className="p-2.5 border-r border-slate-600 text-right">APt</th>
                <th className="p-2.5 border-r border-slate-600 text-right">APs</th>
                <th className="p-2.5 border-r border-slate-600 text-right bg-emerald-900">APts (Đề xuất)</th>
                {(tab993 === 'sdrop' || tab993 === 'time') && <th className="p-2.5 text-right bg-blue-900">{tab993 === 'sdrop' ? 'Tỷ số B / APts' : 'Tăng tốc B/APts (P/APts)'}</th>}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-mono">
              {ROBUSTNESS_993_DATA.map((r) => (
                <tr key={r.ds} className="hover:bg-slate-50">
                  <td className="p-2.5 font-sans font-bold text-blue-900">{r.ds} ({r.n})</td>
                  {tab993 === 'snoise' && <td className={`p-2.5 text-right ${r.ds === 'Centra' ? 'text-red-700 font-bold' : ''}`}>{r.h}</td>}
                  {tab993 === 'sdrop' && (
                    <>
                      <td className="p-2.5 text-right text-red-700">{fmt4(r.B.sdrop)}</td>
                      <td className="p-2.5 text-right">{fmt4(r.P.sdrop)}</td>
                      <td className="p-2.5 text-right">{fmt4(r.AP.sdrop)}</td>
                      <td className="p-2.5 text-right">{fmt4(r.APt.sdrop)}</td>
                      <td className="p-2.5 text-right text-emerald-700">{fmt4(r.APs.sdrop)}</td>
                      <td className="p-2.5 text-right font-extrabold text-emerald-800 bg-emerald-50">{fmt4(r.APts.sdrop)}</td>
                      <td className="p-2.5 text-right font-extrabold text-blue-900 bg-blue-50">{r.ratioDrop}</td>
                    </>
                  )}
                  {tab993 === 'snoise' && (
                    <>
                      <td className="p-2.5 text-right text-red-700">{fmt4(r.B.snoise)}</td>
                      <td className="p-2.5 text-right">{fmt4(r.P.snoise)}</td>
                      <td className="p-2.5 text-right">{fmt4(r.AP.snoise)}</td>
                      <td className="p-2.5 text-right">{fmt4(r.APt.snoise)}</td>
                      <td className="p-2.5 text-right">{fmt4(r.APs.snoise)}</td>
                      <td className={`p-2.5 text-right font-extrabold ${r.ds === 'Centra' ? 'text-red-700 bg-red-100' : 'text-emerald-800 bg-emerald-50'}`}>{fmt4(r.APts.snoise)}</td>
                    </>
                  )}
                  {tab993 === 'edgeless' && (
                    <>
                      <td className="p-2.5 text-right">{r.B.edgeless} ({r.B.nodes})</td>
                      <td className="p-2.5 text-right font-bold text-red-700 bg-red-50">{r.P.edgeless} ({r.P.nodes})</td>
                      <td className="p-2.5 text-right">{r.AP.edgeless} ({r.AP.nodes})</td>
                      <td className="p-2.5 text-right">{r.APt.edgeless} ({r.APt.nodes})</td>
                      <td className="p-2.5 text-right">{r.APs.edgeless} ({r.APs.nodes})</td>
                      <td className="p-2.5 text-right font-extrabold text-emerald-800 bg-emerald-50">{r.APts.edgeless} ({r.APts.nodes})</td>
                    </>
                  )}
                  {tab993 === 'time' && (
                    <>
                      <td className="p-2.5 text-right text-red-700">{fmt2(r.B.tms)} ms</td>
                      <td className="p-2.5 text-right">{fmt2(r.P.tms)} ms</td>
                      <td className="p-2.5 text-right">{fmt2(r.AP.tms)} ms</td>
                      <td className="p-2.5 text-right">{fmt2(r.APt.tms)} ms</td>
                      <td className="p-2.5 text-right">{fmt2(r.APs.tms)} ms</td>
                      <td className="p-2.5 text-right font-extrabold text-emerald-800 bg-emerald-50">{fmt2(r.APts.tms)} ms</td>
                      <td className="p-2.5 text-right font-extrabold text-purple-900 bg-purple-50">{r.speedupB.toFixed(1).replace('.', ',')}× ({r.speedupP})</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* BẢNG 5: THỰC NGHIỆM TIỀN XỬ LÝ TỪ QUÁ KHỨ (54 NGÀY) */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-xl font-extrabold text-slate-900">Bảng 5. Thực nghiệm kiểm chứng mở rộng khi ước lượng tiền xử lý hoàn toàn từ quá khứ (54 ngày)</h3>
          <div className="flex flex-wrap gap-1.5">
            {[
              ['drop', '1. Bỏ giao dịch (0,5% • 1% • 5%)'],
              ['mult', '2. Nhiễu nhân & Ngưỡng h'],
              ['rewire', '3. Can thiệp cấu trúc (5% • 10% • 20%)'],
              ['cost', '4. Fit/Transform, Clipping & RAM'],
            ].map(([k, lbl]) => (
              <button
                key={k}
                onClick={() => setTab54(k)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold border cursor-pointer ${
                  tab54 === k ? 'bg-emerald-700 text-white border-emerald-700' : 'bg-white text-slate-800 border-slate-300 hover:bg-emerald-50'
                }`}
              >
                {lbl}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto border-2 border-emerald-300 rounded-xl bg-white">
          <table className="w-full text-xs md:text-sm text-left border-collapse">
            <thead>
              <tr className="bg-slate-800 text-white font-bold">
                <th className="p-2.5 border-r border-slate-600">Tập dữ liệu</th>
                {tab54 === 'drop' && (
                  <>
                    <th className="p-2.5 border-r border-slate-600 text-center">Tiền tố</th>
                    <th className="p-2.5 border-r border-slate-600 text-right">Bỏ 0,5% (B / P / APts)</th>
                    <th className="p-2.5 border-r border-slate-600 text-right bg-emerald-900">Bỏ 1,0% (B / P / APts)</th>
                    <th className="p-2.5 text-right bg-blue-900">Bỏ 5,0% (B / P / APts)</th>
                  </>
                )}
                {tab54 === 'mult' && (
                  <>
                    <th className="p-2.5 border-r border-slate-600 text-right">Ngưỡng h</th>
                    <th className="p-2.5 border-r border-slate-600 text-right">Số nút (B / APts)</th>
                    <th className="p-2.5 border-r border-slate-600 text-right">Nhân 0,5% (B / APts)</th>
                    <th className="p-2.5 border-r border-slate-600 text-right">Nhân 1,0% (B / APts)</th>
                    <th className="p-2.5 text-right">Nhân 5,0% (B / APts)</th>
                  </>
                )}
                {tab54 === 'rewire' && (
                  <>
                    <th className="p-2.5 border-r border-slate-600 text-right">Rewire Hub 5% (B / P / APts)</th>
                    <th className="p-2.5 border-r border-slate-600 text-right">Rewire Hub 10% (B / P / APts)</th>
                    <th className="p-2.5 text-right bg-blue-900">Rewire Hub 20% (B / P / APts)</th>
                  </>
                )}
                {tab54 === 'cost' && (
                  <>
                    <th className="p-2.5 border-r border-slate-600 text-right">Fit Mỏ neo 1 lần</th>
                    <th className="p-2.5 border-r border-slate-600 text-right">B (ms)</th>
                    <th className="p-2.5 border-r border-slate-600 text-right">P (ms)</th>
                    <th className="p-2.5 border-r border-slate-600 text-right bg-emerald-900">APts (ms)</th>
                    <th className="p-2.5 border-r border-slate-600 text-right bg-purple-900">Tăng tốc (B/APts)</th>
                    <th className="p-2.5 text-right">Clip &amp; Ngày 0 cạnh</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-mono">
              {CAUSAL_54_DATA.map((r) => (
                <tr key={r.ds} className={`hover:bg-slate-50 ${tab54 === 'mult' && r.smallH ? 'bg-amber-50/70' : ''}`}>
                  <td className="p-2.5 font-sans font-bold text-blue-900">{r.ds}</td>
                  {tab54 === 'drop' && (
                    <>
                      <td className="p-2.5 text-center font-sans font-bold text-emerald-700">✓ Đạt</td>
                      <td className="p-2.5 text-right"><span className="text-red-700">{r.drop.d05[0]}</span> / {r.drop.d05[1]} / <strong className="text-emerald-800">{r.drop.d05[2]}</strong></td>
                      <td className="p-2.5 text-right bg-emerald-50/50"><span className="text-red-700">{r.drop.d1[0]}</span> / {r.drop.d1[1]} / <strong className="text-emerald-800">{r.drop.d1[2]}</strong></td>
                      <td className="p-2.5 text-right bg-blue-50/50"><span className="text-red-700">{r.drop.d5[0]}</span> / {r.drop.d5[1]} / <strong className="text-emerald-800">{r.drop.d5[2]}</strong></td>
                    </>
                  )}
                  {tab54 === 'mult' && (
                    <>
                      <td className={`p-2.5 text-right font-bold ${r.smallH ? 'text-red-700' : 'text-emerald-800'}`}>{r.h}</td>
                      <td className="p-2.5 text-right">{r.cost.bNd} / <strong>{r.cost.aNd}</strong></td>
                      <td className="p-2.5 text-right">{r.mult.m05[0]} / <strong className={r.smallH ? 'text-red-700' : 'text-emerald-800'}>{r.mult.m05[2]}</strong></td>
                      <td className="p-2.5 text-right">{r.mult.m1[0]} / <strong className={r.smallH ? 'text-red-700' : 'text-emerald-800'}>{r.mult.m1[2]}</strong></td>
                      <td className="p-2.5 text-right">{r.mult.m5[0]} / <strong className={r.smallH ? 'text-red-700' : 'text-emerald-800'}>{r.mult.m5[2]}</strong></td>
                    </>
                  )}
                  {tab54 === 'rewire' && (
                    <>
                      <td className="p-2.5 text-right">{r.rew.r05[0]} / {r.rew.r05[1]} / <strong className="text-blue-900">{r.rew.r05[2]}</strong></td>
                      <td className="p-2.5 text-right">{r.rew.r10[0]} / {r.rew.r10[1]} / <strong className="text-blue-900">{r.rew.r10[2]}</strong></td>
                      <td className="p-2.5 text-right bg-blue-50">{r.rew.r20[0]} / {r.rew.r20[1]} / <strong className="text-blue-900">{r.rew.r20[2]}</strong></td>
                    </>
                  )}
                  {tab54 === 'cost' && (
                    <>
                      <td className="p-2.5 text-right">{r.fitS}</td>
                      <td className="p-2.5 text-right text-red-700">{r.cost.bMs}</td>
                      <td className="p-2.5 text-right">{r.cost.pMs}</td>
                      <td className="p-2.5 text-right font-extrabold text-emerald-800 bg-emerald-50">{r.cost.aMs}</td>
                      <td className="p-2.5 text-right font-extrabold text-purple-900 bg-purple-50">{r.speedup}</td>
                      <td className="p-2.5 text-right">Clip: {r.cost.clip} • 0 cạnh: {r.cost.aEd} (P: {r.cost.pEd})</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {tab54 === 'cost' && (
          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs md:text-sm text-slate-800">
            <strong>Bộ nhớ đỉnh toàn tiến trình (Peak RSS):</strong> <code>B = 190,39 MiB</code> • <code>P = 191,03 MiB</code> • <code>APts = 199,77 MiB</code>. Tốc độ ghép cặp trung vị qua API đạt <strong>146,00×</strong> (từ 90,83× đến 281,74×).
          </div>
        )}
      </div>

      {/* BẢNG 6: PHÁT HIỆN ĐIỂM CHUYỂN CẤU TRÚC (26 Ô) */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-1.5"><h3 className="text-xl font-extrabold text-slate-900">Bảng 6. Thực nghiệm phát hiện điểm chuyển cấu trúc (Toàn bộ 26 ô = 18 ô dữ liệu thật + 8 ô giả lập)</h3>
          <p className="text-xs text-amber-900 bg-amber-50 border border-amber-200 rounded-lg p-2.5 max-w-4xl"><strong>Điều kiện đọc kèm:</strong> (1) thực nghiệm này co giãn trọng số giao dịch theo cực đại của toàn chuỗi, tức là có dùng thông tin của giai đoạn đánh giá (tương lai); (2) điểm số của mỗi ngày dùng 5 ngày trước và 5 ngày sau, chuẩn hóa theo trung vị của cả chuỗi, nên đây là phát hiện <strong>hồi cứu</strong>, không phải dự báo; (3) các ô của cùng một tập không độc lập, nên kiểm định theo tập (8/9 tập, p = 0,0098) đáng tin hơn kiểm định theo ô. Bản làm lại chỉ dùng quá khứ (17/11/2026) cho <code>APts</code> kết quả thấp hơn; số liệu chưa vào sổ đối chiếu nên chưa đưa lên trang.</p></div>
          <div className="flex flex-wrap gap-1.5">
            {[
              ['summary', '1. Tổng hợp & Kiểm định'],
              ['real', '2. Chi tiết 18 ô dữ liệu thật'],
              ['synth', '3. Chi tiết 8 ô đồ thị giả lập'],
            ].map(([k, lbl]) => (
              <button
                key={k}
                onClick={() => setTabCP(k)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold border cursor-pointer ${
                  tabCP === k ? 'bg-amber-600 text-white border-amber-600' : 'bg-white text-slate-800 border-slate-300 hover:bg-amber-50'
                }`}
              >
                {lbl}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto border-2 border-amber-300 rounded-xl bg-white">
          {tabCP === 'summary' ? (
            <table className="w-full text-xs md:text-sm text-left border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white font-bold">
                  <th className="p-2.5 border-r border-slate-600">Phương pháp đặc trưng</th>
                  <th className="p-2.5 border-r border-slate-600 text-right">Trung vị 26 ô</th>
                  <th className="p-2.5 border-r border-slate-600 text-right">18 ô Thật</th>
                  <th className="p-2.5 border-r border-slate-600 text-right">8 ô Giả lập</th>
                  <th className="p-2.5">Kết quả kiểm định &amp; Nhận xét khoa học</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-mono">
                {CHANGEPOINT_SUMMARY.map((r) => (
                  <tr key={r.method} className={r.tone === 'red' ? 'bg-red-50/70' : r.tone === 'green' ? 'bg-emerald-50' : r.tone === 'amber' ? 'bg-amber-50/70' : r.tone === 'blue' ? 'bg-blue-50/60' : ''}>
                    <td className="p-2.5 font-sans font-bold">{r.method}</td>
                    <td className="p-2.5 text-right font-extrabold">{r.med26.toFixed(3).replace('.', ',')}</td>
                    <td className="p-2.5 text-right">{r.medReal.toFixed(3).replace('.', ',')}</td>
                    <td className="p-2.5 text-right">{r.medSynth.toFixed(3).replace('.', ',')}</td>
                    <td className="p-2.5 font-sans">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="w-full text-xs md:text-sm text-left border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white font-bold">
                  <th className="p-2.5 border-r border-slate-600">Ô thực nghiệm</th>
                  <th className="p-2.5 border-r border-slate-600 text-right bg-red-900">B</th>
                  <th className="p-2.5 border-r border-slate-600 text-right">P</th>
                  <th className="p-2.5 border-r border-slate-600 text-right">AP</th>
                  <th className="p-2.5 border-r border-slate-600 text-right bg-emerald-900">APts</th>
                  <th className="p-2.5 border-r border-slate-600 text-right">PH</th>
                  <th className="p-2.5 border-r border-slate-600 text-right">Simple</th>
                  <th className="p-2.5 text-right bg-blue-900">Simple + APts</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-mono">
                {(tabCP === 'real' ? CHANGEPOINT_REAL_18 : CHANGEPOINT_SYNTH_8).map((r) => (
                  <tr key={r.cell} className="hover:bg-slate-50">
                    <td className="p-2.5 font-sans font-bold">{r.cell}</td>
                    <td className="p-2.5 text-right text-red-700 bg-red-50/40">{r.B}</td>
                    <td className="p-2.5 text-right">{r.P}</td>
                    <td className="p-2.5 text-right">{r.AP}</td>
                    <td className={`p-2.5 text-right font-extrabold ${r.wins ? 'text-emerald-800 bg-emerald-50' : 'text-amber-800 bg-amber-50'}`}>{r.APts} {r.wins ? '✓' : ''}</td>
                    <td className="p-2.5 text-right">{r.PH}</td>
                    <td className="p-2.5 text-right font-semibold">{r.simple}</td>
                    <td className="p-2.5 text-right font-bold text-blue-900 bg-blue-50/40">{r.sAPts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}
