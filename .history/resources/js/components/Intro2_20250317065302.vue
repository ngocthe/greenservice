<template>
  <div class="about-container">
    <div class="about-content">
      <div class="image-wrapper" style="padding:15px;background: #2E7D32; ">
          <p class=" delay-1" style="color: white;
            font-family: 'Raleway', Sans-serif;
            font-size: 2.8vw;
            font-weight: 700;
            text-transform: none;
            font-style: normal;
            text-decoration: none;
            line-height: 1.4em;
            letter-spacing: 0px;">CÔNG TY CỔ PHẦN
             GREEN SERVICE</p>       
        <p class="delay-3" style="color:white">
         Công ty TNHH Môi trường Ngôi Sao Xanh tiền thân là công ty
            TMDV & Môi trường Ngôi Sao Xanh, được thành lập tháng 4 năm
            2006 với trụ sở chính tại Thành phố Bắc Ninh. Ngôi sao xanh cũng
            là một trong những đơn vị tiên phong trong lĩnh vực xử lý môi
            trường tại Việt Nam
        </p>
      </div>
      <div class="text-wrapper">
        <h2 class="fade-in">Tại sao nên chọn GreenService?</h2>
        <ul>
          <li class="fade-in delay-1">
            <span class="check-icon">✔</span> <strong>15 năm kinh nghiệm</strong> trong lĩnh vực logistics.
          </li>
          <li class="fade-in delay-2">
            <span class="check-icon">✔</span> Cung cấp giải pháp toàn diện và dịch vụ tối ưu.
          </li>
          <li class="fade-in delay-3">
            <span class="check-icon">✔</span> Đội ngũ **chuyên nghiệp, tận tâm**, hệ thống hiện đại.
          </li>
          <li class="fade-in delay-4">
            <span class="check-icon">✔</span> Mang đến **giá trị vượt trội** cho khách hàng.
          </li>
          <li class="fade-in delay-5">
            <span class="check-icon">✔</span> Cam kết **phục vụ bằng đam mê & nhiệt huyết**.
          </li>
          <li class="fade-in delay-6">
            <span class="check-icon">✔</span> **Sẵn sàng hợp tác** với đối tác trong & ngoài nước.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // Kích hoạt hiệu ứng khi component được mount
    setTimeout(() => {
      document.querySelectorAll(".fade-in").forEach(el => {
        el.classList.add("show");
      });
    }, 200);
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

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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

/* 🔹 Danh sách với icon check */
ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-bottom: 10px;
  opacity: 0;
  transform: translateX(-20px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

/* Icon check */
.check-icon {
  color: #2c6e49;
  font-size: 22px;
  margin-right: 10px;
}

/* 🔹 Hiệu ứng fade-in */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.fade-in.show {
  opacity: 1;
  transform: translateY(0);
}


/* 🔹 Thêm độ trễ để hiệu ứng lần lượt */
.delay-1 { transition-delay: 0.2s; }
.delay-2 { transition-delay: 0.4s; }
.delay-3 { transition-delay: 0.6s; }
.delay-4 { transition-delay: 0.8s; }
.delay-5 { transition-delay: 1s; }
.delay-6 { transition-delay: 1.2s; }
</style>
