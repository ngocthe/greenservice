<template>
  <div class="container">
    <!-- Video bên trái -->
    <div ref="videoSection" class="video-section" :class="{ show: videoVisible }">
      <video autoplay loop muted playsinline>
        <source src="/images/tieuhuy2.mp4" type="video/mp4" />
        Trình duyệt không hỗ trợ video.
      </video>
      <div class="overlay-text">
        <div class="overlay-text">TIÊU HỦY HÀNG LỖI
          <p style="font-size: 15px;"> Đảm bảo hàng lỗi được xử lý an toàn.</p>
        </div>
       
      </div>
    </div>

    <!-- Nội dung bên phải -->
    <div ref="contentSection" class="content-section" :class="{ show: contentVisible }">
      <ul>
        <li>
          <a href="#">
            <i class="fas fa-box-open"></i> Hàng nhập khẩu bị lỗi, hư hỏng
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-exclamation-triangle"></i> Hàng vi phạm quy định nhập khẩu
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-recycle"></i> Hàng hóa bị thu hồi
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-utensils"></i> Thực phẩm, mỹ phẩm, dược phẩm quá hạn
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-gavel"></i> Hàng nhái, hàng giả, hàng vi phạm sở hữu trí tuệ
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
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 40px 20px;
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

/* Overlay chứa tiêu đề và mô tả */
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


/* Tiêu đề "TIÊU HỦY HÀNG LỖI" */
.overlay-title {
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
}

/* Mô tả "Đảm bảo hàng lỗi được xử lý an toàn." */
.overlay-subtitle {
  color: white;
  font-size: 1rem;
  margin-top: 5px;
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
  color: #2E7D32;
  transition: color 0.3s;
}

ul li a:hover {
  color: rgb(8, 155, 54);
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
