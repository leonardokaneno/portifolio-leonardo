function Header({ language, setLanguage }) {
  const toggleLanguage = () => setLanguage(language === 'pt' ? 'en' : 'pt');

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-semibold tracking-wide uppercase text-gray-300">
          <a href="#about" className="hover:text-white transition-all duration-200">
            {language === 'pt' ? 'Sobre' : 'About'}
          </a>
          <a href="#projects" className="hover:text-white transition-all duration-200">
            {language === 'pt' ? 'Projetos' : 'Projects'}
          </a>
          <a href="#contact" className="hover:text-white transition-all duration-200">
            {language === 'pt' ? 'Contato' : 'Contact'}
          </a>
          <a href="/cv-leonardo-pt.pdf" download className="hover:text-teal-400 transition text-xs md:text-sm">
            📄 {language === 'pt' ? 'CV em Português' : 'CV in Portuguese'}
          </a>
          <a href="/cv-leonardo-en.pdf" download className="hover:text-teal-400 transition text-xs md:text-sm">
            📄 {language === 'pt' ? 'CV em Inglês' : 'CV in English'}
          </a>
        </nav>
        <button
          onClick={toggleLanguage}
          className="mt-4 md:mt-0 ml-0 md:ml-6 px-3 py-1 border rounded text-sm hover:bg-gray-700 transition-all"
        >
          {language === 'pt' ? 'EN' : 'PT'}
        </button>
      </div>
    </header>
  );
}

export default Header;
