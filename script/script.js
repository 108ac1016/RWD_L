$(document).ready(function(){

    $('.info').hide();

    $(".info").click(function(){
        $(this).hide()
    });
    // hover
    $(".news").hover(
        function(){
            $(".button").css("background-color", "transparent");
            $(".news").css("background-color", "#000000");
            $("a").css("color", "transparent");
            $("#news").css("color", "#FFFFFF");
            $(".s_button").css("background-color", "transparent");
        },
        function(){
            $(".button").css("background-color", "#000000");
            $("a").css("color", "#FFFFFF");
            $(".s_button").css("background-color", "#000000");
        }
    );
    $(".albums").hover(
        function(){
            $(".button").css("background-color", "transparent");
            $(".albums").css("background-color", "#000000");
            $("a").css("color", "transparent");
            $("#albums").css("color", "#FFFFFF");
            $(".s_button").css("background-color", "transparent");
        },
        function(){
            $(".button").css("background-color", "#000000");
            $("a").css("color", "#FFFFFF");
            $(".s_button").css("background-color", "#000000");
        }
    );
    $(".events").hover(
        function(){
            $(".button").css("background-color", "transparent");
            $(".events").css("background-color", "#000000");
            $("a").css("color", "transparent");
            $("#events").css("color", "#FFFFFF");
            $(".s_button").css("background-color", "transparent");
        },
        function(){
            $(".button").css("background-color", "#000000");
            $("a").css("color", "#FFFFFF");
            $(".s_button").css("background-color", "#000000");
        }
    );
    $(".store").hover(
        function(){
            $(".button").css("background-color", "transparent");
            $(".store").css("background-color", "#000000");
            $("a").css("color", "transparent");
            $("#store").css("color", "#FFFFFF");
            $(".s_button").css("background-color", "transparent");
        },
        function(){
            $(".button").css("background-color", "#000000");
            $("a").css("color", "#FFFFFF");
            $(".s_button").css("background-color", "#000000");
        }
    );
    $(".s_button").hover(
        function(){
            $(".button").css("background-color", "transparent");
            $("a").css("color", "transparent");
        },
        function(){
            $(".button").css("background-color", "#000000");
            $("a").css("color", "#FFFFFF");
        }
    );
    $('.disc').click(function(){
        
        switch(true){
            case $(this).hasClass("first"):
                $('.selected').attr("src", "img/1_go_to_the_future.jpg");
                $('.name').html("GO TO THE FUTURE");
                $('.date').html("2007.05.09");
                $('.tracks').html(
                    "01.三日月サンセット" + "<br>" +
                    "02.インナーワールド" + "<br>" +
                    "03.あめふら" + "<br>" +
                    "04.GO TO THE FUTURE" + "<br>" +
                    "05.フクロウ" + "<br>" +
                    "06.開花" + "<br>" +
                    "07.…"
                    );
                break;
            case $(this).hasClass("second"):
                $('.selected').attr("src", "img/2_night_fishing.jpg");
                $('.name').html("NIGHT FISHING");
                $('.date').html("2008.01.23");
                $('.tracks').html(
                    "01.ワード" + "<br>" +
                    "02.サンプル" + "<br>" +
                    "03.ナイトフィッシングイズグッド" + "<br>" +
                    "04.雨は気まぐれ" + "<br>" +
                    "05.マレーシア32" + "<br>" +
                    "06.うねり" + "<br>" +
                    "07.…"
                    );
                break;
            case $(this).hasClass("third"):
                $('.selected').attr("src", "img/3_shinshiro.jpg");
                $('.name').html("シンシロ");
                $('.date').html("2009.01.21");
                $('.tracks').html(
                    "01.Ame (B)" + "<br>" +
                    "02.ライトダンス" + "<br>" +
                    "03.セントレイ" + "<br>" +
                    "04.ネイティブダンサー" + "<br>" +
                    "05.minnanouta" + "<br>" +
                    "06.雑踏" + "<br>" +
                    "07.黄色い車" + "<br>" +
                    "08.…"
                    );
                break;
            case $(this).hasClass("forth"):
                $('.selected').attr("src", "img/4_kikuuiki.jpg");
                $('.name').html("kikuuiki");
                $('.date').html("2010.03.17");
                $('.tracks').html(
                    "01.intro = 汽空域" + "<br>" +
                    "02.潮" + "<br>" +
                    "03.YES NO" + "<br>" +
                    "04.アルクアラウンド" + "<br>" +
                    "05.Klee" + "<br>" +
                    "06.21.1" + "<br>" +
                    "07.アンダー" + "<br>" +
                    "08.…"
                    );
                break;
            case $(this).hasClass("fifth"):
                $('.selected').attr("src", "img/5_documentaly.jpg");
                $('.name').html("DocumentaLy");
                $('.date').html("2011.09.28");
                $('.tracks').html(
                    "01.RL" + "<br>" +
                    "02.アイデンティティ" + "<br>" +
                    "03.モノクロトウキョー" + "<br>" +
                    "04.ルーキー" + "<br>" +
                    "05.アンタレスと針" + "<br>" +
                    "06.仮面の街" + "<br>" +
                    "07.流線" + "<br>" +
                    "08.…"
                    );
                break;
            case $(this).hasClass("sixth"):
                $('.selected').attr("src", "img/6_sakanaction.jpg");
                $('.name').html("sakanaction");
                $('.date').html("2013.03.13");
                $('.tracks').html(
                    "01.intro" + "<br>" +
                    "02.INORI" + "<br>" +
                    "03.ミュージック" + "<br>" +
                    "04.夜の踊り子" + "<br>" +
                    "05.なんてったって春" + "<br>" +
                    "06.アルデバラン" + "<br>" +
                    "07.M" + "<br>" +
                    "08.…"
                    );
                break;
            case $(this).hasClass("seventh"):
                $('.selected').attr("src", "img/7_834.194.jpg");
                $('.name').html("834.194");
                $('.date').html("2019.06.19");
                $('.tracks').html(
                    "01.忘れられないの" + "<br>" +
                    "02.マッチとピーナッツ" + "<br>" +
                    "03.陽炎" + "<br>" +
                    "04.多分、風。" + "<br>" +
                    "05.新宝島" + "<br>" +
                    "06.モス" + "<br>" +
                    "07.「聴きたかったダンスミュージック、リキッドルームに」" + "<br>" +
                    "08.…"
                    );
                break;
        }
        $('.info').show()
    });
});