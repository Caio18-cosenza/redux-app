const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: '1',
      title: 'Iniciando com React Native',
      lessons: [
        {
          id: '1',
          title: 'Introdução ao React',
        },
        {
          id: '2',
          title: 'Configurações de ambiente',
        },
      ],
    },
    {
      id: '2',
      title: 'Começando com Expo Cli',
      lessons: [
        {
          id: '1',
          title: 'O que é Expo? E para que serve?',
        },
        {
          id: '2',
          title: 'Usando o Expo com React Native + Typescript',
        },
      ],
    },
  ],
};

export function course(state = INITIAL_STATE, action: any) {
  if (action.type === 'TOGGLE_LESSON') {
    return {
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module,
    };
  }
  return state;
}
