<template>
    <div ref="servicesSection" class="services-section">
    
        <h4 class="section-title green_title" :class="{ animate: isVisible }">_____ GREEN SERVICE _____</h4>

        <h2 class="section-title title_secon"  :class="{ animate: isVisible }">DỊCH VỤ CỦA CHÚNG TÔI</h2>
        
        <div class="services-container">
            <div 
                v-for="(service, index) in services" 
                :key="index" 
                class="service-box" 
                :class="{ animate: isVisible }"
            >
                <div class="icon">
                    <img :src="service.icon" :alt="service.title">
                </div>
                <h3>{{ service.title }}</h3>
                <p>{{ service.description }}</p>
                
                <ul class="sub-services">
                    <li v-for="(sub, i) in service.subServices" :key="i">
                        <a href="#">{{ sub }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isVisible: false,
            services: [
                {
                    title: "Xử lý chất thải",
                    description: "Giải pháp xử lý chất thải an toàn và hiệu quả.",
                    icon: "https://cdn-icons-png.flaticon.com/512/1903/1903162.png",
                    subServices: ["Trọn gói", "Xử lý chất thải y tế"]
                },
                {
                    title: "Logistics",
                    description: "Dịch vụ vận chuyển và lưu kho chuyên nghiệp.",
                    icon: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
                    subServices: ["Vận chuyển nội địa", "Kho bãi và lưu trữ", "Dịch vụ hải quan", "Giao hàng nhanh"]
                },
                {
                    title: "Tiêu hủy hàng lỗi",
                    description: "Đảm bảo hàng lỗi được xử lý an toàn.",
                    icon: "https://cdn-icons-png.flaticon.com/512/3917/3917690.png",
                    subServices: ["Tiêu hủy thực phẩm", "Xử lý hàng hết hạn", "Phá hủy hàng giả", "Tiêu hủy tài liệu"]
                }
            ]
        };
    },
    mounted() {
        window.addEventListener('scroll', this.checkScroll);
        this.checkScroll(); // Kiểm tra ngay khi tải trang
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.checkScroll);
    },
    methods: {
        checkScroll() {
            const section = this.$refs.servicesSection;
            if (!section) return;

            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.75) {
                this.isVisible = true;
            }
        }
    }
};
</script>

<style scoped>
/* Section chính */
.services-section {
    text-align: center;
    padding: 60px 20px;
    background: #f5f5f5;
    position: relative;
}

/* Tiêu đề */
.section-title {
    font-size: 32px;
    color: #2E7D32;
    margin-bottom: 40px;
    font-weight: bold;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 1s ease, transform 1s ease;
}
.section-title.animate {
    opacity: 1;
    transform: translateY(0);
}

/* Container dịch vụ */
.services-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    max-width: 1100px;
    margin: 0 auto;
}

/* Thẻ dịch vụ */
.service-box {
    background: white;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.5s ease, box-shadow 0.5s ease, opacity 1s ease;
    cursor: pointer;
    opacity: 0;
    transform: translateY(50px);
}

.service-box.animate {
    opacity: 1;
    transform: translateY(0);
}

/* Hover */
.service-box:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
}
.green_title {
color: rgb(16, 129, 64);
    font-family: Avo, sans-serif;
    font-size: 18px;
    font-weight: 500;
    text-transform: none;
    font-style: normal;
    line-height: 1.4em;
    letter-spacing: 0px;
    text-decoration: none;
}
/* Icon */
.icon img {
    width: 60px;
    height: 60px;
    margin-bottom: 15px;
}

/* Tiêu đề */
h3 {
    font-size: 22px;
    color: #2E7D32;
    margin-bottom: 10px;
}

/* Mô tả */
p {
    font-size: 14px;
    color: #555;
    margin-bottom: 15px;
}
.title_secon {

    color: rgb(50, 79, 122);
    font-family: Montserrat, sans-serif;
    font-size: 35px;
    font-weight: 700 !important;
}
/* Danh sách dịch vụ con */
.sub-services {
    margin-top: 10px;
    padding: 10px;
    list-style: none;
    background: #e8f5e9;
    border-radius: 5px;
}

.sub-services li {
    padding: 8px;
    border-bottom: 1px solid #c8e6c9;
}

.sub-services li:last-child {
    border-bottom: none;
}

.sub-services li a {
    text-decoration: none;
    color: #2E7D32;
    font-weight: bold;
    transition: color 0.3s ease;
}

.sub-services li a:hover {
    color: #1b5e20;
}

/* Responsive */
@media (max-width: 1024px) {
    .services-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .services-container {
        grid-template-columns: repeat(1, 1fr);
    }
}

</style>
