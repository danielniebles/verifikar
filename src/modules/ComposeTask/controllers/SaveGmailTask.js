import Controller from '../../Common/controllers/Controller'
import SavedTaskView from '../../Common/components/SavedTask'
import TasksService from '../../Common/services/Tasks'
import { userProperties } from '../../Common/services/properties'

export default class SaveGmailTask extends Controller {
  execute() {
    let taskTemplate = userProperties.get('currentTaskTemplate')
    const {
      formInput: { taskName, type, template },
    } = this.event
    const { variables } = taskTemplate

    const response = TasksService.createTask(variables, {
      taskName,
      type,
      template,
    })
    return new SavedTaskView()
  }

  navigateTo(view) {
    return view.render()
  }
}
