import Controller from '../Controller'
import OnSavedTaskView from '../../views/tasks/OnSavedTask'
import DriveModel from '../../model/Drive'
import { userProperties } from '../../common/properties'
import OnSavedTaskModel from '../../model/OnSavedTask'

export default class OnGmailSavedTask extends Controller {
  execute() {
    let taskTemplate = userProperties.get('currentTaskTemplate')
    const {
      formInput: { taskName, subject, message },
    } = this.event
    const { variables } = taskTemplate

    const response = new DriveModel().createTask(variables, {
      taskName,
      subject,
      message,
    })
    return new OnSavedTaskView()
  }

  navigateTo(view) {
    return view.render()
  }
}
