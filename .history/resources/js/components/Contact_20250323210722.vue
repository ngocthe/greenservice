<template>
    <div class="contact-form-container">
      <h2 class="contact-title">LIÊN HỆ VỚI CHÚNG TÔI</h2>
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
  
        <button type="submit">GỬI</button>
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
    max-width: 900px;
    margin: auto;
    padding: 20px;
    margin-bottom: 40px;
    background: url('https://hrchannels.com/uptalent/attachments/images/20220712/112113811_logistics.jpg') no-repeat center center;
    background-size: cover;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    position: relative;
    overflow: hidden;
    animation: fadeInUp 1s ease;
  }
  
  .contact-form-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(46, 125, 50, 0.8);
    z-index: 1;
  }
  
  .contact-form {
    position: relative;
    z-index: 2;
  }
  
  .contact-title {
    font-size: 28px;
    margin-bottom: 20px;
    color: white;
    position: relative;
    z-index: 2;
  }
  
  .contact-form input, .contact-form textarea {
    width: 100%;
    padding: 12px;
    margin: 10px 0;
    border: none;
    border-radius: 5px;
    outline: none;
    font-size: 16px;
    transition: 0.3s;
  }
  
  .contact-form input:focus, .contact-form textarea:focus {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
  
  .contact-form button {
    background: white;
    color: #2E7D32;
    padding: 12px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    transition: 0.3s;
  }
  
  .contact-form button:hover {
    background: #2E7D32;
    color: white;
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
    padding: 15px;
    border: 2px solid white;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
    margin: 5px;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    font-weight: bold;
    position: relative;
    z-index: 2;
  }
  
  .service-option:hover, .service-option.selected {
    background: white;
    color: #2E7D32;
    transform: scale(1.05);
    border-color: white;
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
  