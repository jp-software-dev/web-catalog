import bgVideo from '../assets/video/video.mp4';

export default function Contact() {
  return (
    <section className="relative py-24 px-4 min-h-screen flex items-center border-t border-gray-900">
      <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover opacity-20">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-dark/90 to-brand-black"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-12 w-full animate-fade-in-up text-center">
        <div className="space-y-4">
             <span className="text-brand-gold font-bold text-sm uppercase tracking-widest block">Ubicación del Taller</span>
             <h3 className="text-4xl md:text-5xl font-black text-white">Visítanos en Toluca</h3>
             <p className="text-gray-400 text-lg max-w-2xl mx-auto">Te esperamos en nuestras instalaciones para brindarte la mejor atención y diagnóstico para tu vehículo.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-8">
           <div className="w-full md:w-1/3 flex flex-col gap-6">
              <div className="bg-brand-card/90 backdrop-blur-sm p-8 rounded-sm border border-gray-800 flex flex-col items-center justify-center text-center h-full shadow-xl">
                 <div className="w-12 h-12 bg-brand-gold text-black rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                 </div>
                 <h4 className="text-white font-bold text-lg mb-2">Horarios</h4>
                 <p className="text-gray-400">Lunes a Viernes<br/>9:00am - 6:00pm</p>
                 <p className="text-gray-400 mt-2">Sábados<br/>9:00am - 2:00pm</p>
              </div>

              <div className="bg-brand-card/90 backdrop-blur-sm p-8 rounded-sm border border-gray-800 flex flex-col items-center justify-center text-center h-full group shadow-xl">
                 <div className="w-12 h-12 bg-brand-gold text-black rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                 </div>
                 <h4 className="text-white font-bold text-lg mb-2">Llámanos</h4>
                 <p className="text-gray-400">(722) 123 4567</p>
                 <a href="https://wa.me/527221234567" target="_blank" rel="noreferrer" className="text-brand-gold font-bold text-sm uppercase tracking-widest mt-4 hover:text-white transition-colors flex items-center gap-1">
                   WhatsApp <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                 </a>
              </div>
           </div>

          <div className="w-full md:w-2/3 h-[500px] bg-brand-card rounded-sm border border-brand-gold/30 overflow-hidden shadow-[0_0_20px_rgba(212,175,55,0.1)] grayscale hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120638.06452261971!2d-99.73456385!3d19.29838035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd89892a50ebb9%3A0xad3f4ad5550208c4!2sToluca%2C%20State%20of%20Mexico!5e0!3m2!1sen!2smx!4v1690000000000!5m2!1sen!2smx" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}