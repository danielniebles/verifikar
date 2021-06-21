import View from '../../Common/components/View'
import {
  createDecoratedTextWidget,
  createIconImageFromUrl,
  createIconImage,
} from '../../utils'
import { HEADERS } from '../../constants'

export default class TasksHome extends View {
  get header() {
    return CardService.newCardHeader()
      .setTitle(HEADERS.EMPTY)
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
            actionName: 'loadComposeTaskMain',
            actionParams: { taskName, displayName, name, id },
          },
        })
      )
    })
    return section
  }
}
