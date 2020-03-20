function boardListType(){
    var listType = $(".list-type a");
    var boardType = $("ul.board-type");

    listType.on('click',function(){
        var thisId = $(this).attr('id');

        listType.removeClass('on');
        $(this).addClass('on');

        boardType.removeClass('board-type01 board-type02').addClass(thisId);
        boardType.css({opacity:0}).animate({opacity:1},600);
        return false;
    })
    boardType.css({opacity:1});
}

jQuery(function($) {
    boardListType();
})