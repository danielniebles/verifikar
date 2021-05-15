import Controller from './Controller'
import TaskConfigListView from '../views/TaskConfigList'
import { userProperties } from '../common/properties'

export default class TaskConfigList extends Controller {
  execute() {
    userProperties.remove('currentConfigTaskId')
    userProperties.remove('currentConfigTaskName')
    return new TaskConfigListView()
  }

  navigateTo(view) {
    return view.render()
  }
}
