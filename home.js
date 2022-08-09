$(document).ready(function () {
	
	 $("#mainInfoDiv").show();
	$("#akronInfoDiv").hide();
	$("#minneapolisInfoDiv").hide();
	$("#louisvilleInfoDiv").hide();
	
		
    
});

$("#akronButton").on('click', function() {
		  $("#akronInfoDiv").show();
		   $("#mainInfoDiv").hide();
		  $("#akronWeatherButton").hide();
		   $("#akronWeather").hide();
		   $("#akronWeatherButton").show();
		   $("#louisvilleInfoDiv").hide();
	  $("#minneapolisInfoDiv").hide();
        	    	 		  
});


		  
 $("#minneapolisButton").on('click', function() {
		  $("#minneapolisInfoDiv").show();
		  $("#minneapolisWeatherButton").hide();
		   $("#minneapolisWeather").hide();
		    $("#mainInfoDiv").hide();
			
			$("#akronInfoDiv").hide();
		  
		  $("#akronWeatherButton").hide();
		   $("#akronWeather").hide();
		    $("#minneapolisWeatherButton").show();
			$("#louisvilleInfoDiv").hide();
	 $("#louisvilleWeatherButton").hide();
	 $("#louisvilleWeather").hide();
});


$("#louisvilleButton").on('click', function() {
	$("#louisvilleInfoDiv").show();
	 $("#louisvilleWeatherButton").hide();
	 $("#louisvilleWeather").hide();
		  $("#minneapolisInfoDiv").hide();
		  $("#minneapolisWeatherButton").hide();
		   $("#minneapolisWeather").hide();
		    $("#louisvilleWeatherButton").show();
		    
			$("#akronInfoDiv").hide();
		  $("#akronWeatherButton").hide();
		   $("#akronWeather").hide();
         
		   
});	

$("#akronWeatherButton").hover(
        //in callback
        function() {
            $("#akronWeather").show();
        },
        //out callback
        function() {
            $("#akronWeather").hide();
 });
 
 $("#minneapolisWeatherButton").hover(
        //in callback
        function() {
            $("#minneapolisWeather").show('slow');
        },
        //out callback
        function() {
            $("#minneapolisWeather").hide('slow');
});

$("#louisvilleWeatherButton").hover(
        //in callback
        function() {
            $("#louisvilleWeather").show('slow');
        },
        //out callback
        function() {
            $("#louisvilleWeather").hide('slow');
});
$("#mainButton").on('click', function() {
	
	 $("#mainInfoDiv").show();
	 $("#louisvilleInfoDiv").hide();
	 
});

$(".table").hover(
        //in callback
        function() {
            $("td").css('background-color', 'WhiteSmoke');
        },
        //out callback
        function() {
            $("td").css('background-color', 'white');

});



 
 

