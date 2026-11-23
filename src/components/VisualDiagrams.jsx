import React, { useState } from 'react'

export function PainPointDiagram() {
  return (
    <div className="bg-white rounded-xl border border-red-200 p-2.5 shadow-sm">
      <svg viewBox="0 0 640 222" className="w-full h-auto block" role="img" aria-label="Minh họa đồ thị đầu vào 2 ngày gần như giống hệt nhưng đồ thị Mapper của GraphPulse nhảy loạn xạ">
        <defs>
          <marker id="arr-red-pain" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626" />
          </marker>
        </defs>
        <rect x="8" y="6" width="236" height="84" rx="10" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" />
        <text x="126" y="22" fontSize="11" fontWeight="800" fill="#1e293b" textAnchor="middle">Đầu vào Ngày t (Đồ thị gốc G_t)</text>
        <g stroke="#64748b" strokeWidth="1.6">
          <line x1="42" y1="58" x2="80" y2="40" /><line x1="42" y1="58" x2="80" y2="74" />
          <line x1="80" y1="40" x2="126" y2="56" /><line x1="80" y1="74" x2="126" y2="56" />
          <line x1="126" y1="56" x2="174" y2="40" /><line x1="126" y1="56" x2="174" y2="74" />
          <line x1="174" y1="40" x2="212" y2="58" /><line x1="174" y1="74" x2="212" y2="58" />
        </g>
        <g fill="#2563eb" stroke="#ffffff" strokeWidth="1.5">
          <circle cx="42" cy="58" r="6.5" /><circle cx="80" cy="40" r="6.5" /><circle cx="80" cy="74" r="6.5" />
          <circle cx="126" cy="56" r="8" fill="#1d4ed8" />
          <circle cx="174" cy="40" r="6.5" /><circle cx="174" cy="74" r="6.5" /><circle cx="212" cy="58" r="6.5" />
        </g>
        <rect x="254" y="31" width="132" height="34" rx="17" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.5" />
        <text x="320" y="45" fontSize="10.5" fontWeight="800" fill="#065f46" textAnchor="middle">≈ Gần như giống hệt</text>
        <text x="320" y="59" fontSize="9.5" fontWeight="600" fill="#047857" textAnchor="middle">(chỉ nhiễu nhẹ 1–2%)</text>

        <rect x="396" y="6" width="236" height="84" rx="10" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" />
        <text x="514" y="22" fontSize="11" fontWeight="800" fill="#1e293b" textAnchor="middle">Đầu vào Ngày t+1 (hoặc sau nhiễu nhẹ)</text>
        <g stroke="#64748b" strokeWidth="1.6">
          <line x1="430" y1="58" x2="468" y2="40" /><line x1="430" y1="58" x2="468" y2="74" />
          <line x1="468" y1="40" x2="514" y2="56" /><line x1="468" y1="74" x2="514" y2="56" />
          <line x1="514" y1="56" x2="562" y2="40" /><line x1="514" y1="56" x2="562" y2="74" />
          <line x1="562" y1="40" x2="600" y2="58" />
        </g>
        <line x1="562" y1="74" x2="600" y2="58" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3,2" />
        <g fill="#2563eb" stroke="#ffffff" strokeWidth="1.5">
          <circle cx="430" cy="58" r="6.5" /><circle cx="468" cy="40" r="6.5" /><circle cx="468" cy="74" r="6.5" />
          <circle cx="514" cy="56" r="8" fill="#1d4ed8" />
          <circle cx="562" cy="40" r="6.5" /><circle cx="562" cy="74" r="6.5" /><circle cx="600" cy="58" r="6.5" fill="#f59e0b" />
        </g>

        <line x1="126" y1="90" x2="126" y2="117" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr-red-pain)" />
        <text x="134" y="108" fontSize="9.5" fontWeight="700" fill="#991b1b">GraphPulse (t-SNE độc lập)</text>
        <line x1="514" y1="90" x2="514" y2="117" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr-red-pain)" />
        <text x="522" y="108" fontSize="9.5" fontWeight="700" fill="#991b1b">Chạy lại từ đầu</text>

        <rect x="8" y="121" width="236" height="94" rx="10" fill="#fff5f5" stroke="#fca5a5" strokeWidth="1.5" />
        <text x="126" y="137" fontSize="10.5" fontWeight="800" fill="#991b1b" textAnchor="middle">Mapper Ngày t (5 cụm nối liền)</text>
        <g stroke="#1d4ed8" strokeWidth="2.5">
          <line x1="50" y1="176" x2="105" y2="158" /><line x1="50" y1="176" x2="105" y2="195" />
          <line x1="105" y1="158" x2="168" y2="176" /><line x1="105" y1="195" x2="168" y2="176" />
          <line x1="168" y1="176" x2="212" y2="176" />
        </g>
        <circle cx="50" cy="176" r="11" fill="#2563eb" /><text x="50" y="180" fontSize="9" fontWeight="bold" fill="#fff" textAnchor="middle">C1</text>
        <circle cx="105" cy="158" r="11" fill="#059669" /><text x="105" y="162" fontSize="9" fontWeight="bold" fill="#fff" textAnchor="middle">C2</text>
        <circle cx="105" cy="195" r="11" fill="#7c3aed" /><text x="105" y="199" fontSize="9" fontWeight="bold" fill="#fff" textAnchor="middle">C3</text>
        <circle cx="168" cy="176" r="12" fill="#d97706" /><text x="168" y="180" fontSize="9" fontWeight="bold" fill="#fff" textAnchor="middle">C4</text>
        <circle cx="212" cy="176" r="9" fill="#0284c7" /><text x="212" y="179.5" fontSize="8.5" fontWeight="bold" fill="#fff" textAnchor="middle">C5</text>

        <rect x="254" y="149" width="132" height="38" rx="18" fill="#fef2f2" stroke="#dc2626" strokeWidth="2" />
        <text x="320" y="165" fontSize="10.5" fontWeight="800" fill="#b91c1c" textAnchor="middle">≠ Bất ổn cấu trúc!</text>
        <text x="320" y="179" fontSize="9.2" fontWeight="700" fill="#dc2626" textAnchor="middle">Đứt cạnh • Vỡ cụm</text>

        <rect x="396" y="121" width="236" height="94" rx="10" fill="#fef2f2" stroke="#dc2626" strokeWidth="1.8" strokeDasharray="5,3" />
        <text x="514" y="137" fontSize="10.5" fontWeight="800" fill="#b91c1c" textAnchor="middle">Mapper Ngày t+1 (Biến dạng hoàn toàn!)</text>
        <g stroke="#dc2626" strokeWidth="2" strokeDasharray="3,2">
          <line x1="428" y1="158" x2="480" y2="196" /><line x1="480" y1="196" x2="532" y2="160" />
        </g>
        <circle cx="428" cy="158" r="10" fill="#dc2626" /><text x="428" y="161.5" fontSize="8.5" fontWeight="bold" fill="#fff" textAnchor="middle">A?</text>
        <circle cx="480" cy="196" r="12" fill="#b91c1c" /><text x="480" y="199.5" fontSize="8.5" fontWeight="bold" fill="#fff" textAnchor="middle">B?</text>
        <circle cx="532" cy="160" r="9" fill="#ef4444" /><text x="532" y="163.5" fontSize="8.5" fontWeight="bold" fill="#fff" textAnchor="middle">C?</text>
        <circle cx="578" cy="158" r="8.5" fill="#991b1b" /><text x="578" y="161.5" fontSize="8" fontWeight="bold" fill="#fff" textAnchor="middle">D?</text>
        <circle cx="606" cy="192" r="9" fill="#dc2626" /><text x="606" y="195.5" fontSize="8" fontWeight="bold" fill="#fff" textAnchor="middle">E?</text>
        <circle cx="548" cy="198" r="8" fill="#f87171" /><text x="548" y="201" fontSize="8" fontWeight="bold" fill="#fff" textAnchor="middle">F?</text>
        <text x="580" y="179" fontSize="8.5" fontWeight="700" fill="#b91c1c" textAnchor="middle">(Cụm rời rạc!)</text>
      </svg>
    </div>
  )
}

export function GraphPulseDiagnosticSvg() {
  return (
    <div className="bg-white rounded-xl border-2 border-red-300 p-3 shadow-sm">
      <svg viewBox="0 0 960 232" className="w-full h-auto block" role="img" aria-label="Sơ đồ 6 bước quy trình GraphPulse và 4 nguồn gây bất ổn ở từng khâu">
        <defs>
          <marker id="arr-diag-slate" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#475569" />
          </marker>
          <marker id="arr-diag-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626" />
          </marker>
        </defs>
        <text x="480" y="18" fontSize="12" fontWeight="800" fill="#991b1b" textAnchor="middle">QUY TRÌNH GRAPHPULSE CHẠY ĐỘC LẬP TỪNG NGÀY — CHỈ RÕ 4 KHÂU GÂY BẤT ỔN &amp; CHẬM</text>

        <rect x="8" y="34" width="114" height="74" rx="10" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.6" />
        <text x="65" y="52" fontSize="10.5" fontWeight="800" fill="#0f172a" textAnchor="middle">1. Đồ thị gốc G_t</text>
        <g stroke="#64748b" strokeWidth="1.3">
          <line x1="36" y1="78" x2="65" y2="66" /><line x1="36" y1="78" x2="65" y2="92" />
          <line x1="65" y1="66" x2="94" y2="78" /><line x1="65" y1="92" x2="94" y2="78" />
        </g>
        <circle cx="36" cy="78" r="4.5" fill="#2563eb" /><circle cx="65" cy="66" r="4.5" fill="#2563eb" />
        <circle cx="65" cy="92" r="4.5" fill="#2563eb" /><circle cx="94" cy="78" r="4.5" fill="#2563eb" />
        <line x1="122" y1="71" x2="144" y2="71" stroke="#475569" strokeWidth="2" markerEnd="url(#arr-diag-slate)" />

        <rect x="148" y="34" width="142" height="74" rx="10" fill="#fef2f2" stroke="#dc2626" strokeWidth="2" />
        <text x="219" y="52" fontSize="10.5" fontWeight="800" fill="#991b1b" textAnchor="middle">2. Rút 4D &amp; MinMax</text>
        <text x="219" y="66" fontSize="9.5" fontWeight="700" fill="#dc2626" textAnchor="middle">(theo min/max ngày t)</text>
        <rect x="172" y="92" width="14" height="8" fill="#94a3b8" /><rect x="190" y="93" width="14" height="7" fill="#94a3b8" />
        <rect x="208" y="94" width="14" height="6" fill="#94a3b8" /><rect x="242" y="72" width="16" height="28" fill="#dc2626" />
        <text x="250" y="106" fontSize="7.5" fontWeight="700" fill="#dc2626" textAnchor="middle">Cá mập!</text>
        <line x1="290" y1="71" x2="312" y2="71" stroke="#475569" strokeWidth="2" markerEnd="url(#arr-diag-slate)" />

        <rect x="316" y="34" width="142" height="74" rx="10" fill="#fef2f2" stroke="#dc2626" strokeWidth="2" />
        <text x="387" y="52" fontSize="10.5" fontWeight="800" fill="#991b1b" textAnchor="middle">3. Chiếu t-SNE 2D</text>
        <text x="387" y="66" fontSize="9.5" fontWeight="700" fill="#dc2626" textAnchor="middle">(fit lại ngẫu nhiên)</text>
        <circle cx="387" cy="86" r="14" fill="none" stroke="#dc2626" strokeWidth="1.6" strokeDasharray="4,2" />
        <circle cx="381" cy="83" r="3" fill="#2563eb" /><circle cx="394" cy="89" r="3" fill="#059669" />
        <text x="419" y="90" fontSize="12" fontWeight="800" fill="#dc2626">↻</text>
        <line x1="458" y1="71" x2="480" y2="71" stroke="#475569" strokeWidth="2" markerEnd="url(#arr-diag-slate)" />

        <rect x="484" y="34" width="142" height="74" rx="10" fill="#fef2f2" stroke="#dc2626" strokeWidth="2" />
        <text x="555" y="52" fontSize="10.5" fontWeight="800" fill="#991b1b" textAnchor="middle">4. Phép phủ Cover</text>
        <text x="555" y="66" fontSize="9.5" fontWeight="700" fill="#dc2626" textAnchor="middle">(lưới 2×2 cắt mù quáng)</text>
        <rect x="524" y="73" width="32" height="26" fill="none" stroke="#1d4ed8" strokeWidth="1.2" />
        <rect x="550" y="73" width="32" height="26" fill="none" stroke="#d97706" strokeWidth="1.2" />
        <circle cx="553" cy="86" r="4.5" fill="#dc2626" /><circle cx="557" cy="82" r="3.5" fill="#dc2626" />
        <line x1="626" y1="71" x2="648" y2="71" stroke="#475569" strokeWidth="2" markerEnd="url(#arr-diag-slate)" />

        <rect x="652" y="34" width="142" height="74" rx="10" fill="#fef2f2" stroke="#dc2626" strokeWidth="2" />
        <text x="723" y="52" fontSize="10.5" fontWeight="800" fill="#991b1b" textAnchor="middle">5. Phân cụm KMeans</text>
        <text x="723" y="66" fontSize="9.5" fontWeight="700" fill="#dc2626" textAnchor="middle">(ép cứng k = 5 cụm)</text>
        <circle cx="723" cy="86" r="14" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.2" />
        <line x1="723" y1="72" x2="723" y2="100" stroke="#dc2626" strokeWidth="1.2" strokeDasharray="2,2" />
        <line x1="709" y1="86" x2="737" y2="86" stroke="#dc2626" strokeWidth="1.2" strokeDasharray="2,2" />
        <line x1="794" y1="71" x2="816" y2="71" stroke="#475569" strokeWidth="2" markerEnd="url(#arr-diag-slate)" />

        <rect x="820" y="34" width="132" height="74" rx="10" fill="#fff1f2" stroke="#b91c1c" strokeWidth="2" strokeDasharray="4,2" />
        <text x="886" y="52" fontSize="10.5" fontWeight="800" fill="#991b1b" textAnchor="middle">6. Mapper M_t</text>
        <text x="886" y="66" fontSize="9.5" fontWeight="700" fill="#b91c1c" textAnchor="middle">Biến dạng mạnh!</text>
        <circle cx="852" cy="88" r="6" fill="#dc2626" /><circle cx="886" cy="82" r="7" fill="#b91c1c" /><circle cx="920" cy="90" r="6" fill="#ef4444" />
        <line x1="858" y1="87" x2="879" y2="83" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="2,2" />

        <line x1="219" y1="108" x2="219" y2="137" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr-diag-red)" />
        <line x1="387" y1="108" x2="387" y2="137" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr-diag-red)" />
        <line x1="555" y1="108" x2="555" y2="137" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr-diag-red)" />
        <line x1="723" y1="108" x2="723" y2="137" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr-diag-red)" />

        <rect x="142" y="142" width="154" height="80" rx="8" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5" />
        <text x="219" y="160" fontSize="10.5" fontWeight="800" fill="#991b1b" textAnchor="middle">NGUỒN 1: Ngoại lai</text>
        <text x="219" y="177" fontSize="9.3" fill="#1e293b" textAnchor="middle">1 outlier làm max vọt lên</text>
        <text x="219" y="192" fontSize="9.3" fill="#1e293b" textAnchor="middle">→ nén 99% ví thường</text>
        <text x="219" y="208" fontSize="9.3" fontWeight="700" fill="#b91c1c" textAnchor="middle">về sát mốc 0</text>

        <rect x="310" y="142" width="154" height="80" rx="8" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5" />
        <text x="387" y="160" fontSize="10.5" fontWeight="800" fill="#991b1b" textAnchor="middle">NGUỒN 2: Trôi &amp; Chậm</text>
        <text x="387" y="177" fontSize="9.3" fill="#1e293b" textAnchor="middle">Xoay/lật trục (Procrustes</text>
        <text x="387" y="192" fontSize="9.3" fill="#1e293b" textAnchor="middle">0,8839), chiếm 98,2% TG,</text>
        <text x="387" y="208" fontSize="9.3" fontWeight="700" fill="#b91c1c" textAnchor="middle">lỗi ở 241 ngày N_t ≤ 30</text>

        <rect x="478" y="142" width="154" height="80" rx="8" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5" />
        <text x="555" y="160" fontSize="10.5" fontWeight="800" fill="#991b1b" textAnchor="middle">NGUỒN 3: Khối điểm trùng</text>
        <text x="555" y="177" fontSize="9.3" fill="#1e293b" textAnchor="middle">5,1%–96,2% nút trùng 4D;</text>
        <text x="555" y="192" fontSize="9.3" fill="#1e293b" textAnchor="middle">biên cắt sát → nhiễu 10⁻⁶</text>
        <text x="555" y="208" fontSize="9.3" fontWeight="700" fill="#b91c1c" textAnchor="middle">làm cả khối nhảy ô</text>

        <rect x="646" y="142" width="154" height="80" rx="8" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5" />
        <text x="723" y="160" fontSize="10.5" fontWeight="800" fill="#991b1b" textAnchor="middle">NGUỒN 4: Ép chia 5 cụm</text>
        <text x="723" y="177" fontSize="9.3" fill="#1e293b" textAnchor="middle">1 cụm tự nhiên bị chẻ</text>
        <text x="723" y="192" fontSize="9.3" fill="#1e293b" textAnchor="middle">thành 5 mảnh tùy tiện →</text>
        <text x="723" y="208" fontSize="9.3" fontWeight="700" fill="#b91c1c" textAnchor="middle">xé lẻ đồng thành viên</text>
      </svg>
    </div>
  )
}

const APTS_STEPS = [
  {
    id: 0,
    tag: 'Bước 0 · Tiền xử lý',
    fitTitle: 'Khóa khung giá trị giao dịch',
    fitSub: 'Lưu mức thấp nhất & cao nhất từ quá khứ',
    runTitle: 'Đưa tiền giao dịch về thang 1–10',
    runSub: 'Rồi cộng dồn thành 4 đặc trưng mỗi nút',
    plain: 'Trước khi tính đặc trưng, mọi giao dịch được quy đổi về cùng thang đo từ 1 đến 10 dựa trên mức nhỏ nhất/lớn nhất của 70% ngày quá khứ. Sau đó mới tính 4 con số cho mỗi tài khoản: tổng gửi, tổng nhận, số lần gửi, số lần nhận.',
    example: 'Ví dụ: Trong quá khứ, giao dịch nằm từ 1 đến 1.000 token. Ngày mới có giao dịch 500 token → quy về mức ~5,5 trên thang 1–10. Nếu có giao dịch vượt 1.000 → cắt gọn về tối đa 10 (không làm giãn thang đo).',
    why: 'GraphPulse tính lại theo từng ngày (hoặc toàn chuỗi dễ rò rỉ tương lai). APts khóa mốc từ quá khứ để đảm bảo nhân quả; lưu ý ở bản thực nghiệm mới, khi cực đại quá khứ quá lớn, đa số giao dịch thường bị ép sát mức 1 (nguyên nhân nghi ngờ của ngưỡng h nhỏ).',
  },
  {
    id: 1,
    tag: 'Bước 1 · Neo [A]',
    fitTitle: 'Khóa thang chuẩn hóa log',
    fitSub: 'Lưu min/max của ln(1 + x) trên quá khứ',
    runTitle: 'Nén số lớn & đưa về [0, 1]',
    runSub: 'Vượt ngưỡng thì cắt gọn (clip) vào [0, 1]',
    plain: 'Số giao dịch thường rất lệch (đa số gửi 1–2 lần, vài tài khoản gửi hàng nghìn lần). Ta lấy ln(1 + x) để nén đuôi nặng, rồi chia theo khung min/max đã khóa của quá khứ để mọi đặc trưng nằm gọn trong đoạn [0, 1].',
    example: 'Ví dụ: Quá khứ có số lần gửi từ 0 đến 1.000 (ln 1 = 0; ln 1001 ≈ 6,91). Tài khoản A gửi 50 lần → ln 51 ≈ 3,93 → chia ra được 0,569. Nếu có "cá mập" gửi 5.000 lần (ra 1,23) → cắt gọn thành 1,00.',
    why: 'Nhờ khóa khung [0, 1] và cắt gọn (clip), một tài khoản đột biến ở ngày mới không bao giờ làm co giãn tọa độ của hàng trăm tài khoản bình thường khác.',
  },
  {
    id: 2,
    tag: 'Bước 2 · Neo [P]',
    fitTitle: 'Khóa 2 trục chiếu PCA (4D → 2D)',
    fitSub: 'Lưu tâm trung bình và 2 hướng chính',
    runTitle: 'Chiếu mỗi nút xuống 1 điểm 2D',
    runSub: 'Chỉ nhân ma trận tuyến tính — cực nhanh',
    plain: 'Thay vì chạy lại t-SNE ngẫu nhiên tốn thời gian mỗi ngày, APts dùng đúng 2 trục PCA đã học trên 70% ngày quá khứ để chiếu véc-tơ 4 chiều của mỗi tài khoản xuống mặt phẳng 2D.',
    example: 'Ví dụ: Véc-tơ 4 chiều chuẩn hóa của tài khoản A là [0,57; 0,21; 0,40; 0,15] → sau khi trừ tâm và nhân 2 trục PCA cố định → ra đúng 1 tọa độ cố định trên mặt phẳng, ví dụ (x = 0,32; y = −0,18).',
    why: 'Triệt tiêu hoàn toàn độ xoay/lật ngẫu nhiên giữa các ngày (Procrustes drift giảm về ~0) và chạy nhanh hơn t-SNE trên 100 lần.',
  },
  {
    id: 3,
    tag: 'Bước 3 · Neo [t]',
    fitTitle: 'Khóa lưới 4 ô né điểm trùng',
    fitSub: 'Dời ranh giới ô vào khe trống lớn nhất',
    runTitle: 'Xếp điểm 2D vào các ô chồng lấn',
    runSub: 'Hai ô kề nhau chồng lấn 40% diện tích',
    plain: 'Mặt phẳng 2D được chia thành lưới 2×2 ô chồng lấn nhau. Khác với chia đều máy móc, APts tìm khe trống lớn nhất quanh vị trí dự kiến (±2% phân vị) để đặt ranh giới ô, tránh cắt ngang qua đám đông có cùng số giao dịch.',
    example: 'Ví dụ: Có 40 tài khoản cùng gửi đúng 1 giao dịch nên nằm chồng khít tại x = 0,10. Thay vì đặt biên lưới ngay x = 0,10 (nhiễu nhẹ làm nửa nhóm nhảy ô), APts dời biên vào khe trống x = 0,14.',
    why: 'Một điểm nằm trong vùng chồng lấn có thể thuộc cùng lúc 2 ô — đây chính là cầu nối để bước 4 nối các cụm lại thành đồ thị Mapper.',
  },
  {
    id: 4,
    tag: 'Bước 4 · Neo [s]',
    fitTitle: 'Khóa ngưỡng khoảng cách h',
    fitSub: 'Phân vị 90% khoảng cách láng giềng gần nhất',
    runTitle: 'Gom cụm & nối thành đồ thị Mapper',
    runSub: 'Nối cặp cách nhau ≤ h; nối cụm có nút chung',
    plain: 'Trong từng ô của lưới, APts không dùng KMeans khởi tạo ngẫu nhiên. Hai tài khoản cùng ô được nối với nhau nếu khoảng cách 4 chiều giữa chúng ≤ ngưỡng h đã khóa; mỗi nhóm liên thông tạo thành 1 đỉnh của đồ thị Mapper. Cuối cùng, hai cụm có chung ít nhất 1 tài khoản sẽ được nối cạnh.',
    example: 'Ví dụ: Trong Ô 1, tài khoản A cách B một đoạn 0,02 ≤ h nên gộp thành Cụm C1; trong Ô 2, B cách C một đoạn 0,03 ≤ h nên gộp thành Cụm C2. Vì C1 và C2 cùng chứa tài khoản B → nối cạnh C1—C2.',
    why: 'Hoàn toàn tất định (chạy lại bao nhiêu lần vẫn ra đúng 1 kết quả), không phụ thuộc hạt giống ngẫu nhiên như KMeans của GraphPulse.',
  },
]

export function APtsTwoPhaseSvg() {
  const [step, setStep] = useState(1)
  const cur = APTS_STEPS[step]

  return (
    <div className="bg-white rounded-2xl border-2 border-emerald-400 p-4 md:p-5 shadow-sm space-y-4">
      {/* Header + Hướng dẫn tương tác */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div>
          <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
            KIẾN TRÚC 2 PHA CỦA APts — BẤM TỪNG BƯỚC (0 → 4) ĐỂ XEM GIẢI THÍCH &amp; VÍ DỤ SỐ
          </div>
          <p className="text-xs text-slate-600 mt-0.5">
            <strong>Ý tưởng cốt lõi:</strong> Hàng trên (xanh dương) chỉ tính <strong>đúng 1 lần</strong> trên 70% ngày quá khứ rồi khóa lại; hàng dưới (xanh lá) dùng đúng bộ khóa đó cho từng ngày mới.
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="px-2.5 py-1 rounded-lg text-xs font-bold border border-slate-300 bg-slate-50 hover:bg-slate-100 disabled:opacity-40 cursor-pointer"
          >
            ← Bước trước
          </button>
          <button
            onClick={() => setStep((s) => Math.min(4, s + 1))}
            disabled={step === 4}
            className="px-2.5 py-1 rounded-lg text-xs font-bold border border-emerald-600 bg-emerald-700 text-white hover:bg-emerald-800 disabled:opacity-40 cursor-pointer"
          >
            Bước tiếp →
          </button>
        </div>
      </div>

      {/* 2-Phase Interactive Grid (5 clickable columns) */}
      <div className="space-y-2.5">
        {/* PHA 1 */}
        <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-200 space-y-2">
          <div className="text-[11px] font-extrabold uppercase tracking-wide text-blue-900">
            PHA 1 — HỌC &amp; KHÓA THAM SỐ MỘT LẦN TRÊN DỮ LIỆU QUÁ KHỨ (70% NGÀY ĐẦU)
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
            {APTS_STEPS.map((st) => {
              const active = st.id === step
              return (
                <button
                  key={`p1-${st.id}`}
                  onClick={() => setStep(st.id)}
                  className={`text-left p-2.5 rounded-xl border-2 transition cursor-pointer ${
                    active
                      ? 'bg-blue-700 text-white border-blue-900 shadow-md scale-[1.01]'
                      : 'bg-white text-slate-800 border-blue-200 hover:border-blue-400 hover:bg-blue-50/60'
                  }`}
                >
                  <div className={`text-[10.5px] font-extrabold ${active ? 'text-sky-200' : 'text-blue-700'}`}>
                    🔒 {st.tag}
                  </div>
                  <div className="text-xs font-extrabold mt-0.5 leading-snug">{st.fitTitle}</div>
                  <div className={`text-[11px] mt-1 leading-snug ${active ? 'text-blue-100' : 'text-slate-600'}`}>
                    {st.fitSub}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Connector indicator */}
        <div className="flex items-center justify-center text-[11px] font-bold text-emerald-800 gap-2">
          <span>↓ Truyền bộ tham số đã khóa xuống Pha 2 (không ước lượng lại ở ngày mới) ↓</span>
        </div>

        {/* PHA 2 */}
        <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200 space-y-2">
          <div className="text-[11px] font-extrabold uppercase tracking-wide text-emerald-900">
            PHA 2 — ÁP DỤNG NHANH CHO TỪNG NGÀY MỚI (30% NGÀY ĐÁNH GIÁ)
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
            {APTS_STEPS.map((st) => {
              const active = st.id === step
              return (
                <button
                  key={`p2-${st.id}`}
                  onClick={() => setStep(st.id)}
                  className={`text-left p-2.5 rounded-xl border-2 transition cursor-pointer ${
                    active
                      ? 'bg-emerald-700 text-white border-emerald-900 shadow-md scale-[1.01]'
                      : 'bg-white text-slate-800 border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50/60'
                  }`}
                >
                  <div className={`text-[10.5px] font-extrabold ${active ? 'text-emerald-200' : 'text-emerald-700'}`}>
                    ▶ {st.tag}
                  </div>
                  <div className="text-xs font-extrabold mt-0.5 leading-snug">{st.runTitle}</div>
                  <div className={`text-[11px] mt-1 leading-snug ${active ? 'text-emerald-100' : 'text-slate-600'}`}>
                    {st.runSub}
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Detailed plain-language explanation card for the selected step */}
      <div className="p-4 rounded-xl bg-slate-50 border-2 border-slate-200 space-y-2.5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-md bg-blue-700 text-white text-xs font-extrabold">{cur.tag}</span>
          <span className="font-extrabold text-sm text-slate-900">{cur.fitTitle} → {cur.runTitle}</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 text-xs leading-relaxed">
          <div className="p-3 rounded-lg bg-white border border-slate-200 space-y-1">
            <div className="font-extrabold text-blue-900">1. Bước này làm gì?</div>
            <p className="text-slate-700">{cur.plain}</p>
          </div>
          <div className="p-3 rounded-lg bg-white border border-emerald-200 space-y-1">
            <div className="font-extrabold text-emerald-900">2. Ví dụ số dễ hiểu</div>
            <p className="text-slate-700">{cur.example}</p>
          </div>
          <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 space-y-1">
            <div className="font-extrabold text-amber-900">3. Tại sao khác GraphPulse?</div>
            <p className="text-amber-950">{cur.why}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function AdExTimelineSvg() {
  return (
    <svg viewBox="0 0 560 86" className="w-full h-auto bg-slate-50 rounded-lg border border-slate-200 p-1.5">
      <rect x="8" y="10" width="354" height="44" rx="8" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.6" />
      <text x="185" y="28" fontSize="11" fontWeight="800" fill="#1e3a8a" textAnchor="middle">70% QUÁ KHỨ (dev): 217 ngày</text>
      <text x="185" y="44" fontSize="9.5" fontWeight="600" fill="#1d4ed8" textAnchor="middle">Ngày 1 → 2018-02-01 • FIT 1 LẦN</text>
      <line x1="370" y1="4" x2="370" y2="62" stroke="#dc2626" strokeWidth="2" strokeDasharray="4,2" />
      <rect x="378" y="10" width="174" height="44" rx="8" fill="#d1fae5" stroke="#059669" strokeWidth="1.6" />
      <text x="465" y="28" fontSize="11" fontWeight="800" fill="#065f46" textAnchor="middle">30% TƯƠNG LAI (hold)</text>
      <text x="465" y="44" fontSize="9.5" fontWeight="600" fill="#047857" textAnchor="middle">94 ngày tiếp theo</text>
      <text x="185" y="74" fontSize="9.5" fontWeight="700" fill="#1e40af" textAnchor="middle">Đo đạc &amp; Đóng băng Mỏ neo Θ_ref (lo, hi, PCA, Cover, h)</text>
      <text x="465" y="74" fontSize="9.5" fontWeight="700" fill="#047857" textAnchor="middle">Ngày 218, 219… chỉ transform!</text>
    </svg>
  )
}

export function ThresholdsRuleSvg() {
  return (
    <svg viewBox="0 0 480 270" className="w-full h-auto bg-white rounded-xl border border-slate-300 p-2">
      <rect x="10" y="10" width="460" height="118" rx="8" fill="#fffbeb" stroke="#f59e0b" />
      <text x="20" y="28" fontSize="11" fontWeight="bold" fill="#92400e">A. Quy tắc chọn biên ô né điểm trùng (Cửa sổ phân vị q* ± 2%):</text>
      <line x1="30" y1="78" x2="445" y2="78" stroke="#475569" strokeWidth="2" />
      <rect x="145" y="42" width="195" height="58" fill="rgba(245,158,11,0.12)" stroke="#d97706" strokeDasharray="4,3" />
      <text x="242" y="54" fontSize="9.5" fontWeight="bold" fill="#b45309" textAnchor="middle">Cửa sổ tìm kiếm [q* − 2%, q* + 2%]</text>
      <circle cx="175" cy="78" r="6" fill="#dc2626" /><circle cx="179" cy="72" r="6" fill="#dc2626" />
      <circle cx="177" cy="84" r="6" fill="#dc2626" /><circle cx="183" cy="78" r="6" fill="#dc2626" />
      <line x1="179" y1="58" x2="179" y2="99" stroke="#dc2626" strokeWidth="2" strokeDasharray="2,2" />
      <text x="175" y="116" fontSize="9" fontWeight="bold" fill="#dc2626" textAnchor="middle">Biên q* cũ (cắt trúng đám trùng!)</text>
      <circle cx="315" cy="78" r="6" fill="#1d4ed8" /><circle cx="328" cy="78" r="6" fill="#1d4ed8" />
      <line x1="250" y1="58" x2="250" y2="99" stroke="#047857" strokeWidth="3" />
      <text x="250" y="94" fontSize="9" fontWeight="bold" fill="#047857" textAnchor="middle">← Khe trống Δ →</text>
      <text x="352" y="116" fontSize="9" fontWeight="bold" fill="#047857" textAnchor="middle">Biên mới b đặt giữa khe trống!</text>

      <rect x="10" y="140" width="460" height="120" rx="8" fill="#ecfdf5" stroke="#10b981" />
      <text x="20" y="158" fontSize="11" fontWeight="bold" fill="#065f46">B. Quy tắc chọn ngưỡng bán kính h = Phân vị 90% khoảng cách 1-NN (trên 4D):</text>
      <line x1="40" y1="232" x2="440" y2="232" stroke="#334155" strokeWidth="1.8" />
      <line x1="40" y1="170" x2="40" y2="232" stroke="#334155" strokeWidth="1.8" />
      <rect x="55" y="205" width="24" height="27" fill="#3b82f6" />
      <rect x="83" y="182" width="24" height="50" fill="#3b82f6" />
      <rect x="111" y="174" width="24" height="58" fill="#3b82f6" />
      <rect x="139" y="185" width="24" height="47" fill="#3b82f6" />
      <rect x="167" y="196" width="24" height="36" fill="#3b82f6" />
      <rect x="195" y="206" width="24" height="26" fill="#3b82f6" />
      <rect x="223" y="214" width="24" height="18" fill="#3b82f6" />
      <rect x="251" y="219" width="24" height="13" fill="#3b82f6" />
      <rect x="279" y="223" width="24" height="9" fill="#3b82f6" />
      <text x="315" y="176" fontSize="10" fontWeight="bold" fill="#047857" textAnchor="middle">Ngưỡng h (Phân vị 90%)</text>
      <line x1="315" y1="183" x2="315" y2="236" stroke="#047857" strokeWidth="3" strokeDasharray="4,2" />
      <rect x="332" y="225" width="24" height="7" fill="#dc2626" />
      <rect x="368" y="226" width="24" height="6" fill="#dc2626" />
      <rect x="404" y="227" width="24" height="5" fill="#dc2626" />
      <text x="175" y="248" fontSize="9.5" fontWeight="bold" fill="#1e3a8a" textAnchor="middle">90% khoảng cách ≤ h: Nối liền trong cùng cụm</text>
      <text x="385" y="248" fontSize="9.5" fontWeight="bold" fill="#dc2626" textAnchor="middle">10% &gt; h: Tách cụm khác nhau</text>
    </svg>
  )
}

export function AblationLadderSvg() {
  return (
    <svg viewBox="0 0 460 112" className="w-full h-auto bg-white rounded-lg border border-blue-300 p-1.5">
      <defs>
        <marker id="arr-abl" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#1d4ed8" />
        </marker>
      </defs>
      <rect x="8" y="34" width="56" height="44" rx="7" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5" />
      <text x="36" y="53" fontSize="11" fontWeight="800" fill="#991b1b" textAnchor="middle">B</text>
      <text x="36" y="68" fontSize="8.2" fill="#7f1d1d" textAnchor="middle">t-SNE gốc</text>
      <line x1="64" y1="56" x2="84" y2="56" stroke="#1d4ed8" strokeWidth="1.6" markerEnd="url(#arr-abl)" />

      <rect x="88" y="34" width="60" height="44" rx="7" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
      <text x="118" y="53" fontSize="11" fontWeight="800" fill="#92400e" textAnchor="middle">P</text>
      <text x="118" y="68" fontSize="8.2" fill="#78350f" textAnchor="middle">PCA ngày</text>
      <line x1="148" y1="56" x2="168" y2="56" stroke="#1d4ed8" strokeWidth="1.6" markerEnd="url(#arr-abl)" />

      <rect x="172" y="34" width="66" height="44" rx="7" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" />
      <text x="205" y="53" fontSize="11" fontWeight="800" fill="#1e3a8a" textAnchor="middle">AP</text>
      <text x="205" y="68" fontSize="8.2" fill="#1e40af" textAnchor="middle">Neo A + P</text>

      <line x1="238" y1="48" x2="268" y2="28" stroke="#1d4ed8" strokeWidth="1.6" markerEnd="url(#arr-abl)" />
      <line x1="238" y1="64" x2="268" y2="84" stroke="#1d4ed8" strokeWidth="1.6" markerEnd="url(#arr-abl)" />

      <rect x="272" y="6" width="84" height="42" rx="7" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="1.5" />
      <text x="314" y="24" fontSize="10.5" fontWeight="800" fill="#312e81" textAnchor="middle">APt (+t)</text>
      <text x="314" y="39" fontSize="8" fill="#3730a3" textAnchor="middle">Né trùng + KMeans</text>

      <rect x="272" y="64" width="84" height="42" rx="7" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="1.5" />
      <text x="314" y="82" fontSize="10.5" fontWeight="800" fill="#312e81" textAnchor="middle">APs (+s)</text>
      <text x="314" y="97" fontSize="8" fill="#3730a3" textAnchor="middle">Lưới cũ + Liên kết h</text>

      <line x1="356" y1="28" x2="384" y2="48" stroke="#047857" strokeWidth="1.8" markerEnd="url(#arr-abl)" />
      <line x1="356" y1="84" x2="384" y2="64" stroke="#047857" strokeWidth="1.8" markerEnd="url(#arr-abl)" />

      <rect x="388" y="30" width="66" height="52" rx="8" fill="#d1fae5" stroke="#059669" strokeWidth="2" />
      <text x="421" y="51" fontSize="11.5" fontWeight="800" fill="#065f46" textAnchor="middle">APts</text>
      <text x="421" y="66" fontSize="8.2" fontWeight="700" fill="#047857" textAnchor="middle">Đủ A+P+t+s</text>
    </svg>
  )
}

export function LampChair4D2DSvg() {
  return (
    <svg viewBox="0 0 500 120" className="w-full h-auto bg-white rounded-lg border border-emerald-300 p-1.5">
      <rect x="6" y="10" width="218" height="100" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
      <text x="115" y="26" fontSize="9.6" fontWeight="800" fill="#065f46" textAnchor="middle">1. Không gian 4D (Z_t): Đo gom cụm</text>
      <circle cx="44" cy="60" r="8" fill="#1d4ed8" />
      <text x="44" y="82" fontSize="9.5" fontWeight="bold" fill="#1d4ed8" textAnchor="middle">Cây đèn (u)</text>
      <circle cx="182" cy="82" r="8" fill="#d97706" />
      <text x="182" y="102" fontSize="9.5" fontWeight="bold" fill="#b45309" textAnchor="middle">Cái ghế (v)</text>
      <line x1="53" y1="62" x2="173" y2="80" stroke="#dc2626" strokeWidth="2" strokeDasharray="4,3" />
      <text x="132" y="54" fontSize="9.2" fontWeight="bold" fill="#dc2626" textAnchor="middle">Cách xa &gt; h (Khác cụm!)</text>

      <text x="250" y="55" fontSize="10" fontWeight="bold" fill="#475569" textAnchor="middle">Chiếu</text>
      <text x="250" y="72" fontSize="16" fontWeight="bold" fill="#1d4ed8" textAnchor="middle">⟶</text>

      <rect x="276" y="10" width="218" height="100" rx="8" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
      <text x="385" y="26" fontSize="9.6" fontWeight="800" fill="#1e3a8a" textAnchor="middle">2. Mặt phẳng PCA 2D (L_t): Chia ô</text>
      <rect x="318" y="38" width="134" height="60" fill="rgba(59,130,246,0.1)" stroke="#1d4ed8" strokeDasharray="3,2" />
      <circle cx="380" cy="64" r="7.5" fill="#1d4ed8" />
      <circle cx="390" cy="66" r="7.5" fill="#d97706" fillOpacity="0.88" />
      <text x="385" y="90" fontSize="9.2" fontWeight="600" fill="#334155" textAnchor="middle">Bóng 2D trùng vào cùng 1 ô</text>
    </svg>
  )
}

export function CoMembershipKappaSvg() {
  return (
    <div className="bg-white rounded-xl border-2 border-blue-300 p-3 shadow-sm">
      <svg viewBox="0 0 920 176" className="w-full h-auto block" role="img" aria-label="Sơ đồ minh họa cách tính thước đo đồng thành viên cụm">
        <defs>
          <marker id="arr-k" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#1d4ed8" />
          </marker>
        </defs>
        <text x="460" y="18" fontSize="11.5" fontWeight="800" fill="#1e3a8a" textAnchor="middle">QUY TRÌNH ĐO ĐỘ BẤT ỔN ĐỒNG THÀNH VIÊN CỤM (CO-MEMBERSHIP INSTABILITY S = 1 − κ) TRÊN CÙNG MỘT NGÀY t</text>

        <rect x="10" y="30" width="210" height="134" rx="10" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.6" />
        <text x="115" y="48" fontSize="10.5" fontWeight="800" fill="#1e3a8a" textAnchor="middle">1. Mapper Bản gốc M_t</text>
        <ellipse cx="86" cy="96" rx="58" ry="34" fill="rgba(37,99,235,0.14)" stroke="#2563eb" strokeWidth="1.8" />
        <ellipse cx="148" cy="96" rx="54" ry="34" fill="rgba(5,150,105,0.14)" stroke="#059669" strokeWidth="1.8" />
        <text x="62" y="76" fontSize="8.8" fontWeight="700" fill="#1d4ed8">Cụm 1</text>
        <text x="148" y="76" fontSize="8.8" fontWeight="700" fill="#047857">Cụm 2</text>
        <circle cx="56" cy="100" r="10" fill="#1d4ed8" /><text x="56" y="103.5" fontSize="9.5" fontWeight="bold" fill="#fff" textAnchor="middle">A</text>
        <circle cx="116" cy="96" r="10" fill="#7c3aed" /><text x="116" y="99.5" fontSize="9.5" fontWeight="bold" fill="#fff" textAnchor="middle">B</text>
        <circle cx="166" cy="100" r="10" fill="#059669" /><text x="166" y="103.5" fontSize="9.5" fontWeight="bold" fill="#fff" textAnchor="middle">C</text>
        <text x="115" y="151" fontSize="9" fontWeight="700" fill="#334155" textAnchor="middle">(A,B)=1 • (B,C)=1 • (A,C)=0</text>

        <line x1="220" y1="97" x2="246" y2="97" stroke="#1d4ed8" strokeWidth="2" markerEnd="url(#arr-k)" />
        <text x="233" y="88" fontSize="7.8" fontWeight="800" fill="#d97706" textAnchor="middle">+Nhiễu</text>

        <rect x="250" y="30" width="210" height="134" rx="10" fill="#fef2f2" stroke="#dc2626" strokeWidth="1.6" />
        <text x="355" y="48" fontSize="10.5" fontWeight="800" fill="#991b1b" textAnchor="middle">2. Mapper Sau nhiễu M&apos;_t</text>
        <ellipse cx="318" cy="96" rx="54" ry="32" fill="rgba(37,99,235,0.14)" stroke="#2563eb" strokeWidth="1.8" />
        <ellipse cx="412" cy="96" rx="34" ry="28" fill="rgba(220,38,38,0.14)" stroke="#dc2626" strokeWidth="1.8" strokeDasharray="4,2" />
        <circle cx="294" cy="98" r="10" fill="#1d4ed8" /><text x="294" y="101.5" fontSize="9.5" fontWeight="bold" fill="#fff" textAnchor="middle">A</text>
        <circle cx="344" cy="98" r="10" fill="#7c3aed" /><text x="344" y="101.5" fontSize="9.5" fontWeight="bold" fill="#fff" textAnchor="middle">B</text>
        <circle cx="412" cy="98" r="10" fill="#dc2626" /><text x="412" y="101.5" fontSize="9.5" fontWeight="bold" fill="#fff" textAnchor="middle">C</text>
        <text x="355" y="151" fontSize="9" fontWeight="700" fill="#b91c1c" textAnchor="middle">(A,B)=1 • (B,C)=0 (Đổi!) • (A,C)=0</text>

        <line x1="460" y1="97" x2="486" y2="97" stroke="#1d4ed8" strokeWidth="2" markerEnd="url(#arr-k)" />

        <rect x="490" y="30" width="210" height="134" rx="10" fill="#f8fafc" stroke="#64748b" strokeWidth="1.6" />
        <text x="595" y="48" fontSize="10.5" fontWeight="800" fill="#0f172a" textAnchor="middle">3. So sánh mọi cặp nút (u, v)</text>
        <text x="595" y="66" fontSize="9.2" fill="#475569" textAnchor="middle">Chung ≥ 1 cụm = 1 • Khác = 0</text>
        <rect x="506" y="76" width="178" height="28" rx="5" fill="#dbeafe" />
        <text x="595" y="94" fontSize="10" fontFamily="monospace" fontWeight="bold" fill="#1e3a8a" textAnchor="middle">c_t  = [ 1,  1,  0, ... ]</text>
        <rect x="506" y="110" width="178" height="28" rx="5" fill="#fee2e2" />
        <text x="595" y="128" fontSize="10" fontFamily="monospace" fontWeight="bold" fill="#991b1b" textAnchor="middle">c&apos;_t = [ 1,  0,  0, ... ]</text>
        <text x="595" y="154" fontSize="9" fontWeight="600" fill="#475569" textAnchor="middle">Xử lý tự nhiên cụm chồng lấn!</text>

        <line x1="700" y1="97" x2="726" y2="97" stroke="#1d4ed8" strokeWidth="2" markerEnd="url(#arr-k)" />

        <rect x="730" y="30" width="180" height="134" rx="10" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
        <text x="820" y="50" fontSize="10.5" fontWeight="800" fill="#065f46" textAnchor="middle">4. Tính Cohen&apos;s κ &amp; S</text>
        <text x="820" y="76" fontSize="11.5" fontWeight="800" fill="#0f172a" textAnchor="middle">κ = (p_o − p_e) / (1 − p_e)</text>
        <rect x="748" y="88" width="144" height="30" rx="6" fill="#059669" />
        <text x="820" y="107" fontSize="12" fontWeight="800" fill="#ffffff" textAnchor="middle">S = 1 − κ</text>
        <text x="820" y="136" fontSize="9.2" fontWeight="700" fill="#047857" textAnchor="middle">S = 0: Bất biến hoàn toàn</text>
        <text x="820" y="152" fontSize="9.2" fontWeight="700" fill="#dc2626" textAnchor="middle">S ≈ 1: Vỡ cụm ngẫu nhiên</text>
      </svg>
    </div>
  )
}
