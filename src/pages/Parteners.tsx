import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

// Définissez le type pour les partenaires
interface Partner {
  img: string;
  link: string;
}

// Les données des partenaires
const partners: Partner[] = [
  {
    img: "/parteners/La_Distillerie_Al_Kapone.png",
    link: "https://distillerie-alkapone.com/",
  },
  {
    img: "/parteners/Les_Potions_de_la_Cité.png",
    link: "https://www.facebook.com/lespotionsdelacite/?locale=fr_FR",
  },
  {
    img: "/parteners/Le_Comptoir_de_Néna.png",
    link: "https://www.facebook.com/lecomptoirdenena/?locale=fr_FR",
  },
  {
    img: "/parteners/Maison_Mugnier.png",
    link: "https://maison-mugnier.com/",
  },
  {
    img: "/parteners/Domaine_Des_Hyades.png",
    link: "https://www.facebook.com/DomainedesHyades/",
  },
  {
    img: "/parteners/Lymx_Pix.png",
    link: "https://www.instagram.com/lymx_pix/",
  },
  {
    img: "/parteners/TyraHost.png",
    link: "https://manager.tyrahost.fr/",
  },
  {
    img: "/parteners/Conciergerie_Hemera.png",
    link: "http://www.conciergeriehemera.fr/",
  },
  {
    img: "/parteners/La_COLOC.png",
    link: "https://www.facebook.com/PizzeriaLaColoc?locale=fr_FR",
  },
  {
    img: "/parteners/Nos_Cheres_Campagnes.png",
    link: "https://www.noscherescampagnes.com/",
  },

  {
    img: "/parteners/Cave_Des_Copains.png",
    link: "https://www.cavedescopains.com/",
  },
];

// Composant Partenaires
const Partners: React.FC = () => {
  return (
    <div className="w-full h-screen bg-[#e1e1e1]">
      <NavBar />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-5 md:p-20">
        {partners.map((partner, index) => (
          <div
            key={index}
            className={`flex justify-center items-center animate-slideFromTop opacity-0`}
            style={{ animationDelay: `${index * 0.3}s` }} // Utilisez le style inline pour les délais d'animation
          >
            <a
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-105"
            >
              <img
                src={partner.img}
                alt="Partenaire"
                className="max-w-full h-auto rounded shadow-md"
              />
            </a>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Partners;
