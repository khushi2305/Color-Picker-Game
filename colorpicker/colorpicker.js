//doubts 
// colors array should be on the top why ?
// color values assigned in the bootstrap file could not accessed 

var level=6;

 var colors=generate_array(6);
var square=document.querySelectorAll(".square");
var answer = document.querySelector("#answer"); // writing the result
var topcolor = document.querySelector("#mainhead"); // write the color to be searched 
var jumboback=document.querySelector(".heading"); // changing hte background of the jumbotron 
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var playa=document.querySelector("#playagain"); 
var pickedcolor=pickcolor();
var edit=pickedcolor[0].toUpperCase()+pickedcolor[1].toUpperCase()+pickedcolor[2].toUpperCase()+pickedcolor.slice(3);
topcolor.textContent=edit;

function generate_array(num){
	var arr=[];
	for(var i =0;i<num;i++){
		// generate 3 numbers 
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		var element ="rgb"+"("+r+", "+g+", "+b+")";
		arr.push(element);
	}
	return (arr);
}
 
// random choosing one of the colors of the color array - very very imporant 
function pickcolor(){
	// math.random retuirn real numbers in the range [0,1) .so range of the random will be 0 to length-1
	var random=Math.floor(Math.random()*colors.length); 
	return(colors[random]);
}


for(var i =0 ;i<level;i++){
	square[i].style.backgroundColor = colors[i];
	square[i].addEventListener("click",function(){
		console.log(pickedcolor,this.style.background);
		if(this.style.backgroundColor===pickedcolor){
			answer.textContent="Correct Answer "
			// change all the squares to the correct color
			for(var i =0 ;i<level;i++)
				square[i].style.backgroundColor=pickedcolor;
			// chnge the background of the jumbotron
			jumboback.style.backgroundColor=pickedcolor;
			playa.textContent="PLAY AGAIN ?";
			
		}
		else{
			this.style.backgroundColor="#232323";
			answer.textContent="Try Again";


		}
	})
}

// CLICK TO PLAY AGAIAN 
playa.addEventListener("click",function(){
	// making the new color array 
	colors=generate_array(level);
	//assigning the new colors to the squares  
	for(var i =0 ;i<square.length;i++){
	square[i].style.backgroundColor = colors[i];}
	// pick up any color from the color array 
	pickedcolor=pickcolor();
	// change the headings well 
	var edit=pickedcolor[0].toUpperCase()+pickedcolor[1].toUpperCase()+pickedcolor[2].toUpperCase()+pickedcolor.slice(3);
    topcolor.textContent=edit;
    playa.textContent="NEW COLORS";
    answer.textContent="";


})




// choosing the level of toughness
easy.addEventListener("click",function(){
	this.classList.add("click");
    hard.classList.remove("click");
 level=3;
 colors=generate_array(3);
 for(var i =0 ;i<3;i++)
	square[i].style.backgroundColor = colors[i];
for(var i=3;i<6;i++)
	square[i].style.display="none"; // to hide the buttons 
pickedcolor=pickcolor();
var edit=pickedcolor[0].toUpperCase()+pickedcolor[1].toUpperCase()+pickedcolor[2].toUpperCase()+pickedcolor.slice(3);
    topcolor.textContent=edit;
});
hard.addEventListener("click",function(){
 level=6;
 // making the new color array 
	colors=generate_array(level);
	//assigning the new colors to the squares  
	for(var i =0 ;i<square.length;i++){
		square[i].style.display="block";    // to get back the hidden buttons 
	square[i].style.backgroundColor = colors[i];}
	// pick up any color from the color array 
	pickedcolor=pickcolor();
	// change the headings well 
	var edit=pickedcolor[0].toUpperCase()+pickedcolor[1].toUpperCase()+pickedcolor[2].toUpperCase()+pickedcolor.slice(3);
    topcolor.textContent=edit;
    this.classList.add("click");
    easy.classList.remove("click");
});


//events such as mouse over and mouseout 
