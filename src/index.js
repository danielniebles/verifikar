import 'core-js'
import controllers from './controllers'

export function onContext(event) {
  return new controllers.SignUp({ event }).run()
}

export function onInbox(event) {
  var currentStep = '1'
  return new controllers.WelcomeScreen(event).run(currentStep)
}

export function nextSlide({ parameters: { currentStep } }) {
  const nextStep = parseInt(currentStep) + 1
  return new controllers.WelcomeScreen().run(nextStep.toString())
}

export function loadOnboarding(e) {
  var step = '1'
  console.log(e)
  return new controllers.Onboarding().run({ step })
}

export function nextOnboardingStep(e) {
  console.log(e)
  const {
    formInputs,
    parameters: { step },
  } = e
  const nextStep = parseInt(step) + 1
  return new controllers.Onboarding().run({
    step: nextStep.toString(),
    formInputs,
  })
}

export function loadTaskList() {
  return new controllers.TaskList().run()
}
