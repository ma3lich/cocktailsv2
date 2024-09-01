import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import PointsFort from "../components/PointsFort";
import Questions from "../components/Questions";

const AtelierCocktail: React.FC = () => {
  const PointsFortItems = [
    {
      icon: "/logos/logo_cocktail.png",
      text: "Également disponible en version non alcoolisée.",
    },
    {
      icon: "/logos/logo_sansalcol.png",
      text: "Distribution de guides pratiques pour pouvoir reproduire chez vous.",
    },
    {
      icon: "/logos/logo_tarif.png",
      text: "Tarif dégressif à partir de 10 personnes.",
    },
  ];

  const QuestionsItems = [
    {
      title: "Quelles sont vos exigences en termes d'organisation pratique ?",
      description:
        "Nous fournissons l'ensemble du matériel requis, les ingrédients ainsi que la verrerie. Tout ce que nous demandons est d'avoir accès à une surface plane suffisamment spacieuse pour que chaque participant puisse s'exercer dans des conditions optimales.",
    },
    {
      title:
        "Quelle est la quantité de cocktails par personne incluse dans le service ?",
      description:
        "Cette offre peut varier de 2 à 3 cocktails selon les préférences.",
    },
    {
      title: "Est-il possible de réaliser cette activité en groupe ?",
      description:
        "Oui, il est tout à fait envisageable de réaliser cette activité seul ou en groupe.",
    },
  ];
  return (
    <div className="w-full h-screen bg-[#e1e1e1]">
      <NavBar />
      <Header />
      <div className="text-black md:px-36 px-5 mt-10">
        <span className="font-bold text-4xl">
          1ère partie : en accompagnement{" "}
        </span>
        <p className="text-lg">
          <br />
          <strong> Guidé par notre mixologue,</strong> vous apprendrez à
          <strong> maîtriser les grandes techniques</strong> de la mixologie,
          tout en plongeant dans
          <strong> l'histoire des cocktails et des spiritueux,</strong> enrichis
          d'anecdotes fascinantes. Autour de votre{" "}
          <strong> plan de travail personnel et équipé</strong> de tout le
          matériel nécessaire, vous aurez l'opportunité de mettre en pratique
          vos nouvelles connaissances
          <strong> pour créer un délicieux cocktail</strong> dans une
          <strong> ambiance décontractée et conviviale.</strong>
        </p>
      </div>
      <div className="text-black md:px-36 px-5 mt-10">
        <span className="font-bold text-4xl">2ème partie : en autonomie </span>
        <p className="text-lg">
          <br />
          Après avoir été initié lors de la réalisation d'un premier cocktail,
          vous pourrez ainsi laisser{" "}
          <strong> libre cours à votre créativité</strong> pour confectionner{" "}
          <strong> votre propre cocktail sur mesure</strong> en utilisant les
          <strong> ingrédients de votre choix</strong> parmi ceux mis à votre
          disposition.
          <br />
          <br />À VOS MARQUES, PRÊTS, SHAKERS !
        </p>
      </div>
      <PointsFort data={PointsFortItems} />
      <Questions data={QuestionsItems} />
      <Footer />
    </div>
  );
};

export default AtelierCocktail;
