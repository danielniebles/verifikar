import View from '../../Common/components/View'
import { BUTTON_TEXT, BUTTON_STYLES, HEADERS } from '../../../common/constants'
import { createImageWidget, createButtonWidget } from '../../utils'

export default class WelcomeScreen extends View {
  get currentStep() {
    return this.props.welcomeScreenStep
  }
  get header() {
    return CardService.newCardHeader().setTitle(HEADERS.EMPTY)
  }
  get footer() {
    const mainFooter = CardService.newFixedFooter()
      .setPrimaryButton(
        createButtonWidget({
          text: BUTTON_TEXT.NEXT,
          styleType: BUTTON_STYLES.FILLED,
          actionName: 'nextWelcomeScreenStep',
          actionParams: { currentStep: this.currentStep },
        })
      )
      .setSecondaryButton(
        createButtonWidget({
          text: BUTTON_TEXT.SKIP,
          styleType: BUTTON_STYLES.TEXT,
          actionName: 'loadOnboarding',
          actionParams: {},
        })
      )

    const lastFooter = CardService.newFixedFooter().setPrimaryButton(
      createButtonWidget({
        text: BUTTON_TEXT.CONTINUE,
        styleType: BUTTON_STYLES.FILLED,
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
