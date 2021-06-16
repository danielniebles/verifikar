import Controller from '../../Common/controllers/Controller'
import SelectFolderView from '../components/SelectFolder'
import TaskService from '../../Common/services/Tasks'
import { userProperties } from '../../Common/services/properties'

export default class SelectFolder extends Controller {
  execute() {
    const { parameters } = this.event
    const { name, folderName, folderId } = parameters
    const taskId = name
    const taskName = userProperties.get('currentConfigTaskName')
    let taskTemplate = userProperties.get('currentTaskTemplate')

    if (!taskTemplate) {
      taskTemplate = TaskService.getTaskTemplate(taskId)
      userProperties.set('currentTaskTemplate', taskTemplate)
      userProperties.set('currentTaskId', taskId)
    }

    return new SelectFolderView({
      taskName,
      folderName,
      folderId,
      taskTemplate,
    })
  }

  navigateTo(view) {
    const card = view.render()
    return card
  }
}
