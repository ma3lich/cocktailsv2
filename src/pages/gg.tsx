import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const ConfirmationPage: React.FC = () => {
  return (
    <div className="w-full h-screen bg-[#e1e1e1]">
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-[url('/back_pc.png')]">
        <div className="bg-[#e6c2bf] shadow-md rounded-lg p-8 w-11/12 max-w-lg text-white">
          <h1 className="text-2xl font-semibold text-center mb-4">
            Merci pour votre demande !
          </h1>
          <p className="text-lg text-center mb-4">
            Votre demande a bien été reçue. Nous vous remercions pour votre
            intérêt et nous vous contacterons dans les plus brefs délais pour
            discuter des détails.
          </p>
          <p className="text-center mb-6">
            En attendant, n'hésitez pas à explorer notre site web pour plus
            d'informations.
          </p>
          <div className="text-center">
            <a
              href="/"
              className="border-2 text-[#e6c2bf] bg-white rounded-xl py-1 px-4 w-full resize-none"
            >
              Retour à l'accueil
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ConfirmationPage;
