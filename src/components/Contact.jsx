function Contact({ language }) {
  return (
    <section id="contact" className="py-20 px-6 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">
        {language === 'pt' ? 'Contato' : 'Contact'}
      </h2>
      <p className="text-gray-300">
        {language === 'pt'
          ? 'Me chame no WhatsApp para conversar sobre oportunidades ou projetos:'
          : 'Reach me on WhatsApp to discuss job opportunities or projects:'}
      </p>
      <a href="https://wa.me/5514991160776" target="_blank" className="inline-block mt-4 px-6 py-3 bg-teal-600 text-white rounded hover:bg-teal-700 transition">
        {language === 'pt' ? 'Fale comigo no WhatsApp' : 'Contact me on WhatsApp'}
      </a>
    </section>
  );
}

export default Contact;
