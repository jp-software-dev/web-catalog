import type { View } from '../types';

export default function Hero({ setView }: { setView: (view: View) => void }) {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-corporate-black">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
      >
        <source src="./hero-bg.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-corporate-dark/90"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
          Refacciones Toluca
        </h1>
        <p className="text-lg md:text-2xl text-corporate-gray font-light">
          Especialistas en componentes para vehículos de alto rendimiento.
        </p>
        <div className="pt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => setView('catalog')}
            className="px-8 py-3 bg-corporate-accent text-white rounded shadow-lg hover:bg-red-600 transition-all hover:scale-105"
          >
            Ver Catálogo
          </button>
        </div>
      </div>
    </div>
  );
}