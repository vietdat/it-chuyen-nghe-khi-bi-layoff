import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'vi',
  title: 'IT Chuyển Nghề Khi Bị Layoff',
  description:
    'Bị layoff không phải hết nghề — mà là hết 1 công việc. Kiến thức chuyển nghề phi-tech cho các bạn IT: 24 nghề, 8 lĩnh vực.',
  // Repo GitHub Pages: https://<user>.github.io/it-chuyen-nghe-khi-bi-layoff/
  base: '/it-chuyen-nghe-khi-bi-layoff/',
  srcDir: '.',
  // README.md của repo làm trang chủ của site.
  rewrites: {
    'README.md': 'index.md'
  },
  // Loại khỏi site: kế hoạch nội bộ (root + từng tuần), nghiên cứu thô,
  // template, issue template, và chính thư mục output của build.
  srcExclude: [
    'ke-hoach/**',
    'nghien-cuu/**',
    '**/ke-hoach/**',
    '_TEMPLATE.md',
    '.github/**',
    'docs/**'
  ],
  outDir: 'docs',

  themeConfig: {
    nav: [
      { text: 'Trang chủ', link: '/' },
      { text: 'FAQ', link: '/FAQ' },
      { text: 'Lộ trình', link: '/ROADMAP' }
    ],

    // Tìm kiếm local, không cần dịch vụ ngoài.
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: 'Tìm kiếm', buttonAriaLabel: 'Tìm kiếm' },
              modal: {
                noResultsText: 'Không tìm thấy kết quả cho',
                resetButtonTitle: 'Xóa tìm kiếm',
                footer: {
                  selectText: 'chọn',
                  navigateText: 'di chuyển',
                  closeText: 'đóng'
                }
              }
            }
          }
        }
      }
    },

    sidebar: [
      {
        text: 'Giới thiệu',
        items: [
          { text: 'Trang chủ', link: '/' },
          { text: 'Câu hỏi thường gặp', link: '/FAQ' },
          { text: 'Lộ trình 24 tuần', link: '/ROADMAP' },
          { text: 'Đóng góp', link: '/CONTRIBUTING' }
        ]
      },
      {
        text: '1. Kỹ thuật sửa chữa',
        items: [
          { text: 'Tuần 1 — Thợ lắp đặt / sửa điều hòa', link: '/01-ky-thuat-sua-chua/tho-lap-dat-sua-dieu-hoa/tuan-1-tho-dieu-hoa-day-du' },
          { text: 'Tuần 2 — Thợ sửa điện gia dụng', link: '/01-ky-thuat-sua-chua/tho-sua-dien-gia-dung/tuan-2-tho-sua-dien-gia-dung-day-du' },
          { text: 'Tuần 3 — Thợ khóa', link: '/01-ky-thuat-sua-chua/tho-khoa/tuan-3-tho-khoa-day-du' },
          { text: 'Tuần 4 — Thợ sửa xe máy', link: '/01-ky-thuat-sua-chua/tho-sua-xe-may/tuan-4-tho-sua-xe-may-day-du' },
          { text: 'Tuần 15 — Thợ diệt côn trùng', link: '/01-ky-thuat-sua-chua/tho-diet-con-trung/tuan-15-tho-diet-con-trung-day-du' },
          { text: 'Tuần 16 — Thợ điện dân dụng', link: '/01-ky-thuat-sua-chua/tho-dien-dan-dung/tuan-16-tho-dien-dan-dung-day-du' },
          { text: 'Tuần 17 — Thợ ống nước', link: '/01-ky-thuat-sua-chua/tho-ong-nuoc/tuan-17-tho-ong-nuoc-day-du' },
          { text: 'Tuần 18 — Thợ lắp điện mặt trời', link: '/01-ky-thuat-sua-chua/tho-lap-dien-mat-troi/tuan-18-tho-lap-dien-mat-troi-day-du' }
        ]
      },
      {
        text: '2. Dịch vụ chăm sóc',
        items: [
          { text: 'Tuần 6 — Thợ cắt tóc nam', link: '/02-dich-vu-cham-soc/tho-cat-toc-nam/tuan-6-tho-cat-toc-nam-day-du' },
          { text: 'Tuần 7 — Chăm sóc người già', link: '/02-dich-vu-cham-soc/cham-soc-nguoi-gia/tuan-7-cham-soc-nguoi-gia-day-du' },
          { text: 'Tuần 8 — Cắt tỉa thú cưng', link: '/02-dich-vu-cham-soc/cat-tia-thu-cung/tuan-8-cat-tia-thu-cung-day-du' },
          { text: 'Tuần 12 — Dịch vụ vệ sinh', link: '/02-dich-vu-cham-soc/dich-vu-ve-sinh/tuan-12-dich-vu-ve-sinh-day-du' },
          { text: 'Tuần 13 — Dịch vụ giặt ủi', link: '/02-dich-vu-cham-soc/dich-vu-giat-ui/tuan-13-dich-vu-giat-ui-day-du' },
          { text: 'Tuần 20 — Thợ làm tóc nữ', link: '/02-dich-vu-cham-soc/tho-lam-toc-nu/tuan-20-tho-lam-toc-nu-day-du' }
        ]
      },
      {
        text: '3. Ẩm thực — Bán lẻ',
        items: [
          { text: 'Tuần 5 — Chủ quán ăn đường phố', link: '/03-am-thuc-ban-le/chu-quan-an-duong-pho/tuan-5-chu-quan-an-duong-pho-day-du' },
          { text: 'Tuần 21 — Thợ làm bánh', link: '/03-am-thuc-ban-le/tho-lam-banh/tuan-21-tho-lam-banh-day-du' }
        ]
      },
      {
        text: '4. Vận tải tự do',
        items: [
          { text: 'Tuần 10 — Shipper / giao hàng', link: '/04-van-tai-tu-do/shipper-giao-hang/tuan-10-shipper-giao-hang-day-du' }
        ]
      },
      {
        text: '5. Dạy học — Đào tạo',
        items: [
          { text: 'Tuần 9 — Gia sư tiếng Anh', link: '/05-day-hoc-dao-tao/gia-su-tieng-anh/tuan-9-gia-su-tieng-anh-day-du' },
          { text: 'Tuần 22 — Giáo viên dạy lái xe', link: '/05-day-hoc-dao-tao/giao-vien-day-lai-xe/tuan-22-giao-vien-day-lai-xe-day-du' }
        ]
      },
      {
        text: '6. Sáng tạo — Truyền thông',
        items: [
          { text: 'Tuần 11 — Chụp ảnh cưới / sự kiện', link: '/06-sang-tao-truyen-thong/chup-anh-cuoi-su-kien/tuan-11-chup-anh-cuoi-su-kien-day-du' },
          { text: 'Tuần 19 — Quay phim cưới / sự kiện', link: '/06-sang-tao-truyen-thong/quay-phim-cuoi-su-kien/tuan-19-quay-phim-cuoi-su-kien-day-du' }
        ]
      },
      {
        text: '7. Dịch vụ tư vấn — Hướng dẫn',
        items: [
          { text: 'Tuần 14 — Môi giới bất động sản', link: '/07-dich-vu-tu-van-huong-dan/moi-gioi-bat-dong-san/tuan-14-moi-gioi-bat-dong-san-day-du' },
          { text: 'Tuần 23 — Hướng dẫn viên du lịch', link: '/07-dich-vu-tu-van-huong-dan/huong-dan-vien-du-lich/tuan-23-huong-dan-vien-du-lich-day-du' }
        ]
      },
      {
        text: '8. Nông nghiệp',
        items: [
          { text: 'Tuần 24 — Người trồng nấm', link: '/08-nong-nghiep/nguoi-trong-nam/tuan-24-nguoi-trong-nam-day-du' }
        ]
      }
    ],

    outline: { level: [2, 3], label: 'Trong trang này' },
    docFooter: { prev: 'Trang trước', next: 'Trang sau' },
    lastUpdated: false,
    footer: {
      message: 'Nội dung chia sẻ tự do cho mục đích học tập và tham khảo. Khi trích dẫn, vui lòng ghi nguồn.',
      copyright: 'IT Chuyển Nghề Khi Bị Layoff'
    }
  }
})
