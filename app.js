$(document).ready(function() {
    //set default variables
    var color = 'white';
    
    
    $('.box').on('click', function() {
        $(this).addClass(color);
    });
    $('.box').on('dblclick', function() {
        $(this).removeClass('white');
    });
    $('#reset').on('click', function() {
        $('.box').attr('class', 'box')/*.removeClass('white')*/;
    });
    
    //Colors for boxes - original color variable is set at the top of this document
     $('#red').on('click', function() {
           color = 'red';
     });
     $('#green').on('click', function() {
           color = 'green';
     });
     $('#blue').on('click', function() {
           color = 'blue';
     });
     $('#yellow').on('click', function() {
           color = 'yellow';
     });
     $('#white').on('click', function() {
           color = 'white';
     });
     
     
     
});