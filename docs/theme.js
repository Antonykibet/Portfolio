let i=0;

let theme=document.getElementsByClassName("themeMode");
let lightIcons=document.getElementsByClassName("icon");
let buttonNames=document.querySelectorAll('#buttonNames');
function changeTheme(){
    if(i==0){
        theme[0].src="icons8-moon-symbol-30 (2).png";
        document.documentElement.style.backgroundImage = "url('adrian-swancar-pIr-PH5IXF8-unsplash.jpg')";
        lightIcons[0].src="lightModeIcons/icons8-home-page-24 (2).png";
        lightIcons[1].src="lightModeIcons/icons8-hammer-30 (2).png";
        lightIcons[2].src="lightModeIcons/icons8-video-game-48 (1).png";
        lightIcons[3].src="lightModeIcons/icons8-user-30 (2).png";
        document.getElementById("tab").style.backgroundColor="white";
        for( let elements of buttonNames){
            elements.style.color="white"
        }
        i+=1;
    }else if(i==1){
        theme[0].src="icons8-sun-24.png";
        document.documentElement.style.backgroundImage = "url('starz.jpg')";
        lightIcons[0].src="icons8-home-page-24 (1).png";
        lightIcons[1].src="icons8-hammer-30 (1).png";
        lightIcons[2].src="icons8-video-game-48.png";
        lightIcons[3].src="icons8-user-30 (1).png";
        document.getElementById("tab").style.backgroundColor="rgb(29,55,122)";
        for( let elements of buttonNames){
            elements.style.color="rgb(29,55,122)";
        }
        i=0;
    }
}
