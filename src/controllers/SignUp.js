import SignUpView from '../views/SignUp'
import Controller from './Controller'

export default class extends Controller {
    execute(){
        return new SignUpView({ title: 'Soy una perra', ...this.event})
    }
    navigateTo(view){
        return view.render()
    }
}