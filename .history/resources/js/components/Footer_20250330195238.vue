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
          <p><i class="fas fa-phone"></i> Miền Bắc: 0964408641 – 0976875493</p>
          <p><i class="fas fa-phone"></i> Miền Trung: 0913694554</p>
          <p><i class="fas fa-envelope"></i> Email: greenservicejsc@gmail.com</p>
          <p><i class="fas fa-file-invoice"></i> Mã số thuế: 2900594920</p>
          <div class="social-icons">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-linkedin"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      Copyright © 2025 Greenservice Global. Powered by Green Service SW.
    </div>
    <div class="contact-icons">
      <a href="https://zalo.me/0964408641" target="_blank" class="icon zalo">
        <img src="	https://greenservicelogistics.vn/wp-content/plugins/button-contact-vr/img/zalo.png" alt="Zalo" />
      </a>
      <a href="tel:0964408641" class="icon hotline">
        <img src="	https://greenservicelogistics.vn/wp-content/plugins/button-contact-vr/img/phone.png" alt="Hotline" />
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 350px;
  position: relative;
  padding: 20px;
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
}

.footer-section {
  text-align: center;
  padding: 10px;
}

.footer-section.logo {
  width: 100%;
}

.company-logo {
  width: 200px;
  transition: transform 0.5s ease-in-out;
  animation: pulse 2s infinite alternate;
}

.company-logo:hover {
  transform: scale(1.2);
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}

.footer-bottom {
  text-align: center;
  width: 100%;
  padding: 10px 0;
  font-size: 14px;
  background: #1b5e20;
}

.contact-icons {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;
  align-items: center;
}

.icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.icon:hover {
  transform: scale(1.1);
}

.icon img {
  width: 30px;
  height: 30px;
}
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }
  .footer-section {
    text-align: center;
  }
  .footer-section.logo {
    width: 100%;
  }
}
</style>
