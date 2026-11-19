// Toàn bộ số liệu thực nghiệm chính xác 100% trích trực tiếp từ các tệp kết quả JSON của luận văn
// Tuyệt đối không sử dụng các mã viết tắt nội bộ trong văn bản hiển thị.

export const DATASET_STATS = [
  { ds: 'AdEx', type: 'Token Ethereum', edges: '80.337', days: 311, cut: '2018-02-01', split: '217 / 94 (88 ngày chuẩn)', nodesMed: '188,0 (1.629)', edgesMed: '194,0', tieShare: '10,0%', tieNum: 10.0 },
  { ds: 'Aragon', type: 'Token Ethereum', edges: '130.271', days: 355, cut: '2018-01-19', split: '248 / 107 (102 ngày chuẩn)', nodesMed: '289,0 (1.125)', edgesMed: '311,0', tieShare: '10,6%', tieNum: 10.6 },
  { ds: 'Bancor', type: 'Token Ethereum', edges: '105.238', days: 329, cut: '2018-01-27', split: '230 / 99 (94 ngày chuẩn)', nodesMed: '226,0 (3.078)', edgesMed: '240,0', tieShare: '16,7%', tieNum: 16.7 },
  { ds: 'Centra', type: 'Token Ethereum', edges: '81.801', days: 276, cut: '2018-02-12', split: '193 / 83 (78 ngày chuẩn)', nodesMed: '163,5 (2.767)', edgesMed: '169,5', tieShare: '15,3%', tieNum: 15.3 },
  { ds: 'CoinDash', type: 'Token Ethereum', edges: '98.768', days: 286, cut: '2018-02-09', split: '200 / 86 (80 ngày chuẩn)', nodesMed: '195,0 (2.767)', edgesMed: '232,5', tieShare: '5,1%', tieNum: 5.1 },
  { ds: 'DGD', type: 'Token Ethereum', edges: '66.448', days: 737, cut: '2017-09-26', split: '515 / 222 (213 ngày chuẩn)', nodesMed: '53,0 (771)', edgesMed: '58,0', tieShare: '5,2%', tieNum: 5.2 },
  { ds: 'Iconomi', type: 'Token Ethereum', edges: '114.914', days: 560, cut: '2017-11-19', split: '392 / 168 (163 ngày chuẩn)', nodesMed: '120,5 (905)', edgesMed: '140,5', tieShare: '6,3%', tieNum: 6.3 },
  { ds: 'MathOverflow', type: 'Mạng hỏi đáp', edges: '506.550', days: 2350, cut: '2014-04-01', split: '1.645 / 705 (55 ngày mẫu)', nodesMed: '149,0 (238)', edgesMed: '208,0', tieShare: '88,8%', tieNum: 88.8 },
  { ds: 'Reddit', type: 'Liên kết cộng đồng', edges: '286.561', days: 1217, cut: '2016-04-29', split: '851 / 366 (120 ngày mẫu)', nodesMed: '352,0 (643)', edgesMed: '233,0', tieShare: '96,2%', tieNum: 96.2 },
]

export const LENS_TIMING = [
  { name: 't-SNE Barnes–Hut (GraphPulse)', share: '98,2% (min 81,1%)', medMs: '419,74 ms', speedup: '1,00× (Chuẩn)', n20k: '148,12 giây (bậc mũ 1,24)', highlight: 'red' },
  { name: 't-SNE Chính xác (Exact)', share: '99,4% (min 90,0%)', medMs: '1.179,46 ms', speedup: '0,34× (chậm hơn)', n20k: '15,82 giây ở N = 1.000', highlight: '' },
  { name: 't-SNE Nội suy FFT (FIt-SNE)', share: '99,9% (min 99,7%)', medMs: '6.775,38 ms', speedup: '0,06× (chậm hơn)', n20k: '96,54 giây (bậc mũ 0,67)', highlight: '' },
  { name: 'UMAP 2 chiều', share: '99,1% (min 90,0%)', medMs: '740,30 ms', speedup: '0,49× (chậm hơn)', n20k: '9,53 giây (bậc mũ 0,62)', highlight: '' },
  { name: 'PCA 2 chiều', share: '11,5% (min 6,0%)', medMs: '4,17 ms', speedup: '106,0× (IQR: 52,7–158,3×)', n20k: '0,0022 giây (2,2 ms)', highlight: 'green' },
]

export const PRIOR_DIRECTIONS = [
  {
    name: '1. Phép phủ thích ứng theo dữ liệu từng ngày (G-Mapper v2.2, tối thiểu 4 ô)',
    gain: 'Tự động tách khoảng phủ theo phân phối từng ngày.',
    failure: 'Làm độ dao động cấu trúc giữa các ngày tăng lên ở cả 8/8 tập dữ liệu (trung vị +240,1%, kiểm định Wilcoxon p = 0,0039) do ranh giới ô trôi theo từng lát cắt.',
  },
  {
    name: '2. Gán mềm xác suất vào các khoảng phủ (SoftMapper)',
    gain: 'Giảm độ dao động toàn chuỗi (−39,5%, p = 0,0039).',
    failure: 'Bản hiệu chỉnh trên tập DGD chưa giảm phương sai ở phần kiểm tra (tỷ số 1,015, KTC 95% [0,79; 1,14]) và sinh tới 42,9% số ngày đồ thị Mapper không có cạnh (so với 1,5% của phủ cố định).',
  },
  {
    name: '3. Hàm lọc học sâu GNN (EvolveGCN / DyG-SoftMapper)',
    gain: 'Đạt AUC trung bình 0,8376 (EvolveGCN-O) và 0,8216 (GNN lens) trên 27 ô đánh giá.',
    failure: 'Không vượt qua được quy tắc dự báo không học B₀ = −X (lý thuyết i.i.d. đạt 5/6 ≈ 0,8333; thực nghiệm trên 27 ô đạt 0,8419) do mục tiêu dự báo bước kế tiếp bị chi phối bởi hiệu ứng hồi quy về trung bình.',
  },
  {
    name: '4. Chỉ thay t-SNE bằng PCA tính lại theo từng ngày (Nhánh P)',
    gain: 'Giảm độ trôi góc xoay Procrustes từ 0,8839 xuống 0,3349 (−62,1%, p = 0,00195); nhanh hơn 106×.',
    failure: 'Vì vẫn đi kèm MinMax theo ngày và KMeans(k=5) nên tỷ lệ ngày đồ thị không cạnh tăng vọt lên 19,7%–66,0% ở 6/9 tập (trung bình 26,05% so với 0,92% của t-SNE).',
  },
]

export const CONSECUTIVE_DAY_ROWS = [
  { scen: '1. Kịch bản Thay đổi Tần suất giao dịch (rate)', rho: '+0,0311', aucB: '0,6090', aucP: '0,5945', aucAP: '0,6635' },
  { scen: '2. Kịch bản Thay đổi Giá trị giao dịch (value)', rho: '+0,4921', aucB: '0,4695', aucP: '0,4549', aucAP: '0,4542' },
  { scen: '3. Kịch bản Xuất hiện Nút mới (new)', rho: '+0,2211', aucB: '0,4956', aucP: '0,7028', aucAP: '0,6337' },
  { scen: '4. Kịch bản Hỗn hợp (mix)', rho: '−0,0952', aucB: '0,5451', aucP: '0,5196', aucAP: '0,5276' },
]

export const ROBUSTNESS_993_DATA = [
  {
    ds: 'AdEx', n: 88, h: '0,0399',
    B: { sdrop: 0.1683, snoise: 0.2878, edgeless: '0,0%', nodes: '18,0', tms: 300.18 },
    P: { sdrop: 0.0427, snoise: 0.0, edgeless: '18,2%', nodes: '10,0', tms: 4.14 },
    AP: { sdrop: 0.0154, snoise: 0.3572, edgeless: '0,0%', nodes: '11,0', tms: 4.35 },
    APt: { sdrop: 0.0156, snoise: 0.4282, edgeless: '0,0%', nodes: '13,0', tms: 5.68 },
    APs: { sdrop: 0.0128, snoise: 0.0, edgeless: '0,0%', nodes: '18,5', tms: 1.57 },
    APts: { sdrop: 0.0128, snoise: 0.0, edgeless: '0,0%', nodes: '20,0', tms: 1.61 },
    ratioDrop: '13,1×', speedupB: 186.1, speedupP: '2,57×',
  },
  {
    ds: 'Aragon', n: 102, h: '0,0411',
    B: { sdrop: 0.1130, snoise: 0.2371, edgeless: '0,0%', nodes: '18,0', tms: 334.94 },
    P: { sdrop: 0.0395, snoise: 0.0, edgeless: '17,6%', nodes: '10,0', tms: 4.05 },
    AP: { sdrop: 0.0255, snoise: 0.2990, edgeless: '0,0%', nodes: '12,0', tms: 4.47 },
    APt: { sdrop: 0.0268, snoise: 0.4790, edgeless: '0,0%', nodes: '13,0', tms: 5.71 },
    APs: { sdrop: 0.0233, snoise: 0.1905, edgeless: '0,0%', nodes: '15,0', tms: 1.79 },
    APts: { sdrop: 0.0233, snoise: 0.0, edgeless: '0,0%', nodes: '15,0', tms: 1.60 },
    ratioDrop: '4,8×', speedupB: 209.2, speedupP: '2,53×',
  },
  {
    ds: 'Bancor', n: 94, h: '0,0374',
    B: { sdrop: 0.2459, snoise: 0.3479, edgeless: '0,0%', nodes: '19,0', tms: 349.65 },
    P: { sdrop: 0.0564, snoise: 0.0, edgeless: '11,7%', nodes: '10,0', tms: 4.28 },
    AP: { sdrop: 0.0210, snoise: 0.3885, edgeless: '0,0%', nodes: '12,0', tms: 4.53 },
    APt: { sdrop: 0.0197, snoise: 0.0837, edgeless: '0,0%', nodes: '14,0', tms: 5.77 },
    APs: { sdrop: 0.0146, snoise: 0.2495, edgeless: '0,0%', nodes: '24,0', tms: 1.85 },
    APts: { sdrop: 0.0146, snoise: 0.0, edgeless: '0,0%', nodes: '25,0', tms: 1.89 },
    ratioDrop: '16,8×', speedupB: 185.4, speedupP: '2,27×',
  },
  {
    ds: 'Centra', n: 78, h: '5,38×10⁻⁶',
    B: { sdrop: 0.1994, snoise: 0.2328, edgeless: '1,3%', nodes: '20,0', tms: 302.46 },
    P: { sdrop: 0.0421, snoise: 0.0, edgeless: '11,5%', nodes: '10,0', tms: 4.27 },
    AP: { sdrop: 0.0332, snoise: 0.3610, edgeless: '0,0%', nodes: '20,0', tms: 5.74 },
    APt: { sdrop: 0.0319, snoise: 0.3436, edgeless: '0,0%', nodes: '20,0', tms: 5.70 },
    APs: { sdrop: 0.0021, snoise: 1.0, edgeless: '0,0%', nodes: '56,0', tms: 1.99 },
    APts: { sdrop: 0.0021, snoise: 1.0, edgeless: '0,0%', nodes: '59,5', tms: 1.83 },
    ratioDrop: '96,0×', speedupB: 165.0, speedupP: '2,33×',
  },
  {
    ds: 'CoinDash', n: 80, h: '0,0409',
    B: { sdrop: 0.1693, snoise: 0.2903, edgeless: '0,0%', nodes: '19,0', tms: 169.68 },
    P: { sdrop: 0.0408, snoise: 0.0, edgeless: '18,8%', nodes: '10,0', tms: 3.85 },
    AP: { sdrop: 0.0144, snoise: 0.4827, edgeless: '0,0%', nodes: '11,0', tms: 4.08 },
    APt: { sdrop: 0.0094, snoise: 0.6069, edgeless: '2,5%', nodes: '12,0', tms: 5.28 },
    APs: { sdrop: 0.0016, snoise: 0.2800, edgeless: '0,0%', nodes: '17,0', tms: 1.37 },
    APts: { sdrop: 0.0016, snoise: 0.0, edgeless: '1,25%', nodes: '17,0', tms: 1.31 },
    ratioDrop: '103,5×', speedupB: 129.4, speedupP: '2,94×',
  },
  {
    ds: 'DGD', n: 213, h: '0,0469',
    B: { sdrop: 0.1274, snoise: 0.2852, edgeless: '0,0%', nodes: '19,0', tms: 225.33 },
    P: { sdrop: 0.0309, snoise: 0.0, edgeless: '7,5%', nodes: '10,0', tms: 4.17 },
    AP: { sdrop: 0.0214, snoise: 0.3905, edgeless: '0,0%', nodes: '13,0', tms: 4.43 },
    APt: { sdrop: 0.0181, snoise: 0.2871, edgeless: '0,0%', nodes: '15,0', tms: 5.75 },
    APs: { sdrop: 0.0122, snoise: 0.2541, edgeless: '0,0%', nodes: '19,0', tms: 1.57 },
    APts: { sdrop: 0.0122, snoise: 0.0, edgeless: '0,0%', nodes: '19,0', tms: 1.55 },
    ratioDrop: '10,4×', speedupB: 145.1, speedupP: '2,69×',
  },
  {
    ds: 'Iconomi', n: 163, h: '0,0423',
    B: { sdrop: 0.1434, snoise: 0.3312, edgeless: '0,0%', nodes: '18,0', tms: 285.74 },
    P: { sdrop: 0.0273, snoise: 0.0, edgeless: '22,7%', nodes: '10,0', tms: 4.01 },
    AP: { sdrop: 0.0115, snoise: 0.4816, edgeless: '0,0%', nodes: '12,0', tms: 4.32 },
    APt: { sdrop: 0.0109, snoise: 0.6577, edgeless: '0,6%', nodes: '13,0', tms: 5.44 },
    APs: { sdrop: 0.0075, snoise: 0.3054, edgeless: '0,0%', nodes: '17,0', tms: 1.66 },
    APts: { sdrop: 0.0075, snoise: 0.0, edgeless: '0,0%', nodes: '17,0', tms: 1.48 },
    ratioDrop: '19,0×', speedupB: 193.6, speedupP: '2,72×',
  },
  {
    ds: 'MathOverflow', n: 55, h: '0,0919',
    B: { sdrop: 0.2552, snoise: 0.2372, edgeless: '0,0%', nodes: '20,0', tms: 380.55 },
    P: { sdrop: 0.1999, snoise: 0.0918, edgeless: '0,0%', nodes: '20,0', tms: 6.73 },
    AP: { sdrop: 0.0670, snoise: 0.2015, edgeless: '0,0%', nodes: '15,0', tms: 5.65 },
    APt: { sdrop: 0.0621, snoise: 0.1410, edgeless: '0,0%', nodes: '18,0', tms: 5.77 },
    APs: { sdrop: 0.0290, snoise: 0.0009, edgeless: '0,0%', nodes: '34,0', tms: 1.85 },
    APts: { sdrop: 0.0290, snoise: 0.0009, edgeless: '0,0%', nodes: '35,0', tms: 1.73 },
    ratioDrop: '8,8×', speedupB: 220.0, speedupP: '3,89×',
  },
  {
    ds: 'Reddit', n: 120, h: '0,0718',
    B: { sdrop: 0.1091, snoise: 0.1441, edgeless: '0,0%', nodes: '20,0', tms: 1160.65 },
    P: { sdrop: 0.0339, snoise: 0.0005, edgeless: '0,8%', nodes: '10,0', tms: 4.97 },
    AP: { sdrop: 0.0160, snoise: 0.0395, edgeless: '0,0%', nodes: '17,0', tms: 6.67 },
    APt: { sdrop: 0.0139, snoise: 0.0194, edgeless: '0,0%', nodes: '19,0', tms: 6.83 },
    APs: { sdrop: 0.0099, snoise: 0.0002, edgeless: '0,0%', nodes: '33,0', tms: 4.87 },
    APts: { sdrop: 0.0099, snoise: 0.0002, edgeless: '0,0%', nodes: '33,0', tms: 4.26 },
    ratioDrop: '11,0×', speedupB: 272.4, speedupP: '1,17×',
  },
]

export const CAUSAL_54_DATA = [
  {
    ds: 'AdEx', h: '2,12×10⁻³', smallH: false, fitS: '0,135 s', speedup: '141,22×',
    drop: { d05: ['0,0000', '0,0000', '0,0000'], d1: ['0,1501', '0,0056', '0,0003'], d5: ['0,1951', '0,1851', '0,0336'] },
    mult: { m05: ['0,3294', '0,0000', '0,0000'], m1: ['0,3315', '0,0000', '0,0022'], m5: ['0,3345', '0,0153', '0,6448'] },
    rew: { r05: ['0,1461', '0,0768', '0,0107'], r10: ['0,1630', '0,0857', '0,0325'], r20: ['0,2690', '0,2690', '0,0621'] },
    cost: { bMs: '314,74', pMs: '3,02', aMs: '1,83', bNd: '20,0', pNd: '10,0', aNd: '21,5', pEd: '1/6', aEd: '0/6', clip: '0,0%' },
  },
  {
    ds: 'Aragon', h: '1,19×10⁻⁶', smallH: true, fitS: '0,251 s', speedup: '195,43×',
    drop: { d05: ['0,1483', '0,0000', '0,0000'], d1: ['0,1607', '0,0150', '0,0003'], d5: ['0,1207', '0,0827', '0,0850'] },
    mult: { m05: ['0,1275', '0,0000', '1,0000'], m1: ['0,2297', '0,0000', '1,0000'], m5: ['0,2634', '0,0480', '1,0000'] },
    rew: { r05: ['0,1028', '0,0615', '0,0383'], r10: ['0,2198', '0,0944', '0,0755'], r20: ['0,3124', '0,1711', '0,1296'] },
    cost: { bMs: '487,01', pMs: '2,19', aMs: '2,30', bNd: '20,0', pNd: '10,0', aNd: '126,5', pEd: '0/6', aEd: '0/6', clip: '0,0%' },
  },
  {
    ds: 'Bancor', h: '7,45×10⁻⁷', smallH: true, fitS: '0,135 s', speedup: '217,30×',
    drop: { d05: ['0,3064', '0,0075', '0,0000'], d1: ['0,3527', '0,0189', '0,0005'], d5: ['0,3761', '0,1213', '0,0175'] },
    mult: { m05: ['0,3099', '0,0000', '1,0000'], m1: ['0,3265', '0,2616', '1,0000'], m5: ['0,2346', '0,0397', '1,0000'] },
    rew: { r05: ['0,2292', '0,0847', '0,0118'], r10: ['0,3390', '0,2194', '0,0297'], r20: ['0,4293', '0,4322', '0,0738'] },
    cost: { bMs: '367,75', pMs: '1,97', aMs: '1,68', bNd: '20,0', pNd: '10,0', aNd: '72,0', pEd: '0/6', aEd: '0/6', clip: '0,0%' },
  },
  {
    ds: 'Centra', h: '9,46×10⁻⁶', smallH: true, fitS: '0,088 s', speedup: '137,49×',
    drop: { d05: ['0,0000', '0,0000', '0,0000'], d1: ['0,1528', '0,0135', '0,0000'], d5: ['0,2282', '0,0935', '0,0234'] },
    mult: { m05: ['0,0798', '0,0000', '1,0000'], m1: ['0,0819', '0,0000', '1,0000'], m5: ['0,1199', '0,0659', '1,0000'] },
    rew: { r05: ['0,1785', '0,0188', '0,0003'], r10: ['0,2077', '0,0965', '0,0129'], r20: ['0,1409', '0,1814', '0,0205'] },
    cost: { bMs: '150,36', pMs: '1,58', aMs: '1,02', bNd: '20,0', pNd: '10,0', aNd: '48,0', pEd: '2/6', aEd: '0/6', clip: '0,0%' },
  },
  {
    ds: 'CoinDash', h: '1,15×10⁻⁶', smallH: true, fitS: '0,114 s', speedup: '119,74×',
    drop: { d05: ['0,0208', '0,0000', '0,0000'], d1: ['0,0908', '0,0308', '0,0000'], d5: ['0,2263', '0,1111', '0,0033'] },
    mult: { m05: ['0,1297', '0,0002', '1,0000'], m1: ['0,2051', '0,0087', '1,0000'], m5: ['0,2157', '0,0843', '1,0000'] },
    rew: { r05: ['0,1029', '0,0740', '0,0001'], r10: ['0,1402', '0,1045', '0,0019'], r20: ['0,2413', '0,1548', '0,0406'] },
    cost: { bMs: '163,41', pMs: '1,86', aMs: '1,25', bNd: '20,0', pNd: '10,0', aNd: '73,5', pEd: '0/6', aEd: '0/6', clip: '0,0%' },
  },
  {
    ds: 'DGD', h: '5,57×10⁻¹⁴', smallH: true, fitS: '0,044 s', speedup: '90,83×',
    drop: { d05: ['0,0000', '0,0000', '0,0000'], d1: ['0,0729', '0,0002', '0,0000'], d5: ['0,2541', '0,0788', '0,0583'] },
    mult: { m05: ['0,2288', '0,0000', '1,0000'], m1: ['0,2236', '0,0000', '1,0000'], m5: ['0,1078', '0,0013', '1,0000'] },
    rew: { r05: ['0,1943', '0,0870', '0,0297'], r10: ['0,2273', '0,1822', '0,0640'], r20: ['0,2863', '0,3787', '0,1256'] },
    cost: { bMs: '79,78', pMs: '1,68', aMs: '0,88', bNd: '19,0', pNd: '10,0', aNd: '24,0', pEd: '0/6', aEd: '0/6', clip: '0,0%' },
  },
  {
    ds: 'Iconomi', h: '4,23×10⁻²', smallH: false, fitS: '0,117 s', speedup: '146,00×',
    drop: { d05: ['0,0561', '0,0000', '0,0000'], d1: ['0,0619', '0,0093', '0,0001'], d5: ['0,1717', '0,1035', '0,0633'] },
    mult: { m05: ['0,2826', '0,0000', '0,0000'], m1: ['0,2083', '0,0062', '0,0000'], m5: ['0,2070', '0,0039', '0,0001'] },
    rew: { r05: ['0,1545', '0,0710', '0,0130'], r10: ['0,1644', '0,1266', '0,0349'], r20: ['0,2009', '0,2926', '0,1210'] },
    cost: { bMs: '126,21', pMs: '1,59', aMs: '0,86', bNd: '17,0', pNd: '10,0', aNd: '15,0', pEd: '1/6', aEd: '0/6', clip: '0,0%' },
  },
  {
    ds: 'MathOverflow', h: '4,53×10⁻²', smallH: false, fitS: '0,425 s', speedup: '229,39×',
    drop: { d05: ['0,1505', '0,1738', '0,0000'], d1: ['0,2319', '0,2321', '0,0123'], d5: ['0,2214', '0,3276', '0,0518'] },
    mult: { m05: ['0,2676', '0,0019', '0,0000'], m1: ['0,2016', '0,0174', '0,0000'], m5: ['0,2888', '0,1193', '0,0000'] },
    rew: { r05: ['0,2370', '0,3263', '0,0200'], r10: ['0,2435', '0,2994', '0,0491'], r20: ['0,3035', '0,3610', '0,1231'] },
    cost: { bMs: '255,19', pMs: '2,31', aMs: '1,11', bNd: '20,0', pNd: '15,0', aNd: '39,0', pEd: '0/6', aEd: '0/6', clip: '0,0%' },
  },
  {
    ds: 'Reddit', h: '4,98×10⁻²', smallH: false, fitS: '0,507 s', speedup: '281,74×',
    drop: { d05: ['0,1357', '0,0204', '0,0002'], d1: ['0,1283', '0,0161', '0,0030'], d5: ['0,1561', '0,0655', '0,0233'] },
    mult: { m05: ['0,1691', '0,0040', '0,0000'], m1: ['0,1819', '0,0029', '0,0000'], m5: ['0,2309', '0,0464', '0,0103'] },
    rew: { r05: ['0,2061', '0,1323', '0,0094'], r10: ['0,2909', '0,2127', '0,0271'], r20: ['0,2776', '0,2238', '0,0454'] },
    cost: { bMs: '726,79', pMs: '2,65', aMs: '2,45', bNd: '20,0', pNd: '15,0', aNd: '42,5', pEd: '0/6', aEd: '0/6', clip: '0,0%' },
  },
]

export const CHANGEPOINT_SUMMARY = [
  { method: 'Nhánh B (t-SNE kiểu GraphPulse)', med26: 0.467, medReal: 0.464, medSynth: 0.473, note: 'Trung vị dưới 0,5; AUC < 0,5 ở 15/26 ô. Nhánh B là phần dựng Mapper bằng t-SNE do em cài lại theo cấu hình bài báo, không phải toàn bộ mô hình GraphPulse.', tone: 'red' },
  { method: 'PCA theo ngày (P)', med26: 0.493, medReal: 0.424, medSynth: 0.605, note: 'Kém trên dữ liệu thật do đồ thị Mapper rỗng cạnh và MinMax nhảy theo ngày.', tone: '' },
  { method: 'Đồng điều bền vững (PH)', med26: 0.566, medReal: 0.479, medSynth: 0.931, note: 'Tốt trên giả lập nhưng giảm mạnh xuống 0,479 trên 18 ô mạng giao dịch thật.', tone: '' },
  { method: 'Neo chuẩn hóa + PCA (AP)', med26: 0.615, medReal: 0.615, medSynth: 0.647, note: 'Cố định hệ quy chiếu quá khứ bắt đầu khôi phục tín hiệu điểm chuyển.', tone: '' },
  { method: 'Đề xuất đầy đủ (APts)', med26: 0.693, medReal: 0.668, medSynth: 0.758, note: 'Cao hơn nhánh B ở 22/26 ô (p = 0,0000188; đơn vị là ô, các ô cùng tập không độc lập) và 8/9 tập (p = 0,0098; hiệu Hodges–Lehmann +0,156 [0,069; 0,242]). Thấp hơn thống kê đơn giản.', tone: 'green' },
  { method: 'Thống kê đơn giản (Simple)', med26: 0.808, medReal: 0.684, medSynth: 0.932, note: 'Đường cơ sở bậc nhất không dùng TDA (phản ứng trực tiếp với thay đổi tổng khối lượng/cạnh).', tone: 'amber' },
  { method: 'Simple + nhánh B', med26: 0.749, medReal: 0.670, medSynth: 0.856, note: 'Ghép thêm đặc trưng nhiễu của B làm kéo tụt AUC từ 0,81 xuống 0,75.', tone: '' },
  { method: 'Simple + APts', med26: 0.794, medReal: 0.730, medSynth: 0.874, note: 'Kiểm định đặt trước trên 26 ô: p = 0,655, chưa thấy khác biệt có ý nghĩa thống kê so với Simple (kết quả âm). Con số 0,730 so với 0,684 trên 18 ô thật là tách nhóm sau khi xem kết quả, không dùng làm kết luận.', tone: 'blue' },
]

export const CHANGEPOINT_REAL_18 = [
  { cell: 'AdEx — Nhân đôi hoạt động (activity)', simple: '0,481', PH: '0,505', B: '0,622', P: '0,573', AP: '0,603', APts: '0,659', sB: '0,522', sAPts: '0,580', wins: true },
  { cell: 'AdEx — Nhân đôi giá trị (value)', simple: '0,763', PH: '0,426', B: '0,449', P: '0,505', AP: '0,462', APts: '0,915', sB: '0,658', sAPts: '0,878', wins: true },
  { cell: 'Aragon — Nhân đôi hoạt động (activity)', simple: '0,520', PH: '0,342', B: '0,392', P: '0,418', AP: '0,497', APts: '0,474', sB: '0,500', sAPts: '0,499', wins: true },
  { cell: 'Aragon — Nhân đôi giá trị (value)', simple: '0,893', PH: '0,733', B: '0,698', P: '0,388', AP: '0,783', APts: '0,805', sB: '0,811', sAPts: '0,853', wins: true },
  { cell: 'Bancor — Nhân đôi hoạt động (activity)', simple: '0,524', PH: '0,365', B: '0,379', P: '0,232', AP: '0,414', APts: '0,750', sB: '0,618', sAPts: '0,741', wins: true },
  { cell: 'Bancor — Nhân đôi giá trị (value)', simple: '0,879', PH: '0,725', B: '0,509', P: '0,608', AP: '0,912', APts: '0,582', sB: '0,766', sAPts: '0,836', wins: true },
  { cell: 'Centra — Nhân đôi hoạt động (activity)', simple: '0,544', PH: '0,376', B: '0,358', P: '0,477', AP: '0,352', APts: '0,460', sB: '0,506', sAPts: '0,518', wins: true },
  { cell: 'Centra — Nhân đôi giá trị (value)', simple: '0,643', PH: '0,301', B: '0,312', P: '0,231', AP: '0,360', APts: '0,343', sB: '0,566', sAPts: '0,588', wins: true },
  { cell: 'CoinDash — Nhân đôi hoạt động (activity)', simple: '0,337', PH: '0,306', B: '0,353', P: '0,358', AP: '0,297', APts: '0,436', sB: '0,344', sAPts: '0,395', wins: true },
  { cell: 'CoinDash — Nhân đôi giá trị (value)', simple: '0,649', PH: '0,419', B: '0,326', P: '0,320', AP: '0,376', APts: '0,550', sB: '0,470', sAPts: '0,586', wins: true },
  { cell: 'DGD — Nhân đôi hoạt động (activity)', simple: '0,821', PH: '0,835', B: '0,718', P: '0,852', AP: '0,748', APts: '0,780', sB: '0,727', sAPts: '0,785', wins: true },
  { cell: 'DGD — Nhân đôi giá trị (value)', simple: '0,832', PH: '0,802', B: '0,659', P: '0,655', AP: '0,699', APts: '0,738', sB: '0,747', sAPts: '0,804', wins: true },
  { cell: 'Iconomi — Nhân đôi hoạt động (activity)', simple: '0,269', PH: '0,249', B: '0,416', P: '0,428', AP: '0,279', APts: '0,436', sB: '0,343', sAPts: '0,389', wins: true },
  { cell: 'Iconomi — Nhân đôi giá trị (value)', simple: '0,794', PH: '0,535', B: '0,709', P: '0,442', AP: '0,660', APts: '0,537', sB: '0,799', sAPts: '0,719', wins: false },
  { cell: 'MathOverflow — Nhân đôi hoạt động (activity)', simple: '0,667', PH: '0,582', B: '0,717', P: '0,392', AP: '0,626', APts: '0,678', sB: '0,760', sAPts: '0,711', wins: false },
  { cell: 'MathOverflow — Nhân đôi giá trị (value)', simple: '0,937', PH: '0,937', B: '0,478', P: '0,496', AP: '1,000', APts: '1,000', sB: '0,861', sAPts: '0,999', wins: true },
  { cell: 'Reddit — Nhân đôi hoạt động (activity)', simple: '0,701', PH: '0,453', B: '0,714', P: '0,419', AP: '0,881', APts: '0,893', sB: '0,751', sAPts: '0,924', wins: true },
  { cell: 'Reddit — Nhân đôi giá trị (value)', simple: '0,827', PH: '0,530', B: '0,402', P: '0,412', AP: '0,713', APts: '0,764', sB: '0,682', sAPts: '0,817', wins: true },
]

export const CHANGEPOINT_SYNTH_8 = [
  { cell: 'Giả lập: Thay đổi tần suất mức 0,5 (rate:0.5)', simple: '0,996', PH: '0,994', B: '0,895', P: '0,705', AP: '0,860', APts: '0,892', sB: '0,975', sAPts: '0,977', wins: false },
  { cell: 'Giả lập: Thay đổi tần suất mức 1,0 (rate:1.0)', simple: '0,991', PH: '0,935', B: '0,993', P: '0,768', AP: '0,969', APts: '0,974', sB: '1,000', sAPts: '0,999', wins: false },
  { cell: 'Giả lập: Thay đổi giá trị mức 0,5 (value:0.5)', simple: '0,944', PH: '0,926', B: '0,455', P: '0,492', AP: '0,722', APts: '0,708', sB: '0,865', sAPts: '0,863', wins: true },
  { cell: 'Giả lập: Thay đổi giá trị mức 1,0 (value:1.0)', simple: '0,902', PH: '0,980', B: '0,491', P: '0,592', AP: '0,572', APts: '0,582', sB: '0,770', sAPts: '0,785', wins: true },
  { cell: 'Giả lập: Xuất hiện nút mới mức 0,5 (new:0.5)', simple: '0,921', PH: '0,551', B: '0,380', P: '0,618', AP: '0,525', APts: '0,650', sB: '0,804', sAPts: '0,885', wins: true },
  { cell: 'Giả lập: Xuất hiện nút mới mức 1,0 (new:1.0)', simple: '0,960', PH: '0,952', B: '0,344', P: '0,624', AP: '0,793', APts: '0,834', sB: '0,921', sAPts: '0,943', wins: true },
  { cell: 'Giả lập: Hỗn hợp mức 0,5 (mix:0.5)', simple: '0,783', PH: '0,652', B: '0,445', P: '0,587', AP: '0,469', APts: '0,455', sB: '0,651', sAPts: '0,623', wins: true },
  { cell: 'Giả lập: Hỗn hợp mức 1,0 (mix:1.0)', simple: '0,888', PH: '0,868', B: '0,583', P: '0,493', AP: '0,486', APts: '0,808', sB: '0,847', sAPts: '0,859', wins: true },
]

export const DEFENSE_FLASHCARDS = [
  {
    id: 1, cat: 'chang1', tag: 'Chặng 1 • Đặc trưng 4D vs 5D vs 8D',
    question: 'Câu 1: Trong GraphPulse và luận văn, phân biệt rõ ba đại lượng: 4 đặc trưng nút đầu vào, 5 đặc trưng Đồ thị Mapper và 8 đặc trưng tổng hợp cấp ngày?',
    keywords: '4 đặc trưng nút đầu vào (gửi, nhận, bậc gửi, bậc nhận) → dựng Đồ thị Mapper → 5 đặc trưng Mapper + 3 đặc trưng đồ thị gốc = 8 đặc trưng ngày.',
    bullets: [
      '4 đặc trưng nút đầu vào (4D Node Features): Tính cho từng tài khoản trong ngày, gồm Tổng trọng số gửi, Tổng trọng số nhận, Bậc gửi, Bậc nhận — là đầu vào của Mapper.',
      '5 đặc trưng Đồ thị Mapper (5D Mapper Summary): Tóm tắt đồ thị Mapper thành Số nút Mapper, Số cạnh Mapper, Kích thước cụm lớn nhất, Kích thước cụm trung bình, Trọng số cạnh trung bình.',
      '8 đặc trưng cấp ngày của GraphPulse: Ghép 5 đặc trưng Mapper với 3 đặc trưng đồ thị gốc (Số nút gốc, Số cạnh gốc, Mật độ đồ thị).',
    ],
  },
  {
    id: 2, cat: 'chang1', tag: 'Chặng 1 • 4 Nguồn bất ổn của GraphPulse',
    question: 'Câu 2: Tại sao nhánh B (dựng Mapper bằng t-SNE theo cấu hình bài báo GraphPulse, do em cài lại) lại bị bất ổn định theo thời gian và chạy chậm?',
    keywords: 'Tái ước lượng độc lập từng ngày ở cả 4 khâu: MinMax nhạy cá mập; t-SNE xoay trục (Procrustes 0,8839) & ngốn 98,2% thời gian; Biên lưới cắt khối điểm trùng; KMeans(k=5) xé cụm.',
    bullets: [
      'Khâu 1 (MinMaxScaler theo ngày): Chỉ cần 1 giao dịch cá mập là đỉnh max vọt lên, ép bẹp 99% ví bình thường về sát 0.',
      'Khâu 2 (t-SNE độc lập từng ngày): Tối ưu phi lồi làm xoay/lật hệ trục (độ trôi Procrustes 0,8839), chiếm 98,2% thời gian (~420 ms/ngày) và lỗi ở 241/6.421 ngày có số nút ≤ 30.',
      'Khâu 3 (Cover cắt qua khối điểm trùng): Các mạng có 5,1%–96,2% nút trùng vector 4D; biên cắt sát làm nhiễu siêu nhỏ đẩy cả trăm nút nhảy ô.',
      'Khâu 4 (KMeans k=5): Cưỡng ép chia 5 cụm ngay cả khi ô chỉ có 1 cụm tự nhiên, gây xé lẻ đồng thành viên cụm.',
    ],
  },
  {
    id: 3, cat: 'chang1', tag: 'Chặng 1 • Tại sao chỉ thay t-SNE bằng PCA (Nhánh P) lại hỏng?',
    question: 'Câu 3: Nếu t-SNE chậm và hay xoay trục, tại sao ta không đơn giản thay t-SNE bằng PCA ở từng ngày (nhánh P) là xong, mà phải thiết kế cả tổ hợp APts?',
    keywords: 'Nhánh P nhanh hơn 106× và giảm trôi Procrustes 62,1%, nhưng làm tỷ lệ ngày đồ thị Mapper không có cạnh vọt lên 19,7%–66,0% ở 6/9 tập!',
    bullets: [
      'Nhánh P (chỉ thay t-SNE bằng PCA tính lại từng ngày) tăng tốc 106× (4,17 ms vs 419,74 ms) và giảm trôi Procrustes 62,1% (0,8839 → 0,3349).',
      'Tuy nhiên, khi đi kèm MinMax theo ngày và KMeans(k=5), phân phối đuôi nặng làm các điểm dồn về góc lưới khiến tỷ lệ ngày đồ thị Mapper không cạnh tăng vọt lên 19,7%–66,0% ở 6/9 tập (trung bình 26,05%).',
      'Cần kết hợp đồng bộ cả 4 cơ chế A - P - t - s để vừa giữ tốc độ PCA vừa đưa tỷ lệ ngày không cạnh về 0% ở 8/9 tập.',
    ],
  },
  {
    id: 4, cat: 'chang2', tag: 'Chặng 2 • Vai trò Mặt phẳng 2D (L_t) vs Không gian 4D (Z_t)',
    question: 'Câu 4: Tại sao phương pháp APts chiếu dữ liệu xuống mặt phẳng PCA 2 chiều (L_t), nhưng khi phân cụm liên kết đơn lại quay về đo khoảng cách trên không gian 4 chiều (Z_t)?',
    keywords: 'Phép chiếu 2D làm mất phương sai chiều 3–4 (Cây đèn & Cái ghế đè bóng lên nhau). 2D chỉ dùng chia ô lưới Cover, còn đo khoảng cách ≤ h phải trên 4D (Z_t).',
    bullets: [
      'Mặt phẳng PCA 2D dùng để dựng Phép phủ (Cover 2×2 = 4 ô chồng lấn) giúp tránh bùng nổ số ô và dễ đặt biên né điểm trùng.',
      'Không gian 4D đã chuẩn hóa (Z_t) giữ trọn thông tin cả 4 đặc trưng gốc — tránh việc hai nút cách xa nhau ở chiều thứ 3–4 bị gom nhầm chỉ vì bóng chiếu 2D trùng nhau.',
      'Đúng với định nghĩa toán học gốc của Mapper (Singh et al., 2007): phân cụm luôn được thực hiện trên không gian metric gốc đối với tập kéo ngược của từng ô phủ.',
    ],
  },
  {
    id: 5, cat: 'chang2', tag: 'Chặng 2 • Tác động bổ trợ giữa chữ t và chữ s',
    question: 'Câu 5: Kết quả nghiên cứu cắt giảm 6 nhánh (B, P, AP, APt, APs, APts) cho thấy điều gì về vai trò của chữ t và chữ s?',
    keywords: 'Dưới nhiễu nhân 1% (S_noise, trung vị qua 9 tập): AP 0,361; APt 0,344; APs 0,250; APts 0. APs đã thấp hơn AP ở 8/9 tập; trung vị bằng 0 ở 1/9 tập (APs) và 6/9 tập (APts). Phân tích thăm dò trên thực nghiệm co giãn toàn chuỗi; không kết luận được "chỉ khi ghép cả hai".',
    bullets: [
      'Chỉ thêm riêng chữ t (APt) mà giữ KMeans: Điểm không nhảy qua biên ô nữa nhưng KMeans trong ô vẫn xé cụm ngẫu nhiên (trung vị S_noise = 0,3436).',
      'Chỉ thêm riêng chữ s (APs) mà dùng lưới thường: Liên kết đơn trong ô ổn định nhưng đường biên ô cắt khối điểm trùng làm các nút nhảy sang ô khác (S_noise = 0,19–0,31 ở 5 tập token, trung vị 0,2495).',
      'Ghép cả hai (APts): trung vị S_noise bằng 0 ở 6/9 tập và ≤ 0,0009 ở 8/9 tập; ngoại lệ là Centra (S_noise = 1,0). Điều kiện: thực nghiệm co giãn trọng số theo toàn chuỗi (có dùng tương lai).',
    ],
  },
  {
    id: 6, cat: 'chang2', tag: 'Chặng 2 • Phạm vi của Mệnh đề điều kiện đủ',
    question: 'Câu 6: Mệnh đề toán học trong Chuyên đề 2 phát biểu điều gì? Tại sao không gọi đây là "Định lý ổn định toàn cục"?',
    keywords: 'Tuyệt đối KHÔNG gọi là định lý toàn cục! Đây là Mệnh đề điều kiện đủ cho tính bất biến cục bộ trên tập nút cố định.',
    bullets: [
      'Khi nhiễu trên không gian 4D bị chặn bởi ε_Z (kéo theo nhiễu chiếu PCA 2D bị chặn bởi ε_L ≤ ε_Z nhờ tính 1-Lipschitz), nếu mọi điểm cách biên ô > ε_L và không có cặp điểm nào rơi vào dải nhạy cảm (h − 2ε_Z, h + 2ε_Z], thì đồ thị Mapper bất biến hoàn toàn (S = 0).',
      'Mệnh đề chỉ là điều kiện đủ: khi giả thiết không thỏa (ví dụ h quá nhỏ so với độ dịch do nhiễu, như ở 5 tập token có h ≤ 10⁻⁵), mệnh đề không kết luận gì, nên nó không dự đoán được thất bại. Tỷ lệ ngày và nút thỏa giả thiết trên dữ liệu thật chưa được đo; mệnh đề chưa được GVHD rà.',
    ],
  },
  {
    id: 7, cat: 'chang2', tag: 'Chặng 2 • Tính nhân quả & Kiểm tra tiền tố',
    question: 'Câu 7: Cơ sở nào cho thấy mã APts hiện hành không dùng thông tin tương lai, và kiểm tra đó có giới hạn gì?',
    keywords: 'Fit đúng 1 lần trên 70% ngày đầu (dev); transform tất định từng ngày trên 30% ngày cuối (hold); vượt qua kiểm tra bất biến tiền tố trên cả 9/9 tập.',
    bullets: [
      'Toàn bộ bộ tham số Mỏ neo (lo, hi, trung bình và trục PCA, lưới né trùng, ngưỡng h) chỉ được ước lượng một lần duy nhất trên 70% ngày đầu lịch sử.',
      'Trong thực nghiệm kiểm chứng mở rộng, ngay cả bước co giãn trọng số thô về [1, 10] cũng ước lượng hoàn toàn từ quá khứ và đạt kiểm tra bất biến tiền tố trên cả 9/9 tập: thay mọi trọng số sau mốc cắt bằng 1e100 không làm thay đổi đầu ra của giai đoạn quá khứ. Giới hạn: phép kiểm chỉ đổi trọng số, không đổi mốc thời gian hay cạnh, nên không chứng nhận mọi loại rò rỉ.',
      'Các thực nghiệm 993 ngày (Bảng 4) và 26 ô phát hiện điểm chuyển (Bảng 6) co giãn trọng số theo cực đại toàn chuỗi, nên không đạt điều kiện này.',
    ],
  },
  {
    id: 8, cat: 'chang3', tag: 'Chặng 3 • Tại sao không so 2 ngày liên tiếp & Tại sao dùng Cohen’s κ?',
    question: 'Câu 8: Tại sao không so trực tiếp ngày t với ngày t+1, và tại sao dùng hệ số Cohen’s κ trên quan hệ đồng thành viên cụm thay vì chỉ số ARI?',
    keywords: '(1) Giữa 2 ngày liên tiếp chỉ có 7–33% ví lặp lại (thăm dò), và giả thuyết đặt trước về thước đo hai ngày liên tiếp không đạt (Spearman ρ = 0,1956 < 0,6); (2) Một nút có thể thuộc nhiều cụm Mapper nên ARI không áp dụng được.',
    bullets: [
      'Trên 9 tập thật chỉ có 7–33% tài khoản lặp lại giữa 2 ngày liên tiếp (trung vị theo tập, thăm dò); trên dữ liệu giả lập có phân phối không đổi cũng chỉ 44%. Riêng ρ = 0,1956 là tương quan giữa hai cách xếp hạng cấu hình (độ bất ổn hai ngày liên tiếp và độ bất ổn khi bỏ 2% giao dịch), không phải tỷ lệ lặp lại. Do đó phải đo trên cặp gốc–nhiễu cùng một ngày t.',
      'Do các khoảng phủ chồng lấn nhau (độ chồng lấn p = 0,4 giữa các khoảng, không phải 40% số nút), một tài khoản có thể thuộc nhiều cụm Mapper cùng lúc. ARI chỉ dùng cho phân hoạch rời nhau, còn Cohen’s κ trên cặp đồng thành viên xử lý tự nhiên cụm chồng lấn và trừ xác suất trùng ngẫu nhiên.',
    ],
  },
  {
    id: 9, cat: 'chang3', tag: 'Chặng 3 • Chẩn đoán suy biến h ≤ 10⁻⁵ ở 5 tập Token',
    question: 'Câu 9: Tại sao ở 5/9 tập token trong thực nghiệm tiền xử lý từ quá khứ, dưới nhiễu nhân 1% thì S_noise của APts lại vọt lên bằng 1?',
    keywords: 'Nguyên nhân nghi ngờ: co giãn tuyến tính trọng số giao dịch về [1, 10] theo cực đại của giai đoạn tham chiếu ép giao dịch thường sát mốc 1 → véc-tơ gần trùng → h ≤ 10⁻⁵. Cách xử lý đang chờ GVHD chọn.',
    bullets: [
      'Phép co giãn tuyến tính trọng số thô về đoạn [1, 10] theo cực đại của giai đoạn tham chiếu: khi cực đại này lớn hơn rất nhiều so với giao dịch thường, các giao dịch thường dồn sát mốc 1, các véc-tơ đặc trưng gần trùng nhau, kéo ngưỡng 1-NN xuống h ≤ 10⁻⁵ và làm số nút Mapper tăng (trung vị 48–126,5 nút ở 4 tập). Ở các file token có một bản ghi bằng 2²⁵⁵ (nằm sau mốc cắt ở 5 tập).',
      'Khi độ dịch do nhiễu nhân 1% lớn hơn h, giả thiết của Mệnh đề không còn thỏa và các cụm bị tách (S_noise ≈ 1). Đây là cơ chế nghi ngờ: 5 tập có S_noise ≈ 1 trùng đúng 5 tập có h ≤ 10⁻⁵, nhưng chưa kiểm bằng thí nghiệm cô lập.',
      'Cách xử lý đang chờ GVHD chọn: (A) lấy log trọng số trước khi co giãn; (B) gộp giá trị gần trùng khi tính h; (C) giữ nguyên và báo cáo giới hạn.',
    ],
  },
  {
    id: 10, cat: 'chang3', tag: 'Chặng 3 • Phân biệt con số tăng tốc 186× và 146×',
    question: 'Câu 10: Tại sao có chỗ ghi APts nhanh hơn GraphPulse 186 lần, có chỗ lại ghi 146 lần?',
    keywords: '186× (129×–272×) là đo trực tiếp bước dựng Mapper trên toàn bộ 993 ngày; 146× (90,8×–281,7×) là đo qua giao diện API đầy đủ trên 54 ngày.',
    bullets: [
      'Trung vị 186,1× (từ 129,4× đến 272,4×): Đo trực tiếp bước dựng đồ thị Mapper mỗi ngày từ ma trận 4D trên 993 ngày đánh giá (302,46 ms → 1,61 ms; nhanh hơn P trung vị 2,57×).',
      'Trung vị 146,0× (từ 90,83× đến 281,74×): Đo ghép cặp qua giao diện lập trình đầy đủ fit/transform trên 54 ngày (fit 1 lần chỉ tốn 0,044–0,507 giây; Peak RSS toàn tiến trình: APts 199,77 MiB, nhánh B 190,39 MiB, tức APts không tiết kiệm bộ nhớ).',
    ],
  },
  {
    id: 11, cat: 'chang3', tag: 'Chặng 3 • Cách trả lời Kết quả âm (AUC 0,69 vs 0,81)',
    question: 'Câu 11: Thống kê đơn giản đạt AUC = 0,81 còn APts đạt 0,69 và Simple + APts đạt 0,79 (p = 0,66). Vậy dùng Mapper để làm gì?',
    keywords: 'APts (0,69) cao hơn nhánh B (0,47) nhưng thấp hơn thống kê đơn giản (0,81); ghép APts vào Simple chưa thấy khác biệt có ý nghĩa (p = 0,66). Hồi cứu, co giãn toàn chuỗi. Báo cáo trung thực kết quả âm.',
    bullets: [
      'Nhánh B (t-SNE theo cấu hình bài báo GraphPulse, do em cài lại) có AUC trung vị 0,47 ( < 0,5 ở 15/26 ô; ghép Simple + B còn kéo tụt xuống 0,75). APts nâng AUC lên 0,69 (thắng B ở 22/26 ô, p = 0,00002; thắng 8/9 tập thật, p = 0,0098).',
      'Kiểm định đặt trước trên 26 ô cho p = 0,66: chưa thấy Simple + APts khác Simple. Con số 0,730 so với 0,684 trên 18 ô thật là tách nhóm sau khi xem kết quả, không dùng làm kết luận. Tất cả các số ở đây: co giãn toàn chuỗi, chấm điểm hồi cứu.',
      'Phần còn lại để nói: biểu diễn bền vững hơn nhánh B dưới bỏ giao dịch (ước lượng 14,5×, co giãn toàn chuỗi) và nhanh hơn >100× ở bước dựng Mapper; cùng với khung đánh giá có đối chứng thống kê đơn giản.',
    ],
  },
  {
    id: 12, cat: 'chang3', tag: 'Tổng kết • 3 Đóng góp cốt lõi trong 30 giây',
    question: 'Câu 12: Tóm tắt 3 đóng góp cốt lõi nhất của luận văn trong 30 giây?',
    keywords: '(1) Chẩn đoán 4 nguồn bất ổn của nhánh B; (2) Đề xuất APts (A-P-t-s) kèm Mệnh đề điều kiện đủ; (3) Thước đo S = 1 - κ & kiểm chứng trên 9 tập dữ liệu (14,5× bền vững và AUC 0,47 → 0,69 ở thực nghiệm co giãn toàn chuỗi; 186× nhanh hơn ở bước dựng Mapper).',
    bullets: [
      'Đóng góp 1: Định lượng 4 nguồn bất ổn và nghẽn tính toán của GraphPulse (MinMax ngoại lai; t-SNE trôi Procrustes 0,8839 & ngốn 98,2% thời gian; biên phủ cắt khối điểm trùng 5,1%–96,2%; KMeans ép 5 cụm).',
      'Đóng góp 2: Đề xuất Mapper neo thời gian APts (A-P-t-s) tách biệt fit 1 lần từ quá khứ với transform tất định theo ngày, đi kèm Mệnh đề điều kiện đủ cho tính bất biến cục bộ.',
      'Đóng góp 3: Xây dựng thước đo đồng thành viên cụm S = 1 − κ và kiểm chứng trên 9 tập dữ liệu: giảm bất ổn 14,5× (bỏ 2% cạnh; co giãn toàn chuỗi), tăng tốc 186× (146× qua API), AUC điểm chuyển 0,69 so với 0,47 của nhánh B (hồi cứu, co giãn toàn chuỗi), đồng thời chỉ rõ điều kiện biên h ≤ 10⁻⁵ và báo cáo trung thực đối chứng với thống kê đơn giản.',
    ],
  },
]

export const PEER_REVIEW_CRITIQUES = [
  {
    id: 'R1',
    severity: 'Major Weakness • Phương pháp luận',
    reviewer: 'Reviewer #1 (TDA & Dynamic Graphs)',
    title: '1. Mỏ neo tĩnh (Static Anchor) dễ suy giảm dưới hiện tượng trôi khái niệm dài hạn (Concept Drift)',
    weakness:
      'Toàn bộ bộ tham số Θ_ref = (lo, hi, μ_dev, W_dev, C_dev, h) được đóng băng vĩnh viễn sau mốc cắt 70% (dev). Nếu mạng giao dịch bước sang giai đoạn tăng trưởng quy mô 10×–100× hoặc đổi cấu trúc dòng tiền dài hạn, phép cắt biên clip[0, 1] sẽ gây bão hòa biên hàng loạt, còn hai trục PCA cố định W_dev sẽ giảm mạnh tỷ lệ phương sai giải thích (explained variance ratio). Luận văn hiện chưa đo tỷ lệ phương sai PCA còn giữ được theo thời gian trên giai đoạn đánh giá.',
    evidence:
      'Bằng chứng tỷ lệ cắt biên clip = 0,0% chỉ mới được đo trên mẫu 54 ngày thuộc 30% tương lai ngắn hạn, chưa đủ để khẳng định độ bền của mỏ neo tĩnh trên chuỗi kéo dài nhiều năm có biến động chế độ mạnh.',
    remediation: [
      'Trong bản thảo luận văn: Bổ sung rõ giả định gần dừng (quasi-stationarity) giữa cửa sổ tham chiếu và cửa sổ đánh giá vào mục Giới hạn phương pháp; báo cáo bổ sung tỷ lệ phương sai giải thích của W_dev trên giai đoạn hold so với giai đoạn dev.',
      'Hướng khắc phục kỹ thuật (công bố quốc tế): Nâng cấp sang cơ chế mỏ neo cập nhật chậm trên cửa sổ trượt (slowly-updating sliding anchor) kết hợp căn chỉnh dấu Procrustes (sign-aligned incremental PCA), chỉ kích hoạt tái neo khi phương sai giải thích giảm dưới ngưỡng cho phép.',
    ],
  },
  {
    id: 'R2',
    severity: 'Major Weakness • Biểu diễn đặc trưng',
    reviewer: 'Reviewer #1 (TDA & Dynamic Graphs)',
    title: '2. Hàm lọc PCA tuyến tính mất cấu trúc đa tạp phi tuyến & Đầu vào 4D thiếu thông tin bậc cao',
    weakness:
      'Phép chiếu tuyến tính PCA (4D → 2D) không bảo toàn cấu trúc lân cận phi tuyến (non-linear manifold) như t-SNE hoặc UMAP. Đồng thời, ma trận đầu vào chỉ sử dụng 4 đặc trưng bậc nhất cục bộ (tổng trọng số gửi/nhận, bậc gửi/nhận), hoàn toàn không nắm bắt được cấu trúc tô-pô bậc cao của đồ thị giao dịch gốc (như số tam giác, hệ số phân cụm cục bộ, cấu trúc cộng đồng k-hop).',
    evidence:
      'Trong một số tập dữ liệu có cấu trúc phân tầng phức tạp, việc nén từ 4 chiều xuống 2 chiều bằng phép chiếu tuyến tính làm chồng lấn các nhóm nút có khác biệt nằm ở thành phần chính thứ 3 và thứ 4.',
    remediation: [
      'Trong bản thảo luận văn: Báo cáo đầy đủ bảng tỷ lệ phương sai tích lũy của 2 thành phần chính đầu tiên (PC1 + PC2) trên cả 9 tập dữ liệu; nhấn mạnh việc phân cụm trên không gian 4D (Z_t) giúp giảm thiểu mất mát hình học do phép chiếu 2D.',
      'Hướng khắc phục kỹ thuật: Đối chứng bổ sung với hàm lọc tham số phi tuyến có kiểm soát hằng số Lipschitz (Parametric UMAP / Lipschitz-regularized Autoencoder) và thử nghiệm mở rộng vector đầu vào thêm đặc trưng bậc hai (clustering coefficient, PageRank cục bộ).',
    ],
  },
  {
    id: 'R3',
    severity: 'Major Weakness • Thuật toán phân cụm',
    reviewer: 'Reviewer #2 (Algorithms & Scalability)',
    title: '3. Hiệu ứng bắc cầu (Chaining Effect) và độ phức tạp bậc hai trường hợp xấu nhất của Liên kết đơn',
    weakness:
      'Phân cụm liên kết đơn ở ngưỡng bán kính h (Single-linkage) dễ mắc hiệu ứng dây chuyền: hai cụm tách biệt hoàn toàn có thể bị gộp làm một chỉ vì một chuỗi nhỏ điểm nhiễu nằm nối cầu với khoảng cách ≤ h. Ngoài ra, dựng đồ thị bán kính trong một ô phủ chứa m nút có độ phức tạp trường hợp xấu nhất là O(m²) cạnh, có thể làm chậm đột biến trên các ngày dày đặc điểm trùng.',
    evidence:
      'Các mạng xã hội trong bộ thử nghiệm có tới 88,8% (MathOverflow) và 96,2% (Reddit) nút trùng hoàn toàn vector đặc trưng 4D; nếu không khử trùng lặp trước khi dựng đồ thị bán kính, số cạnh trong ô phủ tăng bậc hai theo kích thước khối trùng.',
    remediation: [
      'Trong bản thảo luận văn: Không khẳng định toàn bộ thuật toán có độ phức tạp tuyến tính O(N_t) (chỉ bước chiếu PCA là tuyến tính); trình bày tường minh bước khử trùng lặp (deduplication trên tập vector phân biệt) trước khi truy vấn láng giềng bán kính h.',
      'Hướng khắc phục kỹ thuật: Thay Liên kết đơn bằng khoảng cách tiếp cận tương hỗ (Mutual Reachability Distance / HDBSCAN) để lọc bỏ các điểm cầu nối mật độ thấp, loại trừ hiệu ứng bắc cầu trong khi vẫn giữ tính tất định.',
    ],
  },
  {
    id: 'R4',
    severity: 'Critical Weakness • Điều kiện biên thực nghiệm',
    reviewer: 'Reviewer #2 (Algorithms & Scalability)',
    title: '4. Suy biến ngưỡng h ≤ 10⁻⁵ khiến độ bất ổn dưới nhiễu nhân 1% tăng vọt lên 1,0000 ở 5/9 tập Token',
    weakness:
      'Trong thực nghiệm kiểm chứng mở rộng khi ước lượng tiền xử lý hoàn toàn từ quá khứ, trên 5/9 tập dữ liệu (Aragon, Bancor, Centra, CoinDash, DGD), độ bất ổn của APts dưới nhiễu nhân 1% đạt S_noise = 1,0000 — tệ hơn gấp 3–12 lần so với GraphPulse gốc (0,0819–0,3265) và làm số nút Mapper phân mảnh lên 48–126,5 nút (so với 20 nút của B). Quy tắc h = Quantile_0.90(d_1-NN) tỏ ra không bền vững trước tiền xử lý co giãn tuyến tính.',
    evidence:
      'Cả 5 tập suy biến trùng khớp 100% với 5 tập có ngưỡng bán kính h ≤ 10⁻⁵ (thấp tới 5,57×10⁻¹⁴ trên DGD), do phép co giãn tuyến tính trọng số thô (cực đại tới 10²³) về [1, 10] ép các giao dịch thường về 1,00000x, nhỏ hơn biên độ nhiễu nhân 1% (ε ≈ 10⁻³) hàng trăm lần.',
    remediation: [
      'Trong bản thảo luận văn: Nâng nội dung này từ mức "ghi chú hạn chế" lên thành Điều kiện tiên quyết tiền xử lý (Preprocessing Precondition) ngay trong đặc tả thuật toán.',
      'Khắc phục kỹ thuật bắt buộc cho công bố quốc tế: Bỏ hoàn toàn phép co giãn tuyến tính trọng số thô về [1, 10]; áp dụng trực tiếp biến đổi logarit ln(1 + w) trên trọng số cạnh thô trước khi tổng hợp đặc trưng nút, hoặc áp đặt ngưỡng sàn bảo vệ h = max(Quantile_0.90(d_1-NN), h_min).',
    ],
  },
  {
    id: 'R5',
    severity: 'Critical Weakness • Giá trị ứng dụng hạ nguồn',
    reviewer: 'Reviewer #3 (Empirical Methodology & Statistics)',
    title: '5. Chưa chứng minh được giá trị bổ sung ở tác vụ hạ nguồn so với thống kê đồ thị đơn giản',
    weakness:
      'Trên toàn bộ 26 ô thực nghiệm phát hiện điểm chuyển cấu trúc, tập đặc trưng thống kê bậc nhất không dùng TDA (Simple: số nút, số cạnh, tổng trọng số) đạt trung vị AUC = 0,808, vượt xa APts đơn lẻ (0,693). Khi kết hợp Simple + APts, AUC chỉ đạt 0,794 (kiểm định vượt trội cho p = 0,6553 > 0,05). Dưới góc nhìn ứng dụng thực tế, chi phí thiết kế biểu diễn tô-pô phức tạp chưa chứng minh được lợi ích vượt qua thống kê cơ bản.',
    evidence:
      'Hai kịch bản can thiệp cài trên 18 ô dữ liệu thật (nhân đôi hoạt động 10% người gửi và nhân đôi giá trị giao dịch) tác động trực tiếp vào tổng bậc và tổng trọng số — chính là các đại lượng mà đường cơ sở Simple đo lường trực tiếp không qua nén.',
    remediation: [
      'Trong bản thảo luận văn: Định vị rõ đóng góp chính nằm ở chất lượng bản thân biểu diễn tô-pô (độ ổn định cấu trúc tăng 14,5×, tốc độ tăng 186×, khôi phục AUC của Mapper từ mức đoán ngẫu nhiên 0,47 lên 0,69), không tuyên bố vượt trội thống kê cơ bản.',
      'Hướng khắc phục thực nghiệm (công bố quốc tế): Thiết kế các kịch bản điểm chuyển bảo toàn bậc và tổng trọng số (volume- and degree-preserving topological shifts — ví dụ giữ nguyên tổng số nút, số cạnh, tổng khối lượng nhưng thay đổi cấu trúc cộng đồng hoặc hình thành chu trình giao dịch). Khi đó Simple suy biến về AUC ≈ 0,50, cho phép kiểm định thực chất giá trị riêng của TDA.',
    ],
  },
  {
    id: 'R6',
    severity: 'Major Weakness • Thiết kế thực nghiệm & Siêu tham số',
    reviewer: 'Reviewer #3 (Empirical Methodology & Statistics)',
    title: '6. Cỡ mẫu nhỏ (54 ngày) ở thực nghiệm tiền xử lý nhân quả & Thiếu phân tích độ nhạy siêu tham số',
    weakness:
      'Thực nghiệm kiểm chứng tiền xử lý hoàn toàn từ quá khứ chỉ được thực hiện trên mẫu 54 ngày (6 ngày/tập), quá nhỏ để thực hiện kiểm định suy diễn thống kê có lực kiểm định đủ mạnh. Bên cạnh đó, bộ 4 siêu tham số (N = 2, p = 0,40, cửa sổ né trùng w = ±0,02, phân vị ngưỡng q = 0,90) được cố định theo kinh nghiệm mà chưa có thực nghiệm quét độ nhạy (sensitivity analysis) trên 9 tập dữ liệu thật.',
    evidence:
      'Tệp tổng hợp kết quả thực nghiệm mở rộng ghi nhận phạm vi chỉ mang tính mô tả (descriptive sample) và không tái lập trên toàn bộ 993 ngày đánh giá.',
    remediation: [
      'Trong bản thảo luận văn: Giữ nghiêm ranh giới diễn giải — chỉ trình bày kết quả 54 ngày như phân tích chẩn đoán mô tả, không báo cáo p-value suy diễn trên mẫu này.',
      'Hướng bổ sung cho bài báo: Chạy toàn bộ 993 ngày với tiền xử lý log-trọng số nhân quả và bổ sung lưới phân tích độ nhạy cho w ∈ {0,01; 0,02; 0,05} và q ∈ {0,80; 0,85; 0,90; 0,95} để chứng minh hiệu năng ổn định trên một vùng tham số rộng.',
    ],
  },
  {
    id: 'R7',
    severity: 'Moderate Weakness • Thước đo đánh giá',
    reviewer: 'Reviewer #1 (TDA & Dynamic Graphs)',
    title: '7. Thước đo đồng thành viên cụm S = 1 − κ chỉ đo 0-skeleton, bỏ qua cấu trúc cạnh và vòng khuyết của Mapper',
    weakness:
      'Thước đo S = 1 − κ chỉ kiểm tra xem các cặp tài khoản (u, v) có cùng xuất hiện trong ít nhất một cụm Mapper hay không — tức là mới đo độ ổn định của tập nút cụm (0-skeleton), chưa phản ánh trực tiếp sự biến đổi của tập cạnh Nerve (1-skeleton), bậc nút Mapper hay số vòng khuyết (số Betti β₁).',
    evidence:
      'Hai đồ thị Mapper có thể duy trì chỉ số đồng thành viên cụm rất cao nhưng vẫn thay đổi cạnh cầu nối giữa các cụm biên, làm thay đổi 2 trong 5 đặc trưng đầu ra của GraphPulse (số cạnh và trọng số cạnh trung bình).',
    remediation: [
      'Trong bản thảo luận văn: Nêu rõ S = 1 − κ đo độ ổn định thành viên cụm (node-correspondence aware 0-skeleton stability), đồng thời đối chiếu bổ sung với tỷ lệ ngày rỗng cạnh (edgeless rate) và độ dịch chuyển vector đặc trưng 5D.',
      'Hướng bổ sung: Tích hợp thêm thước đo khoảng cách cấu trúc bậc cao trên đồ thị Mapper (như Bottleneck/Wasserstein distance trên biểu đồ bền vững H₀, H₁ hoặc chỉ số Jaccard có trọng số trên tập cạnh Nerve).',
    ],
  },
  {
    id: 'R8',
    severity: 'Moderate Weakness • Cơ sở lý thuyết',
    reviewer: 'Reviewer #2 (Algorithms & Scalability)',
    title: '8. Mệnh đề điều kiện đủ mang tính nhị phân (All-or-Nothing), thiếu cận trên định lượng khi có điểm vi phạm biên',
    weakness:
      'Mệnh đề điều kiện đủ ở Chuyên đề 2 chỉ đảm bảo S = 0 khi 100% nút nằm cách biên ô lớn hơn ε_L và 100% cặp nút không rơi vào dải nhạy cảm (h − 2ε_Z, h + 2ε_Z]. Trong dữ liệu thực tế, chỉ cần một nút rơi gần biên là giả thiết của mệnh đề bị vi phạm hoàn toàn; mệnh đề hiện chưa đưa ra được cận trên định lượng cho S(M_t, M’_t) theo tỷ lệ điểm vi phạm biên.',
    evidence:
      'Trên dữ liệu thật ở mức bỏ 2% giao dịch, APts đạt trung vị S_drop = 0,0122 > 0 (rất nhỏ nhưng không bằng 0 tuyệt đối), nằm ngoài phạm vi giải thích chặt của điều kiện bất biến tuyệt đối S = 0.',
    remediation: [
      'Trong bản thảo luận văn: Gọi chính xác là "Mệnh đề điều kiện đủ cho tính bất biến cục bộ trên tập nút cố định" và thừa nhận rõ tính chất điều kiện đủ nhị phân.',
      'Hướng phát triển lý thuyết: Chứng minh cận ổn định mềm (soft stability bound) biểu diễn cận trên của S(M_t, M’_t) như một hàm tường minh của tỷ lệ điểm rơi vào vùng biên α₁ và tỷ lệ cặp rơi vào dải ngưỡng α₂, kèm kiểm chứng thực nghiệm trực tiếp (α₁, α₂) trên 9 tập dữ liệu.',
    ],
  },
]

