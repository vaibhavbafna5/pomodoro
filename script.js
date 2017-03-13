$(document).ready(function() {
	twentyFiveMinutes = 1500; 
	minutes = 0; 
	seconds = 0; 
	var interval; 
	$("#tomatoText").html(minutes + "0:0" + seconds);
	//window.setInterval(function() { countDown(); }, 1000);
	//$("#tomatoText").html("Vaibhav"); 
	$("#start").click(function() {
		interval = window.setInterval(function() { countDown(); }, 1000);
	});
	$("#stop").click(function() {
		clearInterval(interval);
		if (seconds < 10) {
  			$("#tomatoText").html(minutes + ":0" + seconds); 
  		} else {
  			$("#tomatoText").html(minutes + ":" + seconds); 
  		}	
	}); 
	$("#reset").click(function() {
		twentyFiveMinutes = 1500; 
		clearInterval(interval); 
		interval = window.setInterval(function() { countDown(); }, 1000); 
	});
});

function countDown() {
	if (twentyFiveMinutes > 0) { 
		minutes = Math.floor(twentyFiveMinutes/60); 
  		seconds = twentyFiveMinutes % 60;
  		if (seconds < 10) {
  			$("#tomatoText").html(minutes + ":0" + seconds); 
  		} else {
  			$("#tomatoText").html(minutes + ":" + seconds); 
  		}
  		twentyFiveMinutes--; 
  	} else {
  		$("#tomatoText").html("00:00");
  	}

}

