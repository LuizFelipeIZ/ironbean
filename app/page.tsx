import Image from "next/image";

export default function Home() {
  const equipe = [
    "Halex Kardigam de Paula Wesker minato",
    "João Gabriel Barbosa Lopes",
    "João Victor de Santana Sanches",
    "Leonardo Reis do Barco",
    "Luiz Felipe Viana Dias da Silva",
    "Maria Eduarda Puga Foganholi",
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-orange-500 selection:text-white">
      
      {/* Hero Section - Foco em Impacto e Conversão */}
      <header className="relative flex flex-col items-center justify-center py-32 px-6 text-center overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-zinc-950 to-zinc-950 -z-10"></div>
        
        <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 rounded-full border border-orange-500/20 mb-8 inline-block shadow-[0_0_15px_rgba(249,115,22,0.2)]">
          Inovação Agronômica • IFSULDEMINAS
        </span>
        
        <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-white mb-6 uppercase italic">
          Iron<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">Bean</span>
        </h1>
        
        <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light text-zinc-400 mb-10">
          A força que vem do campo. A primeira barra proteica à base de feijão desenvolvida para <strong className="text-white font-semibold">alta performance e hipertrofia</strong>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-bold text-lg py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(234,88,12,0.4)]">
            Comprar Agora
          </button>
          <button className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-bold text-lg py-4 px-10 rounded-full transition-all">
            Ver Tabela Nutricional
          </button>
        </div>
      </header>

      {/* Nutrição e Performance Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tight">Engenharia <span className="text-orange-500">Nutricional</span></h2>
        <p className="text-zinc-400 max-w-2xl mx-auto mb-16 text-lg">Projetada com exatidão para quem leva o treino a sério e não falha nos macros.</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-orange-500/50 transition-colors group text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-all"></div>
            <h3 className="text-2xl font-bold text-white mb-4">Macros Impecáveis</h3>
            <p className="text-zinc-400 leading-relaxed">
              Fórmula limpa e equilibrada. A proporção exata de proteínas de alto valor biológico e carboidratos complexos essenciais para a recuperação muscular e hipertrofia.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-orange-500/50 transition-colors group text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-all"></div>
            <h3 className="text-2xl font-bold text-white mb-4">Força Sustentável</h3>
            <p className="text-zinc-400 leading-relaxed">
              Energia de libertação gradual sem picos de insulina. O poder do feijão garante saciedade e combustível constante, perfeito para render nos treinos mais pesados.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-orange-500/50 transition-colors group text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-all"></div>
            <h3 className="text-2xl font-bold text-white mb-4">Clean Label</h3>
            <p className="text-zinc-400 leading-relaxed">
              O fim dos ingredientes impronunciáveis. Saúde e digestibilidade superior numa barra prática que complementa a dieta nos dias mais corridos.
            </p>
          </div>
        </div>
      </section>

      {/* Origem - IFSULDEMINAS */}
      <section className="relative py-24 px-6 border-y border-zinc-900 bg-zinc-950/80">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Da Lavoura ao Laboratório</h2>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Todo o desenvolvimento, desde a seleção das sementes de alta qualidade até à formulação final da IronBean, foi conduzido no <strong className="text-orange-500">IFSULDEMINAS - Campus Muzambinho</strong>. Unimos o rigor da tecnologia agronómica à engenharia de alimentos para criar uma barra proteica superior.
          </p>
        </div>
      </section>

      {/* Equipe Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">O Cérebro por trás da IronBean</h2>
        <p className="text-zinc-500 mb-16">Conheça a equipa de desenvolvimento técnico.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6">
          {equipe.map((membro, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-32 h-32 bg-zinc-800 rounded-full mb-6 overflow-hidden relative shadow-lg border-2 border-zinc-800 group-hover:border-orange-500 transition-all duration-300 group-hover:scale-105">
                <Image 
                  src="/placeholder-avatar.jpg" 
                  alt={`Foto de ${membro}`} 
                  fill 
                  className="object-cover opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                />
              </div>
              <h3 className="font-bold text-zinc-200 group-hover:text-white transition-colors">{membro}</h3>
              <p className="text-xs text-orange-500/80 mt-1 uppercase tracking-wider font-semibold">Pesquisador</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-900 py-12 text-center text-sm flex flex-col items-center">
        <div className="text-2xl font-black text-zinc-800 uppercase italic mb-4">IronBean</div>
        <p className="text-zinc-600">© 2026 IronBean. Desenvolvido no IFSULDEMINAS - Campus Muzambinho.</p>
      </footer>
    </div>
  );
}