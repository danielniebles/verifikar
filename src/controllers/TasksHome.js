import Controller from './Controller'
import TasksHomeView from '../views/TasksHome'

export default class TasksHome extends View {
  execute(event) {
    console.log(event)
    return new TasksHomeView()
  }
  navigateTo(view) {
    return view.render()
  }
}
