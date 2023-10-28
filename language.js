$("#lang_cn").click(function () {
    window.location.href='index-zh.html#AboutUs';
});

$("#lang_en").click(function () {
    window.location.href='index-en.html#AboutUs';
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
                if(type=="zh_CN") {
                    $(this).removeAttr("style");
                } else {
                    $(this).prop("style", "font-family: 'Calibri Light', arial, sans-sarif;");
                }
            });
            if (type=="zh_CN") {
                $('#sec6_slide_file').attr('href', 'file/slides_cn.pptx');
                $('#sec6_slide_file').attr('download', '公司PPT.pptx');
                $('#sec6_product_file').attr('href', 'file/products_cn.pdf');
                $('#sec6_product_file').attr('download', '产品介绍.pdf');
                // $('#sec6_map_img').attr('src', 'img/map_cn.png');
            } else {
                $('#sec6_slide_file').attr('href', 'file/slides_en.pptx');
                $('#sec6_slide_file').attr('download', 'Slide.pptx');
                $('#sec6_product_file').attr('href', 'file/products_en.pdf');
                $('#sec6_product_file').attr('download', 'Product catalogue.pdf');
                $('#sec6_address').removeAttr("style");
                // $('#sec6_map_img').attr('src', 'img/map_en.png');
            }
        }
    });
}