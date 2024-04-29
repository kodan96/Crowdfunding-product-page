$(document).ready(() =>{
    $('.open').on('click', (e) => {
        $(e.currentTarget).toggle();
        $('.overlay').show();
        $('.close').toggle();
        $('.nav-items').css('opacity', '1');
        $('.hidden').hide()
        $('.card').hide();
    })

    $('.close').on('click', (e) => {
        $(e.currentTarget).toggle();
        $('.open').toggle();
        $('.overlay').hide();
        $('.nav-items').css('opacity', '0');
        $('.hidden').hide()
        $('.card').hide();
    });

    $('.hide-toggle').on('click', (e) => {
        
        $('.hidden').toggle();
        $('.overlay').toggle();
    });

    
        
    $('input[name="edition"]').change(function() {
        // Hide all .hidden-section elements
        $('.hidden-section').hide();
        $('.no-reward, .bamboo, .black, .special').css('border-color', '');
        $(this).closest('.no-reward, .bamboo, .black, .special').css('border-color', 'hsl(176, 50%, 47%)');
        
        $(this).closest('.no-reward, .bamboo, .black, .special').find('.hidden-section').slideToggle();
    });

    $('.modal').on('click', (e) => {
        $('.overlay').hide();
        $('.hidden').hide();
        
    });

    $('.continue').on('click', (e) => {
        e.preventDefault();
        if ($('input[name="pledge"]').val()) {
            $('.hidden').hide();
            $('.card').show();
        } else {
            $('.error').html('Please select a pledge amount');
        }  
    });


});