import Controller from './Controller'
import TasksConfigurationHomeView from '../views/TasksConfigurationHome'
import TasksConfigurationHomeService from '../services/TasksConfigurationHome'
import { CACHE_KEYS } from '../common/constants'
import { userProperties } from '../common/properties'

export default class TasksConfigurationHome extends Controller {
  execute() {
    userProperties.remove(CACHE_KEYS.CURRENT_CONFIG_TASK_ID)
    userProperties.remove(CACHE_KEYS.CURRENT_CONFIG_TASK_NAME)
    userProperties.remove(CACHE_KEYS.CURRENT_TASK_TEMPLATE)

    const tasksConfigList = TasksConfigurationHomeService.getTasksConfigList()
    return new TasksConfigurationHomeView({ tasksConfigList })
  }

  navigateTo(view) {
    return view.render()
  }
}
