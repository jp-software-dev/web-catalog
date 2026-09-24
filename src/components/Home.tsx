import VideoBackground from './VideoBackground';
import Faq from './Faq';
import { Link } from 'react-router-dom';
import homePasion from '../assets/images/home-pasion.jpg';
import { routes } from '../routes';
import { business } from '../data/business';

export default function Home() {
  return (
    <div className="w-full bg-brand-dark">
      
      <div className="relative h-[85vh] w-full flex items-center justify-start overflow-hidden bg-brand-black">
        <VideoBackground opacity="opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-dark/70 to-transparent"></div>
        <div className="relative z-10 px-4 lg:px-16 max-w-7xl w-full animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-tight max-w-3xl drop-shadow-2xl">
            Precisión <span className="text-brand-gold">Mecánica</span><br/> para tu Vehículo.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-medium mt-6 max-w-2xl border-l-4 border-brand-gold pl-4 drop-shadow-lg">
            Especialistas en Taller y Refacciones de Transmisiones Automáticas y Direcciones Hidráulicas.
          </p>
          <Link to={routes.catalog.path} className="group mt-10 px-10 py-4 bg-brand-gold text-black font-black uppercase tracking-widest rounded-sm hover:bg-yellow-500 hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center gap-2 w-max">
            Catálogo Online 
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 text-xl leading-none" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className="bg-brand-card/90 border-y border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-10 md:gap-20 items-center opacity-70 grayscale">
          <span className="text-2xl font-black tracking-widest text-white uppercase">Ford</span>
          <span className="text-2xl font-bold tracking-widest text-white uppercase">Nissan</span>
          <span className="text-2xl font-serif italic text-white uppercase">Chevrolet</span>
          <span className="text-2xl font-black text-white uppercase">Volkswagen</span>
          <span className="text-2xl font-bold tracking-tighter text-white uppercase">Honda</span>
        </div>
      </div>

      <div className="bg-brand-dark py-24 px-4 border-b border-gray-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative group">
            <img src={homePasion} alt="Mecánico trabajando en el taller" loading="lazy" decoding="async" className="relative z-10 w-full h-auto object-cover rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl border border-gray-800" />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight drop-shadow-lg">Impulsados por la pasión por la <span className="text-brand-gold">mecánica automotriz</span>.</h2>
            <p className="text-gray-300 text-lg leading-relaxed drop-shadow-md">
              En {business.name} nos especializamos en ofrecer atención técnica excepcional a clientes que exigen perfección en el tren motriz de su vehículo.
              <br/><br/>
              Desde diagnósticos de transmisiones automáticas hasta la reconstrucción de direcciones hidráulicas, cada servicio y pieza está diseñada para restaurar el valor y funcionamiento de tu auto.
            </p>
            <Link to={routes.contact.path} className="group bg-brand-gold text-black px-6 py-3 rounded-sm font-bold uppercase tracking-widest hover:bg-yellow-500 transition-colors flex items-center gap-2 w-max">
              UBICACIÓN 
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 text-lg leading-none" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      <Faq />
    </div>
  );
}
