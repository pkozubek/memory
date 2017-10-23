$(document).ready(function(){
    var cardsValue = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
    
    function randomValueForCard(maxValue){
        return Math.floor((Math.random() * cardsValue.length)+1);
    }

    var cards = {
        pointed:0,
        tries:0,
        init:function(){
            $('.card').each(function(){
                var val = randomValueForCard(cardsValue.length)-1;
                $(this).attr('card-value',cardsValue[val]);
                cardsValue.splice(val, 1);
            });
            
            console.log(cardsValue);
        },
        update:function(){
            $('.card').on('click',function(){

                $(this).html('<p>'+$(this).attr('card-value')+'<p>').addClass('card-selected'); 

                if($('.card-selected').length == 2){
                    if($('.card-selected').first().attr('card-value') == $('.card-selected').last().attr('card-value')){
                        
                        if($('.card-hidden').length === 18){
                            $('#cards-container').html('game over');
                        }

                        $('.card-selected').each(function(){
                            $(this).removeClass('card-selected').addClass('card-hidden');
                        });
                        

                        if($('.card-hidden').length === 18){
                            console.log('cos nie dziala');
                            $('#cards-container').html('game over');
                        }
                    }
                    else{
                        cards.tries++;
                        setTimeout(function(){
                            $('.card-selected').each(function(){
                                $('#tries').html('tries: '+cards.tries);
                                $(this).html('').removeClass('card-selected');
                            });
                        },300);
                    }
                }
            });
        },
    }
    
    cards.init();
    cards.update();
});
