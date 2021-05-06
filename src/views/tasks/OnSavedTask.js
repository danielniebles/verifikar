import View from '../View'
import { createImageWidget, createButtonWidget } from '../utils'

export default class OnSavedTask extends View {
  get header() {
    return CardService.newCardHeader().setTitle(' ')
  }

  get sections() {
    const section = new CardService.newCardSection().addWidget(
      createImageWidget({
        url:
          'https://uploads-ssl.webflow.com/5ea8c50bafc9df682df20c64/605b51072dc3d843cbf78424_Para-consultora-.png',
      })
    )

    return section
  }

  get footer() {
    const footer = CardService.newFixedFooter().setPrimaryButton(
      createButtonWidget({
        text: 'Volver al inicio',
        styleType: 'FILLED',
        actionName: 'loadTasksConfigList',
        actionParams: {},
      })
    )
    return footer
  }
}
