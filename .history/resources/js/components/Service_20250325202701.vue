<template>
    <div class="container">
      <!-- Video bên trái -->
      <div ref="videoSection" class="video-section" :class="{ show: videoVisible }">
        <video autoplay loop muted playsinline>
          <source src="waste-management.mp4" type="video/mp4" />
          Trình duyệt không hỗ trợ video.
        </video>
        <div class="video-overlay">
          <h2>XỬ LÝ CHẤT THẢI</h2>
        </div>
      </div>
  
      <!-- Nội dung bên phải -->
      <div ref="contentSection" class="content-section" :class="{ show: contentVisible }">
        <p>Giải pháp xử lý chất thải an toàn và hiệu quả.</p>
        <ul>
          <li>
            <a href="#">
              <i class="fas fa-leaf"></i> Tư vấn dịch vụ môi trường
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-recycle"></i> Tư vấn quy trình xử lý chất thải
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-trash-alt"></i> Xử lý chất thải thông thường
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-skull-crossbones"></i> Xử lý chất thải nguy hại
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-notes-medical"></i> Xử lý chất thải y tế lây nhiễm
            </a>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        videoVisible: false,
        contentVisible: false
      };
    },
    methods: {
      checkScroll() {
        let videoPosition = this.$refs.videoSection.getBoundingClientRect().top;
        let contentPosition = this.$refs.contentSection.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;
  
        if (videoPosition < screenPosition) {
          this.videoVisible = true;
        }
        if (contentPosition < screenPosition) {
          this.contentVisible = true;
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
    max-width: 1200px;
    margin: auto;
    padding: 40px 20px;
    overflow: hidden
  