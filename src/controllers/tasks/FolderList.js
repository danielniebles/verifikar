import Controller from '../Controller'
import FolderListView from '../../views/tasks/FolderList'
import { getNavigationActionResponse } from '../navigationHandler'
import DriveModel from '../../model/Drive'
import { userProperties } from '../../common/properties'

export default class FolderList extends Controller {
  execute() {
    const {
      formInputs: { taskName },
      formInput: { search },
    } = this.event

    taskName ? userProperties.set('currentConfigTaskName', taskName[0]) : ''

    const folders = search
      ? new DriveModel().getFoldersByName(search)
      : new DriveModel().getFolderList()
    return new FolderListView({ search, folders })
  }
  navigateTo(view) {
    const card = view.render()
    return this.search ? getNavigationActionResponse(card, false) : card
  }
}
