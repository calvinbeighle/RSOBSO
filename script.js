const typingText = document.getElementById("typingText");
const text = "Happy Birthday Allison"; // Text to type
const linkContainer = document.getElementById("linkContainer");
const imageContainer = document.getElementById("imageContainer");
const bottomLinkContainer = document.getElementById("bottomLinkContainer");
const startScrollPoint = 0.1; // Start typing at 10% scroll
const textEndScrollPoint = 0.3; // End typing at 30% scroll
const imageEndScrollPoint = 0.5; // Show image at 50% scroll
const linkEndScrollPoint = 0.7; // Show "Enter" link at 70% scroll
let maxScrollHeight = document.body.scrollHeight - window.innerHeight;
let textFullyTyped = false; // Flag to check if the text is fully typed

function typeOnScroll() {
  let scrollTop = window.scrollY;
  let scrollPercentage = scrollTop / maxScrollHeight;

  if (scrollPercentage >= startScrollPoint && scrollPercentage <= textEndScrollPoint) {
    let adjustedScrollPercentage = (scrollPercentage - startScrollPoint) / (textEndScrollPoint - startScrollPoint);
    let charactersToShow = Math.floor(adjustedScrollPercentage * text.length);
    typingText.innerHTML = text.slice(0, charactersToShow);
    textFullyTyped = charactersToShow === text.length;
    linkContainer.style.display = "none";
    imageContainer.style.display = "none";
    bottomLinkContainer.style.display = "none";
  } else if (textFullyTyped && scrollPercentage > textEndScrollPoint && scrollPercentage <= imageEndScrollPoint) {
    typingText.innerHTML = text;
    imageContainer.style.display = "block";
    linkContainer.style.display = "none";
  } else if (scrollPercentage > imageEndScrollPoint && scrollPercentage <= linkEndScrollPoint) {
    typingText.innerHTML = text;
    imageContainer.style.display = "block";
    linkContainer.style.display = "none";
  } else if (scrollPercentage > linkEndScrollPoint) {
    linkContainer.style.display = "block";
    imageContainer.style.display = "block";
  } else {
    typingText.innerHTML = "";
    linkContainer.style.display = "none";
    imageContainer.style.display = "none";
    textFullyTyped = false;
  }

  if (scrollTop + window.innerHeight >= document.body.scrollHeight) {
    bottomLinkContainer.style.display = "block";
    typingText.innerHTML = "Happy Birthday Allison";
    typingText.style.fontFamily = "Arial, sans-serif";
  } else {
    bottomLinkContainer.style.display = "none";
    if (scrollPercentage > textEndScrollPoint) {
      typingText.innerHTML = text;
    }
  }
}

window.addEventListener("scroll", typeOnScroll);
typeOnScroll();
