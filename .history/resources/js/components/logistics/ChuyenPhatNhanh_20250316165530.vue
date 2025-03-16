<template>
  <div class="service-detail">
    <transition name="fade">
      <h1 class="title">DỊCH VỤ CHUYỂN PHÁT NHANH QUỐC TẾ - NHANH CHÓNG, AN TOÀN, TIẾT KIỆM</h1>
    </transition>
    
    <transition name="slide-up">
      <p class="description">
        Dịch vụ chuyển phát nhanh quốc tế tại Green Service giúp bạn gửi hàng đi nước ngoài một cách an toàn và nhanh chóng với thời gian ngắn nhất, thủ tục đơn giản và chi phí cạnh tranh.
      </p>
    </transition>

    <div class="section" v-for="(section, index) in sections" :key="index">
      <transition name="slide-right" appear>
        <h2>{{ section.title }}</h2>
      </transition>
      <transition name="fade" appear>
        <ul v-if="section.content.length">
          <li v-for="(item, idx) in section.content" :key="idx">{{ item }}</li>
        </ul>
      </transition>
    </div>

    <div class="process-flow">
      <transition name="fade" appear>
        <div v-for="(step, index) in processSteps" :key="index" class="step">{{ step }}</div>
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
          title: "1. Dịch Vụ Chuyển Phát Nhanh Quốc Tế Là Gì?",
          content: [
            "Dịch vụ vận chuyển hàng hóa, bưu phẩm nhanh chóng giữa các quốc gia.",
            "Green Service đảm bảo an toàn, đúng hẹn, tiết kiệm."
          ]
        },
        {
          title: "2. Ưu Điểm Khi Sử Dụng Dịch Vụ",
          content: [
            "Thời gian giao hàng nhanh chỉ từ 1 - 5 ngày.",
            "Hỗ trợ thủ tục hải quan nhanh chóng.",
            "Theo dõi đơn hàng trực tuyến 24/7.",
            "Giao hàng tận nơi an toàn.",
            "Bảo hiểm hàng hóa toàn diện."
          ]
        },
        {
          title: "3. Các Loại Hàng Hóa phổ biến",
          content: [
            "Tài liệu, chứng từ quan trọng.",
            "Hàng hóa thương mại: quần áo, giày dép, điện tử.",
            "Hàng cá nhân, quà tặng.",
            "Hàng dễ vỡ, giá trị cao như trang sức.",
            "Thực phẩm khô, dược phẩm đạt tiêu chuẩn kiểm định."
          ]
        }
      ],
      processSteps: [
        "Bước 1: Tiếp nhận & tư vấn",
        "Bước 2: Đóng gói & nhận hàng",
        "Bước 3: Khai báo hải quan & vận chuyển",
        "Bước 4: Giao hàng & xác nhận"
      ]
    };
  }
};
</script>

<style scoped>
.service-detail {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

.title {
  text-align: center;
  color: #2E7D32;
  font-weight: bold;
}

.description {
  text-align: center;
  margin-bottom: 20px;
}

.section {
  margin-bottom: 30px;
  padding: 15px;
  background: #e8f5e9;
  border-radius: 8px;
}

.process-flow {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.step {
  background-color: #2E7D32;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.slide-right-enter-active {
  transition: transform 0.5s ease-out;
}

.slide-right-enter {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
