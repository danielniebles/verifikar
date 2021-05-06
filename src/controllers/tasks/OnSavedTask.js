import Controller from '../Controller'
import OnSavedTaskView from '../../views/tasks/OnSavedTask'
import OnSavedTaskModel from '../../model/OnSavedTask'

export default class OnSavedTask extends Controller {
  execute({ formInputs, taskId, folderName, folderId }) {
    const taskName = formInputs['task_name']
    const response = new OnSavedTaskModel().saveTask({
      taskName,
      taskId,
      folderName,
      folderId,
    })
    console.log(response)
    return new OnSavedTaskView()
  }

  navigateTo(view) {
    return view.render()
  }
}
