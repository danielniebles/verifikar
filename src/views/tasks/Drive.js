import View from '../View'
import {
  createTextInputWidget,
  createDecoratedTextWidget,
  createButtonWidget,
  createIconImageFromUrl,
} from '../utils'

export default class Drive extends View {
  get header() {
    return CardService.newCardHeader()
      .setTitle('Guardar adjunto en carpeta')
      .setSubtitle('Configuracion')
  }

  get sections() {
    const section = new CardService.newCardSection()
      .addWidget(
        createTextInputWidget({
          title: 'Nombre de la tarea',
          name: 'task_name',
          value: this.props.taskName ? this.props.taskName : '',
        })
      )
      .addWidget(
        createDecoratedTextWidget({
          text: this.props.folderName
            ? `<b>${this.props.folderName}</b>`
            : 'Seleccionar Carpeta',
          topLabel: 'Carpeta Google Drive',
          endIcon: createIconImageFromUrl({
            url:
              'https://www.gstatic.com/images/icons/material/system/1x/keyboard_arrow_right_black_48dp.png',
            type: 'SQUARE',
          }),
          action: {
            actionName: 'continueToDriveFolders',
            actionParams: {},
          },
        })
      )
      .addWidget(
        createButtonWidget({
          text: this.props.folderName ? 'Guardar' : 'Cancelar',
          styleType: 'FILLED',
          actionName: this.props.folderName ? 'saveTask' : 'loadNextDrive',
          actionParams: this.props.folderName
            ? {
                folderName: this.props.folderName,
                folderId: this.props.folderId,
                taskId: this.props.taskId,
              }
            : {},
        })
      )
    return section
  }
}
