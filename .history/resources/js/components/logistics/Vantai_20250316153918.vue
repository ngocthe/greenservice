<template>
  <div class="service-detail">
    <transition name="fade">
      <h1 class="title">Dịch Vụ Vận Tải Quốc Tế (Sea, Air)</h1>
    </transition>
    
    <transition name="slide-up">
      <p class="description">
        Dịch vụ vận tải Quốc Tế của Green Service ngày càng trở nên phổ biến...
      </p>
    </transition>
    
    <div v-for="(section, index) in sections" :key="index" class="section">
      <transition name="slide-right" appear>
        <h2>{{ section.title }}</h2>
      </transition>
      
      <transition name="fade" appear>
        <ul>
          <li v-for="(item, i) in section.items" :key="i">{{ item }}</li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        {
          title: "Vì sao chọn dịch vụ vận tải quốc tế của Green Service?",
          items: [
            "Mạng lưới rộng khắp với các đối tác lớn",
            "Dịch vụ linh hoạt, đáp ứng mọi nhu cầu vận chuyển",
            "Tối ưu chi phí giúp doanh nghiệp tiết kiệm ngân sách",
            "Đảm bảo an toàn với quy trình vận chuyển chuyên nghiệp",
            "Hỗ trợ thủ tục hải quan nhanh chóng"
          ]
        },
        {
          title: "Dịch vụ vận tải đường biển (Sea Freight)",
          items: [
            "Hàng nguyên container (FCL) an toàn, nhanh chóng",
            "Hàng lẻ (LCL) linh hoạt, tiết kiệm",
            "Hàng siêu trường, siêu trọng cho vận chuyển đặc biệt"
          ]
        },
        {
          title: "Dịch vụ vận tải hàng không (Air Freight)",
          items: [
            "Dịch vụ hàng không nhanh (Express Air Freight)",
            "Dịch vụ hàng không tiêu chuẩn (Standard Air Freight)",
            "Xử lý hàng nguy hiểm, đặc biệt và dễ hư hỏng"
          ]
        },
        {
          title: "Quy trình vận chuyển tại Green Service",
          items: [
            "Bước 1: Tư vấn và báo giá chi tiết",
            "Bước 2: Đóng gói và nhận hàng",
            "Bước 3: Thực hiện vận chuyển theo lịch trình",
            "Bước 4: Giao hàng và hỗ trợ thủ tục",
            "Bước 5: Chăm sóc khách hàng sau dịch vụ"
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.service-detail {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  font-size: 28px;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 20px;
}

.description {
  text-align: justify;
  font-size: 18px;
  color: #555;
}

.section {
  margin-top: 20px;
}

h2 {
  color: #16a085;
  font-size: 22px;
  border-left: 4px solid #16a085;
  padding-left: 10px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  font-size: 16px;
  margin: 5px 0;
  padding-left: 15px;
  position: relative;
}

li::before {
  content: "✔";
  color: #16a085;
  position: absolute;
  left: 0;
}

/* Animation Styles */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active {
  animation: slide-up 0.5s ease-out;
}

@keyframes slide-up {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.slide-right-enter-active {
  animation: slide-right 0.5s ease-out;
}

@keyframes slide-right {
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
</style>
