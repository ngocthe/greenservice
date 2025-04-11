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
    Với <b>15 năm kinh nghiệm, GreenService </b>tự hào là đơn vị tiên phong trong lĩnh vực <b>môi trường, xử lý chất thải, logistics, và tiêu hủy hàng lỗi, hỏng</b>. Chúng tôi cung cấp giải pháp toàn diện, đáp ứng nhu cầu đa dạng của khách hàng từ doanh nghiệp nhỏ đến các tập đoàn lớn.
    <br/>    
    <br/>
    GreenService đã và đang hợp tác với nhiều <b>đối tác lớn</b>, cam kết mang lại dịch vụ <b>chuyên nghiệp, an toàn, tuân thủ </b> nghiêm ngặt các quy định về môi trường. Với đội ngũ chuyên gia giàu kinh nghiệm và hệ thống vận hành hiện đại, chúng tôi không ngừng đổi mới để cung cấp giải pháp tối ưu, bền vững cho khách hàng.
    <br/>
    <br/>
    <b>GreenService – Đồng hành vì một môi trường xanh, phát triển bền vững! 🌿♻️</b>
        </p>
      </div>
      <div class="text-wrapper">
        <h2 style="font-family: Montserrat, sans-serif;
    font-size: 22px;
    font-weight: 700 !important;" class="fade-left" ref="heading">   Tại sao nên chọn GreenService?</h2>
        <ul>
          <li class="fade-in delay-1" ref="listItem">✔ 15 năm kinh nghiệm trong lĩnh vực môi trường, xử lý chất thải, logistics, tiêu hủy hàng lỗi, hỏng và nhiều dịch vụ khác.</li>
          <li class="fade-in delay-2">✔ Cung cấp giải pháp toàn diện, tối ưu, đáp ứng nhu cầu đa dạng của khách hàng.</li>
          <li class="fade-in delay-3">✔ Đội ngũ chuyên nghiệp, tận tâm, cùng hệ thống công nghệ hiện đại đảm bảo chất lượng dịch vụ.</li>
          <li class="fade-in delay-4">✔ Mang đến giá trị vượt trội, giúp khách hàng tối ưu chi phí và nâng cao hiệu quả hoạt động.</li>
          <li class="fade-in delay-5">✔ Cam kết phục vụ bằng đam mê & nhiệt huyết, tuân thủ chặt chẽ các quy định về môi trường.</li>
          <li class="fade-in delay-6">✔ Sẵn sàng hợp tác với đối tác trong & ngoài nước, cùng phát triển bền vững.</li>
          <li class="fade-in delay-7">✔ Nhà máy xử lý chất thải đạt tiêu chuẩn, được trang bị hệ thống xử lý hiện đại, công suất lớn, đảm bảo tuân thủ các quy định nghiêm ngặt của pháp luật về môi trường.</li>

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
  font-family: Montserrat, sans-serif;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: #f5f5f5;
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
.delay-7 { transition-delay: 1.4s; }
@media (max-width: 768px) {
  .about-container {
    padding: 20px;
    flex-direction: column;
  }

  .about-content {
    flex-direction: column;
  }

  .text-wrapper {
    padding: 20px;
    font-size: 14px;
  }

  .image-wrapper p.title {
    font-size: 20px !important;
  }

  .image-wrapper p {
    font-size: 13px !important;
  }

  .text-wrapper h2 {
    font-size: 18px !important;
  }
}
</style>
