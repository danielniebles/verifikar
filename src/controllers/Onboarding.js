import Controller from './Controller'
import OnboardingView from '../views/Onboarding'
import OnboardingService from '../services/Onboarding'
import { CACHE_KEYS } from '../common/constants'
import TasksConfigurationHomeService from '../services/TasksConfigurationHome'
import TasksConfigurationHomeView from '../views/TasksConfigurationHome'
import { userProperties } from '../common/properties'

export default class Onboarding extends Controller {
  execute() {
    userProperties.remove(CACHE_KEYS.CURRENT_TASK_TEMPLATE)
    userProperties.remove(CACHE_KEYS.CURRENT_CONFIG_TASK_NAME)

    const {
      formInputs,
      parameters: { step },
    } = this.event
    const nextOnboardingStep = step ? (parseInt(step) + 1).toString() : '1'

    const { question, currentStep, totalSteps } =
      OnboardingService.getOnboardingQuestionsByStep(
        nextOnboardingStep,
        formInputs
      )

    if (currentStep === totalSteps) {
      const tasksConfigList = TasksConfigurationHomeService.getTasksConfigList()
      return new TasksConfigurationHomeView({ tasksConfigList })
    } else {
      return new OnboardingView({ question, currentStep, totalSteps })
    }
  }
  navigateTo(view) {
    return view.render()
  }
}
