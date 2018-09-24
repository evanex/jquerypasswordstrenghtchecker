$(document).ready(function()
{	

	resizeMe();

$(function() {
    $(window).bind('resize', function()
    {
        resizeMe();
        }).trigger('resize');
    });

function resizeMe(){
		$("body").clearQueue();
		//Standard height, for which the body font size is correct
		var preferredwidth = 1024;
		//Base font size for the page
		var fontsize = 50;
		var displaywidth = $(window).width();
		var percentage = displaywidth / preferredwidth;
		var newFontSize = Math.floor(fontsize * percentage) - 1;
		console.log('fontsize' + newFontSize);
		$(".header").css("font-size", newFontSize);
}

	$('#resultbox').hide();


	$('#password').keyup(function()
	{
		$('#resultbox').show();
		$('#result').html(checkStrength($('#password').val()))
	})	


 function GetFactorial(value)
   {

     tempvalue = 1;
     for ( i=value ; i>0 ;  i-- )
      {
         tempvalue *=  i ;
      // this is same as the   tempvalue =  tempvalue * i ;
      }
 
 	return tempvalue;
   }


 function secondsToString(seconds)
{


if( seconds < 31536000 ){
	var color = '#E50017';
}else if( seconds < 315360000000){
    var color = '#CB470F';
}else if (seconds < 315360000000000 ){
    var color = '#B18F07';
}else{
	var color = '#97D700';
 }

console.log(seconds+' '+color);

$("body").clearQueue();
$("body").animate({backgroundColor:  "-webkit-gradient(linear, left top, left bottom, from(#ccc), to("+color+"))" }, 'slow');

var zoton = Math.floor(seconds / 315360000000000000000000);
if(zoton > 0 ) { return " many zotons "; }

var trillionyears = Math.floor(seconds / 315360000000000000000);
if(trillionyears > 0 ) { return trillionyears + " trillion  years";}

var billionyears = Math.floor(seconds / 315360000000000000);
if(billionyears > 0 ) { return billionyears + " billion  years";}

var millionyears = Math.floor(seconds / 315360000000000);
if(millionyears > 0 ) { return millionyears + " million  years";}

var thousandyears = Math.floor(seconds / 315360000000);
if(thousandyears > 0 ) { return thousandyears + " thousand  years";}

var hundredyears = Math.floor(seconds / 3153600000);
if(hundredyears > 0 ) { return hundredyears + " Hundred years";}



var numyears = Math.floor(seconds / 31536000);
if(numyears > 0 ) { return numyears + "  years";}



var numdays = Math.floor((seconds % 31536000) / 86400); 
if(numdays > 0 ) {return numdays + "  days";}

var numhours = Math.floor(((seconds % 31536000) % 86400) / 3600);
if(numhours > 0 ) {return numhours + "  hours";}

var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
if(numminutes > 0 ) {return numminutes + "  minutes";}

var numseconds = Math.floor((((seconds % 31536000) % 86400) % 3600) % 60);
if(numseconds > 0 ) {return Math.floor(seconds) + "  seconds";}

var milliseconds = Math.floor((((seconds % 31536000) % 86400) % 3600) % 60 / 100);
if(milliseconds > 0 ) {return milliseconds + "  milliseconds";}


return "Instantly";

}
		
	function checkStrength(password)
	{
		var n = 0
		
	
		
		
		//If password contains both lower and uppercase characters, increase strength value.
		if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))  n += 26
		
		//If it has numbers and characters, increase strength value.
		if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/))  n += 10 
		
		//If it has one special character, increase strength value.
		if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/))  n += 11
		
		//if it has two special characters, increase strength value.
		if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) n += 22
		

		var permutations =0;

		   for ( k=1 ; k<password.length+1 ;  k++ )
		     {
		          permutations +=  GetFactorial(n )/GetFactorial( n -k)*GetFactorial( k);
		      // this is same as the   tempvalue =  tempvalue * i ;
		   //   console.log(permutations + "for "+ k +" lenght");
		      }
 

		var seconds = permutations / 1219276800;

//		return permutations;
		return secondsToString(seconds);
		//Calculated strength value, we can return messages
		
		
		

	}
});