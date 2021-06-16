import HttpClient from '../model/HttpClient'
import { formatBackendUrl } from '../common/utils'
import { userProperties } from '../common/properties'

export default class TasksConfigurationHome {
  static getTasksConfigList() {
    var user = Session.getActiveUser().getEmail()
    const httpClient = new HttpClient()
    const url = formatBackendUrl(`tasks/${user}`)
    const response = httpClient.execute(url)
    return JSON.parse(response.getContentText())
  }
}
