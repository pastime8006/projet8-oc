<div class="slider-container">
  <div class="slider">
    <div class="slide">Slide 1</div>
    <div class="slide">Slide 2</div>
    <div class="slide">Slide 3</div>
  </div>
  <div class="dots">
    <span class="dot active"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>
</div>

<style>
  .slider { display: flex; overflow: hidden; }
  .slide { min-width: 100%; }
  .dots { text-align: center; margin-top: 10px; }
  .dot {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: #bbb;
    cursor: pointer;
  }
  .dot.active { background-color: #333; }
</style>

<script>
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      // Logique pour changer de slide
      document.querySelector('.slide.active')?.classList.remove('active');
      document.querySelector('.dot.active')?.classList.remove('active');
      slides[index].classList.add('active');
      dots[index].classList.add('active');
    });
  });
</script>