<template>
  <section class="medical-waste-section">
    <div class="container">
      <h2 class="section-title">Xử Lý Chất Thải Y Tế GreenService – An Toàn, Đúng Quy Định</h2>
      <p class="section-description">
        Xử lý chất thải y tế là dịch vụ nổi bật tại GreenService. Chúng tôi cung cấp đầy đủ các loại dịch vụ, một trong số đó nổi bật là dịch vụ xử lý các loại chất thải trong ngành Y. Để khám phá đầy đủ các quy trình và lợi ích của dịch vụ, mời bạn đọc thông tin chi tiết tại nội dung bài viết này!
      </p>

      <div class="content-block">
        <h3>1. Chất Thải Y Tế – Nguy Cơ Tiềm Ẩn Nếu Không Xử Lý Đúng Cách</h3>
        <p>
          Chất thải y tế là loại rác thải phát sinh từ quá trình khám, chữa bệnh, xét nghiệm, nghiên cứu y học và chăm sóc sức khỏe. Đặc biệt, trong chất thải y tế có chứa mầm bệnh, vi khuẩn, virus, kim tiêm, hóa chất độc hại...
        </p>
        <ul>
          <li>Lây lan dịch bệnh ra cộng đồng</li>
          <li>Gây ô nhiễm môi trường đất, nước, không khí</li>
          <li>Vi phạm quy định pháp luật về bảo vệ môi trường</li>
          <li>Ảnh hưởng nghiêm trọng đến hình ảnh của cơ sở y tế</li>
        </ul>
      </div>

      <div class="content-block">
        <h3>2. Quy Trình Xử Lý Chất Thải Y Tế Tại GreenService Có Gì?</h3>
        <p>Quy trình các bước chuẩn hóa tại GreenService:</p>
        <ul>
          <li>Khảo sát – Tư vấn miễn phí tại cơ sở y tế</li>
          <li>Phân loại, thu gom, vận chuyển theo đúng quy chuẩn</li>
          <li>Xử lý bằng công nghệ hiện đại: hấp, đốt nhiệt độ cao, hóa chất...</li>
          <li>Giao nhận chứng từ – hồ sơ pháp lý đầy đủ</li>
          <li>Báo cáo định kỳ cho cơ quan quản lý môi trường</li>
        </ul>
        <p>Trên đây là quy trình 5 bước của dịch vụ tại GreenService.</p>
      </div>

      <div class="content-block">
        <h3>3. Lợi ích của dịch vụ</h3>
        <p>Những ưu điểm và lợi ích khi doanh nghiệp của bạn sử dụng dịch vụ đó là:</p>
        <ul>
          <li>Giảm thiểu rủi ro lây nhiễm, đảm bảo an toàn sinh học</li>
          <li>Tuân thủ pháp luật – tránh bị phạt hoặc đình chỉ hoạt động</li>
          <li>Nâng cao uy tín của cơ sở y tế với mô hình “bệnh viện xanh”</li>
          <li>Tiết kiệm chi phí với gói xử lý trọn gói & linh hoạt theo nhu cầu</li>
        </ul>
      </div>

      <div class="call-to-action">
        <p>
          Bạn đang tìm 1 đơn vị cung cấp dịch vụ chuyên nghiệp, tiết kiệm, an toàn và đúng pháp luật? GreenService là đơn vị uy tín hàng đầu để bạn có thể lựa chọn. Liên hệ với chúng tôi ngay hôm nay để có thể được tư vấn tốt hơn về dịch vụ.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MedicalWasteService',
};
</script>

<style scoped>
.medical-waste-section {
  background-color: #f9f9f9;
  padding: 60px 20px;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  color: #2e7d32; /* Màu xanh lá cây đậm */
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
}

.section-description {
  font-size: 18px;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 40px;
}

.content-block {
  margin-bottom: 40px;
}

.content-block h3 {
  color: #2e7d32;
  font-size: 24px;
  margin-bottom: 15px;
}

.content-block p {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 15px;
}

.content-block ul {
  list-style-type: disc;
  padding-left: 20px;
}

.content-block ul li {
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 1.6;
}

.call-to-action {
  background-color: #2e7d32;
  color: #fff;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  font-size: 18px;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 768px) {
  .section-title {
    font-size: 28px;
  }

  .section-description,
  .call-to-action {
    font-size: 16px;
  }

  .content-block h3 {
    font-size: 20px;
  }

  .content-block p,
  .content-block ul li {
    font-size: 14px;
  }
}
</style>
