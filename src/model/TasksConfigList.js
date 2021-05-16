import HttpClient from './HttpClient'
import { formatBackendUrl } from '../common/utils'
import { userProperties } from '../common/properties'

export default class TasksConfigList {
  constructor() {
    this.httpClient = new HttpClient()
  }

  getTasksConfigList() {
    var user = Session.getActiveUser().getEmail()
    const url = formatBackendUrl(`tasks/${user}`)
    const response = this.httpClient.execute(url)
    return JSON.parse(response.getContentText())
  }
}
