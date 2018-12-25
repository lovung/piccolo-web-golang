$.global = new Object();

$.global.item = [];
$.global.total = [];

$(document).ready(function() 
	{
  	var WindowWidth = $(window).width();
  	var SlideCount = [];
  	var SlidesWidth = [];
    
    $('.slide').css('width',WindowWidth+'px');
    $('ol#slides').each(function(index, sl) {
      $.global.item.push(0);
      SlideCount.push($(sl).children().length);
      SlidesWidth.push($(sl).children().length * WindowWidth);
      $(sl).css('width',SlidesWidth[index]+'px');
      $(sl).find("li:nth-child(1)").addClass('alive');
    });

    $.global.total = SlideCount;
    
    $('div#slide-window').each(function(index, sw) {
      console.log(index);
      $(sw).find("span#left").click(function() { Slide('back', index); }); 
      $(sw).find("span#right").click(function() { Slide('forward', index); });
    });
    
    // SlideCount.forEach(function(item, index, array) {
    //   $('#slides-$index').css('width',SlidesWidth[index]+'px');
  
    //   $("#slides-$index li:nth-child(1)").addClass('alive');
        
    //   $('#left-$index').click(function() { Slide('back', index); }); 
    //   $('#right-$index').click(function() { Slide('forward', index); });      
    // });
    // $('#slides-0').css('width',SlidesWidth[0]+'px');
    // $("#slides-0 li:nth-child(1)").addClass('alive');
    // $('#left-0').click(function() { Slide('back', 0); }); 
    // $('#right-0').click(function() { Slide('forward', 0); });
    // $('#slides-3').css('width',SlidesWidth[3]+'px');
    // $("#slides-3 li:nth-child(1)").addClass('alive');
    // $('#left-3').click(function() { Slide('back', 3); }); 
    // $('#right-3').click(function() { Slide('forward', 3); });
  });

function Slide(direction, index)
	{
    if (direction == 'back') { var $target = $.global.item[index] - 1; }
    if (direction == 'forward') { var $target = $.global.item[index] + 1; }  

    if ($target == -1) { DoIt($.global.total[index]-1, index); } 
    else if ($target == $.global.total[index]) { DoIt(0, index); }  
    else { DoIt($target, index); }
	}

function DoIt(target, index)
  {
    var $windowwidth = $(window).width();
	  var $margin = $windowwidth * target; 
    var $actualtarget = target+1;
    
    $('ol#slides').each(function(i, sl) {
      if (i == index) {
        $(sl).find("li:nth-child("+$actualtarget+")").addClass('alive');
        $(sl).css('transform','translate3d(-'+$margin+'px,0px,0px)');	
      }
    });
    
    $.global.item[index] = target;
    
    $('#count').html($.global.item[index]+1);
  }