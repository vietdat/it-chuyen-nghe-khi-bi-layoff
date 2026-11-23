# Mẫu chuẩn cho 1 nghề mới — IT Chuyển Nghề Khi Bị Layoff

> Dùng file này làm khung sườn khi thêm 1 nghề mới vào repo.
> Copy toàn bộ file, đổi tên nghề, điền đủ 8 mục bắt buộc + mục chi phí khởi điểm.
> Không xóa mục nào. Mục nào chưa có số liệu thì ghi rõ "Chưa có số liệu" — không bịa, không ước lượng thành số cụ thể.

---

## Quy tắc bắt buộc (đọc trước khi viết)

### 1. Mọi con số phải kèm thẻ cập nhật

Mọi con số trong bài — lương, học phí, giá dụng cụ, số tin tuyển, số lượng — phải kèm thẻ ngay cạnh số:

`[Cập nhật: Tháng/Năm – Nguồn]`

Ví dụ:

- Lương thợ chính 12–15 triệu/tháng [Cập nhật: 11/2026 – TopCV, tin tuyển ngày 23/11/2026].
- Học phí khóa thợ chính 8.500.000đ [Cập nhật: 11/2026 – Trung tâm dạy nghề X, bảng học phí công khai].

Không có thẻ cập nhật = con số chưa đạt chuẩn, phải bổ sung trước khi gửi Pull Request.

### 2. Không có số liệu thì ghi "Chưa có số liệu"

Không tìm được nguồn thì ghi đúng câu **"Chưa có số liệu"**, kèm 1 dòng giải thích đã tra ở đâu (ví dụ: "đã tra TopCV/VietnamWorks ngày 23/11/2026, không có tin tuyển ghi lương cho nghề này").

- Không bịa lương, không ước lượng lương ("khoảng 10 triệu" mà không có nguồn là bịa).
- Không suy lương từ nghề khác, không lấy lương trung bình ngành làm lương của nghề này.
- Không ghi số liệu học phí, giá dụng cụ dưới dạng "khoảng", "tầm" nếu không có nguồn giá thật (bảng giá cửa hàng/trung tâm, link sản phẩm).

### 3. Lương Việt Nam chỉ lấy từ tin tuyển thật

- Lương Việt Nam chỉ lấy từ tin tuyển dụng thật (TopCV, VietnamWorks, CareerBuilder Vietnam, Vieclamtot…), báo chí Việt Nam, hoặc bảng lương/học phí công khai của trung tâm dạy nghề — kèm link tin tuyển và **ngày tra cứu**.
- Ghi rõ đó là tin tuyển đơn lẻ hay nhiều tin: "1 tin tuyển" khác "6 tin tuyển" — không gom nhiều tin thành 1 con số trung bình nếu các tin chênh nhau nhiều; liệt kê từng nấc (mới vào nghề / có kinh nghiệm / thợ chính).
- Tin tuyển có ngày hết hạn: số liệu lương chỉ đúng ở thời điểm tra cứu. Ghi ngày tra cứu trong thẻ cập nhật và nhắc người đọc kiểm tra lại link trước khi dùng.

### 4. Số liệu Mỹ chỉ để tham khảo, không ghi thành lương Việt Nam

- Số liệu Mỹ (ví dụ: BLS — Cục Thống kê Lao động Hoa Kỳ) chỉ được ghi trong mục tham khảo, ghi rõ "Mỹ" và đơn vị USD, kèm tháng/năm của số liệu.
- Không quy đổi USD sang VND rồi ghi thành lương Việt Nam. Không dùng số liệu Mỹ để kết luận thu nhập ở Việt Nam.

### 5. Không nhắc tới tên công cụ AI hay trợ lý đã dùng để soạn bài

Trong mọi file nội dung của repo, không nhắc tới tên bất kỳ công cụ AI, trợ lý AI hay nền tảng soạn thảo nào đã dùng để nghiên cứu/soạn bài. Chỉ ghi nguồn số liệu thật (tin tuyển, báo, trung tâm dạy nghề) và ngày tra cứu.

### 6. Viết sự thật, không hứa hẹn

- Viết phần khó của nghề ra rõ ràng (mục 7 và 8). Không vẽ đường dễ dàng, không hứa "thu nhập ổn định", "việc nhẹ lương cao".
- Dùng số liệu đã kiểm chứng, ví dụ thật từ tin tuyển thật, trường dạy nghề thật. Không bịa tên trường, tên trung tâm, tên công ty tuyển dụng.

---

## Cấu trúc thư mục cho 1 nghề mới

Tên thư mục: **không dấu, chữ thường, nối bằng gạch ngang**, đặt theo tên nghề.

Ví dụ: `tho-lap-dat-sua-dieu-hoa/`, `chu-quan-an-duong-pho/`, `gia-su-tieng-anh/`.

```
<ten-nghe-khong-dau>/
├── Info/
│   ├── nghien-cuu-thi-truong.md   # Nghiên cứu thị trường đầy đủ + checklist nguồn
│   └── checklist-30-ngay.md       # Checklist 30 ngày đầu chuyển nghề
├── ke-hoach/
│   └── ke-hoach-tuan.md           # Lịch đăng từng ngày trong tuần
├── fb/
│   ├── bai-viet-dai-thu-2.md
│   ├── bai-tuong-tac-thu-3.md
│   ├── bai-meo-thu-5.md
│   ├── bai-thuc-hanh-thu-6.md     # Kèm việc thật đang tuyển + CV trước/sau
│   ├── bai-teaser-thu-7.md
│   └── bai-qa-chu-nhat.md
├── tiktok/
│   ├── clip-thu-2-teaser.md
│   ├── clip-thu-3-loi-hay-gap.md
│   ├── kich-ban-reel-thu-4.md
│   ├── clip-thu-5-loi-the-it.md
│   ├── clip-thu-6-checklist-30s.md
│   ├── clip-thu-7-su-that-phu.md
│   ├── clip-hoc-o-dau-hoc-phi.md
│   └── clip-chu-nhat-qa.md
├── youtube/
│   └── video-dai-script.md        # Script video dài (khoảng 10 phút)
└── tuan-<n>-<ten-nghe-khong-dau>-day-du.md   # File tổng: gộp toàn bộ nội dung tuần
```

Tổng cộng 19 file cho 1 tuần: 2 file Info + 1 file kế hoạch + 6 bài Facebook + 8 clip TikTok + 1 script YouTube + 1 file tổng.

File tổng đặt tên theo mẫu: `tuan-<n>-<ten-nghe>-day-du.md` — `<n>` là số tuần, `<ten-nghe>` là tên nghề không dấu, gạch ngang.

---

# Tuần <n> - <Tên nghề> (<ngày bắt đầu dd/mm/yyyy> - <ngày kết thúc dd/mm/yyyy>) - Toàn bộ nội dung

## Mục lục

1. Lịch tuần — 7 ngày, 15 bài
2. Nghiên cứu thị trường tóm tắt
3. YouTube — Script video dài Thứ 2
4. Facebook — 6 bài
5. TikTok — 8 clip
6. Checklist 30 ngày

---

## 1. Lịch tuần <n> - 7 ngày, 15 bài

| Ngày | Kênh | Nội dung |
|---|---|---|
| Thứ 2 | YouTube + Facebook | Video dài + bài viết dài: giới thiệu nghề |
| Thứ 3 | Facebook + TikTok | Bài tương tác + clip lỗi hay gặp |
| Thứ 4 | TikTok (Reel) | Reel: 1 kỹ năng hoặc 1 sự thật về nghề |
| Thứ 5 | Facebook + TikTok | Bài mẹo + clip lợi thế của dân IT |
| Thứ 6 | Facebook + TikTok | Bài thực hành (việc thật + CV trước/sau) + clip checklist 30 giây |
| Thứ 7 | Facebook + TikTok | Bài teaser + clip sự thật phũ |
| Chủ nhật | Facebook + TikTok | Bài Q&A + clip học ở đâu, học phí |

---

## 2. Nghiên cứu thị trường tóm tắt

> Bản đầy đủ nằm trong `Info/nghien-cuu-thi-truong.md`. Mục này chỉ tóm tắt, mọi con số vẫn phải kèm thẻ cập nhật.

### Nhu cầu tuyển (đếm ngày <dd/mm/yyyy> — chỉ đúng ở thời điểm đếm)

- Tổng số tin tuyển đếm được: … [Cập nhật: Tháng/Năm – Nguồn].
- Nhu cầu theo thành phố (Hà Nội / TP.HCM / Đà Nẵng / Cần Thơ…): liệt kê số tin từng thành phố, kèm ngày đếm.
- Ghi rõ nguồn đếm: TopCV / VietnamWorks / Vieclamtot / nguồn khác, kèm từ khóa tìm kiếm đã dùng.

### Học ở đâu (3 miền, tra cứu <dd/mm/yyyy>)

- Miền Bắc: tên trường/trung tâm, học phí, thời gian học.
- Miền Trung: tên trường/trung tâm, học phí, thời gian học.
- Miền Nam: tên trường/trung tâm, học phí, thời gian học.
- Mỗi nơi kèm link hoặc địa chỉ kiểm chứng được. Không ghi tên trường không kiểm chứng được.

### Lương theo nấc (tin tuyển thật, tra cứu <dd/mm/yyyy>)

- Mới vào nghề / học việc: … [Cập nhật: Tháng/Năm – Nguồn].
- Có kinh nghiệm 1–2 năm: … [Cập nhật: Tháng/Năm – Nguồn].
- Thợ chính / tự làm chủ: … [Cập nhật: Tháng/Năm – Nguồn].
- Không có tin tuyển ghi lương thì ghi "Chưa có số liệu" (xem quy tắc 2).

### Rủi ro thật + mùa vụ

- Tóm tắt ngắn, chi tiết đầy đủ ở mục 8 bên dưới.

---

## 3. YouTube - Script video dài Thứ 2

Tiêu đề gợi ý: `Dev bị layoff chuyển sang làm <tên nghề> được không?`

Cấu trúc script (khoảng 10 phút):

| Mốc thời gian | Nội dung |
|---|---|
| 0:00–0:30 | Hook: 1 câu hỏi thật của người bị layoff |
| 0:30–2:00 | Nghề này là gì, 1 ngày làm việc thật (mục 1) |
| 2:00–3:30 | Ai hợp, ai không hợp (mục 2) |
| 3:30–5:30 | Lợi thế của dân IT (mục 3) |
| 5:30–7:00 | Học gì, học ở đâu, bao lâu (mục 4) |
| 7:00–8:30 | Career path + tìm việc, tìm khách ở đâu (mục 5 + 6) |
| 8:30–9:30 | Thu nhập + sự thật + nhu cầu thị trường (mục 7) |
| 9:30–10:00 | Checklist 5 việc + CTA |

---

## 4. Facebook - 6 bài

- **Bài dài Thứ 2:** giới thiệu nghề, đủ 8 mục tóm tắt.
- **Bài tương tác Thứ 3:** 1 câu hỏi mở cho người đọc (ví dụ: "Sau layoff, bạn đang ở bước nào?").
- **Bài mẹo Thứ 5:** 1 mẹo thật, dùng được ngay (ví dụ: báo giá từ ảnh khách gửi).
- **Bài thực hành Thứ 6:** việc thật đang tuyển (tên công ty, vị trí, lương, link tin tuyển, ngày tra cứu) + CV mẫu trước/sau + checklist 30 ngày.
- **Bài teaser Thứ 7:** hé lộ nghề tuần sau hoặc 1 sự thật ngắn về nghề.
- **Bài Q&A Chủ nhật:** trả lời 3–5 câu hỏi thật của người đọc (ghi nguồn câu hỏi nếu lấy từ mạng xã hội; không ghi tên người hỏi).

---

## 5. TikTok - 8 clip

- Thứ 2: teaser giới thiệu nghề.
- Thứ 3: lỗi hay gặp của người mới.
- Thứ 4: reel — 1 kỹ năng hoặc 1 tình huống thật trong nghề.
- Thứ 5: lợi thế của dân IT trong nghề này.
- Thứ 6: checklist 30 giây — 3 việc làm ngay.
- Thứ 7: sự thật phũ về nghề.
- Clip riêng: học ở đâu, học phí bao nhiêu (kèm thẻ cập nhật cho học phí).
- Chủ nhật: Q&A — trả lời 1 câu hỏi thật.

---

# NỘI DUNG 8 MỤC BẮT BUỘC

> 8 mục dưới đây là phần lõi của mỗi nghề. Viết đầy đủ trong `Info/nghien-cuu-thi-truong.md` và tóm tắt lại trong file tổng, bài dài Facebook và script YouTube.

## 1. Nghề là gì / Công việc hằng ngày

- Nghề này làm gì, cho ai, ở đâu (tại nhà khách, tại xưởng, tại cửa hàng…).
- Mô tả 1 ngày làm việc thật, theo giờ: sáng làm gì, chiều làm gì, tối làm gì.
- Công việc nào làm mỗi ngày, công việc nào theo mùa / theo đơn.
- Cần sức khỏe / thể lực ra sao (đứng cả ngày, leo thang, mang vác, làm ngoài trời…).

## 2. Ai hợp / Ai không hợp

- **Hợp:** liệt kê 3–5 đặc điểm (ví dụ: thích làm việc tay chân, chịu được nắng nóng, thích gặp khách, kiên nhẫn với việc lặp lại).
- **Không hợp:** liệt kê 3–5 đặc điểm (ví dụ: không chịu được làm ngoài trời, sợ độ cao, không thích gặp khách lạ, cần thu nhập ổn định ngay tháng đầu).
- Viết thẳng, không nịnh người đọc. Mục này là để người không hợp tự loại mình ra sớm.

## 3. Lợi thế của người ex-IT

- Kỹ năng IT nào mang sang được, nói cụ thể, không nói chung chung:
  - Dùng AI để làm gì trong nghề này (ví dụ: báo giá từ ảnh khách gửi, viết mô tả dịch vụ, lên lịch nhắc khách).
  - Làm marketing online ra sao (TikTok/Facebook/Zalo, quảng cáo theo khu vực).
  - Làm hệ thống đặt lịch / quản lý khách / nhắc lịch bảo trì ra sao.
  - Dùng bảng tính để tính giá vốn, theo dõi thu chi, tính lời/lỗ từng job ra sao.
- Lợi thế nào là thật, lợi thế nào chỉ là "nghe hay": ví dụ, biết lập trình không giúp cắt tóc đẹp hơn — ghi rõ giới hạn.

## 4. Học gì / Ở đâu / Bao lâu — 3 nấc

### Nấc 1 — Tự học (0 đồng hoặc chi phí thấp)

- Học gì: kiến thức nền, kỹ năng cơ bản nhất.
- Học ở đâu: kênh YouTube, tài liệu, cộng đồng nào (ghi tên cụ thể, kiểm chứng được).
- Bao lâu: … (ghi rõ đây là ước lượng, kèm nguồn nếu có).

### Nấc 2 — Khóa ngắn (vài tuần đến vài tháng)

- Học gì: kỹ năng làm được việc ngay.
- Học ở đâu: tên trung tâm/trường, địa chỉ, học phí [Cập nhật: Tháng/Năm – Nguồn].
- Bao lâu: …

### Nấc 3 — Học nghề bài bản (vài tháng đến 1 năm, có chứng chỉ nếu nghề yêu cầu)

- Học gì: toàn bộ tay nghề + chứng chỉ / giấy phép hành nghề (nếu có).
- Học ở đâu: tên trường/trung tâm, học phí [Cập nhật: Tháng/Năm – Nguồn].
- Bao lâu: …
- Giấy phép / chứng chỉ bắt buộc (nếu có): ghi rõ theo quy định nào, xin ở đâu. Không có thì ghi "Nghề này hiện không yêu cầu chứng chỉ bắt buộc — Chưa có số liệu về quy định mới nhất, kiểm tra lại trước khi học".

## 5. Career path

Vẽ lộ trình đi từ đâu tới đâu, theo nấc thời gian thật:

- **Tháng 1–3:** học việc / phụ việc — làm gì, thu nhập ra sao (kèm thẻ cập nhật hoặc "Chưa có số liệu").
- **Tháng 3–12:** làm chính — làm gì, khác gì so với lúc học việc.
- **Năm 1–2:** thợ chính / nhận job riêng / làm cho cửa hàng lớn.
- **Năm 2 trở đi:** mở tiệm riêng / nhận học viên / làm chủ đội nhóm — cần vốn bao nhiêu, cần gì thêm (mặt bằng, giấy phép, nhân sự).
- Ghi rõ: nấc nào là phổ biến, nấc nào ít người lên được và vì sao.

## 6. Tìm việc / Khách đầu tiên ở đâu

- **Đi làm thuê:** tìm việc ở đâu (TopCV / VietnamWorks / Vieclamtot / nhóm Facebook / cửa hàng trong khu vực) — kèm từ khóa tìm kiếm và ngày tra cứu số tin tuyển.
- **Làm tự do / nhận khách riêng:** khách đầu tiên kiếm ở đâu (người quen, nhóm cư dân, chợ, TikTok/Facebook theo khu vực, sàn dịch vụ).
- **Việc thật đang tuyển:** liệt kê 2–4 tin tuyển thật (tên công ty/cửa hàng, vị trí, lương, link, ngày tra cứu) trong bài thực hành Thứ 6. Hết hạn thì ghi rõ "tin đã hết hạn, kiểm tra lại".
- **CV trước/sau:** CV của dev đi xin việc IT (không dùng được cho nghề này) và CV viết lại cho nghề mới.

## 7. Thu nhập + Sự thật phũ

- Thu nhập theo nấc (mới vào / có kinh nghiệm / thợ chính / tự làm chủ), mỗi nấc kèm thẻ cập nhật. Không có nguồn thì ghi "Chưa có số liệu".
- Thu nhập ghi rõ là lương tháng, thu nhập theo job, hay thu nhập theo ngày — không trộn lẫn.
- **Sự thật phũ:** 3–5 sự thật khó nghe nhưng thật (ví dụ: tháng đầu gần như không có thu nhập, mùa thấp điểm vắng khách, phải làm cuối tuần/lễ, khách bom hàng / nợ tiền, giá bị ép vì cạnh tranh).
- Số liệu Mỹ (nếu có): ghi riêng 1 dòng, ghi rõ "Mỹ — chỉ để tham khảo", kèm nguồn BLS và tháng/năm. Không ghi thành lương Việt Nam.

## 8. Rủi ro thật của nghề

Liệt kê rủi ro thật của nghề này — **không phải rủi ro bị layoff khỏi công ty**, mà là rủi ro khi đã làm nghề:

- **Mùa vụ:** mùa nào đông khách, mùa nào vắng; tháng thấp điểm thu nhập giảm ra sao (kèm số liệu nếu có, không có thì ghi "Chưa có số liệu").
- **Cạnh tranh:** có bao nhiêu người cùng làm trong khu vực, giá bị ép xuống ra sao, khách so sánh giá như thế nào.
- **Vốn:** vốn ban đầu bao nhiêu, vốn lưu động hàng tháng bao nhiêu, bao lâu hoàn vốn (kèm thẻ cập nhật hoặc "Chưa có số liệu").
- **Sức khỏe:** bệnh nghề nghiệp, tai nạn lao động thường gặp, làm việc trong điều kiện nào (nắng, bụi, hóa chất, leo cao…).
- **Không có khách:** vì sao mất khách, khách đi đâu, làm gì khi 1–2 tuần không có đơn.
- **Rủi ro khác:** giấy phép / quy định, khách nợ tiền, hỏng đồ của khách phải đền, giá vật tư tăng.

---

## Chi phí khởi điểm chi tiết

> Mục bắt buộc, tách riêng khỏi 8 mục trên. Mọi khoản tiền phải kèm thẻ cập nhật hoặc ghi "Chưa có số liệu". Không ghi giá ước lượng thành số cụ thể.

### A. Dụng cụ / thiết bị cần mua

| # | Dụng cụ / thiết bị | Giá tham khảo | Nguồn / Ngày tra cứu |
|---|---|---|---|
| 1 | … | … [Cập nhật: Tháng/Năm – Nguồn] | … |
| 2 | … | … [Cập nhật: Tháng/Năm – Nguồn] | … |
| … | … | … | … |
| | **Tổng dụng cụ / thiết bị** | **…** | |

- Ghi rõ món nào bắt buộc ngay từ đầu, món nào mua sau khi đã có khách.
- Ghi rõ mua mới hay mua cũ được, mua ở đâu (chợ, cửa hàng, sàn thương mại điện tử — kèm link nếu có).

### B. Học phí

| Nấc học | Nơi học | Học phí | Nguồn / Ngày tra cứu |
|---|---|---|---|
| Tự học | … | … [Cập nhật: Tháng/Năm – Nguồn] | … |
| Khóa ngắn | … | … [Cập nhật: Tháng/Năm – Nguồn] | … |
| Học nghề bài bản | … | … [Cập nhật: Tháng/Năm – Nguồn] | … |

### C. Chi phí dự phòng 2 tháng đầu

| Khoản | Chi phí / tháng | 2 tháng |
|---|---|---|
| Ăn ở, sinh hoạt (tiền nhà, ăn uống, đi lại) | … | … |
| Tiền xăng / đi lại làm việc | … | … |
| Tiền điện thoại, mạng, quảng cáo tìm khách | … | … |
| Vật tư tiêu hao, hao mòn dụng cụ | … | … |
| Khoản khác: … | … | … |
| **Tổng dự phòng 2 tháng** | | **…** |

### D. Tổng chi phí khởi điểm

| Hạng mục | Số tiền |
|---|---|
| Dụng cụ / thiết bị (A) | … |
| Học phí (B — chọn 1 nấc) | … |
| Dự phòng 2 tháng đầu (C) | … |
| **Tổng cộng** | **…** |

- Ghi rõ tổng này là cho nấc học nào (tự học / khóa ngắn / học nghề bài bản).
- Ghi rõ: 2 tháng đầu gần như chưa có thu nhập ổn định — chi phí dự phòng là tiền sống, không phải tiền đầu tư sinh lời ngay.

---

## Checklist trước khi gửi Pull Request

- [ ] Đủ 8 mục bắt buộc + mục chi phí khởi điểm chi tiết.
- [ ] Mọi con số đều kèm thẻ `[Cập nhật: Tháng/Năm – Nguồn]`, hoặc ghi "Chưa có số liệu".
- [ ] Lương Việt Nam lấy từ tin tuyển thật, kèm link + ngày tra cứu.
- [ ] Số liệu Mỹ (nếu có) ghi riêng, ghi rõ "chỉ để tham khảo", không ghi thành lương Việt Nam.
- [ ] Không nhắc tới tên bất kỳ công cụ AI hay trợ lý nào đã dùng để soạn bài.
- [ ] Đủ 19 file theo cấu trúc thư mục ở trên, đặt tên đúng quy ước.
- [ ] Tin tuyển trong bài thực hành Thứ 6 còn hạn ở thời điểm gửi bài; ghi ngày tra cứu.
