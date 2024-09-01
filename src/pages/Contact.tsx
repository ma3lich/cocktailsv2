import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import Radio from "../components/Radio";
import emailjs from "emailjs-com";

// Définir l'interface pour les valeurs du formulaire
interface FormValues {
  type: string;
  nom: string;
  prenom: string;
  entreprise: string;
  adresse: string;
  codepostal: string;
  ville: string;
  telephone: string;
  email: string;
  prestation: string;
  evenement: string;
  lieu: string;
  date: string;
  nombre_personnes: number;
  budget: number;
  message: string;
  acceptTerms: boolean;
}

const Form: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    type: "",
    nom: "",
    prenom: "",
    entreprise: "",
    adresse: "",
    codepostal: "",
    ville: "",
    telephone: "",
    email: "",
    prestation: "",
    evenement: "",
    lieu: "",
    date: "",
    nombre_personnes: 0,
    budget: 0,
    message: "",
    acceptTerms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, type, value } = e.target;

    // "Type assertion" pour HTMLInputElement
    const target = e.target as HTMLInputElement;

    if (type === "checkbox") {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: target.checked,
      }));
    } else {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_clxfbjl",
        "template_xiyd98f",
        e.target as HTMLFormElement,
        "nmV4sWFzlpyH6QbZl"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.href = "/success";

        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex flex-col items-center justify-center px-5 md:px-36 my-20">
      <ContactSection />
      <form onSubmit={handleSubmit} className="w-full md:w-2/3 space-y-8 my-10">
        <div className="space-y-4">
          <label className="font-semibold">Vous êtes :</label>
          <div className="space-y-2 mt-2">
            <Radio
              id="particulier"
              name="type"
              value="particulier"
              onChange={handleChange}
              checked={formValues.type === "particulier"}
              label="Particulier"
            />
            <Radio
              id="professionnel"
              name="type"
              value="professionnel"
              onChange={handleChange}
              checked={formValues.type === "professionnel"}
              label="Professionnel"
            />
          </div>
        </div>
        <div className="w-full flex justify-between items-center gap-5 ">
          <Input
            label="Nom"
            id="nom"
            name="nom"
            required
            value={formValues.nom}
            onChange={handleChange}
          />
          <Input
            label="Prénom"
            id="prenom"
            name="prenom"
            required
            value={formValues.prenom}
            onChange={handleChange}
          />
        </div>

        <Input
          label="Nom de l'entreprise"
          id="entreprise"
          name="entreprise"
          value={formValues.entreprise}
          onChange={handleChange}
        />

        <Input
          label="Adresse"
          id="adresse"
          name="adresse"
          required
          value={formValues.adresse}
          onChange={handleChange}
        />

        <div className="w-full flex justify-between items-center gap-5 ">
          <Input
            label="Code postal"
            id="codepostal"
            name="codepostal"
            required
            value={formValues.codepostal}
            onChange={handleChange}
          />
          <Input
            label="Ville"
            id="ville"
            name="ville"
            required
            value={formValues.ville}
            onChange={handleChange}
          />
        </div>

        <div className="w-full flex justify-between items-center gap-5 ">
          <Input
            label="Téléphone"
            type="tel"
            id="telephone"
            name="telephone"
            required
            placeholder="Format: 0123456789"
            value={formValues.telephone}
            onChange={handleChange}
          />
          <Input
            label="Email"
            type="email"
            id="email"
            name="email"
            required
            value={formValues.email}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-4">
          <label className="font-semibold">Type de prestation :</label>
          <div className="space-y-2">
            <Radio
              id="cocktail_domicile"
              name="prestation"
              value="cocktail_domicile"
              onChange={handleChange}
              checked={formValues.prestation === "cocktail_domicile"}
              label="Cocktail à domicile"
            />
            <Radio
              id="atelier_cocktail"
              name="prestation"
              value="atelier_cocktail"
              onChange={handleChange}
              checked={formValues.prestation === "atelier_cocktail"}
              label="Atelier cocktail"
            />
            <Radio
              id="atelier_degustation"
              name="prestation"
              value="atelier_degustation"
              onChange={handleChange}
              checked={formValues.prestation === "atelier_degustation"}
              label="Atelier dégustation"
            />
            <Radio
              id="autres_prestations"
              name="prestation"
              value="autres_prestations"
              onChange={handleChange}
              checked={formValues.prestation === "autres_prestations"}
              label="Autres"
            />
          </div>
        </div>

        {/* Groupe de boutons radio pour le type d'événement */}
        <div className="space-y-4 mt-4">
          <label className="font-semibold">Type d'événement :</label>
          <div className="space-y-2">
            <Radio
              id="entre_amis"
              name="evenement"
              value="entre_amis"
              onChange={handleChange}
              checked={formValues.evenement === "entre_amis"}
              label="Entre amis"
            />
            <Radio
              id="evg_evjf_mariage"
              name="evenement"
              value="evg_evjf_mariage"
              onChange={handleChange}
              checked={formValues.evenement === "evg_evjf_mariage"}
              label="EVG / EVJF / Mariage"
            />
            <Radio
              id="anniversaire_battem"
              name="evenement"
              value="anniversaire_battem"
              onChange={handleChange}
              checked={formValues.evenement === "anniversaire_battem"}
              label="Anniversaire / Baptême"
            />
            <Radio
              id="afterwork_seminaire"
              name="evenement"
              value="afterwork_seminaire"
              onChange={handleChange}
              checked={formValues.evenement === "afterwork_seminaire"}
              label="Afterwork / Séminaire"
            />
            <Radio
              id="autre_evenement"
              name="evenement"
              value="autre_evenement"
              onChange={handleChange}
              checked={formValues.evenement === "autre_evenement"}
              label="Autre"
            />
          </div>
        </div>

        <div className="w-full flex justify-between items-center gap-1 ">
          <Input
            label="Lieu de l'événement"
            id="lieu"
            name="lieu"
            required
            value={formValues.lieu}
            onChange={handleChange}
          />
          <Input
            label="Date de l'événement"
            type="date"
            id="date"
            name="date"
            required
            value={formValues.date}
            onChange={handleChange}
          />
        </div>

        <Input
          label="Nombre de personnes"
          type="number"
          id="nombre_personnes"
          name="nombre_personnes"
          required
          min="1"
          value={formValues.nombre_personnes}
          onChange={handleChange}
        />

        <Input
          label="Budget estimé pour l’événement (en €)"
          type="number"
          id="budget"
          name="budget"
          min="1"
          value={formValues.budget}
          onChange={handleChange}
        />

        <Textarea
          label="Infos complémentaires"
          id="message"
          name="message"
          rows={4}
          placeholder="Entrez vos informations ici"
          value={formValues.message}
          onChange={handleChange}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            margin: "20px 0",
          }}
        >
          <input
            type="checkbox"
            id="acceptTerms"
            name="acceptTerms"
            checked={formValues.acceptTerms}
            onChange={handleChange}
          />
          <label htmlFor="acceptTerms">
            En soumettant ce formulaire, j’accepte que mes informations soient
            utilisées exclusivement dans le cadre de ma demande et de la
            relation commerciale éthique et personnalisée qui pourrait en
            découler si je le souhaite. Pour en savoir plus, consulter notre
            politique de confidentialité.
          </label>
        </div>

        <button
          type="submit"
          className="border-2 border-[#e6c2bf] bg-white rounded-xl py-1 px-4 w-full"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

const ContactSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-5">
      <span className="w-full text-center bg-[#e6c2bf] p-4 rounded-xl text-white shadow-sm font-extrabold uppercase md:text-lg">
        Lescocktailsdechristelle@gmail.com | +33 6 03 23 21 92 | 362 Rue de
        Genève, France
      </span>
      <p className="w-full text-left ">
        À la recherche d'une idée originale pour votre événement ? Besoin d'un
        devis rapidement ? Prenez juste quelques instants pour remplir notre
        formulaire. Nous vous contacterons dans les 24 à 48 heures avec une
        réponse ou une proposition sur mesure pour votre projet. N'oubliez pas
        de vérifier vos dossiers indésirables ou spams pour ne manquer aucune
        information importante.
      </p>
    </section>
  );
};

const Contact: React.FC = () => {
  return (
    <div className="w-full h-screen bg-[#e1e1e1] text-black">
      <NavBar />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
