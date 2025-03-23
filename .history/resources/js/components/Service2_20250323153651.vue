<template>
  <div ref="servicesSection" class="services-section">
    <h4 class="section-title green_title" data-aos="fade-up">_____ GREEN SERVICE _____</h4>
    <h2 class="section-title title_secon" data-aos="fade-up">DỊCH VỤ CỦA CHÚNG TÔI</h2>
    <div class="services-container">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="service-box"
        data-aos="fade-up"
        :data-aos-delay="index * 100"
      >
        <div class="icon">
          <img :src="service.icon" :alt="service.title">
        </div>
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
        <ul class="sub-services">
          <li v-for="(sub, i) in service.subServices" :key="i">
            <i :class="sub.icon"></i> {{ sub.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  data() {
    return {
      services: [
        {
          title: "Xử lý chất thải",
          description: "Giải pháp xử lý chất thải an toàn và hiệu quả.",
          icon: "https://moitruongmh.vn/images/file/Tin_tuc/tin_4/1508314379_tieYu-huyY-myY-phaYYm-heYYt-haYn-suYY-du.jpg",
          subServices: [
            { name: "Trọn gói", icon: "fas fa-check-circle" },
            { name: "Xử lý chất thải y tế", icon: "fas fa-medkit" }
          ]
        },
        {
          title: "Logistics",
          description: "Dịch vụ vận chuyển và lưu kho chuyên nghiệp.",
          icon: "https://hrchannels.com/uptalent/attachments/images/20220712/112113811_logistics.jpg",
          subServices: [
            { name: "Vận chuyển nội địa", icon: "fas fa-truck" },
            { name: "Kho bãi và lưu trữ", icon: "fas fa-warehouse" },
            { name: "Dịch vụ hải quan", icon: "fas fa-file-invoice" },
            { name: "Giao hàng nhanh", icon: "fas fa-shipping-fast" }
          ]
        },
        {
          title: "Tiêu hủy hàng lỗi",
          description: "Đảm bảo hàng lỗi được xử lý an toàn.",
          icon: "/images/tieuhuy.jpeg",
          subServices: [
            { name: "Tiêu hủy thực phẩm", icon: "fas fa-utensils" },
            { name: "Xử lý hàng hết hạn", icon: "fas fa-calendar-times" },
            { name: "Phá hủy hàng giả", icon: "fas fa-ban" },
            { name: "Tiêu hủy tài liệu", icon: "fas fa-file-shredder" }
          ]
        }
      ]
    };
  },
  mounted() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
};
</script>

<style scoped>
/* Section chính */
.services-section {
  font-family: Montserrat, sans-serif;
  text-align: center;
  padding: 60px 20px;
  background: #f5f5f5;
}

/* Tiêu đề */
.section-title {
  font-size: 18px;
  color: #2E7D32;
  margin-bottom: 40px;
  font-weight: bold;
}

/* Container dịch vụ */
.services-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1100px;
  margin: 0 auto;
}

/* Thẻ dịch vụ */
.service-box {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Hover */
.service-box:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
}

/* Icon */
.icon {
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 15px;
}

.icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Tiêu đề */
h3 {
  font-size: 22px;
  color: #2E7D32;
  margin-bottom: 10px;
}

/* Mô tả */
p {
  font-size: 14px;
  color: #555;
  margin-bottom: 15px;
  flex-grow: 1;
}

/* Danh sách dịch vụ con */
.sub-services {
  margin-top: 10px;
  padding: 10px;
  list-style: none;
  background: #e8f5e9;
  border-radius: 5px;
}

.sub-services li {
  padding: 8px;
  border-bottom: 1px solid #c8e6c9;
  display: flex;
  align-items: center;
}

.sub-services li:last-child {
  border-bottom: none;
}

.sub-services li i {
  margin-right: 10px;
  color: #2E7D32;
}

/* Responsive */
@media (max-width: 768px) {
  .services-container {
    grid-template-columns: 1fr;
  }
}
</style>
