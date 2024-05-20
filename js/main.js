var swiper = new Swiper(".swiper1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay : true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

const slider_items = $('.sliderItems li');
const slider_dots = $('.sliderDots li');
const nav_next = $('.slider-nav.next');
const nav_prev = $('.slider-nav.prev');
const slider_text = $('.sliderItems li p');

let selected_item = 0;

function setItemSlider(index) {
  selected_item = index;

  slider_items.each(function(idx) {
    let offset = idx - selected_item;
    if (offset < 0) {offset += slider_items.length};

    for (let i = 0; i < slider_items.length + 1; i++) {
      $(this)
      .removeClass(`item${i}`)
      .addClass(`item${offset + 1}`);
    }

    slider_dots
    .eq(selected_item)
    .addClass('active')
    .siblings('li')
    .removeClass('active');

    slider_text
    .eq(selected_item)
    .addClass('on')
    .parents('li')
    .siblings('li')
    .children('p')
    .removeClass('on');
  });
}

slider_items.click(function() {
  setItemSlider($(this).index());
});

slider_dots.click(function() {
  setItemSlider($(this).index());
});

nav_next.click(function() {
  selected_item = selected_item < slider_items.length - 1 ? ++ selected_item : 0;
  setItemSlider(selected_item);
});

nav_prev.click(function() {
  selected_item = selected_item >= 1 ? --selected_item : slider_items.length - 1;
  setItemSlider(selected_item);
});