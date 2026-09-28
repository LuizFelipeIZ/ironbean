import Image from "next/image";

export default function Home() {
  const equipe = [
    "Halex Kardigam de Paula",
    "João Gabriel Barbosa Lopes",
    "João Victor de Santana Sanches",
    "Leonardo Reis do Barco",
    "Luiz Felipe Viana Dias da Silva",
    "Maria Eduarda Puga Foganholi",
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      {/* Hero Section */}
      <header className="bg-emerald-800 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">IronBean</h1>
        <p className="text-xl max-w-2xl mx-auto font-light">
          A força que vem do campo. A barra proteica à base de feijão que revoluciona a sua nutrição diária.
        </p>
        <button className="mt-8 bg-amber-500 hover:bg-amber-600 text-stone-900 font-bold py-3 px-8 rounded-full transition-colors">
          Conheça a Fórmula
        </button>
      </header>

      {/* Nutrição e Saúde Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-emerald-900 mb-6">Nutrição Inteligente para sua Rotina</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
            <h3 className="text-xl font-bold text-emerald-700 mb-3">Macronutrientes Equilibrados</h3>
            <p className="text-stone-600">
              Fundamental para bater as metas diárias, a IronBean fornece a quantidade exata de proteínas e carboidratos complexos necessários para a hipertrofia e recuperação muscular.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
            <h3 className="text-xl font-bold text-emerald-700 mb-3">Saúde e Praticidade</h3>
            <p className="text-stone-600">
              A base de uma boa performance é a alimentação saudável. Nossa barra complementa refeições corridas sem abrir mão de ingredientes limpos e naturais.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
            <h3 className="text-xl font-bold text-emerald-700 mb-3">Energia Sustentável</h3>
            <p className="text-stone-600">
              O poder do feijão entregando saciedade e energia de liberação gradual, perfeito para o pré ou pós-treino sem picos de insulina.
            </p>
          </div>
        </div>
      </section>

      {/* Origem - IFSULDEMINAS */}
      <section className="bg-stone-200 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-emerald-900 mb-4">Ciência e Agronomia</h2>
          <p className="text-lg text-stone-700">
            Todo o desenvolvimento, desde a seleção das sementes até a formulação final da IronBean, foi realizado no <strong>IFSULDEMINAS - Campus Muzambinho</strong>. Unimos o conhecimento agronômico à inovação em engenharia de alimentos para criar um produto 100% focado em qualidade e sustentabilidade.
          </p>
        </div>
      </section>

      {/* Equipe Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-emerald-900 mb-10">Quem Faz a IronBean Acontecer</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {equipe.map((membro, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Placeholder para a foto. Troque o src pela imagem real na pasta /public */}
              <div className="w-32 h-32 bg-stone-300 rounded-full mb-4 overflow-hidden relative shadow-md">
                <Image 
                  src="/placeholder-avatar.jpg" 
                  alt={`Foto de ${membro}`} 
                  fill 
                  className="object-cover opacity-50"
                />
              </div>
              <h3 className="font-bold text-stone-800">{membro}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-950 text-emerald-100 py-8 text-center text-sm">
        <p>© 2026 IronBean. Desenvolvido no IFSULDEMINAS - Campus Muzambinho.</p>
      </footer>
    </div>
  );
}