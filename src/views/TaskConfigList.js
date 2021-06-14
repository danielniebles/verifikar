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
    console.log('Hi from view')
    const { tasksConfigList } = this.props
    const { plan, usedTask, tasks } = tasksConfigList
    const mainHeader = new CardService.newCardSection().addWidget(
      createDecoratedTextWidget({
        text: colorString('0 de 100 tareas usadas', getThemeColor()),
        bottomLabel: `Plan ${plan}`,
        startIcon: createIconImageFromUrl({
          url: 'https://uploads-ssl.webflow.com/5ea8c50bafc9df682df20c64/6095c57917701c0154548e5b_time-icon.png',
          type: 'CIRCLE',
        }),
      })
    )
    const body = new CardService.newCardSection().setHeader(
      colorString('Que tareas quieres configurar?', getThemeColor())
    )

    tasks.forEach(({ name, displayName, total, iconUrl }) => {
      body.addWidget(
        createDecoratedTextWidget({
          text: displayName,
          bottomLabel: `${total} tareas configuradas`,
          startIcon: createIconImageFromUrl({
            url: iconUrl,
            type: 'SQUARE',
          }),
          endIcon: createIconImageFromUrl({
            url: 'https://www.gstatic.com/images/icons/material/system/1x/keyboard_arrow_right_black_48dp.png',
            type: 'SQUARE',
          }),
          action: {
            actionName: 'loadTaskConfiguration',
            actionParams: { name },
          },
        })
      )
    })
    return [mainHeader, body]
  }
}
