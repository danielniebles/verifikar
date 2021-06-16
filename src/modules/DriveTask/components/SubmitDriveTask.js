import View from '../../Common/components/View'
import {
  createImageWidget,
  createButtonWidget,
  createDecoratedTextWidget,
  colorString,
  getThemeColor,
} from '../../utils'

export default class SubmitDriveTask extends View {
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
      .addWidget(
        createDecoratedTextWidget({
          text: `<b>${this.props.savedAttachmentsCount} adjuntos fueron guardados en la carpeta</b>`,
        })
      )
      .addWidget(
        createButtonWidget({
          text: 'Ir a carpeta',
          link: `https://drive.google.com/drive/u/1/folders/${this.props.folderId}`,
          styleType: 'FILLED',
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
