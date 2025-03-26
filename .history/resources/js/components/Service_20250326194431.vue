<template>
    <div class="container">
      <!-- Video bên trái -->
      <div ref="videoSection" class="video-section" :class="{ show: videoVisible }">
        <video autoplay loop muted playsinline>
          <source src="/images/chatthai.mp4" type="video/mp4" />
          Trình duyệt không hỗ trợ video.
        </video>
        <div class="overlay-text"></div>
        <div class="overlay-text">
            XỬ LÝ CHẤT THẢI
          
          <p style="font-size: 15px;">Giải pháp xử lý chất thải an toàn và hiệu quả.</p></div>
    
      </div>
  
      <!-- Nội dung bên phải -->
      <div ref="contentSection" class="content-section" :class="{ show: contentVisible }">
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
              <i class="fas fa-biohazard"></i> Xử lý chất thải nguy hại
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-medkit"></i> Xử lý chất thải y tế lây nhiễm
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
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    text-transform: uppercase;
    overflow: hidden;
    font-family: Montserrat, sans-serif;

  }
  
  /* Video bên trái */
  .video-section {
    flex: 1;
    position: relative;
    max-width: 50%;
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 1s ease, transform 1s ease;
  }
  
  .video-section video {
    width: 100%;
  }
  
  /* Overlay text trên video */
  .overlay-text {
    position: absolute;
    bottom: 0;
    left: 0;
    color: white;
    font-size: 2rem;
    text-transform: uppercase;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px;
    width: 100%;
  }
  
  /* Nội dung bên phải */
  .content-section {
    flex: 1;
    padding: 20px;
    opacity: 0;
    transform: translateX(100%);
    transition: opacity 1s ease, transform 1s ease;
  }
  
  /* Khi xuất hiện */
  .video-section.show {
    opacity: 1;
    transform: translateX(0);
  }
  
  .content-section.show {
    opacity: 1;
    transform: translateX(0);
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 15px;
  }
  
  /* Danh sách mục */
  ul {
    list-style: none;
    padding: 0;
  }
  
  ul li {
    margin-bottom: 10px;
  }
  
  /* Link */
  ul li a {
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    text-decoration: none;
    color: white;
    transition: color 0.3s;
  }
  
  ul li a:hover {
    color: rgb(180, 199, 4);
}
  
  /* Icon */
  ul li i {
    margin-right: 8px;
    font-size: 1.2rem;
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
  
    /* Điều chỉnh animation cho mobile */
    .video-section {
      transform: translateY(-50px);
    }
    
    .content-section {
      transform: translateY(50px);
    }
  
    .video-section.show, .content-section.show {
      transform: translateY(0);
    }
  }
  </style>
  