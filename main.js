function main() {
  const swiperWrapper = document.querySelector('.swiper>.swiper-wrapper');
  window.images.forEach((element) => {
    const imageBox = (li = document.createElement('div'));
    imageBox.className = 'swiper-slide';
    const image = document.createElement('img');
    image.className = 'image';
    image.src = `./images/${element}`;
    imageBox.appendChild(image);
    swiperWrapper.append(imageBox);
  });

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    autoplay: {
      delay: 10000,
    },
  });
}

main();
