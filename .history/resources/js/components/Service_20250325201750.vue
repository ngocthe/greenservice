<template>
    <div class="container">
      <div class="video-section">
        <video autoplay loop muted playsinline>
          <source src="/images/backservice.mp4" type="video/mp4" />
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
    max-width: 1200px;
    margin: auto;
    padding: 40px 20px;
  }
  
  .video-section {
    flex: 1;
    position: relative;
    max-width: 50%;
  }
  
  .video-section video {
    width: 100%;
    border-radius: 10px;
  }
  
  .content-section {
    flex: 1;
    padding: 20px;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 1s ease, transform 1s ease;
  }
  
  .content-section.show {
    opacity: 1;
    transform: translateY(0);
  }
  
  h2 {
    font-size: 2rem;
    color: #28a745;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 15px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  ul li {
    font-size: 1.1rem;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
  
  ul li::before {
    content: "✔";
    color: #28a745;
    font-weight: bold;
    margin-right: 8px;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }
    
    .video-section, .content-section {
      max-width: 100%;
      text-align: center;
    }
  
    .content-section {
      padding-top: 20px;
    }
  }
  </style>
  