import View from '../View'
import {
  createImageWidget,
  createButtonWidget,
  createDecoratedTextWidget,
  colorString,
  getThemeColor,
} from '../utils'

export default class OnSavedTask extends View {
  get header() {
    return CardService.newCardHeader().setTitle(' ')
  }

  get sections() {
    const section = new CardService.newCardSection()
      .addWidget(
        createImageWidget({
          url: 'https://uploads-ssl.webflow.com/5ea8c50bafc9df682df20c64/605b36484b644d06fbb7c6ba_pieza_excelente-tu-tarea-p-500.png',
        })
      )
      .addWidget(
        createDecoratedTextWidget({
          text: colorString(
            '<b>Excelente! Tu tarea ha sido configurada.</b>',
            getThemeColor()
          ),
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
