<template>
    <nav :class="{'navbar': true, 'fixed': isScrolled}">
        <div class="logo">
            <img src="/images/logo.png" alt="Logo" ref="logo">
        </div>

        <ul class="menu">
            <li><router-link to="/">{{ $t('home') }}</router-link></li>

            <li class="dropdown">
                <a href="#">{{ $t('Xử lý chất thải') }}     <svg class="icon" viewBox="0 0 24 24">
            <path fill="white" d="M7 10l5 5 5-5z"></path>
        </svg></a>
                <ul class="submenu">
                    <li><router-link to="/trongoi">{{ $t('Trọn gói') }}</router-link></li>
                    <li><router-link to="/yte">{{ $t('Xử lý CT y tế') }}</router-link></li>
                    <li><router-link to="/baogia">{{ $t('Báo giá') }}</router-link></li>
                </ul>
            </li>
            
            <li class="dropdown">
                <a href="#">{{ $t('logistic') }}     <svg class="icon" viewBox="0 0 24 24">
            <path fill="white" d="M7 10l5 5 5-5z"></path>
        </svg></a>
                <ul class="submenu">
                    <li><router-link to="/logistic/vantai">{{ $t('Vận tải quốc tế (Sea, Air)') }}</router-link></li>
                    <li><router-link to="/logistic/chuyenphatnhanh">{{ $t('Chuyển phát nhanh quốc tế') }}</router-link></li>
                    <li><router-link to="/logistic/co">{{ $t('Xin C/O') }}</router-link></li>
                    <li><router-link to="/tuvanhaiquan">{{ $t('Tư vấn Hải Quan') }}</router-link></li>
                    <li><router-link to="/thutuchaiquan">{{ $t('Thủ tục Hải quan xuất - nhập khẩu') }}</router-link></li>
                    <li><router-link to="/thutuchaiquan">{{ $t('Thanh khoản hàng gia công, sản xuất xuất khẩu') }}</router-link></li>
                    <li><router-link to="/thutuchaiquan">{{ $t('Vận tải Nội địa') }}</router-link></li>
                    <li><router-link to="/thutuchaiquan">{{ $t('Dịch vụ kho bãi') }}</router-link></li>
                </ul>
            </li>
            
            <li class="dropdown">
                <a href="#">{{ $t('Tiêu hủy hàng lỗi') }}  
                 <svg class="icon" viewBox="0 0 24 24">
            <path fill="white" d="M7 10l5 5 5-5z"></path>
        </svg></a>
                <ul class="submenu">
                    <li><router-link to="/waste-management">{{ $t('Tiêu hủy hàng lỗi') }}</router-link></li>
                    <li><router-link to="/waste-management">{{ $t('Tiêu hủy hàng không có giá trị') }}</router-link></li>
                    <li><router-link to="/package">{{ $t('Đơn giá') }}</router-link></li>
                </ul>
            </li>

            <li class="dropdown">
                <a href="#">{{ $t('Hồ sơ năng lực') }}</a>
                <ul class="submenu">
                    <li><router-link to="/sodo">{{ $t('Sơ đồ tổ chức') }}</router-link></li>
                    <li><router-link to="/hethon">{{ $t('Hệ thống xử lý') }}</router-link></li>
                </ul>
            </li>
            <li><router-link to="/news">{{ $t('Tin tức') }}</router-link></li>
        </ul>

        <div class="right-section">
            <!-- Thay ô tìm kiếm bằng các icon -->
            <div class="social-icons">
                <a href="https://www.facebook.com" target="_blank">
                    <img src="/images/facebook-icon.png" alt="Facebook">
                </a>
                <a href="https://zalo.me" target="_blank">
                    <img src="/images/zalo-icon.png" alt="Zalo">
                </a>
                <a href="tel:+84123456789">
                    <img src="/images/hotline-icon.png" alt="Hotline">
                </a>
            </div>
            
            <!-- Select ngôn ngữ -->
            <select v-model="$i18n.locale" class="language-select">
                <option value="vi">🇻🇳 Tiếng Việt</option>
                <option value="en">🇺🇸 English</option>
            </select>
        </div>
    </nav>
</template>

<style scoped>
.social-icons {
    display: flex;
    gap: 10px;
}

.social-icons img {
    width: 30px;
    height: 30px;
    transition: transform 0.3s ease;
}

.social-icons img:hover {
    transform: scale(1.1);
}
</style>
