import Controller from '../../Common/controllers/Controller'
import OnboardingView from '../components/Onboarding'
import OnboardingService from '../services/Onboarding'
import { CACHE_KEYS } from '../../constants'
import TasksConfigurationHomeService from '../../TasksConfigurationHome/services/TasksConfigurationHome'
import TasksConfigurationHomeView from '../../TasksConfigurationHome/components/TasksConfigurationHome'
import { userProperties } from '../../Common/services/properties'

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
