import Controller from '../../Common/controllers/Controller'
import FoldersListView from '../../DriveTask/components/FoldersList'
import DriveService from '../../Common/services/Drive'
import { userProperties } from '../../Common/services/properties'

export default class FolderList extends Controller {
  execute() {
    const {
      formInputs: { taskName },
      formInput: { search },
    } = this.event

    taskName ? userProperties.set('currentConfigTaskName', taskName[0]) : ''

    const folders = search ? DriveService.getFoldersByName(search) : []

    return new FoldersListView({ search, folders })
  }
  navigateTo(view) {
    const card = view.render()
    return this.search ? getNavigationActionResponse(card, false) : card
  }
}
