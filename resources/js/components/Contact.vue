<template>
  <div class="video-background">
    <video autoplay loop muted playsinline>
      <source src="/images/backservice.mp4" type="video/mp4" />
      Trình duyệt không hỗ trợ video.
    </video>

    <div class="content">
      <h1 style="font-family: Montserrat, sans-serif;
    font-size: 35px;
    font-weight: 700 !important;">LIÊN HỆ VỚI CHÚNG TÔI</h1>
      <p style="font-family: Montserrat, sans-serif;
    font-size: 25px;
    font-weight: 400 !important;">Hãy để lại thông tin, chúng tôi sẽ liên hệ lại sớm nhất.</p>
      <div ref="formContainer" class="form-container" :class="{ show: isVisible }">
        <form @submit.prevent="submitForm">
          <input type="text" v-model="name" placeholder="Họ và tên" required />
          <input type="email" v-model="email" placeholder="Email" required />
          <input type="tel" v-model="phone" placeholder="Số điện thoại" required />

          <label for="service">Chọn dịch vụ:</label>
          <select v-model="service" required>
            <option value="" disabled>-- Chọn dịch vụ --</option>
            <option value="xulychatthai">Xử lý chất thải</option>
            <option value="logistics">Logistics</option>
            <option value="tieuhuyhangloi">Tiêu hủy hàng lỗi</option>
            <option value="khac">Dịch vụ khác</option>
          </select>

          <textarea v-model="message" placeholder="Nội dung liên hệ" rows="4"></textarea>

          <button type="submit">Gửi liên hệ</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      isVisible: false
    };
  },
  methods: {
    submitForm() {
      alert("Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm nhất.");
      this.name = "";
      this.email = "";
      this.phone = "";
      this.service = "";
      this.message = "";
    },
    checkScroll() {
      let position = this.$refs.formContainer.getBoundingClientRect().top;
      let screenPosition = window.innerHeight / 1.3;
      if (position < screenPosition) {
        this.isVisible = true;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.checkScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.checkScroll);
  }
};
</script>

<style scoped>
.video-background {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.video-background video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  position: absolute;
  font-family: Montserrat, sans-serif;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: rgb(255, 255, 255);
  z-index: 1;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

/* Form container */
.form-container {
  background: rgba(0, 0, 0, 0.6);
  padding: 30px;
  border-radius: 10px;
  width: 700px;
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1s ease, transform 1s ease;
}

.form-container input,
.form-container select,
.form-container textarea {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
}

textarea {
  resize: none;
}

button {
  width: 100%;
  padding: 12px;
  border: none;
  background: #28a745;
  color: white;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #218838;
}

/* Hiệu ứng xuất hiện */
.show {
  opacity: 1;
  transform: translateY(0);
}

/* ✅ Responsive cho mobile */
@media (max-width: 600px) {
  .form-container {
    width: 90%;
    padding: 20px;
    margin: 0 auto;
  }

  .content {
    width: 100%;
    padding: 0 10px;
  }

  h1 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1rem;
  }
}
</style>
