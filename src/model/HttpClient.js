export default class HttpClient {
  execute(url, options) {
    return UrlFetchApp.fetch(url, options)
  }
}
