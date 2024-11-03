const Carousel = () => {
    return (
      <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/img/Carrosel1.png" className="d-block w-100" alt="Imagem 2" />
            <div className="carousel-caption-custom">
              <h1>Desde <span className="highlight">1985</span>, trazendo <span className="highlight">tradição</span> e <span className="highlight">qualidade</span> em cada palito.</h1>
              <p>Na Original Produtos, nossa missão é oferecer soluções simples e eficientes para o seu churrasco.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/img/Carrosel2.png" className="d-block w-100" alt="Imagem 3" />
            <div className="carousel-caption-custom">
              <h1 className="white">Compromisso com a <span className="highlightbranco">excelência</span>: do campo à sua mesa.</h1>
              <p className="white">Cada palito de churrasco passa por um rigoroso processo de <span className="highlightbranco">seleção</span> e <span className="highlightbranco">qualidade</span>.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/img/Carrosel3.png" className="d-block w-100" alt="Imagem 1" />
            <div className="carousel-caption-custom">
              <h1><span className="highlight">Sustentabilidade</span> e <span className="highlight">inovação</span> para o seu churrasco perfeito.</h1>
              <p>Oferecemos produtos que transformam seu churrasco em uma <span className="highlight">experiência única</span>.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  };
  
  export default Carousel;
  