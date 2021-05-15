import Controller from '../Controller'
import FolderListView from '../../views/tasks/FolderList'
import DriveModel from '../../model/Drive'
import { userProperties } from '../../common/properties'

export default class FolderList extends Controller {
  execute() {
    const {
      formInputs: { taskName },
    } = this.event
    taskName ? userProperties.set('currentConfigTaskName', taskName[0]) : ''
    const folders = new DriveModel().getFolderList()
    return new FolderListView({ folders })
  }
  navigateTo(view) {
    return view.render()
  }
}
