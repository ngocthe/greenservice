<template>
    <div class="contact-form-container">
      <h2 class="contact-title">Liên hệ với chúng tôi</h2>
      <form @submit.prevent="submitForm" class="contact-form">
        <input type="text" v-model="form.name" placeholder="Họ và tên" :class="{ 'error': errors.name }">
        <input type="email" v-model="form.email" placeholder="Email" :class="{ 'error': errors.email }">
        <input type="text" v-model="form.phone" placeholder="Số điện thoại" :class="{ 'error': errors.phone }">
        <textarea v-model="form.message" placeholder="Nội dung tin nhắn" :class="{ 'error': errors.message }"></textarea>
        
        <div class="service-options">
          <label v-for="(service, index) in services" :key="index" class="service-option" :class="{ 'selected': form.service === service }">
            <input type="radio" v-model="form.service" :value="service"> {{ service }}
          </label>
        </div>
  
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
          message: '',
          service: ''
        },
        services: ["Xử lý chất thải", "Logistics", "Tiêu hủy hàng lỗi", "Dịch vụ khác"],
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
        if (!this.form.service) this.errors.service = true;
  
        if (Object.keys(this.errors).length === 0) {
          alert("Gửi thông tin thành công!");
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .contact-form-container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    animation: fadeInUp 1s ease;
  }
  
  .contact-title {
    font-size: 24px;
    margin-bottom: 15px;
    color: #2E7D32;
  }
  
  .contact-form input, .contact-form textarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .contact-form button {
    background: #2E7D32;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
  }
  
  .contact-form button:hover {
    background: #1B5E20;
  }
  
  .service-options {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    flex-wrap: wrap;
  }
  
  .service-option {
    flex: 1;
    text-align: center;
    padding: 10px;
    border: 2px solid #ddd;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    margin: 5px;
    background: #f9f9f9;
  }
  
  .service-option:hover, .service-option.selected {
    background: #2E7D32;
    color: white;
    border-color: #2E7D32;
  }
  
  .service-option input {
    display: none;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  