import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  backgroundImagesPC,
  backgroundImagesMobile,
  BackgroundImageTitle,
  BackgroundImageDescription,
} from "../utils/Backgrounds";

const Header: React.FC = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)"); // Détecte les écrans de largeur inférieure ou égale à 768px
    const handleMediaQueryChange = (e: MediaQueryListEvent) =>
      setIsMobile(e.matches);

    setIsMobile(mediaQuery.matches); // Définir l'état initial

    // Écouter les changements de taille de l'écran
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Nettoyage de l'écouteur lors du démontage du composant
    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  const backgroundImage = isMobile
    ? backgroundImagesMobile[location.pathname]
    : backgroundImagesPC[location.pathname];

  return (
    <div
      className={`w-full h-5/6 bg-no-repeat bg-center bg-cover flex flex-row items-center px-10 md:px-36 text-white animate-fadeIn animation-delay-100 opacity-0`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="space-y-5 animate-slideFromTop animation-delay-100 opacity-0">
        <span className="font-black text-5xl md:text-6xl">
          {BackgroundImageTitle[location.pathname]}
        </span>
        <p
          className="text-xl font-medium"
          dangerouslySetInnerHTML={{
            __html: BackgroundImageDescription[location.pathname],
          }}
        ></p>
      </div>
    </div>
  );
};

export default Header;
