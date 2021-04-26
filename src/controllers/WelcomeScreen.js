import WelcomeScreenView from '../views/WelcomeScreen'
import Controller from './Controller'
import { getNavigationActionResponse } from './navigationHandler'
import { getWelcomeImages } from '../model/resources'

export default class extends Controller {
  execute(currentStep) {
    const response = getWelcomeImages(`welcome_screen_0${currentStep}`)
    const { logoUrl, imageMainUrl, imageTextUrl, imageSliderUrl } = response[0]

    return new WelcomeScreenView({
      currentStep,
      logoUrl,
      imageMainUrl,
      imageTextUrl,
      imageSliderUrl,
    })
  }

  navigateTo(view) {
    const card = view.render()
    return view.props.currentStep === '1'
      ? card
      : getNavigationActionResponse(card)
  }
}
