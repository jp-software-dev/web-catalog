import { faqs } from '../data/faq';
import { whatsappLink } from '../data/business';

export default function Faq() {
  return (
    <section className="bg-brand-black py-24 px-4 border-b border-gray-900" aria-labelledby="faq-titulo">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <p className="text-sm font-bold text-brand-gold uppercase tracking-[0.3em]">Resolvemos tus dudas</p>
          <h2 id="faq-titulo" className="text-4xl md:text-5xl font-black text-white">Preguntas <span className="text-brand-gold">Frecuentes</span></h2>
        </div>

        <div className="space-y-4">
          {faqs.map(({ question, answer }) => (
            <details key={question} className="group bg-brand-card/80 border border-gray-800 rounded-sm open:border-brand-gold transition-colors">
              <summary className="flex justify-between items-center gap-4 cursor-pointer list-none p-6 text-white font-bold hover:text-brand-gold transition-colors [&::-webkit-details-marker]:hidden">
                {question}
                <span className="text-brand-gold text-2xl leading-none transition-transform duration-300 group-open:rotate-45 shrink-0" aria-hidden="true">+</span>
              </summary>
              <p className="px-6 pb-6 text-gray-400 leading-relaxed">{answer}</p>
            </details>
          ))}
        </div>

        <p className="text-center text-gray-400 mt-10">
          ¿Tienes otra pregunta?{' '}
          <a href={whatsappLink('Hola, tengo una pregunta')} target="_blank" rel="noreferrer" className="text-brand-gold font-bold hover:text-white transition-colors">
            Escríbenos por WhatsApp →
          </a>
        </p>
      </div>
    </section>
  );
}
