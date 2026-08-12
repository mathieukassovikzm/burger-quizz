import {
  CategoriesEnum,
  IQuestionsMenu,
  TeamEnum,
} from 'src/app/models/questions';

const Category = CategoriesEnum.MENU;

export const MenuKetchup = 'Les annees 2000';
export const MenuMayo = 'Football Argentin';

const questionKetchup = [
  {
    question:
      'Quel téléphone portable, sorti en 2000, était célèbre pour être quasiment indestructible ?',
    team: TeamEnum.KETCHUP,
    category: Category,
    menu: MenuKetchup,
    reponse: 'Le Nokia 3310',
  },
  {
    question:
      "Quel réseau social, lancé en 2004, est devenu l'un des plus populaires au monde ?",
    team: TeamEnum.KETCHUP,
    category: Category,
    menu: MenuKetchup,
    reponse: 'Facebook',
  },
  {
    question: 'Quel chanteur a sorti le tube « Whenever, Wherever » en 2001 ?',
    team: TeamEnum.KETCHUP,
    category: Category,
    menu: MenuKetchup,
    reponse: 'Shakira',
  },
  {
    question:
      'Quel logiciel permettait de discuter avec ses amis en ligne, avec des pseudos comme « §xX-Ptite-Coeur-Xx§ » et de recevoir des « wizz » ?',
    team: TeamEnum.KETCHUP,
    category: Category,
    menu: MenuKetchup,
    reponse: 'MSN Messenger',
  },
  {
    question:
      "Quel objet électronique fallait-il nourrir, nettoyer et empêcher de mourir sous peine de culpabiliser pendant toute la journée ?",
    team: TeamEnum.KETCHUP,
    category: Category,
    menu: MenuKetchup,
    reponse: 'Un Tamagotchi',
  },
  {
    question:
      'Quelle émission musicale permettait de découvrir chaque semaine le classement des meilleures ventes de singles ?',
    team: TeamEnum.KETCHUP,
    category: Category,
    menu: MenuKetchup,
    reponse: 'Hit Machine',
  },
];

const questionMayo = [
  {
    question:
      'Quel joueur argentin a marqué le « but du siècle » contre l\'Angleterre lors du Mondial 1986 ?',
    team: TeamEnum.MAYO,
    category: Category,
    menu: MenuMayo,
    reponse: 'Diego Maradona',
  },
  {
    question:
      'Comment surnomme-t-on le derby de Buenos Aires entre Boca Juniors et River Plate ?',
    team: TeamEnum.MAYO,
    category: Category,
    menu: MenuMayo,
    reponse: 'Le Superclásico',
  },
  {
    question: 'Combien de fois l\'Argentine a-t-elle remporté la Coupe du Monde ?',
    team: TeamEnum.MAYO,
    category: Category,
    menu: MenuMayo,
    reponse: '3 fois (1978, 1986, 2022)',
  },
  {
    question: 'Quel est le surnom de Lionel Messi ?',
    team: TeamEnum.MAYO,
    category: Category,
    menu: MenuMayo,
    reponse: 'La Pulga (la puce)',
  },
  {
    question: 'Dans quel stade légendaire joue Boca Juniors ?',
    team: TeamEnum.MAYO,
    category: Category,
    menu: MenuMayo,
    reponse: 'La Bombonera',
  },
  {
    question:
      "Quel entraîneur argentin a mené l'Albiceleste au titre mondial en 2022 ?",
    team: TeamEnum.MAYO,
    category: Category,
    menu: MenuMayo,
    reponse: 'Lionel Scaloni',
  },
];

export const menu: IQuestionsMenu = {
  questions: [...questionKetchup, ...questionMayo],
};
