<template>
  <div class="medical-waste-container">
    <h1 class="main-title">Xử Lý Chất Thải Y Tế GreenService – An Toàn, Đúng Quy Định</h1>
    <p class="intro">
      <i>Xử lý chất thải y tế là dịch vụ nổi bật tại GreenService. Chúng tôi cung cấp đầy đủ các loại dịch vụ, một trong số đó nổi bật là dịch vụ xử lý các loại chất thải trong ngành Y. Để khám phá đầy đủ các quy trình và lợi ích của dịch vụ, mời bạn đọc thông tin chi tiết tại nội dung bài viết này!
      </i>  </p>

    <section class="section">
      <h2>1. Chất Thải Y Tế – Nguy Cơ Tiềm Ẩn Nếu Không Xử Lý Đúng Cách</h2>
      <p>
        Chất thải y tế là loại rác thải phát sinh từ quá trình khám, chữa bệnh, xét nghiệm, nghiên cứu y học và chăm sóc sức khỏe. Đặc biệt, trong chất thải y tế có chứa mầm bệnh, vi khuẩn, virus, kim tiêm, hóa chất độc hại...
      </p>
      <ul>
        <li>Lây lan dịch bệnh ra cộng đồng</li>
        <li>Gây ô nhiễm môi trường đất, nước, không khí</li>
        <li>Vi phạm quy định pháp luật về bảo vệ môi trường</li>
        <li>Ảnh hưởng nghiêm trọng đến hình ảnh của cơ sở y tế</li>
      </ul>
    </section>

    <section class="section">
      <h2>2. Quy Trình Xử Lý Chất Thải Y Tế Tại GreenService Có Gì?</h2>
      <p>Quy trình các bước chuẩn hóa tại GreenService:</p>
      <ul>
        <li>Khảo sát – Tư vấn miễn phí tại cơ sở y tế</li>
        <li>Phân loại, thu gom, vận chuyển theo đúng quy chuẩn</li>
        <li>Xử lý bằng công nghệ hiện đại: hấp, đốt nhiệt độ cao, hóa chất...</li>
        <li>Giao nhận chứng từ – hồ sơ pháp lý đầy đủ</li>
        <li>Báo cáo định kỳ cho cơ quan quản lý môi trường</li>
      </ul>
    </section>

    <section class="section">
      <h2>3. Lợi ích của dịch vụ</h2>
      <p>Những ưu điểm và lợi ích khi doanh nghiệp của bạn sử dụng dịch vụ đó là:</p>
      <ul>
        <li>Giảm thiểu rủi ro lây nhiễm, đảm bảo an toàn sinh học</li>
        <li>Tuân thủ pháp luật – tránh bị phạt hoặc đình chỉ hoạt động</li>
        <li>Nâng cao uy tín của cơ sở y tế với mô hình “bệnh viện xanh”</li>
        <li>Tiết kiệm chi phí với gói xử lý trọn gói & linh hoạt theo nhu cầu</li>
      </ul>
    </section>

    <div class="cta">
      <p>
        Bạn đang tìm 1 đơn vị cung cấp dịch vụ chuyên nghiệp, tiết kiệm, an toàn và đúng pháp luật? 
        <strong>GreenService</strong> là đơn vị uy tín hàng đầu để bạn có thể lựa chọn. 
        <span class="contact">Liên hệ với chúng tôi ngay hôm nay để được tư vấn tốt hơn!</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MedicalWaste"
};
</script>

<style scoped>
.medical-waste-container {
  font-family: Montserrat, sans-serif;
  max-width: 960px;
  margin: 40px auto;
  padding: 20px;
  background: #f9fff9;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 128, 0, 0.1);
  color: #333;
  animation: fadeIn 1s ease-in-out;
}
li {
  font-size: 18px;
}
.main-title {
  font-size: 36px;
  font-weight: bold;

  color: #202220;
  margin-bottom: 20px;
  text-align: center;
}
.intro {
  font-size: 18px;
  margin-bottom: 25px;
  line-height: 1.6;
}
.section {
  margin-bottom: 30px;
}
.section h2 {
  font-size: 20px;
  color: #1b5e20;
  margin-bottom: 12px;
  font-weight: bold !important;

}
.section p {
  font-size: 18px;
  margin-bottom: 10px;
}
.section ul {
  list-style-type: disc;
  margin-left: 20px;
  color: #388e3c;
}
.cta {
  margin-top: 30px;
  background: #e8f5e9;
  padding: 20px;
  border-left: 5px solid #43a047;
  border-radius: 8px;
  font-size: 18px;
}
.contact {
  display: block;
  margin-top: 10px;
  font-weight: bold;
  color: #2e7d32;
  animation: pulse 1.5s infinite;
}
@keyframes fadeIn {
  from {opacity: 0; transform: translateY(20px);}
  to {opacity: 1; transform: translateY(0);}
}
@keyframes pulse {
  0%, 100% {opacity: 1;}
  50% {opacity: 0.6;}
}
</style>
