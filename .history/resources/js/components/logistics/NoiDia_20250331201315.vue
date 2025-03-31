<template>
  <div class="domestic-transport-service">
    <div class="transport-container">
      <h1 class="transport-title">DỊCH VỤ VẬN TẢI NỘI ĐỊA – GIẢI PHÁP VẬN CHUYỂN HÀNG HÓA NHANH CHÓNG, AN TOÀN</h1>
      <p class="transport-intro">
        Trong nền kinh tế phát triển nhanh chóng, nhu cầu vận chuyển hàng hóa trong nước ngày càng cao. Green Service cung cấp
        dịch vụ vận tải nội địa chuyên nghiệp, đảm bảo hàng hóa được giao nhận đúng thời gian, an toàn và tiết kiệm chi phí.
      </p>
      <!-- <img style="width:100%" src="/images/noidia.png" /> -->


      <h2 class="transport-section-title">Các hình thức vận tải nội địa của Green Service</h2>
      <ul class="transport-methods">
        <li><strong>Vận tải đường bộ:</strong> Xe tải nhẹ, xe tải nặng, container 20ft - 40ft, giao hàng tận nơi.</li>
        <li><strong>Vận tải đường sắt:</strong> Cước phí cạnh tranh, vận chuyển số lượng lớn, ít bị ảnh hưởng bởi thời tiết.</li>
        <li><strong>Vận tải đường biển:</strong> Kết nối các cảng lớn, chi phí thấp, dịch vụ giao nhận tận nơi.</li>
        <li><strong>Vận tải đường hàng không:</strong> Giao hàng nhanh, phù hợp với hàng giá trị cao, liên kết các hãng hàng không.</li>
      </ul>

      <h2 class="transport-section-title">Ưu điểm dịch vụ vận tải nội địa của Green Service</h2>
      <ul class="transport-benefits">
        <li><strong>An toàn, bảo hiểm hàng hóa:</strong> Hàng hóa được vận chuyển an toàn, đầy đủ bảo hiểm.</li>
        <li><strong>Thời gian vận chuyển nhanh chóng:</strong> Hệ thống logistics tối ưu giúp giao hàng đúng hẹn.</li>
        <li><strong>Chi phí cạnh tranh:</strong> Dịch vụ giá hợp lý, phù hợp với mọi nhu cầu.</li>
        <li><strong>Hệ thống theo dõi đơn hàng:</strong> Giám sát lộ trình vận chuyển theo thời gian thực.</li>
        <li><strong>Hỗ trợ chuyên nghiệp:</strong> Đội ngũ tư vấn tận tình, xử lý yêu cầu nhanh chóng.</li>
      </ul>

      <h2 class="transport-section-title">Quy trình sử dụng dịch vụ vận tải nội địa</h2>
      <ul class="transport-process">
        <li><strong>Bước 1:</strong> Tiếp nhận yêu cầu – Khách hàng cung cấp thông tin hàng hóa, điểm nhận & điểm giao.</li>
        <li><strong>Bước 2:</strong> Báo giá & lên kế hoạch – Đề xuất giải pháp vận chuyển tối ưu.</li>
        <li><strong>Bước 3:</strong> Vận chuyển hàng hóa – Thực hiện giao hàng theo lộ trình cam kết.</li>
        <li><strong>Bước 4:</strong> Giao hàng & nghiệm thu – Khách hàng kiểm tra và xác nhận.</li>
      </ul>
      <p class="transport-contact">Liên hệ với chúng tôi để biết thêm chi tiết!</p>
    </div>
    <Footer />

  </div>
</template>

<script>
import Footer from '../Footer.vue';
export default {
  components: { Footer }
};
</script>
<style scoped>
.domestic-transport-service {
  font-family: Arial, sans-serif;
  color: #333;
  padding: 40px 0;
  background: #f9f9f9;
}
.transport-container {
  width: 80%;
  max-width: 1200px;
  margin: auto;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.transport-title {
  color: #006400;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}
.transport-section-title {
  color: #004d00;
  font-size: 20px;
  margin-top: 20px;
  font-weight: bold;
}
.transport-methods, .transport-benefits, .transport-process {
  list-style: none;
  padding: 0;
}
.transport-methods li, .transport-benefits li, .transport-process li {
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
}
.transport-contact {
  text-align: center;
  font-weight: bold;
  margin-top: 20px;
}
</style>
