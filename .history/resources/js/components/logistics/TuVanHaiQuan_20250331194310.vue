<template>
  <div>
    <div class="service-detail">
      <transition name="fade">
        <h1 class="title">DỊCH VỤ TƯ VẤN HẢI QUAN CHUYÊN NGHIỆP TẠI GREEN SERVICE</h1>
      </transition>

      <transition name="slide-up">
        <p class="description">
          <i><b> Dịch vụ tư vấn Hải quan</b> - Hoạt động xuất nhập khẩu ngày càng phát triển, kéo theo đó là những quy
            định hải quan phức tạp đòi hỏi doanh nghiệp phải tuân thủ nghiêm ngặt. Green Service cung cấp dịch vụ tư vấn
            hải quan chuyên nghiệp, giúp doanh nghiệp giải quyết nhanh chóng các thủ tục, đảm bảo thông quan thuận lợi
            và đúng pháp luật.
          </i>
        </p>
      </transition>
      <!-- <img style="width:100%" src="/images/sea.png" /> -->
      <div class="section section-1">
        <transition name="slide-right" appear>
          <h2>Vì sao doanh nghiệp cần tư vấn hải quan?</h2>
        </transition>
        <p>Những lý do mà doanh nghiệp bạn cần sử dụng dịch vụ tư vấn hải quan:</p>
        <transition name="fade" appear>
          <ul>
            <li><b>Tiết kiệm thời gian</b>: Giảm thiểu rủi ro bị trì hoãn do thiếu hồ sơ hoặc sai sót trong kê khai.
            </li>
            <li><b>Đảm bảo tuân thủ pháp luật</b>: Hỗ trợ doanh nghiệp thực hiện đúng các quy định của Hải quan Việt
              Nam.
            </li>
            <li><b>Tối ưu chi phí</b>: Giúp doanh nghiệp tránh các khoản phạt không đáng có.
            </li>
            <li><b>Giảm thiểu rủi ro</b>: Hỗ trợ xử lý các tình huống phát sinh trong quá trình xuất nhập khẩu.
            </li>
          </ul>
        </transition>
      </div>

      <div class="section section-2">
        <transition name="slide-right" appear>
          <h2>2.Dịch vụ tư vấn hải quan tại Green Service hỗ trợ những gì?
          </h2>
        </transition>
        <p>Chúng tôi hỗ trợ khách hàng trong những vấn đề như: 
        </p>
        <transition name="fade" appear>
          <ul>
            <li><b>Hàng nguyên container (FCL)</b>: Giải pháp vận chuyển an toàn, nhanh chóng với chi phí hợp lý.</li>
            <li><b>Hàng lẻ (LCL)</b>: Linh hoạt cho các doanh nghiệp có nhu cầu vận chuyển nhỏ lẻ.</li>
            <li><b>Hàng siêu trường, siêu trọng</b>: Đáp ứng các mặt hàng có kích thước và trọng lượng lớn.</li>
          </ul>
        </transition>
      </div>

      <div class="section section-3">
        <transition name="slide-right" appear>
          <h2>3. Dịch vụ vận tải hàng không (Air Freight)</h2>
        </transition>
        <p>Vận tải hàng không là giải pháp lý tưởng cho các lô hàng có giá trị cao, cần giao nhận nhanh chóng.
        </p>
        <transition name="fade" appear>
          <ul>
            <li><b>Dịch vụ hàng không nhanh (Express Air Freight)</b>: Đảm bảo giao hàng nhanh chóng trong thời gian
              ngắn nhất.</li>
            <li><b>Dịch vụ hàng không tiêu chuẩn (Standard Air Freight)</b>: Cân bằng giữa thời gian và chi phí, phù hợp
              với đa dạng loại hàng hóa.</li>
            <li><b>Hàng nguy hiểm và đặc biệt</b>: Xử lý các loại hàng hóa cần yêu cầu đặc biệt như dược phẩm, thiết bị
              y tế, hàng dễ hư hỏng.</li>
            <li><b>Dịch vụ door-to-door</b>: Nhận hàng tận nơi và giao hàng đến tận tay người nhận.</li>
          </ul>
        </transition>
      </div>

      <p>Trên đây là các thông tin liên quan đến dịch vụ mà Green Service cung cấp, nếu bạn quan tâm đến dịch vụ này có
        thể liên hệ với chúng tôi</p>
    </div>
    <Footer />
  </div>

</template>


<script>
import Footer from '../Footer.vue';
export default {
  components: { Footer }
};
</script>

<style scoped>
.service-detail {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: Montserrat, sans-serif;

}

p {
  font-size: 16px;
}

.title {
  font-size: 28px;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 20px;
  color: rgb(50, 79, 122);
  font-family: Montserrat, sans-serif;
  font-size: 35px;
  font-weight: 700 !important;
}

.description {
  text-align: justify;
  font-size: 18px;
  color: #555;
}

.section {
  margin-top: 20px;
}

h2 {
  color: #2E7D32;
  font-size: 22px;
  border-left: 4px solid #2E7D32;
  padding-left: 10px;
  font-weight: 600;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  font-size: 16px;
  margin: 5px 0;
  padding-left: 15px;
  position: relative;
}

li::before {
  content: "✔";
  color: #2E7D32;
  position: absolute;
  left: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active {
  transition: transform 0.4s ease-out, opacity 0.4s ease-out;
}

.slide-up-enter {
  transform: translateY(20px);
  opacity: 0;
}

.slide-right-enter-active {
  transition: transform 0.4s ease-out, opacity 0.4s ease-out;
}

.slide-right-enter {
  transform: translateX(-20px);
  opacity: 0;
}

.process-flow {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

.step {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
  position: relative;
}

.step-item {
  background-color: #2E7D32;
  /* Xanh lá đậm */
  color: white;
  padding: 15px 20px;
  border-radius: 8px;
  font-weight: bold;
  text-align: center;
  min-width: 200px;
  flex: 1 1 250px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  position: relative;
}

.arrow {
  font-size: 24px;
  color: #2E7D32;
  font-weight: bold;
  flex-shrink: 0;
  /* Giữ nguyên kích thước */
}

/* Responsive: Khi màn hình nhỏ, mũi tên xuống dòng */
@media (max-width: 600px) {
  .step {
    flex-direction: column;
  }

  .arrow {
    transform: rotate(90deg);
  }
}
</style>
