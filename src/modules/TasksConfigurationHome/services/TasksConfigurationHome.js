import HttpClient from '../../Common/services/HttpClient'
import { formatBackendUrl } from '../../utils'

export default class TasksConfigurationHome {
  static getTasksConfigList() {
    var user = Session.getActiveUser().getEmail()
    const httpClient = new HttpClient()
    const url = formatBackendUrl(`tasks/${user}`)
    const response = httpClient.execute(url)
    return JSON.parse(response.getContentText())
  }
}
