import type { ImageMetadata } from "astro";
import menage from "../assets/images/menage.jpg";
import garde from "../assets/images/garde.jpg";
import jardinage from "../assets/images/jardinage.jpg";
import administratif from "../assets/images/administratif.jpg";
import cart from "../assets/images/cart.jpg";
import gloves from "../assets/images/gloves.jpg";

export interface Service {
  slug: string;
  title: string;
  image: ImageMetadata;
  text: string;
  priceTTC: string;
  priceCredit: string;
}

export const services: Service[] = [
  {
    slug: "menage",
    title: "Ménage",
    image: menage,
    text: "Un intérieur sain et bien tenu, sans y consacrer vos week-ends. Nos intervenants viennent chez vous aux horaires qui vous conviennent, avec la régularité que vous choisissez.",
    priceTTC: "27,20 € / heure",
    priceCredit: "13,60 € / heure après crédit d'impôt",
  },
  {
    slug: "garde-enfants",
    title: "Garde d'enfants à domicile",
    image: garde,
    text: "Confiez vos enfants à une personne de confiance, chez vous, et profitez d'une soirée ou d'une sortie l'esprit tranquille. Une garde adaptée à leur rythme et à vos horaires.",
    priceTTC: "27,20 € / heure",
    priceCredit: "13,60 € / heure après crédit d'impôt",
  },
  {
    slug: "jardinage",
    title: "Jardinage",
    image: jardinage,
    text: "Entretien de votre extérieur — tonte, taille, désherbage — et évacuation des déchets verts si besoin. Le tarif d'évacuation dépend du volume et de la déchèterie la plus proche.",
    priceTTC: "38,35 € / heure",
    priceCredit: "19,18 € / heure après crédit d'impôt",
  },
  {
    slug: "aide-administrative",
    title: "Aide Administrative",
    image: administratif,
    text: "Un accompagnement pour vos démarches et déclarations, quand la paperasse s'accumule ou devient difficile à suivre seul.",
    priceTTC: "27,20 € / heure",
    priceCredit: "13,60 € / heure après crédit d'impôt",
  },
  {
    slug: "livraison-courses",
    title: "Livraison de courses",
    image: cart,
    text: "Vos courses récupérées et livrées chez vous, quand le temps ou les déplacements manquent.",
    priceTTC: "27,20 € / heure",
    priceCredit: "13,60 € / heure après crédit d'impôt",
  },
  {
    slug: "bricolage",
    title: "Bricolage",
    image: gloves,
    text: "Petites réparations et travaux du quotidien pris en charge par un intervenant de confiance.",
    priceTTC: "31,87 € / heure",
    priceCredit: "15,94 € / heure après crédit d'impôt",
  },
];

export const travelFee = {
  ttc: "0,54 €",
  credit: "0,27 €",
};
