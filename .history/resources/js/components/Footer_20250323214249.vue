<template>
  <div class="footer">
    <div class="footer-overlay">
      <div class="footer-content">
        <div class="footer-section logo">
          <img src="/images/logo.png" alt="Company Logo" class="company-logo" />
        </div>
        <div class="footer-section company-info">
          <h3 style="text-decoration: underline;">CÔNG TY CỔ PHẦN GREEN SERVICE</h3>
          <p><i class="fas fa-map-marker-alt"></i> Chi nhánh miền Bắc: Tòa nhà VNPT, số 33 Lý Thái Tổ, phường Ninh Xá, Thành phố Bắc Ninh.</p>
          <p><i class="fas fa-map-marker-alt"></i> Chi nhánh miền Trung: Khu công nghiệp Nam Cấm, Xã Nghi Quang, Huyện Nghi Lộc, Tỉnh Nghệ An.</p>
          <p><i class="fas fa-phone"></i> Miền Bắc: 0964408641 – 0976875493</p>
          <p><i class="fas fa-phone"></i> Miền Trung: 0913694554</p>
          <p><i class="fas fa-envelope"></i> Email: greenservicejsc@gmail.com</p>
          <p><i class="fas fa-file-invoice"></i> Mã số thuế: 2900594920</p>
          <div class="social-icons">
            <i class="fab fa-faceb  ok"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-linkedin"></i>
          </div>
        </div>
        <div class="footer-section services">
          <h3 style="text-decoration: underline;">DỊCH VỤ CỦA CHÚNG TÔI</h3>
          <div class="service-container">
            <div class="service-category">
              <h4>Xử lý chất thải</h4>
              <ul>
                <li><a href="#"><i class="fas fa-seedling"></i> Tư vấn dịch vụ môi trường</a></li>
                <li><a href="#"><i class="fas fa-recycle"></i> Tư vấn quy trình xử lý chất thải</a></li>
                <li><a href="#"><i class="fas fa-trash-alt"></i> Xử lý chất thải thông thường</a></li>
                <li><a href="#"><i class="fas fa-skull-crossbones"></i> Xử lý chất thải nguy hại</a></li>
                <li><a href="#"><i class="fas fa-medkit"></i> Xử lý chất thải y tế lây nhiễm</a></li>
              </ul>
            </div>
            <div class="service-category">
              <h4>Logistics</h4>
              <ul>
                <li><a href="#"><i class="fas fa-plane"></i> Vận tải quốc tế (Sea, Air)</a></li>
                <li><a href="#"><i class="fas fa-shipping-fast"></i> Chuyển phát nhanh quốc tế</a></li>
                <li><a href="#"><i class="fas fa-file-invoice"></i> Xin CO</a></li>
                <li><a href="#"><i class="fas fa-file-invoice"></i> Tư vấn hải quan</a></li>
                <li><a href="#"><i class="fas fa-file-invoice"></i> Thủ tục hải quan xuất - nhập khẩu</a></li>
                <li><a href="#"><i class="fas fa-file-invoice"></i> Thanh khoản hàng gia công, sản xuất xuất khẩu</a></li>
                <li><a href="#"><i class="fas fa-shipping-fast"></i> Vận tải nội địa</a></li>
                <li><a href="#"><i class="fas fa-warehouse"></i> Dịch vụ kho bãi</a></li>
              </ul>
            </div>
            <div class="service-category">
              <h4>Tiêu hủy hàng lỗi</h4>
              <ul>
                <li><a href="#"><i class="fas fa-box-open"></i> Hàng nhập khẩu bị lỗi, hư hỏng</a></li>
                <li><a href="#"><i class="fas fa-ban"></i> Hàng vi phạm quy định nhập khẩu</a></li>
                <li><a href="#"><i class="fas fa-undo-alt"></i> Hàng hóa bị thu hồi</a></li>
                <li><a href="#"><i class="fas fa-hourglass-end"></i> Thực phẩm, mỹ phẩm, dược phẩm quá hạn</a></li>
                <li><a href="#"><i class="fas fa-copy"></i> Hàng nhái, hàng giả, hàng vi phạm sở hữu trí tuệ</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  font-family: Montserrat, sans-serif;
  background: #2e7d32;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 350px;
  position: relative;
}
h3 h4 {
  font-weight: 600 !important;
}

.footer-overlay {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.footer-section {
  margin-bottom: 20px;
  text-align: left;
}

.footer-section.logo {
  align-items: center;
  justify-content: center;
  width: 15%;
}
.footer-section.company-info{
  width: 35%;
  padding: 20px;

} 
.footer-section.services {
  width: 50%;
  padding: 20px;
}

h3, h4 {
  font-size: 20px;
  margin-bottom: 15px;
  color: #fff;
}

.service-container {
  display: flex;
  justify-content: space-between;
}

.service-category {
  width: 32%;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin: 5px 0;
}

ul li a {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: white;
}

ul li a:hover {
  text-decoration: underline;
}

.company-logo {
  width: 220px;
}
</style>
