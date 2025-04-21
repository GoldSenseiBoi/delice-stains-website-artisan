
import { IconBaguette, IconCake, IconCookie, IconBread } from "@tabler/icons-react";

const Produits = () => {
  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="relative py-20 bg-bakery-brown-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-script text-5xl mb-4">Nos Produits</h1>
          <p className="max-w-2xl mx-auto">
            Des créations artisanales préparées avec passion et savoir-faire
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-bakery-brown mb-6">
              Découvrez notre sélection de pains, viennoiseries et pâtisseries fabriqués chaque jour dans notre boulangerie.
              Tous nos produits sont préparés à la main, avec des ingrédients soigneusement sélectionnés.
            </p>
          </div>
        </div>
      </section>

      {/* Pains */}
      <ProductCategory 
        title="Nos Pains"
        icon={<IconBaguette className="h-8 w-8" />}
        bgColor="bg-bakery-beige-light"
        products={[
          {
            name: "Baguette Tradition",
            description: "Préparée selon une recette traditionnelle, avec une mie alvéolée et une croûte croustillante.",
            highlight: true,
            imageSrc: "https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?q=80&w=1470&auto=format&fit=crop"
          },
          {
            name: "Pain au Levain",
            description: "Fabriqué avec notre levain naturel, ce pain offre des saveurs complexes et une excellente conservation.",
            highlight: true,
            imageSrc: "https://images.unsplash.com/photo-1586444248890-2be5022b458b?q=80&w=1470&auto=format&fit=crop"
          },
          {
            name: "Pain Complet",
            description: "Riche en fibres et nutriments, ce pain à la farine complète est idéal pour un petit-déjeuner équilibré.",
            highlight: true,
            imageSrc: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1472&auto=format&fit=crop"
          },
          {
            name: "Pain aux Céréales",
            description: "Agrémenté d'un mélange de graines (tournesol, lin, sésame), pour un pain savoureux et croquant.",
            highlight: true,
            imageSrc: "https://images.unsplash.com/photo-1565181917578-a87fac756f49?q=80&w=1470&auto=format&fit=crop"
          },
          {
            name: "Pain de Campagne",
            description: "Un grand classique à la mie dense et au goût prononcé, parfait pour accompagner vos repas.",
            highlight: false,
            imageSrc: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?q=80&w=1374&auto=format&fit=crop"
          },
          {
            name: "Pain de Seigle",
            description: "Sa saveur caractéristique et sa texture dense en font le compagnon idéal des fromages et charcuteries.",
            highlight: false,
            imageSrc: "https://images.unsplash.com/photo-1603163694235-937df0e28c08?q=80&w=1470&auto=format&fit=crop"
          }
        ]}
      />

      {/* Viennoiseries */}
      <ProductCategory 
        title="Nos Viennoiseries"
        icon={<IconBread className="h-8 w-8" />}
        bgColor="bg-white"
        products={[
          {
            name: "Croissant au Beurre",
            description: "Feuilleté, doré et croustillant, préparé avec un beurre fin de qualité supérieure.",
            highlight: true,
            imageSrc: "https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=1470&auto=format&fit=crop"
          },
          {
            name: "Pain au Chocolat",
            description: "Une viennoiserie généreuse garnie de deux barres de chocolat noir intense.",
            highlight: true,
            imageSrc: "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?q=80&w=1632&auto=format&fit=crop"
          },
          {
            name: "Pain aux Raisins",
            description: "Une spirale de pâte feuilletée garnie de crème pâtissière et de raisins secs moelleux.",
            highlight: true,
            imageSrc: "https://images.unsplash.com/photo-1601312540037-095ace5cd4b3?q=80&w=1470&auto=format&fit=crop"
          },
          {
            name: "Pain Suisse",
            description: "Délicieuse viennoiserie à la crème pâtissière et aux pépites de chocolat.",
            highlight: true,
            imageSrc: "https://plus.unsplash.com/premium_photo-1663853120700-20fe66e0438e?q=80&w=1470&auto=format&fit=crop"
          },
          {
            name: "Chausson aux Pommes",
            description: "Une pâte feuilletée dorée enveloppant une compote de pommes à la cannelle.",
            highlight: false,
            imageSrc: "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?q=80&w=1374&auto=format&fit=crop"
          },
          {
            name: "Brioche",
            description: "Moelleuse et légère, parfaite pour le petit-déjeuner ou le goûter.",
            highlight: false,
            imageSrc: "https://images.unsplash.com/photo-1620921568790-c1cf8984624c?q=80&w=1374&auto=format&fit=crop"
          }
        ]}
      />

      {/* Pâtisseries */}
      <ProductCategory 
        title="Nos Pâtisseries"
        icon={<IconCake className="h-8 w-8" />}
        bgColor="bg-bakery-beige-light"
        products={[
          {
            name: "Flan Pâtissier",
            description: "Notre spécialité : un flan crémeux à la vanille et aux œufs frais, avec une texture incomparable.",
            highlight: true,
            imageSrc: "https://images.unsplash.com/photo-1621236378699-8597faf6a11a?q=80&w=1374&auto=format&fit=crop"
          },
          {
            name: "Éclair au Chocolat",
            description: "Pâte à choux garnie d'une crème pâtissière au chocolat et recouverte d'un glaçage chocolat.",
            highlight: false,
            imageSrc: "https://images.unsplash.com/photo-1526590654793-d0104c4b8ad0?q=80&w=1374&auto=format&fit=crop"
          },
          {
            name: "Tarte aux Fruits",
            description: "Pâte sablée garnie d'une crème d'amande et de fruits frais de saison.",
            highlight: false,
            imageSrc: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?q=80&w=1470&auto=format&fit=crop"
          },
          {
            name: "Millefeuille",
            description: "Alternance de pâte feuilletée croustillante et de crème pâtissière à la vanille.",
            highlight: false,
            imageSrc: "https://images.unsplash.com/photo-1602351447937-745cb720612f?q=80&w=1586&auto=format&fit=crop"
          }
        ]}
      />

      {/* Autres */}
      <ProductCategory 
        title="Nos Snacks et Spécialités"
        icon={<IconCookie className="h-8 w-8" />}
        bgColor="bg-white"
        products={[
          {
            name: "Quiche Lorraine",
            description: "Pâte brisée garnie de lardons, d'œufs et de crème, parfaite pour un déjeuner sur le pouce.",
            highlight: false,
            imageSrc: "https://images.unsplash.com/photo-1629536037504-904c7e6eade4?q=80&w=1470&auto=format&fit=crop"
          },
          {
            name: "Sandwich Baguette",
            description: "Préparé à la minute avec notre baguette tradition et des ingrédients frais.",
            highlight: false,
            imageSrc: "https://images.unsplash.com/photo-1553909489-cd47e0907980?q=80&w=1025&auto=format&fit=crop"
          },
          {
            name: "Cookies",
            description: "Moelleux à cœur et croquants sur les bords, aux pépites de chocolat ou aux noix.",
            highlight: false,
            imageSrc: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1470&auto=format&fit=crop"
          },
          {
            name: "Madeleines",
            description: "De délicates petites douceurs à la texture aérée et au goût subtil de citron.",
            highlight: false,
            imageSrc: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=1374&auto=format&fit=crop"
          }
        ]}
      />

      {/* Note */}
      <section className="py-12 bg-bakery-brown-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-script text-3xl mb-6">Une production quotidienne</h2>
          <p className="max-w-2xl mx-auto">
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
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="text-bakery-brown-dark">{icon}</div>
          <h2 className="font-script text-3xl text-center text-bakery-brown-dark">{title}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={index}
              name={product.name}
              description={product.description}
              highlight={product.highlight}
              imageSrc={product.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ name, description, highlight, imageSrc }: Product) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
        {highlight && (
          <span className="absolute top-3 right-3 bg-bakery-brown-dark text-white text-xs font-bold px-3 py-1 rounded-full">
            Produit phare
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-sans font-bold text-xl text-bakery-brown-dark mb-2">{name}</h3>
        <p className="text-bakery-brown">{description}</p>
      </div>
    </div>
  );
};

export default Produits;
