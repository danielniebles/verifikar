import Controller from '../Controller'
import DriveView from '../../views/tasks/Drive'
import { getNavigationActionResponse } from '../navigationHandler'
import { userProperties } from '../../common/properties'

export default class Drive extends Controller {
  execute({ id, folderName, folderId }) {
    const taskId = id
      ? userProperties.set('currentConfigTaskId', id)
      : userProperties.get('currentConfigTaskId')
    const taskName = userProperties.get('currentConfigTaskName')
      ? userProperties.get('currentConfigTaskName')
      : ''
    return new DriveView({ taskName, taskId, folderName, folderId })
  }

  navigateTo(view) {
    const card = view.render()
    return card
  }
}
