<template>
  <div>
  <section class="service-section">
    <h1 class="title" v-scroll-reveal>DỊCH VỤ XIN C/O (CHỨNG NHẬN XUẤT XỨ HÀNG HÓA) TẠI GREEN SERVICE</h1>
    <p class="intro" v-scroll-reveal>
      <b>Dịch vụ xin C/O</b> - Trong bối cảnh thương mại quốc tế ngày càng phát triển, việc xin C/O (Chứng nhận Xuất xứ Hàng hóa) đóng vai trò quan trọng giúp doanh nghiệp tận dụng ưu đãi thuế quan và nâng cao giá trị cạnh tranh. Green Service tự hào là đơn vị cung cấp dịch vụ xin C/O chuyên nghiệp, nhanh chóng, đảm bảo chính xác và tuân thủ đầy đủ các quy định pháp luật.
    </p>
    <img style="width:100%" src="/images/XINCO.png" />

    <div class="content" v-scroll-reveal>
      <h2>1. Dịch vụ C/O là gì?</h2>
      <h3>1.1 Định nghĩa:</h3>
      <p>
        Dịch vụ C/O (Chứng nhận Xuất xứ Hàng hóa) là dịch vụ hỗ trợ doanh nghiệp xin cấp Giấy chứng nhận xuất xứ hàng hóa (C/O) từ các cơ quan có thẩm quyền như Bộ Công Thương, VCCI (Phòng Thương mại & Công nghiệp Việt Nam) hoặc các tổ chức được ủy quyền.   
      </p>
      <h3>1.2 Vì sao cần xin C/O?
      </h3>
      <p>
        Những lý do mà bạn cần xin C\O:
      </p>
      <ul>
        <li>Hưởng ưu đãi thuế quan: Giảm hoặc miễn thuế nhập khẩu theo các hiệp định thương mại tự do (FTA).</li>
        <li>Chứng minh nguồn gốc xuất xứ hàng hóa: Hỗ trợ giao dịch quốc tế và tạo dựng uy tín với đối tác.
        </li>
        <li>Tuân thủ quy định hải quan: Tránh các rủi ro pháp lý khi xuất khẩu hàng hóa.</li>
        <li>Tăng lợi thế cạnh tranh: Đáp ứng yêu cầu của khách hàng và thị trường quốc tế.</li>
      </ul>
    </div>
    
    <div class="content" v-scroll-reveal>
      <h2>2. Quy trình xin C/O tại Green Service
      </h2>
      <p>Quy trình chi tiết tại Green Service:
      </p>
      <ul>
        <li><b>Bước 1</b>: Tư vấn và kiểm tra hồ sơ xuất xứ hàng hóa.
        </li>
        <li> <b>Bước 2</b>: Chuẩn bị đầy đủ chứng từ cần thiết (hóa đơn, tờ khai hải quan, hợp đồng, bảng kê nguyên liệu, quy trình sản xuất...).
        </li>
        <li><b>Bước 3</b>: Nộp hồ sơ lên cơ quan cấp C/O (Phòng Thương mại & Công nghiệp Việt Nam - VCCI, Bộ Công Thương...).</li>
        <li><b>Bước 4</b>: Theo dõi và xử lý các vấn đề phát sinh (nếu có).</li>
        <li><b>Bước 5</b>: Nhận C/O và bàn giao cho khách hàng.
        </li>
      </ul>
      <p>Trên đây là quy trình các bước đối với dịch vụ xin C/O tại Green Service.
      </p>
    </div>
    
    <div class="content" v-scroll-reveal>
      <h2>3. Lợi ích khi sử dụng dịch vụ tại Green Service
      </h2>
      <p>Chúng tôi cam kết về dịch vụ mà mình cung cấp: 
      </p>
      <ul>
        <li><b>Nhanh chóng, tiết kiệm thời gian</b>: Xử lý hồ sơ nhanh, tối ưu quy trình.</li>
        <li><b>Chính xác, đúng quy định</b>: Đảm bảo C/O hợp lệ theo tiêu chuẩn hải quan.</li>
        <li><b>Chi phí hợp lý, minh bạch</b>: Cam kết không phát sinh chi phí ẩn.
        </li>
        <li><b>Hỗ trợ tận tình</b>: Tư vấn miễn phí, hỗ trợ mọi vấn đề liên quan đến C/O.
        </li>
      </ul>
    </div>
  </section>
  <Footer />
</div>

</template>
<script>
import Footer from '../Footer.vue';
export default {
  components: {Footer}
};
</script>
<style scoped>
.service-section {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: Montserrat, sans-serif;
}

.title {
  font-size: 28px;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 20px;
  color: rgb(50, 79, 122);
  font-family: Montserrat, sans-serif;
  font-size: 35px;
  font-weight: 700 !important;
}

</style>
