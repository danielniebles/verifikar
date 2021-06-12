import View from './View'
import {
  createSelectionInputWidget,
  createButtonWidget,
  createButtonSetWidget,
} from './utils'

export default class AttachmentsList extends View {
  get header() {
    const { parameters } = this.props
    const { taskName, displayName } = parameters
    return CardService.newCardHeader()
      .setTitle(`<b>${taskName}</b>`)
      .setSubtitle(displayName)
  }

  get sections() {
    const section = new CardService.newCardSection()
    const { attachments, folderId } = this.props

    section.addWidget(
      createSelectionInputWidget({
        title: 'Selecciona los adjuntos',
        name: 'selectedAttachments',
        type: 'CHECK_BOX',
        options: attachments.map((attachment) => attachment.getName()),
      })
    )

    const submitButton = createButtonWidget({
      text: 'Ejecutar',
      styleType: 'FILLED',
      actionName: 'submitDriveTask',
      actionParams: { folderId },
    })

    const cancelButton = createButtonWidget({
      text: 'Cancelar',
      styleType: 'TEXT',
      actionName: 'onContext',
      actionParams: {},
    })

    section.addWidget(createButtonSetWidget([submitButton, cancelButton]))
    return section
  }
}
