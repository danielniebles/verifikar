import Controller from './Controller'
import DriveView from '../views/tasks/Drive'
import { getNavigationActionResponse } from './navigationHandler'

export default class Drive extends Controller {
  execute() {
    console.log('Driver controller')
    return new DriveView()
  }

  navigateTo(view) {
    const card = view.render()
    return card
  }
}
