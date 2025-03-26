<template>
    <div class="container">
      <!-- Video bên trái -->
      <div ref="videoSection" class="video-section" :class="{ show: videoVisible }">
        <video autoplay loop muted playsinline>
          <source src="/images/log.mp4" type="video/mp4" />
          Trình duyệt không hỗ trợ video.
        </video>
        <div class="overlay">
          <div class="overlay-title">LOGISTICS</div>
          <div class="overlay-subtitle">Dịch vụ vận chuyển và lưu kho chuyên nghiệp.</div>
        </div>
      </div>
  
      <!-- Nội dung bên phải -->
      <div ref="contentSection" class="content-section" :class="{ show: contentVisible }">
        <ul>
          <li>
            <a href="#">
              <i class="fas fa-ship"></i> Vận tải quốc tế (Sea, Air)
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-truck"></i> Chuyển phát nhanh quốc tế
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-file-alt"></i> Xin CO
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-user-tie"></i> Tư vấn hải quan
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-file-contract"></i> Thủ tục hải quan xuất - nhập khẩu
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-industry"></i> Thanh khoản hàng gia công, sản xuất xuất khẩu
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-truck-moving"></i> Vận tải nội địa
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-warehouse"></i> Dịch vụ kho bãi
            </a>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <style scoped>
  /* Video bên trái */
  .video-section {
    flex: 1;
    position: relative;
    max-width: 50%;
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 1s ease, transform 1s ease;
  }
  
  .video-section video {
    width: 100%;
    border-radius: 10px;
  }
  
  /* Overlay chứa tiêu đề và mô tả */
  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    text-align: center;
    padding: 10px 0;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  
  /* Tiêu đề "LOGISTICS" */
  .overlay-title {
    color: white;
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  /* Mô tả "Dịch vụ vận chuyển và lưu kho chuyên nghiệp." */
  .overlay-subtitle {
    color: white;
    font-size: 1rem;
    margin-top: 5px;
  }
  </style>
  