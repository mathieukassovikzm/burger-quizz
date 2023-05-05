import { CategoriesEnum, IQuestionsNuggets, TeamEnum } from 'src/app/models/questions';

export const nuggets: IQuestionsNuggets = {
  questions: [{
    question: "",
    category: CategoriesEnum.NUGGETS,
    team: TeamEnum.KETCHUP,
    reponseProp: {
      propositions: [
        "",
        "",
        "",
        ""
      ],
      goodrep: 0
    }
  }],
};
