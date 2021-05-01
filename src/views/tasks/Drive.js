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
        })
      )
      .addWidget(
        createDecoratedTextWidget({
          text: 'Seleccionar Carpeta',
          topLabel: 'Carpeta Google Drive',
          endIcon: createIconImageFromUrl({
            url:
              'https://www.gstatic.com/images/icons/material/system/1x/keyboard_arrow_right_black_48dp.png',
            type: 'SQUARE',
          }),
        })
      )
      .addWidget(
        createButtonWidget({
          text: 'Cancelar',
          styleType: 'FILLED',
          actionName: 'loadNextDrive',
          actionParams: {},
        })
      )
    return section
  }
}
