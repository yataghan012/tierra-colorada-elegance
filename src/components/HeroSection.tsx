import heroImg from "@/assets/hero-dish.jpg";

const HeroSection = () => (
  <section id="hero" className="relative h-screen w-full overflow-hidden">
    <img
      src={heroImg}
      alt="Plato insignia de Tierra Colorada Gastro"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
      <p className="text-gold text-sm tracking-[0.4em] uppercase mb-4 animate-fade-in">
        Asunción, Paraguay
      </p>
      <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl leading-tight max-w-4xl animate-fade-in-up text-foreground">
        El Alma del Paraguay en un Plato
      </h1>
      <p className="mt-6 text-muted-foreground max-w-xl text-lg animate-fade-in" style={{ animationDelay: "0.3s" }}>
        Cocina paraguaya contemporánea de autor
      </p>
      <a
        href="#reservas"
        className="mt-10 inline-block border border-gold text-gold px-10 py-4 text-sm tracking-widest uppercase hover:bg-gold hover:text-primary-foreground transition-all duration-500 animate-fade-in-up"
        style={{ animationDelay: "0.5s" }}
      >
        Reservar Mesa
      </a>
    </div>
  </section>
);

export default HeroSection;
