function makeGrid(y, x) {
    if ($('.grid')) {
        $('.grid').remove();
    }
    for (var rows = 0; rows < y; rows++) {
        $("<tr class='grid'></tr>").appendTo("#pixel_canvas");        
    };
    for (var columns = 0; columns < x; columns++) {
            $("<td></td>").appendTo(".grid");
    };
    $(".grid").width(960 / y);
    $(".grid").height(960 / x);
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