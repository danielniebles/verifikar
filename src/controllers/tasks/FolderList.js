import Controller from '../Controller'
import FolderListView from '../../views/tasks/FolderList'
import DriveModel from '../../model/Drive'
import { userProperties } from '../../common/properties'

export default class FolderList extends Controller {
  execute({ formInputs }) {
    const taskName = formInputs['task_name'][0]
    userProperties.set('currentConfigTaskName', taskName)
    const folders = new DriveModel().getFolderList()
    return new FolderListView({ folders })
  }
  navigateTo(view) {
    return view.render()
  }
}
