import HttpClient from './HttpClient'
import { onBoarding } from './resources'
import { userProperties } from '../common/properties'

export default class Onboarding {
  constructor() {
    this.httpClient = new HttpClient()
  }

  getOnboardingQuestionsByStep(step, formAnswers) {
    const body = this.handleOnboardingRequest(step, formAnswers)
    const questionsByStep = onBoarding.body.question.filter(
      (item) => item['step'] === step
    )

    if (!userProperties.get('onboardingDocumentId')) {
      const id = onBoarding.body.documentId
      userProperties.set('onboardingDocumentId', id)
    }
    userProperties.set('onBoardingQuestionsCache', questionsByStep)

    const url = 'https://3c82036b8eef.ngrok.io/forms'
    //const response = this.httpClient.execute(url, body)
    console.log(JSON.stringify(body))
    return questionsByStep
  }

  buildAnsweredQuestion(questions, answers) {
    const answeredQuestion = questions.map((question) => {
      question['value'] = answers[`${question['name']}`]
      return { id: question['id'], value: question['value'] }
    })
    return answeredQuestion
  }

  handleOnboardingRequest(step, formAnswers) {
    if (step === '1') {
      const payload = {
        name: 'onboarding_data',
        user: 'jager.niebles@gmail.com',
      }
      const body = {
        method: 'post',
        payload,
      }
      return body
    } else {
      const previousQuestion = userProperties.get('onBoardingQuestionsCache')
      const documentId = userProperties.get('onboardingDocumentId')
      const answeredQuestion = this.buildAnsweredQuestion(
        previousQuestion,
        formAnswers
      )
      const body = {
        method: 'patch',
        payload: { documentId, answeredQuestion },
      }
      return body
    }
  }
}
