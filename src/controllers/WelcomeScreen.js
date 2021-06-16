import WelcomeScreenView from '../views/WelcomeScreen'
import Controller from './Controller'
import OnboardingService from '../services/Onboarding'
import TasksConfigurationHomeService from '../services/TasksConfigurationHome'
import TasksConfigurationHomeView from '../views/TasksConfigurationHome'
import { getWelcomeImages } from '../model/resources'

export default class WelcomeScreen extends Controller {
  execute(welcomeScreenStep) {
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
