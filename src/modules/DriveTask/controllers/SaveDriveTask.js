import Controller from '../../Common/controllers/Controller'
import SavedTaskView from '../../Common/components/SavedTask'
import TasksService from '../../Common/services/Tasks'
import { userProperties } from '../../Common/services/properties'

export default class SaveDriveTask extends Controller {
  execute() {
    let taskTemplate = userProperties.get('currentTaskTemplate')
    const {
      parameters: { folderName, folderId },
      formInput,
    } = this.event
    const taskName = userProperties.get('currentConfigTaskName')
      ? userProperties.get('currentConfigTaskName')
      : formInput['taskName']
    const { variables } = taskTemplate

    const response = TasksService.createTask(variables, {
      taskName,
      folderName,
      folderId,
    })
    return new SavedTaskView()
  }

  navigateTo(view) {
    return view.render()
  }
}
