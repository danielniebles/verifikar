import HttpClient from './HttpClient'
import { formatBackendUrl } from '../common/utils'
import { userProperties } from '../common/properties'

export default class Drive {
  constructor() {
    this.httpClient = new HttpClient()
  }

  getTaskTemplate(taskId) {
    const url = formatBackendUrl(`tasks/configuration/${taskId}`)
    const response = this.httpClient.execute(url)
    console.log(response)
    return JSON.parse(response.getContentText())
  }

  getFolderById(folderId) {
    return DriveApp.getFolderById(folderId)
  }

  getFoldersByName(folderName) {
    //var folders = DriveApp.getFoldersByName(folderName)
    var folders = DriveApp.searchFolders(`title contains "${folderName}"`)
    const foldersArray = []
    while (folders.hasNext()) {
      var folder = folders.next()
      console.log(folder.getName())
      foldersArray.push(folder)
    }
    return foldersArray.slice(0, 5)
  }

  createTask(inputVariables, answers) {
    var user = Session.getActiveUser().getEmail()
    const variables = this.buildFilledTemplate(inputVariables, answers)
    const taskId = userProperties.get('currentTaskId')
    const url = formatBackendUrl(`tasks`)
    const payload = {
      name: taskId,
      workspace: 'gmail',
      user,
      variables,
    }
    console.log(payload)
    const body = {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify(payload),
    }
    const response = this.httpClient.execute(url, body)
    return response.getContentText()
  }

  buildFilledTemplate(variables, answers) {
    const filledTemplate = variables.map((variable) => {
      variable['value'] = answers[variable['variableName']]
      return variable
    })
    return filledTemplate
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
