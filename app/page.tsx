import Image from "next/image";

export default function Home() {
  const equipe = [
    { nome: "Halex Kardigam de Paula", foto: "/halex.jpg", cargo: "Gerente de Vendas" },
    { nome: "João Gabriel Barbosa Lopes", foto: "/joao_b.jpg", cargo: "Pesquisador" },
    { nome: "João Victor de Santana Sanches", foto: "/joao_v.jpg", cargo: "Pesquisador" },
    { nome: "Leonardo Reis do Barco", foto: "/leo.jpg", cargo: "Pesquisador" },
    { nome: "Luiz Felipe Viana Dias da Silva", foto: "/luiz.jpg", cargo: "Pesquisador" },
    { nome: "Maria Eduarda Puga Foganholi", foto: "/duda.jpg", cargo: "Pesquisadora" },
  ];

  // Configuração do link do WhatsApp
  const numeroWhatsApp = "553598817113";
  const mensagemWhatsApp = "Olá! Vim pelo site e tenho interesse em adquirir a barra energética IronBean para os meus treinos. Podemos falar?";
  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemWhatsApp)}`;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-orange-500 selection:text-white scroll-smooth">
      
      {/* Hero Section */}
      <header className="relative flex flex-col items-center justify-center py-32 px-6 text-center overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-zinc-950 to-zinc-950 -z-10"></div>
        
        <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 rounded-full border border-orange-500/20 mb-8 inline-block shadow-[0_0_15px_rgba(249,115,22,0.2)]">
          Inovação Agronômica • IFSULDEMINAS
        </span>
        
        <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-white mb-6 uppercase italic">
          Iron<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">Bean</span>
        </h1>
        
        <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light text-zinc-400 mb-10">
          A força que vem do campo. A barra energética funcional com matriz de feijão, <strong className="text-white font-semibold">creatina e inositol</strong> para o pré-treino perfeito.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href={linkWhatsApp} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-bold text-lg py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(234,88,12,0.4)]"
          >
            Comprar Agora
          </a>
          <a 
            href="#tabela-nutricional"
            className="flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-bold text-lg py-4 px-10 rounded-full transition-all"
          >
            Ver Tabela Nutricional
          </a>
        </div>
      </header>

      {/* Nutrição e Performance Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tight">Engenharia <span className="text-orange-500">Nutricional</span></h2>
        <p className="text-zinc-400 max-w-2xl mx-auto mb-16 text-lg">Projetada com exatidão para ser o combustível definitivo do seu treino.</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-orange-500/50 transition-colors group text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-all"></div>
            <h3 className="text-2xl font-bold text-white mb-4">Combustível Puro</h3>
            <p className="text-zinc-400 leading-relaxed">
              69g de hidratos de carbono de diferentes absorções. Energia rápida para a explosão inicial e sustentada para não quebrar a meio do treino.
            </p>
          </div>
          
          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-orange-500/50 transition-colors group text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-all"></div>
            <h3 className="text-2xl font-bold text-white mb-4">Foco e Cognição</h3>
            <p className="text-zinc-400 leading-relaxed">
              Enriquecida com 4.6g de Inositol (Vitamina B8) por porção. Atua no sistema nervoso garantindo foco total e conexão mente-músculo inabalável.
            </p>
          </div>
          
          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-orange-500/50 transition-colors group text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-all"></div>
            <h3 className="text-2xl font-bold text-white mb-4">Força Explosiva</h3>
            <p className="text-zinc-400 leading-relaxed">
              Quase 2g de Creatina Soldier por barra. Apoiada pela matriz de carboidratos inteligente para uma absorção celular e volumização muscular perfeitas.
            </p>
          </div>
        </div>
      </section>

      {/* Tabela Nutricional Section */}
      <section id="tabela-nutricional" className="py-24 px-6 max-w-3xl mx-auto">
        <h2 className="text-4xl font-black text-white mb-10 text-center uppercase tracking-tight">Tabela <span className="text-orange-500">Nutricional</span></h2>
        
        <div className="bg-zinc-900/80 p-8 md:p-12 rounded-3xl border border-zinc-800 shadow-[0_0_40px_rgba(249,115,22,0.05)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-600 to-amber-400"></div>
          
          <div className="border-b-[10px] border-black pb-4 mb-6 text-center">
            <h3 className="text-3xl font-black text-white uppercase tracking-wider mb-1">Informação Nutricional</h3>
          </div>
          
          <div className="space-y-4 text-lg">
            <div className="flex justify-between border-b border-zinc-800/80 pb-2">
              <span className="font-bold text-white">Valor Energético</span>
              <span className="text-zinc-300">413 kcal = 1728 kJ</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800/80 pb-2">
              <span className="font-bold text-white">Carboidratos</span>
              <span className="text-zinc-300">69 g</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800/80 pb-2">
              <span className="font-bold text-white">Proteínas</span>
              <span className="text-zinc-300">8 g</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800/80 pb-2">
              <span className="font-bold text-white">Gorduras Totais</span>
              <span className="text-zinc-300">13 g</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800/80 pb-2 pl-4 text-base">
              <span className="text-zinc-400">Gorduras Saturadas</span>
              <span className="text-zinc-400">6 g</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800/80 pb-2 pl-4 text-base">
              <span className="text-zinc-400">Gorduras Trans</span>
              <span className="text-zinc-400">0 g</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800/80 pb-2">
              <span className="font-bold text-white">Fibra Alimentar</span>
              <span className="text-zinc-300">5 g</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800/80 pb-2">
              <span className="font-bold text-white">Sódio</span>
              <span className="text-zinc-300">45 mg</span>
            </div>
          </div>
          
          <div className="mt-8 border-t-[4px] border-black pt-6">
            <h4 className="text-sm font-black text-orange-500 uppercase tracking-widest mb-4">Aditivos de Performance</h4>
            <div className="space-y-3 text-lg">
              <div className="flex justify-between border-b border-zinc-800/80 pb-2 bg-zinc-950/50 p-2 rounded">
                <span className="font-bold text-white">Creatina Soldier</span>
                <span className="text-orange-400 font-bold">1.8 g</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800/80 pb-2 bg-zinc-950/50 p-2 rounded">
                <span className="font-bold text-white">Inositol (Vitamina B8)</span>
                <span className="text-orange-400 font-bold">4.6 g</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origem - IFSULDEMINAS */}
      <section className="relative py-24 px-6 border-y border-zinc-900 bg-zinc-950/80">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Da Lavoura ao Laboratório</h2>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Todo o desenvolvimento, desde a seleção das sementes de alta qualidade até à formulação final da IronBean, foi conduzido no <strong className="text-orange-500">IFSULDEMINAS - Campus Muzambinho</strong>. Unimos o rigor da tecnologia agronómica à engenharia de alimentos para criar o suplemento definitivo.
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
                  src={membro.foto} 
                  alt={`Foto de ${membro.nome}`} 
                  fill 
                  className="object-cover opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                />
              </div>
              <h3 className="font-bold text-zinc-200 group-hover:text-white transition-colors text-center">{membro.nome}</h3>
              <p className="text-xs text-orange-500/80 mt-1 uppercase tracking-wider font-semibold">{membro.cargo}</p>
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