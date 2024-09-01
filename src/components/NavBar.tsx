import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import {
  CloseMenuIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MenuIcon,
  TiktokIcon,
} from "./Icons";
import { useEffect, useRef, useState } from "react";

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full flex items-center justify-between md:justify-around bg-center bg-[url('/nav_back.png')] px-10 md:px-[10%] py-5 z-50  ">
      {!isMobileMenuOpen && (
        <div className="animate-slideFromTop animation-delay-600 opacity-0">
          <img src="/logo.png" alt="logo" className="w-20" />
        </div>
      )}

      {/* Menu Desktop */}
      <div className="hidden md:flex w-[80%] items-center justify-between animate-slideFromTop animation-delay-600 opacity-0 z-50">
        <NavList />
        <div className=" flex items-center gap-20">
          <Button to="/contact" text="Devis Gratuit" />
          <SocialGrid />
        </div>
      </div>

      {/* Bouton Menu Hamburger pour Mobile */}
      {!isMobileMenuOpen && (
        <div className="flex md:hidden items-center animate-slideFromTop animation-delay-600 opacity-0">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-800 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <CloseMenuIcon className="size-8" />
            ) : (
              <MenuIcon className="size-8" />
            )}
          </button>
        </div>
      )}

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="absolute space-y-16 flex flex-col justify-start items-start px-10 w-full h-full top-0 z-50 left-0 bg-center bg-[url('/nav_back.png')] shadow-lg p-5 animate-slideFromTop md:hidden">
          <div className="w-full flex justify-between items-center">
            <div className="logo w-6/12 md:w-1/6">
              <img src="/logo.png" alt="logo" className="w-2/5" />
            </div>
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 focus:outline-none "
            >
              <CloseMenuIcon className="size-8" />
            </button>
          </div>
          <div className="flex flex-col gap-12 w-full">
            <NavList />
            <div className="w-full flex items-center justify-around">
              <Button to="/contact" text="Devis Gratuit" />
              <SocialGrid />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavListItems = [
  {
    title: "Acceuil",
    to: "/",
  },

  {
    title: "Nos services",
    dropdown: true,
    to: "",
    subitem: [
      {
        title: "Bar à cocktails mobile",
        to: "/barmobile",
      },
      {
        title: "Atelier cocktail",
        to: "/ateliercocktail",
      },
      {
        title: "Atelier dégustation",
        to: "/atelierdegustation",
      },
    ],
  },

  {
    title: "Nos cartes",
    dropdown: true,
    to: "",
    subitem: [
      {
        title: "Automne - Hiver",
        to: "/cartes/CARTE_AUTOMNE-HIVER.pdf",
        target: true,
      },
      {
        title: "Printemps - Été ",
        to: "/cartes/CARTE_PRINTEMPS-ETE.pdf",
        target: true,
      },
      {
        title: "Shooters",
        to: "/cartes/CARTE_SHOOTERS.pdf",
        target: true,
      },
    ],
  },

  {
    title: "Nos partenaires",
    to: "/partners",
  },

  {
    title: "Contact",
    to: "/contact",
  },
];

const NavList: React.FC = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const navRef = useRef<HTMLUListElement>(null);

  const handleDropdownToggle = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      // Ferme le dropdown si le clic est en dehors de l'élément référencé
      setOpenDropdownIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    // Nettoie l'événement lors du démontage
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <ul
      ref={navRef}
      className="flex flex-col md:flex-row md:items-center justify-around list-none md:text-base text-lg text-black font-semibold gap-10 md:gap-1 w-4/6"
    >
      {NavListItems.map((item, index) => (
        <li key={index}>
          {item.dropdown ? (
            <Dropdown
              title={item.title}
              subitems={item.subitem}
              isOpen={openDropdownIndex === index}
              onToggle={() => handleDropdownToggle(index)}
            />
          ) : (
            <Link id="menus" to={item.to}>{item.title}</Link>
          )}
        </li>
      ))}
    </ul>
  );
};

const Button: React.FC<{ to: string; text: string }> = ({ to, text }) => {
  return (
    <Link
      id="services"
      to={to}
      className=" text-white font-semibold text-lg py-2 px-4 rounded-xl bg-gradient-to-r from-[#f9d204] to-[#e42f70]"
    >
      {text}
    </Link>
  );
};

const SocialGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 text-xl">
      <Link to="https://www.facebook.com/lescocktailsdechristelle" target="_blank">
        <FacebookIcon className=" size-5" />
      </Link>
      <Link to="https://instagram.com/lescocktailsdechristelle?igshid=ZDdkNTZiNTM=" target="_blank">
        <InstagramIcon className=" size-5" />
      </Link>
      <Link to="https://www.tiktok.com/@lescocktailsdechristelle" target="_blank">
        <TiktokIcon className=" size-5" />
      </Link>
      <Link to="" target="_blank">
        <LinkedinIcon className=" size-5" />
      </Link>
    </div>
  );
};
export default NavBar;
