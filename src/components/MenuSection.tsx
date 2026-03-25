import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";

const dishes = [
  {
    img: dish1,
    name: "Dulce de Guayaba Reimaginado",
    desc: "Mousse de queso Paraguay, gel de guayaba reducida, hoja de oro y flores comestibles del jardín.",
    price: "₲ 95.000",
  },
  {
    img: dish2,
    name: "Surubí del Río Paraguay",
    desc: "Filete de surubí a la plancha, salsa cítrica de pomelo, hierbas frescas y aceite de urucú.",
    price: "₲ 145.000",
  },
  {
    img: dish3,
    name: "Costilla Braseada Chaqueña",
    desc: "Costilla de res braseada 12 horas, puré de mandioca ahumada, vegetales de estación glaseados.",
    price: "₲ 165.000",
  },
];

const MenuSection = () => (
  <section id="menu" className="py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-gold text-sm tracking-[0.3em] uppercase mb-6">
          El Menú
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-foreground">
          Platos Insignia
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {dishes.map((d, i) => (
          <div key={i} className="group">
            <div className="overflow-hidden mb-6">
              <img
                src={d.img}
                alt={d.name}
                loading="lazy"
                width={640}
                height={640}
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex items-baseline justify-between mb-3">
              <h3 className="font-serif text-xl text-foreground">{d.name}</h3>
              <span className="text-gold text-sm tracking-wider ml-4 shrink-0">{d.price}</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MenuSection;
