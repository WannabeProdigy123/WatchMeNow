let currentIndex = 0;
const images = document.querySelectorAll('.people-image');
const dots = document.querySelectorAll('.dot');
const imageContainer = document.querySelector('.image-container');
const content = document.querySelector('.content');

//const backgroundColors = ['#000', '#4b3b00', '#2c3e50', '#1f1f1f'];
const textColors = ['#fff', '#ffd700', '#ecf0f1', '#b76e78'];

function showImage(index) {
  // Fade out all images
  images.forEach((img, i) => {
    if (i === index) {
      img.style.opacity = '1';
      img.classList.add('active');
    } else {
      img.style.opacity = '0';
      img.classList.remove('active');
    }
  });

  // Update active dot
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });

  // Update background color and text color
  //imageContainer.style.backgroundColor = backgroundColors[index];
  content.style.color = textColors[index];
}
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    showImage(currentIndex);
  });
});

// Optional: Automatic Slideshow
//setInterval(() => {
  //currentIndex = (currentIndex + 1) % images.length;
  //showImage(currentIndex);
//}, 5000);

// Initialize
showImage(currentIndex);
