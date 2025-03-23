<template>
  <div class="green-background text-center full-width">
    <div class="bg-overlay">
      <h4 class="section-title2 green_title2" :class="{ animate: isVisible }">_____ GREEN SERVICE _____</h4>
      <h2 class="section-title2 title_secon2" :class="{ animate: isVisible }">TẦM NHÌN SỨ MỆNH, <span style="color:white">GIÁ TRỊ CỐT LÕI </span></h2>
  
      <div class="content "> 
        <h2 class="section-title" :class="{ animate: isVisible }">_____ TẦM NHÌN - SỨ MỆNH _____</h2>
  
        <div class="vision-container">
          <div class="vision-box slide-in" v-for="(item, index) in visionMission" :key="index" :class="{ animate: isVisible }">
            <i :class="item.icon" class="icon green-icon"></i>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
  
        <h2 class="section-title" :class="{ animate: isVisible }">_____ GIÁ TRỊ CỐT LÕI _____</h2>
  
        <div class="values-container compact">
          <div class="value-box slide-in" v-for="(value, index) in coreValues" :key="index" :class="{ animate: isVisible }">
            <i :class="value.icon" class="icon green-icon"></i>
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
        const elements = document.querySelectorAll(".slide-in");
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
    padding: 60px 20px;
    color: white;
    width: 100%;
    text-align: center;
    font-family: Montserrat, sans-serif;
    background: url('https://btnmt.1cdn.vn/2022/10/27/nha-may-rac-.png') no-repeat center center;
    background-size: cover;
    position: relative;
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .bg-overlay {
    background: rgba(46, 125, 50, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  

  .full-width {
    width: 100%;
    margin: 0 auto;
  }
  
  .slide-in {
    opacity: 0;
    transition: opacity 1.5s ease, transform 1.5s ease;
    transform: scale(0.8);
  }
  
  .slide-in.animate {
    opacity: 1;
    transform: scale(1);
  }
  
  .vision-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
  }
  
  .values-container.compact {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .vision-box, .value-box {
    background: white;
    border-radius: 15px;
    padding: 15px;
    width: calc(20% - 10px);
    text-align: center;
    color: #2E7D32;
    border: none;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease;
  }
  
  .vision-box:hover, .value-box:hover {
    transform: translateY(-5px);
  }
  
  .icon {
    font-size: 30px;
    margin-bottom: 10px;
  }
  
  .green-icon {
    color: #2E7D32;
  }
  
  @media (max-width: 768px) {
    .vision-box, .value-box {
      width: 100%;
      max-width: 100%;
    }
  }
  </style>
  