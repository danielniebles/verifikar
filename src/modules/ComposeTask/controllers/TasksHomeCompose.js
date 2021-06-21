import Controller from '../../Common/controllers/Controller'
import TasksHomeView from '../components/TasksHomeCompose'
import TasksService from '../../Common/services/Tasks'
import { TASKS } from '../../constants'

export default class TasksHomeCompose extends Controller {
  execute() {
    const tasksList = TasksService.getTasksByType(TASKS.GMAIL_COMPOSE_TASK_NAME)
    return new TasksHomeView({ tasksList })
  }
  navigateTo(view) {
    return view.render()
  }
}
