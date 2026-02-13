// 初始化AOS滚动动画库
AOS.init({
    duration: 1000, // 动画持续时间（毫秒）
    once: true      // 动画仅执行一次（向下滚动时）
});
// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化AOS动画（保留你原有的AOS初始化）
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,    // 动画时长
            easing: 'ease-in-out', // 动画缓动效果
            once: true        // 只执行一次动画
        });
    }

    // ============== 视频懒加载核心逻辑 ==============
    const lazyVideo = document.getElementById('lazy-video');
    
    // 检查视频元素是否存在（避免报错）
    if (lazyVideo) {
        // 延迟500ms加载视频（不阻塞页面首屏加载）
        setTimeout(() => {
            // 开始预加载视频
            lazyVideo.preload = 'auto';
            // 触发视频加载
            lazyVideo.load();
            
            // 确保视频加载完成后自动播放（兼容部分浏览器）
            lazyVideo.addEventListener('loadeddata', function() {
                lazyVideo.play().catch(err => {
                    console.log('视频自动播放触发:', err);
                });
            });
        }, 500);

        // 可选：滚动监听（如果视频不在首屏时启用）
        // const observer = new IntersectionObserver((entries) => {
        //     entries.forEach(entry => {
        //         if (entry.isIntersecting) {
        //             lazyVideo.preload = 'auto';
        //             lazyVideo.load();
        //             observer.unobserve(lazyVideo);
        //         }
        //     });
        // }, { threshold: 0.1 });
        // observer.observe(lazyVideo);
    }
});

// // 可选：导航栏滚动变色（如果需要可以保留）
// window.addEventListener('scroll', function() {
//     const navbar = document.querySelector('.navbar');
//     if (navbar) {
//         if (window.scrollY > 50) {
//             navbar.style.backgroundColor = 'rgba(52, 58, 64, 0.9)';
//         } else {
//             navbar.style.backgroundColor = 'transparent';
//         }
//     }
// });