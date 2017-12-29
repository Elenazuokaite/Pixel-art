// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function makeGrid(y, x) {
    if ($('.test')) {
        $('.test').remove();
    }
    for (var rows = 0; rows < y; rows++) {
        $("<tr class='test'></tr>").appendTo("#pixel_canvas");        
    };
    for (var columns = 0; columns < x; columns++) {
            $("<td></td>").appendTo(".test");
    };
    $(".test").width(960 / y);
    $(".test").height(960 / x);
    var colorValue = $('#colorPicker');
    drawCanvas(colorValue.val());
    colorValue.change(function () {
        drawCanvas($(this).val());
    });   
};
function drawCanvas(color) {
    $("td").mouseover(function () {
    $(this).css('background', color);
});
};