<template>
  <section class="medical-waste-section" v-intersect>
    <h2 class="section-title animate-title">Xử Lý Chất Thải Y Tế GreenService – An Toàn, Đúng Quy Định</h2>
    <p class="intro animate-fade">
      Xử lý chất thải y tế là dịch vụ nổi bật tại GreenService. Chúng tôi cung cấp đầy đủ các loại dịch vụ, một trong số đó nổi bật là dịch vụ xử lý các loại chất thải trong ngành Y.
      <br />
      <strong>Để khám phá đầy đủ các quy trình và lợi ích của dịch vụ, mời bạn đọc thông tin chi tiết tại nội dung bài viết này!</strong>
    </p>

    <div class="content-box animate-up">
      <h3>1. Chất Thải Y Tế – Nguy Cơ Tiềm Ẩn Nếu Không Xử Lý Đúng Cách</h3>
      <p>Chất thải y tế là loại rác thải phát sinh từ quá trình khám, chữa bệnh, xét nghiệm, nghiên cứu y học và chăm sóc sức khỏe. Đặc biệt, trong chất thải y tế có chứa mầm bệnh, vi khuẩn, virus, kim tiêm, hóa chất độc hại...</p>
      <ul>
        <li>Lây lan dịch bệnh ra cộng đồng</li>
        <li>Gây ô nhiễm môi trường đất, nước, không khí</li>
        <li>Vi phạm quy định pháp luật về bảo vệ môi trường</li>
        <li>Ảnh hưởng nghiêm trọng đến hình ảnh của cơ sở y tế</li>
      </ul>
    </div>

    <div class="content-box animate-up">
      <h3>2. Quy Trình Xử Lý Chất Thải Y Tế Tại GreenService Có Gì?</h3>
      <p>Quy trình các bước chuẩn hóa tại GreenService:</p>
      <ul>
        <li>Khảo sát – Tư vấn miễn phí tại cơ sở y tế</li>
        <li>Phân loại, thu gom, vận chuyển theo đúng quy chuẩn</li>
        <li>Xử lý bằng công nghệ hiện đại: hấp, đốt nhiệt độ cao, hóa chất...</li>
        <li>Giao nhận chứng từ – hồ sơ pháp lý đầy đủ</li>
        <li>Báo cáo định kỳ cho cơ quan quản lý môi trường</li>
      </ul>
    </div>

    <div class="content-box animate-up">
      <h3>3. Lợi ích của dịch vụ</h3>
      <ul>
        <li>Giảm thiểu rủi ro lây nhiễm, đảm bảo an toàn sinh học</li>
        <li>Tuân thủ pháp luật – tránh bị phạt hoặc đình chỉ hoạt động</li>
        <li>Nâng cao uy tín của cơ sở y tế với mô hình “bệnh viện xanh”</li>
        <li>Tiết kiệm chi phí với gói xử lý trọn gói & linh hoạt theo nhu cầu</li>
      </ul>
      <p><strong>Bạn đang tìm 1 đơn vị cung cấp dịch vụ chuyên nghiệp, tiết kiệm, an toàn và đúng pháp luật? GreenService là đơn vị uy tín hàng đầu để bạn có thể lựa chọn. Liên hệ với chúng tôi ngay hôm nay để được tư vấn tốt hơn!</strong></p>
    </div>
  </section>
</template>

<script>
export default {
  directives: {
    intersect: {
      inserted(el) {
        const callback = (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              el.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        };
        const observer = new IntersectionObserver(callback, { threshold: 0.3 });
        observer.observe(el);
      }
    }
  }
};
</script>

<style scoped>
.medical-waste-section {
  padding: 60px 20px;
  background-color: #f8fff8;
  color: #2c3e50;
  font-family: "Montserrat", sans-serif;
}

.section-title {
  font-size: 32px;
  font-weight: bold;
  color: #2e7d32;
  margin-bottom: 20px;
  opacity: 0;
  transform: translateY(-30px);
  transition: all 0.8s ease;
}

.section-title.visible {
  opacity: 1;
  transform: translateY(0);
}

.intro {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
  opacity: 0;
  transition: opacity 1s ease;
}

.intro.visible {
  opacity: 1;
}

.content-box {
  background: #e8f5e9;
  padding: 25px;
  border-left: 6px solid #2e7d32;
  border-radius: 8px;
  margin-bottom: 30px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease;
}

.content-box.visible {
  opacity: 1;
  transform: translateY(0);
}

.content-box h3 {
  color: #1b5e20;
  font-size: 22px;
  margin-bottom: 10px;
}

.content-box p {
  margin-bottom: 10px;
}

.content-box ul {
  list-style: none;
  padding-left: 0;
}

.content-box ul li {
  margin-bottom: 8px;
  position: relative;
  padding-left: 20px;
}

.content-box ul li::before {
  content: '✔';
  color: #43a047;
  position: absolute;
  left: 0;
}
</style>
