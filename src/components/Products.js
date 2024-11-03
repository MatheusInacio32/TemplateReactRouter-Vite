const Products = () => {
    return (
      <section id="produtos" className="container mt-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <img src="/img/hashi.jpg" className="img-fluid" alt="Hashi" />
            <h3>Hashi</h3>
            <p>Para experiências gastronômicas autênticas.</p>
          </div>
          <div className="col-md-6 mb-4">
            <img src="/img/palito-dental.jpg" className="img-fluid" alt="Palito Dental" />
            <h3>Palito Dental com Menta</h3>
            <p>Refrescância a cada uso.</p>
          </div>
          <div className="col-md-6 mb-4">
            <img src="/img/espeto.jpg" className="img-fluid" alt="Espeto" />
            <h3>Espetos</h3>
            <p>Perfeito para o seu churrasco.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Products;
  