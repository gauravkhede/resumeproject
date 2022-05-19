var education_link=document.querySelectorAll('.navigation1 a');
var displayVideo=document.getElementsByClassName('popup-Intro')[0];
setTimeout(function(){
   displayVideo.style.width=24+'rem';
   displayVideo.style.height=24+'rem';
},1000);
for(var i=0;i<education_link.length;i++){
	education_link[i].addEventListener('click',function(event){
		event.preventDefault();
		var targetSectionId=this.textContent.trim().toLowerCase();
		var targetSection=document.getElementById(targetSectionId);
		var interval=setInterval(function(){
			var targetSectionCoordinates=targetSection.getBoundingClientRect();
			if(targetSectionCoordinates.top<=0){
				clearInterval(interval);
				return;
			}
			window.scrollBy(0,50);

		},20);
		

	});



}
var progressBars=document.querySelectorAll('.skill-progress > div');
   // console.log(progressBars);
   var skillsContainer=document.getElementById('skills-container');
   var animationDone=false;
   window.addEventListener('scroll',checkScroll);
   function initialiseBars(){
   	for(let bar of progressBars){
   		bar.style.width=0+'%';
   	}
   }
   initialiseBars();
   function checkScroll(){

   	var coordinates=skillsContainer.getBoundingClientRect();
   	// console.log(coordinates);
   	if(!animationDone && (coordinates.top<619 && coordinates.top>=82)){
   		animationDone=true;
   		// console.log(window.innerHeight+ " is the windopw height");
   		// console.log('skills container visible');
   		fillbars();
   	}
   	else if(coordinates.top<82 || coordinates.top>619){
   		animationDone=false;
   		console.log(animationDone);
   		initialiseBars();

   	}
   }
   function fillbars(){
   	for(let bar of progressBars){
   		let currentWidth=0;
   		let targetWidth=bar.getAttribute('data-bar-width');
   	let widthScroll=setInterval(function(){
   		
   		if(currentWidth>targetWidth){

                 clearInterval(widthScroll);
                 return;
   		}
   		currentWidth++;
   		bar.style.width=currentWidth+'%';
   	},5);
   }
   }
   var percentageScrolling=document.getElementById('scrolled');
   var contactSection=document.getElementById('contact');
   // console.log(contactSection);
   var contactSectionAttr=contactSection.getBoundingClientRect();
   // console.log(contactSectionAttr,' contact section attribute');
   var currentOffset=window.pageYOffset+window.innerHeight;
   if(currentOffset<=window.innerHeight){
      currentOffset=0;
   }
    var percentage=(currentOffset/document.body.offsetHeight)*100;
   window.addEventListener('scroll',function(){
      currentOffset=window.pageYOffset+window.innerHeight;
      percentage=(currentOffset/document.body.offsetHeight)*100;
        // console.log(percentage);
        percentageScrolling.innerText=Math.floor(percentage) +'% scrolled';


   });