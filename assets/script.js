$(document).ready(function () {
    //Accordion jQuery
    $('.articles').accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    });

    //toggle jQuery to show each analysis without cluttering too much space on the webpage.
    $("#toggle").click(function () {
        $("#article1").toggle('slow');
    });
    $("#toggle2").click(function () {
        $("#article2").toggle('slow');
    });
    $("#toggle3").click(function () {
        $("#article3").toggle('slow');
    });
    $("#toggle4").click(function () {
        $("#article4").toggle('slow');
    });
    $("#toggle5").click(function () {
        $("#article5").toggle('slow');
    });
    $("#toggle6").click(function () {
        $("#article6").toggle('slow');
    });
    $("#toggle7").click(function () {
        $("#article7").toggle('slow');
    });

});