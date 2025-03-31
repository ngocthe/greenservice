<template>
  <div>
  <div class="service-detail">
    <transition name="fade">
      <h1 class="title">DỊCH VỤ TƯ VẤN HẢI QUAN CHUYÊN NGHIỆP TẠI GREEN SERVICE</h1>
    </transition>
    
    <transition name="slide-up">
      <p class="description">
        <i><b> Dịch vụ tư vấn Hải quan</b> - Hoạt động xuất nhập khẩu ngày càng phát triển, kéo theo đó là những quy định hải quan phức tạp đòi hỏi doanh nghiệp phải tuân thủ nghiêm ngặt. Green Service cung cấp dịch vụ tư vấn hải quan chuyên nghiệp, giúp doanh nghiệp giải quyết nhanh chóng các thủ tục, đảm bảo thông quan thuận lợi và đúng pháp luật.
        </i></p>
    </transition>
    <!-- <img style="width:100%" src="/images/sea.png" /> -->
    <div class="section section-1">
      <transition name="slide-right" appear>
        <h2>1. Các loại hình dịch vụ kho bãi phổ biến</h2>
        <h3>1.1. Dịch vụ kho bãi - Kho ngắn hạn và dài hạn</h3>
      </transition>
      <transition name="fade" appear>
        <ul>
          <li>Lưu trữ hàng hóa linh hoạt theo nhu cầu của khách hàng.</li>
          <li>Hỗ trợ doanh nghiệp trong các giai đoạn cao điểm hoặc theo mùa vụ.</li>
          <li>Bảo quản hàng hóa an toàn với hệ thống giám sát 24/7.</li>
        </ul>
      </transition>
      <transition name="slide-right" appear>
        <h3>1.2. Dịch vụ quản lý kho</h3>
      </transition>
      <transition name="fade" appear>
        <ul>
          <li>Hệ thống quản lý hàng hóa hiện đại, giúp kiểm soát tồn kho chính xác.
          </li>
          <li>Hỗ trợ kiểm kê và báo cáo định kỳ, giảm thiểu sai sót.</li>
          <li>Giảm nguy cơ thất thoát hàng hóa, tối ưu hóa quy trình xuất nhập kho.</li>
        </ul>
      </transition>
      <transition name="slide-right" appear>
        <h3>1.3. Kho lạnh và kho bảo quản đặc biệt
        </h3>
      </transition>
      <transition name="fade" appear>
        <ul>
          <li>Kho lạnh đạt chuẩn, đảm bảo nhiệt độ phù hợp cho hàng thực phẩm, dược phẩm và sản phẩm cần bảo quản đặc biệt.
          </li>
          <li>Dịch vụ vận chuyển đi kèm, đảm bảo chuỗi cung ứng không bị gián đoạn.
          </li>
          <li>Kiểm soát độ ẩm và nhiệt độ nghiêm ngặt, đảm bảo chất lượng sản phẩm.
          </li>
        </ul>
      </transition>
      <transition name="slide-right" appear>
        <h3>1.4. Dịch vụ kho bãi - Dịch vụ đóng gói và phân phối
        </h3>
      </transition>
      <transition name="fade" appear>
        <ul>
          <li>Hỗ trợ đóng gói hàng hóa theo tiêu chuẩn an toàn, phù hợp với nhu cầu vận chuyển.
          </li>
          <li>Phân phối hàng hóa nhanh chóng, tiết kiệm chi phí.
          </li>
          <li>Liên kết với các đối tác vận chuyển uy tín, đảm bảo hàng hóa đến tay khách hàng an toàn.
          </li>
        </ul>
      </transition>
      <p>Trên đây là một số loại hình dịch vụ phổ biến. Tại Green Service chuyên cung cấp dịch vụ kho bãi uy tín và chuyên nghiệp.</p>
    </div>

    <div class="section section-2">
      <transition name="slide-right" appear>
        <h2>2. Những lý bạn nên chọn dịch vụ của Green Service</h2>
      </transition>
      <p>Với diện tích kho bãi trên 100,000m2 được trang bị đầy đủ hệ thống phòng cháy chữa cháy, camera và bảo vệ chuyên nghiệp 24/24. Green Service tự tin có thể đáp ứng mọi yêu cầu của Quý khách hàng trong lưu kho, xếp dỡ và giao nhận hàng hóa:</p>
      <transition name="fade" appear>
        <ul>
          <li><b>An toàn, bảo mật hàng hóa: </b> Hệ thống kho đạt chuẩn, giám sát 24/7, bảo hiểm hàng hóa đầy đủ.
            .</li>
          <li><b>Tiết kiệm chi phí: </b>Giải pháp kho bãi linh hoạt, tối ưu diện tích lưu trữ, giúp doanh nghiệp giảm chi phí vận hành.</li>
          <li><b>Hệ thống quản lý hiện đại:</b>Công nghệ tiên tiến giúp theo dõi và kiểm soát hàng hóa chính xác.</li>
          <li><b> Hỗ trợ toàn diện:</b>Từ lưu trữ, bảo quản đến vận chuyển, Green Service cung cấp dịch vụ trọn gói giúp khách hàng yên tâm kinh doanh.</li>

        </ul>
      </transition>
    </div>

    <p>Trên đây là các thông tin liên quan đến dịch vụ mà Green Service cung cấp, nếu bạn quan tâm đến dịch vụ này có thể liên hệ với chúng tôi</p> </div>
  <Footer />
</div>

</template>


<script>
import Footer from '../Footer.vue';
export default {
  components: {Footer}
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter, .fade-leave-to {
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
  background-color: #2E7D32; /* Xanh lá đậm */
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
  flex-shrink: 0; /* Giữ nguyên kích thước */
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
