import Controller from '../../Common/controllers/Controller'
import TasksConfigurationHomeView from '../components/TasksConfigurationHome'
import TasksConfigurationHomeService from '../services/TasksConfigurationHome'
import { CACHE_KEYS } from '../../constants'
import { userProperties } from '../../Common/services/properties'

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
