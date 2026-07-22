export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
      >
        <source src="./assets/hero-bg.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay de contraste para legibilidad */}
      <div className="absolute z-10 inset-0 bg-corporate/80"></div>
      
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
          Excelencia Automotriz en <span className="text-corporate-accent">The Collection</span>
        </h1>
        <p className="text-lg md:text-xl text-corporate-muted mb-10 font-light">
          Descubre nuestra selección curada de vehículos de alto rendimiento. Lujo, potencia y exclusividad en cada detalle.
        </p>
        <a 
          href="https://wa.me/1234567890" 
          target="_blank" 
          rel="noreferrer"
          className="px-8 py-4 bg-corporate-accent text-corporate font-semibold uppercase tracking-wide rounded hover:bg-white transition-colors duration-300 shadow-lg"
        >
          Cotizar por WhatsApp
        </a>
      </div>
    </section>
  );
}