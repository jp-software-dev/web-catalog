import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import FloatingWhatsApp from './FloatingWhatsApp';
import StructuredData from './StructuredData';
import { navRoutes, routes } from '../routes';
import { business, emailLink, phoneLink, whatsappLink } from '../data/business';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `hover:text-brand-gold transition-colors ${isActive ? 'text-brand-gold' : ''}`;

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Al cambiar de página: cierra el menú móvil y regresa al inicio
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className="bg-brand-dark min-h-screen font-sans text-brand-text flex flex-col selection:bg-brand-gold selection:text-black">
      <StructuredData />
      <a href="#contenido" className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:top-2 focus:left-2 focus:bg-brand-gold focus:text-black focus:px-4 focus:py-2 focus:font-bold">
        Saltar al contenido
      </a>

      {/* TopBar Dorada */}
      <div className="bg-brand-gold text-black py-2 px-4 hidden md:flex justify-between items-center text-sm font-bold tracking-wide">
        <div className="flex gap-6 max-w-7xl mx-auto w-full px-4">
          <a href={emailLink} className="flex items-center gap-2 hover:underline">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            {business.email}
          </a>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="flex items-center gap-2 ml-auto hover:scale-105 transition-transform cursor-pointer">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.347-.272.297-1.039 1.018-1.039 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            {business.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Navbar Responsiva */}
      <nav aria-label="Principal" className="sticky top-0 w-full z-50 bg-brand-black/95 backdrop-blur-lg border-b border-gray-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 lg:py-5 flex justify-between items-center">

          <Link to={routes.home.path} className="flex items-center gap-2 cursor-pointer group" aria-label={`${business.name} - Inicio`}>
            <span className="text-white font-black text-2xl md:text-3xl tracking-tighter group-hover:scale-105 transition-transform">
              REF<span className="text-brand-gold">TOLUCA</span>
            </span>
          </Link>

          {/* Botón Hamburguesa Móvil */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="menu-movil"
            className="lg:hidden text-brand-gold hover:text-white focus:outline-none"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Menú Desktop */}
          <div className="hidden lg:flex gap-8 text-sm font-bold text-gray-300 items-center uppercase tracking-wider">
            {navRoutes.map(key => (
              <NavLink key={key} to={routes[key].path} end className={navLinkClass}>{routes[key].label}</NavLink>
            ))}
            <Link to={routes.contact.path} className="group bg-brand-gold text-black px-6 py-2.5 rounded-sm font-black hover:bg-yellow-500 transition-all flex items-center gap-2">
              UBICACIÓN
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 text-lg leading-none" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Menú Desplegable Móvil */}
        <div id="menu-movil" className={`lg:hidden absolute top-full left-0 w-full bg-brand-black/95 backdrop-blur-xl border-b border-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible h-0 overflow-hidden'}`}>
          <div className="flex flex-col px-4 py-6 gap-6 text-center font-bold text-gray-300 uppercase tracking-widest">
            {navRoutes.map(key => (
              <NavLink key={key} to={routes[key].path} end className={navLinkClass}>{routes[key].label}</NavLink>
            ))}
            <Link to={routes.contact.path} className="bg-brand-gold text-black px-6 py-4 rounded-sm font-black hover:bg-yellow-500 w-full flex justify-center items-center gap-2">
              UBICACIÓN →
            </Link>
          </div>
        </div>
      </nav>

      <main id="contenido" className="flex-grow animate-fade-in-up">
        <Outlet />
      </main>

      <footer className="bg-brand-card pt-16 mt-auto border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 pb-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <span className="text-white font-black text-4xl tracking-tighter">REF<span className="text-brand-gold">TOL</span></span>
            <p className="text-gray-400 text-sm mt-4">Especialistas en transmisiones automáticas y direcciones hidráulicas. Precisión y calidad garantizada.</p>
            <div className="pt-4">
              <p className="text-brand-gold font-bold mb-4 uppercase text-sm tracking-widest">Redes Sociales</p>

              <div className="flex gap-4">
                <a href={business.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-brand-gold transition-colors transform hover:scale-110">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href={business.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-brand-gold transition-colors transform hover:scale-110">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="text-gray-400 hover:text-brand-gold transition-colors transform hover:scale-110">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.031 0C5.395 0 0 5.395 0 12.032c0 2.122.553 4.183 1.597 6.002L.015 23.996l6.108-1.605c1.761.944 3.738 1.442 5.908 1.442 6.635 0 12.031-5.394 12.031-12.032S18.667 0 12.031 0zm5.952 17.15c-.246.694-1.428 1.328-1.996 1.413-.512.076-1.16.108-1.872-.118-.431-.137-.985-.32-1.694-.626-2.981-1.287-4.928-4.289-5.077-4.487-.148-.198-1.213-1.611-1.213-3.074 0-1.463.768-2.182 1.04-2.479.272-.273.594-.347.792-.347.199 0 .397.01.57.01.182.009.427-.069.669.51.247.595.841 2.058.916 2.207.075.149.124.323.025.521-.099.199-.149.323-.3.495-.149.174-.312.388-.446.521-.148.148-.303.31-.13.606.173.298.77 1.271 1.653 2.059 1.135 1.013 2.093 1.326 2.39 1.475.297.149.471.124.644-.074.173-.198.743-.868.941-1.165.198-.298.396-.248.669-.149.273.099 1.734.818 2.031.967.297.149.495.223.57.347.074.124.074.719-.174 1.413z"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <p className="text-brand-gold font-bold text-sm uppercase tracking-widest mb-6">Enlaces Rápidos</p>
            <ul className="space-y-3 text-gray-400 font-medium">
              <li><Link to={routes.home.path} className="hover:text-brand-gold transition-colors flex items-center gap-2"><span className="text-brand-gold text-lg leading-none" aria-hidden="true">⌂</span> Inicio</Link></li>
              <li><Link to={routes.about.path} className="hover:text-brand-gold transition-colors flex items-center gap-2"><span className="text-brand-gold text-lg leading-none" aria-hidden="true">ⓘ</span> Sobre Nosotros</Link></li>
              <li><Link to={routes.services.path} className="hover:text-brand-gold transition-colors flex items-center gap-2"><span className="text-brand-gold text-lg leading-none" aria-hidden="true">⚙</span> Servicios</Link></li>
              <li><Link to={routes.catalog.path} className="hover:text-brand-gold transition-colors flex items-center gap-2"><span className="text-brand-gold text-lg leading-none" aria-hidden="true">☰</span> Catálogo de Piezas</Link></li>
              <li><Link to={routes.reviews.path} className="hover:text-brand-gold transition-colors flex items-center gap-2"><span className="text-brand-gold text-lg leading-none" aria-hidden="true">☆</span> Reseñas</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-brand-gold font-bold text-sm uppercase tracking-widest mb-6">Contacto</p>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href={phoneLink} className="flex items-center gap-2 hover:text-brand-gold transition-colors"><svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> {business.phoneDisplay}</a></li>
              <li><a href={emailLink} className="flex items-center gap-2 hover:text-brand-gold transition-colors"><svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> {business.email}</a></li>
              <li className="flex items-center gap-2"><svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> {business.address.display}</li>
            </ul>
          </div>
        </div>
        <div className="bg-brand-gold py-4 text-center text-black font-bold text-sm">
          © {new Date().getFullYear()} {business.name}. Todos los derechos reservados.
        </div>
      </footer>
      <FloatingWhatsApp />
    </div>
  );
}
