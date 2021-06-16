import HttpClient from '../../Common/services/HttpClient'
import { formatBackendUrl } from '../../utils'
import { userProperties } from '../../Common/services/properties'

export default class Onboarding {
  static getOnboardingQuestionsByStep(step, formAnswers) {
    const httpClient = new HttpClient()
    const body = this.handleOnboardingRequest(step, formAnswers)
    const url = formatBackendUrl('forms')
    const response = httpClient.execute(url, body)

    const { question, currentStep, totalSteps, id } = JSON.parse(
      response.getContentText()
    )
    userProperties.set('onboardingDocumentId', id)
    userProperties.set('previousQuestion', question)
    return { question, currentStep, totalSteps }
  }

  static buildAnsweredQuestion(questions, answers) {
    const answeredQuestion = questions.map(({ id, name, value }) => {
      value = answers[name]
      return { id, value }
    })
    return answeredQuestion
  }

  static handleOnboardingRequest(step, formAnswers) {
    var user = Session.getActiveUser().getEmail()
    if (step === '1') {
      const payload = {
        name: 'onboarding_data',
        user,
      }
      const body = {
        method: 'post',
        payload,
      }
      return body
    } else {
      const previousQuestion = userProperties.get('previousQuestion')
      const documentId = userProperties.get('onboardingDocumentId')
      const answeredQuestion = this.buildAnsweredQuestion(
        previousQuestion,
        formAnswers
      )
      const payload = {
        name: 'onboarding_data',
        user,
        documentId,
        answeredQuestion,
      }

      const body = {
        method: 'patch',
        contentType: 'application/json',
        payload: JSON.stringify(payload),
      }
      return body
    }
  }
}
