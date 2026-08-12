import {
  CategoriesEnum,
  IQuestionsNuggets,
  TeamEnum,
} from 'src/app/models/questions';

const Category = CategoriesEnum.NUGGETS;

export const nuggets: IQuestionsNuggets = {
  questions: [
    {
      question: 'Quel animal est capable de reconnaître son prénom ?',
      category: Category,
      team: TeamEnum.KETCHUP,
      reponseProp: {
        propositions: [
          { letter: 'A', txt: 'Le chat' },
          { letter: 'B', txt: 'La poule' },
          { letter: 'C', txt: 'Le cochon' },
          { letter: 'D', txt: 'Le homard' },
        ],
        goodrep: 2,
      },
    },
    {
      question:
        'En France, lequel de ces prénoms a déjà été officiellement refusé à la naissance ?',
      category: Category,
      team: TeamEnum.MAYO,
      reponseProp: {
        propositions: [
          { letter: 'A', txt: 'Nutella' },
          { letter: 'B', txt: 'Raclette' },
          { letter: 'C', txt: 'Croissant' },
          { letter: 'D', txt: 'Merguez' },
        ],
        goodrep: 0,
      },
    },
    {
      question: "Quand la série Derrick s'est arrêtée, son scénariste avait :",
      category: Category,
      team: TeamEnum.KETCHUP,
      reponseProp: {
        propositions: [
          { letter: 'A', txt: '74 ans' },
          { letter: 'B', txt: '84 ans' },
          { letter: 'C', txt: '94 ans' },
          { letter: 'D', txt: 'Honte.' },
        ],
        goodrep: 3,
      },
    },
    {
      question: "Quel animal est le plus proche d'un invité devant un buffet ?",
      category: Category,
      team: TeamEnum.MAYO,
      reponseProp: {
        propositions: [
          { letter: 'A', txt: 'Le paresseux' },
          { letter: 'B', txt: "L'écureuil" },
          { letter: 'C', txt: 'Le vautour' },
          { letter: 'D', txt: 'Le dauphin' },
        ],
        goodrep: 2,
      },
    },
  ],
};
