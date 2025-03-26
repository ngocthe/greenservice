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

    <!-- Video bên phải với 2 ô chữ nhật dọc -->
    <div class="video-wrapper">
      <video autoplay loop muted playsinline>
        <source src="/images/intro.mp4" type="video/mp4" />
        Trình duyệt không hỗ trợ video.
      </video>
      <div class="mask"></div> <!-- Lớp mask với 2 ô chữ nhật dọc -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentVisible: false
    };
  },
  methods: {
    checkScroll() {
      let contentPosition = this.$refs.contentSection.getBoundingClientRect().top;
      let screenPosition = window.innerHeight / 1.3;

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
  justify-content: space-between;
  max-width: 1200px;
  height: 450px;
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
    0% 0%, 100% 0%, 100% 100%, 0% 100%, 
    30% 0%, 40% 0%, 40% 100%, 30% 100%,
    60% 0%, 70% 0%, 70% 100%, 60% 100%
  );
  border-radius: 10px;
}

/* Khi xuất hiện */
.content-section.show {
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
