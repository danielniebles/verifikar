import View from '../View'
import {
  createTextInputWidget,
  createDecoratedTextWidget,
  createButtonWidget,
} from '../utils'

export default class FolderList extends View {
  get folders() {
    return this.props.folders
  }

  get header() {
    return CardService.newCardHeader()
      .setTitle('Seleccionar Carpeta')
      .setSubtitle(
        'Haz click en una de las opciones de abajo o usa la barra de busqueda'
      )
  }

  get sections() {
    const section = new CardService.newCardSection().addWidget(
      createTextInputWidget({
        title: 'Buscar',
        name: 'search',
      })
    )

    this.folders.forEach((folder) => {
      section.addWidget(
        createDecoratedTextWidget({
          text: folder.getName(),
          button: createButtonWidget({
            text: 'Seleccionar',
            styleType: 'TEXT',
            actionName: 'onDriveFolderSelected',
            actionParams: {
              folderName: folder.getName(),
              folderId: folder.getId(),
            },
          }),
        })
      )
    })

    return section
  }
}
