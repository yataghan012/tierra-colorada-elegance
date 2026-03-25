import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Inicio", href: "#hero" },
    { label: "Nuestra Historia", href: "#historia" },
    { label: "Experiencia", href: "#experiencia" },
    { label: "Menú", href: "#menu" },
    { label: "Reservas", href: "#reservas" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#hero" className="font-serif text-xl tracking-wider text-gold">
          Tierra Colorada
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
