import Controller from './Controller'
import TaskConfigListView from '../views/TaskConfigList'
import TasksConfigListModel from '../model/TasksConfigList'
import { userProperties } from '../common/properties'

export default class TaskConfigList extends Controller {
  execute() {
    userProperties.remove('currentConfigTaskId')
    userProperties.remove('currentConfigTaskName')
    userProperties.remove('currentTaskTemplate')
    const tasksConfigList = new TasksConfigListModel().getTasksConfigList()
    return new TaskConfigListView({ tasksConfigList })
  }

  navigateTo(view) {
    return view.render()
  }
}
