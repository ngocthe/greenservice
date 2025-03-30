<template>
  <div class="container">
    <!-- Nội dung bên trái -->
    <div ref="contentSection" class="content-section" :class="{ show: contentVisible }">
      <h2>TẠI SAO NÊN CHỌN <span class="highlight">GREENSERVICE</span>?</h2>
      <ul>
        <li><i class="fas fa-check-circle"></i> 15 năm kinh nghiệm trong lĩnh vực môi trường, xử lý chất thải, logistics, tiêu hủy hàng lỗi.</li>
        <li><i class="fas fa-check-circle"></i> Giải pháp toàn diện, tối ưu, đáp ứng nhu cầu đa dạng của khách hàng.</li>
        <li><i class="fas fa-check-circle"></i> Đội ngũ chuyên nghiệp, công nghệ hiện đại, đảm bảo chất lượng.</li>
        <li><i class="fas fa-check-circle"></i> Giá trị vượt trội, tối ưu chi phí, nâng cao hiệu quả hoạt động.</li>
        <li><i class="fas fa-check-circle"></i> Cam kết phục vụ đam mê & nhiệt huyết, tuân thủ quy định môi trường.</li>
      </ul>
    </div>

    <!-- Video bên phải -->
    <div ref="videoSection" class="video-wrapper" :class="{ show: videoVisible }">
      <video autoplay loop muted playsinline>
        <source src="/images/BANNER.mp4" type="video/mp4" />
        Trình duyệt không hỗ trợ video.
      </video>
      <div class="video-mask"></div> <!-- Lớp mask với 2 ô chữ nhật -->
      <div class="video-mask2"></div> <!-- Lớp mask với 2 ô chữ nhật -->

    </div>
    <div class="section_introText">
      <marquee scrollamount="10"><strong>RESPONSIBILITY - LEARNING - SHARING - CONNECTING - EFFECTIVENESS</strong></marquee>
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
/* Layout container */
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 800px;
  position: relative;
  background-color: #2E7D32;
}

/* Nội dung bên trái */
.content-section {
  flex: 1;
  height: 100%;
  padding: 60px;
  color: white;
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 1s ease, transform 1s ease;
}

.content-section h2 {
  font-size: 2.5rem;
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
  font-size: 1.3rem;
  margin-bottom: 16px;
}

/* Icon check */
.content-section ul li i {
  color: #ffd700;
  font-size: 1.5rem;
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
}

/* Lớp mask với 2 ô chữ nhật */
.video-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #2E7D32;
  clip-path: polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%);

}

.video-mask2 {
  position: absolute;
  top: 50;
  left: 50;
  width: 50%;
  height: 50%;
  background-color: #2E7D32;
  clip-path: polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%);

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
@media (max-width: 1024px) {
  .container {
    flex-direction: column;
    height: auto;
  }

  .content-section, .video-wrapper {
    width: 100%;
    height: 400px;
    padding: 30px;
    text-align: center;
  }

  .video-mask {
    clip-path: polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%);

  }
  .video-mask2 {
    clip-path: polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%);

  }
}
</style>
