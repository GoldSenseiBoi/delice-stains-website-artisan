import { Separator } from "@/components/ui/separator";
import { IconBaguette, IconBread, IconCake, IconCookie } from "@tabler/icons-react";

const Produits = () => {
  return (
    <div className="flex flex-col bg-bakery-beige-light">
      {/* Header Banner */}
      <section className="relative py-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="images/produit.jpg"
            alt="Boulangerie artisanale"
            className="w-full h-full object-cover opacity-90 animate-zoom-in"
          />
        </div>
        <div className="absolute inset-0 bg-black/60 z-[1]"></div>
        <div className="container relative z-10 text-center">
          <h1 className="font-sans text-5xl tracking-widest mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>NOS PRODUITS</h1>
          
          <div className="h-px w-24 mx-auto bg-white/30 mb-8 origin-left opacity-0 animate-reveal" style={{ animationDelay: '0.8s' }}></div>
          
          <p className="max-w-2xl mx-auto text-lg tracking-wide opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
            Des créations artisanales préparées avec passion et savoir-faire
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-foreground/80 leading-relaxed">
              Découvrez notre sélection de pains, viennoiseries et pâtisseries fabriqués chaque jour dans notre boulangerie.
              Tous nos produits sont préparés à la main, avec des ingrédients soigneusement sélectionnés.
            </p>
          </div>
        </div>
      </section>

      <Separator className="divider-thin max-w-xl" />

      {/* Pains */}
      <ProductCategory 
        title="NOS PAINS"
        icon={<IconBaguette className="h-8 w-8" />}
        bgColor="bg-transparent"
        products={[
          {
            name: "BAGUETTE TRADITION",
            description: "Préparée selon une recette traditionnelle, avec une mie alvéolée et une croûte croustillante.",
            highlight: true,
            imageSrc: "https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?q=80&w=1470&auto=format&fit=crop"
          },
          {
            name: "PAIN AU LEVAIN",
            description: "Fabriqué avec notre levain naturel, ce pain offre des saveurs complexes et une excellente conservation.",
            highlight: true,
            imageSrc: "https://images.unsplash.com/photo-1586444248890-2be5022b458b?q=80&w=1470&auto=format&fit=crop"
          },
          {
            name: "PAIN COMPLET",
            description: "Riche en fibres et nutriments, ce pain à la farine complète est idéal pour un petit-déjeuner équilibré.",
            highlight: true,
            imageSrc: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1472&auto=format&fit=crop"
          },
          {
            name: "PAIN AUX CÉRÉALES",
            description: "Agrémenté d'un mélange de graines (tournesol, lin, sésame), pour un pain savoureux et croquant.",
            highlight: true,
            imageSrc: "https://images.unsplash.com/photo-1565181917578-a87fac756f49?q=80&w=1470&auto=format&fit=crop"
          },
          {
            name: "PAIN DE CAMPAGNE",
            description: "Un grand classique à la mie dense et au goût prononcé, parfait pour accompagner vos repas.",
            highlight: false,
            imageSrc: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?q=80&w=1374&auto=format&fit=crop"
          },
          {
            name: "PAIN DE SEIGLE",
            description: "Sa saveur caractéristique et sa texture dense en font le compagnon idéal des fromages et charcuteries.",
            highlight: false,
            imageSrc: "https://images.unsplash.com/photo-1603163694235-937df0e28c08?q=80&w=1470&auto=format&fit=crop"
          }
        ]}
      />

      <Separator className="divider max-w-xl" />

      {/* Viennoiseries */}
      <ProductCategory 
        title="NOS VIENNOISERIES"
        icon={<IconBread className="h-8 w-8" />}
        bgColor="bg-bakery-dark-brown/0"
        products={[
          {
            name: "CROISSANT AU BEURRE",
            description: "Feuilleté, doré et croustillant, préparé avec un beurre fin de qualité supérieure.",
            highlight: true,
            imageSrc: "https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=1470&auto=format&fit=crop"
          },
          {
            name: "PAIN AU CHOCOLAT",
            description: "Une viennoiserie généreuse garnie de deux barres de chocolat noir intense.",
            highlight: true,
            imageSrc: "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?q=80&w=1632&auto=format&fit=crop"
          },
          {
            name: "PAIN AUX RAISINS",
            description: "Une spirale de pâte feuilletée garnie de crème pâtissière et de raisins secs moelleux.",
            highlight: true,
            imageSrc: "https://images.unsplash.com/photo-1601312540037-095ace5cd4b3?q=80&w=1470&auto=format&fit=crop"
          },
          {
            name: "PAIN SUISSE",
            description: "Délicieuse viennoiserie à la crème pâtissière et aux pépites de chocolat.",
            highlight: true,
            imageSrc: "https://plus.unsplash.com/premium_photo-1663853120700-20fe66e0438e?q=80&w=1470&auto=format&fit=crop"
          },
          {
            name: "CHAUSSON AUX POMMES",
            description: "Une pâte feuilletée dorée enveloppant une compote de pommes à la cannelle.",
            highlight: false,
            imageSrc: "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?q=80&w=1374&auto=format&fit=crop"
          },
          {
            name: "BRIOCHE",
            description: "Moelleuse et légère, parfaite pour le petit-déjeuner ou le goûter.",
            highlight: false,
            imageSrc: "https://images.unsplash.com/photo-1620921568790-c1cf8984624c?q=80&w=1374&auto=format&fit=crop"
          }
        ]}
      />

      <Separator className="divider max-w-xl" />

      {/* Pâtisseries */}
      <ProductCategory 
        title="NOS PÂTISSERIES"
        icon={<IconCake className="h-8 w-8" />}
        bgColor="bg-transparent"
        products={[
          {
            name: "FLAN PÂTISSIER",
            description: "Notre spécialité : un flan crémeux à la vanille et aux œufs frais, avec une texture incomparable.",
            highlight: true,
            imageSrc: "https://images.unsplash.com/photo-1621236378699-8597faf6a11a?q=80&w=1374&auto=format&fit=crop"
          },
          {
            name: "ÉCLAIR AU CHOCOLAT",
            description: "Pâte à choux garnie d'une crème pâtissière au chocolat et recouverte d'un glaçage chocolat.",
            highlight: false,
            imageSrc: "https://images.unsplash.com/photo-1526590654793-d0104c4b8ad0?q=80&w=1374&auto=format&fit=crop"
          },
          {
            name: "TARTE AUX FRUITS",
            description: "Pâte sablée garnie d'une crème d'amande et de fruits frais de saison.",
            highlight: false,
            imageSrc: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?q=80&w=1470&auto=format&fit=crop"
          },
          {
            name: "MILLEFEUILLE",
            description: "Alternance de pâte feuilletée croustillante et de crème pâtissière à la vanille.",
            highlight: false,
            imageSrc: "https://images.unsplash.com/photo-1602351447937-745cb720612f?q=80&w=1586&auto=format&fit=crop"
          }
        ]}
      />

      <Separator className="divider max-w-xl" />

      {/* Autres */}
      <ProductCategory 
        title="NOS SNACKS ET SPÉCIALITÉS"
        icon={<IconCookie className="h-8 w-8" />}
        bgColor="bg-bakery-dark-brown/0"
        products={[
          {
            name: "QUICHE LORRAINE",
            description: "Pâte brisée garnie de lardons, d'œufs et de crème, parfaite pour un déjeuner sur le pouce.",
            highlight: false,
            imageSrc: "https://images.unsplash.com/photo-1629536037504-904c7e6eade4?q=80&w=1470&auto=format&fit=crop"
          },
          {
            name: "SANDWICH BAGUETTE",
            description: "Préparé à la minute avec notre baguette tradition et des ingrédients frais.",
            highlight: false,
            imageSrc: "https://images.unsplash.com/photo-1553909489-cd47e0907980?q=80&w=1025&auto=format&fit=crop"
          },
          {
            name: "COOKIES",
            description: "Moelleux à cœur et croquants sur les bords, aux pépites de chocolat ou aux noix.",
            highlight: false,
            imageSrc: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1470&auto=format&fit=crop"
          },
          {
            name: "MADELEINES",
            description: "De délicates petites douceurs à la texture aérée et au goût subtil de citron.",
            highlight: false,
            imageSrc: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=1374&auto=format&fit=crop"
          }
        ]}
      />

      <Separator className="divider max-w-xl" />

      {/* Note */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <h2 className="font-sans text-3xl tracking-widest mb-8 opacity-0 animate-fade-in">PRODUCTION QUOTIDIENNE</h2>
          
          <div className="h-px w-16 mx-auto bg-primary/70 mb-10 origin-left opacity-0 animate-reveal" style={{ animationDelay: '0.3s' }}></div>
          
          <p className="max-w-2xl mx-auto text-foreground/80 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Tous nos produits sont fabriqués chaque jour dans notre boulangerie. 
            Pour garantir leur fraîcheur optimale, nous vous conseillons de passer commande 
            pour les grandes quantités ou les occasions spéciales.
          </p>
        </div>
      </section>
    </div>
  );
};

interface Product {
  name: string;
  description: string;
  highlight: boolean;
  imageSrc: string;
}

interface ProductCategoryProps {
  title: string;
  icon: React.ReactNode;
  bgColor: string;
  products: Product[];
}

const ProductCategory = ({ title, icon, bgColor, products }: ProductCategoryProps) => {
  return (
    <section className={`section-padding ${bgColor}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-3 mb-16 opacity-0 animate-fade-in">
          <div className="text-primary/80">{icon}</div>
          <h2 className="font-sans text-3xl tracking-widest">{title}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={index}
              name={product.name}
              description={product.description}
              highlight={product.highlight}
              imageSrc={product.imageSrc}
              delay={0.2 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ name, description, highlight, imageSrc, delay }: Product & { delay: number }) => {
  return (
    <div className="border border-border/30 overflow-hidden group opacity-0 animate-fade-in" style={{ animationDelay: `${delay}s` }}>
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-colors duration-500"></div>
        <img src={imageSrc} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        {highlight && (
          <span className="absolute bottom-3 left-3 bg-primary/80 text-bakery-dark text-xs tracking-wide px-3 py-1 z-20">
            PRODUIT PHARE
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-sans text-lg tracking-wide mb-4">{name}</h3>
        <p className="font-sans text-foreground/70 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Produits;
