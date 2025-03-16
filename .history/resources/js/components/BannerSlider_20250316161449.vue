<template>
    <div class="carousel-container">
        <carousel
            ref="carousel"
            :per-page="1"
            :autoplay="true"
            :loop="true"
            :speed="3000"
            @page-change="handleSlideChange"
        >
            <slide v-for="(slide, index) in slides" :key="index">
                <div class="slide-content">
                    <img :src="slide.image" :alt="slide.title">
                    <div class="text-box" :class="{ 'animate-text': index === currentIndex }">
                        <h2>{{ slide.title }}</h2>
                        <p>{{ slide.description }}</p>
                            <button class="contact-button">Liên hệ ngay</button>

                    </div>
                </div>
            </slide>

            <!-- Nút điều hướng -->
            <template #prev>
                <button class="nav-button left" @click="$refs.carousel.goToPage($refs.carousel.getPrevPage())">
                    &#10094;
                </button>
            </template>
            <template #next>
                <button class="nav-button right" @click="$refs.carousel.goToPage($refs.carousel.getNextPage())">
                    &#10095;
                </button>
            </template>
        </carousel>
    </div>

</template>


<script>
import { Carousel, Slide } from "vue-carousel";

export default {
    components: { Carousel, Slide },
    data() {
        return {
            slides: [
                { image: "https://btnmt.1cdn.vn/2022/10/27/nha-may-rac-.png", title: "Về Green Service Global", description: "Green Service là doanh nghiệp hàng đầu trong lĩnh vực logistics và quản lý chất thải, cam kết cung cấp giải pháp toàn diện giúp tối ưu hóa chi phí và bảo vệ môi trường." },
                { image: "https://3w-logistics.com/wp-content/uploads/2022/08/dich-vu-van-chuyen-hang-bang-container-min.png", title: "Logistics", description: "Vận chuyển an toàn" },
                { image: "https://vietmylogistic.com/wp-content/uploads/2017/11/goilaichotoi.jpg", title: "Quản lý chất thải", description: "Bảo vệ môi trường" }
            ],
            currentIndex: 0
        };
    },
    methods: {
        handleSlideChange(index) {
            this.currentIndex = index;
        }
    }
};
</script>


<style scoped>
.carousel-container {
    font-family: Montserrat, sans-serif;
    position: relative;
    width: 100%;
}

.slide-content {
    font-family: Montserrat, sans-serif;
    position: relative;
    width: 100%;
    height: 500px;
}

.slide-content img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.text-box {
    position: absolute;
    bottom: 50px;
    left: 50px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 20px;
    border-radius: 8px;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

/* Kích hoạt animation */
.animate-text {
    opacity: 1;
    transform: translateY(0);
}

/* Nút điều hướng */
.nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 24px;
    z-index: 10;
}

.left {
    left: 10px;
}

.right {
    right: 10px;
}

.nav-button:hover {
    background: rgba(0, 0, 0, 0.8);
}


.contact-button {
    background: #2E7D32;
    color: white;
    padding: 10px 20px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
    display: inline-block;
    transition: background 0.3s ease-in-out;
}

.contact-button:hover {
    background: #1b5e20;
}

</style>
