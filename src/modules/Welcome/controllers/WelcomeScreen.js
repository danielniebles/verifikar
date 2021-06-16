import WelcomeScreenView from '../components/WelcomeScreen'
import Controller from '../../Common/controllers/Controller'
import OnboardingService from '../../Onboarding/services/Onboarding'
import TasksConfigurationHomeService from '../../TasksConfigurationHome/services/TasksConfigurationHome'
import TasksConfigurationHomeView from '../../TasksConfigurationHome/components/TasksConfigurationHome'
import { userProperties } from '../../Common/services/properties'
import { getWelcomeImages } from '../../../model/resources'
import { CACHE_KEYS } from '../../constants'

export default class WelcomeScreen extends Controller {
  execute(welcomeScreenStep) {
    userProperties.remove(CACHE_KEYS.CURRENT_CONFIG_TASK_ID)
    userProperties.remove(CACHE_KEYS.CURRENT_CONFIG_TASK_NAME)
    userProperties.remove(CACHE_KEYS.CURRENT_TASK_TEMPLATE)

    const { currentStep, totalSteps } =
      OnboardingService.getOnboardingQuestionsByStep('1', [])

    if (currentStep === totalSteps) {
      const tasksConfigList = TasksConfigurationHomeService.getTasksConfigList()
      return new TasksConfigurationHomeView({ tasksConfigList })
    } else {
      const response = getWelcomeImages(`welcome_screen_0${welcomeScreenStep}`)
      const { logoUrl, imageMainUrl, imageTextUrl, imageSliderUrl } =
        response[0]
      return new WelcomeScreenView({
        welcomeScreenStep,
        logoUrl,
        imageMainUrl,
        imageTextUrl,
        imageSliderUrl,
      })
    }
  }

  navigateTo(view) {
    return view.render()
  }
}
