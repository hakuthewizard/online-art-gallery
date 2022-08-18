
const modal = document.querySelector('.modal');
const smallImgs = document.querySelectorAll('.grid-container img');
const fullSize = document.querySelector('.fullSize');
const imgCaption = document.querySelector('.caption');


smallImgs.forEach((smallImg => {
    smallImg.addEventListener('click', () => {
        modal.classList.add('open');
        fullSize.classList.add('open');
        const fullSizeSrc = smallImg.getAttribute("data-full");
        fullSize.src = `/full/${fullSizeSrc}`;
        const name = smallImg.alt;
        imgCaption.textContent = name;
    });
}));
modal.addEventListener('click', (e)=> {
    e.preventDefault;
    if(e.target.classList.contains('modal')) {
        modal.classList.remove('open');
        fullSize.classList.remove('open');
    }
})


const itemTitles = document.querySelectorAll(".itemTitle");

itemTitles.forEach((itemTitle) => {
  itemTitle.addEventListener("click", () => {
    if (itemTitle.classList.contains("open")) {
      itemTitle.classList.remove("open");
    } else {
      const itemTitlesOpened= document.querySelectorAll(".open");
      itemTitlesOpened.forEach((itemTitleOpened) => {
        itemTitleOpened.classList.remove("open");
      });
      itemTitle.classList.add("open");
    }
  });
});


const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})