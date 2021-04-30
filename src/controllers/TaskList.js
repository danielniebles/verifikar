import Controller from './Controller'
import TaskListView from '../views/TaskList'

export default class TaskList extends Controller {
  execute() {
    return new TaskListView()
  }

  navigateTo(view) {
    return view.render()
  }
}
