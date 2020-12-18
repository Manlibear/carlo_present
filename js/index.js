/*Downloaded from https://www.codeseek.co/ovdojoey/css-gift-opening-pgozGX */

var to = 'Carlo';


var gifts = [
    ["21 Lessons for the 21st Century", "https://m.media-amazon.com/images/I/41SxL78DpvL.jpg", "https://www.google.com"]
]


var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
    for(var i = 0; i < gifts.length; i++){
        var gift_name = gifts[i][0]; 
        var gift_image_url = gifts[i][1]
        var gift_url = gifts[i][2];

        var _giftLink, _giftImg;

        _giftLink = document.createElement("a");
        _giftLink.href = gift_url;
        presentImage.appendChild(_giftLink);
        
        _giftImg = document.createElement("img");
        _giftImg.src = gift_image_url;
        if(_giftLink) {
            _giftLink.appendChild(_giftImg);
        } else {
            presentImage.appendChild(_giftImg);
        }

  
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    presentImage.classList.toggle("open");
    
  }, false);
  
  
  
  nametag.innerText = to;
}

init();