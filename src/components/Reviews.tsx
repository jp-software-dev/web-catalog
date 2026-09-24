import VideoBackground from './VideoBackground';
import { business } from '../data/business';

export default function Reviews() {
  return (
    <section className="relative py-24 px-4 min-h-screen flex items-center">
      <VideoBackground opacity="opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-dark/80 to-brand-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full animate-fade-in-up">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Lo que nuestros clientes <span className="text-brand-gold">dicen</span></h1>
          <p className="text-gray-400 text-lg">Reseñas reales verificadas a través de Google.</p>
        </div>

        <div className="border border-gray-800 p-8 md:p-12 rounded-sm flex flex-col md:flex-row gap-8 items-center justify-center bg-brand-card/90 backdrop-blur-md shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold"></div>
          
          <div className="flex flex-col items-center justify-center p-6 w-full md:w-1/3 md:border-r border-gray-800">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
              <span className="text-brand-black font-black text-2xl">G</span>
            </div>
            <h2 className="text-xl font-bold text-white mb-2 text-center">{business.name}</h2>
            <div className="flex text-brand-gold mb-2 text-xl" role="img" aria-label="5 de 5 estrellas">★★★★★</div>
            <p className="text-gray-400 text-sm mb-6 font-bold">4.9 Calificación en Google</p>
            <a href={business.googleReviewsUrl} target="_blank" rel="noreferrer" className="group bg-transparent border-2 border-brand-gold text-brand-gold px-6 py-2 rounded-sm font-bold hover:bg-brand-gold hover:text-black transition-colors uppercase text-sm tracking-wider flex items-center gap-2">
              Dejar Reseña <span className="inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </a>
          </div>

          <div className="flex flex-col md:flex-row gap-6 w-full md:w-2/3">
            <div className="bg-brand-black p-8 rounded-sm w-full md:w-1/2 border border-gray-900 hover:border-brand-gold transition-colors shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold">MA</div>
                  <div>
                    <p className="text-white font-bold text-sm">Miguel A.</p>
                    <p className="text-gray-500 text-xs">Local Guide</p>
                  </div>
                </div>
                <span className="text-brand-gold font-bold text-sm">G</span>
              </div>
              <div className="flex text-brand-gold mb-3 text-sm" role="img" aria-label="5 de 5 estrellas">★★★★★</div>
              <p className="text-gray-300 text-sm italic leading-relaxed">"Solucionaron el problema de mi transmisión rápida y con piezas originales. Muy recomendados."</p>
            </div>

            <div className="bg-brand-black p-8 rounded-sm w-full md:w-1/2 border border-gray-900 hover:border-brand-gold transition-colors shadow-lg">
               <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-900 flex items-center justify-center text-white font-bold">RC</div>
                  <div>
                    <p className="text-white font-bold text-sm">Roberto Cruz</p>
                    <p className="text-gray-500 text-xs">hace 3 meses</p>
                  </div>
                </div>
                <span className="text-brand-gold font-bold text-sm">G</span>
              </div>
              <div className="flex text-brand-gold mb-3 text-sm" role="img" aria-label="5 de 5 estrellas">★★★★★</div>
              <p className="text-gray-300 text-sm italic leading-relaxed">"Compré una bomba de dirección y me asesoraron en todo momento. Excelente taller."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}