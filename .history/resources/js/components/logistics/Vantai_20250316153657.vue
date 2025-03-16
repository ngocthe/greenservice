<template>
  <div class="service-detail">
    <!-- Banner -->
    <div class="banner">
      <h1 class="fade-in">VẬN TẢI QUỐC TẾ (SEA, AIR)</h1>
      <p class="fade-in">
        Green Service cung cấp giải pháp vận tải quốc tế an toàn, nhanh chóng với hệ thống đối tác toàn cầu.
      </p>
    </div>

    <div class="container">
      <!-- Phần giới thiệu -->
      <div class="intro fade-in">
        <h2>TẠI SAO CHỌN GREEN SERVICE?</h2>
        <p>
          Với nhiều năm kinh nghiệm trong lĩnh vực logistics, chúng tôi cam kết cung cấp dịch vụ vận tải quốc tế
          hiệu quả, tiết kiệm chi phí và thời gian cho doanh nghiệp của bạn.
        </p>
      </div>

      <!-- FCL - Vận chuyển hàng nguyên container -->
      <div class="section fade-in">
        <h2>VẬN CHUYỂN HÀNG NGUYÊN CONTAINER (FCL)</h2>
        <p>
          Chúng tôi làm việc với các chuyên gia trong ngành, giúp khách hàng có được giấy lưu khoang
          và vận đơn đúng hạn, đảm bảo hàng hóa đến nơi an toàn.
        </p>
        <img src="https://tse3.mm.bing.net/th?id=OIP.-JB-OSfKIopUjn7ow9RwzwHaFo&w=360&h=360&c=7" alt="FCL Shipping">
      </div>

      <!-- LCL - Vận chuyển hàng lẻ -->
      <div class="section fade-in">
        <h2>VẬN CHUYỂN KHÔNG ĐẦY CONTAINER (LCL)</h2>
        <p>
          Chúng tôi cung cấp dịch vụ giao hàng đúng hẹn và đầy đủ, với hệ thống vận chuyển, kho hàng và hải quan đồng bộ.
          Hồ sơ được xử lý nhanh chóng, giảm thiểu sai sót và chậm trễ.
        </p>
        <img src="https://tse1.mm.bing.net/th?id=OIP.ix3B_RnYK2WJ1qSEVUb9NAHaFj&w=355&h=355&c=7" alt="LCL Shipping">
      </div>

      <!-- Air Freight - Vận tải hàng không -->
      <div class="section fade-in">
        <h2>VẬN CHUYỂN HÀNG KHÔNG</h2>
        <p>
          Dịch vụ vận tải hàng không của chúng tôi cung cấp hai lựa chọn:
          <br>✔ Giao tận tay người nhận
          <br>✔ Giao tới cảng hàng không
          <br>Thời gian thực đối với cước phí, lịch trình và theo dõi lô hàng được đảm bảo minh bạch.
        </p>
        <img src="https://tse3.mm.bing.net/th?id=OIP.ullPCbrDrOMalzwX06jfqAAAAA&w=474&h=474&c=7" alt="Air Shipping">
      </div>

      <!-- Bảng so sánh dịch vụ -->
      <div class="comparison fade-in">
        <h2>SO SÁNH CÁC LOẠI HÌNH VẬN TẢI</h2>
        <table>
          <tr>
            <th>Dịch vụ</th>
            <th>Thời gian</th>
            <th>Chi phí</th>
            <th>Loại hàng phù hợp</th>
          </tr>
          <tr>
            <td>FCL (Full Container Load)</td>
            <td>Trung bình 20-40 ngày</td>
            <td>Hợp lý</td>
            <td>Hàng số lượng lớn</td>
          </tr>
          <tr>
            <td>LCL (Less Container Load)</td>
            <td>Trung bình 25-45 ngày</td>
            <td>Tiết kiệm</td>
            <td>Hàng lẻ, số lượng nhỏ</td>
          </tr>
          <tr>
            <td>Hàng không</td>
            <td>2-7 ngày</td>
            <td>Cao</td>
            <td>Hàng giá trị cao, cần giao nhanh</td>
          </tr>
        </table>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../Footer.vue';

export default {
components: {Footer},
  mounted() {
    this.observeScroll();
  },
  methods: {
    observeScroll() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.2 }
      );

      document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    }
  }
};
</script>

<style scoped>
.service-detail {
  font-family: Arial, sans-serif;
}

.banner {
  background: url("https://goldwell-logistics.vn/wp-content/uploads/2018/04/van-tai-quoc-te.jpg") no-repeat center/cover;
  text-align: center;
  padding: 100px 20px;
  color: white;
}

.container {
  padding: 40px;
}

.intro {
  text-align: center;
  margin-bottom: 30px;
}

.section {
  margin-bottom: 50px;
  text-align: center;
}

.section img {
  max-width: 80%;
  height: auto;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

/* Bảng so sánh */
.comparison {
  margin-top: 50px;
  text-align: center;
}

.comparison table {
  width: 100%;
  border-collapse: collapse;
}

.comparison th, .comparison td {
  border: 1px solid #ddd;
  padding: 10px;
}

.comparison th {
  background: #2E7D32;
  color: white;
}

/* Hiệu ứng fade-in khi cuộn */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
