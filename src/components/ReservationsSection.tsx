import { Calendar, Users, Clock } from "lucide-react";

const ReservationsSection = () => (
  <section id="reservas" className="py-24 md:py-32 px-6 bg-charcoal-deep">
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-gold text-sm tracking-[0.3em] uppercase mb-6">
        Reservaciones
      </p>
      <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
        Reserve su Experiencia
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-lg">
        Para garantizar una experiencia exclusiva, recomendamos realizar su reserva con anticipación. 
        También organizamos eventos privados y cenas de degustación personalizadas.
      </p>

      <div className="grid sm:grid-cols-3 gap-8 mb-14">
        {[
          { icon: Calendar, label: "Martes a Domingo" },
          { icon: Clock, label: "19:00 – 23:30 hs" },
          { icon: Users, label: "Eventos Privados" },
        ].map(({ icon: Icon, label }, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            <Icon className="text-gold" size={28} strokeWidth={1.5} />
            <span className="text-sm tracking-wider text-muted-foreground uppercase">{label}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="tel:+595217001234"
          className="border border-gold text-gold px-10 py-4 text-sm tracking-widest uppercase hover:bg-gold hover:text-primary-foreground transition-all duration-500"
        >
          Llamar Ahora
        </a>
        <a
          href="https://wa.me/595981123456"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold text-primary-foreground px-10 py-4 text-sm tracking-widest uppercase hover:opacity-90 transition-opacity duration-300"
        >
          WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default ReservationsSection;
