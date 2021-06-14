import View from '../View'
import {
  createTextInputWidget,
  createDecoratedTextWidget,
  createButtonWidget,
  createIconImageFromUrl,
  createSelectionInputWidget,
  colorString,
  getThemeColor,
} from '../utils'

export default class Drive extends View {
  get header() {
    const { displayName } = this.props.taskTemplate
    return CardService.newCardHeader()
      .setTitle(displayName)
      .setSubtitle('Configuracion')
  }

  get sections() {
    let section = new CardService.newCardSection()
    const { variables } = this.props.taskTemplate

    if (this.props.type) {
      variables.forEach((variable) => {
        if (variable['variableName'] === 'type') {
          variable['options'].forEach((option) => {
            option['selected'] =
              option['name'] === this.props.type ? true : false
          })
        }
      })
    }

    const variablesToRender = variables.filter(
      (variable) => variable['visible'] === true
    )

    variablesToRender.forEach((variable) => {
      section.addWidget(this.createTaskWidgetByType(variable))
    })

    section.addWidget(
      createButtonWidget({
        text: 'Guardar',
        styleType: 'FILLED',
        actionName: 'saveGmailComposeTask',
        actionParams: {},
      })
    )
    return section
  }

  createTaskWidgetByType({ type, question, variableName, widget, options }) {
    const types = {
      text_input: ({ question, variableName }) => {
        return createTextInputWidget({
          title: question,
          name: variableName,
          value: this.props.taskName ?? '',
        })
      },
      text_input_multiple: ({ question, variableName }) => {
        return createTextInputWidget({
          title: question,
          name: variableName,
          multiline: true,
          value: this.props.type ? this.getTemplate() : null,
        })
      },
      decorated_text: ({ widget }) => {
        const { text } = widget
        return createDecoratedTextWidget({
          text,
        })
      },
      list_unique_option: ({ question, variableName, options }) => {
        return createSelectionInputWidget({
          title: question,
          name: variableName,
          type: 'DROPDOWN',
          options: options,
          action: {
            actionName: 'onSelectedTemplate',
            actionParams: {},
          },
        })
      },
    }
    return types[type]({ question, variableName, widget, options })
  }

  getTemplate() {
    const { variables } = this.props.taskTemplate
    const templates = variables.filter(
      (variable) => variable['variableName'] === 'template'
    )

    const finalTemplate = templates[0]['options'].filter((template) => {
      return template['name'] === this.props.type
    })

    return finalTemplate[0]['message']
  }
}
