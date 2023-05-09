import {
  CategoriesEnum,
  IQuestionsBurger2laMort,
  TeamEnum,
} from 'src/app/models/questions';

const Category = CategoriesEnum.BURGERDELAMORT;

export const burger2laMort: IQuestionsBurger2laMort = {
  questions: [
    {
      question: 'Que fait la vache qui rit ?',
      category: Category,
      team: TeamEnum.KETCHUP,
      reponse: 'Elle rit',
    },
    {
      question: 'Quel est ton fils préféré ?',
      category: Category,
      team: TeamEnum.KETCHUP,
      reponse: 'Naël ou je les aimes tous pareil !',
    },
    {
      question:
        "Entre Mumu et toi il y a aujourd'hui 30ans d'écard, de combien sera cet écard dans 15ans ?",
      category: Category,
      team: TeamEnum.KETCHUP,
      reponse: '30ans',
    },
    {
      question: 'Ayant maintenant 30 ans, as-tu enfin dépassé la puberté ?',
      category: Category,
      team: TeamEnum.KETCHUP,
      reponse: 'Oui',
    },
    {
      question: "Comment je m'appel ?",
      category: Category,
      team: TeamEnum.KETCHUP,
      reponse: 'Alain Chabite / Boulbi / Mathieu',
    },
    {
      question: '0 + 0 égale ?',
      category: Category,
      team: TeamEnum.KETCHUP,
      reponse: '0',
    },
    {
      question: 'Quel bruit fait une boite à meuh??',
      category: Category,
      team: TeamEnum.KETCHUP,
      reponse: 'meuh',
    },
    {
      question: "Vrai ou faux, si je cours très vite, je peux m'envoler ?",
      category: Category,
      team: TeamEnum.KETCHUP,
      reponse: 'Faux',
    },
    {
      question: "Comment Antoire appel t'il une bière après minuit",
      category: Category,
      team: TeamEnum.KETCHUP,
      reponse: 'La roteuse',
    },
    {
      question: 'Il fait soif, on se reprendrait pas une petite mousse ?',
      category: Category,
      team: TeamEnum.KETCHUP,
      reponse: 'Oui',
    },

    {
      question: 'Vous préférez le thé ou le café ?',
      category: Category,
      team: TeamEnum.MAYO,
      reponse: 'Le thé ou le café',
    },
    {
      question: 'Quel est ton fils préféré ?',
      category: Category,
      team: TeamEnum.MAYO,
      reponse: 'Naël ou je les aimes tous pareil !',
    },
    {
      question: 'Si 2+2 font 4, combien font 4+4 ?',
      category: Category,
      team: TeamEnum.MAYO,
      reponse: '8',
    },
    {
      question: 'De quel couleur sont tes chaussettes ?',
      category: Category,
      team: TeamEnum.MAYO,
      reponse: 'La preuve ?',
    },
    {
      question: 'Blanc, blanc, blanc, blanc, blanc, que boit la vache ?',
      category: Category,
      team: TeamEnum.MAYO,
      reponse: "De l'eau",
    },
    {
      question:
        "Si Alain Chabit est l'animateur du burger quizz, comment je m'appel ?",
      category: Category,
      team: TeamEnum.MAYO,
      reponse: 'Alain Chabit',
    },
    {
      question:
        "Quel serait ton prénom si tu t'appelais Mumu mais épelé a l'envers ?",
      category: Category,
      team: TeamEnum.MAYO,
      reponse: 'umum...',
    },
    {
      question: 'Que boit Antoine ?',
      category: Category,
      team: TeamEnum.MAYO,
      reponse: "De la bière ou du vin (et de l'eau parfois)",
    },
    {
      question: 'Quel est le code postal de Pluméliau ?',
      category: Category,
      team: TeamEnum.MAYO,
      reponse: '56930',
    },
    {
      question: 'Vrai ou faux, tu as une bonne mémoire ?',
      category: Category,
      team: TeamEnum.MAYO,
      reponse: 'Si tu es arrivé jusque ici vrai sinon faux!',
    },
  ],
};
