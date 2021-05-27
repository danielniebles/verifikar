import Controller from '../Controller'
import OnSavedTaskView from '../../views/tasks/OnSavedTask'
import DriveModel from '../../model/Drive'
import { userProperties } from '../../common/properties'
import OnSavedTaskModel from '../../model/OnSavedTask'

export default class OnSavedTask extends Controller {
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
