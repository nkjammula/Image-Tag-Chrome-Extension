var imgDiv = document.createElement("div");
imgDiv.draggable = true;
var imgSpan = document.createElement("li");
loadCss("https://use.fontawesome.com/releases/v5.1.0/css/all.css");
imgSpan.classList.add("fas");
imgSpan.classList.add("fa-times-circle");
imgSpan.addEventListener("click",handleFontAwesomeCloseIconClick)
var img = document.createElement("img");
imgDiv.classList.add("imageScroller");
img.draggable = true;
img.id="imageScroller"
var imageUrl = "";
chrome.storage.sync.get(['imageUrl'], function(result) {
    imageUrl = result.imageUrl;
    img.src = imageUrl;
    imgDiv.appendChild(img);
    imgDiv.appendChild(imgSpan);
    document.body.appendChild(imgDiv);
  });

  //Font awesome close icon link
function handleFontAwesomeCloseIconClick(){
var imgContainer = document.getElementsByClassName("imageScroller");
document.body.removeChild(imgContainer[0]);
}
