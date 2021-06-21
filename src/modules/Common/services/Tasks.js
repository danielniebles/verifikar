import HttpClient from './HttpClient'
import { formatBackendUrl } from '../../utils'
import { userProperties } from './properties'

export default class Tasks {
  static getTaskTemplate(taskId) {
    const httpClient = new HttpClient()
    const url = formatBackendUrl(`tasks/configuration/${taskId}`)
    const response = httpClient.execute(url)
    return JSON.parse(response.getContentText())
  }

  getFolderById(folderId) {
    return DriveApp.getFolderById(folderId)
  }

  static createTask(inputVariables, answers) {
    var user = Session.getActiveUser().getEmail()
    const httpClient = new HttpClient()
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
    const response = httpClient.execute(url, body)
    return response.getContentText()
  }

  static getTasks() {
    const httpClient = new HttpClient()
    var user = Session.getActiveUser().getEmail()
    const url = formatBackendUrl(`tasks/${user}/gmail`)
    const response = httpClient.execute(url)
    return JSON.parse(response.getContentText())
  }

  static getTasksByType(name) {
    const httpClient = new HttpClient()
    var user = Session.getActiveUser().getEmail()
    const url = formatBackendUrl(`tasks/${user}/gmail`)
    const response = httpClient.execute(url)
    const formatedResponse = JSON.parse(response.getContentText())

    const filteredResponse = formatedResponse.filter((element) => element['name'] === name)

    return filteredResponse
  }

  static getTaskById(name, id) {
    const httpClient = new HttpClient()
    const url = formatBackendUrl(`tasks/id/${id}/${name}`)
    const response = httpClient.execute(url)
    return JSON.parse(response.getContentText())
  }

  static buildFilledTemplate(variables, answers) {
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
