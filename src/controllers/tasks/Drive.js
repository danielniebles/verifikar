import Controller from '../Controller'
import DriveView from '../../views/tasks/Drive'
import DriveModel from '../../model/Drive'
import { getNavigationActionResponse } from '../navigationHandler'
import { userProperties } from '../../common/properties'

export default class Drive extends Controller {
  execute() {
    const { parameters } = this.event
    const { name, folderName, folderId } = parameters
    const taskId = name
    const taskName = userProperties.get('currentConfigTaskName')
    let taskTemplate = userProperties.get('currentTaskTemplate')

    if (!taskTemplate) {
      taskTemplate = new DriveModel().getTaskTemplate(taskId)
      userProperties.set('currentTaskTemplate', taskTemplate)
      userProperties.set('currentTaskId', taskId)
    }

    return new DriveView({
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
