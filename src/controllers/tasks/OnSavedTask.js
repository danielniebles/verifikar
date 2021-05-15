import Controller from '../Controller'
import OnSavedTaskView from '../../views/tasks/OnSavedTask'
import DriveModel from '../../model/Drive'
import { userProperties } from '../../common/properties'
import OnSavedTaskModel from '../../model/OnSavedTask'

export default class OnSavedTask extends Controller {
  execute() {
    const taskName = userProperties.get('currentConfigTaskName')
    let taskTemplate = userProperties.get('currentTaskTemplate')
    const {
      parameters: { folderName, folderId },
    } = this.event
    const { variables } = taskTemplate

    const response = new DriveModel().createTask(variables, {
      taskName,
      folderName,
      folderId,
    })
    return new OnSavedTaskView()
  }

  navigateTo(view) {
    return view.render()
  }
}
