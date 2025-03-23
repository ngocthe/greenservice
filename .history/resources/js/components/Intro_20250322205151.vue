<template>
<div style="text-align:center">
    <h4 class="section-title2 green_title2" style="" :class="{ animate: isVisible }">_____ GREEN SERVICE _____</h4>
    <h2 class="section-title2 title_secon2"  :class="{ animate: isVisible }">TẦM NHÌN SỨ MỆNH, <span style="color:green">GIÁ TRỊ CỐT LÕI </span></h2>

  <div class="video-container" style="padding:10px">
    <!-- Video Background -->
    <video autoplay loop muted playsinline>
      <source src="/images/backgroundlog.mp4" type="video/mp4">
      Trình duyệt của bạn không hỗ trợ video.
    </video>
    <div class="overlay"></div>

    <!-- Nội dung chính -->
    <div class="content" > 
      <h2 class="section-title" :class="{ animate: isVisible }">_____ TẦM NHÌN - SỨ MỆNH _____</h2>

      <div class="vision-container">
        <div class="vision-box" v-for="(item, index) in visionMission" :key="index" :class="{ animate: isVisible }">
          <i :class="item.icon" class="icon"></i>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>

      <h2 style="margin-top:10px" class="section-title" :class="{ animate: isVisible }">_____ GIÁ TRỊ CỐT LÕI _____</h2>

      <div class="values-container">
        <div class="value-box" v-for="(value, index) in coreValues" :key="index" :class="{ animate: isVisible }">
          <i :class="value.icon" class="icon"></i>
          <h3>{{ value.title }}</h3>
          <p>{{ value.description }}</p>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      visionMission: [
        { title: "TẦM NHÌN", description: "Trở thành doanh nghiệp logistics cung cấp giải pháp toàn diện mang đến giá trị cao nhất cho khách hàng.", icon: "fas fa-eye" },
        { title: "SỨ MỆNH", description: "Tối ưu hóa, xanh hóa các dịch vụ logistics góp phần tiết kiệm chi phí và phát triển kinh tế bền vững.", icon: "fas fa-hand-holding-heart" }
      ],
      coreValues: [
        { title: "Uy tín", description: "Giữ cam kết và sự tín nhiệm đối với khách hàng, đối tác, cổ đông và cộng đồng.", icon: "fas fa-shield-alt" },
        { title: "Chia sẻ", description: "Cùng nhau phát triển bền vững dựa trên nguyên tắc chia sẻ giữa các bên.", icon: "fas fa-handshake" },
        { title: "Đổi mới", description: "Không ngừng học hỏi để đổi mới tư duy, tìm kiếm các giải pháp đột phá, sáng tạo.", icon: "fas fa-lightbulb" },
        { title: "Chuyên nghiệp", description: "Xây dựng đội ngũ với thái độ, kiến thức, kỹ năng chuẩn mực trong công việc.", icon: "fas fa-user-tie" },
        { title: "Tận tâm", description: "Tạo dựng đội ngũ làm việc bằng trách nhiệm, nỗ lực và nhiệt huyết để đạt mục tiêu chung.", icon: "fas fa-heart" }
      ]
    };
  },
  mounted() {
    window.addEventListener('scroll', this.checkScroll);
    this.checkScroll();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkScroll);
  },
  methods: {
    checkScroll() {
      if (window.scrollY > 330) {
        this.isVisible = true;
      }
      const elements = document.querySelectorAll(".slide-left, .slide-right");
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("animate");
            }
        });
    }
  }
};
</script>

<style scoped>
/* Video Background */
.video-container {
  font-family: Montserrat, sans-serif;
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.video-container video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 128, 0, 0.5); /* Xanh với độ trong suốt */
}

/* Nội dung */
.content {
  position: relative;
  z-index: 2;
  width: 90%;
  max-width: 1100px;
  color: #2E7D32; /* Màu xanh đậm */
  padding: 20px;
}

/* Tiêu đề */
.section-title {
  font-size: 28px;
  margin-bottom: 20px;
  font-weight: bold;
  opacity: 0;
  transform: translateY(-50px);
  transition: opacity 1s ease, transform 1s ease;
  color:White;
}

.section-title.animate {
  opacity: 1;
  transform: translateY(0);
}

/* Card Vision & Mission */
.vision-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.vision-box {
  background: white;
  border-radius: 12px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.6s ease-in-out;
  opacity: 0;
  transform: translateY(50px);
  border: 2px solid #2E7D32; /* Viền xanh */
  color: #333; /* Chữ màu đen đậm */
}

.vision-box.animate {
  opacity: 1;
  transform: translateY(0);
}

.vision-box:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  border-color: #1B5E20; /* Viền xanh đậm hơn khi hover */
}

/* Card Giá Trị Cốt Lõi */
.values-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.value-box {
  background: white;
  border-radius: 12px;
  padding: 20px;
  width: 250px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.6s ease-in-out;
  border: 2px solid #2E7D32; /* Viền xanh */
  color: #333; /* Chữ màu đen */
}

.value-box.animate {
  opacity: 1;
  transform: translateY(0);
}

.value-box:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  border-color: #1B5E20;
}

/* Biểu tượng */
.icon {
  font-size: 32px;
  color: #2E7D32;
  margin-bottom: 10px;
  opacity: 0;
  transform: scale(0.5);
  transition: opacity 1s ease, transform 0.8s ease;
}

.vision-box.animate .icon, .value-box.animate .icon {
  opacity: 1;
  transform: scale(1);
}

/* Responsive */
@media (max-width: 768px) {
  .vision-box, .value-box {
    width: 100%;
  }
}

/* Tiêu đề */
.section-title2 {
    font-size: 32px;
    color: #2E7D32;
    margin-bottom: 40px;
    font-weight: bold;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 1s ease, transform 1s ease;
}
.section-title2.animate {
    opacity: 1;
    transform: translateY(0);
}
.green_title2 {
color: rgb(16, 129, 64);
    font-family: Avo, sans-serif;
    font-size: 18px;
    font-weight: 500;
    text-transform: none;
    font-style: normal;
    line-height: 1.4em;
    letter-spacing: 0px;
    text-decoration: none;
}
.title_secon2 {

    color: rgb(50, 79, 122);
    font-family: Montserrat, sans-serif;
    font-size: 35px;
    font-weight: 700 !important;
}
/* Hiệu ứng trượt từ trái/phải */
.slide-left {
  opacity: 0;
  transform: translateX(-100px);
  transition: opacity 1s ease, transform 1s ease;
}

.slide-right {
  opacity: 0;
  transform: translateX(100px);
  transition: opacity 1s ease, transform 1s ease;
}

.slide-left.animate, .slide-right.animate {
  opacity: 1;
  transform: translateX(0);
}

/* Hiệu ứng biểu tượng */
.icon {
  font-size: 32px;
  color: #2E7D32;
  margin-bottom: 10px;
  opacity: 0;
  transform: scale(0.5);
  transition: opacity 1s ease, transform 0.8s ease;
}

.vision-box.animate .icon, .value-box.animate .icon {
  opacity: 1;
  transform: scale(1);
}

</style>
