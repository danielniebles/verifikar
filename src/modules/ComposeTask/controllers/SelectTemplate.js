import Controller from '../../Common/controllers/Controller'
import SelectTemplateView from '../components/SelectTemplate'
import TasksService from '../../Common/services/Tasks'
import { userProperties } from '../../Common/services/properties'

export default class SelectTemplate extends Controller {
  execute() {
    const { parameters, formInput } = this.event
    const { type, taskName } = formInput
    const { name } = parameters
    const taskId = name

    taskName ? userProperties.set('currentConfigTaskName', taskName) : ''
    let taskTemplate = userProperties.get('currentTaskTemplate')

    if (!taskTemplate) {
      taskTemplate = TasksService.getTaskTemplate(taskId)
      userProperties.set('currentTaskTemplate', taskTemplate)
      userProperties.set('currentTaskId', taskId)
    }

    return new SelectTemplateView({
      taskTemplate,
      taskName,
      type,
    })
  }

  navigateTo(view) {
    const card = view.render()
    return card
  }
}
