function main() {
  const swiperWrapper = document.querySelector('.swiper>.swiper-wrapper');
  window.images.forEach((element) => {
    const swiperBox = (li = document.createElement('div'));
    swiperBox.className = 'swiper-slide';
    const imageBox = (li = document.createElement('div'));
    imageBox.className = 'image-box';
    const image = document.createElement('img');
    image.className = 'image';
    image.src = `./images/${element}`;
    imageBox.appendChild(image);
    swiperBox.appendChild(imageBox);
    swiperWrapper.append(swiperBox);
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
