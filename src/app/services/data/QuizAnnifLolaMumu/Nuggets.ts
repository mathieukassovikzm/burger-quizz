import {
  CategoriesEnum,
  IQuestionsNuggets,
  TeamEnum,
} from 'src/app/models/questions';

const Category = CategoriesEnum.NUGGETS;

export const nuggets: IQuestionsNuggets = {
  questions: [
    {
      question: 'Que veulent dire les chiffres au fond des verres de cantine ?',
      category: Category,
      team: TeamEnum.KETCHUP,
      reponseProp: {
        propositions: [
          {
            letter: 'A',
            txt: "C'est l'âge que vous avez et le plus jeune va chercher l'eau.",
          },
          {
            letter: 'B',
            txt: "C'est ce que tu dois aux impôts",
          },
          {
            letter: 'C',
            txt: "C'est le nombre de mecs avec qui tu es sorti dans ta vie.",
          },
          {
            letter: 'D',
            txt: 'On sait pas, ça reste un mystère mais on est tous sur le coup…',
          },
        ],
        goodrep: 3,
      },
    },
    {
      question:
        "Herve a pour étymologie Houarn, mais qu'est ce que cela pouvait bien dire ?",
      category: Category,
      team: TeamEnum.MAYO,
      reponseProp: {
        propositions: [
          { letter: 'A', txt: 'Ferme la!' },
          { letter: 'B', txt: 'Le fer' },
          { letter: 'C', txt: 'La ferme' },
          { letter: 'D', txt: 'Féroce' },
        ],
        goodrep: 1,
      },
    },
    {
      question:
        "Un seul de ces ustensiles de cuisine à consonance sexuelle n'existe pas, lequel ?",
      category: Category,
      team: TeamEnum.KETCHUP,
      reponseProp: {
        propositions: [
          { letter: 'A', txt: 'Démonte-pneu' },
          { letter: 'B', txt: 'Cul-de-poule' },
          { letter: 'C', txt: 'Ouvre-boîte' },
          { letter: 'D', txt: 'Lèchefrite' },
        ],
        goodrep: 0,
      },
    },
    {
      question: "D'après vous, quelle était la taille de Napoléon ?",
      category: Category,
      team: TeamEnum.MAYO,
      reponseProp: {
        propositions: [
          { letter: 'A', txt: '1,65m, Comme Bruno Mars' },
          { letter: 'B', txt: '1,68m, Comme Nicolas Sarkozy' },
          { letter: 'C', txt: '1,69m, Comme Tom Cruise' },
          {
            letter: 'D',
            txt: '1,73m, Comme votre présentateur préféré, Alain Chabit.',
          },
        ],
        goodrep: 2,
      },
    },
    {
      question:
        'Combien de poils aux fesses avait Toinou lors de votre première rencontre ?',
      category: Category,
      team: TeamEnum.KETCHUP,
      reponseProp: {
        propositions: [
          { letter: 'A', txt: '0, oui Antoine se rase' },
          { letter: 'B', txt: "1, le survivior comme on l'appelle" },
          { letter: 'C', txt: '69, proportions plaisantes' },
          { letter: 'D', txt: 'Beaucoup trop...' },
        ],
        goodrep: 3,
      },
    },
    {
      question: 'Quel est le vrai nom de Muriel Hervé ?',
      category: Category,
      team: TeamEnum.MAYO,
      reponseProp: {
        propositions: [
          { letter: 'A', txt: 'Muriel Robbin' },
          { letter: 'B', txt: 'Muriel Smith' },
          { letter: 'C', txt: 'Limeur Rehvé' },
          { letter: 'D', txt: 'Muriel Hervé' },
        ],
        goodrep: 3,
      },
    },
  ],
};
