<template>
    <div class="container">
      <div class="video-section">
        <video autoplay loop muted playsinline>
          <source src="waste-management.mp4" type="video/mp4" />
          Trình duyệt không hỗ trợ video.
        </video>
      </div>
  
      <div ref="contentSection" class="content-section" :class="{ show: isVisible }">
        <h2>Xử lý chất thải</h2>
        <p>Giải pháp xử lý chất thải an toàn và hiệu quả.</p>
        <ul>
          <li>✔ Tư vấn dịch vụ môi trường</li>
          <li>✔ Tư vấn quy trình xử lý chất thải</li>
          <li>✔ Xử lý chất thải thông thường</li>
          <li>✔ Xử lý chất thải nguy hại</li>
          <li>✔ Xử lý chất thải y tế lây nhiễm</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isVisible: false
      };
    },
    methods: {
      checkScroll() {
        let position = this.$refs.contentSection.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
          this.isVisible = true;
        }
      }
    },
    mounted() {
      window.addEventListener("scroll", this.checkScroll);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.checkScroll);
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width:
  