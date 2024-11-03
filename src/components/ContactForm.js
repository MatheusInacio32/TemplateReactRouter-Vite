const ContactForm = () => {
    return (
      <section id="contato" className="container mt-5 mb-5">
      <h2>Fale Conosco</h2>
      <form id="contact-form">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nome</label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Mensagem</label>
          <textarea className="form-control" id="message" rows="3" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </section>
    );
  };
  
  export default ContactForm;
  