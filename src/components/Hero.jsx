function Hero({ language }) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-transparent">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
        Leonardo Kaneno
      </h1>
      <p className="text-lg md:text-2xl text-gray-400 max-w-2xl font-light tracking-wide">
        {language === 'pt'
          ? 'QA Tester Manual com estudo com foco em automação de testes.'
          : 'Manual QA Tester currently focused on learning and improving test automation.'}
      </p>
    </section>
  );
}

export default Hero;
