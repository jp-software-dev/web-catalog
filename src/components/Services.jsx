import servicio1 from '../assets/images/servicio-1.jpg';
import servicio2 from '../assets/images/servicio-2.jpg';
import servicio3 from '../assets/images/servicio-3.jpg';

export default function Services() {
  const services = [
    { title: "Diagnóstico Computarizado", desc: "Escaneo avanzado de transmisiones para detectar fallas y códigos.", img: servicio1 },
    { title: "Reconstrucción Transmisiones", desc: "Reparación total con piezas originales para tu caja de velocidades.", img: servicio2 },
    { title: "Reparación de Direcciones", desc: "Solución a fugas, dureza y ruidos en sistemas de dirección hidráulica.", img: servicio3 }
  ];

  return (
    <section className="bg-transparent py-24 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-16 animate-fade-in-up">
        <div className="text-center max-w-3xl mx-auto border-b border-gray-800 pb-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-xl">Paquetes <span className="text-brand-gold">Premium</span> de Taller</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <div key={idx} className="bg-brand-card/90 backdrop-blur-sm rounded-sm border border-gray-800 overflow-hidden hover:border-brand-gold transition-colors shadow-lg flex flex-col group">
              <div className="h-56 overflow-hidden relative">
                <img src={srv.img} alt={srv.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" />
              </div>
              <div className="p-8 space-y-4 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-brand-gold uppercase">{srv.title}</h3>
                <p className="text-gray-300 font-medium flex-grow">{srv.desc}</p>
                <a href={`https://wa.me/527221234567?text=Hola,%20quisiera%20solicitar%20cotización%20sobre%20${srv.title}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-auto text-white font-bold uppercase tracking-widest text-sm hover:text-brand-gold pt-4 transition-colors">
                  Solicitar Cotización 
                  <span className="inline-block transition-transform duration-300 group-hover:-rotate-45 text-lg leading-none">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}