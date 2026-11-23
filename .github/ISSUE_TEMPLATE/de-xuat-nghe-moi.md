name: "Đề xuất nghề mới"
description: "Đề xuất 1 nghề phi-tech mới cho người IT bị layoff (nghề chưa có trong 24 tuần đã làm và chưa có trong 76 nghề dự trữ — xem ROADMAP.md)."
title: "[Đề xuất nghề mới] <Tên nghề>"
labels: ["de-xuat-nghe-moi"]
body:
  - type: input
    id: ten-nghe
    attributes:
      label: "Tên nghề"
      description: "Tên nghề bằng tiếng Việt (ghi thêm tên tiếng Anh nếu có)."
      placeholder: "Ví dụ: Thợ sơn nhà (House painter)"
    validations:
      required: true
  - type: textarea
    id: vi-sao-hop
    attributes:
      label: "Vì sao nghề này hợp với người IT bị layoff"
      description: "Giải thích cụ thể: người ex-IT có lợi thế gì trong nghề này (dùng AI, marketing online, làm hệ thống đặt lịch/quản lý khách, bảng tính giá vốn...)? Nghề này khó bị thay thế / khó bị layoff tiếp vì sao (làm bằng tay, gặp khách trực tiếp, việc theo mùa vụ...)?"
      placeholder: "Ví dụ: Thợ sơn nhà dùng AI vẽ phối màu từ ảnh phòng khách gửi, báo giá theo m2 bằng bảng tính, quảng cáo TikTok theo khu vực; sơn nhà phải làm trực tiếp tại nhà khách, không làm từ xa được."
    validations:
      required: true
  - type: textarea
    id: nguon-tham-khao
    attributes:
      label: "Nguồn tham khảo"
      description: "Link nguồn về nghề này: tin tuyển dụng (TopCV/VietnamWorks...), bài báo, trang trung tâm dạy nghề, số liệu nhu cầu (ghi rõ nguồn nào là số liệu Việt Nam, nguồn nào là số liệu Mỹ chỉ để tham khảo). Không có nguồn thì ghi 'Chưa có số liệu' và ghi rõ đã tra ở đâu."
      placeholder: "Ví dụ: TopCV — tin tuyển thợ sơn, tra cứu ngày 23/11/2026, link: https://..."
    validations:
      required: true
  - type: dropdown
    id: nhom-linh-vuc
    attributes:
      label: "Nhóm lĩnh vực gợi ý"
      description: "Chọn 1 nhóm chính theo phân loại trong ROADMAP.md. Nghề nào thuộc 2 nhóm thì chọn nhóm mà công việc hằng ngày thuộc về nhiều nhất."
      options:
        - "A — Sửa chữa nhà cửa & nghề tay nghề"
        - "B — Ăn uống"
        - "C — Làm đẹp & chăm sóc cá nhân"
        - "D — Sức khỏe & chăm sóc"
        - "E — Giáo dục & đào tạo"
        - "F — Nông nghiệp & sản xuất thực phẩm"
        - "G — Bán lẻ & buôn bán"
        - "H — Logistics & vận tải"
        - "I — Sáng tạo & truyền thông (phi công nghệ)"
        - "J — Dịch vụ & kinh doanh"
        - "K — Nghề tay chân khác"
        - "Chưa rõ — cần thảo luận"
    validations:
      required: true
  - type: textarea
    id: thong-tin-them
    attributes:
      label: "Thông tin thêm (nếu có)"
      description: "Học ở đâu / bao lâu, chi phí khởi điểm ước lượng (ghi rõ là ước lượng, chưa phải số liệu kiểm chứng), rủi ro thật của nghề (mùa vụ, cạnh tranh, vốn, sức khỏe...)."
    validations:
      required: false
