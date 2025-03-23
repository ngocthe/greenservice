<template>
  <div class="about-container">
    <div class="about-content">
      <div class="image-wrapper" style="padding:15px;background: #2E7D32;">
        <p class="fade-left title" ref="title" style="
        color: rgb(242 242 244);
    font-family: Montserrat, sans-serif;
    font-size: 32px;
    font-weight: 700 !important;">CÔNG TY CỔ PHẦN GREENSERVICE</p>       
        <p class="fade-right delay-3" ref="description" style="color: rgb(242 242 244);
    font-family: Montserrat, sans-serif;
    font-size: 15px;
    font-weight: 400 !important;">
          Công ty TNHH Môi trường Ngôi Sao Xanh tiền thân là công ty
          TMDV & Môi trường Ngôi Sao Xanh, được thành lập tháng 4 năm
          2006 với trụ sở chính tại Thành phố Bắc Ninh. Ngôi sao xanh cũng
          là một trong những đơn vị tiên phong trong lĩnh vực xử lý môi
          trường tại Việt Nam.
        </p>
      </div>
      <div class="text-wrapper">
        <h2 class="fade-left" ref="heading">Tại sao nên chọn GreenService?</h2>
        <ul>
          <li class="fade-in delay-1" ref="listItem">✔ <strong>15 năm kinh nghiệm</strong> trong lĩnh vực logistics.</li>
          <li class="fade-in delay-2">✔ Cung cấp giải pháp toàn diện và dịch vụ tối ưu.</li>
          <li class="fade-in delay-3">✔ Đội ngũ **chuyên nghiệp, tận tâm**, hệ thống hiện đại.</li>
          <li class="fade-in delay-4">✔ Mang đến **giá trị vượt trội** cho khách hàng.</li>
          <li class="fade-in delay-5">✔ Cam kết **phục vụ bằng đam mê & nhiệt huyết**.</li>
          <li class="fade-in delay-6">✔ **Sẵn sàng hợp tác** với đối tác trong & ngoài nước.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    // Áp dụng observer cho từng phần tử có animation
    document.querySelectorAll(".fade-left, .fade-right, .fade-in").forEach(el => {
      observer.observe(el);
    });
  }
};
</script>

<style scoped>
.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: #f5f5f5;
}

.about-content {
  display: flex;
  max-width: 1100px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

.image-wrapper {
  flex: 1;
}

.text-wrapper {
  flex: 1.5;
  padding: 30px;
  font-size: 16px;
  color: #333;
}

h2 {
  font-size: 24px;
  color: #2c6e49;
  margin-bottom: 15px;
}

/* Hiệu ứng xuất hiện từ bên trái */
.fade-left {
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

/* Hiệu ứng xuất hiện từ bên phải */
.fade-right {
  opacity: 0;
  transform: translateX(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

/* Hiệu ứng fade-in */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

/* Kích hoạt hiệu ứng khi scroll đến */
.show {
  opacity: 1;
  transform: translateX(0) translateY(0);
}

/* Tăng độ trễ cho từng mục */
.delay-1 { transition-delay: 0.2s; }
.delay-2 { transition-delay: 0.4s; }
.delay-3 { transition-delay: 0.6s; }
.delay-4 { transition-delay: 0.8s; }
.delay-5 { transition-delay: 1s; }
.delay-6 { transition-delay: 1.2s; }
</style>
