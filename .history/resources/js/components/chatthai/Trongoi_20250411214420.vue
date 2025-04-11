<template>
  <div class="green-medical-wrapper">
    <div class="green-medical-container">
      <h2 class="green-title animated fadeInUp">Xử Lý Chất Thải Y Tế GreenService – An Toàn, Đúng Quy Định</h2>
      <p class="green-intro animated fadeInUp">
        Xử lý chất thải y tế là dịch vụ nổi bật tại GreenService. Chúng tôi cung cấp đầy đủ các loại dịch vụ, một trong số đó nổi bật là dịch vụ xử lý các loại chất thải trong ngành Y.
        Để khám phá đầy đủ các quy trình và lợi ích của dịch vụ, mời bạn đọc thông tin chi tiết tại nội dung bài viết này!
      </p>

      <div class="green-section animated fadeInUp">
        <h3>1. Chất Thải Y Tế – Nguy Cơ Tiềm Ẩn Nếu Không Xử Lý Đúng Cách</h3>
        <p>
          Chất thải y tế là loại rác thải phát sinh từ quá trình khám, chữa bệnh, xét nghiệm, nghiên cứu y học và chăm sóc sức khỏe.
          Đặc biệt, trong chất thải y tế có chứa mầm bệnh, vi khuẩn, virus, kim tiêm, hóa chất độc hại...
        </p>
        <ul>
          <li>Lây lan dịch bệnh ra cộng đồng</li>
          <li>Gây ô nhiễm môi trường đất, nước, không khí</li>
          <li>Vi phạm quy định pháp luật về bảo vệ môi trường</li>
          <li>Ảnh hưởng nghiêm trọng đến hình ảnh của cơ sở y tế</li>
        </ul>
      </div>

      <div class="green-section animated fadeInUp">
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

      <div class="green-section animated fadeInUp">
        <h3>3. Lợi ích của dịch vụ</h3>
        <ul>
          <li>Giảm thiểu rủi ro lây nhiễm, đảm bảo an toàn sinh học</li>
          <li>Tuân thủ pháp luật – tránh bị phạt hoặc đình chỉ hoạt động</li>
          <li>Nâng cao uy tín của cơ sở y tế với mô hình “bệnh viện xanh”</li>
          <li>Tiết kiệm chi phí với gói xử lý trọn gói & linh hoạt theo nhu cầu</li>
        </ul>
        <p class="green-cta">
          Bạn đang tìm 1 đơn vị cung cấp dịch vụ chuyên nghiệp, tiết kiệm, an toàn và đúng pháp luật?
          <strong>GreenService</strong> là đơn vị uy tín hàng đầu để bạn có thể lựa chọn.
          <br />Liên hệ với chúng tôi ngay hôm nay để có thể được tư vấn tốt hơn về dịch vụ.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MedicalWasteService",
};
</script>

<style scoped>
.green-medical-wrapper {
  background: #f4fff6;
  padding: 50px 20px;
  color: #2e7d32;
  font-family: 'Montserrat', sans-serif;
}

.green-medical-container {
  max-width: 1000px;
  margin: 0 auto;
}

.green-title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
}

.green-intro {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
  text-align: center;
}

.green-section {
  margin-bottom: 40px;
}

.green-section h3 {
  font-size: 22px;
  color: #1b5e20;
  margin-bottom: 10px;
}

.green-section p {
  font-size: 16px;
  line-height: 1.6;
}

.green-section ul {
  margin-top: 10px;
  padding-left: 20px;
}

.green-section ul li {
  margin-bottom: 10px;
  position: relative;
  padding-left: 20px;
}

.green-section ul li::before {
  content: '✔';
  position: absolute;
  left: 0;
  color: #43a047;
  font-weight: bold;
}

.green-cta {
  font-size: 16px;
  font-weight: 500;
  margin-top: 20px;
}

/* Animation */
.animated {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .green-title {
    font-size: 24px;
  }

  .green-intro,
  .green-section p,
  .green-cta {
    font-size: 15px;
  }

  .green-section h3 {
    font-size: 18px;
  }
}
</style>
