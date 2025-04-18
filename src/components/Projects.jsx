function Projects({ language }) {
  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">
        {language === 'pt' ? 'Projetos e Competências' : 'Projects & Skills'}
      </h2>
      <ul className="space-y-6 text-gray-200">
        <li className="border p-4 rounded hover:scale-[1.02] transition">
          <h4 className="font-semibold text-xl mb-1">
            {language === 'pt' ? 'Testes automatizados com Cypress' : 'Automated Testing with Cypress'}
          </h4>
          <p>
            {language === 'pt'
              ? 'Criação de testes end-to-end e testes mobile para lojas VTEX, com boas práticas e relatórios automatizados.'
              : 'Development of end-to-end and mobile tests for VTEX stores using best practices and automated reports.'}
          </p>
        </li>
        <li className="border p-4 rounded hover:scale-[1.02] transition">
          <h4 className="font-semibold text-xl mb-1">
            {language === 'pt' ? 'Testes de API com Postman' : 'API Testing with Postman'}
          </h4>
          <p>
            {language === 'pt'
              ? 'Validação de contratos, autenticação, simulação de payloads e rotinas automatizadas.'
              : 'Contract validation, authentication, payload simulation, and automated routines.'}
          </p>
        </li>
        <li className="border p-4 rounded hover:scale-[1.02] transition">
          <h4 className="font-semibold text-xl mb-1">
            {language === 'pt' ? 'Validações visuais com Applitools' : 'Visual Validation with Applitools'}
          </h4>
          <p>
            {language === 'pt'
              ? 'Uso de ferramentas de snapshot para garantir a integridade visual em múltiplos navegadores e dispositivos.'
              : 'Use of snapshot tools to ensure visual integrity across multiple browsers and devices.'}
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
