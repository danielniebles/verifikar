import View from './View'
import {
  createDecoratedTextWidget,
  createIconImageFromUrl,
  colorString,
  getThemeColor,
} from './utils'
import { getTaskList } from '../model/resources'

export default class TaskConfigList extends View {
  get header() {
    return CardService.newCardHeader().setTitle(' ')
  }

  get sections() {
    const mainHeader = new CardService.newCardSection().addWidget(
      createDecoratedTextWidget({
        text: colorString('0 de 100 tareas usadas', getThemeColor()),
        bottomLabel: 'Plan gratis',
        startIcon: createIconImageFromUrl({
          url:
            'https://uploads-ssl.webflow.com/5ea8c50bafc9df682df20c64/605f888657d00c6bf8055ca8_Drive.png',
          type: 'CIRCLE',
        }),
      })
    )

    const tasksList = getTaskList()

    const body = new CardService.newCardSection().setHeader(
      colorString('Que tareas quieres configurar?', getThemeColor())
    )

    tasksList.forEach(
      ({ text, bottomLabel, startIconUrl, endIconUrl, taskId }) => {
        body.addWidget(
          createDecoratedTextWidget({
            text,
            bottomLabel,
            startIcon: createIconImageFromUrl({
              url: startIconUrl,
              type: 'SQUARE',
            }),
            endIcon: createIconImageFromUrl({
              url: endIconUrl,
              type: 'SQUARE',
            }),
            action: {
              actionName: 'loadTaskConfiguration',
              actionParams: { taskId },
            },
          })
        )
      }
    )
    return [mainHeader, body]
  }
}
