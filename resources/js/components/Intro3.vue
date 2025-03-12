<template>
 <div class="video-container">
    <video autoplay loop muted playsinline>
        <source src="/images/background.mp4" type="video/mp4">
        Trình duyệt của bạn không hỗ trợ video.
    </video>
    <div class="overlay"></div>
    <div class="content">
        <h1>Tiêu đề trên nền video</h1>
        <p>Nội dung mô tả...</p>
    </div>
</div>

</template>

<script>
export default {
  mounted() {
    // Kích hoạt hiệu ứng khi component được mount
    setTimeout(() => {
      document.querySelectorAll(".fade-in").forEach(el => {
        el.classList.add("show");
      });
    }, 200);
  }
};
</script>

<style scoped>
.video-container {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.video-container video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.video-container .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: green;
    opacity: 0.5; /* Điều chỉnh độ trong suốt */
}

.video-container .content {
    position: relative;
    z-index: 2;
    color: white;
    text-align: center;
    padding: 20px;
}

</style>
