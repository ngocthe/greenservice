<template>
  <div class="intro-container" v-scroll-reveal>
    <section class="section">
      <h2 class="section-title">TẦM NHÌN - SỨ MỆNH</h2>
      <div class="vision-mission">
        <div class="content-box left" v-scroll-reveal>
          <h3 class="subtitle">TẦM NHÌN</h3>
          <p class="text">Trở thành doanh nghiệp logistics cung cấp giải pháp toàn diện mang đến giá trị cao nhất cho khách hàng.</p>
        </div>
        <div class="content-box right" v-scroll-reveal>
          <h3 class="subtitle">SỨ MỆNH</h3>
          <p class="text">Tối ưu hóa, xanh hóa các dịch vụ logistics góp phần tiết kiệm chi phí và phát triển kinh tế bền vững.</p>
        </div>
      </div>
    </section>
    
    <section class="section">
      <h2 class="section-title">GIÁ TRỊ CỐT LÕI</h2>
      <div class="values-grid">
        <div 
          class="value-item" 
          v-for="(value, index) in coreValues" 
          :key="index"
          :class="{ center: value.title === 'Tận tâm' }"
          v-scroll-reveal
        >
          <h3 class="subtitle">{{ value.title }}</h3>
          <p class="text">{{ value.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coreValues: [
        { title: "Uy tín", description: "Giữ cam kết và sự tín nhiệm đối với khách hàng, đối tác, cổ đông và cộng đồng." },
        { title: "Chia sẻ", description: "Cùng nhau phát triển bền vững dựa trên nguyên tắc chia sẻ giữa các bên." },
        { title: "Đổi mới", description: "Không ngừng học hỏi để đổi mới tư duy, tìm kiếm các giải pháp đột phá, sáng tạo." },
        { title: "Chuyên nghiệp", description: "Xây dựng đội ngũ với thái độ, kiến thức, kỹ năng chuẩn mực trong công việc." },
        { title: "Tận tâm", description: "Tạo dựng đội ngũ làm việc bằng trách nhiệm, nỗ lực và nhiệt huyết để đạt mục tiêu chung." }
      ]
    };
  }
};
</script>

<style scoped>
.intro-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
  background: green;
  color: white;
  border-radius: 10px;
  padding: 30px;
}
.section {
  margin-bottom: 40px;
}
.section-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;
}
.vision-mission {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.subtitle {
  font-size: 20px;
  font-weight: bold;
}
.text {
  font-size: 16px;
  margin-top: 5px;
}
.content-box {
  background: rgba(255, 255, 255, 0.2);
  padding: 15px;
  border-radius: 8px;
  transition: transform 0.3s ease;
  width: 48%;
}
.content-box.left {
  transform: translateX(-50px);
  opacity: 0;
  transition: all 0.6s ease-in-out;
}
.content-box.right {
  transform: translateX(50px);
  opacity: 0;
  transition: all 0.6s ease-in-out;
}
.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
}
.value-item {
  background: rgba(255, 255, 255, 0.2);
  padding: 15px;
  border-radius: 8px;
  transition: transform 0.3s ease;
}
.value-item.center {
  grid-column: span 2;
  text-align: center;
}
.value-item:hover {
  transform: scale(1.05);
}
</style>
