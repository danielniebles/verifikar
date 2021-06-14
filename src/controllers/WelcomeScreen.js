import WelcomeScreenView from '../views/WelcomeScreen'
import Controller from './Controller'
import OnboardingModel from '../model/Onboarding'
import TasksConfigListModel from '../model/TasksConfigList'
import TaskConfigListView from '../views/TaskConfigList'
import { getWelcomeImages } from '../model/resources'

export default class WelcomScreen extends Controller {
  execute(welcomeScreenStep) {
    const { currentStep, totalSteps } =
      new OnboardingModel().getOnboardingQuestionsByStep('1', [])

    if (currentStep === totalSteps) {
      const tasksConfigList = new TasksConfigListModel().getTasksConfigList()
      return new TaskConfigListView({ tasksConfigList })
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
