import View from './View'
import {
  createImageWidget,
  createButtonWidget,
  createDecoratedTextWidget,
} from './utils'

export default class OnSavedTask extends View {
  get header() {
    return CardService.newCardHeader().setTitle(' ')
  }

  get sections() {
    const section = new CardService.newCardSection()
      .addWidget(
        createImageWidget({
          url:
            'https://uploads-ssl.webflow.com/5ea8c50bafc9df682df20c64/605b51072dc3d843cbf78424_Para-consultora-.png',
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
