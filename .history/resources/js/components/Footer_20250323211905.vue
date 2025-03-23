<template>
  <div class="footer">
    <div class="footer-overlay">
      <div class="footer-content">
        <div class="footer-section logo">
          <img src="/images/logo.png" alt="Company Logo" class="company-logo" />
        </div>
        <div class="footer-section company-info">
          <h3>CÔNG TY CỔ PHẦN GREEN SERVICE</h3>
          <p><i class="fas fa-map-marker-alt"></i> Chi nhánh miền Bắc: Tòa nhà VNPT, số 33 Lý Thái Tổ, phường Ninh Xá, Thành phố Bắc Ninh.</p>
          <p><i class="fas fa-map-marker-alt"></i> Chi nhánh miền Trung: Khu công nghiệp Nam Cấm, Xã Nghi Quang, Huyện Nghi Lộc, Tỉnh Nghệ An.</p>
          <p><i class="fas fa-phone"></i> Miền Bắc: 0973661860 – 0976875493</p>
          <p><i class="fas fa-phone"></i> Miền Trung: 0913694554</p>
          <p><i class="fas fa-envelope"></i> Email: greenservicejsc@gmail.com</p>
          <p><i class="fas fa-file-invoice"></i> Mã số thuế: 2900594920</p>
          <div class="social-icons">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-linkedin"></i>
          </div>
        </div>
        <div class="footer-section services">
          <h3>DỊCH VỤ</h3>
          <ul>
            <li><i class="fas fa-truck"></i> Vận tải logistics</li>
            <li><i class="fas fa-recycle"></i> Quản lý chất thải</li>
            <li><i class="fas fa-leaf"></i> Giải pháp xanh</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="contact-icons">
      <a href="tel:+0964408641" class="contact-item hotline" title="Gọi ngay">
        <img src="/images/call.svg"/>
      </a>
      <a href="https://zalo.me/0964408641" class="contact-item zalo" target="_blank" title="Chat Zalo">
        <img src="/images/zalo.svg"/>
      </a>
      <a href="https://www.facebook.com/profile.php?id=61573816370726#" class="contact-item messenger" target="_blank" title="Chat Messenger">
        <img src="/images/messenger.svg"/>
      </a>
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
  padding: 20px;
}

.footer-overlay {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}

.footer-section {
  margin-bottom: 20px;
  text-align: left;
}

.footer-section.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
}

.footer-section.company-info, .footer-section.services {
  width: 40%;
  padding: 20px;
}

h3 {
  font-size: 20px;
  margin-bottom: 15px;
  color: #fff;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin: 5px 0;
  display: flex;
  align-items: center;
  gap: 10px;
}

p {
  display: flex;
  align-items: center;
  gap: 10px;
}

.social-icons {
  display: flex;
  gap: 10px;
  justify-content: start;
  margin-top: 10px;
}

.social-icons i {
  font-size: 24px;
  cursor: pointer;
}

.social-icons i:hover {
  color: #a5d6a7;
}

.contact-icons {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;
}

.contact-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #2c6e49;
  color: white;
  font-size: 24px;
  text-decoration: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, background 0.2s;
}

.contact-item:hover {
  transform: scale(1.1);
}

.company-logo {
  width: 180px;
}

.zalo { background: #0078ff; }
.messenger { background: #0084ff; }
</style>
