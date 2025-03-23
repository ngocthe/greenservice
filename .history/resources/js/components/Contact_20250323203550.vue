<template>
    <div class="contact-form-container">
      <h2 class="contact-title">Liên hệ với chúng tôi</h2>
      <form @submit.prevent="submitForm" class="contact-form">
        <input type="text" v-model="form.name" placeholder="Họ và tên" :class="{ 'error': errors.name }">
        <input type="email" v-model="form.email" placeholder="Email" :class="{ 'error': errors.email }">
        <input type="text" v-model="form.phone" placeholder="Số điện thoại" :class="{ 'error': errors.phone }">
        <textarea v-model="form.message" placeholder="Nội dung tin nhắn" :class="{ 'error': errors.message }"></textarea>
        <button type="submit">Gửi</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          phone: '',
          message: ''
        },
        errors: {}
      };
    },
    methods: {
      submitForm() {
        this.errors = {};
        if (!this.form.name) this.errors.name = true;
        if (!this.form.email || !/.+@.+\..+/.test(this.form.email)) this.errors.email = true;
        if (!this.form.phone) this.errors.phone = true;
        if (!this.form.message) this.errors.message = true;
        
        if (Object.keys(this.errors).length === 0) {
          alert("Gửi thông tin thành công!");
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .contact-form-container {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    margin: 30px auto;
  }
  .contact-title {
    text-align: center;
    margin-bottom: 20px;
    color: #2E7D32;
  }
  .contact-form input, .contact-form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  .contact-form .error {
    border-color: red;
    animation: shake 0.3s;
  }
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25%, 75% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
  }
  .contact-form button {
    background: #2E7D32;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
  }
  </style>