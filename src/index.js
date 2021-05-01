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

export function loadOnboarding() {
  var currentStep = '1'
  return new controllers.Onboarding().run({ currentStep })
}

export function nextOnboardingStep({
  formInputs,
  parameters: { currentStep },
}) {
  const nextStep = parseInt(currentStep) + 1
  return new controllers.Onboarding().run({
    currentStep: nextStep.toString(),
    formInputs,
  })
}

export function loadTaskList() {
  return new controllers.TaskList().run()
}

export function loadTask({ parameters: { id } }) {
  console.log(id)
  return new controllers.Drive().run()
}

export function loadNextDrive() {
  console.log('next')
}
