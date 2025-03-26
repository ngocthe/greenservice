<template>
  <div class="container">
    <!-- Video bên trái -->
    <div ref="videoSection" class="video-section" :class="{ show: videoVisible }">
      <video autoplay loop muted playsinline>
        <source src="/images/log.mp4" type="video/mp4" />
        Trình duyệt không hỗ trợ video.
      </video>
      <div class="overlay-text">LOGISTICS</div>
    </div>

    <!-- Nội dung bên phải -->
    <div ref="contentSection" class="content-section" :class="{ show: contentVisible }">
      <p>Dịch vụ vận chuyển và lưu kho chuyên nghiệp.</p>
      <ul>
        <li>
          <a href="#">
            <i class="fas fa-ship"></i> Vận tải quốc tế (Sea, Air)
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-truck"></i> Chuyển phát nhanh quốc tế
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-file-alt"></i> Xin CO
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-user-tie"></i> Tư vấn hải quan
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-file-contract"></i> Thủ tục hải quan xuất - nhập khẩu
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-industry"></i> Thanh khoản hàng gia công, sản xuất xuất khẩu
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-truck-moving"></i> Vận tải nội địa
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-warehouse"></i> Dịch vụ kho bãi
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
  overflow: hidden;
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
  border-radius: 10px;
}

/* Overlay text trên video */
.overlay-text {
  position: absolute;
  bottom: 0;
  left: 0
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.5);
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

/* Danh sách dịch vụ */
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
  color: #007bff;
  transition: color 0.3s;
}

ul li a:hover {
  color: #0056b3;
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
