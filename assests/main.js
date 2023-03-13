//! Header
const header = document.querySelector("header");
const menu = document.getElementById("menu");
const barsDiv = document.querySelector(".bars");
const bars = document.querySelectorAll(".bars span");
const cards = document.querySelectorAll(".cards");
const rightCards = document.querySelectorAll(".right_card");
let isClicked = false;
let recentPostsNum = 0; // 7 Posts
let popularPostsNum = 0; // 4 Posts

barsDiv.addEventListener("click", () => {
  if (!isClicked) {
    bars[0].style.cssText = "opacity: 0; margin-top: -3px";
    bars[1].style.cssText = "transform: rotate(135deg); margin-top: -3px;";
    bars[2].style.cssText = "transform: rotate(-135deg); margin-top: -3px;";
    menu.style.top = `100%`;
    isClicked = true;
  } else {
    bars[0].style.cssText = "opacity: 1;";
    bars[1].style.cssText = "transform: rotate(0);";
    bars[2].style.cssText = "transform: rotate(0);";
    menu.style.top = `-450%`;
    isClicked = false;
  }
});

// Header Animation
document.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    header.classList.add("animate");
  } else {
    header.classList.remove("animate");
  }
});

// Recent Posts
while (recentPostsNum < 7) {
  cards[0].innerHTML += `<div class="card">
  <section class="author">
    <img src="imgs/01.webp" alt="" />
    <span class="tag">PROGRAMMING</span>
  </section>
  <section class="content">
    <h4>What is Language Translator and its Types?</h4>
    <div class="line-1">
      <span> <i class="fa-solid fa-user"></i> TEQUILA</span>
      <span> <i class="fa-solid fa-clock"></i> OCTOBER 15, 2021</span>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <a href="" class="btn1">READ MORE</a>
  </section>
  </div>`;
  recentPostsNum++;
}

// Popular Posts
while (popularPostsNum < 4) {
  rightCards[0].innerHTML += `<div class="card">
  <section class="author">
    <img src="imgs/01.webp" alt="" />
  </section>
  <section class="content">
    <a href="#"
      >What is Language Translator and its Types? Differences between
      Compiler and Interpreter</a
    >
    <div class="line-1">
      <span> <i class="fa-solid fa-clock"></i> OCTOBER 15, 2021</span>
    </div>
  </section>
</div>`;
  popularPostsNum++;
}
