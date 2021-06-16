import View from '../../Common/components/View'
import {
  createTextInputWidget,
  createButtonSetWidget,
  createButtonWidget,
} from '../../utils'

export default class EditTemplate extends View {
  get header() {
    const {
      parameters: { taskName, displayName },
    } = this.props
    return CardService.newCardHeader()
      .setTitle(`<b>${taskName}</b>`)
      .setSubtitle(displayName)
  }

  get sections() {
    const section = new CardService.newCardSection()

    section.addWidget(
      createTextInputWidget({
        title: 'Mensaje',
        name: 'message',
        value: this.props.template,
        multiline: true,
      })
    )

    const submitButton = createButtonWidget({
      text: 'Ejecutar',
      styleType: 'FILLED',
      actionName: 'submitGmailTask',
      actionParams: {},
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
