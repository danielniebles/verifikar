import Controller from './Controller'
import OnboardingView from '../views/Onboarding'
import OnboardingModel from '../model/Onboarding'
import TaskConfigListView from '../views/TaskConfigList'
import { getNavigationActionResponse } from './navigationHandler'
import { userProperties } from '../common/properties'

export default class Onboarding extends Controller {
  execute({ step, formInputs }) {
    userProperties.remove('currentTaskTemplate')
    userProperties.remove('currentConfigTaskName')

    const { question, currentStep, totalSteps } =
      new OnboardingModel().getOnboardingQuestionsByStep(step, formInputs)

    return currentStep.toString() !== '4'
      ? new OnboardingView({ question, currentStep, totalSteps })
      : new TaskConfigListView()
  }
  navigateTo(view) {
    const card = view.render()
    return view.props.step === '1' ? card : getNavigationActionResponse(card)
  }
}
