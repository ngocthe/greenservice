<template>
  <div class="container">
    <!-- Nội dung bên trái -->
    <div ref="contentSection" class="content-section" :class="{ show: contentVisible }">
      <h2>Tại sao nên chọn <span class="highlight">GreenService</span>?</h2>
      <ul>
        <li><i class="fas fa-check-circle"></i> 15 năm kinh nghiệm trong lĩnh vực môi trường, xử lý chất thải, logistics, tiêu hủy hàng lỗi.</li>
        <li><i class="fas fa-check-circle"></i> Cung cấp giải pháp toàn diện, tối ưu, đáp ứng nhu cầu đa dạng.</li>
        <li><i class="fas fa-check-circle"></i> Đội ngũ chuyên nghiệp, tận tâm, hệ thống công nghệ hiện đại.</li>
        <li><i class="fas fa-check-circle"></i> Cam kết tuân thủ chặt chẽ các quy định về môi trường.</li>
        <li><i class="fas fa-check-circle"></i> Nhà máy xử lý chất thải đạt tiêu chuẩn, công suất lớn.</li>
      </ul>
    </div>

    <!-- Video bên phải -->
    <div ref="videoSection" class="video-wrapper" :class="{ show: videoVisible }">
      <video autoplay loop muted playsinline>
        <source src="/images/intro.mp4" type="video/mp4" />
        Trình duyệt không hỗ trợ video.
      </video>
      <div class="mask"></div> <!-- Hai ô chữ nhật lộ video -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentVisible: false,
      videoVisible: false
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
/* Chia đôi màn hình 50% - 50% */
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  height: 500px;
  margin: auto;
  padding: 40px 20px;
  overflow: hidden;
  position: relative;
}

/* Nội dung bên trái */
.content-section {
  flex: 1;
  height: 100%;
  padding: 40px;
  background-color: rgba(34, 139, 34, 0.9); /* Nền xanh lá */
  color: white;
  border-radius: 10px;
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
  color: #ffd700;
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
  color: #ffd700;
  font-size: 1.2rem;
  margin-right: 10px;
}

/* Video bên phải */
.video-wrapper {
  flex: 1;
  height: 100%;
  position: relative;
  opacity: 0;
  transform: translateX(100%);
  transition: opacity 1s ease, transform 1s ease;
}

/* Video */
.video-wrapper video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

/* Lớp mask với 2 ô chữ nhật dọc */
.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(34, 139, 34, 0.9); /* Nền xanh lá */
  clip-path: polygon(
    0% 0%, 100% 0%, 100% 100%, 0% 100%, /* Nền chính */
    28% 0%, 38% 0%, 38% 100%, 28% 100%, /* Ô chữ nhật đầu tiên */
    62% 0%, 72% 0%, 72% 100%, 62% 100%  /* Ô chữ nhật thứ hai */
  );
  border-radius: 10px;
}

/* Khi xuất hiện */
.content-section.show {
  opacity: 1;
  transform: translateX(0);
}

.video-wrapper.show {
  opacity: 1;
  transform: translateX(0);
}

/* Responsive */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    height: auto;
  }

  .content-section, .video-wrapper {
    width: 100%;
    height: 300px;
    text-align: center;
  }

  .video-wrapper {
    height: 250px;
  }
}
</style>
