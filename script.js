document.addEventListener("DOMContentLoaded", function () {
  const popupCross = document.getElementById("popupCross");
  const popupContent = document.getElementById("popupContent");

  popupCross.addEventListener("click", () => {
    popupContent.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const allDiv = document.getElementById("allDiv");
  const allSearchBtn = document.getElementById("allSearchBtn");
  const allCross = document.getElementById("allCross");

  allSearchBtn.addEventListener("click", () => {
    allDiv.style.display = "flex";
  });

  allCross.addEventListener("click", () => {
    allDiv.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const quickViews = document.querySelectorAll(".quickView");
  const quickViewBtns = document.querySelectorAll(".quickViewBtn");
  const quickViewCrosses = document.querySelectorAll(".quickViewCross");

  quickViewBtns.forEach((element) => {
    element.addEventListener("click", () => {
      quickViews.forEach((quickView) => {
        quickView.style.display = "flex";
      });
    });
  });

  quickViewCrosses.forEach((element) => {
    element.addEventListener("click", () => {
      quickViews.forEach((quickView) => {
        quickView.style.display = "none";
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBar = document.getElementById("hamburgerBar");
  const cross = document.getElementById("cross");
  const hamburgerLines = document.getElementById("hamburgerLines");
  const wrapper = document.getElementById("wrapper"); // Get the wrapper element

  hamburgerLines.addEventListener("click", () => {
    hamburgerBar.style.opacity = "1";
    hamburgerBar.style.zIndex = "20";
    hamburgerBar.style.left = "0";
    wrapper.style.filter = "blur(5px)"; // Apply the blur filter to the wrapper
  });

  cross.addEventListener("click", () => {
    hamburgerBar.style.opacity = "0";
    hamburgerBar.style.zIndex = "0";
    hamburgerBar.style.left = "-100%";
    wrapper.style.filter = ""; // Remove the blur filter
  });
});

// cart
document.addEventListener("DOMContentLoaded", function () {
  const cartSidebar = document.getElementById("cartSidebar");
  const cartCross = document.getElementById("cartCross");
  const cartIcon = document.getElementById("cartIcon");

  cartIcon.addEventListener("click", () => {
    cartSidebar.style.opacity = "1";
    cartSidebar.style.zIndex = "20";
    cartSidebar.style.right = "0";
    cartSidebar.style.display = "flex";
  });

  cartCross.addEventListener("click", () => {
    cartSidebar.style.opacity = "0";
    cartSidebar.style.zIndex = "0";
    cartSidebar.style.right = "-100%";
    cartSidebar.style.display = "none";
  });
});

// signIn
document.addEventListener("DOMContentLoaded", function () {
  const singinSidebars = document.querySelectorAll(".singinSidebar");
  const signinCrosses = document.querySelectorAll(".signinCross");
  const signinIcons = document.querySelectorAll(".signinIcon");

  signinIcons.forEach((signinIcon) => {
    signinIcon.addEventListener("click", () => {
      singinSidebars.forEach((singinSidebar) => {
        singinSidebar.style.opacity = "1";
        singinSidebar.style.zIndex = "20";
        singinSidebar.style.right = "0";
        singinSidebar.style.display = "flex";
      });
    });
  });

  signinCrosses.forEach((signinCross) => {
    signinCross.addEventListener("click", () => {
      singinSidebars.forEach((singinSidebar) => {
        singinSidebar.style.opacity = "0";
        singinSidebar.style.zIndex = "0";
        singinSidebar.style.right = "-100%";
        singinSidebar.style.display = "none";
      });
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const singinSidebars = document.getElementById("singinSidebar");
  const signinCrosses = document.getElementById("signinCross");
  const signinIcons = document.getElementById("signinIcon");

  signinIcons.addEventListener("click", () => {
    singinSidebars.style.opacity = "1";
    singinSidebars.style.zIndex = "20";
    singinSidebars.style.right = "0";
    singinSidebars.style.display = "flex";
  });

  signinCrosses.addEventListener("click", () => {
    singinSidebars.style.opacity = "0";
    singinSidebars.style.zIndex = "0";
    singinSidebars.style.right = "-100%";
    singinSidebars.style.display = "none";
  });
});

// index atc
document.addEventListener("DOMContentLoaded", () => {
  const addToCart = document.querySelectorAll(".addToCart");
  const AtoCb = document.querySelectorAll(".ATCb");

  AtoCb.forEach((element) => {
    element.addEventListener("click", () => {
      addToCart.forEach((addToCartElement) => {
        addToCartElement.style.opacity = "1";
        addToCartElement.style.zIndex = "9999";
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const crossimg = document.querySelectorAll(".topimg");
  const addToCart = document.querySelectorAll(".addToCart");

  crossimg.forEach((element) => {
    element.addEventListener("click", () => {
      addToCart.forEach((addToCartElement) => {
        addToCartElement.style.opacity = "0";
        addToCartElement.style.zIndex = "-10";
      });
    });
  });
});




// document.addEventListener("DOMContentLoaded", function () {
//   const cartSidebars = document.querySelectorAll("#cartSidebar");
//   const cartCrosses = document.querySelectorAll("#cartCross");
//   const cartIcons = document.querySelectorAll("#cartIcon");

//   cartIcons.forEach((icon) => {
//     icon.addEventListener("click", () => {
//       // You can access the corresponding cart sidebar and cart cross here
//       // For example, you can use the index of the icon to get the corresponding sidebar and cross
//       const index = Array.prototype.indexOf.call(cartIcons, icon);
//       const cartSidebar = cartSidebars[index];
//       const cartCross = cartCrosses[index];

//       cartSidebar.style.opacity = "1";
//       cartSidebar.style.zIndex = "20";
//       cartSidebar.style.right = "0";
//       cartSidebar.style.display = "flex";
//     });
//   });

//   cartCrosses.forEach((cross) => {
//     cross.addEventListener("click", () => {
//       // Similarly, you can access the corresponding cart sidebar and cart icon here
//       const index = Array.prototype.indexOf.call(cartCrosses, cross);
//       const cartSidebar = cartSidebars[index];
//       const cartIcon = cartIcons[index];

//       cartSidebar.style.opacity = "0";
//       cartSidebar.style.zIndex = "0";
//       cartSidebar.style.right = "-100%";
//       cartSidebar.style.display = "none";
//     });
//   });
// });


// category page

document.addEventListener("DOMContentLoaded", function () {
  const filterBar = document.getElementById("filterBar");
  const filtercross = document.getElementById("filtercross");
  const filterbtn = document.getElementById("filterbtn");

  filterbtn.addEventListener("click", () => {
    filterBar.style.opacity = "1";
    filterBar.style.zIndex = "20";
    filterBar.style.left = "0";
  });

  filtercross.addEventListener("click", () => {
    filterBar.style.opacity = "0";
    filterBar.style.zIndex = "0";
    filterBar.style.left = "-100%";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const plusbtns = document.querySelectorAll(".plusbtn");
  const minusbtns = document.querySelectorAll(".minusbtn");
  const contents = document.querySelectorAll(".content");

  plusbtns.forEach((plusbtn, index) => {
    plusbtn.addEventListener("click", () => {
      contents[index].style.display = "none";
      plusbtn.style.display = "none";
      minusbtns[index].style.display = "block";
    });
  });

  minusbtns.forEach((minusbtn, index) => {
    minusbtn.addEventListener("click", () => {
      contents[index].style.display = "block";
      minusbtn.style.display = "none";
      plusbtns[index].style.display = "block";
    });
  });
});

// productDetail page
document.addEventListener("DOMContentLoaded", function () {
  const productDetailBg = document.querySelector(".productDetailBg");
  const images = [
    { selector: ".productDetailImg1", url: "lamp-1ProductDetails.jpg" },
    { selector: ".productDetailImg2", url: "lamp-2ProductDetails.jpg" },
    { selector: ".productDetailImg3", url: "lamp-3ProductDetails.jpg" },
    { selector: ".productDetailImg4", url: "lamp-4ProductDetails.jpg" },
  ];

  images.forEach((image) => {
    document.querySelectorAll(image.selector).forEach((img) => {
      img.addEventListener("click", () => {
        productDetailBg.style.backgroundImage = `url(images/productDetailsImg/${image.url})`;
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const borderBAnimation = document.querySelectorAll(".border-b-animation");

  borderBAnimation.forEach((element) => {
    element.addEventListener("click", () => {
      // Remove the border from all elements
      borderBAnimation.forEach((el) => {
        el.classList.remove("active-border");
      });
      // Add the border to the current element
      element.classList.add("active-border");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const DescriptionH = document.getElementById("DescriptionH");
  const AddinfoH = document.getElementById("AddinfoH");
  const ReviewH = document.getElementById("ReviewH");
  const ShippingH = document.getElementById("ShippingH");

  const DescriptionContent = document.getElementById("DescriptionContent");
  const AddinfoContent = document.getElementById("AddinfoContent");
  const ReviewContent = document.getElementById("ReviewContent");
  const ShippingContent = document.getElementById("ShippingContent");

  DescriptionH.addEventListener("click", () => {
    DescriptionContent.style.display = "block";
    AddinfoContent.style.display = "none";
    ReviewContent.style.display = "none";
    ShippingContent.style.display = "none";
  });
  AddinfoH.addEventListener("click", () => {
    AddinfoContent.style.display = "block";
    DescriptionContent.style.display = "none";
    ReviewContent.style.display = "none";
    ShippingContent.style.display = "none";
  });
  ReviewH.addEventListener("click", () => {
    ReviewContent.style.display = "flex";
    DescriptionContent.style.display = "none";
    AddinfoContent.style.display = "none";
    ShippingContent.style.display = "none";
  });
  ShippingH.addEventListener("click", () => {
    ShippingContent.style.display = "flex";
    DescriptionContent.style.display = "none";
    AddinfoContent.style.display = "none";
    ReviewContent.style.display = "none";
  });
});

// checkout page

// form checkbox toggle
document.addEventListener("DOMContentLoaded", function () {
  const blackCheckbox = document.getElementById("blackCheckbox");
  const blackCheckboxContent = document.getElementById("blackCheckboxContent");

  blackCheckbox.addEventListener("click", () => {
    blackCheckboxContent.classList.toggle("active");
  });
});

// payment method toggle
document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll("#formCheckbox");
  const contents = document.querySelectorAll("#formCheckboxContent");

  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("change", () => {
      contents.forEach((content) => {
        content.classList.remove("formContent");
      });
      if (checkbox.checked) {
        contents[index].classList.add("formContent");
      }
    });
  });
});


// img slider for products card
let sliders = document.querySelectorAll(".image-slider");

sliders.forEach((slider) => {
  let currentImage = 1;
  let images = slider.querySelectorAll(".image");

  function prevImage() {
    hideAllImages();
    if (currentImage === 1) {
      currentImage = images.length;
    } else {
      currentImage--;
    }
    showImage();
  }

  function nextImage() {
    hideAllImages();
    if (currentImage === images.length) {
      currentImage = 1;
    } else {
      currentImage++;
    }
    showImage();
  }

  function hideAllImages() {
    images.forEach((image) => {
      image.style.display = "none";
    });
  }

  function showImage() {
    images[currentImage - 1].style.display = "block";
  }

  // Add event listeners to navigation buttons
  slider.querySelector(".prev").addEventListener("click", prevImage);
  slider.querySelector(".next").addEventListener("click", nextImage);
});

// img slider hero section
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activedot", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " activedot";
}


// image change for multiple card
// Get all container elements
// const containers = document.querySelectorAll(".bgCover");

// // Get all arrow images
// const leftArrows = document.querySelectorAll(
//   '.productHover[src="svgs/left-svg.svg"]'
// );
// const rightArrows = document.querySelectorAll(
//   '.productHover[src="svgs/right-svg.svg"]'
// );

// // Define an array of background images for each container
// const backgroundImages = [
//   [
//     "images/productImg/product-img.jpg",
//     "images/productImg/product-img2.jpg",
//     "images/productImg/product-img3.jpg",
//   ],
//   [
//     "images/productImg/product-img4.jpg",
//     "images/productImg/product-img5.jpg",
//     "images/productImg/product-img6.jpg",
//   ],
//   // Add more arrays for each container
// ];

// // Initialize the current image index for each container
// let currentImageIndices = new Array(containers.length).fill(0);

// // Update the background image for a given container
// function updateBackgroundImage(containerIndex) {
//   const container = containers[containerIndex];
//   const backgroundImage =
//     backgroundImages[containerIndex][currentImageIndices[containerIndex]];
//   container.style.backgroundImage = `url(${backgroundImage})`;
// }

// // Handle left arrow click
// leftArrows.forEach((leftArrow, index) => {
//   leftArrow.addEventListener("click", () => {
//     currentImageIndices[index] =
//       (currentImageIndices[index] - 1 + backgroundImages[index].length) %
//       backgroundImages[index].length;
//     updateBackgroundImage(index);
//   });
// });

// // Handle right arrow click
// rightArrows.forEach((rightArrow, index) => {
//   rightArrow.addEventListener("click", () => {
//     currentImageIndices[index] =
//       (currentImageIndices[index] + 1) % backgroundImages[index].length;
//     updateBackgroundImage(index);
//   });
// });

// // Initialize the background images for all containers
// containers.forEach((container, index) => {
//   updateBackgroundImage(index);
// });

// For single card

// // Get the container element
// const container = document.querySelector('.bgCover');

// // Get the arrow images
// const leftArrow = document.querySelector('.productHover[src="svgs/left-svg.svg"]');
// const rightArrow = document.querySelector('.productHover[src="svgs/right-svg.svg"]');

// // Define an array of background images
// const backgroundImages = [
//   'images/productImg/product-img1.jpg',
//   'images/productImg/product-img2.jpg',
//   'images/productImg/product-img3.jpg',
// ];

// // Initialize the current image index
// let currentImageIndex = 0;

// // Update the background image
// function updateBackgroundImage() {
//   container.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`;
// }

// // Handle left arrow click
// leftArrow.addEventListener('click', () => {
//   currentImageIndex = (currentImageIndex - 1 + backgroundImages.length) % backgroundImages.length;
//   updateBackgroundImage();
// });

// // Handle right arrow click
// rightArrow.addEventListener('click', () => {
//   currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
//   updateBackgroundImage();
// });

// // Initialize the background image
// updateBackgroundImage();
