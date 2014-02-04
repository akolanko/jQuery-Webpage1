$(document).ready( function (){
	console.log("Document ready.");
	$("#homepage").click( function(){
		$("#homepage").fadeOut(2000);
		$("#pageTwo").delay(2000).animate({opacity: 1}, 2000);
		$(".gallery").css( "cursor", "pointer" );
		$("#image1").click( function(){
			$("#image1").animate({height: "300px"}, 1500);
			$("#image1").click( function(){
				$("#image1").animate({height: "155px"}, 1500);
			});
		});
		$("#image2").click( function(){
			$("#image2").animate({height: "300px"}, 1500);
			$("#image2").click( function(){
				$("#image2").animate({height: "155px"}, 1500);
			});
		});
		$("#image3").click( function(){
			$("#image3").animate({height: "300px"}, 1500);
			$("#image3").click( function(){
				$("#image3").animate({height: "155px"}, 1500);
			});
		});
		$("#image4").click( function(){
			$("#image4").animate({height: "300px"}, 1500);
			$("#image4").click( function(){
				$("#image4").animate({height: "155px"}, 1500);
			});
		});
		$("#image5").click( function(){
			$("#image5").animate({height: "300px"}, 1500);
			$("#image5").click( function(){
				$("#image5").animate({height: "155px"}, 1500);
			});
		});
		$("#image6").click( function(){
			$("#image6").animate({height: "300px"}, 1500);
			$("#image6").click( function(){
				$("#image6").animate({height: "155px"}, 1500);
			});
		});
		$("#image7").click( function(){
			$("#image7").animate({height: "300px"}, 1500);
			$("#image7").click( function(){
				$("#image7").animate({height: "155px"}, 1500);
			});
		});
		$("#image8").click( function(){
			$("#image8").animate({height: "300px"}, 1500);
			$("#image8").click( function(){
				$("#image8").animate({height: "155px"}, 1500);
			});
		});
		$("#image9").click( function(){
			$("#image9").animate({height: "300px"}, 1500);
			$("#image9").click( function(){
				$("#image9").animate({height: "155px"}, 1500);
			});
		});
		$("#image10").click( function(){
			$("#image10").animate({height: "300px"}, 1500);
			$("#image10").click( function(){
				$("#image10").animate({height: "155px"}, 1500);
			});
		});
		$("#image11").click( function(){
			$("#image11").animate({height: "300px"}, 1500);
			$("#image11").click( function(){
				$("#image11").animate({height: "155px"}, 1500);
			});
		});
		$("#image12").click( function(){
			$("#image12").animate({height: "300px"}, 1500);
			$("#image12").click( function(){
				$("#image12").animate({height: "155px"}, 1500);
			});
		});
	});
});