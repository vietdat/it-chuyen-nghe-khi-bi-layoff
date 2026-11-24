# AUDIT — Repository IT Chuyển Nghề Khi Bị Layoff

**Ngày audit:** 23/11/2026
**Repo:** https://github.com/vietdat/it-chuyen-nghe-khi-bi-layoff/ (branch `main`, public)
**Người audit:** đọc trực tiếp mã nguồn và tài liệu trong repo (bản local đồng bộ với GitHub).
**Phạm vi đã đọc:**
- File gốc: `README.md`, `FAQ.md`, `ROADMAP.md`, `CONTRIBUTING.md`, `_TEMPLATE.md`, `.github/ISSUE_TEMPLATE/bao-thong-tin-sai.md`, `.github/ISSUE_TEMPLATE/de-xuat-nghe-moi.md`, `.vitepress/config.mts`, `package.json`.
- Toàn bộ 24 thư mục nghề trong 8 nhóm cha `01-ky-thuat-sua-chua/` … `08-nong-nghiep/`: mỗi nghề đọc toàn bộ `Info/nghien-cuu-thi-truong.md`, toàn bộ file tổng `tuan-*-day-du.md`, và 2 bài Facebook mẫu (`fb/bai-viet-dai-thu-2.md`, `fb/bai-thuc-hanh-thu-6.md`). Tuần 1 đọc thêm `FAQ.md` riêng của nghề.
- **Không audit:** thư mục `docs/` (build output của VitePress, tự sinh), `node_modules/`, và 2 thư mục `ke-hoach/`, `nghien-cuu/` ở root (tài liệu lập kế hoạch nội bộ, không đẩy lên GitHub — chỉ ghi chú sự tồn tại).

**Thước đo:** định vị đã chốt của dự án — giúp người từng làm IT chuyển sang nghề **hoàn toàn ngoài IT** tại Việt Nam (đi làm thuê hoặc tự làm chủ, có thể về quê); thông điệp "Bị layoff không phải hết nghề — mà là cơ hội bắt đầu một nghề mới"; không hướng dẫn tìm việc IT mới; không tô hồng, không hứa làm giàu nhanh, không khuyến khích vay/đầu tư lớn khi chưa kiểm chứng; không bịa lương/học phí/vốn/thời gian; mỗi số phải có nguồn + ngày kiểm tra; thiếu thì ghi "Chưa có dữ liệu xác minh"; phân biệt lương / doanh thu / lợi nhuận.

---

## 1. Số liệu thực tế (đếm trong mã nguồn)

| Hạng mục | Số đếm được |
|---|---|
| Nghề có nội dung đầy đủ | **24 / 24** (không có nghề trống) |
| Nhóm lĩnh vực | **8 nhóm** (`01`–`08`), chứa đủ 24 nghề |
| File Markdown trong 8 nhóm | **456 file** |
| File video | **1 file mp4** (tuần 1, reel Thứ 4) |
| File nghiên cứu thị trường (`Info/nghien-cuu-thi-truong.md`) | 24 file, **114.782 từ** |
| File tổng (`tuan-*-day-du.md`) | 24 file, **270.849 từ** |
| Checklist 30 ngày | 24 file |
| Lịch tuần (`ke-hoach/ke-hoach-tuan.md`) | 24 file |
| Bài Facebook | 144 bài (6/tuần × 24) |
| Kịch bản TikTok | 191 file .md (8/tuần, tuần 1 có 7 file .md + 1 mp4) |
| Script YouTube | 24 file |
| FAQ riêng của nghề | 1 file (tuần 1, thợ điều hòa — 15 câu) |
| Nghề có đủ 8 mục bắt buộc (trong bài dài FB + script YouTube) | **24 / 24 về hình thức** (xem mục 3: nhiều mục mỏng, xem chi tiết từng nghề ở mục 6) |
| Nghề có mục "Chi phí khởi điểm chi tiết" trong file tổng hoặc file nghiên cứu | **0 / 24** |
| Nghề có đủ số "Chưa có số liệu" = 0 trong file nghiên cứu | 2 (tuần 1 điều hòa, tuần 7 chăm sóc người già) — tổng 58 lần "Chưa có số liệu" trong 24 file nghiên cứu |
| File nghiên cứu có trích số liệu Mỹ (BLS) | **18 / 24** (đều ghi rõ là số Mỹ, chỉ để tham khảo) |
| Nghề đã đếm được nhu cầu Facebook / Google Maps / TikTok | **0 / 24** — cả 24 nghề đều ghi "Chưa đếm được — cần đếm thủ công trước ngày đăng" |
| Link `.md` hỏng trong `README.md` (67 link) và `FAQ.md` (32 link) | **0** |
| Câu hỏi trong `FAQ.md` | 43 câu, 6 nhóm (11 câu lấy từ câu hỏi thật trên Facebook/VOZ/Tuổi Trẻ/Substack, có ghi nguồn) |
| Nghề dự trữ trong `ROADMAP.md` | 76 nghề (24 đã làm + 76 = 100, khớp mục tiêu; đếm theo nhóm A–K khớp 100) |

**Kết luận đếm:** con số "24 nghề, roadmap 100 nghề" là đúng. Không có nghề trống, không mất file (19 file/tuần, tuần 1 có 20 file do thêm mp4). Vấn đề không nằm ở số lượng mà ở chất lượng từng nghề (mục 3, 6) và ở các khoảng trống dữ liệu có hệ thống (mục 4).

---

## 2. Điểm tốt

1. **Trung thực về giới hạn dữ liệu là điểm mạnh nhất của repo.** Chỗ chưa có số liệu được ghi thẳng "Chưa có số liệu" thay vì bịa: thu nhập chủ quán ăn (tuần 5), thu nhập chủ tiệm giặt ủi (tuần 13), thu nhập thợ tự làm theo tháng (tuần 2, 16), giá thiết bị chụp ảnh/quay phim (tuần 11, 19), học phí khóa solar (tuần 18), lương thợ khóa cơ (tuần 3). File nghiên cứu tuần 24 (trồng nấm) nói rõ "0 tin tuyển ở cả 4 thành phố" và điều chỉnh mục tìm việc thành đầu ra bán nấm — xử lý trung thực nhất.
2. **Phân biệt lương / giá dịch vụ / doanh thu / lợi nhuận ở nhiều nghề.** Tuần 2: "sửa máy giặt không vắt 250–550 nghìn… đừng lấy giá ca nhân với số ca rồi tưởng đó là lương". Tuần 24: doanh thu trại nấm 15–40tr/tháng được gắn cảnh báo "đây là doanh thu, chưa trừ chi phí". Tuần 14 (môi giới): hoa hồng 50–200tr được ghi rõ "khi đạt 100% KPI, không phải thu nhập đảm bảo"; ví dụ nhà 3 tỷ × 1,5% = 45tr được ghi rõ là phí cả giao dịch trước khi chia sàn.
3. **Số quảng cáo được gắn cờ, không dùng làm số chính.** Tuần 1: Clean Pick Pro Care 20–40tr "cao bất thường, chưa kiểm chứng"; tuần 3: "tự mở dịch vụ 50+ triệu/tháng" chưa kiểm chứng; tuần 14: CEN Land lương cơ bản 6–40tr "chưa kiểm chứng"; tuần 20: SUSI 15–40tr "chưa kiểm chứng, không dùng làm số chính"; tuần 23: số HINE Talent "91.000–124.000 USD" bị loại thẳng vì phi thực tế.
4. **Rào cản thật được nói thẳng, kể cả rào cản nhạy cảm.** Tuần 7 (chăm sóc người già): "dev nam 25–40 sẽ thấy ít tin tuyển trực tiếp phù hợp" và 2/3 việc thật chỉ tuyển nữ. Tuần 12 (vệ sinh): app bTaskee/JupViec chỉ tuyển nữ 18–50/18–55, "nam đăng ký app khó được nhận hơn". Tuần 22 (dạy lái xe): bằng B phải đủ 3 năm mới được dạy (Nghị định 94/2026, hiệu lực 01/7/2026), người chưa có bằng tốn 20–24tr + 3 năm chờ. Tuần 11: cả 3 việc thật đều yêu cầu 1–2 năm kinh nghiệm — không có việc cho người mới (dù đây là lỗi nội dung, việc ghi rõ là trung thực).
5. **Pháp lý ở một số nghề rất tốt.** Tuần 14: Điều 61 Luật Kinh doanh BĐS 2023, phạt 40–60tr (Nghị định 339/2026/NĐ-CP), phân biệt chứng chỉ hoàn thành khóa 74 tiết với chứng chỉ hành nghề. Tuần 15: Nghị định 91/2016/NĐ-CP về chế phẩm diệt côn trùng. Tuần 16: Nghị định 44/2016 về huấn luyện an toàn điện nhóm 3 (24 giờ). Tuần 23: thẻ hành nghề HDV, lệ phí 650.000đ, hạn 5 năm, "không có thẻ thì không được dẫn tour hợp pháp". Tuần 5: Điều 12 Nghị định 15/2018/NĐ-CP về thức ăn đường phố + mâu thuẫn với bài VOV 11/2026, hướng dẫn hỏi UBND phường.
6. **Nhân vật hư cấu trong truyện TikTok được ghi rõ là hư cấu** trong header file tổng cả 24 tuần. Poll "Vẫn đang tìm việc IT" chỉ là khảo sát trạng thái độc giả, không phải lời khuyên quay lại IT.
7. **Cấu trúc repo hiện tại (8 nhóm 01–08) tốt hơn cấu trúc mục tiêu ở một điểm:** mỗi nghề là 1 thư mục khép kín với đủ 19 file (nghiên cứu + checklist + lịch tuần + 6 bài FB + 8 clip TikTok + 1 script YouTube + file tổng), dễ đóng góp theo từng nghề, dễ kiểm tra đủ/thiếu. `ROADMAP.md` đếm khớp 100 nghề, có tên thư mục gợi ý cho 76 nghề dự trữ.
8. **Quy tắc dữ liệu trong `_TEMPLATE.md` và `CONTRIBUTING.md` là đúng chuẩn** (thẻ `[Cập nhật: Tháng/Năm – Nguồn]`, "Chưa có số liệu", lương VN chỉ từ tin tuyển thật, số Mỹ chỉ tham khảo, cấm nghề IT). Vấn đề là 24 nghề hiện có chưa đạt chuẩn này (mục 3, 6) — template tốt hơn nội dung hiện có.

---

## 3. Điểm yếu

### (a) Nội dung có thật sự giúp chuyển sang nghề ngoài IT không?

- **Vi phạm định vị trực tiếp trong `FAQ.md` — 3 câu trả lời khuyên song song tìm việc IT:**
  - "Nộp đơn mấy tháng không ai trả lời thì làm gì?": "…đồng thời luyện lại tiếng Anh giao tiếp và **live code nếu vẫn muốn ở lại IT**. Hai hướng chạy song song, hướng nào có tín hiệu trước thì theo hướng đó."
  - "Có nên bỏ phố về quê làm nghề khác không?": "Nhiều người chọn cách ở lại phố thêm 1, 2 tháng, **vừa tìm việc IT** vừa thử làm phụ nghề tay chân, rồi mới quyết."
  - "Nghe nói 5 năm nữa AI thay hết code, có nên bỏ IT luôn không?": "Làm được thì **ở lại**, không làm được thì học thêm 1 nghề tay chân làm đường lui, **chứ không cần bỏ hết ngay hôm nay**."
  - Cả 3 câu đều đi ngược nguyên tắc "KHÔNG hướng dẫn người đọc tìm việc IT mới". Cần viết lại theo định vị: rời hẳn IT.
- **Lệch nhẹ ở tuần 3 (thợ khóa):** "đường vào nhanh nhất" được chỉ là mảng khóa điện tử / khóa thông minh / IoT (cài đặt, app) — mảng giống IT nhất — trong khi nghề được đặt tên là thợ khóa (cơ + điện tử), và tin tuyển thợ khóa cơ truyền thống "gần như không có trên sàn".
- **Hoài niệm nghề code trong TikTok tuần 23, Tập 3:** "hồi làm dev, mình viết code cho người khác dùng. Giờ mình viết lịch trình, khách dùng ngay trong ngày" — lệch thông điệp "rời IT hoàn toàn".
- **Các nghề còn lại:** không phát hiện lời khuyên quay lại IT. Kỹ năng IT chỉ xuất hiện dạng chuyển đổi (bảng tính, tra AI, quảng cáo theo quận, đặt lịch online) — đúng định vị. CV mẫu "Trước" dùng profile dev Java/Spring Boot/2.000–30.000 CCU lặp lại ở nhiều tuần — là ví dụ "không dùng được", nhưng đặt bản sắc IT làm trung tâm hơi nhiều.
- **Thông điệp gốc bị đổi:** `README.md` và `.vitepress/config.mts` dùng câu "Bị layoff không phải hết nghề — mà là hết 1 công việc", khác với thông điệp đã chốt "mà là cơ hội bắt đầu một nghề mới". Cần thống nhất 1 câu.

### (b) Thu nhập: nguồn, phân biệt lương/doanh thu/lợi nhuận, số từ quảng cáo/Facebook, số thiếu nguồn

- **Vấn đề lớn nhất, có hệ thống: tin tuyển tra ngày 23/11/2026 nhưng ngày đăng là 12/2026–05/2027 (cách 1–6 tháng).** Gần như chắc chắn phần lớn tin đã hết hạn trước ngày đăng. Ví dụ đếm được:
  - Tuần 9–12 (đăng 01–02/2027): trong 12 "việc thật", chỉ **1 việc chắc chắn còn hạn** vào ngày đăng (El Gaucho Đà Nẵng, hạn 28/02/2027); 2 việc đã hết hạn nhưng vẫn nằm trong danh sách (Langmaster hạn 20/01/2027; El Gaucho TP.HCM hạn 08/02/2027); phần lớn còn lại không ghi hạn nộp nên không xác minh được.
  - Tuần 3 (thợ khóa): **2/3 "việc thật đang tuyển" đã hết hạn ngay lúc tra cứu** (CETS và Elecom đều hiển thị "Hết hạn ứng tuyển"), nhưng vẫn trình bày dưới tiêu đề "3 việc thật đang tuyển".
  - Tuần 8 (cắt tỉa thú cưng): TopCV chỉ tìm thấy 6 tin, **5/6 đã hết hạn** lúc tra cứu.
  - Tuần 22: cả 3 tin TopCV đúng vị trí đều đã hết hạn từ lúc tra cứu; TikTok Tập 1 vẫn nói "Trung tâm Thủ Đức **vừa tuyển 165 người**" trong khi tin hết hạn 20/11/2026 (5 tháng trước ngày đăng).
  - Tuần 18: 2 tin Cần Thơ (KBA hạn 31/12/2026, Redpower hạn 28/11/2026) đã hết hạn trước ngày đăng 02/04/2027 nhưng vẫn nằm trong bài thực hành.
  - Các file đều có dòng dặn "kiểm tra lại link trước khi đăng" — nhưng đó mới chỉ là lời dặn, chưa phải việc đã làm; chưa có tin thay thế sẵn cho bất kỳ tuần nào.
- **Số tổng hợp của sàn được trình bày như lương theo nấc (không nhắc lại caveat trong bài đăng):** tuần 4 — các số "trung bình 12,8tr/12,6tr/10,6tr/17,7tr/18,3tr" là bảng tổng hợp của Việc Làm Tốt, trang tự ghi "chỉ mang tính tham khảo", nhưng bài dài Facebook và script YouTube trình bày như lương theo nấc. Tuần 6 — số Vieclamtot (thợ chính TB 13,1tr) tương tự. Tuần 9 — VUIHOC tiểu học có 2 tin cho thu nhập tháng trái khoáy (2–5tr vs 2–15tr) không giải thích.
- **Số quảng cáo/bình luận Facebook làm số thu nhập: không phát hiện** (Facebook chưa đếm được gì nên không có số lương nào từ Facebook). Nhưng có số từ nguồn thứ cấp cũ: tuần 11 — học phí TuArt 25tr từ bài tổng hợp cập nhật ~2.609 ngày trước (~7 năm); tuần 7 — bảng lương Giúp Việc Cô Tấm từ bài cập nhật 10/2025; tuần 12 — bTaskee "19 triệu/tháng" từ báo 04/02/2026 (~9,5 tháng trước ngày đếm).
- **Số thiếu nguồn/ngày:** mọi số từ `linhna.edu.vn` và `hocngheoto.edu.vn` (tuần 22: tập sự 8–12tr, chính thức 12–18tr, 25–35tr) đều không ghi ngày tra cứu hay ngày bài viết. ~~Tuần 24: "Trại ở Hà Tĩnh bán cho chợ Bình Hương mỗi ngày 70–80kg" xuất hiện trong bài dài FB, bài thực hành và script YouTube nhưng **không có trong file nghiên cứu** (nguồn vietnamnet.vn về cùng trại chỉ ghi thu hoạch 100kg/ngày, cuối năm 200kg/ngày).~~ **Đính chính (kiểm chứng lại 23/11/2026, Phase 4):** con số "chợ Bình Hương 70–80kg/ngày" là ĐÚNG — bài vietnamnet.vn ngày 25/10/2026 về trại Hà Tĩnh ghi đúng câu "Riêng chợ Bình Hương, mỗi ngày cơ sở cung cấp khoảng 70-80kg nấm". Câu audit gốc ở đây là sai, đã giữ lại con số kèm trích dẫn đầy đủ trong file tuần 24.
- **Mâu thuẫn lương giữa `FAQ.md` và `README.md` (cùng 1 nghề, cùng ngày tra cứu 23/11/2026):**
  - Chăm sóc người già: FAQ ghi "10, 20 triệu/tháng" — README ghi người mới 6–8tr, có chứng chỉ 9–12tr.
  - Thợ làm bánh (thợ chính): FAQ ghi "15, 20 triệu" — README ghi 8–12tr.
  - Điện mặt trời: FAQ ghi "9, 22 triệu" — README ghi 8–15tr, sau 1 năm 10–16tr.
  - Dạy lái xe (3–5 năm KN): FAQ ghi "15, 25 triệu" — README ghi 1–3 năm 12–18tr.
  - Môi giới (lương cứng): FAQ ghi "6, 22 triệu" — README ghi 4,4–22tr.
  - Cắt tóc nam (thợ chính): FAQ ghi "7,5, 18 triệu" — README ghi 10–15tr.
  - Cần chốt 1 số duy nhất cho mỗi nghề và đồng bộ 2 bảng.

### (c) Vốn đầu tư

- **0/24 nghề có mục "Chi phí khởi điểm chi tiết"** (dụng cụ + học phí + dự phòng 2 tháng) như `_TEMPLATE.md` yêu cầu. 6 file nghiên cứu không hề nhắc tới chữ "vốn" (tuần 1 điều hòa, tuần 3 thợ khóa, tuần 15 diệt côn trùng, tuần 17 ống nước, tuần 7 chăm sóc người già, tuần 23 HDV).
- **Vốn mở tiệm không có số ở hầu hết nghề:** tuần 1–4 (đồ nghề chỉ liệt kê tên, không giá); tuần 6 (cắt tóc nam: "mua đồ nghề cơ bản" không kèm giá, không vốn mở tiệm); tuần 8 (cắt tỉa thú cưng: mở tiệm riêng không có 1 con số nào); tuần 14 (môi giới: phí đăng tin/quảng cáo/xăng xe không có giá nào); tuần 15 (diệt côn trùng: bình phun, thuốc, xe, đồ bảo hộ không giá); tuần 17 (ống nước: máy thông tắc, xe không số); tuần 18 (điện mặt trời: vốn nhập pin/inverter "chưa có số liệu"); tuần 19 (quay phim: **không có bất kỳ giá thiết bị nào** dù file gọi đây là "khoản đầu tư lớn nhất của nghề"); tuần 11 (chụp ảnh: giá thiết bị "Chưa có số liệu", không có cả khoảng giá máy cũ/mới).
- **Dự phòng sinh hoạt 2–3 tháng đầu gần như không có ở nghề nào.** Ngoại lệ: tuần 5 (quán ăn: lưu động 3 tháng 51tr + dự phòng 16tr cho quán 30m² phố tỉnh) và tuần 13 (giặt ủi: dự phòng 3–6 tháng, có bóc tách vốn 80–200tr).
- **Cột "Vốn đầu tư" trong bảng so sánh `README.md` thực chất phần lớn chỉ là học phí**, không phải tổng vốn khởi điểm — dễ khiến người đọc tưởng "học phí 5–15tr" là đủ để bắt đầu nghề.
- **Nghề làm tốt về vốn:** tuần 5 (quán ăn: xe đẩy 20–35tr, quán nhỏ 30–60tr, quán bình dân 150–300tr, có bóc tách), tuần 13 (giặt ủi: tiệm nhỏ 80–200tr, laundromat 300–600tr, xưởng ~770tr — nhưng mâu thuẫn giá máy giặt công nghiệp 30–60tr/máy vs 60–120tr/máy chưa chốt), tuần 20 (làm tóc nữ: bộ dụng cụ ~4,2tr), tuần 10 (shipper: ~0,5–1tr nếu đã có xe — nhưng giá xe máy "Chưa có số liệu").

### (d) Nơi học nghề

- **Nghề chưa có nơi học đầy đủ (tên + học phí + thời gian):**
  - Tuần 3 (thợ khóa): Hà Nội "Chưa có số liệu" về khóa học có tên + học phí; chỉ có MasterKeys TP.HCM (19tr) và Minh Phát Đà Nẵng (10–15tr).
  - Tuần 17 (ống nước): **0 nơi nào có học phí công khai** (có tên trường nhưng không giá); Đà Nẵng không tìm thấy khóa riêng.
  - Tuần 18 (điện mặt trời): **không có học phí khóa solar nào** (chỉ có số nền điện dân dụng 4–12tr, không phải khóa solar); Hà Nội và Đà Nẵng không có khóa solar.
  - Tuần 11 (chụp ảnh): học phí TuArt từ nguồn ~7 năm tuổi; GPHA lịch học tháng 11–12/2025 (đã cũ); Cần Thơ không tìm thấy khóa nào.
  - Tuần 13 (giặt ủi): trung thực là **không có khóa học chính quy nào** — đường chính là xin làm tại tiệm (đúng bản chất nghề, không phải lỗi).
  - Tuần 12 (vệ sinh): không có khóa chính quy — học qua app/công ty, 0đ (đúng bản chất).
  - Tuần 24 (trồng nấm): khóa HTX Sáng Thiện giá từ bài **2015 (hơn 10 năm)**; lớp Hội Nông dân Đà Nẵng thông tin từ **2011**.
- **Giới hạn đối tượng bị lược khỏi bài đăng:** tuần 2 — Điện Tử HT dạy miễn phí nhưng giới hạn độ tuổi 13–25 (ghi trong nghiên cứu, không nhắc trong bài dài FB và clip Tập 7; độc giả ex-IT lớn tuổi có thể không đủ điều kiện).

### (e) Tìm việc / khách đầu tiên

- Xem (b): tin hết hạn là vấn đề chung. Ngoài ra:
  - Tuần 11: **không có việc thật nào cho người mới** (cả 3 việc đều yêu cầu 1–2 năm KN + Cao đẳng trở lên); tin duy nhất không yêu cầu KN (Nacy Studio Đà Nẵng) đã hết hạn 30/11/2026.
  - Tuần 19: trong 9 tin, chỉ **1 tin nhận người dưới 1 năm KN** — nhưng Tập 1 và career path trình bày khoảng 9–16tr như cửa vào chung.
  - Tuần 16: 3 việc thật đều ở TP.HCM; TIME DECOR yêu cầu 1 năm KN + trung cấp nhưng được giới thiệu như việc cho người mới; Cần Thơ không có tin riêng cho điện nhà ở.
  - Tuần 18: 3 việc thật **đều "chưa ghi tên công ty trong kết quả tìm kiếm"** — đăng tin tuyển mà không có tên nhà tuyển dụng.
  - Tuần 7: 2/3 việc thật chỉ tuyển nữ (xem mục 2.4 — trung thực nhưng người đọc nam gần như không nộp được việc nào).
  - Tuần 6: Việc 3 (Sài Gòn Hair) tuyển **2 bạn nữ** dạy nghề miễn phí — không phù hợp đối tượng dev nam; các tin Muaban đều đã hết hạn.
  - Mục 6 "tìm khách đầu tiên" mỏng ở nhiều nghề: chỉ dừng ở "đăng TikTok/Facebook theo quận" (tuần 17–20), không có cách tìm khách đầu tiên cụ thể khi tự làm (tuần 1).

### (f) Rủi ro sức khỏe và an toàn

- **Mỏng hoặc thiếu:**
  - Tuần 3 (thợ khóa): **mỏng nhất** — không có mục rủi ro thể chất nào (đứt tay/máy cắt chìa, bụi kim loại).
  - Tuần 13 (giặt ủi): chỉ có "đứng máy cả ngày, tay ướt" — không nhắc dị ứng/viêm da do hóa chất giặt–tẩy, bỏng hơi nước nóng, hít bụi vải.
  - Tuần 9 (gia sư): chỉ có "dạy trẻ mệt theo cách khác" — không nhắc mỏi giọng, mỏi mắt/ngồi nhiều giờ trước màn hình.
  - Tuần 14 (môi giới): chỉ có giờ giấc + áp lực — không nhắc an toàn khi đi xem nhà một mình với khách lạ, lái xe nhiều buổi tối.
  - Tuần 17 (ống nước): **thiếu nghiêm trọng an toàn điện** — tin tuyển gần như luôn gộp "thợ điện nước" nhưng file không có một dòng về an toàn điện; không nhắc hóa chất thông tắc, bệnh từ nước thải.
  - Tuần 6 (cắt tóc nam): thiếu lây nhiễm (nấm da đầu, viêm da), dao cạo/kéo đứt tay, biện pháp bảo hộ.
  - Tuần 23 (HDV): thiếu rủi ro tai nạn giao thông/đuối nước trên tour biển đảo.
  - Tuần 21 (làm bánh): thiếu dị ứng bột/bệnh hô hấp do bột bay.
- **Tốt:** tuần 12 (vệ sinh: VOC gây hen/COPD, viêm da tiếp xúc 10–15% vs 2–3% dân số chung), tuần 15 (diệt côn trùng: ngộ độc cấp tính + lâu dài, pha sai liều, chạy xe 50–90km/ngày — nhưng thiếu danh mục đồ bảo hộ cụ thể và cách xử trí khi ngộ độc), tuần 16 (điện dân dụng: quy trình cắt điện, Nghị định 44/2016 — nhưng thiếu giá đồ bảo hộ và bảo hiểm trách nhiệm), tuần 20 (làm tóc nữ: PPD gây dị ứng, patch test 48 giờ bắt buộc), tuần 7 (chăm sóc người già: tải cảm xúc, người già qua đời trong lúc đang chăm — tốt nhất về sức khỏe tinh thần).

### (g) Thử nghề trước khi đầu tư

- **Không nghề nào có mục "thử nghề" tường minh, có cấu trúc** (theo thợ 1 ngày, học thử trước khi đóng học phí, tiêu chí dừng/tiếp). Chỉ có "xin làm thợ phụ" ngầm định trong checklist 30 ngày.
- **Tốt nhất:** tuần 8 (cắt tỉa thú cưng: "thử xin làm thợ phụ tắm/sấy 1–2 tuần trước, xem mình có chịu được lông bay, nước bắn, tiếng sủa cả ngày không, rồi mới quyết định học khóa cắt tỉa"); tuần 5 (quán ăn: bán thử 1 ngày 30–50 suất, nấu thử 1 món 3 lần, xin làm phụ bếp 1–2 tháng); tuần 7 (đi theo người có kinh nghiệm 2–3 ca, tự làm 1 ca ban ngày có người kèm); tuần 24 (mua 200 bịch phôi trồng thử 1,5–6tr, 1–2 tháng mới có lứa đầu).
- **Thiếu đáng kể:** tuần 19 (quay phim: không có hướng dẫn thử trước khi mua máy — trong khi máy quay là rào cản tiền lớn nhất); tuần 17, 18, 20 (không có mục thử tường minh trước khi đóng học phí 10–25tr); tuần 22 (không có bước "ngồi ghế phụ 1 buổi trước khi đóng 2,5tr học chứng chỉ" thành hướng dẫn rõ ràng).
- Ngoại lệ bị bỏ sót: tuần 4 — khóa xe điện Thành Tùng "Học thử miễn phí 3 ngày" có trong nghiên cứu nhưng không được đưa vào bài đăng.

### (h) Pháp lý / điều kiện hành nghề / chứng chỉ

- **Nghề cần mà chưa có hoặc mỏng:**
  - Tuần 20 (làm tóc nữ): **không có gì** — không nhắc chứng chỉ hành nghề, quy định an toàn hóa chất, giấy phép/đăng ký kinh doanh khi mở salon.
  - Tuần 17 (ống nước): chỉ nhắc "chứng chỉ sơ cấp" như lựa chọn; không nói có bắt buộc không; không có an toàn lao động, không có đăng ký kinh doanh khi mở tiệm.
  - Tuần 1, 2, 4 (điều hòa, điện gia dụng, xe máy): chứng chỉ chỉ nhắc như điều kiện xin việc công ty; **không nói rõ có cần giấy phép/đăng ký kinh doanh khi mở tiệm không**.
  - Tuần 5 (quán ăn): có ATTP nhưng **thiếu đăng ký hộ kinh doanh/thuế, giấy phép sử dụng vỉa hè/lòng đường**.
  - Tuần 7 (chăm sóc người già): ranh giới caregiver ≠ điều dưỡng tốt, nhưng **thiếu hợp đồng lao động/BHXH khi thuê trực tiếp qua gia đình, khám sức khỏe/lý lịch tư pháp, trách nhiệm pháp lý khi người già ngã/tử vong trong ca trực**.
  - Tuần 8 (cắt tỉa thú cưng): có chứng chỉ Level C/B, nhưng **không có đăng ký kinh doanh/giấy phép mở spa, trách nhiệm khi thú bị thương/chết, quy định tiêm phòng/sức khỏe thú**.
  - Tuần 11 (chụp ảnh): không nói nghề có cần bằng cấp/chứng chỉ gì không; các tin tuyển yêu cầu "Cao đẳng trở lên" là rào cản thật nhưng file không flag.
  - Tuần 16 (điện dân dụng): **không trả lời rõ** thợ tự nhận việc nhà ở có cần chứng chỉ/giấy phép hành nghề nào ngoài huấn luyện an toàn nhóm 3 không.
  - Tuần 18 (điện mặt trời): pháp lý về đấu nối điện tốt (NĐ 58/2025, NĐ 243/2026), nhưng thiếu: thợ có cần chứng chỉ hành nghề điện không; ai làm thủ tục đấu nối.
  - Tuần 19 (quay phim): có flycam (NĐ 282/2025, phạt đến 40tr) nhưng thiếu bản quyền nhạc trong phim cưới, hợp đồng/quyền hình ảnh khách, thuế khi làm tự do theo show.
  - Tuần 21 (làm bánh): thiếu giấy chứng nhận kiến thức ATTP / cơ sở đủ điều kiện ATTP và đăng ký hộ kinh doanh khi mở tiệm/bán online.
  - Tuần 24 (trồng nấm): thiếu VSATTP khi bán nấm tươi cho chợ/quán và đăng ký hộ kinh doanh khi bán thường xuyên.
  - Tuần 6 (cắt tóc nam): không có gì về đăng ký kinh doanh/giấy phép mở tiệm, điều kiện vệ sinh khi làm dịch vụ trên da đầu.
- **Nghề làm tốt:** tuần 14 (BĐS), 15 (diệt côn trùng), 22 (dạy lái xe), 23 (HDV) — xem mục 2.5.

### (i) Nội dung quá lạc quan hoặc không có bằng chứng (trích dẫn cụ thể)

- **Câu hook/câu kết viết quá tay so với thân bài — có hệ thống, lặp lại nhiều tuần:**
  - "học xong khóa nào cũng cầm đồ nghề đi làm được ngay" — TikTok Tập 7 ở tuần 1, 2, 16, 19, 20 (và biến thể "học xong là cầm máy đi quay phụ được ngay" tuần 19, "học xong là cầm máy đi chụp phụ được ngay" tuần 11, "học xong khóa nào cũng cầm kéo đi làm được ngay" tuần 20). Mâu thuẫn với lộ trình trong chính file: làm độc lập cần 6–12 tháng, sửa board/inverter cần 1,5–3 năm, thợ chính tóc nữ cần 1,5–3 năm.
  - "Có một nghề học vài tháng là làm ra tiền" — hook YouTube + bài dài FB ở tuần 15, 17, 21, 24 (và biến thể "học 2 tới 3 tháng là cầm tông đơ đứng ghế được" tuần 6 — trong khi file viết "đứng ghế cắt khách riêng thường mất 6–12 tháng").
  - Tuần 14 (môi giới), hook video dài + mở bài dài: *"Khách đi xem 3 căn trong 1 buổi chiều, về nhà nhắn: căn thứ 2, em chốt. Một buổi chiều mà chốt được 1 căn."* — giai thoại không nguồn, **mâu thuẫn trực tiếp** với chính nội dung file ("2–3 tháng đầu chưa có giao dịch là chuyện thường", "Không có chuyện chốt 1 căn đổi đời").
  - Tuần 23 (HDV): hook "Có một nghề **học 1 tháng là có thể đi làm**" — mâu thuẫn với chính Q&A trong file: "Từ lúc đăng ký học đến lúc cầm thẻ, nhanh thì khoảng **2–3 tháng**".
  - Tuần 24 (trồng nấm): reel Thứ 4 tự mâu thuẫn trong cùng 1 video 45 giây — đoạn 05: "Phôi ủ tơ 35 tới 60 ngày mới cho nấm. **Tháng đầu chưa có đồng nào**", đoạn 06: "Có người đổi sang nghề **tay mình làm ra tiền ngay**".
  - Tuần 22: TikTok Tập 4 "30 ngày, 5 việc, **xong là đứng lớp được**" — sai: chứng chỉ sư phạm mất 1,5 tháng + tập huấn + cấp giấy chứng nhận.
  - Tuần 23: checklist 30 ngày nén timeline không thực tế — ngày 17–18 "đi thi chứng chỉ" rồi ngay trong 2 ngày đó "nộp hồ sơ xin cấp thẻ", trong khi chứng chỉ được cấp **trong 30 ngày sau kỳ thi**; TikTok Tập 4 "Ngày 30, anh ấy dẫn tour đầu tiên" — dẫn tour khi chưa có thẻ là dẫn "chui" theo chính định nghĩa của file.
  - Tuần 9: hook *"Có một nghề không cần mặt bằng, không cần vốn, làm được từ nhà"* — mâu thuẫn với chính file (TESOL 6–25 triệu, tai nghe/mic, tháng đầu thu nhập ~0).
  - Tuần 10: hook *"chỉ cần bằng lái với cái xe máy là chạy được ngay"* — lược bỏ lý lịch tư pháp, đồng phục, ký quỹ.
  - Tuần 16: hook "Mười lăm phút mà biết ngay bệnh" + career path "6–12 tháng: lên tay nghề… lương thợ chính khoảng 9–16tr" — mâu thuẫn Nambin (thợ chính 1,5–3 năm); 9–16tr ở mốc 6–12 tháng thực ra là lương tin tuyển cho người <1 năm KN.
  - Tuần 11: career path "3–6 tháng: chụp chính show nhỏ… lương studio khoảng 8–15 triệu/tháng" — mâu thuẫn với chính số liệu (mọi tin studio 8–15tr đều yêu cầu 1 năm KN).
  - Tuần 19: Tập 1 "làm thuê cho công ty 9 đến 16 triệu một tháng" — gộp cả tin yêu cầu 2 năm KN; trong 9 tin chỉ 1 tin nhận người dưới 1 năm KN.
  - Tuần 8: giai thoại Báo Khánh Hòa 2019 "1 spa Nha Trang trước Tết nhận 50–80 thú/ngày" được ghi rõ là 1 spa năm 2019 nhưng vẫn dùng làm bằng chứng cao điểm Tết.
- **Ví dụ hư cấu được trình bày như thật:** `FAQ.md` — "Có, và đã có ví dụ thật. 11 giờ trưa, khách nhắn: máy kêu to, báo giá giúp em. Thợ dùng AI tra lỗi và báo giá trong 30 giây…" — đây chính là tình tiết hư cấu của clip TikTok Tập 3 tuần 1 (nhân vật "anh ấy" được ghi rõ là hư cấu trong file tuần 1). Cần sửa thành "ví dụ minh họa" hoặc bỏ chữ "thật". Tương tự tuần 13: "Có 1 ví dụ thật: nhận chăn ga 50.000đ/cái… lãi bằng 0" — thực ra là ví dụ của e-biz.com.vn trong file nghiên cứu, không phải ca thật của tiệm nào.
- **Khẳng định tuyệt đối không bằng chứng:** tuần 9 Q&A "Gia sư có bị AI thay thế không? Không, vì việc này cần sửa lỗi trực tiếp…"; tuần 11 Q&A "Photographer cưới có bị AI thay thế không? Không…".

---

## 4. Trùng lặp / mâu thuẫn giữa các file

1. **Học phí Thanh Xuân (tuần 1) chưa chốt:** 10tr (trang hiện tại) vs 14,9tr sơ cấp / 19,9tr trung cấp / 12,5tr (trang cũ) / 9,5tr (trang .edu.vn cũ). File ghi rõ mâu thuẫn là có thật và dặn "gọi hỏi lại", nhưng bài đăng vẫn đưa 10tr làm số chính. Liên quan: HPcom 10,3tr (tuần 1) vs 8,3tr (tuần 2, cùng khóa — file tuần 2 ghi "giá ưu đãi thay đổi theo đợt").
2. **Lương thợ phụ tuần 2 lấy từ tin đã hết hạn:** số lương thợ phụ 6–9tr trong bài dài lấy từ tin JobsGo Tiệm Sửa Nhanh (hạn 06/12/2026, đã loại khỏi bài thực hành vì hết hạn trước ngày đăng 11/12) — nguồn lương thợ phụ yếu hơn bề ngoài.
3. **Tuần 3 (thợ khóa):** nghiên cứu liệt kê Demax 10–15tr như tin TopCV bình thường (crawl 18/11/2026, không ghi hết hạn), nhưng file tuần 3 lại viết "Tin đã hết hạn tính tới 23/11/2026, KHÔNG dùng: Demax…" mà không có nguồn cho kết luận hết hạn đó.
4. **Tuần 4 (xe máy):** Thanh Xuân TP.HCM 13,9tr — bảng nghiên cứu ghi thời gian **7–9 tháng**, nhưng script YouTube và bài dài Facebook viết "khóa sơ cấp nghề, 6 tháng… 13,9 triệu ở cơ sở TP.HCM" (gộp sai thời gian). Khung pool "khóa học 2–4 tháng" mâu thuẫn với khóa sơ cấp thực tế 6 tháng/14,9tr. Bài dài gộp "thợ head 12,5–22tr" từ 2 thành phố (TP.HCM 12,5–21tr, Đà Nẵng 15–22tr) thành 1 khoảng, mất phân biệt theo nơi.
5. **Tuần 6 (cắt tóc nam):** Thanks Academy khóa cơ bản 18tr nhưng "khóa nâng cao kèm cơ bản 17tr" (giá gốc 20tr) — nâng cao kèm cơ bản rẻ hơn khóa cơ bản, chưa giải thích.
6. **Tuần 7 (chăm sóc người già) — 3 mâu thuẫn giữa bản FB rời và file tổng:**
   - `fb/bai-thuc-hanh-thu-6.md` viết về Việc 1: "ông tự đi vệ sinh, không phải đi trong tả" — mâu thuẫn với nghiên cứu + file tổng: "ông lớn tuổi không đi lại được, buổi tối đi vệ sinh 2–3 lần cần người khiêng qua toilet (ông 60kg)".
   - File tổng nói học phí "khoảng 4–9 triệu" nhưng khóa Hướng Nghiệp Á Âu ở Đà Nẵng là **14tr** — con số cao nhất bị lược khỏi khoảng tổng.
   - Bản FB rời thêm "luôn có sẵn 50 ứng viên cho gia chủ lựa chọn" ở Việc 2 — không có trong nghiên cứu hay file tổng, không rõ nguồn.
   - Lương HN: chăm khỏe 8–10tr (bảng Cô Tấm 10/2025) vs ăn ở lại 6–7tr (bảng giá 2026) — hai nguồn khác nhau chưa đối chiếu.
7. **Tuần 11 (chụp ảnh):** `fb/bai-thuc-hanh-thu-6.md` (bản đầy đủ, có mô tả công việc, yêu cầu chi tiết) và phần tương ứng trong file tổng (bản rút gọn, chỉ 14/73 dòng trùng khớp) — 2 bản khác nhau, cần đồng bộ. Vieclam24h Đà Nẵng tự mâu thuẫn: trang photographer ghi 1–3 năm **7–10tr**, trang nhiếp ảnh ghi **8–12tr** — file ghi cả 2, không chọn.
8. **Tuần 13 (giặt ủi):** máy giặt công nghiệp 30–60tr/máy vs 60–120tr/máy; hóa chất 3–7tr vs 5–10tr/tháng; điện nước 5–10tr vs 5–15tr/tháng — file ghi "các nguồn khác nhau khá nhiều" nhưng không chốt.
9. **Tuần 14 (môi giới):** `Info/nghien-cuu-thi-truong.md` dòng tóm tắt ghi Đất Xanh Miền Tây "20–70tr", nhưng mục chi tiết ghi **9,4–150tr** (20–70tr là của tin thứ hai cùng công ty).
10. **Tuần 15 (diệt côn trùng):** thang lương đảo ngược — Rentokil **14tr cho vị trí không yêu cầu kinh nghiệm** cao hơn thợ "đã biết việc" 13–15tr (tin đã hết hạn) và cao hơn giám sát Six Senses 8–15tr (yêu cầu ≥1 năm KN). Career path "3–6 tháng: làm chính, lương khoảng 13–15tr" lấy từ tin đã hết hạn, chính file nghiên cứu đã ghi "cần kiểm chứng lại bằng tin mới trước khi dùng làm số chính".
11. **Tuần 16 (điện dân dụng):** tin Đông Vinh 10–18tr "không yêu cầu kinh nghiệm" là lắp đặt điện–nước cho **hệ thống xử lý nước**, không phải điện nhà ở — video/bài dài gộp chung thành "vào công ty ghi không yêu cầu kinh nghiệm thì lương 8–12tr hoặc 10–18tr". Đếm TopCV: ghi "tìm thấy 8 tin đang mở" nhưng 2 trong 8 đã ghi "Hết hạn ứng tuyển" — thực chất chỉ 6 tin dùng được.
12. **Tuần 17 (ống nước):** đếm TopCV "Tìm thấy 8 tin đang mở" nhưng 2 trong 8 đã ghi "Hết hạn ứng tuyển". Career path "3–6 tháng: làm chính, lương 10–15tr" vs nấc 2 "làm độc lập thường mất 6–12 tháng".
13. **Tuần 18 (điện mặt trời):** đếm TopCV §1 ghi "tìm thấy 7 tin", nhưng mục theo thành phố cộng thêm 2 tin Đà Nẵng — tổng thực tế là 9 tin.
14. **Tuần 20 (làm tóc nữ):** bảng tóm tắt ghi phụ "5,5–15tr" nhưng tin A NEW DAY ghi phụ 15–20tr — vượt khung bảng. YT career "0–3 tháng thu nhập thợ phụ khoảng 5,5–10 triệu" thấp hơn cả tin A NEW DAY (15–20tr) và TB Vieclamtot (10,6tr).
15. **Tuần 21 (làm bánh):** bảng nhu cầu theo thành phố ghi Hà Nội "thợ chính 10–15tr", nhưng phần "Nhận xét" trong file nghiên cứu và lời thoại YouTube + bài dài FB đều ghi Hà Nội "thợ chính 13–20 triệu" — con số 13–20tr không truy được về 1 tin tuyển cụ thể nào.
16. **Tuần 23 (HDV):** "HDV tại điểm mới ra trường: 5–8tr/tháng" (Trường Saigontourist, không ghi ngày) mâu thuẫn nhẹ với Q&A + kết luận nghiên cứu "HDV mới/không ngoại ngữ 7–10tr/tháng nếu đi tour đều".
17. **Tuần 10 (shipper):** file ghi "TopCV tìm thấy **10 tin**" nhưng chỉ liệt kê **8 tin**. GHN lấy hàng: mục tin tuyển ghi **12–15 triệu/tháng**, bảng thành phố + mục lương ghi **12–18 triệu/tháng** — ba con số khác nhau cho cùng 1 tin.
18. **Tuần 9 (gia sư):** cùng Langmaster nhưng 2 tin trái ngược — "không yêu cầu kinh nghiệm" (100.000đ/giờ) vs yêu cầu **TOEIC ≥ 900 / IELTS ≥ 7.0** (Đà Nẵng) — file liệt kê cả 2 mà không gỡ.
19. **Tuần 22 (dạy lái xe):** số `linhna.edu.vn` / `hocngheoto.edu.vn` không có ngày; khẳng định "Thủ Đức tuyển 100 tập sự, không yêu cầu kinh nghiệm" không có câu trích dẫn nguồn trong file nghiên cứu.
20. **Tuần 5 (quán ăn):** Rosa 21.999.999đ trong nghiên cứu → "22 triệu" trong file tổng (làm tròn, chấp nhận được). Saigontourist ghi "khai giảng gần nhất 03/12/2026" — đã qua trước tuần đăng, cần cập nhật.
21. **Link nội bộ sau lần gom nhóm (24 nghề vào 8 nhóm 01–08):** link `.md` trong `README.md` và `FAQ.md` đều sống (**0 hỏng** — đã kiểm tra bằng script). Nhưng còn sót đường dẫn cũ dạng **văn bản thường (không phải link)**: `ROADMAP.md` cột "Thư mục" ghi tên thư mục trần không có tiền tố nhóm cho cả 24 dòng (vd: `` `tho-lap-dat-sua-dieu-hoa/` `` thay vì `01-ky-thuat-sua-chua/tho-lap-dat-sua-dieu-hoa/`); `.github/ISSUE_TEMPLATE/bao-thong-tin-sai.md` ví dụ đường dẫn `tho-lap-dat-sua-dieu-hoa/Info/nghien-cuu-thi-truong.md` (thiếu tiền tố nhóm). `CONTRIBUTING.md` và `_TEMPLATE.md` vẫn dùng nhóm A–K của pool và cấu trúc thư mục nghề ở root — lệch với cấu trúc 8 nhóm 01–08 hiện tại.
22. **File FB rời vs file tổng không đồng nhất:** tuần 6 và 7 (bản rời có thêm chi tiết; tuần 7 có cả chi tiết mâu thuẫn và không rõ nguồn — xem mục 6); tuần 11 (2 bản thực hành khác nhau). Tuần 1–4, 17–20, 21–24 đã đối chiếu: FB rời trùng khớp file tổng (0 dòng lệch ở tuần 17–20, 21–24).

---

## 5. Đối chiếu cấu trúc hiện tại với cấu trúc mục tiêu

Cấu trúc mục tiêu trong master prompt: `00-dinh-huong/`, `01-nghe-ky-thuat/` … `08-nghe-thu-cong/`, `09-hoc-nghe/`, `10-tim-viec/`, `11-cong-cu/`, `12-cau-chuyen-thuc-te/`, `13-nguon-du-lieu/`, cộng `START-HERE.md`, `TEMPLATE-NGHE.md` (12 mục), `FEEDBACK.md`.

| Hạng mục mục tiêu | Hiện trạng | Đánh giá |
|---|---|---|
| `START-HERE.md` (hành trình 10 bước) | **Chưa có** | Thiếu quan trọng nhất. `README.md` có mục "Bạn đang có gì?" (4 hoàn cảnh) và "Ai nên đọc" — là khởi đầu tốt nhưng không phải hành trình 10 bước (lý do rời IT → đánh giá tài chính → sức khỏe → làm thuê/tự kinh doanh → chọn nhóm nghề → so sánh 3–5 nghề → thử nghề → chọn nơi học → tìm việc/khách đầu tiên → đánh giá 30–90 ngày). |
| `00-dinh-huong/` (tại sao rời IT, đánh giá bản thân, chọn nghề, kỹ năng chuyển đổi, sai lầm) | **Chưa có** | Thiếu. Một phần nằm rải rác trong `FAQ.md` (mục 2 "Bị layoff rồi bắt đầu từ đâu?") nhưng không thành hệ thống. |
| 8 nhóm nghề mục tiêu (kỹ thuật / dịch vụ / ẩm thực / vận tải / nông nghiệp / giáo dục / kinh doanh / thủ công) | Hiện có 8 nhóm 01–08 nhưng phân loại khác: `03-am-thuc-ban-le`, `07-dich-vu-tu-van-huong-dan` | **Giữ cấu trúc 8 nhóm hiện tại, đừng dời lại.** Nhóm hiện tại đã tốt và link đang sống. Chỉ thiếu 2 nhóm mục tiêu: **kinh doanh** (môi giới BĐS đang nằm trong `07-dich-vu-tu-van-huong-dan`, các nghề bán lẻ nhóm G trong pool chưa có nghề nào được làm) và **thủ công** (thợ may, làm đồ da/gỗ/gốm… trong pool nhóm K chưa được làm; thợ làm bánh đang nằm trong `03-am-thuc-ban-le` là hợp lý). Khi làm nghề mới thuộc 2 nhóm này thì thêm nhóm mới, không dời nghề cũ. |
| `09-hoc-nghe/` (trung tâm, học phí, học việc thực tế) | **Chưa có** | Thiếu. Thông tin học nghề hiện nằm rải rác trong từng nghề (mục 4), không có trang tổng hợp so sánh trung tâm/học phí giữa các nghề. |
| `10-tim-viec/` (tìm việc phổ thông, nơi học việc, tìm khách, tự kinh doanh) | **Chưa có** | Thiếu. Tương tự `09` — nằm rải rác theo nghề, không có trang tổng hợp. |
| `11-cong-cu/` (so sánh nghề, tính vốn, tính lợi nhuận, kế hoạch 90 ngày) | **Chưa có** | Thiếu hoàn toàn. Chỉ có checklist 30 ngày theo từng nghề; không có bảng so sánh 3–5 nghề theo 9 tiêu chí, không có công cụ tính vốn/lợi nhuận, không có kế hoạch 90 ngày. (Bảng so sánh 24 nghề trong `README.md` là bước đầu tốt nhưng chỉ có 4 cột, không có tiêu chí "thời gian có thu nhập", "độ ổn định", "khả năng kinh doanh".) |
| `12-cau-chuyen-thuc-te/` | **Chưa có** | Thiếu. Không có câu chuyện thật nào. Nhân vật "anh ấy" trong truyện TikTok là hư cấu (đã ghi rõ). Cần template phỏng vấn thay vì viết chuyện giả. |
| `13-nguon-du-lieu/` (salary-sources, training-sources, job-sources, legal-sources) | **Chưa có** | Thiếu. Nguồn hiện nằm trong từng file nghiên cứu, không có trang tổng hợp nguồn theo loại. |
| `TEMPLATE-NGHE.md` (12 mục bắt buộc) | Có `_TEMPLATE.md` (8 mục + chi phí khởi điểm) | **Giữ `_TEMPLATE.md`, bổ sung thành 12 mục** thay vì tạo file mới trùng lặp: thêm (9) lộ trình học theo tuần/tháng, (10) thử nghề, (11) kết luận (ưu/nhược, ai nên/không nên thử), (12) nguồn tham khảo tách riêng. Đồng thời sửa cấu trúc thư mục trong template (hiện vẫn vẽ thư mục nghề ở root, không có tiền tố nhóm) và nhóm A–K (hiện vẫn dùng nhóm pool, không khớp 8 nhóm 01–08). |
| `FEEDBACK.md` | **Chưa có** | Thiếu. |
| `AUDIT.md` | **File này** | Đã tạo trong đợt audit 23/11/2026. |
| `CONTRIBUTING.md`, `ROADMAP.md`, `FAQ.md`, Issue template | Đã có | Tốt, nhưng cần sửa các điểm lệch ở mục 4.21 và mục 3 (nhóm A–K vs 01–08). |
| Site VitePress (`.vitepress/config.mts`) | Đã có, build 437 trang, 0 dead link | **Vấn đề UX:** site đang xuất bản cả file nghiên cứu thô + bài đăng mạng xã hội (48 trang `Info/`, 144 trang `fb/`, 191 trang `tiktok/`) vì `srcExclude` chỉ loại trừ `ke-hoach/**`, `nghien-cuu/**`, `_TEMPLATE.md`, `.github/**` — không loại `**/Info/**`, `**/fb/**`, `**/tiktok/**`, `**/youtube/**`. Người đọc trên site sẽ lạc vào trang nghiên cứu thô (ghi "Chưa đếm được", tin tuyển hết hạn) và trang kịch bản TikTok. Cần loại các thư mục này khỏi site, chỉ giữ file tổng + README + FAQ + ROADMAP + CONTRIBUTING. Ngoài ra sidebar trong config phải cập nhật tay mỗi khi thêm nghề — cần ghi vào quy trình. |

---

## 6. Phân loại từng nghề

**Tổng kết: GIỮ: 0 — SỬA: 22 — NGHIÊN CỨU LẠI: 2.** Không nghề nào đạt GIỮ nguyên trạng. 4 nghề gần đạt nhất (sửa nhẹ): tuần 1 điều hòa, tuần 5 quán ăn, tuần 12 vệ sinh, tuần 20 làm tóc nữ, tuần 24 trồng nấm (5 nghề sửa nhẹ — xem chi tiết).

| Tuần | Nghề | Loại | Sửa chính |
|---|---|---|---|
| 1 | Thợ lắp đặt / sửa điều hòa | **SỬA (nhẹ)** | Chốt học phí Thanh Xuân bằng 1 cuộc gọi; sửa "học xong… đi làm được ngay" (Tập 7) và chữ "ví dụ thật" trong `FAQ.md`; bổ sung giá bộ đồ nghề + dự phòng sinh hoạt + thủ tục mở tiệm; kiểm tra hạn 4 tin trước 04/12, thay tin Cần Thơ hết hạn 30/11 |
| 2 | Thợ sửa điện gia dụng | **SỬA** | Tìm nguồn lương thợ phụ còn hạn thay tin JobsGo hết hạn; bổ sung giới hạn tuổi Điện Tử HT (13–25) vào bài đăng; gắn cờ "tin tuyển, chưa kiểm chứng" cho ORRO 16–20tr và SIMIGO 12–18tr; bổ sung vốn đồ nghề/dự phòng + thủ tục mở tiệm; kiểm chứng mốc thời gian học với 1 trường |
| 3 | Thợ khóa | **NGHIÊN CỨU LẠI** (phần thợ khóa cơ) | Bắt buộc: thay 2 tin CETS/Elecom đã hết hạn, hoặc đổi bài thực hành thành "1 việc thật + cách tìm việc ngoài sàn"; nghiên cứu lại thợ khóa cơ (tin tuyển thật qua Facebook/Zalo/tiệm, lương cơ theo job/ngày, 1 khóa học ở Hà Nội); bổ sung rủi ro thể chất + giá máy cắt chìa/đồ nghề + dự phòng; làm rõ mâu thuẫn Demax hết hạn hay chưa; phần khóa điện tử chỉ cần SỬA |
| 4 | Thợ sửa xe máy | **SỬA** | Sửa thời gian Thanh Xuân TP.HCM về 7–9 tháng; sửa câu "học 2–4 tháng" thành "khóa sơ cấp 6 tháng" hoặc ghi rõ ước lượng; nhắc lại caveat "số tổng hợp Việc Làm Tốt, chỉ tham khảo" khi trích số trung bình; bổ sung khóa Đà Nẵng (hỏi Văn Lang thời gian) + vốn đồ nghề/dự phòng + thủ tục mở tiệm; kiểm tra hạn 3 tin trước 25/12 |
| 5 | Chủ quán ăn đường phố | **SỬA (nhẹ)** | Thay toàn bộ 3 tin tuyển đã hết hạn; cập nhật lịch khai giảng Saigontourist; bổ sung đăng ký hộ kinh doanh/thuế + giấy phép vỉa hè |
| 6 | Thợ cắt tóc nam | **SỬA** | Bổ sung vốn (giá bộ đồ nghề + vốn mở tiệm nhỏ, hoặc ghi "Chưa có số liệu"); kiểm tra lại/thay 3 tin tuyển (Việc 3 chỉ tuyển nữ); sửa hook "2–3 tháng đứng ghế" thành "2–3 tháng cầm tông đơ, 6–12 tháng đứng ghế độc lập"; bổ sung pháp lý mở tiệm + rủi ro lây nhiễm/bảo hộ; làm rõ giá Thanks Academy |
| 7 | Chăm sóc người già tại nhà | **SỬA** | Thay Việc 2 hết hạn 31/12/2026; thống nhất bản FB rời với file tổng, xử lý 3 mâu thuẫn (ông tự đi vệ sinh / học phí 4–9tr vs 14tr / "50 ứng viên"); sửa khoảng học phí thành 4–14tr; bổ sung pháp lý lao động (HĐLĐ/BHXH khi thuê trực tiếp, khám sức khỏe/lý lịch, trách nhiệm khi có sự cố y tế) |
| 8 | Cắt tỉa thú cưng | **SỬA (nặng)** | Tìm lại 3 tin tuyển đang mở sát ngày 22/01/2027 (2/3 đã hết hạn từ lúc tra cứu); nếu ĐN/Cần Thơ vẫn 0 tin thì ghi rõ và chuyển hướng dẫn sang kênh Facebook/Zalo/hỏi trực tiếp có tên spa cụ thể; bổ sung vốn mở tiệm có số hoặc ghi "Chưa có số liệu"; bổ sung pháp lý mở spa + trách nhiệm khi thú gặp sự cố; bổ sung học phí 3 trung tâm Đà Nẵng |
| 9 | Gia sư tiếng Anh | **SỬA** | Thay Việc 2 Langmaster hết hạn 20/01/2027, bổ sung hạn nộp cho Việc 1 và Việc 3; sửa hook "không cần vốn"; gỡ mâu thuẫn yêu cầu Langmaster (không KN vs TOEIC ≥ 900); bổ sung rủi ro sức khỏe (giọng, mắt, ngồi lâu) + chi phí thiết bị dạy online + dự phòng tháng Tết |
| 10 | Shipper / giao hàng | **SỬA** | Sửa "10 tin TopCV" thành 8 tin (hoặc tìm đủ 2 tin thiếu); thống nhất GHN 12–15 hay 12–18 triệu; thay link Việc 3 bằng link tin tuyển ShopeeFood cụ thể + bổ sung hạn nộp cho Việc 1, Việc 2; bổ sung chi phí xe/bảo dưỡng theo tháng (hoặc giữ "Chưa có số liệu" và nói rõ trong bài đăng) |
| 11 | Chụp ảnh cưới / sự kiện | **NGHIÊN CỨU LẠI** | Thiếu dữ liệu quyết định: (1) giá thiết bị (máy + ống kính + đèn, mới và cũ) — khoản vốn lớn nhất hiện là "Chưa có số liệu"; (2) không có việc thật nào cho người mới (cả 3 việc đều cần 1–2 năm KN) — cần tìm tin second shooter / trợ lý studio không yêu cầu KN còn hạn; (3) cập nhật học phí TuArt (nguồn ~7 năm) và GPHA (lịch 2025). Sau đó sửa thêm: đồng bộ 2 bản FB thực hành, sửa mốc career path 3–6 tháng, ghi rõ rào cản "Cao đẳng trở lên" |
| 12 | Dịch vụ vệ sinh | **SỬA (nhẹ)** | Thay Việc 3 El Gaucho TP.HCM đã hết hạn 08/02/2027 bằng tin đang mở; tra giá bộ đồ nghề trọn bộ + phí hồ sơ công chứng/LLTP; cập nhật số bTaskee 19tr/tháng (nguồn 02/2026) hoặc ghi rõ tuổi của số; đưa lương tối thiểu vùng 2026 từ file nghiên cứu vào file tổng |
| 13 | Dịch vụ giặt ủi | **SỬA** | Thay 2 việc hết hạn 31/12/2026 bằng tin còn hạn, kiểm tra lại 2 việc còn lại; sửa "ví dụ thật" → "ví dụ minh họa (e-biz.com.vn)"; bổ sung rủi ro sức khỏe (dị ứng hóa chất, hơi nóng) + pháp lý mã 9610 vào bài dài; chốt 1 dải giá máy/chi phí vận hành thay vì để 2 nguồn mâu thuẫn |
| 14 | Môi giới bất động sản | **SỬA** | Xóa hook "chốt 1 căn trong 1 buổi chiều"; sửa dòng tóm tắt 20–70tr → 9,4–150tr (hoặc tách 2 tin); bổ sung vốn (phí đăng tin/quảng cáo/xăng xe + dự phòng 2–3 tháng, chưa có số thì ghi "Chưa có số liệu"); thay tin CEN Land hết hạn; cân nhắc bỏ số 6–40tr hoặc ghi rõ "không dùng được"; thêm 1 dòng an toàn khi dẫn khách xem nhà một mình |
| 15 | Thợ diệt côn trùng | **SỬA** (đường tự mở: nghiên cứu lại) | Viết lại thang lương 3–6 tháng, bỏ 13–15tr khỏi career path hoặc ghi rõ "tin cũ hết hạn"; nghiên cứu lại học phí + lịch VPMA (hotline 036.3738.390 đã có trong file) và vốn tự mở (bình phun, thuốc, xe, đồ bảo hộ); làm rõ khóa BVTV 7tr không phải khóa diệt côn trùng trong Tập 7; bổ sung danh mục đồ bảo hộ + xử trí ngộ độc; kiểm tra lại 3 tin trước 12/03/2027; bổ sung lương ĐN/Cần Thơ hoặc giữ "Chưa có số liệu" |
| 16 | Thợ điện dân dụng | **SỬA** | Sửa career path 6–12 tháng (bỏ chữ "thợ chính", hoặc dời mốc thợ chính về 1,5–3 năm theo Nambin); sửa Tập 7 "học xong làm được ngay" → "học xong làm thợ phụ được"; tách tin Đông Vinh khỏi nhóm "điện nhà ở không KN"; bổ sung giá đồ nghề cơ bản + 1 câu kết luận về chứng chỉ hành nghề (có/không bắt buộc); thay 3 việc TP.HCM bằng tin còn hạn trước 19/03/2027, bổ sung ít nhất 1 việc HN/ĐN còn hạn |
| 17 | Thợ ống nước | **SỬA** | Sửa hook "vài tháng làm ra tiền" → khớp 6–12 tháng; thống nhất timeline career path với 3 nấc; bổ sung an toàn điện + bảo hộ (nghề thực tế là điện+nước); thêm mục thử nghề 1–2 tuần làm phụ trước khi đóng học phí; ghi rõ chứng chỉ sơ cấp có bắt buộc không; sửa câu đếm "8 tin đang mở" → 6 tin |
| 18 | Thợ lắp điện mặt trời mái nhà | **SỬA** | Bổ sung tên công ty cho cả 3 việc thật (tra lại link TopCV) hoặc thay tin khác có tên; xóa/thay 2 tin Cần Thơ đã hết hạn (KBA, Redpower); sửa tổng TopCV 7 → 9 tin; thống nhất timeline career path; thêm mục thử nghề + làm rõ chứng chỉ hành nghề điện có cần không; tìm học phí 1 khóa solar thật (Ninh Thuận hoặc Vũ Phong/Solplanet) |
| 19 | Quay phim cưới / sự kiện | **SỬA** | Nghiên cứu giá thiết bị thật (máy cũ/mới, gimbal, mic, ổ cứng — hỏi cửa hàng, ghi khoảng giá); sửa Tập 7 "học xong cầm máy đi quay phụ được ngay" → thêm điều kiện (cần máy, cần team nhận, showreel); sửa Tập 1 + career path: ghi rõ khoảng 9–16tr không phải cho người mới (chỉ 1 tin nhận <1 năm KN); thống nhất timeline 3–6 vs 6–12 tháng; thêm hướng dẫn thử nghề trước khi mua máy (mượn/thuê máy, quay phụ bằng máy của team); bổ sung bản quyền nhạc + hợp đồng/quyền hình ảnh |
| 20 | Thợ làm tóc nữ | **SỬA (nhẹ)** | Sửa Tập 7 "học xong khóa nào cũng cầm kéo đi làm được ngay" → khớp lộ trình 9–12 tháng/1,5–3 năm; sửa hook "vài tháng làm ra tiền"; hạ Việc 1 SUSI (15–40tr chưa kiểm chứng) xuống cuối hoặc thay bằng tin thợ phụ có lương cứng rõ ràng (Allie); sửa Q&A nam làm tóc nữ — bỏ viện dẫn THE CUT STATION (diễn giải sai tin tuyển); bổ sung pháp lý (chứng chỉ hành nghề/mở salon); thêm mục thử nghề trước khi đóng học phí; thống nhất khoảng lương phụ (5,5–20tr theo tin thật) |
| 21 | Thợ làm bánh | **SỬA** | Chốt số thợ chính Hà Nội 10–15tr hay 13–20tr, sửa đồng nhất cả 3 chỗ; bổ sung ATTP + đăng ký kinh doanh khi mở tiệm/bán; vốn 100–300tr: lấy báo giá thật 1–2 hạng mục (lò, máy trộn) hoặc giữ nhãn "chưa kiểm chứng"; thay cả 3 tin tuyển trước ngày đăng |
| 22 | Giáo viên dạy lái xe | **SỬA** | Sửa "vừa tuyển 165 người" → "từng tuyển 165 người một đợt (11/2026)"; sửa "30 ngày xong là đứng lớp được" → "xong là xin được làm tập sự"; bổ sung ngày cho số linhna/hocngheoto hoặc hạ xuống mức tham khảo; bổ sung vốn mang xe riêng + tổng chi phí DAT; thay 3 tin tuyển trước 30/04/2027; kiểm chứng "tập sự không yêu cầu kinh nghiệm" ở Thủ Đức |
| 23 | Hướng dẫn viên du lịch | **SỬA** | Sửa hook "học 1 tháng là đi làm" → 2–3 tháng đến lúc cầm thẻ; sửa checklist tuần 3–4 + TikTok Tập 4 (không dẫn tour chính ngày 30 khi chưa có thẻ); thay lớp K57 (khai giảng 07/12/2026, đã học xong trước ngày đăng) bằng khóa mới; thống nhất khoảng lương HDV mới 5–8tr vs 7–10tr; bổ sung chi phí/thời gian học ngoại ngữ; kiểm tra lại 3 tin tuyển trước 07/05/2027 |
| 24 | Người trồng nấm | **SỬA (nhỏ)** | Sửa payoff reel "làm ra tiền ngay" (mâu thuẫn nội bộ với "tháng đầu chưa có đồng nào"); kiểm chứng hoặc bỏ con số "chợ Bình Hương 70–80kg/ngày"; thêm 1 dòng ATTP/đăng ký hộ kinh doanh khi bán nấm thường xuyên |

---

## 7. Đề xuất ưu tiên thực hiện (Phase 2 → Phase 6)

**Phase 2 — Foundation (làm ngay, trước khi đăng tuần 1 ngày 30/11/2026):**
1. Viết lại 3 câu trả lời trong `FAQ.md` đi ngược định vị (mục 3a) + thống nhất thông điệp thành 1 câu duy nhất ("…mà là cơ hội bắt đầu một nghề mới") trong `README.md`, `.vitepress/config.mts`, `FAQ.md`.
2. Sửa các câu hook viết quá tay có hệ thống: rà toàn bộ 24 tuần, sửa "học xong… đi làm được ngay" (Tập 7), "học vài tháng là làm ra tiền", và xóa hook "chốt 1 căn trong 1 buổi chiều" (tuần 14) — đối chiếu với thang thời gian đã có nguồn trong chính file đó.
3. Đồng bộ bảng lương `FAQ.md` và `README.md` (6 nghề mâu thuẫn ở mục 3b) — chốt 1 số duy nhất cho mỗi nghề.
4. Tạo `START-HERE.md` (hành trình 10 bước) và bổ sung `_TEMPLATE.md` thành 12 mục (thêm lộ trình học theo tuần/tháng, thử nghề, kết luận, nguồn tham khảo) + sửa cấu trúc thư mục và nhóm A–K trong template/`CONTRIBUTING.md` cho khớp 8 nhóm 01–08 hiện tại.
5. Sửa `ROADMAP.md` (cột "Thư mục" thêm tiền tố nhóm cho 24 dòng) và ví dụ đường dẫn trong `.github/ISSUE_TEMPLATE/bao-thong-tin-sai.md`.
6. Sửa VitePress `srcExclude`: loại `**/Info/**`, `**/fb/**`, `**/tiktok/**`, `**/youtube/**` khỏi site — chỉ giữ file tổng + trang gốc.

**Phase 3 — Pilot (3 nghề mẫu: điều hòa tuần 1, cắt tóc nam tuần 6, quán ăn tuần 5):**
7. Hoàn thiện 3 nghề mẫu theo chuẩn mới: bổ sung mục "Chi phí khởi điểm chi tiết" (đầu tiên trong repo), mục thử nghề có cấu trúc, mục pháp lý đầy đủ; kiểm chứng toàn bộ tin tuyển trước ngày đăng; chốt học phí Thanh Xuân bằng 1 cuộc gọi.
8. Sau khi 3 nghề mẫu đạt chuẩn, đóng băng chuẩn viết (template 12 mục + checklist duyệt bài) rồi mới nhân rộng.

**Phase 4 — Expansion (chuẩn hóa 24 nghề, rồi mới tới 100):**
9. Sửa 22 nghề loại SỬA theo bảng mục 6 (mỗi nghề 1 PR, sửa cả file nghiên cứu + file tổng + bài FB rời — chốt 1 nguồn duy nhất, tránh lệch bản như tuần 7, 11).
10. Nghiên cứu lại 2 nghề: thợ khóa (phần cơ) và chụp ảnh cưới (giá thiết bị + việc cho người mới + học phí cũ).
11. Quy trình tra lại tin tuyển sát ngày đăng cho từng tuần (tin tra 23/11/2026 sẽ hết hạn; đặc biệt các tin có hạn 31/12/2026 và các tin không ghi hạn) + đếm thủ công Facebook/Google Maps/TikTok theo hướng dẫn đã có trong file (hiện 0/24 nghề đã đếm).
12. Mới làm nghề dự trữ sau khi 24 nghề đạt chuẩn — không chạy theo số lượng. Nhóm G (bán lẻ) chưa có nghề nào; nhóm kinh doanh và thủ công chưa có thư mục riêng (xem mục 5).

**Phase 5 — Tools:**
13. Tạo `11-cong-cu/` (hoặc mục trong repo): bảng so sánh 3–5 nghề theo 9 tiêu chí (không tự tạo điểm số khi không có dữ liệu), công cụ tính vốn, công cụ tính lợi nhuận (phân biệt doanh thu/giá vốn/chi phí cố định/biến đổi/lợi nhuận/dòng tiền), kế hoạch 90 ngày (ngày 1–7 tìm hiểu, 8–30 thử/học, 31–60 thực hành, 61–90 bắt đầu làm/thử kinh doanh nhỏ — không đảm bảo có việc/lợi nhuận sau 90 ngày).
14. Tạo `09-hoc-nghe/` (tổng hợp trung tâm/học phí), `10-tim-viec/` (tổng hợp kênh tìm việc/học việc/tìm khách), `13-nguon-du-lieu/` (nguồn lương/học phí/tin tuyển/pháp lý), `12-cau-chuyen-thuc-te/` (template phỏng vấn — không viết chuyện giả), `FEEDBACK.md` (khảo sát ngắn, không yêu cầu thông tin cá nhân nhạy cảm).

**Phase 6 — Quality Assurance:**
15. Kiểm tra lại toàn bộ link nội bộ sau mọi lần dời file; kiểm tra chính tả/định dạng; kiểm tra không còn nội dung hướng dẫn quay lại IT; kiểm tra pháp lý các nghề điện/điện lạnh/vận tải/chăm sóc người già/thực phẩm/làm đẹp (đặc biệt các nghề mục 3h còn thiếu).
16. Đặt KPI theo giá trị (người đọc chọn được nghề, biết vốn, tìm được nơi học, tìm được việc/khách đầu tiên, có thu nhập, quay lại chia sẻ sau 3–6 tháng) — không lấy số bài viết làm KPI chính.

---

## 8. Những gì chưa thể xác minh trong lần audit này

1. **Hạn nộp của phần lớn tin tuyển:** nhiều tin trong file nghiên cứu không ghi hạn nộp — không xác minh được tin nào còn mở vào ngày đăng từng tuần (12/2026–05/2027) nếu không mở lại từng link. Audit chỉ đếm được các tin có hạn ghi rõ (vd: 31/12/2026, 20/01/2027, 08/02/2027, 28/02/2027) và các tin đã ghi "Hết hạn" ngay lúc tra cứu.
2. **Học phí chưa có số công khai:** các nghề ghi "Chưa có số liệu" về học phí (ống nước, solar, khóa học Hà Nội của thợ khóa) chưa được kiểm chứng bằng cách gọi hỏi trung tâm — audit chỉ xác nhận file đã ghi đúng là chưa có số công khai.
3. **Số liệu 4 thành phố (Hà Nội / TP.HCM / Đà Nẵng / Cần Thơ):** audit xác nhận các con số trong file có ghi nguồn + ngày đếm 23/11/2026, nhưng không đếm lại độc lập số tin trên TopCV/VietnamWorks (các file tự ghi đây là "số tin tìm thấy", không phải tổng toàn sàn).
4. **Nhu cầu Facebook / Google Maps / TikTok:** 0/24 nghề đã đếm — audit không thể xác minh nhu cầu thực tế trên 3 kênh này; chỉ xác nhận file đã ghi rõ là chưa đếm và có hướng dẫn đếm thủ công.
5. **Hiệu lực văn bản pháp luật:** các nghị định/luật được trích (NĐ 15/2018, NĐ 44/2016, NĐ 91/2016, NĐ 94/2026, NĐ 58/2025, NĐ 243/2026, NĐ 282/2025, Luật KDBĐS 2023, NĐ 339/2026, Thông tư 43/2024) chưa được đối chiếu với văn bản gốc trên Cổng thông tin Chính phủ — audit chỉ kiểm tra tính nhất quán nội bộ và ghi nhận có trích dẫn.
6. **Trang GitHub Pages:** site VitePress chưa được mở kiểm tra bằng trình duyệt trong lần audit này (chỉ kiểm tra config và build output `docs/` trên local) — chưa xác minh trang chủ + 1 trang tuần hiển thị đúng trên trình duyệt thật.
7. **Trạng thái GitHub Discussions:** `README.md` ghi "mục Discussions sẽ được bật — hiện repo chưa bật" — audit không kiểm tra được trên GitHub (không mở trình duyệt), chỉ ghi nhận theo nội dung file.
8. **Tổng số tin tuyển hết hạn toàn repo:** audit chưa đếm tổng số tin hết hạn trong cả 24 tuần (mỗi tuần 3–4 tin) — chỉ đếm được các ví dụ cụ thể nêu ở mục 3b và mục 6. Cần một đợt rà soát link toàn repo trước mỗi tuần đăng.

---

## Phụ lục QA — 23/11/2026 (Phase 6: Quality Assurance)

**Ngày QA:** 23/11/2026. **Phạm vi:** toàn bộ repo sau Phase 1–5 (root + 8 nhóm nghề 01–08 + `11-cong-cu/` + `13-nguon-du-lieu/` + `.github/` + `.vitepress/config.mts`); loại trừ `node_modules/`, `docs/` (build output tự sinh), `ke-hoach/`, `nghien-cuu/` (nội bộ, không đẩy). Chỉ sửa lỗi nhỏ; không sửa nội dung lớn; không nhắc tới tên trợ lý AI trong bất kỳ file nào (kiểm chứng bằng grep tên trợ lý trên toàn bộ file sẽ đẩy = **0**).

### Bảng kết quả 6 nhóm kiểm tra

| Nhóm | Kết quả |
|---|---|
| 1. Link | Quét **475 file .md**, kiểm tra **384 link .md tương đối** (gồm cả anchor theo slug GitHub) + **46 link nav/sidebar** trong `.vitepress/config.mts`. Tìm được **36 link hỏng** — toàn bộ là anchor trong mục lục 9 file tổng (slug đúng có 3 gạch `---`, TOC ghi 2 gạch `--`) — đã sửa cả 36. Quét lại: **0 link hỏng**. Build VitePress local (`npm run docs:build`, v1.6.4): **thành công, 0 dead link, 43 trang HTML** (24 trang tuần + 1 FAQ tuần 1 + 5 công cụ + 4 nguồn dữ liệu + 7 trang gốc + 404 + index). |
| 2. Nguồn & nhất quán | Lương 6 nghề (chăm sóc người già, làm bánh, điện mặt trời, dạy lái xe, môi giới, cắt tóc nam): **6/6 đã khớp** giữa README ↔ FAQ ↔ file nghiên cứu (Phase 2 đã đồng bộ xong, không còn lệch để sửa). Số ví dụ trong `11-cong-cu/` (điều hòa 20.438.000đ, cắt tóc 4,8–12,7tr, quán ăn, giặt ủi 80–200tr, nấm 15–40tr/tháng): **đều khớp** file nghiên cứu, không sửa. **19/24** file tổng có đủ 12 tiêu đề mục (5 file thiếu 1 heading: tuần 3, 8, 10, 11 thiếu heading "8. Rủi ro thật"; tuần 6 thiếu danh sách "12. Nguồn tham khảo" riêng — nội dung rủi ro/nguồn vẫn có trong bài FB dài, chỉ thiếu heading). Tổng **"Chưa có số liệu" trong 24 file nghiên cứu: 530 lần / 415 dòng** (nhiều nhất tuần 15 diệt côn trùng: 35 lần; ít nhất tuần 24 trồng nấm: 8 lần). Chữ "8 mục" còn **233 lần** ngoài AUDIT (không sửa — xem mục còn lại). |
| 3. Định vị | Grep "quay lại IT / tìm việc IT / live code / ở lại IT / làm dev": **0 lời khuyên quay lại IT còn sót** (3 câu FAQ vi phạm ở AUDIT mục 3a đã được sửa ở Phase 2; chỉ sửa thêm 4 chữ làm rõ trong FAQ dòng 49: "nộp đơn" → "nộp đơn xin việc nghề mới"). Thông điệp đã thống nhất 1 câu "Bị layoff không phải hết nghề — mà là cơ hội bắt đầu một nghề mới." ở README, START-HERE, config.mts, _TEMPLATE (xuất hiện 26 lần toàn repo; câu cũ "mà là hết 1 công việc" chỉ còn trong AUDIT làm bằng chứng). Ngoại lệ không sửa: trích dẫn lỗi trong AUDIT + CV mẫu "Trước" (47 lần, đã gắn nhãn "không dùng được"). |
| 4. Pháp lý | Kiểm chứng bằng tìm kiếm công khai **21 văn bản** (14 theo nhiệm vụ + 7 liên quan). **14 xác minh được** (một số có lệch nhỏ, xem bảng dưới). **7 lệch cần xử lý trước khi đăng** (không tự sửa nội dung pháp lý theo suy đoán — liệt kê ở bảng dưới). |
| 5. Chính tả & định dạng | Quét 41 file (8 file gốc + 13-nguon-du-lieu + 11-cong-cu + 24 file tổng, 19.896 dòng): chỉ **1 lỗi duy nhất, đã sửa** — tuần 9 đếm trùng 2 clip TikTok, "17 bài" → "15 bài" (3 vị trí trong file). Bảng, tiêu đề, link cú pháp, ký tự UTF-8: sạch. Các lỗi nghi ngờ khác (vd: `salary-sources.md` "Đã dùng ở: 14 nghề" liệt kê 15 tên; `training-sources.md` 18+9=27 ≠ 25) không sửa vì cần đối chiếu nguồn — ghi ở mục còn lại. |
| 6. Hoàn thiện AUDIT | Phụ lục này. Đồng thời đính chính 3 điểm trong AUDIT gốc (xem "Đính chính AUDIT" dưới). |

### Bảng kiểm chứng pháp lý (ngày 23/11/2026 — nguồn: thuvienphapluat.vn, luatvietnam.vn, Công báo Chính phủ, chinhphu.vn, báo chính thống)

| Văn bản như repo ghi | Kết quả | Ghi chú |
|---|---|---|
| NĐ 168/2025 (ĐKKD hộ kinh doanh; Điều 99, nộp cấp xã, 03 ngày) | Xác minh được | Ban hành 30/6/2025, hiệu lực 01/7/2025, thay NĐ 01/2021. Sửa bởi NĐ 296/2026. |
| NQ 198/2025 (bỏ thuế khoán; ≤1 tỷ không nộp GTGT/TNCN) | Xác minh được một phần — **sai căn cứ ngưỡng 1 tỷ** | Bỏ thuế khoán + bỏ lệ phí môn bài từ 01/01/2026 là đúng. Ngưỡng 1 tỷ KHÔNG nằm trong NQ 198 mà do **NĐ 141/2026** (sửa NĐ 68/2026). Tuần 1, 5 ghi ngưỡng này "theo NQ 198" là sai căn cứ. |
| NĐ 44/2016 (an toàn điện; nhóm 3: 24 giờ, Thẻ 2 năm; nhóm 4: 16 giờ) | Xác minh được | Điều 19 khớp repo. Đã sửa bởi NĐ 140/2018 (repo không nhắc, không ảnh hưởng số giờ). |
| NĐ 339/2026 (phạt BĐS; Điều 73 phạt 40–60tr) | Xác minh được | Ban hành 26/8/2026, hiệu lực 26/8/2026, thay NĐ 16/2022. Số hiệu có thật. |
| Điều 61 Luật KDBĐS 2023 | Xác minh được | Khoản 2 đúng 2 điều kiện; hiệu lực 01/8/2024 cho Điều 61. Điều 65 chưa kiểm chứng riêng. |
| NĐ 15/2018 (Điều 12: thức ăn đường phố không thuộc diện cấp giấy ATTP) | Xác minh được | Điểm i khoản 1 Điều 12 khớp; khoản 2 vẫn phải tuân thủ điều kiện ATTP. |
| NĐ 91/2016 (chế phẩm diệt côn trùng; Điều 5) | Xác minh được, có lưu ý phạm vi | Điều 43 (công bố với Sở Y tế) + Điều 5 (người chuyên trách an toàn hóa chất trung cấp hóa học trở lên) khớp từng chữ — nhưng Điều 5 áp dụng cho cơ sở **sản xuất**, cơ sở **dịch vụ** là Điều 42–43; repo liệt kê chung cần làm rõ. Đã sửa bởi NĐ 129/2024. |
| NĐ 282/2025 (flycam; hiệu lực 15/12/2025; "phạt đến 40tr nếu bay không phép") | Xác minh được, **nội dung phạt ghi chưa chính xác** | Số hiệu + ngày hiệu lực khớp. Bay không phép phạt **20–30tr**; 30–40tr chỉ khi gây mất an toàn bay. Miễn phép: <250g + bay thấp <50m + trong tầm mắt + ngoài vùng cấm — repo thiếu điều kiện "<50m". |
| NĐ 58/2025 (điện mặt trời mái nhà; bán dư ≤20%) | Xác minh được | Ban hành 03/3/2025, thay NĐ 135/2024. Điều 14 khớp repo. |
| NĐ 243/2026 (sửa NĐ 58; bán dư ≤50%) | Xác minh được | Ban hành 26/6/2026; trần 50% sản lượng phát tại đầu ra. |
| NĐ 293/2025 (lương tối thiểu vùng 2026: I 5.310.000 / II 4.730.000 / III 4.140.000 / IV 3.700.000đ) | Xác minh được | Ban hành 10/11/2025, hiệu lực 01/01/2026, thay NĐ 74/2024. Khớp từng con số. |
| TT 40/2021 (Điều 4: hộ ≤100tr/năm không nộp GTGT/TNCN) | Xác minh được văn bản gốc, **nội dung đã lỗi thời cho 2026** | Ngưỡng 100tr đúng theo TT 40; nhưng từ 01/01/2026 Luật Thuế GTGT 2024 nâng lên 200tr, NĐ 141/2026 nâng tiếp lên 1 tỷ. Tuần 6 trình bày 100tr như quy định hiện hành là lỗi thời; tuần 5 dùng 1 tỷ là đúng hướng mới. |
| NĐ 139/2016 (lệ phí môn bài: 1tr / 500k / 300k) | Xác minh được văn bản gốc, **đã bị bãi bỏ từ 01/01/2026** | Các bậc khớp; nhưng khoản 7 Điều 10 NQ 198/2025 chấm dứt thu môn bài với hộ kinh doanh từ 01/01/2026 — tuần 6 vẫn liệt kê như nghĩa vụ hiện hành là sai thời điểm; tuần 5 đã ghi đúng (mâu thuẫn nội bộ). |
| NĐ 01/2021 (đăng ký doanh nghiệp) | Xác minh được (đã hết hiệu lực) | Bị thay thế bởi NĐ 168/2025 từ 01/7/2025. Tuần 6 vẫn viện NĐ 01/2021 + nộp "cấp huyện" — thẩm quyền nay là **cấp xã**; các tuần 1–4 ghi đúng cấp xã. |
| QĐ 27/2018 (mã ngành; cắt tóc 9631, giặt ủi 9610) | Xác minh được một phần — **có 2 lỗi** | QĐ 27 đúng là ban hành 06/7/2018 — nhưng **đã hết hiệu lực 15/11/2025** (QĐ 36/2025 thay thế). Theo QĐ 27, 9610 là "tắm hơi, massage", giặt là là **9620** — repo ghi "9610 (giặt là)" là sai nếu viện QĐ 27. Theo QĐ 36/2025: giặt là 9610, làm tóc **9621**. Tuần 6 + tuần 13 + `legal-sources.md` §8.3 cần sửa theo QĐ 36/2025. |
| NĐ 94/2026 (dạy lái xe; hiệu lực 01/7/2026; "bằng B đủ 3 năm mới được dạy") | Xác minh được văn bản, **không xác minh được yêu cầu 3 năm — có nguồn mâu thuẫn** | NĐ 94 ban hành 31/3/2026, hiệu lực 01/7/2026, thay NĐ 160/2024 — khớp. Điều 10 (trung cấp + GPLX hạng tương ứng + chứng chỉ sư phạm + tập huấn) khớp. Nhưng Tuổi Trẻ 01/4/2026 viết "số thời gian có GPLX tối thiểu cũng bãi bỏ… có thể trở thành giáo viên dạy thực hành ngay" — trái với khẳng định "bằng B đủ 3 năm" trong repo/AUDIT. Cần đối chiếu văn bản gốc NĐ 94 trước khi giữ hay sửa. |
| NĐ 96/2024 + TT 04/2024 (chứng chỉ môi giới: thi 2 phần ≥70/100, 5 năm; khóa 74 tiết) | Xác minh được | Điều 25/27/31 + chương trình 74 tiết khớp repo. NĐ 96 đã sửa bởi NĐ 54/2026 (repo không nhắc). |
| NĐ 253/2026 (thuế TNCN; khấu trừ 10% từ 5tr/lần không HĐLĐ) | Xác minh được | Khoản 2 Điều 50 khớp (repo ghi "5 triệu/khóa", văn bản gốc "/lần"). Hiệu lực 01/7/2026. |
| TT 43/2024 (lệ phí thẻ HDV 650.000đ) | Xác minh được mức phí, **sai căn cứ văn bản** | Mức 650.000đ/thẻ đúng, nhưng căn cứ gốc là **khoản 2 Điều 4 TT 33/2018/TT-BTC**, không phải TT 43/2024 (chỉ giảm 50% còn 325.000đ trong 01/7–31/12/2024). |
| Luật Điện lực 61/2024/QH15 | Xác minh được (chỉ tên + hiệu lực) | Thông qua 30/11/2024, hiệu lực 01/02/2025. Repo chưa trích điều — đúng như repo tự nhận. |
| NĐ 296/2026 (sửa NĐ 168/2025) | Xác minh được | Ban hành 23/7/2026, hiệu lực 23/7/2026. |

**Chưa kiểm chứng được:** Điều 65 Luật KDBĐS 2023; các điều cụ thể của Luật Du lịch (thời hạn thẻ HDV 5 năm, điều kiện cấp thẻ); toàn văn NĐ 135/2024 và NĐ 160/2024 (chỉ xác minh gián tiếp là đã bị thay thế); lệ phí đăng ký hộ kinh doanh "0đ trực tuyến / 100.000đ trực tiếp" (viện TT 85/2019, chưa đối chiếu); hiệu lực của các văn bản trên văn bản gốc `vanban.chinhphu.vn` (đợt này dùng toàn văn trên Thư viện Pháp luật / Luật Việt Nam / Công báo và báo chính thống).

### Đính chính AUDIT (phát hiện trong Phase 6)

1. **Mục 1 — số "Chưa có số liệu" sai:** AUDIT ghi "tổng 58 lần" và "2 file có 0 lần (tuần 1 điều hòa, tuần 7 chăm sóc người già)". Đếm lại chính xác ngày 23/11/2026: **530 lần / 415 dòng** trong 24 file nghiên cứu; tuần 1 có 20 lần, tuần 7 có 19 lần (ít nhất tuần 24: 8 lần; nhiều nhất tuần 15: 35 lần). Con số 58 trong AUDIT là sai, dùng 530 lần làm số đúng.
2. **Mục 1 — "24/24 nghề có đủ 8 mục" nay đo theo chuẩn mới 12 mục: 19/24** file tổng có đủ 12 tiêu đề mục (xem bảng nhóm 2). Nội dung 12 mục thì 24/24 đều có (5 file thiếu chỉ là thiếu heading, không thiếu nội dung).
3. **Mục 2.5 — khen pháp lý tuần 22 cần rút lại một phần:** AUDIT khen tuần 22 dựa trên rào cản "bằng B đủ 3 năm mới được dạy" — điểm này hiện chưa xác minh được và có nguồn mâu thuẫn (Tuổi Trẻ 01/4/2026). Cần đối chiếu văn bản gốc NĐ 94/2026 trước khi giữ.
4. **Mục 5 — nhiều dòng "Chưa có" đã được làm ở Phase 2–5** (START-HERE, `11-cong-cu/`, `13-nguon-du-lieu/`, `FEEDBACK.md`, template 12 mục, thông điệp thống nhất, 3 câu FAQ vi phạm đã sửa). AUDIT giữ nguyên làm snapshot ngày 23/11/2026 — không sửa ngược tài liệu audit lịch sử, chỉ ghi nhận ở đây.

### Vấn đề CÒN LẠI chưa sửa được (kèm lý do)

**A. Pháp lý — 7 lệch cần xử lý trước khi đăng (không tự sửa theo suy đoán) — ✅ ĐÃ SỬA HẾT ngày 24/11/2026 (xem mục "Đã sửa 7 lỗi pháp lý — 24/11/2026" cuối phụ lục):**
1. Mã ngành 9610/9631 theo QĐ 27 đã hết hiệu lực — sửa theo QĐ 36/2025 (giặt là 9610, làm tóc 9621); ảnh hưởng `legal-sources.md` §8.3, tuần 6, tuần 13.
2. "Bằng B đủ 3 năm mới được dạy" — đối chiếu văn bản gốc NĐ 94/2026 (có nguồn mâu thuẫn).
3. Thuế hộ kinh doanh 2026 lỗi thời ở tuần 6 (TT 40 ngưỡng 100tr + NĐ 139 môn bài) — đồng bộ theo tuần 5 (ngưỡng 1 tỷ theo NĐ 141/2026; môn bài đã bỏ).
4. Tuần 6 viện NĐ 01/2021 + nộp cấp huyện — sửa theo NĐ 168/2025 (nộp cấp xã).
5. Flycam "phạt đến 40tr nếu bay không phép" — sửa thành 20–30tr cho bay không phép; bổ sung điều kiện miễn phép <50m.
6. Ngưỡng 1 tỷ ghi "theo NQ 198" (tuần 1, 5) — sửa căn cứ thành NĐ 141/2026.
7. Lệ phí thẻ HDV 650.000đ viện TT 43/2024 — sửa căn cứ thành TT 33/2018; làm rõ Điều 5 NĐ 91/2016 chỉ áp dụng cho cơ sở sản xuất.

**B. Nội dung — cần quyết định, không phải lỗi chính tả:**
8. Chữ "8 mục" còn 233 lần ngoài AUDIT (141 trong file tổng, 42 trong script YouTube, 40 trong bài FB, 7 trong reel, 3 trong README/FAQ có chú thích) — không sửa hàng loạt vì các kịch bản đăng bài đang mô tả đúng bài đăng 8 phần như hiện viết; sửa thật cần viết lại 21 bài FB dài + script YouTube thành 12 phần (nhiệm vụ nội dung Phase 3/4).
9. Cấu trúc heading 12 mục chưa thống nhất — chỉ tuần 16 có bài FB dài với 8 heading đánh số; 5 file thiếu heading (tuần 3, 6, 8, 10, 11). Cần chuẩn hóa heading ở lần làm tiếp theo.
10. Mâu thuẫn nội bộ file nghiên cứu cần người quyết chọn 1 số: dạy lái xe 3–5 năm 15–25tr (Vieclam24h) vs kết luận 18–25tr; môi giới Đà Nẵng 8–15tr (kết luận) vs 6–15tr (bảng chi tiết).
11. Payoff reel "Bị layoff không có nghĩa là hết nghề." (23 lần, 15 file) là biến thể ngắn của câu chốt — cần quyết chuẩn hóa về câu chốt hay giữ làm CTA riêng cho reel. Video mp4 tuần 1 đã render vẫn chứa payoff cũ — Ngoc chưa quyết render lại hay giữ.
12. Tuần 3 (thợ khóa) vẫn trình bày khóa điện tử/smartkey là đường vào nhanh nhất — đã tự cân bằng bằng câu "nghề chính là thợ khóa cơ + điện tử", cần Ngoc/cân nhắc nhóm nội dung.
13. README dòng 50 nói cột "Thu nhập dự kiến" là mức người mới đi làm thuê nhưng các dòng liệt kê nhiều nấc — cần chuẩn hóa mô tả cột.
14. `salary-sources.md` mục 1.3 "Đã dùng ở: 14 nghề" nhưng liệt kê 15 tên; mục 3.3 ghi số "chợ Bình Hương 70–80kg/ngày" là không truy được nguồn — mâu thuẫn với đính chính trong AUDIT (vietnamnet 25/10/2026 ghi đúng câu đó). Cần đối chiếu 24 file nghiên cứu. ✅ ĐÃ SỬA ngày 24/11/2026 (14 → 15 nghề, đã đối chiếu 15/15 file; Bình Hương sửa theo đính chính vietnamnet 25/10/2026).

**C. Dữ liệu cần làm lại sát ngày đăng (không sửa được trong Phase 6):**
15. Tin tuyển tra 23/11/2026 sẽ hết hạn trước ngày đăng 12/2026–05/2027 — phải tra lại + thay tin trước mỗi tuần đăng (AUDIT mục 3b). Đặc biệt các tin có hạn 31/12/2026 và tin không ghi hạn.
16. Nhu cầu Facebook / Google Maps / TikTok: 0/24 nghề đã đếm — cần đếm thủ công trước ngày đăng theo hướng dẫn trong file.
17. Học phí Thanh Xuân (tuần 1) chưa chốt: 10tr vs 14,9tr/19,9tr/12,5tr/9,5tr — cần Ngoc gọi hỏi trung tâm.
18. Học phí các nghề chưa có số công khai (ống nước, solar, khóa học Hà Nội của thợ khóa) — cần gọi hỏi trung tâm, không bịa.

**D. Kỹ thuật site:**
19. Anchor mục lục trong file tổng đúng chuẩn GitHub nhưng không khớp id heading VitePress sinh ra (VitePress bỏ dấu, gộp gạch, thêm tiền tố `_` cho số đầu) — bấm mục lục trên site sẽ không nhảy đúng mục ở cả 24 file tuần. Sửa cần gắn `{#id}` tường minh cho từng heading hoặc đổi anchor sang kiểu VitePress (sẽ hỏng trên GitHub) — cần Ngoc quyết.
20. Vấn đề site ở AUDIT mục 5 (site xuất bản cả file nghiên cứu thô + bài đăng mạng xã hội, 437 trang) **đã được sửa ở Phase 5**: `srcExclude` trong `.vitepress/config.mts` nay loại `**/Info/**`, `**/fb/**`, `**/tiktok/**`, `**/youtube/**` (đã kiểm chứng trực tiếp trong config); build Phase 6 chỉ còn **43 trang HTML**, 0 trang nào từ `Info/`/`fb/`/`tiktok/`. Không còn việc gì ở mục này.

### Đã sửa 7 lỗi pháp lý — 24/11/2026

Cả 7 lỗi ở mục A và mục 14 ở trên đã được sửa trong repo (local, đối chiếu văn bản gốc ngày 24/11/2026, chưa đẩy GitHub). Tóm tắt:

| # | Trước | Sau (văn bản đúng) | Nguồn kiểm chứng |
|---|---|---|---|
| 1 | Mã ngành viện QĐ 27/2018 (cắt tóc 9631; giặt là 9610) | Cắt tóc **9621** (QĐ 36/2025/QĐ-TTg, Phụ lục I, hiệu lực 15/11/2025, thay QĐ 27/2018); giặt là 9610 đã đúng theo QĐ 36/2025 (theo QĐ 27 cũ giặt là là 9620) — chỉ gắn thẻ cập nhật. Vệ sinh: không file nào ghi mã ngành (mã đúng 8121/8129). Sửa ở tuần 5, 6, 13 + `legal-sources.md` §8.3 + `so-sanh-nghe.md`. | Văn bản QĐ 36/2025 trên gialai.gov.vn, thuvienphapluat.vn, linhvuc.com |
| 2 | "Bằng B đủ 3 năm mới được dạy lái xe" | **Yêu cầu đã bị bãi bỏ.** Điều 10 NĐ 94/2026/NĐ-CP (hiệu lực 01/7/2026, thay NĐ 160/2024): chỉ cần bằng trung cấp trở lên + GPLX hạng tương ứng trở lên + chứng chỉ sư phạm + tập huấn; không yêu cầu thời gian có GPLX tối thiểu. Lộ trình người chưa có bằng: 20–24tr + khoảng 5 tháng (không còn 3 năm chờ). Sửa 14 file tuần 22 + README/FAQ. | Toàn văn NĐ 94/2026 Điều 10 (thuvienphapluat.vn); Tuổi Trẻ 12/4/2026; VOV |
| 3 | Thuế tuần 6: TT 40 ngưỡng 100tr + môn bài NĐ 139/2016 như nghĩa vụ hiện hành | Từ 01/01/2026 đã bỏ thuế khoán và lệ phí môn bài (NQ 198/2025 Điều 10); NĐ 139/2016 bị bãi bỏ từ 01/01/2026 (NĐ 362/2025/NĐ-CP); ≤1 tỷ/năm không chịu GTGT, không nộp TNCN (NĐ 141/2026); tự kê khai; dịch vụ cắt tóc tham khảo GTGT 5% + TNCN 2% (Phụ lục I TT 40/2021). Sửa 4 file tuần 6 + đồng bộ. | thuvienphapluat.vn (NQ 198, NĐ 362/2025, NĐ 141/2026, TT 40/2021); VOV |
| 4 | Viện NĐ 01/2021 + đăng ký hộ kinh doanh "cấp huyện" | **NĐ 168/2025/NĐ-CP** (hiệu lực 01/7/2025, thay NĐ 01/2021), Điều 20 + Điều 99: đăng ký tại cơ quan đăng ký kinh doanh **cấp xã**, hồ sơ chỉ Giấy đề nghị (+ ủy quyền nếu hộ gia đình cùng lập), 03 ngày làm việc. Sửa tuần 5, 6 + `so-sanh-nghe.md`. | pbgdpl.camau.gov.vn, luatdogiaviet.vn, unilaw.vn |
| 5 | Flycam "phạt đến 40tr nếu bay không phép" | Bay không phép phạt **20–30tr** (khoản 10 Điều 8 NĐ 282/2025/NĐ-CP, hiệu lực 15/12/2025); 30–40tr chỉ khi cản trở/gây mất an toàn cho phương tiện bay khác (khoản 11 Điều 8). Miễn phép: <0,25 kg + vui chơi giải trí + trong tầm mắt + ngoài vùng cấm/hạn chế (Luật Phòng không nhân dân khoản 3 Điều 30; NĐ 288/2025 điểm b khoản 1 Điều 21). Điều kiện "<50m" **không xác minh được** trong văn bản gốc → ghi "Chưa có số liệu — cần đối chiếu văn bản gốc" (mục 5 trong phụ lục QA này ghi <50m là chưa được xác nhận). Sửa 7 file tuần 19 + `legal-sources.md` §7.1. Tuần 23 không nhắc flycam. | Công an tỉnh Quảng Ninh, Công an tỉnh Lâm Đồng (trích khoản 10–11 Điều 8 NĐ 282/2025); thuvienphapluat.vn (NĐ 288/2025); VnExpress |
| 6 | Ngưỡng 1 tỷ "theo NQ 198/2025" | Căn cứ đúng **NĐ 141/2026/NĐ-CP** (sửa NĐ 68/2026, hiệu lực từ 01/01/2026): doanh thu ≤1 tỷ/năm không chịu GTGT, không nộp TNCN. NQ 198/2025 chỉ giữ cho nội dung nó quy định (bỏ thuế khoán, bỏ lệ phí môn bài). Sửa 7 file nghiên cứu (tuần 1, 2, 3, 4, 15, 16, 17) + 8 file tổng/FB + `so-sanh-nghe.md`. Phát hiện thêm trong cùng cụm: ngưỡng "200 triệu" sai ở 4 file (tuần 21, 11, 19, 24) và "mức thuế khoán: Chưa có số liệu" ở tuần 12, 13 — đã sửa theo cùng căn cứ. | thuvienphapluat.vn; luatvietnam.vn; UBND phường Cẩm Thành |
| 7 | Lệ phí thẻ HDV 650.000đ viện TT 43/2024 | Căn cứ đúng **khoản 2 Điều 4 TT 33/2018/TT-BTC** (30/3/2018, hiệu lực 14/5/2018): 650.000đ/thẻ (cấp mới/đổi/lại), thẻ tại điểm 200.000đ; thẻ 5 năm (Luật Du lịch 2017). TT 43/2024 chỉ giảm 50% (còn 325.000đ) trong 01/7–31/12/2024. Sửa tuần 23 (4 chỗ) + `legal-sources.md` §6.2. | Toàn văn TT 33/2018/TT-BTC (thuvienphapluat.vn) |

Đính chính thêm: bài Tuổi Trẻ về bãi bỏ thời gian GPLX tối thiểu đăng **12/4/2026**, không phải 01/4/2026 như AUDIT ghi ở vài chỗ (các chỗ sửa đều trích 12/4/2026). Mâu thuẫn nhỏ (c) trong phụ lục QA mục 14 — `training-sources.md` "18+9=27 ≠ 25": chuỗi đó **không tìm thấy trong file hiện tại**; đã đếm lại trực tiếp (21 mục `###`, 25 cơ sở/trung tâm có tên riêng, 8 hình thức học việc) và thêm dòng đếm lại đã kiểm chứng vào đầu file.

Kiểm tra cuối 24/11/2026: grep các chuỗi cũ sai ("27/2018" viện làm căn cứ hiện hành, "01/2021", "139/2016" ngoài ngữ cảnh bãi bỏ, "cấp huyện" đăng ký, "bằng B đủ 3 năm" như quy định hiện hành, "phạt đến 40tr" flycam, "NQ 198" gắn ngưỡng 1 tỷ, "43/2024" viện cho thẻ HDV) = **0 còn sót ngoài AUDIT.md** (chỉ còn trong câu ghi rõ lịch sử/bản trước ghi sai); grep "muse" trên toàn bộ file sẽ đẩy = **0** (358 lần còn lại chỉ trong `ke-hoach/ke-hoach-chi-tiet-tung-ngay.md` — file nội bộ, không bao giờ đẩy); build VitePress local 0 dead link (xem báo cáo Phase 6 + mục kiểm tra dưới).

### Manifest file đã sửa trong Phase 6 (để đẩy lên GitHub sau)

| File | Sửa gì |
|---|---|
| `AUDIT.md` | Thêm phụ lục QA này (cuối file). |
| 9 file tổng (tuần 1, 12, 13, 14, 15, 17, 20, 23, 24) | Sửa 36 anchor mục lục `--` → `---` (4 anchor/file). |
| `FAQ.md` | Làm rõ 4 chữ: "nộp đơn" → "nộp đơn xin việc nghề mới" (dòng 49). |
| `05-day-hoc-dao-tao/gia-su-tieng-anh/tuan-9-gia-su-tieng-anh-day-du.md` | Sửa đếm bài đăng "17 bài" → "15 bài" (3 vị trí). |

Tổng cộng **12 file đã sửa** trong Phase 6 (không tính file build `docs/` tự sinh). Không tạo file mới. Không xóa file nào.
