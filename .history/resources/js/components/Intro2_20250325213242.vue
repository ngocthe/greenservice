<template>
  <div class="container">
    <!-- Nội dung bên trái -->
    <div ref="contentSection" class="content-section" :class="{ show: contentVisible }">
      <h2>Tại sao nên chọn <span class="highlight">GreenService</span>?</h2>
      <ul>
        <li>
          <i class="fas fa-check-circle"></i> 15 năm kinh nghiệm trong lĩnh vực môi trường, xử lý chất thải, logistics, tiêu hủy hàng lỗi, hỏng và nhiều dịch vụ khác.
        </li>
        <li>
          <i class="fas fa-check-circle"></i> Cung cấp giải pháp toàn diện, tối ưu, đáp ứng nhu cầu đa dạng của khách hàng.
        </li>
        <li>
          <i class="fas fa-check-circle"></i> Đội ngũ chuyên nghiệp, tận tâm, cùng hệ thống công nghệ hiện đại đảm bảo chất lượng dịch vụ.
        </li>
        <li>
          <i class="fas fa-check-circle"></i> Mang đến giá trị vượt trội, giúp khách hàng tối ưu chi phí và nâng cao hiệu quả hoạt động.
        </li>
        <li>
          <i class="fas fa-check-circle"></i> Cam kết phục vụ bằng đam mê & nhiệt huyết, tuân thủ chặt chẽ các quy định về môi trường.
        </li>
        <li>
          <i class="fas fa-check-circle"></i> Sẵn sàng hợp tác với đối tác trong & ngoài nước, cùng phát triển bền vững.
        </li>
        <li>
          <i class="fas fa-check-circle"></i> Nhà máy xử lý chất thải đạt tiêu chuẩn, được trang bị hệ thống xử lý hiện đại, công suất lớn, đảm bảo tuân thủ các quy định nghiêm ngặt của pháp luật về môi trường.
        </li>
      </ul>
    </div>

    <!-- Video bên phải -->
    <div ref="videoSection" class="video-section" :class="{ show: videoVisible }">
      <video autoplay loop muted playsinline>
        <source src="/images/intro.mp4" type="video/mp4" />
        Trình duyệt không hỗ trợ video.
      </video>
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
      let contentPosition = this.$refs.contentSection.getBoundingClientRect().top;
      let videoPosition = this.$refs.videoSection.getBoundingClientRect().top;
      let screenPosition = window.innerHeight / 1.3;

      if (contentPosition < screenPosition) {
        this.contentVisible = true;
      }
      if (videoPosition < screenPosition) {
        this.videoVisible = true;
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

/* Nội dung bên trái */
.content-section {
  flex: 1;
  padding: 20px;
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 1s ease, transform 1s ease;
}

.content-section h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.highlight {
  color: #007bff;
}

/* Danh sách */
.content-section ul {
  list-style: none;
  padding: 0;
}

.content-section ul li {
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  margin-bottom: 12px;
}

/* Icon check */
.content-section ul li i {
  color: #28a745;
  font-size: 1.2rem;
  margin-right: 10px;
}

/* Video bên phải */
.video-section {
  flex: 1;
  position: relative;
  max-width: 50%;
  opacity: 0;
  transform: translateX(100%);
  transition: opacity 1s ease, transform 1s ease;
}

.video-section video {
  width: 100%;
  border-radius: 10px;
}

/* Khi xuất hiện */
.content-section.show {
  opacity: 1;
  transform: translateX(0);
}

.video-section.show {
  opacity: 1;
  transform: translateX(0);
}

/* Responsive */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .content-section, .video-section {
    max-width: 100%;
    text-align: center;
  }

  .video-section video {
    border-radius: 10px;
  }

  /* Animation trên mobile */
  .content-section {
    transform: translateY(-50px);
  }
  
  .video-section {
    transform: translateY(50px);
  }

  .content-section.show, .video-section.show {
    transform: translateY(0);
  }
}
</style>
