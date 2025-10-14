import $ from 'jquery'; 

function FixSearch() {
    console.log("import EShop.js")
    $(window).on('scroll', function(){
        // 抓取滾動距離
        const scrolledPx = $(this).scrollTop(); // 存取距離上方的值
        if (scrolledPx > 50){ // 條件判斷
            $('.buried-search').addClass('apper'); // 加上 "active" class
        } else {
            $('.buried-search').removeClass('apper'); // 移除 "active" class
        }
    });
};

export default FixSearch;