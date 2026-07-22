import { vehicles } from '../data/inventory';

export default function Catalog() {
  return (
    <section className="min-h-screen bg-brand-dark/95 backdrop-blur-sm py-24 px-4">
      <div className="max-w-7xl mx-auto animate-fade-in-up">
        <h2 className="text-4xl md:text-6xl font-black text-white text-center mb-6 uppercase drop-shadow-xl">Catálogo de <span className="text-brand-gold">Refacciones</span></h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Busca entre más de 200 productos especializados para transmisiones y direcciones.</p>
        
        {/* Barra de Filtros Premium */}
        <div className="bg-brand-card/50 p-6 md:p-8 rounded-sm border border-gray-800 mb-16 flex flex-col md:flex-row gap-6 w-full shadow-2xl">
          <div className="flex-1">
            <label className="block text-brand-gold text-[10px] font-bold mb-2 uppercase tracking-widest">Marca</label>
            <div className="border border-brand-gold rounded-sm overflow-hidden">
              <select className="w-full bg-brand-black text-gray-300 p-3 outline-none cursor-pointer text-sm appearance-none">
                <option>Seleccionar Marca</option>
                <option>Ford</option>
                <option>Nissan</option>
                <option>Volkswagen</option>
              </select>
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-brand-gold text-[10px] font-bold mb-2 uppercase tracking-widest">Año</label>
            <div className="border border-gray-800 rounded-sm overflow-hidden">
              <select className="w-full bg-brand-black text-gray-300 p-3 outline-none cursor-pointer text-sm appearance-none focus:border-brand-gold">
                <option>Seleccionar Año</option>
                <option>2026 - 2020</option>
                <option>2019 - 2015</option>
              </select>
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-brand-gold text-[10px] font-bold mb-2 uppercase tracking-widest">Pieza</label>
            <div className="border border-gray-800 rounded-sm overflow-hidden">
              <select className="w-full bg-brand-black text-gray-300 p-3 outline-none cursor-pointer text-sm appearance-none focus:border-brand-gold">
                <option>¿Qué buscas?</option>
                <option>Transmisión</option>
                <option>Dirección</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <button className="group bg-brand-gold text-black font-bold uppercase px-8 py-3 rounded-sm hover:bg-yellow-500 transition-colors h-[46px] w-full md:w-auto text-sm flex items-center justify-center gap-2">
              Filtrar <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 text-lg leading-none">→</span>
            </button>
          </div>
        </div>

        {/* 5 x Fila */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {vehicles.map((item) => (
            <div key={item.id} className="bg-brand-card/90 backdrop-blur-sm rounded-sm overflow-hidden group cursor-pointer border border-gray-800 hover:border-brand-gold transition-all duration-300 shadow-md flex flex-col">
              <div className="aspect-[4/3] overflow-hidden relative bg-brand-black">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0" />
                <div className="absolute top-2 left-2 bg-brand-black border border-brand-gold text-brand-gold text-[9px] font-bold px-1.5 py-0.5 uppercase tracking-widest">
                  {item.category}
                </div>
              </div>
              <div className="p-3 flex flex-col flex-grow justify-between">
                <h3 className="text-[11px] md:text-xs font-bold text-white leading-snug mb-3">{item.title}</h3>
                <a href={`https://wa.me/527221234567?text=Me%20interesa:%20${item.title}`} target="_blank" rel="noreferrer" className="w-full py-2 bg-brand-black border border-gray-700 text-gray-300 font-bold uppercase tracking-widest text-[9px] rounded-sm group-hover:border-brand-gold group-hover:text-brand-gold transition-colors flex justify-center items-center gap-1 mt-auto">
                  Cotizar <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 text-sm leading-none">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}