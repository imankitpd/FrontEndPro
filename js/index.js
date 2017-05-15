(function ($) {

    $("#toggle_in").click(function (e) {
        e.preventDefault();
        $(".main-section").addClass("main-section-closed");
        $(".toggle-out").removeClass("hidden");
        $(".main-section-header").addClass("close-header");
    });

    $(".toggle-out").click(function (e) {
        e.preventDefault();
        $(".main-section").removeClass("main-section-closed");
        $(".toggle-out").addClass("hidden");
        $(".main-section-header").removeClass("close-header");
    });

    function getTime(sTime, eTime) {
            var vidUrl = "https://www.youtube.com/embed/vZBCTc9zHtI" + "?start=" + sTime + "&end=" + eTime;
            $("iframe").attr("src", vidUrl);
        }

    $("#submit").click(function () {
        var startTimeArr = $("#start-time").val().split(":");
        var endTimeArr = $("#end-time").val().split(":");

        var startSeconds = (parseInt(startTimeArr[0]) * 60 * 60) + parseInt((startTimeArr[1] * 60) + parseInt(startTimeArr[2]));
        var endSeconds = (parseInt(endTimeArr[0]) * 60 * 60) + parseInt((endTimeArr[1] * 60) + parseInt(endTimeArr[2]));
        
        console.log(startSeconds, endSeconds);
        getTime(startSeconds, endSeconds);
        
    });

    $("input[name='graphOption']").change(function () {
        $("svg").addClass("hidden");
        $("#" + $("input[name='graphOption']:checked").val()).removeClass("hidden");
    }).change();
})(jQuery);