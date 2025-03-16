<template>
  <div class="service-detail">
    <transition name="fade">
      <h1 class="title">Dịch Vụ Vận Tải Quốc Tế (Sea, Air)  – Giải pháp vận chuyển hiệu quả cho doanh nghiệp của bạn</h1>
    </transition>
    
    <transition name="slide-up">
      <p class="description">
        Dịch vụ vận tải Quốc Tế của Green Service ngày càng trở nên phổ biến. Trong bối cảnh hội nhập kinh tế toàn cầu, nhu cầu vận chuyển hàng hóa quốc tế ngày càng gia tăng. Dịch vụ vận tải quốc tế bằng đường biển (Sea Freight) và đường hàng không (Air Freight) của chúng tôi cung cấp giải pháp tối ưu, đảm bảo hàng hóa được vận chuyển nhanh chóng, an toàn và tiết kiệm chi phí.
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
          title: "1. Vì sao chọn dịch vụ vận tải quốc tế của Green Service?",
          items: [
            "Mạng lưới rộng khắp: Chúng tôi hợp tác với nhiều hãng tàu lớn và hãng hàng không uy tín.",
            "Dịch vụ linh hoạt: Đáp ứng mọi nhu cầu vận chuyển từ hàng lẻ (LCL) đến hàng nguyên container (FCL) và hàng hóa đặc biệt.",
            "Tối ưu chi phí: Giải pháp vận chuyển phù hợp với từng loại hàng hóa, giúp khách hàng tối ưu ngân sách.",
            "Đảm bảo an toàn: Quy trình vận chuyển chuyên nghiệp, đảm bảo hàng hóa đến tay người nhận nguyên vẹn.",
            "Hỗ trợ thủ tục hải quan: Cung cấp dịch vụ khai báo hải quan trọn gói, giúp khách hàng tiết kiệm thời gian và công sức."
          ]
        },
        {
          title: "2. Dịch vụ vận tải đường biển (Sea Freight)",
          items: [
            "Hàng nguyên container (FCL): Giải pháp vận chuyển an toàn, nhanh chóng với chi phí hợp lý.",
            "Hàng lẻ (LCL): Linh hoạt cho các doanh nghiệp có nhu cầu vận chuyển nhỏ lẻ.",
            "Hàng siêu trường, siêu trọng: Đáp ứng các mặt hàng có kích thước và trọng lượng lớn."
          ]
        },
        {
          title: "3. Dịch vụ vận tải hàng không (Air Freight)",
          items: [
            "Dịch vụ hàng không nhanh (Express Air Freight): Đảm bảo giao hàng nhanh chóng trong thời gian ngắn nhất.",
            "Dịch vụ hàng không tiêu chuẩn (Standard Air Freight): Cân bằng giữa thời gian và chi phí, phù hợp với đa dạng loại hàng hóa.",
            "Hàng nguy hiểm và đặc biệt: Xử lý các loại hàng hóa cần yêu cầu đặc biệt như dược phẩm, thiết bị y tế, hàng dễ hư hỏng.",
            "Dịch vụ door-to-door: Nhận hàng tận nơi và giao hàng đến tận tay người nhận."
          ]
        },
        {
          title: "4. Quy trình vận chuyển chuyên nghiệp tại Green Service",
          items: [
            "Bước 1: Tư vấn và báo giá - Phân tích nhu cầu vận chuyển và đề xuất giải pháp phù hợp. Báo giá chi tiết, minh bạch.",
            "Bước 2: Đóng gói và nhận hàng - Hỗ trợ khách hàng trong việc đóng gói và kiểm tra hàng hóa trước khi vận chuyển.",
            "Bước 3: Thực hiện vận chuyển - Phối hợp với hãng tàu hoặc hãng hàng không để vận chuyển hàng hóa theo lịch trình đã cam kết.",
            "Bước 4: Giao hàng và hoàn tất thủ tục - Hỗ trợ khách hàng thông quan nhanh chóng. Giao hàng đến tận tay người nhận theo yêu cầu.",
            "Bước 5: Hỗ trợ và chăm sóc khách hàng về sau."
          ]
        },
        {
          title: "5. Green Service cam kết về dịch vụ",
          items: [
            "Chính xác về thời gian: Đảm bảo hàng hóa đến đúng lịch trình.",
            "An toàn tuyệt đối: Tránh những rủi ro hư hỏng hoặc thất lạc hàng hóa.",
            "Chi phí cạnh tranh: Cung cấp giải pháp vận chuyển tối ưu với giá thành hợp lý.",
            "Dịch vụ khách hàng tận tâm: Hỗ trợ 24/7, tư vấn và giải quyết mọi vấn đề phát sinh của khách hàng."
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
    color: rgb(50, 79, 122);
    font-family: Montserrat, sans-serif;
    font-size: 35px;
    font-weight: 700 !important;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active {
  transition: transform 0.4s ease-out, opacity 0.4s ease-out;
}
.slide-up-enter {
  transform: translateY(20px);
  opacity: 0;
}

.slide-right-enter-active {
  transition: transform 0.4s ease-out, opacity 0.4s ease-out;
}
.slide-right-enter {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
