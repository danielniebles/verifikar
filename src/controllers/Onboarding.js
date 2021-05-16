import Controller from './Controller'
import OnboardingView from '../views/Onboarding'
import OnboardingModel from '../model/Onboarding'
import TasksConfigListModel from '../model/TasksConfigList'
import TaskConfigListView from '../views/TaskConfigList'
import { getNavigationActionResponse } from './navigationHandler'
import { userProperties } from '../common/properties'

export default class Onboarding extends Controller {
  execute({ step, formInputs }) {
    userProperties.remove('currentTaskTemplate')
    userProperties.remove('currentConfigTaskName')

    const { question, currentStep, totalSteps } =
      new OnboardingModel().getOnboardingQuestionsByStep(step, formInputs)

    if (currentStep === totalSteps) {
      const tasksConfigList = new TasksConfigListModel().getTasksConfigList()
      return new TaskConfigListView({ tasksConfigList })
    } else {
      return new OnboardingView({ question, currentStep, totalSteps })
    }
  }
  navigateTo(view) {
    const card = view.render()
    return view.props.step === '1' ? card : getNavigationActionResponse(card)
  }
}
