import View from '../View'
import {
  createImageWidget,
  createButtonWidget,
  createDecoratedTextWidget,
  colorString,
  getThemeColor,
} from '../utils'

export default class OnGmailExecutedTask extends View {
  get header() {
    return CardService.newCardHeader().setTitle(' ')
  }

  get sections() {
    const section = new CardService.newCardSection()
      .addWidget(
        createImageWidget({
          url: 'https://uploads-ssl.webflow.com/5ea8c50bafc9df682df20c64/6095c5a817701c04ab548ef3_robot-success.png',
        })
      )
      .addWidget(
        createDecoratedTextWidget({
          text: colorString('¡Hooray! Tarea ejecutada.', getThemeColor()),
        })
      )

    return section
  }

  get footer() {
    const footer = CardService.newFixedFooter().setPrimaryButton(
      createButtonWidget({
        text: 'Volver a tareas',
        styleType: 'FILLED',
        actionName: 'onContext',
        actionParams: {},
      })
    )
    return footer
  }
}
