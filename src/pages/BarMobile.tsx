import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import PointsFort from "../components/PointsFort";
import Questions from "../components/Questions";

const BarMobile: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fonction pour ouvrir/fermer le menu mobile
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const PointsFortItems = [
    {
      icon: "/logos/logo_cocktail.png",
      text: "Une sélection de cocktails variée selon les saisons.",
    },
    {
      icon: "/logos/logo_sansalcol.png",
      text: "Grande variété de choix disponibles en version sans alcool.",
    },
    {
      icon: "/logos/logo_tarif.png",
      text: "Tarif dégressif à partir de 100 cocktails.",
    },
  ];

  const QuestionsItems = [
    {
      title: "Combien de cocktails nous recommandez-vous de choisir ?",
      description:
        "Nous vous recommandons de choisir entre 2 à 3 cocktails différents afin de minimiser notre impact écologique et simplifier la logistique, tout en évitant les pertes.",
    },
    {
      title:
        "Et si je souhaite d'autres cocktails classiques non-inscrits sur votre carte ?",
      description:
        "Pas de panique ! Notre mixologue expérimenté maitrise les grands classiques de la mixologie et sera ravi de préparer tout cocktail classique que vous désirez, même s'il ne figure pas sur notre carte.",
    },
    {
      title: "Quels services ou équipements fournissez-vous ?",
      description:
        "Nous prenons en charge toute la logistique nécessaire, fournissant la verrerie, les ingrédients, le matériel de préparation et de service, afin que vous puissiez vous détendre et profiter pleinement de votre événement.",
    },
  ];
  return (
    <div className="w-full h-screen bg-[#e1e1e1]">
      <NavBar isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      <Header />
      <div className="text-black md:px-36 px-5 mt-10">

        <span className="font-bold text-4xl">Bar à cocktail mobile</span>

        <p className="text-lg">
          <br />
          Offrez-vous une
          <strong> expérience unique et originale</strong> avec notre service de
          bar à cocktail mobile pour tous vos événements{" "}
          <strong> privés ou professionnels.</strong>
          <br />
          <strong> Nous nous adaptons à votre lieu,</strong> que ce soit dans
          votre cuisine, sur votre terrasse de jardin, ou en utilisant notre
          option de
          <strong> station mobile.</strong> Notre objectif est de vous offrir
          l'excellence que votre événement mérite.
          <br />
          <br />
          Nous proposons une large gamme de cocktails qui mêlent des
          <strong> classiques revisités,</strong> des{" "}
          <strong> créations uniques</strong>
          de notre mixologue, ou des cocktails sur-mesure conçus spécialement
          selon vos goûts, votre thème ou l'atmosphère de votre événement.
          <br />
          <br />
          Sans oublier une <strong> sélection de shooters</strong> qui sauront
          enflammer vos fins de soirée.
          <br />
          <br />
          Nous prévoyons toujours un <strong>stock supplémentaire</strong>{" "}
          d’ingrédients à hauteur de <strong>10%</strong>, garantissant ainsi
          une disponibilité constante de nos meilleurs produits tout au long de
          votre soirée.
        </p>
      </div>
      <PointsFort data={PointsFortItems} />
      <Questions data={QuestionsItems} />
      <Footer onMobileMenuToggle={toggleMobileMenu} />
    </div>
  );
};

export default BarMobile;
