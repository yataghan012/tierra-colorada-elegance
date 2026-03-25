import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer id="contacto" className="py-16 px-6 border-t border-border">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div>
          <h3 className="font-serif text-2xl text-gold mb-4">Tierra Colorada Gastro</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Cocina paraguaya contemporánea de autor en el corazón de Asunción.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="text-sm tracking-widest uppercase text-foreground mb-4">Contacto</h4>
          <div className="flex items-start gap-3 text-muted-foreground text-sm">
            <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
            <span>Av. Mariscal López 3456, Barrio Villa Morra, Asunción, Paraguay</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground text-sm">
            <Phone size={16} className="text-gold shrink-0" />
            <span>+595 21 700 1234</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground text-sm">
            <Mail size={16} className="text-gold shrink-0" />
            <span>reservas@tierracolorada.com.py</span>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-sm tracking-widest uppercase text-foreground mb-4">Horarios</h4>
          <div className="space-y-2 text-muted-foreground text-sm">
            <p>Martes a Jueves: 19:00 – 23:00</p>
            <p>Viernes y Sábado: 19:00 – 00:00</p>
            <p>Domingo: 12:00 – 15:00 / 19:00 – 23:00</p>
            <p>Lunes: Cerrado</p>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="mb-12 overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5!2d-57.58!3d-25.29!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE3JzI0LjAiUyA1N8KwMzQnNDguMCJX!5e0!3m2!1ses!2spy!4v1"
          width="100%"
          height="300"
          style={{ border: 0, filter: "grayscale(0.8) brightness(0.7)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de Tierra Colorada Gastro"
        />
      </div>

      {/* Social & Copyright */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
        <p className="text-muted-foreground text-xs tracking-wider">
          © 2026 Tierra Colorada Gastro. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-6">
          {["Instagram", "Facebook", "TripAdvisor"].map((s) => (
            <a
              key={s}
              href="#"
              className="text-xs tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
