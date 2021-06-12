import 'core-js'
import controllers from './controllers'
import * as constant from './views/Constants'

export function onContext(event) {
  return new controllers.TasksHome({ event }).run()
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
  var step = '1'
  return new controllers.Onboarding().run({ step })
}

export function nextOnboardingStep({ formInputs, parameters: { step } }) {
  const nextStep = parseInt(step) + 1
  return new controllers.Onboarding().run({
    step: nextStep.toString(),
    formInputs,
  })
}

export function loadTasksConfigList() {
  return new controllers.TaskConfigList().run()
}

export function loadTaskConfiguration(event) {
  const {
    parameters: { name },
  } = event
  if (name === constant.DRIVE_TASK_NAME) {
    return new controllers.Drive({ event }).run()
  }
  if (name === constant.GMAIL_COMPOSE_TASK_NAME) {
    return new controllers.GmailCompose({ event }).run()
  }
}

//This function comes from Cancel button in task configuration
export function loadNextDrive() {
  console.log('next')
}

export function continueToDriveFolders(event) {
  return new controllers.FolderList({ event }).run()
}

export function onDriveFolderSelected(event) {
  return new controllers.Drive({ event }).run()
}

export function saveTask(event) {
  return new controllers.OnSavedTask({ event }).run()
}

export function saveGmailComposeTask(event) {
  return new controllers.OnGmailSavedTask({ event }).run()
}

export function loadAttachmentList(event) {
  const {
    parameters: { name },
  } = event
  if (name === constant.DRIVE_TASK_NAME) {
    return new controllers.AttachmentsList({ event }).run()
  }
  if (name === constant.GMAIL_COMPOSE_TASK_NAME) {
    return new controllers.SendEmail({ event }).run()
  }
}

export function submitDriveTask(event) {
  return new controllers.OnSelectedAttachments({ event }).run()
}

export function test(event) {
  return new controllers.FolderList({ event }).run()
}
