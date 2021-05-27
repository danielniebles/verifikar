import View from '../View'
import {
  createTextInputWidget,
  createDecoratedTextWidget,
  createButtonWidget,
  createIconImageFromUrl,
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
    const finalSections = []
    const { variables } = this.props.taskTemplate

    const variablesToRender = variables.filter(
      (variable) => variable['visible'] === true
    )

    variablesToRender.forEach((variable) => {
      if (variable['header']) {
        let section = new CardService.newCardSection()
        section.setHeader(colorString(variable['header'], getThemeColor()))
        section.addWidget(this.createTaskWidgetByType(variable))
        finalSections.push(section)
      } else {
        finalSections[finalSections.length - 1].addWidget(
          this.createTaskWidgetByType(variable)
        )
      }
    })

    // section.addWidget(
    //   createButtonWidget({
    //     text: this.props.folderName ? 'Guardar' : 'Cancelar',
    //     styleType: 'FILLED',
    //     actionName: this.props.folderName ? 'saveTask' : 'loadNextDrive',
    //     actionParams: this.props.folderName
    //       ? {
    //           folderName: this.props.folderName,
    //           folderId: this.props.folderId,
    //         }
    //       : {},
    //   })
    // )
    return finalSections
  }

  createTaskWidgetByType({ type, question, variableName, widget }) {
    const types = {
      text_input: ({ question, variableName }) => {
        console.log(variableName)
        return createTextInputWidget({
          title: question,
          name: variableName,
          multiline: true,
        })
      },
      decorated_text: ({ widget }) => {
        const { text } = widget
        return createDecoratedTextWidget({
          text,
        })
      },
    }
    return types[type]({ question, variableName, widget })
  }
}
