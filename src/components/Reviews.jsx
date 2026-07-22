export default function Reviews() {
  return (
    <section className="relative py-24 px-4 min-h-screen flex items-center">
      {/* Fondo de Auto Oscuro */}
      <img src="https://images.unsplash.com/photo-1605816988069-b11383b50717?auto=format&fit=crop&q=80&w=1900" alt="Auto Fondo" className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-brand-dark"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full animate-fade-in-up">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">Lo que nuestros clientes <span className="text-brand-gold">dicen</span></h2>
          <p className="text-gray-400 text-lg">Reseñas reales verificadas a través de Google.</p>
        </div>

        <div className="border border-gray-800 p-8 md:p-12 rounded-sm flex flex-col md:flex-row gap-8 items-center justify-center bg-brand-card/90 backdrop-blur-md shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold"></div>
          
          <div className="flex flex-col items-center justify-center p-6 w-full md:w-1/3 md:border-r border-gray-800">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
              <span className="text-brand-black font-black text-2xl">G</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 text-center">Refacciones Toluca</h3>
            <div className="flex text-brand-gold mb-2 text-xl">★★★★★</div>
            <p className="text-gray-400 text-sm mb-6 font-bold">4.9 Calificación en Google</p>
            <a href="https://google.com" target="_blank" className="bg-transparent border-2 border-brand-gold text-brand-gold px-6 py-2 rounded-sm font-bold hover:bg-brand-gold hover:text-black transition-colors uppercase text-sm tracking-wider">Dejar Reseña ↗</a>
          </div>

          <div className="flex flex-col md:flex-row gap-6 w-full md:w-2/3">
            <div className="bg-brand-black p-8 rounded-sm w-full md:w-1/2 border border-gray-900 hover:border-gray-700 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold">MA</div>
                  <div>
                    <p className="text-white font-bold text-sm">Miguel A.</p>
                    <p className="text-gray-500 text-xs">Local Guide</p>
                  </div>
                </div>
                <span className="text-gray-400 text-sm">G</span>
              </div>
              <div className="flex text-brand-gold mb-3 text-sm">★★★★★</div>
              <p className="text-gray-300 text-sm italic leading-relaxed">"Solucionaron el problema de mi transmisión rápida y con piezas originales. Muy recomendados."</p>
            </div>

            <div className="bg-brand-black p-8 rounded-sm w-full md:w-1/2 border border-gray-900 hover:border-gray-700 transition-colors">
               <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-900 flex items-center justify-center text-white font-bold">RC</div>
                  <div>
                    <p className="text-white font-bold text-sm">Roberto Cruz</p>
                    <p className="text-gray-500 text-xs">hace 3 meses</p>
                  </div>
                </div>
                <span className="text-gray-400 text-sm">G</span>
              </div>
              <div className="flex text-brand-gold mb-3 text-sm">★★★★★</div>
              <p className="text-gray-300 text-sm italic leading-relaxed">"Compré una bomba de dirección y me asesoraron en todo momento. Excelente taller."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}