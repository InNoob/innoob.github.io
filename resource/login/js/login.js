window.onload = function() {
    $("#container").css("margin-top", (window.innerHeight - 602) / 2 + 'px');

    var e = $('.lbl-boxmark');
    var a = $('.userinfo');
    var line = $('.underline');

    a[0].onfocus = function() {
        $('#' + e[0].id).addClass("lbl-boxmark-onhold");
        $('#' + e[0].id).removeClass("lbl-boxmark");
        a[0].focus();
        $('#' + line[0].id).addClass("underline-onhold");
        $('#' + line[0].id).removeClass("underline");
    }
    a[1].onfocus = function() {
        $('#' + e[1].id).addClass("lbl-boxmark-onhold");
        $('#' + e[1].id).removeClass("lbl-boxmark");
        a[1].focus();
        $('#' + line[1].id).addClass("underline-onhold");
        $('#' + line[1].id).removeClass("underline");
    }
    e[0].onclick = function() {
        $('#' + e[0].id).addClass("lbl-boxmark-onhold");
        $('#' + e[0].id).removeClass("lbl-boxmark");
        a[0].focus();
        $('#' + line[0].id).addClass("underline-onhold");
        $('#' + line[0].id).removeClass("underline");
    }
    e[1].onclick = function() {
        $('#' + e[1].id).addClass("lbl-boxmark-onhold");
        $('#' + e[1].id).removeClass("lbl-boxmark");
        a[1].focus();
        $('#' + line[1].id).addClass("underline-onhold");
        $('#' + line[1].id).removeClass("underline");
    }

    a[0].onblur = function() {
        if (a[0].value != "") return;
        $('#' + e[0].id).addClass("lbl-boxmark");
        $('#' + e[0].id).removeClass("lbl-boxmark-onhold");
        $('#' + line[0].id).addClass("underline");
        $('#' + line[0].id).removeClass("underline-onhold");
    }
    a[1].onblur = function() {
        if (a[1].value != "") return;
        $('#' + e[1].id).addClass("lbl-boxmark");
        $('#' + e[1].id).removeClass("lbl-boxmark-onhold");
        $('#' + line[1].id).addClass("underline");
        $('#' + line[1].id).removeClass("underline-onhold");
    }
    
    var optionbtn = $('.otheroptionbtn');
    var options = $('.otheroption');
    var option = $('.option');

    optionbtn[0].onclick = function() {
        $('#' + options[0].id).addClass("otheroption-display");
        $('#' + option[0].id).addClass("option-display");
        $('#' + option[1].id).addClass("option-display");
        $('#' + option[2].id).addClass("option-display");
    }
    optionbtn[0].onblur = function() {
        $('#' + options[0].id).removeClass("otheroption-display");
        $('#' + option[0].id).removeClass("option-display");
        $('#' + option[1].id).removeClass("option-display");
        $('#' + option[2].id).removeClass("option-display");
    }
}
