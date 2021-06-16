export default class Drive {
  static getFoldersByName(folderName) {
    var folders = DriveApp.searchFolders(`title contains "${folderName}"`)
    const foldersArray = []
    while (folders.hasNext()) {
      var folder = folders.next()
      console.log(folder.getName())
      foldersArray.push(folder)
    }
    return foldersArray.slice(0, 5)
  }

  static getFolderById(folderId) {
    return DriveApp.getFolderById(folderId)
  }
}
