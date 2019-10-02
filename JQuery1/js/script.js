function addListItem(){
    let class_name = randomColor();
    let text = $("#new-text").val();
    $("#todoList").append('<li class=\"'+ class_name + '\"> <div ><input type="checkbox"></div>' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp' + text + '</li>');
    $("#new-text").val('');
};

function randomColor(){
    var names = ["color1", "color2", "color3", "color4", "color5", "color6"];
        return names [Math.floor(Math.random()*names.length)];
};

function reply_click(value){
    $('input:checkbox:checked').each(function(){
    console.log($(this));
    $(this).parent().parent().removeClass();
    $(this).parent().parent().addClass(value);
    

});
    
};

$(function() {
    
    $("#add").on('click', addListItem);
    
});




