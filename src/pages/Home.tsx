import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const Home: React.FC = () => {
  return (
    <div className="w-full h-screen bg-[#e1e1e1]">
      <NavBar />
      <Header />
      <div className="w-full md:p-20 p-5 space-y-28 bg-[#e1e1e1] text-black ">
        <div className="flex md:flex-row flex-col items-center md:gap-20 gap-10">
          <div className="md:w-8/12 w-full">
            <img
              className="w-full rounded-xl"
              src="/back_text_1.jpg"
              alt="Image 1"
            />
          </div>

          <p className="w-10/12">
            <strong>
              Christelle LEDUC <br />
              Barmaid professionnelle, mixologue et fondatrice de la société.
            </strong>
            <br />
            <br />
            <strong>Passionnée</strong> par les métiers du bar et la mixologie,
            elle commence naturellement son cursus professionnel en hôtellerie
            et restauration. Avant même d’obtenir son diplôme de mention
            complémentaire barman, elle
            <strong> remporte à 18 ans</strong> son premier concours lors du
            <strong> trophée des barmans</strong> dans son département natal des
            Vosges.
            <br />
            <br />
            En 2010, elle participe au
            <strong> championnat de France de la Mojito Cup.</strong>
            <br />
            <br />À travers divers postes tels que serveuse, barmaid,
            responsable de salle et chef de bar, elle acquiert les compétences
            nécessaires pour devenir
            <strong> mixologue professionnelle.</strong>
            Elle poursuit son parcours au <strong> Luxembourg</strong>, où elle
            travaille au contact d’une clientèle internationale et exigeante.
            <br />
            <br />
            <strong> Membre de l’association des barmen de France,</strong>
            elle se perfectionne sans cesse sur les nouvelles techniques et
            produits.
            <br />
            <br />
            Ses traits distinctifs :
            <strong>
              {" "}
              son dynamisme, sa pédagogie et son sourire rayonnant.
            </strong>
          </p>
        </div>

        <div className="flex md:flex-row-reverse flex-col items-center md:gap-20 gap-10">
          <div className="md:w-8/12 w-full">
            <img
              className="w-full rounded-xl"
              src="/back_text_2.jpg"
              alt="Image 1"
            />
          </div>

          <p className="w-10/12">
            Grâce à ces
            <strong> 25 années d'expérience, elle fonde en 2022</strong>
            son entreprise de bar à cocktails mobile, spécialisée dans les
            <strong> événements privés</strong> comme les mariages,
            anniversaires ou soirées entre amis, ainsi que les
            <strong> événements professionnels</strong> tels que les afterworks
            ou les séminaires.
            <br />
            <br />
            Son objectif,
            <strong> partager sa passion avec convivialité et proximité</strong>
            , en offrant des
            <strong> créations uniques et originales.</strong>
            <br />
            <br />
            Soucieuse de son environnement, elle s’efforce de travailler autant
            que possible avec des
            <strong> produits locaux, frais et de saison</strong> en
            privilégiant
            <strong> les circuits courts et le fait maison.</strong>
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center bg-[#e1e1e1] gap-10 my-10 md:p-0 p-5">
        <span className="md:text-3xl text-xl text-center font-bold">
          <i>&#10077;</i> Parce qu'une vidéo vaut mieux qu'un long discours
          <i>&#10078;</i>
        </span>
        <video
          controls={false}
          autoPlay={true}
          muted={true}
          playsInline={true}
          loop={true}
          className="md:w-8/12 w-full"
        >
          <source src="/presentation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <Advantages />

      <Footer />
    </div>
  );
};

const Advantages: React.FC = () => {
  const AdvantagesItems = [
    {
      image: "/logos/logo_abf.png",
      text: "Membre de l’association des barmen de France.",
    },

    {
      image: "/logos/logo_48h.png",
      text: "Devis gratuit sous 48 heures.",
    },

    {
      image: "/logos/logo_product.png",
      text: "Ingrédients locaux, frais, de saison ou faits maison.",
    },

    {
      image: "/logos/logo_carte.png",
      text: "Déplacement en région Rhône-Alpes.",
    },

    {
      image: "/logos/logo_key.png",
      text: "Prestation clé en main",
    },

    {
      image: "/logos/logo_cocktail.png",
      text: "Cocktails classiques, signatures ou sur mesure.",
    },
  ];

  return (
    <div className="bg-[#e6c2bf] text-black flex md:flex-row flex-col justify-around py-16 px-10 gap-10">
      {AdvantagesItems.map((item, index) => (
        <div
          key={index}
          className="flex md:flex-col flex-row md:justify-center justify-start items-center md:gap-2 gap-5"
        >
          <img
            src={item.image}
            alt={item.text}
            className="w-20 aspect-square"
          />
          <p className="font-semibold md:text-center">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
