<template>
    <div>
      <h4 class="section-title2 green_title2" ref="title1" :class="{ animate: isTitleVisible }" style="position: relative; z-index: 2;">_____ GREEN SERVICE _____</h4>
      <h2 class="section-title2 title_secon2" ref="title2" :class="{ animate: isTitleVisible }" style="position: relative; z-index: 2;">TẦM NHÌN SỨ MỆNH, <span style="color:green">GIÁ TRỊ CỐT LÕI </span></h2>
  
      <div class="green-background text-center full-width">
        <div class="content"> 
          <h2 class="section-title" ref="title3" :class="{ animate: isTitleVisible }" style="position: relative; z-index: 2;">_____ TẦM NHÌN - SỨ MỆNH _____</h2>
    
          <div class="vision-container">
            <div class="vision-box slide-in" v-for="(item, index) in visionMission" :key="index" :class="{ animate: isVisible }">
              <i :class="item.icon" class="icon green-icon"></i>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
    
          <h2 class="section-title" ref="title4" :class="{ animate: isTitleVisible }" style="position: relative; z-index: 2;margin-top:15px">_____ GIÁ TRỊ CỐT LÕI _____</h2>
    
          <div class="values-container compact">
            <div class="value-box slide-in" v-for="(value, index) in coreValues" :key="index" :class="{ animate: isVisible }">
              <i :class="value.icon" class="icon green-icon"></i>
              <h3>{{ value.title }}</h3>
              <p>{{ value.description }}</p>
            </div>
          </div>
        </div>
      </div>
  
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
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isVisible: false,
        isTitleVisible: false,
        visionMission: [
          { title: "TẦM NHÌN", description: "Trở thành doanh nghiệp logistics cung cấp giải pháp toàn diện mang đến giá trị cao nhất cho khách hàng.", icon: "fas fa-eye" },
          { title: "SỨ MỆNH", description: "Tối ưu hóa, xanh hóa các dịch vụ logistics góp phần tiết kiệm chi phí và phát triển kinh tế bền vững.", icon: "fas fa-hand-holding-heart" }
        ],
        coreValues: [
          { title: "Uy tín", description: "Giữ cam kết và sự tín nhiệm đối với khách hàng, đối tác, cổ đông và cộng đồng.", icon: "fas fa-shield-alt" },
          { title: "Chia sẻ", description: "Cùng nhau phát triển bền vững dựa trên nguyên tắc chia sẻ giữa các bên.", icon: "fas fa-handshake" },
          { title: "Đổi mới", description: "Không ngừng học hỏi để đổi mới tư duy, tìm kiếm các giải pháp đột phá, sáng tạo.", icon: "fas fa-lightbulb" },
          { title: "Chuyên nghiệp", description: "Xây dựng đội ngũ với thái độ, kiến thức, kỹ năng chuẩn mực trong công việc.", icon: "fas fa-user-tie" },
          { title: "Tận tâm", description: "Tạo dựng đội ngũ làm việc bằng trách nhiệm, nỗ lực và nhiệt huyết để đạt mục tiêu chung.", icon: "fas fa-heart" }
        ],
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
  </style>
  