export default class Drive {
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
