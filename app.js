$(function () {
    $('#search_button').click(function () {
        let param =
        {
            zipcode: $('#zip_code').val(),
            limit: 1
        }
        $.ajax({
            type: "GET",
            chche: false,
            data: param,
            url: "https://zipcloud.ibsnet.co.jp/api/search",
            dataType: "jsonp",
            success: function (data) {
                if (data.status == 200) {
                    let result_txt = '';
                    if (data.results == null) {
                        result_txt += '<div>There is no corresponding address.</div>';
                    } else {
                        result_txt += '<div>Address:'
                            + data.results[0].address1
                            + data.results[0].address2
                            + data.results[0].address3
                            + '</div></br>' +
                            '<div>Ruby:'
                            + data.results[0].kana1
                            + data.results[0].kana2
                            + data.results[0].kana3
                        '</div></br>';
                    }
                    $('#search_result').html(result_txt);
                } else {
                    $('#search_result').html(data.message);

                }
            }

        })
    })
});