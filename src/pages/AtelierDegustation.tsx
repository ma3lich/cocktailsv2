import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import PointsFort from "../components/PointsFort";
import Questions from "../components/Questions";

const AtelierDegustation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fonction pour ouvrir/fermer le menu mobile
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const OpenMenuMobile = () => {
    setIsMobileMenuOpen(true);
  };


  const PointsFortItems = [
    {
      icon: "/logos/logo_team.png",
      text: "Possible de créer une ou des équipes en version sans alcool",
    },
    {
      icon: "/logos/logo_diplome.png",
      text: "Diplôme personnalisé pour chacun des membres de l'équipe vainqueur",
    },
    {
      icon: "/logos/logo_tarif.png",
      text: "Tarif dégressif à partir de 20 personnes.",
    },
  ];

  const QuestionsItems = [
    {
      title: "Comment sont composées les équipes ?",
      description:
        "Nous encourageons à former des équipes comportant un nombre égal de participants dans la mesure du possible. Le choix des membres de chaque équipe est libre. Si aucune équipe n'est formée, nous procéderons à une répartition aléatoire des participants pour maintenir un équilibre du nombre de personnes par équipe.",
    },
    {
      title:
        "Est-ce que l'atelier inclut des informations sur l'histoire ou les origines des cocktails présentés ?",
      description:
        "Après chaque dégustation, notre mixologue fournira des informations détaillées sur les ingrédients utilisés. Les participants auront alors l'occasion de poser des questions pour en savoir plus.",
    },
    {
      title:
        "Est-il possible d'adapter l'atelier pour des groupes avec des préférences ou des restrictions alimentaires spécifiques ?",
      description:
        "Nous sommes attentifs à toutes vos demandes et nous nous efforcerons de répondre au mieux aux besoins et aux sensibilités et allergies de chacun.",
    },
  ];
  return (
    <div className="w-full h-screen bg-[#e1e1e1]">
      <NavBar isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      <Header />
      <div className="text-black md:px-36 px-5 mt-10">
        <span className="font-bold text-4xl">
          Qui saura découvrir les ingrédients mystères ?
        </span>

        <p className="text-lg">
          <br />
          L’objectif :<strong> Deviner les 5 ingrédients</strong> présents dans
          chacune des créations qui vous seront proposées parmi une sélection
          d'ingrédients. Parviendrez-vous à<strong> affûter vos</strong> sens
          pour percevoir les subtilités de chaque proposition ? Un{" "}
          <strong> jeu d’équipe convivial</strong> qui favorise la
          <strong> cohésion</strong> et la , tout{" "}
          <strong> communication</strong> en dégustant de délicieux cocktails.
          <br />
          <br />
          QUE LE CONCOURS COMMENCE !!!
        </p>
      </div>
      <PointsFort data={PointsFortItems} />
      <Questions data={QuestionsItems} />
      <Footer onMobileMenuToggle={OpenMenuMobile} />
    </div>
  );
};

export default AtelierDegustation;
