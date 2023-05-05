import {
  CategoriesEnum,
  IQuestionsSelPoivre
} from 'src/app/models/questions';

const Choix1 = 'Lola';
const Choix2 = 'Lolo';
const Choix3 = 'Les deux';

export const nuggets: IQuestionsSelPoivre = {
  questions: [
    {
      question: "Je m'appel Antoine et j'aime ploter...",
      category: CategoriesEnum.SELPOIVRE,
      reponseProp: {
        propositions: [Choix1, Choix2, Choix3],
        goodrep: 2,
      },
    },
    {
      question: "Je suis blanc et je pointe souvent...",
      category: CategoriesEnum.SELPOIVRE,
      reponseProp: {
        propositions: [Choix1, Choix2, Choix3],
        goodrep: 2,
      },
    },
    {
      question: "Je suis alcoolisé en ce moment",
      category: CategoriesEnum.SELPOIVRE,
      reponseProp: {
        propositions: [Choix1, Choix2, Choix3],
        goodrep: 2,
      },
    },
  ],
};
