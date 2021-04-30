import { pickColor } from './Colors'
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
    .setFieldName(name)
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

export function createDecoratedTextWidget({
  text,
  topLabel,
  bottomLabel,
  startIcon,
  endIcon,
}) {
  const decoratedText = new CardService.newDecoratedText()

  if (text) decoratedText.setText(text)
  if (topLabel) decoratedText.setBottomLabel(topLabel)
  if (bottomLabel) decoratedText.setBottomLabel(bottomLabel)
  if (startIcon) decoratedText.setStartIcon(startIcon)
  if (endIcon) decoratedText.setEndIcon(endIcon)

  return decoratedText
}

export function createIconImageFromUrl({ url, type }) {
  const finalType =
    type === 'CIRCLE'
      ? CardService.ImageCropType.CIRCLE
      : CardService.ImageCropType.SQUARE
  return new CardService.newIconImage()
    .setIconUrl(url)
    .setImageCropType(finalType)
}

export function getThemeColor() {
  return pickColor('mainYellow')
}

export function colorString(string = '-', hexColor = '#000000') {
  return `<font color="${hexColor}">${string}</font>`
}
