import View from './View'
import {
  createDecoratedTextWidget,
  createIconImageFromUrl,
  createIconImage,
} from './utils'

export default class TasksHome extends View {
  get header() {
    return CardService.newCardHeader()
      .setTitle(`<b>${this.props.subject}</b>`)
      .setSubtitle(`From: ${this.props.sender}`)
  }

  get sections() {
    const { tasksList } = this.props
    const section = new CardService.newCardSection()

    tasksList.forEach((task) => {
      // This is required to sent correct task name to AttachmentsList
      const { taskName, folderName, folderId, taskId } = task
      const fixedTaskName = taskName[0]

      section.addWidget(
        createDecoratedTextWidget({
          text: taskName[0],
          bottomLabel: 'Guardar adjunto en Carpeta',
          startIcon: createIconImageFromUrl({
            url:
              'https://uploads-ssl.webflow.com/5ea8c50bafc9df682df20c64/605f888657d00c6bf8055ca8_Drive.png',
            type: 'SQUARE',
          }),
          endIcon: createIconImage({
            icon: CardService.Icon.VIDEO_PLAY,
            type: 'SQUARE',
          }),
          action: {
            actionName: 'loadAttachmentList',
            actionParams: { fixedTaskName, folderName, folderId, taskId },
          },
        })
      )
    })
    section.addWidget(
      createDecoratedTextWidget({
        text: 'Configurar tarea nueva',
        action: { actionName: 'loadTasksConfigList', actionParams: {} },
      })
    )
    return section
  }
}
