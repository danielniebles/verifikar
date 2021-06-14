import View from './View'
import { createImageWidget, createButtonWidget } from './utils'

export default class WelcomeScreen extends View {
  get currentStep() {
    return this.props.welcomeScreenStep
  }
  get header() {
    return CardService.newCardHeader().setTitle(' ')
  }
  get footer() {
    const mainFooter = CardService.newFixedFooter()
      .setPrimaryButton(
        createButtonWidget({
          text: 'Siguiente',
          styleType: 'FILLED',
          actionName: 'nextSlide',
          actionParams: { currentStep: this.currentStep },
        })
      )
      .setSecondaryButton(
        createButtonWidget({
          text: 'Omitir',
          styleType: 'TEXT',
          actionName: 'loadOnboarding',
          actionParams: {},
        })
      )

    const lastFooter = CardService.newFixedFooter().setPrimaryButton(
      createButtonWidget({
        text: 'Continuar',
        styleType: 'FILLED',
        actionName: 'loadOnboarding',
        actionParams: {},
      })
    )
    return parseInt(this.currentStep) < 4 ? mainFooter : lastFooter
  }

  get sections() {
    const { logoUrl, imageMainUrl, imageTextUrl, imageSliderUrl } = this.props
    const section = new CardService.newCardSection()
      .addWidget(createImageWidget({ url: logoUrl }))
      .addWidget(createImageWidget({ url: imageMainUrl }))
      .addWidget(createImageWidget({ url: imageTextUrl }))
      .addWidget(createImageWidget({ url: imageSliderUrl }))
    return section
  }
}
