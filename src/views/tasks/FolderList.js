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
        value: this.props.search ?? '',
        action: {
          actionName: 'test',
          actionParams: {},
        },
      })
    )

    if (this.folders.length > 0) {
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
    } else {
      section.addWidget(
        createDecoratedTextWidget({
          text: this.props.search
            ? 'Lo siento, no se encontró ninguna carpeta con ese nombre'
            : 'Utiliza la barra de búsqueda para encontrar tu carpeta',
        })
      )
    }

    return section
  }
}
