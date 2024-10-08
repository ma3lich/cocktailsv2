import { Link } from "react-router-dom";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TiktokIcon } from "./Icons";
import { useEffect } from "react";

interface FooterProps {
  onMobileMenuToggle: () => void; // Fonction pour ouvrir/fermer le menu mobile
}

const Footer: React.FC<FooterProps> = ({ onMobileMenuToggle }) => {
  useEffect(() => {
    // Créer un élément script
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute("data-use-service-core", "true");
    script.defer = true;

    // Ajouter le script au body
    document.body.appendChild(script);

    // Nettoyer le script lorsque le composant est démonté
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleLinkClick = () => {
    // Vérifie la taille de l'écran
    const isMobile = window.innerWidth <= 767;

    // Fait défiler vers la section correspondante
    const targetElement = document.querySelector("nav");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Ouvre le menu mobile si on est sur mobile
    if (isMobile) {
      onMobileMenuToggle();
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row md:items-start items-center md:justify-around justify-center text-center md:text-start gap-10 bg-center bg-[url('/nav_back.png')] px-10 py-10 md:px-36 text-black">
      <div className="flex items-center h-[150px]">
        <img src="/logo.png" alt="Logo" className="w-32 h-auto" />
      </div>

      <div className="flex flex-col">
        <div className="mb-3 text-lg font-bold underline">
          <span>Liens</span>
        </div>
        <div>
          <ul className="space-y-2 font-semibold">
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick();
                }}
                className=" cursor-pointer"
              >
                Nos services
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick();
                }}
                className=" cursor-pointer"
              >
                Nos cartes
              </a>
            </li>
            <li>
              <Link to="/partners">Nos partenaires</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="mb-3 text-lg font-bold underline">
          <span>Légales</span>
        </div>
        <div>
          <ul className="space-y-2 font-semibold">
            <li>
              <a href="/docs/Mentions Légales.pdf" target="_blank">
                Mentions légales
              </a>
            </li>
            <li>
              <a
                href="/docs/Conditions générales de vente 16052024.pdf"
                target="_blank"
              >
                CGV
              </a>
            </li>
            <li>
              <a
                href="/docs/Conditions générales d'utilisation 16052024.pdf"
                target="_blank"
              >
                CGU
              </a>
            </li>
            <li>
              <a href="/docs/Politique de confidentialité.pdf" target="_blank">
                Politique De Confidentialité
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="mb-3 text-lg font-bold underline">
          <span>Suivez-nous</span>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-4 gap-4 text-xl justify-center w-full">
          <Link
            to="https://www.facebook.com/lescocktailsdechristelle"
            target="_blank"
          >
            <FacebookIcon className=" size-8" />
          </Link>
          <Link
            to="https://instagram.com/lescocktailsdechristelle?igshid=ZDdkNTZiNTM="
            target="_blank"
          >
            <InstagramIcon className=" size-8" />
          </Link>
          <Link
            to="https://www.tiktok.com/@lescocktailsdechristelle"
            target="_blank"
          >
            <TiktokIcon className=" size-8" />
          </Link>
          <Link
            to="https://fr.linkedin.com/in/les-cocktails-de-christelle-092466274"
            target="_blank"
          >
            <LinkedinIcon className=" size-8" />
          </Link>
        </div>
      </div>

      <div className="reviews">
        <div
          className="elfsight-app-6441cb97-8b3c-4470-93f3-9a5358539688"
          data-elfsight-app-lazy
        ></div>
      </div>
    </div>
  );
};

export default Footer;
