export function createAction(actionName, actionParams) {
  return CardService.newAction()
    .setFunctionName(actionName)
    .setParameters(actionParams)
}

export function createButtonWidget(params) {
  const { text, styleType, actionName, actionParams } = params
  const style =
    styleType === 'TEXT'
      ? CardService.TextButtonStyle.TEXT
      : CardService.TextButtonStyle.FILLED
  return CardService.newTextButton()
    .setText(text)
    .setTextButtonStyle(style)
    .setOnClickAction(createAction(actionName, actionParams))
}

export function createImageWidget({ url }) {
  return CardService.newImage().setImageUrl(url)
}

export function createTextInputWidget({ title, name }) {
  return CardService.newTextInput().setFieldName(`${name}`).setTitle(title)
}

export function createSelectionInputWidget({ title, name, type, options }) {
  let selectionInput = CardService.newSelectionInput()
    .setFieldName(`${name}`)
    .setTitle(title)

  const finalType =
    type === 'DROPDOWN'
      ? CardService.SelectionInputType.DROPDOWN
      : type === 'RADIO_BUTTON'
      ? CardService.SelectionInputType.RADIO_BUTTON
      : CardService.SelectionInputType.CHECK_BOX

  selectionInput.setType(finalType)

  options.forEach((option) => selectionInput.addItem(option, option, false))

  return selectionInput
}
