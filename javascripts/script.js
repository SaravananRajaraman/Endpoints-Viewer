$(function () {
    var apiList;
    var firstUrl;
    $("#sample").on('click',function(){
        $.getJSON("json/trackit.json", function (data) {
            apiList = data.data;
            renderHandle(data);
        });
    });

    $("body").on('click', '.json', function () {
        $("#jsonViewer").JSONView($(this).attr('data-json'));
        $("#jsonView").modal('show');
        $("#myModalLabel").text($(this).parent('td').prev('td').text().trim().toUpperCase());
    });
    function renderHandle(data){
        $('#heading').empty().append(Handlebars.compile($("#header").html())(data));
        $('#basicInformation').empty().append(Handlebars.compile($("#basicInfo").html())(data));
        $("body").on("click", "li", function () {
            var url = $(this).find(".urlText").text();
            viewInfo(url);
        });
    }
    function viewInfo(url){
        for (var i = 0; i < apiList.length; i++) {
            if (apiList[i]["url"] == url) {
                Handlebars.registerHelper('each', function (context, options) {
                    var fn = options.fn, inverse = options.inverse;
                    var ret = "";
                    var empty = true;
                    for (key in context) {
                        empty = false;
                        break;
                    }
                    if (!empty) {
                        for (key in context) {
                            ret = ret + fn({ 'key': key, 'value': JSON.stringify(context[key])});
                        }
                    } else {
                        ret = inverse(this);
                    }
                    return ret;
                });
                $('#details').empty().append(Handlebars.compile($("#information").html())(apiList[i]));
                return;
            }
        }
    }
});