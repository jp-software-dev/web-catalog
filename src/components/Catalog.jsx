import { useState } from 'react';
import { vehicles } from '../data/inventory';

export default function Catalog() {
  // Estados para múltiples filtros
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState('default'); // 'asc' o 'desc'
  
  // Estados para el acordeón visual
  const [openSections, setOpenSections] = useState({
    brand: true,
    year: true,
    category: true
  });

  // Opciones disponibles basadas en el inventario
  const brands = ["Volkswagen", "Ford", "Chevrolet", "Nissan", "Honda", "Toyota", "Mazda", "BMW", "Audi", "Hyundai"];
  const years = ["2000 - 2005", "2006 - 2010", "2011 - 2015", "2016 - 2020", "2021 - 2026"];
  const categories = ["Transmisión", "Dirección", "Fluidos", "Electrónica", "Enfriamiento", "Frenos", "Suspensión", "Motor"];

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleCheckbox = (value, state, setState) => {
    if (state.includes(value)) {
      setState(state.filter(item => item !== value));
    } else {
      setState([...state, value]);
    }
  };

  // Filtrado y Ordenamiento Combinado
  let filteredVehicles = vehicles.filter(v => {
    const matchBrand = selectedBrands.length === 0 || selectedBrands.includes(v.brand);
    const matchYear = selectedYears.length === 0 || selectedYears.includes(v.year);
    const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(v.category);
    return matchBrand && matchYear && matchCategory;
  });

  if (sortOrder === 'asc') {
    filteredVehicles.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'desc') {
    filteredVehicles.sort((a, b) => b.price - a.price);
  }

  // Formatear precio
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(price);
  };

  return (
    <section className="min-h-screen bg-brand-dark py-12 md:py-24 px-4">
      <div className="max-w-7xl mx-auto animate-fade-in-up">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase drop-shadow-xl mb-4">Catálogo de <span className="text-brand-gold">Refacciones</span></h2>
          <p className="text-gray-400">Busca entre cientos de productos especializados para tu vehículo.</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* BARRA LATERAL DE FILTROS (Estilo Acordeón) */}
          <aside className="w-full lg:w-1/4 bg-brand-card/50 border border-gray-800 p-6 rounded-sm h-max">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-800">
              <div className="bg-black text-white px-4 py-2 font-bold flex items-center gap-2 rounded-sm border border-gray-800">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                Filtrar
              </div>
              <span className="text-gray-400 text-sm">{filteredVehicles.length} Resultados</span>
            </div>

            {/* Ordenar Por */}
            <div className="mb-6">
              <label className="block text-brand-gold text-xs font-bold mb-3 uppercase tracking-widest">Ordenar Por</label>
              <select onChange={(e) => setSortOrder(e.target.value)} className="w-full bg-brand-black text-gray-300 p-3 border border-gray-800 outline-none cursor-pointer text-sm focus:border-brand-gold transition-colors">
                <option value="default">Relevancia</option>
                <option value="asc">Precio: Menor a Mayor</option>
                <option value="desc">Precio: Mayor a Menor</option>
              </select>
            </div>

            {/* Acordeón: Marcas (Modelos) */}
            <div className="border-b border-gray-800 py-4">
              <button onClick={() => toggleSection('brand')} className="flex justify-between items-center w-full text-white font-bold hover:text-brand-gold transition-colors">
                Modelo (Marca)
                <span className="text-xl leading-none">{openSections.brand ? '∧' : '∨'}</span>
              </button>
              <div className={`mt-4 flex flex-col gap-3 transition-all ${openSections.brand ? 'block' : 'hidden'}`}>
                {brands.map(brand => (
                  <label key={brand} className="flex items-center gap-3 text-gray-400 text-sm cursor-pointer hover:text-white transition-colors">
                    <input type="checkbox" checked={selectedBrands.includes(brand)} onChange={() => handleCheckbox(brand, selectedBrands, setSelectedBrands)} className="w-4 h-4 accent-brand-gold bg-brand-black border-gray-700 rounded" />
                    {brand}
                  </label>
                ))}
              </div>
            </div>

            {/* Acordeón: Años */}
            <div className="border-b border-gray-800 py-4">
              <button onClick={() => toggleSection('year')} className="flex justify-between items-center w-full text-white font-bold hover:text-brand-gold transition-colors">
                Año
                <span className="text-xl leading-none">{openSections.year ? '∧' : '∨'}</span>
              </button>
              <div className={`mt-4 flex flex-col gap-3 transition-all ${openSections.year ? 'block' : 'hidden'}`}>
                {years.map(year => (
                  <label key={year} className="flex items-center gap-3 text-gray-400 text-sm cursor-pointer hover:text-white transition-colors">
                    <input type="checkbox" checked={selectedYears.includes(year)} onChange={() => handleCheckbox(year, selectedYears, setSelectedYears)} className="w-4 h-4 accent-brand-gold bg-brand-black border-gray-700 rounded" />
                    {year}
                  </label>
                ))}
              </div>
            </div>

            {/* Acordeón: Tipo de Pieza */}
            <div className="py-4">
              <button onClick={() => toggleSection('category')} className="flex justify-between items-center w-full text-white font-bold hover:text-brand-gold transition-colors">
                Tipo de Pieza
                <span className="text-xl leading-none">{openSections.category ? '∧' : '∨'}</span>
              </button>
              <div className={`mt-4 flex flex-col gap-3 transition-all ${openSections.category ? 'block' : 'hidden'}`}>
                {categories.map(cat => (
                  <label key={cat} className="flex items-center gap-3 text-gray-400 text-sm cursor-pointer hover:text-white transition-colors">
                    <input type="checkbox" checked={selectedCategories.includes(cat)} onChange={() => handleCheckbox(cat, selectedCategories, setSelectedCategories)} className="w-4 h-4 accent-brand-gold bg-brand-black border-gray-700 rounded" />
                    {cat}
                  </label>
                ))}
              </div>
            </div>
            
            <button onClick={() => { setSelectedBrands([]); setSelectedYears([]); setSelectedCategories([]); setSortOrder('default'); }} className="mt-6 w-full text-center text-xs text-gray-500 underline hover:text-brand-gold">
              Limpiar Filtros
            </button>
          </aside>

          {/* ÁREA DE PRODUCTOS (GRID) */}
          <main className="w-full lg:w-3/4">
            {filteredVehicles.length === 0 ? (
               <div className="bg-brand-card/50 border border-gray-800 p-10 text-center rounded-sm">
                 <p className="text-gray-400 font-bold text-lg mb-2">No encontramos refacciones con esos filtros.</p>
                 <p className="text-gray-500 text-sm">Intenta eliminar algunos filtros para ver más resultados.</p>
               </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {filteredVehicles.map((item) => (
                  <div key={item.id} className="bg-brand-card/90 backdrop-blur-sm rounded-sm overflow-hidden group cursor-pointer border border-gray-800 hover:border-brand-gold transition-all duration-300 shadow-md flex flex-col">
                    <div className="aspect-[4/3] overflow-hidden relative bg-brand-black">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0" />
                      <div className="absolute top-2 left-2 bg-brand-black border border-brand-gold text-brand-gold text-[9px] font-bold px-1.5 py-0.5 uppercase tracking-widest">
                        {item.category}
                      </div>
                    </div>
                    <div className="p-3 flex flex-col flex-grow justify-between">
                      <div className="mb-3">
                        <h3 className="text-[11px] md:text-xs font-bold text-white leading-snug mb-1">{item.title}</h3>
                        <p className="text-gray-500 text-[10px] uppercase">{item.brand} • {item.year}</p>
                        <p className="text-brand-gold font-bold text-sm mt-2">{formatPrice(item.price)}</p>
                      </div>
                      <a href={`https://wa.me/527221234567?text=Me%20interesa:%20${item.title}%20(${formatPrice(item.price)})`} target="_blank" rel="noreferrer" className="w-full py-2 bg-brand-black border border-gray-700 text-gray-300 font-bold uppercase tracking-widest text-[9px] rounded-sm group-hover:border-brand-gold group-hover:text-brand-gold transition-colors flex justify-center items-center gap-1 mt-auto">
                        Cotizar <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 text-sm leading-none">→</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
          
        </div>
      </div>
    </section>
  );
}