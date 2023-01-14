function mobile(){
try{
document.createEvent("TouchEvent");
return true;
} catch(e) {
return false;
}
}
if(mobile()){
	document.getElementById(player).style.display = 'none'; // hide
}
else{
	document.getElementById(player-mobile).style.display = ''; // show
}
