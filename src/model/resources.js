export function getWelcomeImages(key) {
  return urls.filter((item) => item['key'] === key)
}

export function getOnboardingQuestionsByStep(step) {
  return onBoarding.question.filter((item) => item['step'] === step)
}

export function getOnboardingTotalSteps() {
  return onBoarding.totalSteps
}

export const urls = [
  {
    key: 'welcome_screen_01',
    logoUrl:
      'https://uploads-ssl.webflow.com/5ea8c50bafc9df682df20c64/5fd1e22ce86c3bb12b333a2f_addon-logo.png',
    imageMainUrl:
      'https://uploads-ssl.webflow.com/5ea8c50bafc9df682df20c64/604f8a273359a6fc1b2987bc_compu-gmail.png',
    imageTextUrl:
      'https://uploads-ssl.webflow.com/5ea8c50bafc9df682df20c64/605bf68ffd96fb27249f97ec_welcome-texto-01.png',
    imageSliderUrl:
      'https://uploads-ssl.webflow.com/5ea8c50bafc9df682df20c64/605bf68e26af7124473324da_welcome-ellipse-01.png',
  },
  {
    key: 'welcome_screen_02',
    logoUrl:
      'https://uploads-ssl.webflow.com/5ea8c50bafc9df682df20c64/5fd1e22ce86c3bb12b333a2f_addon-logo.png',
    imageMainUrl:
      'https://uploads-ssl.webflow.com/5ea8c50bafc9df682df20c64/605b51072dc3d843cbf78424_Para-consultora-.png',
    imageTextUrl:
      'https://uploads-ssl.webflow.com/5ea8c50bafc9df682df20c64/605bf68f8db29e1f7c31ae59_welcome-texto-02.png',
    imageSliderUrl:
      'https://uploads-ssl.webflow.com/5ea8c50bafc9df682df20c64/605bf68e00bc00fe107a2024_welcome-ellipse-02.png',
  },
  {
    key: 'welcome_screen_03',
    logoUrl:
      'https://uploads-ssl.webflow.com/5ea8c50bafc9df682df20c64/5fd1e22ce86c3bb12b333a2f_addon-logo.png',
    imageMainUrl:
      'https://uploads-ssl.webflow.com/5ea8c50bafc9df682df20c64/605b3649c842fdd7817608de_pieza_tareas-en-automatico.png',
    imageTextUrl:
      'https://uploads-ssl.webflow.com/5ea8c50bafc9df682df20c64/605bf68f9ae484bddfc42e48_welcome-texto-03.png',
    imageSliderUrl:
      'https://uploads-ssl.webflow.com/5ea8c50bafc9df682df20c64/605bf68e926123c1f3da0936_welcome-ellipse-03.png',
  },
  {
    key: 'welcome_screen_04',
    logoUrl:
      'https://uploads-ssl.webflow.com/5ea8c50bafc9df682df20c64/5fd1e22ce86c3bb12b333a2f_addon-logo.png',
    imageMainUrl:
      'https://uploads-ssl.webflow.com/5ea8c50bafc9df682df20c64/6064e1685ec8ff54e159b688_Integracio%CC%81n.png',
    imageTextUrl:
      'https://uploads-ssl.webflow.com/5ea8c50bafc9df682df20c64/605bf68f7d81d16ba13d75be_welcome-texto-04.png',
    imageSliderUrl:
      'https://uploads-ssl.webflow.com/5ea8c50bafc9df682df20c64/605bf68e9c5d88ef4db5d6cb_welcome-ellipse-04.png',
  },
]

export const onBoarding = {
  status: 200,
  body: {
    documentId: '1a2b3c4d',
    totalSteps: '4',
    currentStep: '1',
    previousStep: [],
    question: [
      {
        question: 'Primer nombre',
        name: 'first_name',
        resource: '',
        type: 'text_input',
        value: '',
        step: '1',
        id: 'uuid-value',
        options: '',
      },
      {
        question: 'Apellido',
        name: 'last_name',
        resource: '',
        type: 'text_input',
        value: '',
        step: '1',
        id: 'uuid-value',
        options: '',
      },
      {
        question: 'Teléfono',
        name: 'phone',
        resource: '',
        type: 'text_input',
        value: '',
        step: '1',
        id: 'uuid-value',
        options: '',
      },
      {
        question: 'En qué país estás',
        name: 'location',
        resource: 'countries',
        type: 'list_unique_option',
        value: '',
        step: '1',
        id: 'uuid-value',
        options: [
          {
            name: 'Colombia',
            value: 'colombia',
            selected: false,
            id: 'uuid-value',
          },
          {
            name: 'México',
            value: 'mexico',
            selected: false,
            id: 'uuid-value',
          },
          {
            name: 'Perú',
            value: 'peru',
            selected: false,
            id: 'uuid-value',
          },
          {
            name: 'Brasil',
            value: 'brasil',
            selected: false,
            id: 'uuid-value',
          },
          {
            name: 'Chile',
            value: 'chile',
            selected: false,
            id: 'uuid-value',
          },
          {
            name: 'Argentina',
            value: 'argentina',
            selected: false,
            id: 'uuid-value',
          },
        ],
      },
      {
        question: '¿Cómo te describes mejor?',
        name: 'segment',
        resource: 'segments',
        type: 'list_multiple_option',
        value: '',
        step: '3',
        id: 'uuid-value',
        options: [
          {
            name: 'Una chimba',
            value: 'colombia',
            selected: false,
            id: 'uuid-value',
          },
          {
            name: 'Normalito',
            value: 'mexico',
            selected: false,
            id: 'uuid-value',
          },
        ],
      },
      {
        question: '¿Cuántas vacantes gestionas al mes?',
        name: 'volume',
        resource: 'volume',
        type: 'list_unique_option',
        value: '',
        step: '2',
        id: 'uuid-value',
        options: [
          {
            name: '1-10',
            value: 'upto10',
            selected: true,
            id: 'uuid-value',
          },
          {
            name: '11-50',
            value: 'upto50',
            selected: false,
            id: 'uuid-value',
          },
          {
            name: '51-100',
            value: 'upto100',
            selected: false,
            id: 'uuid-value',
          },
          {
            name: 'Más de 100',
            value: 'over100',
            selected: false,
            id: 'uuid-value',
          },
        ],
      },
      {
        question: '¿En qué idioma recibes hojas de vida?',
        name: 'languages',
        resource: 'languages',
        type: 'list_multiple_option',
        value: '',
        step: '3',
        id: 'uuid-value',
        options: [
          {
            name: 'Español',
            value: 'spanish',
            selected: true,
            id: 'uuid-value',
          },
          {
            name: 'Inglés',
            value: 'english',
            selected: false,
            id: 'uuid-value',
          },
          {
            name: 'Portugues',
            value: 'portuguese',
            selected: false,
            id: 'uuid-value',
          },
          {
            name: 'Otro',
            value: 'other',
            selected: false,
            id: 'uuid-value',
          },
        ],
      },
      {
        question: '¿Qué tareas haces en tu día a día?',
        name: 'manualTasks',
        resource: 'manualTasks',
        type: 'list_multiple_option',
        value: '',
        step: '4',
        id: 'uuid-value',
        options: [
          {
            name: 'Nada xd',
            value: 'other',
            selected: false,
            id: 'uuid-value',
          },
        ],
      },
    ],
    unique: true,
  },
}
