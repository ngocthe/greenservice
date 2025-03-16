<template>
  <div class="express-shipping" v-scroll="handleScroll">
    <h2 class="title">DỊCH VỤ CHUYỂN PHÁT NHANH QUỐC TẾ - NHANH CHÓNG, AN TOÀN, TIẾT KIỆM</h2>
    <p class="description">Green Service cam kết mang đến giải pháp vận chuyển tối ưu với thời gian ngắn nhất, thủ tục đơn giản và chi phí cạnh tranh.</p>
    
    <div class="section" v-for="(section, index) in sections" :key="index" :class="{ 'animate': section.visible }">
      <h3>{{ section.title }}</h3>
      <ul>
        <li v-for="(item, i) in section.content" :key="i">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        {
          title: "Dịch Vụ Chuyển Phát Nhanh Quốc Tế Là Gì?",
          content: ["Là phương thức vận chuyển hàng hóa nhanh chóng trên toàn cầu.", "Green Service đảm bảo an toàn, đúng hẹn và tiết kiệm."],
          visible: false
        },
        {
          title: "Ưu Điểm Khi Sử Dụng Dịch Vụ",
          content: ["Giao hàng từ 1 - 5 ngày.", "Hỗ trợ thủ tục hải quan.", "Theo dõi lộ trình 24/7.", "Giao hàng tận nơi.", "Bảo hiểm hàng hóa."],
          visible: false
        },
        {
          title: "Các Loại Hàng Hóa phổ biến",
          content: ["Tài liệu, chứng từ.", "Hàng thương mại: quần áo, mỹ phẩm, điện tử.", "Hàng dễ vỡ, giá trị cao.", "Thực phẩm khô, dược phẩm."],
          visible: false
        },
        {
          title: "Quy Trình Gửi Hàng Quốc Tế",
          content: ["Bước 1: Tiếp nhận & tư vấn.", "Bước 2: Đóng gói & nhận hàng.", "Bước 3: Khai báo hải quan & vận chuyển.", "Bước 4: Giao hàng & xác nhận."],
          visible: false
        }
      ]
    };
  },
  methods: {
    handleScroll() {
      this.sections.forEach((section, index) => {
        const element = this.$el.getElementsByClassName('section')[index];
        if (element.getBoundingClientRect().top < window.innerHeight - 100) {
          this.sections[index].visible = true;
        }
      });
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
.express-shipping {
  padding: 20px;
  text-align: center;
}
.title {
  font-size: 24px;
  font-weight: bold;
  color: #008000;
  margin-bottom: 10px;
}
.description {
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
}
.section {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease-in-out;
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
.section.animate {
  opacity: 1;
  transform: translateY(0);
}
h3 {
  font-size: 20px;
  color: #008000;
  margin-bottom: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  font-size: 14px;
  color: #333;
  padding: 5px 0;
}
</style>
