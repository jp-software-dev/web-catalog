import VideoBackground from './VideoBackground';
import servicio1 from '../assets/images/servicio-1.jpg';
import servicio2 from '../assets/images/servicio-2.jpg';
import servicio3 from '../assets/images/servicio-3.jpg';
import { whatsappLink } from '../data/business';

export default function Services() {
  const services = [
    { title: "Diagnóstico Computarizado", desc: "Escaneo avanzado de transmisiones para detectar fallas y códigos.", img: servicio1 },
    { title: "Reconstrucción Transmisiones", desc: "Reparación total con piezas originales para tu caja de velocidades.", img: servicio2 },
    { title: "Reparación de Direcciones", desc: "Solución a fugas, dureza y ruidos en sistemas de dirección hidráulica.", img: servicio3 }
  ];

  const steps = [
    { title: 'Diagnóstico', desc: 'Escaneo computarizado y revisión física para encontrar la causa real de la falla.' },
    { title: 'Cotización', desc: 'Te explicamos el problema y te enviamos un presupuesto claro, sin cargos ocultos.' },
    { title: 'Reparación', desc: 'Técnicos especialistas trabajan con refacciones OEM y de alto rendimiento.' },
    { title: 'Entrega con Garantía', desc: 'Prueba de manejo final y garantía por escrito en cada servicio.' },
  ];

  return (
    <section className="relative py-24 px-4 min-h-screen">
      <VideoBackground opacity="opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-dark/90 to-brand-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto space-y-16 animate-fade-in-up">
        <div className="text-center max-w-3xl mx-auto border-b border-gray-800 pb-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-xl">Paquetes <span className="text-brand-gold">Premium</span> de Taller</h1>
          <p className="text-gray-400 text-lg">Servicio especializado por expertos en hidráulica y tren motriz.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((srv) => (
            <div key={srv.title} className="bg-brand-card/90 backdrop-blur-sm rounded-sm border border-gray-800 overflow-hidden hover:border-brand-gold transition-colors shadow-2xl flex flex-col group">
              <div className="h-64 overflow-hidden relative">
                <img src={srv.img} alt={srv.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100" />
              </div>
              <div className="p-8 space-y-4 flex flex-col flex-grow">
                <h2 className="text-2xl font-black text-brand-gold uppercase">{srv.title}</h2>
                <p className="text-gray-300 font-medium flex-grow">{srv.desc}</p>
                <a href={whatsappLink(`Hola, quisiera solicitar cotización sobre ${srv.title}`)} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 mt-auto text-white font-bold uppercase tracking-widest text-sm hover:text-brand-gold pt-4 transition-colors">
                  Solicitar Cotización 
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 text-lg leading-none" aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Cómo trabajamos */}
        <div className="pt-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-brand-gold uppercase tracking-[0.3em] mb-4">Proceso</p>
            <h2 className="text-3xl md:text-5xl font-black text-white">Cómo <span className="text-brand-gold">Trabajamos</span></h2>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <li key={step.title} className="relative bg-brand-card/90 backdrop-blur-sm border border-gray-800 hover:border-brand-gold transition-colors rounded-sm p-8 text-center shadow-xl group">
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-brand-gold text-black font-black text-2xl flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)] group-hover:scale-110 transition-transform" aria-hidden="true">
                  {i + 1}
                </div>
                <h3 className="text-lg font-black text-white uppercase tracking-wide mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}