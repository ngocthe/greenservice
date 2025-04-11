<template>
  <div class="about-container">
    <div class="about-content">
      <div class="image-wrapper">
        <p class="title fade-left" ref="title">CÔNG TY CỔ PHẦN GREENSERVICE</p>       
        <p class="description fade-right delay-3" ref="description">
          Với <b>15 năm kinh nghiệm, GreenService </b>tự hào là đơn vị tiên phong trong lĩnh vực <b>môi trường, xử lý chất thải, logistics, và tiêu hủy hàng lỗi, hỏng</b>. Chúng tôi cung cấp giải pháp toàn diện, đáp ứng nhu cầu đa dạng của khách hàng từ doanh nghiệp nhỏ đến các tập đoàn lớn.
          <br/><br/>
          GreenService đã và đang hợp tác với nhiều <b>đối tác lớn</b>, cam kết mang lại dịch vụ <b>chuyên nghiệp, an toàn, tuân thủ </b> nghiêm ngặt các quy định về môi trường...
          <br/><br/>
          <b>GreenService – Đồng hành vì một môi trường xanh, phát triển bền vững! 🌿♻️</b>
        </p>
      </div>
      <div class="text-wrapper">
        <h2 class="section-heading fade-left" ref="heading">Tại sao nên chọn GreenService?</h2>
        <ul>
          <li class="fade-in delay-1" ref="listItem">✔ 15 năm kinh nghiệm...</li>
          <li class="fade-in delay-2">✔ Cung cấp giải pháp toàn diện...</li>
          <li class="fade-in delay-3">✔ Đội ngũ chuyên nghiệp...</li>
          <li class="fade-in delay-4">✔ Mang đến giá trị vượt trội...</li>
          <li class="fade-in delay-5">✔ Cam kết phục vụ...</li>
          <li class="fade-in delay-6">✔ Sẵn sàng hợp tác...</li>
          <li class="fade-in delay-7">✔ Nhà máy xử lý đạt chuẩn...</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: #f5f5f5;
  font-family: Montserrat, sans-serif;
}

ul li {
  list-style: none;
}

.about-content {
  display: flex;
  max-width: 1100px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  flex-wrap: wrap;
}

.image-wrapper {
  flex: 1;
  background: #2E7D32;
  padding: 20px;
}

.text-wrapper {
  flex: 1.5;
  padding: 30px;
  font-size: 16px;
  color: #333;
}

.title {
  color: #f2f2f4;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 15px;
}

.description {
  color: #f2f2f4;
  font-size: 15px;
  font-weight: 400;
}

.section-heading {
  font-size: 22px;
  font-weight: 700;
  color: #2c6e49;
  margin-bottom: 15px;
}

/* Animation classes */
.fade-left {
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.fade-right {
  opacity: 0;
  transform: translateX(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.show {
  opacity: 1;
  transform: translateX(0) translateY(0);
}

/* Delay effects */
.delay-1 { transition-delay: 0.2s; }
.delay-2 { transition-delay: 0.4s; }
.delay-3 { transition-delay: 0.6s; }
.delay-4 { transition-delay: 0.8s; }
.delay-5 { transition-delay: 1s; }
.delay-6 { transition-delay: 1.2s; }
.delay-7 { transition-delay: 1.4s; }

/* ✅ Responsive chỉnh font và layout */
@media (max-width: 768px) {
  .about-container {
    padding: 20px;
  }

  .about-content {
    flex-direction: column;
  }

  .image-wrapper, .text-wrapper {
    flex: 100%;
    padding: 20px;
  }

  .title {
    font-size: 20px;
  }

  .description {
    font-size: 14px;
  }

  .text-wrapper {
    font-size: 14px;
  }

  .section-heading {
    font-size: 18px;
  }
}
</style>