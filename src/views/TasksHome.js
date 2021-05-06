import View from './View'

export default class TasksHome extends View {
  get header() {
    return CardService.newCardHeader().setTitle('Test')
  }

  get sections() {
    const section = new CardService.newCardSection()
    return section
  }
}
