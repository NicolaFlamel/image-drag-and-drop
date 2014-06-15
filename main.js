(function($){

var image = document.getElementById('img');
var dropImage = document.querySelector('#target');
var parser, doc, finalSrc
dropImage.addEventListener("drop", function (event) {
    if (event.dataTransfer) {
        $(".main-image").css({opacity: 0, width: "30%"});
        setTimeout(function () {
            $(".main-image").animate({opacity: "1"}, "slow")
        }, 0.5);
        parser = new DOMParser();
        doc = parser.parseFromString(event.dataTransfer.getData("text/html"), "text/html");
        finalSrc = doc.getElementsByTagName("img")[0].src;
        image.setAttribute("src", finalSrc);
    }
    else {
        alert("Your browser does not support the dataTransfer object.");
    }

    if (event.stopPropagation) {
        event.stopPropagation();
    }
    else {
        event.cancelBubble = true;
    }
    return false;


}, false)

/***************************/

var imageFromDescktop = document.querySelector('#target'),
    file;

imageFromDescktop.addEventListener('dragover', function (event) {
    if (event.preventDefault) event.preventDefault();
    if (event.stopPropagation) event.stopPropagation();
});

imageFromDescktop.addEventListener('drop', function (event) {
    if (event.preventDefault) event.preventDefault();
    if (event.stopPropagation) event.stopPropagation();
    file = event.dataTransfer.files[0],
        reader = new FileReader();
    reader.onload = function (event) {
        img.setAttribute("src", event.target.result);
    };

    reader.readAsDataURL(file);
});

/***************************/

function animateAdd() {
    $("#target").addClass("animate");
    $("#target").removeClass("animate-out");
    $("#target span:nth-child(1)").css("opacity", "0");
    $("#target span:nth-child(2)").css("opacity", "1");
}

function animateRemove() {
    $("#target").addClass("animate-out");
    $("#target").removeClass("animate");
    $("#target span:nth-child(1)").css("opacity", "1");
    $("#target span:nth-child(2)").css("opacity", "0");
}


})(jQuery);
