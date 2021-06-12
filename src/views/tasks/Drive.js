import View from '../View'
import {
  createTextInputWidget,
  createDecoratedTextWidget,
  createButtonWidget,
  createIconImageFromUrl,
} from '../utils'

export default class Drive extends View {
  get header() {
    const { displayName } = this.props.taskTemplate
    return CardService.newCardHeader()
      .setTitle(displayName)
      .setSubtitle('Configuracion')
  }

  get sections() {
    const section = new CardService.newCardSection()
    const { variables } = this.props.taskTemplate

    const variablesToRender = variables.filter(
      (variable) => variable['visible'] === true
    )

    const widgets = variablesToRender.map((variable) => {
      return this.createTaskWidgetByType(variable)
    })

    widgets.forEach((w) => section.addWidget(w))

    section.addWidget(
      createButtonWidget({
        text: this.props.folderName ? 'Guardar' : 'Cancelar',
        styleType: 'FILLED',
        actionName: this.props.folderName ? 'saveTask' : 'loadNextDrive',
        actionParams: this.props.folderName
          ? {
              folderName: this.props.folderName,
              folderId: this.props.folderId,
            }
          : {},
      })
    )
    return section
  }

  createTaskWidgetByType({ type, question, variableName, widget }) {
    const types = {
      text_input: ({ question, variableName }) => {
        return createTextInputWidget({
          title: question,
          name: variableName,
          value: this.props.taskName ? this.props.taskName : '',
        })
      },
      decorated_text: ({ widget }) => {
        const { topLabel, text, resource } = widget
        return createDecoratedTextWidget({
          text: this.props.folderName
            ? `<b>${this.props.folderName}</b>`
            : text,
          topLabel: topLabel,
          endIcon: createIconImageFromUrl({
            url: resource,
            type: 'SQUARE',
          }),
          action: {
            actionName: 'continueToDriveFolders',
            actionParams: {},
          },
        })
      },
    }
    return types[type]({ question, variableName, widget })
  }
}
