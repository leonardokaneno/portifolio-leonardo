function About({ language }) {
  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">
        {language === 'pt' ? 'Sobre mim' : 'About me'}
      </h2>
      <p className="text-gray-300">
        {language === 'pt'
          ? 'Sou formado em Publicidade e Propaganda e atuo como QA manual. Estou em processo de aprendizado em automação de testes com Cypress, testes de API com Postman, e foco em projetos de e-commerce.'
          : 'I hold a degree in Advertising and I work as a manual QA tester. I am in learning process in test automation with Cypress, API testing with Postman, and I have a strong focus on e-commerce projects.'}
      </p>
    </section>
  );
}

export default About;
