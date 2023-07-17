var Language_Index = "zh_CN"; //标识语言

jQuery(document).ready(function () {
    // alert("页面加载时调用的方法");
    Language_Index = jQuery.i18n.normaliseLanguageCode({}); //获取浏览器的语言
    if(Language_Index != "zh_CN") {
        Language_Index = "en_US";
    }
    loadProperties(Language_Index);
});

$("#lang_cn").click(function () {
    Language_Index = "zh_CN";
    loadProperties(Language_Index);
});

$("#lang_en").click(function () {
    Language_Index = "en_US";
    loadProperties(Language_Index);
});

function loadProperties(type) {
    jQuery.i18n.properties({
        name: 'message', // 资源文件名称
        path: './lang/', // 资源文件所在目录路径
        mode: 'map', // 模式：变量或 Map
        language: type, // 对应的语言
        cache: false,
        encoding: 'UTF-8',
        callback: function () { // 回调方法
            $('.i18n').each(function(){
                $(this).text($.i18n.prop($(this).attr("name")));
            });
            if (type=="zh_CN") {
                $('#sec6_slide_file').attr('href', 'file/slides_cn.pptx');
                $('#sec6_slide_file').attr('download', '公司PPT.pptx');
                $('#sec6_product_file').attr('href', 'file/products_cn.pdf');
                $('#sec6_product_file').attr('download', '产品介绍.pdf');
                $('#sec6_map_img').attr('src', 'img/map_cn.png');
            } else {
                $('#sec6_slide_file').attr('href', 'file/slides_en.pptx');
                $('#sec6_slide_file').attr('download', 'Slide.pptx');
                $('#sec6_product_file').attr('href', 'file/products_en.pdf');
                $('#sec6_product_file').attr('download', 'Product catalogue.pdf');
                $('#sec6_map_img').attr('src', 'img/map_en.png');
            }
        }
    });
}