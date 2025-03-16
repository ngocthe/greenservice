<template>
  <div class="service-detail">
    <transition name="fade">
      <h1 class="title">Dịch Vụ Vận Tải Quốc Tế (Sea, Air)</h1>
    </transition>
    
    <transition name="slide-up">
      <p class="description">
        Dịch vụ vận tải Quốc Tế của Green Service ngày càng trở nên phổ biến. Trong bối cảnh hội nhập kinh tế toàn cầu, nhu cầu vận chuyển hàng hóa quốc tế ngày càng gia tăng. Dịch vụ vận tải quốc tế bằng đường biển (Sea Freight) và đường hàng không (Air Freight) của chúng tôi cung cấp giải pháp tối ưu, đảm bảo hàng hóa được vận chuyển nhanh chóng, an toàn và tiết kiệm chi phí.
      </p>
    </transition>

    <div class="section section-4">
      <transition name="slide-right" appear>
        <h2>4. Quy trình vận chuyển chuyên nghiệp tại Green Service</h2>
      </transition>
      <transition name="fade" appear>
        <div class="process-flow">
          <div class="step" v-for="(step, index) in steps" :key="index">
            {{ step }}
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        "Bước 1: Tư vấn và báo giá",
        "Bước 2: Đóng gói và nhận hàng",
        "Bước 3: Thực hiện vận chuyển",
        "Bước 4: Giao hàng và hoàn tất thủ tục",
        "Bước 5: Hỗ trợ và chăm sóc khách hàng"
      ]
    };
  }
};
</script>

<style scoped>
.process-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin: 30px 0;
}

.step {
  background-color: #2E7D32;
  color: white;
  padding: 15px 20px;
  border-radius: 10px;
  font-weight: bold;
  text-align: center;
  min-width: 180px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.process-flow .step:nth-child(1) { transition-delay: 0.1s; }
.process-flow .step:nth-child(2) { transition-delay: 0.2s; }
.process-flow .step:nth-child(3) { transition-delay: 0.3s; }
.process-flow .step:nth-child(4) { transition-delay: 0.4s; }
.process-flow .step:nth-child(5) { transition-delay: 0.5s; }

.process-flow.show .step {
  opacity: 1;
  transform: translateY(0);
}
</style>
