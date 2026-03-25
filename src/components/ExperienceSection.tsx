import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";
import interior3 from "@/assets/interior-3.jpg";
import interior4 from "@/assets/interior-4.jpg";

const images = [
  { src: interior1, alt: "Salón principal del restaurante", w: 800, h: 1024 },
  { src: interior2, alt: "Chef preparando un plato", w: 800, h: 600 },
  { src: interior3, alt: "Mesa elegantemente preparada", w: 800, h: 600 },
  { src: interior4, alt: "Cava de vinos", w: 800, h: 1024 },
];

const ExperienceSection = () => (
  <section id="experiencia" className="py-24 md:py-32 px-6 bg-charcoal-deep">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-gold text-sm tracking-[0.3em] uppercase mb-6">
          La Experiencia
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-foreground">
          Un Espacio para los Sentidos
        </h2>
      </div>

      <div className="columns-1 sm:columns-2 gap-4 space-y-4">
        {images.map((img, i) => (
          <div key={i} className="break-inside-avoid overflow-hidden group">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={img.w}
              height={img.h}
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
