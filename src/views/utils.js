import { pickColor } from './Colors'

export function createAction(actionName, actionParams) {
  return CardService.newAction()
    .setFunctionName(actionName)
    .setParameters(actionParams)
}

export function createButtonWidget({
  text,
  styleType,
  actionName,
  actionParams,
  link,
}) {
  const style =
    styleType === 'TEXT'
      ? CardService.TextButtonStyle.TEXT
      : CardService.TextButtonStyle.FILLED
  const button = CardService.newTextButton()
    .setText(text)
    .setTextButtonStyle(style)

  if (actionName)
    button.setOnClickAction(createAction(actionName, actionParams))
  if (link)
    button.setOpenLink(
      CardService.newOpenLink()
        .setUrl(link)
        .setOpenAs(CardService.OpenAs.FULL_SIZE)
        .setOnClose(CardService.OnClose.NOTHING)
    )

  return button
}

export function createImageWidget({ url }) {
  return CardService.newImage().setImageUrl(url)
}

export function createTextInputWidget({
  title,
  name,
  value,
  action,
  multiline,
}) {
  const textInput = CardService.newTextInput()
    .setFieldName(name)
    .setTitle(title)
  if (value) textInput.setValue(value)
  if (action) {
    const { actionName, actionParams } = action
    textInput.setOnChangeAction(createAction(actionName, actionParams))
  }
  if (multiline) textInput.setMultiline(true)
  return textInput
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
  action,
  button,
}) {
  const decoratedText = new CardService.newDecoratedText().setWrapText(true)

  if (text) decoratedText.setText(text)
  if (topLabel) decoratedText.setTopLabel(topLabel)
  if (bottomLabel) decoratedText.setBottomLabel(bottomLabel)
  if (startIcon) decoratedText.setStartIcon(startIcon)
  if (endIcon) decoratedText.setEndIcon(endIcon)
  if (action) {
    const { actionName, actionParams } = action
    decoratedText.setOnClickAction(createAction(actionName, actionParams))
  }
  if (button) decoratedText.setButton(button)
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

export function createIconImage({ icon, type }) {
  const finalType =
    type === 'CIRCLE'
      ? CardService.ImageCropType.CIRCLE
      : CardService.ImageCropType.SQUARE
  return new CardService.newIconImage()
    .setIcon(icon)
    .setImageCropType(finalType)
}

export function createButtonSetWidget(buttons) {
  const buttonSet = CardService.newButtonSet()
  buttons.forEach((button) => buttonSet.addButton(button))
  return buttonSet
}

export function getThemeColor() {
  return pickColor('mainYellow')
}

export function colorString(string = '-', hexColor = '#000000') {
  return `<font color="${hexColor}">${string}</font>`
}
