import { useState } from 'react';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Services from './components/Services';
import Contact from './components/Contact';
import Reviews from './components/Reviews';
import About from './components/About';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import bgVideo from './assets/video/video.mp4';

function App() {
  const [view, setView] = useState('home');

  const handleNav = (newView) => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen font-sans text-brand-text flex flex-col selection:bg-brand-gold selection:text-black">
      
      {/* VIDEO GLOBAL DE FONDO MÁS VISIBLE */}
      <div className="fixed inset-0 z-[-1] bg-black">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-50">
          <source src={bgVideo} type="video/mp4" />
        </video>
        {/* Degradado aclarado para que el video resalte mucho más */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/50 via-brand-dark/30 to-brand-black/90"></div>
      </div>

      {/* TopBar Dorada */}
      <div className="bg-brand-gold text-black py-2 px-4 hidden md:flex justify-between items-center text-sm font-bold tracking-wide">
        <div className="flex gap-6 max-w-7xl mx-auto w-full px-4">
          <span className="flex items-center gap-2">✉ servicio@refaccionestoluca.com</span>
          <a href="https://wa.me/527221234567" target="_blank" rel="noreferrer" className="flex items-center gap-2 ml-auto hover:scale-105 transition-transform cursor-pointer">
            ✆ (722) 123 4567
          </a>
        </div>
      </div>

      {/* Navbar Negro/Dorado */}
      <nav className="sticky top-0 w-full z-40 bg-brand-black/90 backdrop-blur-lg border-b border-gray-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-5 flex justify-between items-center">
          <div onClick={() => handleNav('home')} className="flex items-center gap-2 cursor-pointer group">
            <span className="text-white font-black text-2xl md:text-3xl tracking-tighter group-hover:scale-105 transition-transform">
              REF<span className="text-brand-gold">TOLUCA</span>
            </span>
          </div>
          
          <div className="hidden lg:flex gap-8 text-sm font-bold text-gray-300 items-center uppercase tracking-wider">
            <button onClick={() => handleNav('home')} className="hover:text-brand-gold transition-colors">Inicio</button>
            <button onClick={() => handleNav('about')} className="hover:text-brand-gold transition-colors">Nosotros</button>
            <button onClick={() => handleNav('services')} className="hover:text-brand-gold transition-colors">Servicios</button>
            <button onClick={() => handleNav('catalog')} className="hover:text-brand-gold transition-colors">Catálogo</button>
            <button onClick={() => handleNav('reviews')} className="hover:text-brand-gold transition-colors">Reseñas</button>
            <button onClick={() => handleNav('contact')} className="group bg-brand-gold text-black px-6 py-2.5 rounded-sm font-black hover:bg-yellow-500 transition-all flex items-center gap-2">
              UBICACIÓN 
              <span className="inline-block transition-transform duration-300 group-hover:-rotate-45 text-lg leading-none">→</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-grow animate-fade-in-up">
        {view === 'home' && <Home setView={handleNav} />}
        {view === 'catalog' && <Catalog />}
        {view === 'services' && <Services />}
        {view === 'contact' && <Contact />}
        {view === 'reviews' && <Reviews />}
        {view === 'about' && <About />}
      </main>

      {/* Footer */}
      <footer className="bg-brand-black/80 backdrop-blur-md pt-16 mt-auto border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 pb-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
             <span className="text-white font-black text-4xl tracking-tighter">REF<span className="text-brand-gold">TOL</span></span>
            <p className="text-gray-400 text-sm mt-4">Especialistas en transmisiones automáticas y direcciones hidráulicas. Precisión y calidad garantizada.</p>
            <div className="pt-4">
              <p className="text-brand-gold font-bold mb-4 uppercase text-sm tracking-widest">Redes Sociales</p>
              
              {/* Iconos de Redes Sociales (Facebook, Instagram, WhatsApp) */}
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors transform hover:scale-110">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors transform hover:scale-110">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://wa.me/527221234567" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors transform hover:scale-110">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <p className="text-brand-gold font-bold text-sm uppercase tracking-widest mb-6">Enlaces Rápidos</p>
            <ul className="space-y-3 text-gray-400 font-medium">
              <li onClick={() => handleNav('home')} className="hover:text-brand-gold cursor-pointer transition-colors flex items-center gap-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg> Inicio</li>
              <li onClick={() => handleNav('about')} className="hover:text-brand-gold cursor-pointer transition-colors flex items-center gap-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Sobre Nosotros</li>
              <li onClick={() => handleNav('services')} className="hover:text-brand-gold cursor-pointer transition-colors flex items-center gap-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path></svg> Servicios</li>
              <li onClick={() => handleNav('catalog')} className="hover:text-brand-gold cursor-pointer transition-colors flex items-center gap-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg> Catálogo de Piezas</li>
              <li onClick={() => handleNav('reviews')} className="hover:text-brand-gold cursor-pointer transition-colors flex items-center gap-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg> Reseñas</li>
            </ul>
          </div>
          <div>
            <p className="text-brand-gold font-bold text-sm uppercase tracking-widest mb-6">Contacto</p>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li className="flex items-center gap-2"><svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> (722) 123 4567</li>
              <li className="flex items-center gap-2"><svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> servicio@refaccionestoluca.com</li>
              <li className="flex items-center gap-2"><svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> Toluca y Zona Metropolitana</li>
            </ul>
          </div>
        </div>
        <div className="bg-brand-gold py-4 text-center text-black font-bold text-sm">
          © 2026 Refacciones Toluca. Todos los derechos reservados.
        </div>
      </footer>
      <FloatingWhatsApp />
    </div>
  );
}

export default App;