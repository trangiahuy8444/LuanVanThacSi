import React, { useState } from 'react'
import { BookOpen, Layers, Cpu, Ruler, BarChart3, LayoutList, ExternalLink, Compass, HelpCircle } from 'lucide-react'

const DRIVE_FOLDER_URL = 'https://drive.google.com/drive/u/0/folders/19-jTAoav9bbWcVkLCkfTfReg_BxC5zla'
const BASE = import.meta.env.BASE_URL
import { M, MBlock } from './components/MathTex'
import {
  PainPointDiagram, GraphPulseDiagnosticSvg, APtsTwoPhaseSvg, AdExTimelineSvg,
  ThresholdsRuleSvg, AblationLadderSvg, LampChair4D2DSvg, CoMembershipKappaSvg,
} from './components/VisualDiagrams'
import {
  MapperWorkbenchLab, WhaleOutlierLab, MechanismDuelLab, CoMembershipKappaLab,
} from './components/InteractiveLabs'
import { ExperimentsDashboard } from './components/ExperimentsDashboard'

const TABS = [
  { id: 'overview', label: '0. Tổng quan & Pipeline', icon: BookOpen },
  { id: 'chang1', label: '1. Bài toán & GraphPulse', icon: Layers },
  { id: 'chang2', label: '2. Phương pháp APts & Cơ sở KH', icon: Cpu },
  { id: 'chang3', label: '3. Thước đo & Thống kê', icon: Ruler },
  { id: 'experiments', label: '4. Kết quả Thực nghiệm', icon: BarChart3 },
]

export default function App() {
  const [activeTab, setActiveTab] = useState('overview')
  const [showAll, setShowAll] = useState(false)

  const isVisible = (id) => showAll || activeTab === id

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      {/* HEADER RỘNG TOÀN MÀN HÌNH */}
      <header className="bg-white border-b border-slate-300 sticky top-0 z-50 shadow-sm">
        <div className="w-[96%] max-w-[1680px] mx-auto py-3 space-y-2.5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-md text-xs font-extrabold bg-blue-700 text-white tracking-wide">
                LUẬN VĂN THẠC SĨ KHMT • K36 HCMUE • TRẦN GIA HUY
              </span>
              <h1 className="font-extrabold text-slate-900 text-base md:text-lg">
                Mapper Neo Thời Gian (<code>APts</code>) — Cổng Trực Quan Hóa &amp; Thực Nghiệm Luận Văn
              </h1>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={DRIVE_FOLDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-700 text-white border border-emerald-700 hover:bg-emerald-800 transition shadow-sm"
              >
                <ExternalLink size={14} />
                Đề cương &amp; Kho TLTK (Google Drive)
              </a>
              <button
                onClick={() => setShowAll((v) => !v)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border cursor-pointer transition ${
                  showAll ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-100 text-slate-800 border-slate-300 hover:bg-blue-50'
                }`}
              >
                <LayoutList size={14} />
                {showAll ? 'Đang hiện toàn bộ 1 trang (Bấm để chia tab)' : 'Xem tất cả trên 1 trang'}
              </button>
            </div>
          </div>

          {/* THANH TAB ĐIỀU HƯỚNG */}
          <nav className="flex flex-wrap gap-1.5">
            {TABS.map((t) => {
              const Icon = t.icon
              const active = !showAll && activeTab === t.id
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setShowAll(false)
                    setActiveTab(t.id)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition cursor-pointer ${
                    active
                      ? 'bg-blue-700 text-white border-blue-700 shadow-sm'
                      : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-blue-50 hover:border-blue-300'
                  }`}
                >
                  <Icon size={14} />
                  {t.label}
                </button>
              )
            })}
          </nav>
        </div>
      </header>

      {/* CONTAINER RỘNG 96% MÀN HÌNH */}
      <main className="w-[96%] max-w-[1600px] mx-auto py-6 space-y-10">

        {/* ================================================================= */}
        {/* TRANG 0: TOÀN BỘ LUẬN VĂN TRONG "1 TRANG GIẤY" & PIPELINE         */}
        {/* ================================================================= */}
        {isVisible('overview') && (
          <section className="bg-white border border-slate-300 rounded-2xl p-6 md:p-8 space-y-6 shadow-sm">
            {/* KHỐI NHẬP MÔN CHO NGƯỜI MỚI CHƯA BIẾT GÌ */}
            <div className="p-5 md:p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white space-y-4 shadow-md">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-300">
                    <Compass size={14} /> BẮT ĐẦU NHANH TRONG 2 PHÚT — DÀNH CHO NGƯỜI MỚI ĐỌC LẦN ĐẦU
                  </div>
                  <h2 className="text-xl md:text-2xl font-extrabold text-white">
                    Luận văn này đang giải quyết vấn đề gì? (Giải thích bằng ngôn ngữ dễ hiểu)
                  </h2>
                </div>
                <a
                  href={DRIVE_FOLDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition"
                >
                  <ExternalLink size={14} />
                  Mở Đề cương PDF &amp; 32 Bài báo gốc trên Drive
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 space-y-1.5">
                  <div className="font-extrabold text-sky-300">Bước 1 · Đầu vào là gì?</div>
                  <p className="text-slate-100 leading-relaxed">
                    Mạng lưới thay đổi mỗi ngày (ví dụ: ai chuyển tiền cho ai trên Ethereum, hoặc ai trả lời ai trên MathOverflow). Mỗi ngày tạo thành 1 <strong>ảnh chụp đồ thị</strong> gồm hàng trăm tài khoản và giao dịch.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 space-y-1.5">
                  <div className="font-extrabold text-amber-300">Bước 2 · Mapper làm gì?</div>
                  <p className="text-slate-100 leading-relaxed">
                    Thay vì nhìn hàng trăm nút rối rắm, thuật toán <strong>Mapper</strong> nén cả mạng lưới trong ngày thành một "bản đồ tóm tắt" nhỏ (~10–20 cụm nối với nhau) để theo dõi hình dạng tổng thể của mạng theo thời gian.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 space-y-1.5">
                  <div className="font-extrabold text-rose-300">Bước 3 · GraphPulse lỗi ở đâu?</div>
                  <p className="text-slate-100 leading-relaxed">
                    Phương pháp nền <strong>GraphPulse (ICLR 2024)</strong> chạy lại toàn bộ <code>t-SNE</code> + chia lưới + <code>KMeans</code> từ đầu cho từng ngày → vừa <strong>chậm</strong> (98,2% thời gian nằm ở t-SNE), vừa <strong>giật cấu trúc</strong> ngay cả khi dữ liệu chỉ nhiễu nhẹ 1–2%.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 space-y-1.5">
                  <div className="font-extrabold text-emerald-300">Bước 4 · APts giải quyết ra sao?</div>
                  <p className="text-slate-100 leading-relaxed">
                    <strong>APts</strong> ước lượng hệ tham chiếu <strong>đúng 1 lần trên dữ liệu quá khứ</strong> (chuẩn hóa, chiếu PCA, lưới né điểm trùng, ngưỡng gom cụm <M tex="h" />) rồi dùng cố định cho mọi ngày sau → <strong>nhanh hơn 146–186×</strong> và <strong>giảm mạnh biến động do nhiễu</strong>.
                  </p>
                </div>
              </div>

              {/* Từ điển nhanh 6 thuật ngữ cho người không chuyên */}
              <div className="p-3.5 rounded-xl bg-black/25 border border-white/10 space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-200">
                  <HelpCircle size={14} /> Từ điển nhanh 6 khái niệm cốt lõi (đọc trước khi xem Tab 1 → Tab 4):
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-[11.5px] text-slate-200">
                  <div><strong className="text-white">• Hàm lọc (Lens / Filter):</strong> Phép chiếu dữ liệu 4 chiều xuống mặt phẳng 2D (GraphPulse dùng <code>t-SNE</code>; APts dùng <code>PCA</code> cố định).</div>
                  <div><strong className="text-white">• Phép phủ (Cover):</strong> Chia mặt phẳng 2D thành các ô chữ nhật chồng lấn nhau (ví dụ lưới 2×2 ô chồng lấn 40%).</div>
                  <div><strong className="text-white">• Neo thời gian (Anchoring):</strong> Chỉ học tham số trên 70% ngày quá khứ (<code>dev</code>), khóa lại để biến đổi 30% ngày sau (không rò rỉ tương lai).</div>
                  <div><strong className="text-white">• Điểm trùng (Ties):</strong> Nhiều tài khoản có cùng số giao dịch (VD: đều gửi 1 lần) → dễ nhảy ô hàng loạt nếu biên lưới cắt đúng chỗ đó.</div>
                  <div><strong className="text-white">• Độ bất ổn (Cohen κ):</strong> Đo bằng <M tex="S = 1 - \kappa \in [0, 1]" /> trên tập nút chung: <strong>0</strong> = bất biến hoàn toàn; <strong>1</strong> = vỡ cụm ngẫu nhiên.</div>
                  <div><strong className="text-white">• Suy biến (Degeneracy):</strong> Đồ thị Mapper mất hết cạnh hoặc vỡ thành quá nhiều cụm 1 điểm — phải báo cáo kèm để tránh "ổn định giả".</div>
                </div>
              </div>
            </div>

            <div className="border-b border-slate-200 pb-4">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">TỔNG QUAN ĐỀ TÀI • CẤU TRÚC CỐT LÕI</div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Tóm tắt tổng thể luận văn qua 4 trụ cột chính</h2>
              <p className="text-slate-600 mt-1.5">Toàn bộ nội dung nghiên cứu được tổ chức chặt chẽ xoay quanh <strong>4 thành phần cốt lõi</strong>:</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* Thẻ 1: Đặt vấn đề + Sơ đồ minh họa bất ổn cấu trúc */}
              <div className="p-5 rounded-xl bg-red-50 border border-red-200 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="font-extrabold text-lg text-red-800">1. Đặt vấn đề (Bài toán nghiên cứu):</div>
                  <p className="text-sm text-slate-800">
                    Xét chuỗi đồ thị động thay đổi theo từng ngày (như mạng giao dịch token và mạng tương tác xã hội). Phương pháp cơ sở (<strong>GraphPulse</strong>) dùng thuật toán <strong>Mapper</strong> để tóm tắt đồ thị mỗi ngày thành một mạng lưới rút gọn. Tuy nhiên, do tái ước lượng độc lập ở từng lát cắt thời gian (chuẩn hóa MinMax, chiếu <code>t-SNE</code> phi lồi, chia lưới và phân cụm độc lập) → <strong>hai lát cắt gần như tương đồng (cụ thể là cùng một ngày <M tex="t" /> trước và sau nhiễu nhỏ 1–2%) lại tạo ra đồ thị Mapper biến dạng mạnh và tốn chi phí tính toán lớn.</strong>
                  </p>
                  <div className="p-2.5 rounded-lg bg-white/90 border border-red-200 text-xs text-red-950">
                    <strong>Bằng chứng thực nghiệm đã kiểm chứng (9 tập dữ liệu, 993 ngày):</strong> Độ trôi Procrustes của <code>t-SNE</code> đạt <strong>0,8839</strong>; chỉ bỏ 2% cạnh làm độ bất ổn <M tex="S_{\text{drop}} = 0{,}1683" />; chỉ nhiễu nhân 1% trọng số làm <M tex="S_{\text{noise}} = 0{,}2852" />; hậu quả là AUC phát hiện điểm chuyển suy biến xuống <strong>0,467</strong> (dưới mức đoán ngẫu nhiên 0,50 ở 15/26 ô).
                  </div>
                </div>
                <PainPointDiagram />
              </div>

              {/* Thẻ 2: Phương pháp đề xuất APts */}
              <div className="p-5 rounded-xl bg-blue-50 border border-blue-200 space-y-2.5">
                <div className="font-extrabold text-lg text-blue-900">2. Phương pháp đề xuất (<code>APts</code> — Mapper neo thời gian):</div>
                <p className="text-sm text-slate-800">Thay vì tái ước lượng độc lập mỗi ngày, hệ thống sử dụng giai đoạn tham chiếu quá khứ (<code>dev</code>) làm <strong>mỏ neo (anchor)</strong> cố định cho 4 khâu:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-800">
                  <li><strong><code>A</code> (Anchored Normalization):</strong> Biến đổi <M tex="\ln(1+x)" /> rồi chuẩn hóa theo cực trị <code>lo, hi</code> cố định từ quá khứ và cắt biên <code>clip[0, 1]</code>.</li>
                  <li><strong><code>P</code> (Anchored PCA):</strong> Thay <code>t-SNE</code> bằng phép chiếu trực giao 2 chiều <code>PCA</code> cố định từ quá khứ (nhanh hơn &gt;100× và triệt tiêu độ trôi góc xoay).</li>
                  <li><strong><code>t</code> (Tie-aware Cover):</strong> Xây dựng lưới phủ né khối giá trị trùng (tìm khe trống lớn nhất trong cửa sổ phân vị <M tex="\pm 2\%" />).</li>
                  <li><strong><code>s</code> (Fixed-threshold Single Linkage):</strong> Phân cụm liên kết đơn theo ngưỡng bán kính cố định <M tex="h" /> trên không gian đặc trưng 4D.</li>
                </ul>
              </div>

              {/* Thẻ 3: Phương pháp kiểm chứng */}
              <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
                <div className="font-extrabold text-lg text-emerald-900">3. Khung kiểm chứng thực nghiệm:</div>
                <p className="text-sm text-slate-800">Luận văn đánh giá đồng thời ba tiêu chí cốt lõi trên 9 tập dữ liệu đồ thị động và các chuỗi giả lập (kèm đối chứng khách quan với thống kê đơn giản):</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-800">
                  <li><strong>Độ bền vững (Robustness):</strong> Dưới nhiễu bỏ 2% giao dịch, <code>APts</code> có độ bất ổn thấp hơn nhánh B (t-SNE theo cấu hình bài báo GraphPulse, do học viên cài lại) ở 9/9 tập; ước lượng Hodges–Lehmann của tỷ số là 14,5 lần (<M tex="p = 0{,}00195" /> là mức nhỏ nhất đạt được với 9 tập, chỉ cho biết 9/9 cùng chiều). <em>Điều kiện: thực nghiệm này co giãn trọng số giao dịch theo cực đại của toàn chuỗi, tức là có dùng thông tin của giai đoạn đánh giá (tương lai).</em></li>
                  <li><strong>Độ nhạy (Sensitivity):</strong> Khi chuyển 5%–20% cạnh về nút trung tâm, trung vị độ bất ổn của <code>APts</code> tăng theo mức can thiệp ở 9/9 tập (Bảng 5). Giới hạn: phép can thiệp này đổi luôn bậc và tổng giao dịch của nút; ở mức 5%, <code>APts</code> phản ứng với nó yếu hơn với việc bỏ ngẫu nhiên 5% giao dịch ở cả 9 tập. Phát hiện điểm chuyển: AUC trung vị của <code>APts</code> 0,69 so với 0,47 của nhánh B, nhưng thống kê đơn giản đạt 0,81 (hồi cứu, co giãn toàn chuỗi).</li>
                  <li><strong>Hiệu quả tính toán (Efficiency):</strong> Bước dựng Mapper mỗi ngày nhanh hơn nhánh B trung vị 186 lần (146 lần khi đo qua API trên 54 ngày). Phần lớn mức này đến từ việc bỏ t-SNE và KMeans: so với PCA tính lại mỗi ngày, <code>APts</code> chỉ nhanh hơn trung vị 2,57 lần.</li>
                </ul>
              </div>

              {/* Thẻ 4: Điều kiện biên & Giới hạn nghiên cứu */}
              <div className="p-5 rounded-xl bg-amber-50 border border-amber-200 space-y-2">
                <div className="font-extrabold text-lg text-amber-900">4. Điều kiện biên &amp; Giới hạn nghiên cứu:</div>
                <p className="text-sm text-slate-800">
                  Dưới nhiễu nhân 1% trong thực nghiệm tiền xử lý tuyến tính hoàn toàn từ quá khứ, ở 5/9 tập token có ngưỡng bán kính <M tex="h \le 10^{-5}" /> quá nhỏ so với độ dịch nhiễu (<M tex="\varepsilon \approx 10^{-3}" />), các cụm bị phân mảnh (<M tex="S_{\text{noise}} \approx 1" />). Nguyên nhân nghi ngờ (chưa kiểm bằng thí nghiệm cô lập): bước co giãn tuyến tính trọng số giao dịch về [1, 10]. Cách xử lý (lấy log trọng số trước khi co giãn, gộp giá trị gần trùng khi tính h, hoặc giữ nguyên và báo cáo giới hạn) đang chờ GVHD chọn.
                </p>
              </div>
            </div>

            {/* Sơ đồ Pipeline Trực quan Hình khối */}
            <div className="p-5 rounded-xl bg-slate-50 border-2 border-blue-600 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="font-extrabold text-blue-900 text-sm md:text-base uppercase">
                  Sơ đồ Pipeline Trực quan của Luận văn (Visual Graphical Pipeline)
                </div>
                <span className="px-2.5 py-0.5 rounded bg-blue-100 text-blue-900 font-mono text-xs font-bold">Vector SVG sắc nét</span>
              </div>
              <img src={`${BASE}figures/fig_apts_pipeline.png`} alt="Sơ đồ Pipeline trực quan luận văn APts" className="w-full h-auto bg-white rounded-xl border border-slate-300 p-2" />
              <p className="mt-2 text-xs text-amber-900 bg-amber-50 border border-amber-200 rounded-lg p-2.5"><strong>Điều kiện đọc kèm sơ đồ:</strong> các con số 13,1×, 186× và AUC 0,69 so với 0,47 lấy từ thực nghiệm co giãn trọng số giao dịch theo cực đại của toàn chuỗi, tức là có dùng thông tin của giai đoạn đánh giá (tương lai); AUC là phát hiện điểm chuyển hồi cứu. "GraphPulse" trong sơ đồ là nhánh B (t-SNE theo cấu hình bài báo GraphPulse, do em cài lại), không phải toàn bộ mô hình GraphPulse. Sơ đồ chưa vẽ bước co giãn tuyến tính trọng số giao dịch về [1, 10] trước khi tính 4 đặc trưng.</p>
            </div>
          </section>
        )}

        {/* ================================================================= */}
        {/* TRANG 1: CHẶNG 1 — GRAPHPULSE, DỮ LIỆU 4D/5D/8D & 4 NGUỒN BẤT ỔN */}
        {/* ================================================================= */}
        {isVisible('chang1') && (
          <section className="bg-white border border-slate-300 rounded-2xl p-6 md:p-8 space-y-8 shadow-sm">
            <div className="border-b border-slate-200 pb-4">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">CHẶNG 1 • BÀI TOÁN, GRAPHPULSE &amp; 4 NGUỒN BẤT ỔN (CHUYÊN ĐỀ 1)</div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Phần 1: Đồ thị động, Quy trình Mapper trong GraphPulse &amp; 4 Nguồn gây bất ổn</h2>
            </div>

            {/* 1. Hình ảnh gốc từ 2 bài báo nền tảng */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-300 space-y-4">
              <h3 className="text-lg font-extrabold text-slate-900">1. Hình ảnh gốc trích trực tiếp từ 2 bài báo nền tảng (Singh et al., 2007 &amp; Shamsi et al., ICLR 2024)</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-2">
                  <div className="text-xs font-bold text-slate-800">Hình gốc 1 — Quy trình Mapper kinh điển (Singh, Mémoli &amp; Carlsson, 2007 — Figure 1):</div>
                  <img src={`${BASE}figures/singh2007_fig1.jpeg`} alt="Singh 2007 Mapper Figure 1" className="w-full h-auto rounded-lg border border-slate-200" />
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-2">
                  <div className="text-xs font-bold text-slate-800">Hình gốc 2 — Kiến trúc tổng thể GraphPulse (Shamsi et al., ICLR 2024 — Figure 3):</div>
                  <img src={`${BASE}figures/graphpulse_fig3.jpeg`} alt="GraphPulse Figure 3" className="w-full h-auto rounded-lg border border-slate-200" />
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-2">
                  <div className="text-xs font-bold text-slate-800">Hình gốc 3 — Minh họa đồ thị động &amp; chuỗi lát cắt (GraphPulse — Figure 1 &amp; Figure 2):</div>
                  <div className="grid grid-cols-2 gap-2">
                    <img src={`${BASE}figures/graphpulse_fig1.jpeg`} alt="GraphPulse Figure 1" className="w-full h-auto rounded border border-slate-200" />
                    <img src={`${BASE}figures/graphpulse_fig2.jpeg`} alt="GraphPulse Figure 2" className="w-full h-auto rounded border border-slate-200" />
                  </div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-2">
                  <div className="text-xs font-bold text-slate-800">Hình gốc 4 — Trích xuất 5 đặc trưng từ Đồ thị Mapper (GraphPulse — Figure 4):</div>
                  <img src={`${BASE}figures/graphpulse_fig4.jpeg`} alt="GraphPulse Figure 4" className="w-full h-auto rounded-lg border border-slate-200" />
                </div>
              </div>
            </div>

            {/* Phân biệt 4D vs 5D vs 8D */}
            <div className="p-5 rounded-xl bg-blue-50 border border-blue-300 space-y-2">
              <div className="font-extrabold text-blue-950 text-base">Phân biệt rành mạch 3 con số hay bị nhầm: 4D Đầu vào — 5D Mapper — 8D Tổng hợp</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-800 pt-1">
                <div className="p-3.5 rounded-lg bg-white border border-blue-200">
                  <div className="font-bold text-blue-900">1. Vector 4D Đầu vào (<M tex="\mathbf{X}_t \in \mathbb{R}^{N_t \times 4}" />)</div>
                  <p className="mt-1">Tính cho <strong>từng tài khoản</strong> trong ngày: Tổng trọng số gửi, Tổng trọng số nhận, Bậc gửi, Bậc nhận.</p>
                </div>
                <div className="p-3.5 rounded-lg bg-white border border-emerald-200">
                  <div className="font-bold text-emerald-900">2. Vector 5D Đồ thị Mapper</div>
                  <p className="mt-1">Tóm tắt Đồ thị Mapper <M tex="M_t" />: Số nút Mapper, Số cạnh Mapper, Cụm lớn nhất, Cụm trung bình, Trọng số cạnh trung bình.</p>
                </div>
                <div className="p-3.5 rounded-lg bg-white border border-purple-200">
                  <div className="font-bold text-purple-900">3. Vector 8D cấp ngày (GraphPulse)</div>
                  <p className="mt-1">Ghép <strong>5 đặc trưng Mapper</strong> + <strong>3 đặc trưng đồ thị gốc</strong> (Số nút gốc, Số cạnh gốc, Mật độ đồ thị).</p>
                </div>
              </div>
            </div>

            {/* Bàn thí nghiệm 1.1 */}
            <MapperWorkbenchLab />

            {/* 2. Phân tích 4 nguồn bất ổn của GraphPulse */}
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-red-800 border-b border-slate-200 pb-2">
                2. Phân tích định lượng 4 nguồn gây bất ổn của GraphPulse khi chạy độc lập từng ngày
              </h3>
              <GraphPulseDiagnosticSvg />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-800">
                <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                  <strong className="text-red-900">Khâu 1 — Chuẩn hóa MinMax theo từng ngày:</strong> Chỉ cần 1 giao dịch ngoại lai (outlier) có quy mô lớn xuất hiện là cực đại <code>max</code> tăng vọt, nén 99% tài khoản thông thường về sát mốc 0.
                </div>
                <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                  <strong className="text-red-900">Khâu 2 — Phép chiếu t-SNE fit lại mỗi ngày:</strong> Tối ưu phi lồi làm xoay/lật trục (độ trôi Procrustes <strong>0,8839</strong>), chiếm <strong>98,2% thời gian</strong> (~420 ms/ngày) và lỗi ở 241 ngày có <M tex="N_t \le 30" />.
                </div>
                <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                  <strong className="text-red-900">Khâu 3 — Phép phủ cắt qua khối điểm trùng (Ties):</strong> Mạng thật có 5,1%–96,2% nút trùng vector 4D; biên ô cắt sát làm nhiễu <M tex="10^{-6}" /> đẩy cả trăm nút nhảy ô.
                </div>
                <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                  <strong className="text-red-900">Khâu 4 — Phân cụm KMeans (<M tex="k = 5" /> cố định):</strong> Ép chẻ 1 đám tự nhiên thành 5 mảnh tùy tiện, gây bất ổn đồng thành viên cụm.
                </div>
              </div>
            </div>

            {/* Mô phỏng Cá mập & Ties 1.2 */}
            <WhaleOutlierLab />

            {/* 4 Cơ sở khoa học Chặng 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 border-2 border-indigo-400 space-y-4">
              <div className="border-b border-indigo-200 pb-2">
                <div className="text-xs font-bold uppercase text-indigo-800">NỀN TẢNG LÝ THUYẾT CHẶNG 1 • 4 CƠ SỞ KHOA HỌC</div>
                <h3 className="text-xl font-extrabold text-slate-900 mt-1">4 Cơ sở khoa học đứng sau mô hình đồ thị động và quy trình Mapper</h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-sm text-slate-800">
                <div className="p-4 rounded-xl bg-white border border-slate-300 space-y-1">
                  <div className="font-extrabold text-indigo-900">1. Tại sao biểu diễn bằng lát cắt theo ngày <M tex="\{G_t\}" /> (<M tex="\Delta\tau = 24\text{h}" />)?</div>
                  <p>Theo lý thuyết mạng thời gian (Holme &amp; Saramäki, 2012; Kazemi et al., 2020), nếu chọn cửa sổ tích hợp quá ngắn (giây/phút), đồ thị sẽ quá thưa làm cấu trúc tô-pô suy biến; chu kỳ <strong>1 ngày (<M tex="\Delta\tau = 24\text{h}" />)</strong> phản ánh nhịp hoạt động tự nhiên của mạng giao dịch Ethereum và mạng xã hội. Dựa trên cơ sở đó, <strong>GraphPulse (Shamsi et al., ICLR 2024)</strong> đã thiết lập giao thức chuỗi lát cắt theo ngày; vì vậy, <strong>luận văn kế thừa nguyên vẹn giao thức này nhằm đảm bảo phép đối sánh công bằng giữa <code>APts</code> và phương pháp cơ sở</strong>. Lưu ý: đây là lựa chọn kế thừa chứ không khẳng định là độ dài cửa sổ tối ưu (độ nhạy theo cửa sổ giờ/tuần chưa được khảo sát).</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-300 space-y-1">
                  <div className="font-extrabold text-indigo-900">2. Tại sao chọn đúng 4 đặc trưng nút bậc nhất thay vì Betweenness/PageRank?</div>
                  <p>Độ phức tạp tuyến tính tuyệt đối <M tex="O(|E_t|)" /> (1 lần duyệt cạnh), đủ thống kê bậc một theo cả tần suất (bậc) lẫn dòng tiền (trọng số) ở 2 chiều gửi/nhận, và cố định biến đầu vào để cô lập đóng góp của thuật toán Mapper.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-300 space-y-1">
                  <div className="font-extrabold text-indigo-900">3. Cơ sở toán học của Mapper: Bổ đề Nerve (Borsuk, 1948; Singh et al., 2007)</div>
                  <p>Nếu họ tập mở phủ <M tex="\mathcal{U}" /> có mọi giao hữu hạn co rút được, phức hợp Nerve (nối cạnh khi <M tex="C_a \cap C_b \ne \emptyset" />) có cùng kiểu đồng luân (bảo toàn <M tex="\beta_0, \beta_1" />) với không gian gốc — lý giải vì sao bắt buộc <M tex="p > 0" />.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-300 space-y-1">
                  <div className="font-extrabold text-indigo-900">4. Tại sao dùng Phân tích Procrustes (<M tex="\min_{\mathbf{R}\in O(2)} \|\mathbf{Y}_1 - \mathbf{Y}_2\mathbf{R}\|_F" />)?</div>
                  <p>Ngay cả sau khi xoay/lật tối ưu để khớp 2 đám điểm, sai số Procrustes của <code>t-SNE</code> vẫn lên tới <strong>0,8839</strong> (gấp 2,6× PCA là 0,3349, đo trên các ngày gần tĩnh). Kết quả này ủng hộ nhận định t-SNE làm biến dạng hình học đám điểm giữa các ngày theo cách mà xoay/lật không bù được; PCA tính lại mỗi ngày vẫn còn 0,3349 vì dữ liệu thật cũng thay đổi.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================= */}
        {/* TRANG 2: CHẶNG 2 — GIẢI MÃ APts, 5 CƠ SỞ KHOA HỌC & ABLATION     */}
        {/* ================================================================= */}
        {isVisible('chang2') && (
          <section className="bg-white border border-slate-300 rounded-2xl p-6 md:p-8 space-y-8 shadow-sm">
            <div className="border-b border-slate-200 pb-4">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">CHẶNG 2 • PHƯƠNG PHÁP ĐỀ XUẤT APts &amp; NỀN TẢNG KHOA HỌC (CHUYÊN ĐỀ 2 • RQ1)</div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Chặng 2: Giải mã <code>APts</code> (4 chữ cái <code>A - P - t - s</code>) &amp; 5 Cơ sở Khoa học</h2>
            </div>

            {/* Sơ đồ 2 pha FIT / TRANSFORM */}
            <APtsTwoPhaseSvg />

            {/* 4 thẻ A - P - t - s */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-800">
              <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-300 space-y-1.5">
                <div className="font-extrabold text-emerald-900 text-base">1. Chữ <code>A</code> — Anchored Normalization (Chuẩn hóa neo)</div>
                <p>Lấy <M tex="\ln(1 + \mathbf{X})" /> để nén phân phối đuôi nặng, sau đó cố định cực trị <code>lo, hi</code> từ 70% quá khứ (<code>dev</code>) và chặn <code>clip[0, 1]</code>.</p>
              </div>
              <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-300 space-y-1.5">
                <div className="font-extrabold text-emerald-900 text-base">2. Chữ <code>P</code> — Anchored PCA (Phép chiếu PCA neo)</div>
                <p>Học ma trận chiếu trực chuẩn <M tex="\mathbf{W}_{\text{dev}} \in \mathbb{R}^{2\times 4}" /> từ quá khứ. Mọi ngày mới chỉ nhân ma trận <M tex="(\mathbf{Z}_t - \boldsymbol{\mu}_{\text{dev}})\mathbf{W}_{\text{dev}}^\top" />.</p>
              </div>
              <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-300 space-y-1.5">
                <div className="font-extrabold text-emerald-900 text-base">3. Chữ <code>t</code> — Tie-aware Cover (Phép phủ né điểm trùng)</div>
                <p>Tìm khe trống lớn nhất (largest gap) giữa các giá trị phân biệt trong cửa sổ phân vị <M tex="q^* \pm 0{,}02" /> để đặt biên né xa các khối điểm trùng.</p>
              </div>
              <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-300 space-y-1.5">
                <div className="font-extrabold text-emerald-900 text-base">4. Chữ <code>s</code> — Fixed-threshold Single Linkage (Liên kết đơn ngưỡng <M tex="h" />)</div>
                <p>Nối hai tài khoản trong cùng ô nếu khoảng cách 4D <M tex="\|\mathbf{z}_u - \mathbf{z}_v\|_2 \le h" />, với <M tex="h" /> neo cố định bằng phân vị 90% khoảng cách 1-NN ở quá khứ.</p>
              </div>
            </div>

            {/* 5 CƠ SỞ KHOA HỌC ĐẦY ĐỦ 100% */}
            <div className="p-6 rounded-2xl bg-slate-50 border-2 border-indigo-400 space-y-6">
              <div className="border-b border-indigo-200 pb-3">
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-800">NỀN TẢNG LÝ THUYẾT &amp; CƠ SỞ KHOA HỌC ĐẦY ĐỦ (TRẢ LỜI CÂU HỎI "TẠI SAO?")</div>
                <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mt-1">5 Cơ sở khoa học đứng sau từng quyết định thiết kế của Mapper neo thời gian (<code>APts</code>)</h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 text-sm text-slate-800">
                {/* Cơ sở 1 */}
                <div className="p-5 rounded-xl bg-white border border-slate-300 space-y-3 shadow-sm">
                  <span className="px-2.5 py-1 rounded bg-indigo-100 text-indigo-900 font-bold text-xs inline-block">CƠ SỞ 1 • QUÁ KHỨ (dev) 70% &amp; TÍNH NHÂN QUẢ</span>
                  <h4 className="font-extrabold text-slate-900 text-base">1. Quá khứ (<code>dev</code>) là gì? Tại sao lại cắt ở mốc 70%?</h4>
                  <p><strong>Bản chất thực tế:</strong> Giả sử mạng token <strong><code>AdEx</code> kéo dài 311 ngày</strong>:</p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li><strong>Giai đoạn 1 — 70% thời gian đầu (217 ngày đầu, từ ngày 1 đến <code>2018-02-01</code>):</strong> Gọi là <strong>Giai đoạn tham chiếu (<code>dev</code>)</strong>. Toàn bộ 217 ngày lịch sử này được dùng để ước lượng và <strong>đóng băng</strong> bộ tham số mỏ neo <M tex="\Theta_{\text{ref}}" />.</li>
                    <li><strong>Giai đoạn 2 — 30% thời gian cuối (94 ngày tiếp theo, ngày 218, 219…):</strong> Gọi là <strong>Giai đoạn đánh giá (<code>hold</code>)</strong>. Mỗi ngày mới đi qua chỉ áp thẳng phép biến đổi (<code>transform</code>) lên bộ tham số đã đóng băng, không dùng thông tin tương lai. Điều này đúng với mã hiện hành (kiểm tra tiền tố đạt 9/9 tập, Bảng 5); các thực nghiệm ở Bảng 4 và Bảng 6 co giãn trọng số theo toàn chuỗi nên chưa đạt điều kiện này.</li>
                  </ol>
                  <AdExTimelineSvg />
                  <p className="text-xs text-slate-700"><strong>Cơ sở khoa học:</strong> Nguyên tắc <strong>Đánh giá nhân quả theo thời gian (Temporal Causal Split — Tashman, 2000; Hyndman &amp; Athanasopoulos, 2021)</strong> chống rò rỉ dữ liệu tương lai (data leakage).</p>
                </div>

                {/* Cơ sở 2 */}
                <div className="p-5 rounded-xl bg-white border border-slate-300 space-y-3 shadow-sm">
                  <span className="px-2.5 py-1 rounded bg-indigo-100 text-indigo-900 font-bold text-xs inline-block">CƠ SỞ 2 • ĐỊNH LÝ ỔN ĐỊNH TDA (CARRIÈRE &amp; OUDOT, 2018)</span>
                  <h4 className="font-extrabold text-slate-900 text-base">2. Cơ sở khoa học nào để đề xuất ra "Mapper neo thời gian"?</h4>
                  <ol className="list-decimal pl-5 space-y-1.5">
                    <li><strong>Tiền đề lý thuyết TDA (Carrière &amp; Oudot, 2018; Dey et al., 2017):</strong> Với hàm lọc <strong>1 chiều</strong> và phép phủ giữ nguyên, mức thay đổi của Mapper được chặn theo mức thay đổi của hàm lọc <M tex="\|f - f'\|_\infty" />. Định lý không nói "chỉ khi", và không áp dụng trực tiếp cho hàm lọc 2 chiều của <code>APts</code>: đây là động cơ thiết kế, không phải bảo đảm.</li>
                    <li><strong>Tình huống trong GraphPulse (2024):</strong> GraphPulse ước lượng lại hàm lọc và thang chuẩn hóa mỗi ngày, nên <M tex="f_t" /> và <M tex="\mathcal{U}_t" /> thay đổi (<M tex="f_t \ne f_{t+1}" />) ngay cả khi dữ liệu gần như không đổi; khi đó cận ổn định nói trên không cho bảo đảm nhỏ.</li>
                    <li><strong>Thực nghiệm 4 hướng tiền đề:</strong> Cả G-Mapper (+240,1% dao động), SoftMapper (42,9% ngày không cạnh), GNN lens (không vượt <M tex="B_0 = -X" />) lẫn PCA theo ngày (26,05% ngày không cạnh) đều không đạt mục tiêu. Điều này gợi ý thử <strong>neo hệ quy chiếu <M tex="(f_{\text{ref}}, \mathcal{U}_{\text{ref}}, h_{\text{ref}})" /> từ quá khứ</strong>, nhưng không chứng minh việc neo là cần thiết. Vai trò riêng của việc neo chưa được kiểm bằng thí nghiệm chỉ thay đổi riêng bước neo.</li>
                  </ol>
                </div>

                {/* Cơ sở 3 */}
                <div className="p-5 rounded-xl bg-white border border-slate-300 space-y-3 shadow-sm">
                  <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-900 font-bold text-xs inline-block">CƠ SỞ 3 • PHÂN PHỐI ĐUÔI NẶNG &amp; LIPSCHITZ (CHỮ A)</span>
                  <h4 className="font-extrabold text-slate-900 text-base">3. Tại sao chọn <M tex="\ln(1+x)" /> + <code>clip[0, 1]</code> thay vì <code>MinMax</code> hay <code>Z-score</code>?</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong><code>MinMax</code> thất bại:</strong> Dữ liệu mạng tuân theo phân phối đuôi nặng (Clauset et al., 2009); 1 ví cá mập <M tex="10^6" /> làm 99% ví thường bị ép thành <M tex="0{,}00001" />.</li>
                    <li><strong><code>Z-score</code> / <code>IQR</code> không log:</strong> Ngoại lai vẫn văng ra tọa độ hàng nghìn, kéo lệch trục PCA.</li>
                    <li><strong>4 tính chất toán học của <M tex="\ln(1+x)" /> + <code>clip[0, 1]</code>:</strong> (1) Xử lý tự nhiên điểm <M tex="x=0" /> (<M tex="\ln(1+0)=0" />); (2) Nén bậc độ lớn nhân <M tex="10^1, 10^2, 10^6" /> thành tuyến tính <M tex="2{,}4;\, 4{,}6;\, 13{,}8" />; (3) Ổn định hóa nhiễu nhân: <M tex="|\ln(1+(1+\delta)x) - \ln(1+x)| \le |\ln(1+\delta)| \approx |\delta|" />; (4) <code>clip[0, 1]</code> chặn an toàn mọi đỉnh tương lai (thực nghiệm ghi nhận tỷ lệ cắt biên trung vị = 0,0%).</li>
                  </ul>
                </div>

                {/* Cơ sở 4 */}
                <div className="p-5 rounded-xl bg-white border border-slate-300 space-y-3 shadow-sm">
                  <span className="px-2.5 py-1 rounded bg-blue-100 text-blue-900 font-bold text-xs inline-block">CƠ SỞ 4 • PHÉP CHIẾU TRỰC GIAO 1-LIPSCHITZ (CHỮ P)</span>
                  <h4 className="font-extrabold text-slate-900 text-base">4. Tại sao chọn <code>PCA</code> làm hàm lọc 2D mà không chọn <code>t-SNE</code> hay <code>UMAP</code>?</h4>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li><strong>Ánh xạ tham số out-of-sample:</strong> <code>t-SNE</code> là phi tham số (không có ma trận chiếu cho ngày mới); <code>PCA</code> có ma trận trực chuẩn <M tex="\mathbf{W}_{\text{dev}} \in \mathbb{R}^{2\times 4}" /> chiếu mọi ngày mới vào đúng hệ trục cố định.</li>
                    <li><strong>Tính không giãn khoảng cách (1-Lipschitz):</strong> Vì <M tex="\|\mathbf{W}_{\text{dev}}\|_2 = 1" />, luôn có <M tex="\|\mathbf{l}'_u - \mathbf{l}_u\|_2 \le \|\mathbf{z}'_u - \mathbf{z}_u\|_2 \le \varepsilon_Z" /> — nhiễu 4D không bị khuếch đại xuống 2D (nền tảng chứng minh Mệnh đề điều kiện đủ).</li>
                    <li><strong>Tốc độ 106× &amp; Không sập khi ít nút:</strong> Nhanh hơn <code>t-SNE</code> 106× (4,17 ms vs 419,74 ms; ở 20.000 nút chỉ 2,2 ms vs 148 giây) và chạy hợp lệ với mọi <M tex="N_t \ge 1" />.</li>
                  </ol>
                </div>
              </div>

              {/* Cơ sở 5: Quy tắc chọn 2 ngưỡng */}
              <div className="p-5 rounded-xl bg-white border border-slate-300 space-y-4 shadow-sm">
                <span className="px-2.5 py-1 rounded bg-amber-100 text-amber-900 font-bold text-xs inline-block">CƠ SỞ 5 • QUY TẮC CHỌN NGƯỠNG TỰ ĐỘNG (CỬA SỔ ±2% &amp; PHÂN VỊ 90% 1-NN)</span>
                <h4 className="font-extrabold text-slate-900 text-base">5. Quy tắc chọn ngưỡng trong <code>APts</code> là gì? (Tại sao <M tex="N=2, p=0{,}40" />, cửa sổ <M tex="\pm 2\%" /> ở chữ <code>t</code> và phân vị 90% 1-NN ở chữ <code>s</code>?)</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center text-sm text-slate-800">
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-lg bg-amber-50 border border-amber-200">
                      <strong>A. Biên né trùng (Chữ <code>t</code>):</strong> Giữ lưới <M tex="(N=2, p=0{,}40)" /> theo cấu hình mô tả trong bài báo GraphPulse (mã công bố của GraphPulse dùng độ chồng lấn 0,3 và 2 cụm). Cửa sổ <M tex="\pm 0{,}02" /> là lựa chọn của luận văn, chưa phân tích độ nhạy. Lấy các tọa độ phân biệt <code>np.unique</code> từ quá khứ, tìm khe trống lớn nhất <M tex="\max(u_{(k+1)} - u_{(k)})" /> trong cửa sổ <M tex="[q^*-0{,}02,\; q^*+0{,}02]" /> và đặt biên vào chính giữa khe trống đó.
                    </div>
                    <div className="p-3.5 rounded-lg bg-emerald-50 border border-emerald-200">
                      <strong>B. Ngưỡng bán kính <M tex="h" /> (Chữ <code>s</code>):</strong> Lấy tập điểm 4D <strong>phân biệt</strong> <code>np.unique</code> (nếu không lọc <code>unique</code> thì điểm trùng làm khoảng cách 1-NN = 0!), dùng <code>cKDTree.query(..., k=2)</code> lấy láng giềng phân biệt gần nhất rồi chọn <strong>phân vị 90%</strong>: <M tex="h = \text{Quantile}_{0{,}90}(d_{1\text{-NN}})" />. Con số 0,90 là lựa chọn theo kinh nghiệm, chưa có tài liệu làm căn cứ và chưa phân tích độ nhạy. Khi tính h, mã lấy mẫu tối đa 20.000 véc-tơ phân biệt với hạt giống cố định.
                    </div>
                  </div>
                  <ThresholdsRuleSvg />
                </div>
              </div>
            </div>

            {/* Mô phỏng đối kháng 2.1 */}
            <MechanismDuelLab />

            {/* Phân tích 2 vấn đề cốt lõi về Ablation & Không gian khoảng cách */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-blue-50 border border-blue-200 space-y-3 flex flex-col justify-between">
                <div className="space-y-2 text-sm text-slate-800">
                  <h3 className="text-lg font-extrabold text-blue-900">Phân tích 1: Cấu trúc 6 nhánh cắt giảm (<code>B, P, AP, APt, APs, APts</code>)</h3>
                  <p><code>APt</code> = Neo + Né trùng (<code>t</code>) nhưng vẫn dùng <strong>KMeans</strong>. <code>APs</code> = Neo + Liên kết đơn (<code>s</code>) nhưng vẫn dùng <strong>lưới phân vị cũ</strong>. Trên thực nghiệm 993 ngày (co giãn toàn chuỗi), dưới nhiễu nhân 1%: <code>APs</code> đã thấp hơn <code>AP</code> ở 8/9 tập; trung vị độ bất ổn bằng 0 ở 1/9 tập với <code>APs</code> và 6/9 tập với <code>APts</code> (Centra: <code>APts</code> = 1,0). Đây là phân tích thăm dò; không kết luận được "chỉ khi ghép cả hai".</p>
                </div>
                <AblationLadderSvg />
              </div>

              <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-3 flex flex-col justify-between">
                <div className="space-y-2 text-sm text-slate-800">
                  <h3 className="text-lg font-extrabold text-emerald-900">Phân tích 2: Khoảng cách gom cụm tính trên 4D (<M tex="\mathbf{Z}_t" />) hay 2D (<M tex="\mathbf{L}_t" />)?</h3>
                  <p>Mặt phẳng 2D (<M tex="\mathbf{L}_t" />) chỉ dùng để <strong>chia ô lưới Cover</strong>. Khi gom cụm bên trong mỗi ô, <code>APts</code> <strong>quay lại đo khoảng cách Euclid trên không gian 4 chiều đã chuẩn hóa (<M tex="\mathbf{Z}_t" />)</strong> để tránh gom nhầm hai nút cách xa nhau ở chiều 3–4 chỉ vì bóng 2D đè lên nhau.</p>
                </div>
                <LampChair4D2DSvg />
              </div>
            </div>
          </section>
        )}

        {/* ================================================================= */}
        {/* TRANG 3: CHẶNG 3 — THƯỚC ĐO ĐỒNG THÀNH VIÊN & CƠ SỞ THỐNG KÊ      */}
        {/* ================================================================= */}
        {isVisible('chang3') && (
          <section className="bg-white border border-slate-300 rounded-2xl p-6 md:p-8 space-y-8 shadow-sm">
            <div className="border-b border-slate-200 pb-4">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">CHẶNG 3 • THƯỚC ĐO ĐÁNH GIÁ &amp; CHUẨN MỰC THỐNG KÊ (CHUYÊN ĐỀ 3 • RQ2 &amp; RQ3)</div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Chặng 3: Đo lường "Ổn định", "Nhạy", "Hiệu quả" &amp; 5 Cơ sở Thống kê Học thuật</h2>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">1. Thước đo cốt lõi: Độ bất ổn đồng thành viên cụm (<M tex="S(M_t, M'_t) = 1 - \kappa(\mathbf{c}_t, \mathbf{c}'_t)" />)</h3>
              <CoMembershipKappaSvg />
              <div className="p-4 rounded-xl bg-amber-50 border-l-4 border-amber-600 text-sm text-slate-900">
                <strong>Lưu ý từ thực nghiệm kiểm định hai ngày liên tiếp:</strong> Không được so thẳng ngày <M tex="t" /> với ngày <M tex="t+1" /> để kết luận thuật toán bất ổn, vì giữa 2 ngày thật chỉ có <strong>7–33% tài khoản lặp lại</strong> (số thăm dò; trên giả lập có phân phối không đổi cũng chỉ 44% địa chỉ lặp lại). Giả thuyết đặt trước rằng độ bất ổn giữa hai ngày liên tiếp xếp hạng các cấu hình giống độ bất ổn khi bỏ 2% giao dịch đã không đạt (Spearman <M tex="\rho = 0{,}1956 < 0{,}60" />). Phải đo trên <strong>cặp đồ thị gốc–nhiễu cùng một ngày <M tex="t" /></strong>!
              </div>
            </div>

            {/* Mô phỏng tính Kappa 3.1 */}
            <CoMembershipKappaLab />

            {/* 5 Cơ sở khoa học Chặng 3 */}
            <div className="p-6 rounded-2xl bg-slate-50 border-2 border-indigo-400 space-y-4">
              <div className="border-b border-indigo-200 pb-2">
                <div className="text-xs font-bold uppercase text-indigo-800">NỀN TẢNG LÝ THUYẾT CHẶNG 3 • 5 CƠ SỞ KHOA HỌC &amp; CHUẨN MỰC THỐNG KÊ</div>
                <h3 className="text-xl font-extrabold text-slate-900 mt-1">5 Cơ sở khoa học đứng sau khung đánh giá và kiểm định thống kê</h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-sm text-slate-800">
                <div className="p-4 rounded-xl bg-white border border-slate-300 space-y-1">
                  <div className="font-extrabold text-indigo-900">1. Tại sao dùng Cohen&apos;s Kappa (<M tex="\kappa" />) thay vì GED hay ARI?</div>
                  <p>GED không phát hiện việc tráo ruột bên trong cụm; ARI chỉ dùng cho phân hoạch rời nhau, còn một nút có thể thuộc nhiều cụm Mapper (vì các khoảng phủ chồng lấn nhau, độ chồng lấn <M tex="p = 0{,}4" />). Cohen&apos;s <M tex="\kappa" /> (Cohen, 1960) trên <M tex="N_t(N_t-1)/2" /> cặp nút xử lý tự nhiên cụm chồng lấn và trừ đi xác suất trùng ngẫu nhiên <M tex="p_e" />.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-300 space-y-1">
                  <div className="font-extrabold text-indigo-900">2. Tại sao phải có Đối chứng dương (Rewire Hub 5%–20%)?</div>
                  <p>Một thuật toán suy biến gom mọi nút vào 1 cụm luôn đạt <M tex="S=0" /> dưới nhiễu. Can thiệp chuyển cạnh về nút trung tâm 5%→10%→20% kiểm tra <M tex="S" /> có tăng theo mức can thiệp: trung vị của <code>APts</code> tăng đơn điệu ở 9/9 tập (Bảng 5). Giới hạn: phép chuyển cạnh đổi luôn bậc và tổng giao dịch của nút, tức đổi trực tiếp 4 đặc trưng đầu vào; ở mức 5%, bất ổn của <code>APts</code> dưới chuyển cạnh nhỏ hơn dưới bỏ 5% giao dịch ở cả 9 tập.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-300 space-y-1">
                  <div className="font-extrabold text-indigo-900">3. Tại sao chấm điểm chuyển bằng chênh lệch trung bình hai cửa sổ 5 ngày &amp; ROC-AUC?</div>
                  <p>Điểm của ngày t là khoảng cách giữa trung bình 5 ngày từ t trở đi và trung bình 5 ngày trước t, sau khi chuẩn hóa từng đặc trưng theo trung vị và MAD của cả chuỗi. Không cần học tham số nên không có rủi ro quá khớp; ROC-AUC không phụ thuộc một ngưỡng báo động cụ thể (Fawcett, 2006). <strong>Lưu ý:</strong> điểm của một ngày dùng cả các ngày sau nó, nên đây là phát hiện <strong>hồi cứu</strong>, không phải dự báo. Độ dài 5 ngày là lựa chọn của giao thức thực nghiệm.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-300 space-y-1">
                  <div className="font-extrabold text-indigo-900">4. Tại sao dùng Wilcoxon, Hodges–Lehmann &amp; Holm–Bonferroni?</div>
                  <p>Theo chuẩn mực <strong>Demšar (2006, JMLR)</strong> cho <M tex="N=9" /> tập dữ liệu không chuẩn Gaussian: dùng kiểm định phi tham số dấu hạng Wilcoxon ghép cặp, ước lượng độ lớn hiệu ứng Hodges–Lehmann (1963) và hiệu chỉnh đa kiểm định Holm–Bonferroni (1979) giữ <M tex="\text{FWER} \le 0{,}05" />.</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-sm text-slate-900">
                <strong>5. Cơ sở phương pháp luận của việc báo cáo trung thực Kết quả âm &amp; Điều kiện biên <M tex="h \le 10^{-5}" /> (Popper; Munafò et al., 2017):</strong> Công trình khoa học vững chắc luôn xác định rõ ranh giới hiệu lực và đối chứng sòng phẳng với thống kê cơ bản để chống thiên kiến công bố.
              </div>
            </div>
          </section>
        )}

        {/* ================================================================= */}
        {/* TRANG 4: TOÀN BỘ KẾT QUẢ THỰC NGHIỆM (RECHARTS + 6 BẢNG ĐẦY ĐỦ)   */}
        {/* ================================================================= */}
        {isVisible('experiments') && (
          <section className="bg-white border-2 border-emerald-600 rounded-2xl p-6 md:p-8 shadow-sm">
            <ExperimentsDashboard />
          </section>
        )}

        {/* ================================================================= */}
      </main>
    </div>
  )
}
