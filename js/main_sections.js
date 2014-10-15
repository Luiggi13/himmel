// JavaScript Document

/***********************************************
* ANIMACIONES TONDER
***********************************************/
$(document).ready(function(){
	

	$.easing.expo = function (x, t, b, c, d) {
        return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    };

//HOVER BOTONERA HEADER
$(".item_navbar").live ("mouseover", function() { $(this).stop().animate({ backgroundColor:'#f1f0f0'}, 200); });
$(".item_navbar").live ("mouseout", function() { $(this).stop().animate({ backgroundColor:'#ffffff' }, 200); });

//HOVER BOTONERA FOOTER
$('#bfb a').mouseover(function() {
	$(this).stop().animate({'background-color': '#ffffff'}, 200);
	$(this).find("#fb").css({'background-position': '-52px -104px'});
});

$('#bfb a').mouseout(function() {
	$(this).stop().animate({'background-color': '#000000'}, 200);
	$(this).find("#fb").css({'background-position': '-52px -81px'});
});


$('#btw a').mouseover(function() {
	$(this).stop().animate({'background-color': '#ffffff'}, 200);
	$(this).find("#tw").css({'background-position': '-64px -100px'});
});

$('#btw a').mouseout(function() {
	$(this).stop().animate({'background-color': '#000000'}, 200);
	$(this).find("#tw").css({'background-position': '-64px -81px'});
});


$('#bmail a').mouseover(function() {
	$(this).stop().animate({'background-color': '#ffffff'}, 200);
	$(this).find("#mail").css({'background-position': '-23px -99px'});
});

$('#bmail a').mouseout(function() {
	$(this).stop().animate({'background-color': '#000000'}, 200);
	$(this).find("#mail").css({'background-position': '-23px -81px'});
});


//HOVER BOTONERA LATERAL


$('#bsomos').mouseover(function() {
		if ($(this).attr("activo")==1){
		
		$(this).css({backgroundColor:'#ffffff'});
		$(this).find("#somos").css({'background-position': '0 -39px'});	
		
		}
		
		else{
			
		$(this).stop().animate({ backgroundColor:'#ffffff' }, 200);		
		$(this).find("#somos").css({'background-position': '0 -39px'});	
			
		}
	
});

$('#bsomos').mouseout(function() {
	
		if ($(this).attr("activo")==1){
		
		$(this).css({backgroundColor:'#ffffff'});
		$(this).find("#somos").css({'background-position': '0 -39px'});	
		
		}
		
		else{
			
		$(this).stop().animate({ backgroundColor:'transparent' }, 200);		
		$(this).find("#somos").css({'background-position': '0 0'});	
			
		}	
});

$('#bentendemos').mouseover(function() {
	
		if ($(this).attr("activo")==1){
		
		$(this).css({backgroundColor:'#ffffff'});
		$(this).find("#entendemos").css({'background-position': '-40px -35px'});	
		
		}
		
		else{
			
		$(this).stop().animate({ backgroundColor:'#ffffff' }, 200);		
		$(this).find("#entendemos").css({'background-position': '-40px -35px'});	
			
		}	
	
});

$('#bentendemos').mouseout(function() {
	
		if ($(this).attr("activo")==1){
		
		$(this).css({backgroundColor:'#ffffff'});
		$(this).find("#entendemos").css({'background-position': '-40px -35px'});
		
		}
		
		else{
			
		$(this).stop().animate({ backgroundColor:'transparent' }, 200);		
		$(this).find("#entendemos").css({'background-position': '-40px 0'});	
			
		}
});

$('#bproponemos').mouseover(function() {
	
	    if ($(this).attr("activo")==1){
		
		$(this).css({backgroundColor:'#ffffff'});
		$(this).find("#proponemos").css({'background-position': '-77px -40px'});	
		
		}
		
		else{
			
		$(this).stop().animate({ backgroundColor:'#ffffff' }, 200);		
		$(this).find("#proponemos").css({'background-position': '-77px -40px'});	
			
		}
	
	
});

$('#bproponemos').mouseout(function() {
	
		if ($(this).attr("activo")==1){
		
		$(this).css({backgroundColor:'#ffffff'});
		$(this).find("#proponemos").css({'background-position': '-77px -40px'});	
		
		}
		
		else{
			
		$(this).stop().animate({ backgroundColor:'transparent' }, 200);		
		$(this).find("#proponemos").css({'background-position': '-77px 0'});	
			
		}
		
});





$('#bcreamos').mouseover(function() {
	
	 	if ($(this).attr("activo")==1){
		
		$(this).css({backgroundColor:'#ffffff'});
		$(this).find("#creamos").css({'background-position': '-105px -38px'});	
		
		}
		
		else{
			
		$(this).stop().animate({ backgroundColor:'#ffffff' }, 200);		
		$(this).find("#creamos").css({'background-position': '-105px -38px'});	
			
		}
		
});

$('#bcreamos').mouseout(function() {
	
		if ($(this).attr("activo")==1){
		
		$(this).css({backgroundColor:'#ffffff'});
		$(this).find("#creamos").css({'background-position': '-105px -38px'});
		
		}
		
		else{
			
		$(this).stop().animate({ backgroundColor:'transparent' }, 200);		
		$(this).find("#creamos").css({'background-position': '-105px 0'});	
			
		}
	
});





$('#bimplementamos').mouseover(function() {
	
	
		if ($(this).attr("activo")==1){
		
		$(this).css({backgroundColor:'#ffffff'});
		$(this).find("#implementamos").css({'background-position': '-143px -31px'});	
		
		}
		
		else{
			
		$(this).stop().animate({ backgroundColor:'#ffffff' }, 200);		
		$(this).find("#implementamos").css({'background-position': '-143px -31px'});	
			
		}
		
});

$('#bimplementamos').mouseout(function() {
	
		if ($(this).attr("activo")==1){
		
		$(this).css({backgroundColor:'#ffffff'});
		$(this).find("#implementamos").css({'background-position': '-143px -31px'});	
		
		}
		
		else{
			
		$(this).stop().animate({ backgroundColor:'transparent' }, 200);		
		$(this).find("#implementamos").css({'background-position': '-143px 0'});	
			
		}
	
});





$('#bcomprobamos').mouseover(function() {
	
		if ($(this).attr("activo")==1){
		
		$(this).css({backgroundColor:'#ffffff'});
		$(this).find("#comprobamos").css({'background-position': '-176px -35px'});	
		
		}
		
		else{
			
		$(this).stop().animate({ backgroundColor:'#ffffff' }, 200);		
		$(this).find("#comprobamos").css({'background-position': '-176px -35px'});	
			
		}
		

});

$('#bcomprobamos').mouseout(function() {
	
		if ($(this).attr("activo")==1){
		
		$(this).css({backgroundColor:'#ffffff'});
		$(this).find("#comprobamos").css({'background-position': '-176px -35px'});
		
		}
		
		else{
			
		$(this).stop().animate({ backgroundColor:'transparent' }, 200);		
		$(this).find("#comprobamos").css({'background-position': '-176px 0'});	
			
		}

});


$('#btn_scroll').mouseover(function() {$(this).stop().animate({bottom:'30px'}, 300,'expo');});
$('#btn_scroll').mouseout(function() {$(this).stop().animate({bottom:'44px'}, 300,'expo');});

coverH = $(window).height();
coverW = $(window).width()-15;

	
$("#scene6,#scene5,#scene4,#scene3,#scene2,#scene,#somos_section,#entendemos_section,#proponemos_section,#creamos_section,#implementamos_section,#comprobamos_section,#trama, #trama_blanca").width(coverW);
$("#scene6,#scene5,#scene4,#scene3,#scene2,#scene,#somos_section,#entendemos_section,#proponemos_section,#creamos_section,#implementamos_section,#comprobamos_section,#trama, #trama_blanca").height(coverH);





$(window).resize(function () {
	callResize ();	
});





$("#bsomos").attr('activo','1');
$("#bsomos").stop().animate({ backgroundColor:'#ffffff' }, 200);		
$("#somos").css({'background-position': '0 -39px'});
$("#bsomos").find("#current_btn_l").stop().animate({'opacity': '1'});





});






//RESIZE FUNCTION




function callResize () {
	
	coverH = $(window).height();
	coverW = $(window).width();

	
	$("#scene6,#scene5,#scene4,#scene3,#scene2,#scene,#somos_section,#entendemos_section,#proponemos_section,#creamos_section,#implementamos_section,#comprobamos_section,#trama, #trama_blanca").width(coverW);
	$("#scene6,#scene5,#scene4,#scene3,#scene2,#scene,#somos_section,#entendemos_section,#proponemos_section,#creamos_section,#implementamos_section,#comprobamos_section,#trama, #trama_blanca").height(coverH);
	

	$('html, body').animate({ scrollTop: $(".current").offset().top },'slow');
	
	


}



//CLICKS BOTONERA LATERAL


function somos() {
	


	$('html, body').animate({ scrollTop: $("#somos_section").offset().top }, 'slow');
	 
}

function entendemos() {


	$('html, body').animate({ scrollTop: $("#entendemos_section").offset().top }, 'slow');
	 
}

function proponemos() {

	$('html, body').animate({ scrollTop: $("#proponemos_section").offset().top }, 'slow');
	 
}

function creamos() {

	$('html, body').animate({ scrollTop: $("#creamos_section").offset().top }, 'slow');
	 
}

function implementamos() {

	$('html, body').animate({ scrollTop: $("#implementamos_section").offset().top }, 'slow');
	 
}

function comprobamos() {

	$('html, body').animate({ scrollTop: $("#comprobamos_section").offset().top }, 'slow');
	 
}


function scroll_down() {
	
			limit = 6;
			
			if(limit > $('#btn_scroll').attr('valor')){
				
				var go= (parseInt($('#btn_scroll').attr('valor')) + 1);
				$('#btn_scroll').attr('valor',go);
				$('body,html').animate({ scrollTop : $('.section_'+go).offset().top }, 'slow');
				
			}else{
				
				$('body,html').animate({ scrollTop : $('.section_1').offset().top }, 'slow');
				$('#btn_scroll').attr('valor','1');
				
			}




}

 





// funcion scroll
		
$(document).scroll(function(){
			
			var top = $(this).scrollTop();
			var obj1 = $('#somos_section').offset().top;
			var obj2 = $('#entendemos_section').offset().top;
			var obj3 = $('#proponemos_section').offset().top;
			var obj4 = $('#creamos_section').offset().top;
			var obj5 = $('#implementamos_section').offset().top;
			var obj6 = $('#comprobamos_section').offset().top;
			
			if(top >= obj1 && top < obj2){
				
				$("#bsomos").attr('activo','1');
				$("#bsomos").stop().animate({ backgroundColor:'#ffffff' }, 200);		
				$("#somos").css({'background-position': '0 -39px'});
				$("#bsomos").find("#current_btn_l").stop().animate({'opacity': '1'});
				$("#somos_section").attr('class','section_1 section current');	
				
				$("#btn_scroll").attr('valor','1');
				
			
			
			}else{
				$("#bsomos").attr('activo','0');
				$("#bsomos").stop().animate({ backgroundColor:'transparent' }, 200);
				$("#somos").css({'background-position': '0 0'});
				$("#bsomos").find("#current_btn_l").stop().animate({'opacity': '0'});
				$("#somos_section").attr('class','section_1 section');	
		
			}
			
			if(top >= obj2 && top < obj3){
				
				$("#bentendemos").attr('activo','1');
				$("#bentendemos").stop().animate({ backgroundColor:'#ffffff' }, 200);		
				$("#entendemos").css({'background-position': '-40px -35px'});
				$("#bentendemos").find("#current_btn_l").stop().animate({'opacity': '1'});	
				$("#entendemos_section").attr('class','section_2 section current');	
				
				$("#btn_scroll").attr('valor','2');
				
			}else{
				
				$("#bentendemos").attr('activo','0');
				$("#bentendemos").stop().animate({ backgroundColor:'transparent' }, 200);		
				$("#entendemos").css({'background-position': '-40px 0'});
				$("#bentendemos").find("#current_btn_l").stop().animate({'opacity': '0'});
				$("#entendemos_section").attr('class','section_2 section');	
			
				
			}
			
			if(top >= obj3 && top < obj4){
				
				$("#bproponemos").attr('activo','1');
				$("#bproponemos").stop().animate({ backgroundColor:'#ffffff' }, 200);		
				$("#proponemos").css({'background-position': '-77px -40px'});
				$("#bproponemos").find("#current_btn_l").stop().animate({'opacity': '1'});
				$("#proponemos_section").attr('class','section_3 section current');	
				
				$("#btn_scroll").attr('valor','3');	
				
			}else{
				$("#bproponemos").attr('activo','0');
				$("#bproponemos").stop().animate({ backgroundColor:'transparent' }, 200);		
				$("#proponemos").css({'background-position': '-77px 0'});
				$("#bproponemos").find("#current_btn_l").stop().animate({'opacity': '0'});
				$("#proponemos_section").attr('class','section_3 section');	
		
			}
			
			if(top >= obj4 && top < obj5){
				
				$("#bcreamos").attr('activo','1');
				$("#bcreamos").stop().animate({ backgroundColor:'#ffffff' }, 200);		
				$("#creamos").css({'background-position': '-105px -38px'});
				$("#bcreamos").find("#current_btn_l").stop().animate({'opacity': '1'});	
				$("#creamos_section").attr('class','section_4 section current');
				
				$("#btn_scroll").attr('valor','4');	
				
			}else{
				
				$("#bcreamos").attr('activo','0');
				$("#bcreamos").stop().animate({ backgroundColor:'transparent' }, 200);		
				$("#creamos").css({'background-position': '-105px 0'});
				$("#bcreamos").find("#current_btn_l").stop().animate({'opacity': '0'});
				$("#creamos_section").attr('class','section_4 section');
			
				
			}
			if(top >= obj5 && top < obj6){
				
				$("#bimplementamos").attr('activo','1');
				$("#bimplementamos").stop().animate({ backgroundColor:'#ffffff' }, 200);		
				$("#implementamos").css({'background-position': '-143px -31px'});
				$("#bimplementamos").find("#current_btn_l").stop().animate({'opacity': '1'});
				$("#implementamos_section").attr('class','section_5 section current');	
				
				$("#btn_scroll").attr('valor','5');
			
			}else{
				
				$("#bimplementamos").attr('activo','0');
				$("#bimplementamos").stop().animate({ backgroundColor:'transparent' }, 200);		
				$("#implementamos").css({'background-position': '-143px 0'});
				$("#bimplementamos").find("#current_btn_l").stop().animate({'opacity': '0'});
				$("#implementamos_section").attr('class','section_5 section');	
		
			
			}
			if(top >= obj6){
				
				$("#bcomprobamos").attr('activo','1');
				$("#bcomprobamos").stop().animate({ backgroundColor:'#ffffff' }, 200);		
				$("#comprobamos").css({'background-position': '-176px -35px'});
				$("#bcomprobamos").find("#current_btn_l").stop().animate({'opacity': '1'});	
				$("#comprobamos_section").attr('class','section_6 section current');
				
				$("#btn_scroll").attr('valor','6');	
			
			}else{
				
				$("#bcomprobamos").attr('activo','0');
				$("#bcomprobamos").stop().animate({ backgroundColor:'transparent' }, 200);		
				$("#comprobamos").css({'background-position': '-176px 0'});
				$("#bcomprobamos").find("#current_btn_l").stop().animate({'opacity': '0'});
				$("#comprobamos_section").attr('class','section_6 section');	
			
			
			}

		})
$('#slider-prev .prev').mouseover(function() {
	console.log('prev');
	$(this).stop().animate({'background-color': '#000'}, 200);
	$(this).find("#prev_f").css({'background-position': '-395px -38px'});
});

$('#slider-next .next').mouseout(function() {
	$(this).stop().animate({'background-color': '#fff'}, 200);
	$(this).find("#next_f").css({'background-position': '-372px -38px'});
});