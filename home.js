$(document).ready(function () {
	
	$('H1').addClass('text-center');
	$('H2').addClass('text-center');
    $('H1').removeClass('myBannerHeading');
     $('H1').addClass('page-header');
	 $("#yellowHeading").text("Yellow Team");
	 $("#orangeTeamList").css('background-color', 'orange');
	 $("#yellowTeamList").css('background-color', 'yellow');
	 $("#redTeamList").css('background-color', 'red');
	 $("#blueTeamList").css('background-color', 'blue');
	 $("H1").hide();
	 $(".footer").remove();
	  $("#yellowTeamList").append('<li>Joseph Banks</li>');
	   $('#yellowTeamList').append('<li>Simon Jones</li>');
});