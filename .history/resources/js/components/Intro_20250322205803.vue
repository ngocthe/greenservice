<template>
  <div class="green-background text-center">
      <h4 class="section-title2 green_title2" :class="{ animate: isVisible }">_____ GREEN SERVICE _____</h4>
      <h2 class="section-title2 title_secon2" :class="{ animate: isVisible }">TẦM NHÌN SỨ MỆNH, <span style="color:green">GIÁ TRỊ CỐT LÕI </span></h2>
  
    <div class="video-container">
      <!-- Video Background -->
      <video autoplay loop muted playsinline>
        <source src="/images/background.mp4" type="video/mp4">
        Trình duyệt của bạn không hỗ trợ video.
      </video>
      <div class="overlay"></div>
  
      <!-- Nội dung chính -->
      <div class="content"> 
        <h2 class="section-title" :class="{ animate: isVisible }">_____ TẦM NHÌN - SỨ MỆNH _____</h2>
  
        <div class="vision-container">
          <div class="vision-box slide-left" v-for="(item, index) in visionMission" :key="index" :class="{ animate: isVisible }">
            <i :class="item.icon" class="icon"></i>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
  
        <h2 class="section-title" :class="{ animate: isVisible }">_____ GIÁ TRỊ CỐT LÕI _____</h2>
  
        <div class="values-container">
          <div class="value-box slide-right" v-for="(value, index) in coreValues" :key="index" :class="{ animate: isVisible }">
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
          { title: "Tận tâm", description: "Tạo dựng đội ngũ làm việc bằng trách nhiệm, nỗ lực và nhiệt huyết để đạt mục tiêu chung.", icon: "fas fa-heart", center: true }
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
  .green-background {
    background-color: #2E7D32;
    padding: 50px 0;
    color: white;
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
  
  .vision-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
  }
  
  .vision-box {
    background: white;
    border-radius: 12px;
    padding: 20px;
    width: 48%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    border: 2px solid #fff;
    color: #333;
  }
  
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
    text-align: center;
    border: 2px solid #fff;
    color: #333;
  }
  
  .value-box.center {
    width: 100%;
    text-align: center;
  }
  
  .icon {
    font-size: 32px;
    color: #fff;
    margin-bottom: 10px;
    opacity: 0;
    transform: scale(0.5);
    transition: opacity 1s ease, transform 0.8s ease;
  }
  </style>
  