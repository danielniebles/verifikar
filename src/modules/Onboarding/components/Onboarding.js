import View from '../../Common/components/View'
import {
  createTextInputWidget,
  createSelectionInputWidget,
  createButtonWidget,
} from '../../utils'

export default class Onboarding extends View {
  get step() {
    return this.props.currentStep.toString()
  }

  get header() {
    return CardService.newCardHeader()
      .setTitle('Personaliza tu cuenta')
      .setSubtitle(`Paso ${this.step} de ${this.props.totalSteps}`)
  }

  get sections() {
    const { question } = this.props
    const finalSection = new CardService.newCardSection()

    const widgets = question.map(({ type, question, name, options }) => {
      return this.createWidgetByType(type, question, name, options)
    })

    widgets.forEach((w) => finalSection.addWidget(w))

    finalSection.addWidget(
      createButtonWidget({
        text: 'Continuar',
        styleType: 'FILLED',
        actionName:
          this.step !== this.props.totalSteps.toString()
            ? 'nextOnboardingStep'
            : 'loadTasksConfigHome',
        actionParams: { step: this.step },
      })
    )

    return finalSection
  }

  createWidgetByType(type, question, name, options) {
    const types = {
      text_input: (question, name) => {
        return createTextInputWidget({
          title: question,
          name: name,
        })
      },
      list_unique_option: (question, name, options) => {
        return createSelectionInputWidget({
          title: question,
          name: name,
          type: 'DROPDOWN',
          options,
        })
      },
      list_multiple_option: (question, name, options) => {
        return createSelectionInputWidget({
          title: question,
          name: name,
          type: 'CHECK_BOX',
          options,
        })
      },
    }
    return types[type](question, name, options)
  }
}
