import bgVideo from '../assets/video/video.mp4';
import nosotrosHistoria from '../assets/images/nosotros-historia.jpg';
import nosotros1 from '../assets/images/nosotros-1.jpg';
import nosotros2 from '../assets/images/nosotros-2.jpg';
import nosotros3 from '../assets/images/nosotros-3.jpg';

export default function About() {
  return (
    <div className="w-full bg-brand-dark">
      <section className="relative min-h-[60vh] flex items-center justify-center bg-brand-black overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover opacity-30">
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-8 animate-fade-in-up">
          <h2 className="text-sm font-bold text-brand-gold uppercase tracking-[0.3em]">Sobre Nosotros</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white leading-tight drop-shadow-2xl">Expertos en <span className="text-brand-gold border-b-2 border-brand-gold">Transmisiones</span> y Direcciones.</h3>
        </div>
      </section>

      <section className="bg-brand-black/90 backdrop-blur-md py-24 px-4 border-y border-gray-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 space-y-6">
            <h4 className="text-3xl font-black text-white leading-tight">Nuestra obsesión por el <span className="text-brand-gold">detalle mecánico.</span></h4>
            <p className="text-gray-400 leading-relaxed text-lg">
              Somos un taller y refaccionaria en Toluca dedicado exclusivamente a resolver los problemas más complejos de tu vehículo. Ya sea que busques una pieza específica o requieras una reconstrucción completa de tu caja automática.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              Nuestro equipo de técnicos te brindará una solución honesta, rápida y con garantía. Trabajamos con los estándares más altos de la industria automotriz.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src={nosotrosHistoria} alt="Nuestra Historia" className="w-full h-auto rounded-sm border border-gray-800 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
        </div>
      </section>

      <section className="bg-brand-dark py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-brand-card/80 border border-gray-800 rounded-sm overflow-hidden group shadow-lg flex flex-col">
            <img src={nosotros1} alt="Experiencia" className="w-full h-56 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100" />
            <div className="p-8 flex-grow">
              <h4 className="text-xl font-black text-brand-gold uppercase mb-3">Experiencia Técnica</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Contamos con años de experiencia diagnosticando y reparando sistemas hidráulicos y transmisiones automáticas de todas las marcas.</p>
            </div>
          </div>

          <div className="bg-brand-card/80 border border-gray-800 rounded-sm overflow-hidden group shadow-lg flex flex-col">
            <img src={nosotros2} alt="Calidad" className="w-full h-56 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100" />
            <div className="p-8 flex-grow">
              <h4 className="text-xl font-black text-brand-gold uppercase mb-3">Calidad Original</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Utilizamos exclusivamente refacciones OEM y de alto rendimiento para asegurar que tu reparación sea duradera y confiable.</p>
            </div>
          </div>

          <div className="bg-brand-card/80 border border-gray-800 rounded-sm overflow-hidden group shadow-lg flex flex-col">
            <img src={nosotros3} alt="Garantía" className="w-full h-56 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100" />
            <div className="p-8 flex-grow">
              <h4 className="text-xl font-black text-brand-gold uppercase mb-3">Garantía Total</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Cada servicio y pieza que sale de nuestras instalaciones cuenta con garantía por escrito para tu total tranquilidad.</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}