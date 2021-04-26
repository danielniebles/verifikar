import Controller from './Controller'
import OnboardingView from '../views/Onboarding'
import { getOnboardingTotalSteps } from '../model/resources'
import OnboardingModel from '../model/Onboarding'
import { getNavigationActionResponse } from './navigationHandler'
import { userProperties } from '../common/properties'

export default class Onboarding extends Controller {
  execute({ currentStep, formInputs }) {
    const questions = new OnboardingModel().getOnboardingQuestionsByStep(
      currentStep,
      formInputs
    )
    const totalSteps = getOnboardingTotalSteps()
    return new OnboardingView({ currentStep, totalSteps, questions })
  }
  navigateTo(view) {
    const card = view.render()
    return view.props.currentStep === '1'
      ? card
      : getNavigationActionResponse(card)
  }
}
