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
        <img src="https://greenservicelogistics.vn/wp-content/plugins/button-contact-vr/img/zalo.png" alt="Zalo" />
      </a>
      <a href="tel:0964408641" class="icon hotline">
        <img src="https://greenservicelogistics.vn/wp-content/plugins/button-contact-vr/img/phone.png" alt="Hotline" />
      </a>
      <a href="https://m.me/your_messenger_id" target="_blank" class="icon messenger">
        <img src="data:image/jpeg;base64,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" alt="Messenger" />
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
  animation: shake 1.5s infinite ease-in-out;
}

.icon.zalo {
  background-color: #008fe5;
}

.icon.hotline {
  background-color: #ff5722;
}

.icon.messenger {
  background-color: #0078ff;
}

.icon:hover {
  transform: scale(1.1);
}

.icon img {
  width: 30px;
  height: 30px;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-2px); }
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
