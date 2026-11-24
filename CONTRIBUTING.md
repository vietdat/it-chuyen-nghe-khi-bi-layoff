# Đóng góp cho IT Chuyển Nghề Khi Bị Layoff

Cảm ơn bạn muốn đóng góp. Repo này tổng hợp kiến thức chuyển nghề phi-tech cho người IT bị layoff — 1 nghề / 1 tuần, mỗi nghề đủ 12 mục bắt buộc. Mọi đóng góp đều phải giữ đúng chuẩn số liệu của repo: số thật, có nguồn, có ngày tra cứu.

## Cách đóng góp

Có 2 cách đóng góp chính:

1. **Thêm 1 nghề mới** — dùng `_TEMPLATE.md`, đặt đúng nhóm lĩnh vực.
2. **Cập nhật mức lương / thông tin thực tế** — kèm nguồn + ngày tra cứu.

Ngoài ra bạn có thể báo thông tin sai hoặc đề xuất nghề mới bằng Issue (xem mục "Báo lỗi bằng Issue" bên dưới) mà không cần gửi Pull Request.

---

## 1. Thêm 1 nghề mới

### Bước 1 — Kiểm tra nghề đã có chưa

- Xem `ROADMAP.md`: 24 nghề đã làm xong (tuần 1–24) và 76 nghề dự trữ trong pool 100 nghề.
- Nghề bạn muốn thêm:
  - Nếu đã nằm trong 76 nghề dự trữ: làm theo đúng tên nghề và nhóm lĩnh vực trong `ROADMAP.md`.
  - Nếu là nghề ngoài pool 100: mở Issue đề xuất nghề mới trước (mẫu `de-xuat-nghe-moi.md`), chờ xác nhận nghề đó hợp với người IT bị layoff rồi mới viết bài.
- Không thêm nghề công nghệ: lập trình viên, data analyst/scientist/engineer, AI/ML engineer, DevOps, QA, an ninh mạng, product/project manager mảng công nghệ, UX/UI, sửa điện thoại/máy tính, dạy lập trình cho trẻ em — các nghề này không thuộc phạm vi repo.

### Bước 2 — Viết bài theo `_TEMPLATE.md`

- Copy toàn bộ `_TEMPLATE.md`, điền đủ **12 mục bắt buộc**:
  1. Nghề là gì / công việc hằng ngày
  2. Ai hợp / ai không hợp
  3. Lợi thế của người ex-IT
  4. Học gì / ở đâu / bao lâu — 3 nấc (tự học, khóa ngắn, học nghề bài bản)
  5. Career path
  6. Tìm việc / khách đầu tiên ở đâu
  7. Thu nhập + sự thật phũ
  8. Rủi ro thật của nghề (mùa vụ, cạnh tranh, vốn, sức khỏe, không có khách)
  9. Lộ trình học theo tuần/tháng
  10. Thử nghề
  11. Kết luận (ưu điểm, nhược điểm, ai nên/không nên thử)
  12. Nguồn tham khảo tách riêng
- Thêm mục **Chi phí khởi điểm chi tiết**: danh sách dụng cụ cần mua + học phí + chi phí dự phòng 2 tháng đầu (theo mẫu trong `_TEMPLATE.md`).
- Không xóa mục nào. Mục nào chưa có số liệu thì ghi "Chưa có số liệu" — không bịa.

### Bước 3 — Đặt đúng nhóm lĩnh vực

Nhóm lĩnh vực là 8 nhóm hiện tại của repo (xem `ROADMAP.md` và cấu trúc thư mục gốc):

| Nhóm | Lĩnh vực |
|---|---|
| 01-ky-thuat-sua-chua | Kỹ thuật sửa chữa |
| 02-dich-vu-cham-soc | Dịch vụ chăm sóc |
| 03-am-thuc-ban-le | Ẩm thực — Bán lẻ |
| 04-van-tai-tu-do | Vận tải tự do |
| 05-day-hoc-dao-tao | Dạy học — Đào tạo |
| 06-sang-tao-truyen-thong | Sáng tạo — Truyền thông |
| 07-dich-vu-tu-van-huong-dan | Dịch vụ tư vấn — Hướng dẫn |
| 08-nong-nghiep | Nông nghiệp |

(Không dùng nhóm A–K của pool 100 nghề để đặt thư mục. Nghề không thuộc 8 nhóm trên thì mở Issue bàn trước khi tạo nhóm mới.)

- Ghi nhóm lĩnh vực của nghề trong file nghiên cứu thị trường (`Info/nghien-cuu-thi-truong.md`) và trong mô tả Pull Request.
- Nghề nào có thể thuộc 2 nhóm thì chọn 1 nhóm chính — nhóm mà công việc hằng ngày của nghề đó thuộc về nhiều nhất — và ghi chú nhóm phụ trong bài (nếu cần).

### Bước 4 — Đặt tên file / thư mục theo quy ước

Tên thư mục và tên file: **không dấu, chữ thường, nối bằng gạch ngang**.

- Thư mục nghề: `<nhom>/<ten-nghe-khong-dau>/`
  - Ví dụ: `01-ky-thuat-sua-chua/tho-lap-dat-sua-dieu-hoa/`, `03-am-thuc-ban-le/chu-quan-an-duong-pho/`, `05-day-hoc-dao-tao/gia-su-tieng-anh/`.
- File tổng: `tuan-<n>-<ten-nghe>-day-du.md`
  - `<n>` là số tuần, `<ten-nghe>` là tên nghề không dấu, gạch ngang.
  - Ví dụ: `tuan-25-tho-son-nha-day-du.md`.
  - Ngoại lệ duy nhất đã có từ trước: tuần 1 dùng tên rút gọn `tuan-1-tho-dieu-hoa-day-du.md`. Các tuần mới dùng tên đầy đủ, không rút gọn.
- Cấu trúc thư mục cho 1 nghề mới (19 file):

```
<nhom>/<ten-nghe-khong-dau>/
├── Info/
│   ├── nghien-cuu-thi-truong.md
│   └── checklist-30-ngay.md
├── ke-hoach/
│   └── ke-hoach-tuan.md
├── fb/
│   ├── bai-viet-dai-thu-2.md
│   ├── bai-tuong-tac-thu-3.md
│   ├── bai-meo-thu-5.md
│   ├── bai-thuc-hanh-thu-6.md
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
│   └── video-dai-script.md
└── tuan-<n>-<ten-nghe>-day-du.md
```

### Bước 5 — Gửi Pull Request

- 1 Pull Request = 1 nghề. Không gộp nhiều nghề vào 1 Pull Request.
- Tiêu đề Pull Request: `Thêm nghề: <Tên nghề> (tuần <n>, nhóm <01–08>)`.
  - Ví dụ: `Thêm nghề: Thợ sơn nhà (tuần 25, nhóm 01-ky-thuat-sua-chua)`.
- Mô tả Pull Request ghi rõ:
  - Tên nghề, nhóm lĩnh vực, số tuần.
  - Nguồn số liệu chính đã dùng (tin tuyển / báo / trung tâm dạy nghề) + ngày tra cứu.
  - Mục nào ghi "Chưa có số liệu" (nếu có) và đã tra ở đâu.
- Checklist trước khi gửi (copy vào mô tả Pull Request và tick đủ):
  - [ ] Đủ 12 mục bắt buộc + mục chi phí khởi điểm chi tiết.
  - [ ] Mọi con số kèm thẻ `[Cập nhật: Tháng/Năm – Nguồn]`, hoặc ghi "Chưa có số liệu".
  - [ ] Lương Việt Nam lấy từ tin tuyển thật, kèm link + ngày tra cứu.
  - [ ] Số liệu Mỹ (nếu có) ghi riêng, ghi rõ "chỉ để tham khảo".
  - [ ] Không nhắc tới tên bất kỳ công cụ AI hay trợ lý nào đã dùng để soạn bài.
  - [ ] Đủ 19 file, đặt tên đúng quy ước.

---

## 2. Cập nhật mức lương / thông tin thực tế

Dùng khi bạn thấy lương hoặc thông tin trong 1 nghề đã lỗi thời, hoặc bạn có số liệu thực tế mới hơn.

- 1 Pull Request = 1 nghề (có thể sửa nhiều con số trong cùng 1 nghề, nhưng không sửa nhiều nghề trong 1 Pull Request).
- Tiêu đề Pull Request: `Cập nhật <tên nghề>: <nội dung cập nhật ngắn gọn>`.
  - Ví dụ: `Cập nhật thợ điều hòa: lương thợ chính theo tin tuyển 11/2026`.
- Mỗi con số sửa phải kèm:
  - **Con số mới + nguồn + ngày tra cứu** (link tin tuyển / báo / bảng giá công khai).
  - **Con số cũ** đang có trong file (để người duyệt đối chiếu).
- Ghi rõ trong mô tả Pull Request:
  - File nào đã sửa (đường dẫn đầy đủ).
  - Ngày tra cứu số liệu mới.
  - Nếu tin tuyển cũ đã hết hạn thì ghi rõ.
- Không sửa số liệu chỉ vì "nghe nói" hoặc "thấy trên mạng xã hội không có link". Số liệu không có nguồn kiểm chứng được sẽ không được chấp nhận.
- Sau khi sửa con số trong file nghiên cứu, cập nhật luôn thẻ `[Cập nhật: Tháng/Năm – Nguồn]` cạnh con số đó và đồng bộ con số mới vào file tổng `tuan-<n>-<ten-nghe>-day-du.md` (nếu file tổng có ghi con số đó).

---

## Quy tắc không bịa số (áp dụng cho mọi đóng góp)

- Mọi con số — lương, học phí, giá dụng cụ, số tin tuyển — phải kèm thẻ `[Cập nhật: Tháng/Năm – Nguồn]` ngay cạnh số.
- Không có số liệu thì ghi **"Chưa có số liệu"**, kèm 1 dòng đã tra ở đâu. Không bịa, không ước lượng thành số cụ thể, không suy từ nghề khác.
- Lương Việt Nam chỉ lấy từ tin tuyển dụng thật (TopCV, VietnamWorks, CareerBuilder Vietnam, Vieclamtot…), báo chí Việt Nam, hoặc bảng giá công khai của trung tâm dạy nghề — kèm link và ngày tra cứu.
- Số liệu Mỹ chỉ để tham khảo: ghi rõ "Mỹ", đơn vị USD, nguồn BLS và tháng/năm. Không quy đổi sang VND rồi ghi thành lương Việt Nam.
- Tin tuyển có ngày hết hạn: số liệu chỉ đúng ở thời điểm tra cứu. Kiểm tra lại link trước khi gửi Pull Request; tin đã hết hạn thì ghi rõ.
- Không nhắc tới tên bất kỳ công cụ AI hay trợ lý nào đã dùng để soạn bài trong mọi file nội dung.
- Không bịa tên trường, tên trung tâm, tên công ty tuyển dụng. Chỉ ghi nơi kiểm chứng được (có link hoặc địa chỉ thật).

---

## Báo lỗi bằng Issue (không cần gửi Pull Request)

Nếu bạn chỉ muốn báo lỗi mà không tự sửa, mở Issue theo mẫu có sẵn trong `.github/ISSUE_TEMPLATE/`:

- **Báo thông tin sai / lỗi thời** (`bao-thong-tin-sai.md`): ghi nghề, con số sai, con số đúng + nguồn, link file.
- **Đề xuất nghề mới** (`de-xuat-nghe-moi.md`): ghi tên nghề, vì sao hợp với người IT bị layoff, nguồn tham khảo, nhóm lĩnh vực gợi ý.

---

## Quy trình duyệt bài

1. Người duyệt kiểm tra đủ 12 mục + mục chi phí, đúng quy ước đặt tên, đủ 19 file (với nghề mới).
2. Người duyệt kiểm tra từng con số: có thẻ cập nhật, có nguồn, link còn mở được, ngày tra cứu còn mới.
3. Con số không có nguồn hoặc nguồn không mở được sẽ được yêu cầu sửa hoặc đổi thành "Chưa có số liệu".
4. Pull Request đạt chuẩn sẽ được gộp (merge). Pull Request chưa đạt sẽ được ghi rõ cần sửa chỗ nào — sửa xong gửi lại, không cần mở Pull Request mới.
