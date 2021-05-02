import Controller from './Controller'
import OnboardingView from '../views/Onboarding'
import OnboardingModel from '../model/Onboarding'
import { getNavigationActionResponse } from './navigationHandler'
import { userProperties } from '../common/properties'

export default class Onboarding extends Controller {
  execute({ step, formInputs }) {
    const {
      question,
      currentStep,
      totalSteps,
    } = new OnboardingModel().getOnboardingQuestionsByStep(step, formInputs)
    return new OnboardingView({ question, currentStep, totalSteps })
  }
  navigateTo(view) {
    const card = view.render()
    return view.props.step === '1' ? card : getNavigationActionResponse(card)
  }
}
