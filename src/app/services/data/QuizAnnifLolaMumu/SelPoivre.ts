import { CategoriesEnum, IQuestionsSelPoivre } from 'src/app/models/questions';

const Category = CategoriesEnum.SELPOIVRE;

const Choix1 = 'Lola';
const Choix2 = 'Lolo';
const Choix3 = 'Les deux';

export const selPoivre: IQuestionsSelPoivre = {
  questions: [
    {
      question: "Je m'appel Antoine et j'aime ploter...",
      category: Category,
      reponseProp: {
        propositions: [
          { letter: 'A', txt: Choix1 },
          { letter: 'B', txt: Choix2 },
          { letter: 'C', txt: Choix3 },
        ],
        goodrep: 2,
      },
    },
    {
      question: 'Je suis blanc et je pointe souvent...',
      category: Category,
      reponseProp: {
        propositions: [
          { letter: 'A', txt: Choix1 },
          { letter: 'B', txt: Choix2 },
          { letter: 'C', txt: Choix3 },
        ],
        goodrep: 2,
      },
    },
    {
      question: 'Je suis alcoolisé en ce moment',
      category: Category,
      reponseProp: {
        propositions: [
          { letter: 'A', txt: Choix1 },
          { letter: 'B', txt: Choix2 },
          { letter: 'C', txt: Choix3 },
        ],
        goodrep: 2,
      },
    },
  ],
};
