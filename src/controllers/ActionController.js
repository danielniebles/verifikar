import Controller from './Controller'
import { getNavigationActionResponse } from './navigationHandler'

export default class extends Controller {
    navigateTo(view){
        const card = view.render()
        return getNavigationActionResponse(card)
    }
}