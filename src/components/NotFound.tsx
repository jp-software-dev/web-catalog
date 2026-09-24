import { Link } from 'react-router-dom';
import { routes } from '../routes';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 text-center">
      <div className="space-y-6 animate-fade-in-up">
        <p className="text-brand-gold font-black text-7xl md:text-9xl tracking-tighter">404</p>
        <h1 className="text-2xl md:text-4xl font-black text-white">Esta página no existe</h1>
        <p className="text-gray-400">Puede que el enlace esté roto o que la página se haya movido.</p>
        <Link to={routes.home.path} className="group inline-flex items-center gap-2 bg-brand-gold text-black px-8 py-3 rounded-sm font-black uppercase tracking-widest hover:bg-yellow-500 transition-colors">
          Volver al inicio
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
