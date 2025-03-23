<template>
  <div>
   <h4 class="section-title2 green_title2" ref="title1" :class="{ animate: isTitleVisible }" style="position: relative; z-index: 2;">_____ GREEN SERVICE _____</h4>
    <h2 class="section-title2 title_secon2" ref="title2" :class="{ animate: isTitleVisible }" style="position: relative; z-index: 2;">TẦM NHÌN SỨ MỆNH, <span style="color:green">GIÁ TRỊ CỐT LÕI </span></h2>

  <div class="green-background text-center full-width">
      
      <div class="content"> 
        <h2 class="section-title" ref="title3" :class="{ animate: isTitleVisible }" style="position: relative; z-index: 2;">_____ TẦM NHÌN - SỨ MỆNH _____</h2>
  
        <div class="vision-container">
          <div class="vision-box slide-in" v-for="(item, index) in visionMission" :key="index" :class="{ animate: isVisible }">
            <i :class="item.icon" class="icon green-icon"></i>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
  
        <h2 class="section-title" ref="title4" :class="{ animate: isTitleVisible }" style="position: relative; z-index: 2;margin-top:15px">_____ GIÁ TRỊ CỐT LÕI _____</h2>
  
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
      isTitleVisible: false,
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
    this.observeElements();
  },
  methods: {
    observeElements() {
      const options = { threshold: 0.3 };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.isTitleVisible = true;
            observer.unobserve(entry.target);
          }
        });
      }, options);

      observer.observe(this.$refs.title1);
      observer.observe(this.$refs.title2);
      observer.observe(this.$refs.title3);
      observer.observe(this.$refs.title4);
    }
  }
};
</script>

<style scoped>
.animate {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

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

.section-title2 {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1.5s ease, transform 1.5s ease;
}
</style>
