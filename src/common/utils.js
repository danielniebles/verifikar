const backendUrl = 'http://725036bf626f.ngrok.io'

export function formatBackendUrl(pathname) {
  return `${backendUrl}/${pathname}`
}
