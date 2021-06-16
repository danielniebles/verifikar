import View from '../../Common/components/View'
import {
  createDecoratedTextWidget,
  createIconImageFromUrl,
  createIconImage,
} from '../../utils'

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
      const { taskName, iconUrl, displayName, name, id } = task

      section.addWidget(
        createDecoratedTextWidget({
          text: taskName,
          bottomLabel: displayName,
          startIcon: createIconImageFromUrl({
            url: iconUrl,
            type: 'SQUARE',
          }),
          endIcon: createIconImage({
            icon: CardService.Icon.VIDEO_PLAY,
            type: 'SQUARE',
          }),
          action: {
            actionName: 'loadAttachmentList',
            actionParams: { taskName, displayName, name, id },
          },
        })
      )
    })
    section.addWidget(
      createDecoratedTextWidget({
        text: 'Configurar tarea nueva',
        action: { actionName: 'loadTasksConfigHome', actionParams: {} },
      })
    )
    return section
  }
}
