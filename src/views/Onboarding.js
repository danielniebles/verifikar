import View from './View'
import {
  createTextInputWidget,
  createSelectionInputWidget,
  createButtonWidget,
} from './utils'

export default class Onboarding extends View {
  get currentStep() {
    return this.props.currentStep
  }

  get header() {
    return CardService.newCardHeader()
      .setTitle('Personaliza tu cuenta')
      .setSubtitle(`Paso ${this.currentStep} de ${this.props.totalSteps}`)
  }

  get sections() {
    const { questions } = this.props
    const finalSection = new CardService.newCardSection()

    const widgets = questions.map((question) => {
      if (question['type'] === 'text_input')
        return createTextInputWidget({
          title: question['question'],
          name: question['name'],
        })
      if (question['type'] === 'list_unique_option')
        return createSelectionInputWidget({
          title: question['question'],
          name: question['name'],
          type: 'DROPDOWN',
          options: question['options'].map((o) => o['name']),
        })
      if (question['type'] === 'list_multiple_option')
        return createSelectionInputWidget({
          title: question['question'],
          name: question['name'],
          type: 'CHECK_BOX',
          options: question['options'].map((o) => o['name']),
        })
    })

    widgets.forEach((w) => finalSection.addWidget(w))

    finalSection.addWidget(
      createButtonWidget({
        text: 'Continuar',
        styleType: 'FILLED',
        actionName: 'nextOnboardingStep',
        actionParams: { currentStep: this.currentStep },
      })
    )

    return finalSection
  }
}
