import HttpClient from './HttpClient'
import { formatBackendUrl } from '../common/utils'
import { userProperties } from '../common/properties'

export default class Drive {
  constructor() {
    this.httpClient = new HttpClient()
  }

  getTaskTemplate() {
    const url = formatBackendUrl('taskconfig')
    const response = this.httpClient.execute(url)
    return response.getContentText()
  }

  getFolderById(folderId) {
    return DriveApp.getFolderById(folderId)
  }

  getFolderList() {
    var folders = DriveApp.getFolders()
    const foldersArray = []
    while (folders.hasNext()) {
      var folder = folders.next()
      foldersArray.push(folder)
    }
    return foldersArray.slice(0, 5)
  }
}
