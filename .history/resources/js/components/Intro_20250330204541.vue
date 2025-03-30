<template>
  <div class="section_introText" style="
    font-size: 60px;
    background-color: #f1f1f1;
    color: #AFB1B4; text-transform: uppercase;
">
    <marquee scrollamount="10"><strong >GreenService - Đồng hành cùng sự phát triển của doanh nghiệp bạn!
    </strong></marquee>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
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
      const elements = document.querySelectorAll(".slide-in, .animate-on-scroll");
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
  background: url('https://btnmt.1cdn.vn/2022/10/27/nha-may-rac-.png') no-repeat center center;
  background-size: cover;
  position: relative;
  padding: 60px 20px;
  color: white;
  width: 100%;
  text-align: center;
  font-family: Avo, sans-serif;
}

.green-background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(46, 125, 50, 0.8);
  z-index: 1;
}

.green_title2 {
  margin-top: 30px;
  text-align: center;
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
  margin-top: 15px;
  color: rgb(50, 79, 122);
  font-family: Montserrat, sans-serif;
  font-size: 35px;
  font-weight: 700 !important;
  text-align: center;
}

.full-width {
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.slide-in {
  opacity: 0;
  transition: opacity 1.5s ease, transform 1.5s ease;
  transform: translateX(-50px);
}

.slide-in.animate {
  opacity: 1;
  transform: translateX(0);
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

.vision-box,
.value-box {
  background: white;
  border-radius: 15px;
  padding: 15px;
  width: calc(20% - 10px);
  text-align: center;
  color: #2E7D32;
  border: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
  position: relative;
  z-index: 2;
}

.vision-box:hover,
.value-box:hover {
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

  .vision-box,
  .value-box {
    width: 100%;
    max-width: 100%;
  }
}

.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1.5s ease, transform 1.5s ease;
}

.animate-on-scroll.animate {
  opacity: 1;
  transform: translateY(0);
}
</style>