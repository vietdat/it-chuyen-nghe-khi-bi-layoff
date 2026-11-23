name: "Báo thông tin sai / lỗi thời"
description: "Báo 1 con số hoặc thông tin trong repo đã sai hoặc lỗi thời (lương, học phí, tin tuyển hết hạn, link hỏng...)."
title: "[Sai số liệu] <Tên nghề>: <con số sai ngắn gọn>"
labels: ["sai-so-lieu"]
body:
  - type: input
    id: nghe
    attributes:
      label: "Nghề"
      description: "Tên nghề bị sai thông tin (ví dụ: Thợ lắp đặt / sửa điều hòa)."
      placeholder: "Ví dụ: Thợ lắp đặt / sửa điều hòa"
    validations:
      required: true
  - type: input
    id: link-file
    attributes:
      label: "Link file chứa thông tin sai"
      description: "Đường dẫn file trong repo, kèm số dòng nếu biết (ví dụ: tho-lap-dat-sua-dieu-hoa/Info/nghien-cuu-thi-truong.md, dòng 42)."
      placeholder: "Ví dụ: tho-lap-dat-sua-dieu-hoa/Info/nghien-cuu-thi-truong.md"
    validations:
      required: true
  - type: textarea
    id: so-sai
    attributes:
      label: "Con số / thông tin sai"
      description: "Ghi đúng nội dung đang có trong file (copy nguyên văn) và vì sao nó sai hoặc lỗi thời (ví dụ: tin tuyển đã hết hạn, lương đã đổi)."
      placeholder: "Ví dụ: File ghi lương thợ chính 8–10 triệu/tháng, nhưng tin tuyển gốc đã hết hạn từ tháng 10/2026."
    validations:
      required: true
  - type: textarea
    id: so-dung
    attributes:
      label: "Con số đúng + nguồn"
      description: "Con số đúng (nếu bạn biết) kèm nguồn kiểm chứng được: link tin tuyển / báo / bảng giá công khai. Không có con số đúng thì ghi 'Chưa có số liệu' và ghi rõ bạn đã tra ở đâu."
      placeholder: "Ví dụ: Lương thợ chính 12–15 triệu/tháng — TopCV, tin tuyển ngày 23/11/2026, link: https://..."
    validations:
      required: true
  - type: input
    id: ngay-tra-cuu
    attributes:
      label: "Ngày tra cứu con số đúng"
      description: "Ngày bạn tra cứu nguồn trên (định dạng dd/mm/yyyy). Số liệu chỉ đúng ở thời điểm tra cứu."
      placeholder: "Ví dụ: 23/11/2026"
    validations:
      required: false
  - type: textarea
    id: ghi-chu
    attributes:
      label: "Ghi chú thêm"
      description: "Thông tin bổ sung nếu có (ví dụ: link tin tuyển cũ đã hỏng, trung tâm đã đổi học phí, quy định mới về chứng chỉ...)."
    validations:
      required: false
