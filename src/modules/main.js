import 'core-js'
import controllers from './Common/controllers'
import { TASKS } from './constants'

// Compose trigger
export function onCompose(event) {
  return new controllers.TasksHomeCompose({ event }).run()
}

// Context trigger
export function onContext(event) {
  return new controllers.TasksHome({ event }).run()
}

// Welcome Screen actions
export function onInbox(event) {
  var currentStep = '1'
  return new controllers.WelcomeScreen(event).run(currentStep)
}

export function nextWelcomeScreenStep({ parameters: { currentStep } }) {
  const nextStep = parseInt(currentStep) + 1
  return new controllers.WelcomeScreen().run(nextStep.toString())
}

// Onboarding actions
export function loadOnboarding(event) {
  return new controllers.Onboarding({ event }).run()
}

export function nextOnboardingStep(event) {
  return new controllers.Onboarding({ event }).run()
}

// Home for tasks configuration
export function loadTasksConfigHome() {
  return new controllers.TasksConfigurationHome().run()
}

export function loadTaskConfiguration(event) {
  const {
    parameters: { name },
  } = event
  if (name === TASKS.DRIVE_TASK_NAME) {
    return new controllers.SelectFolder({ event }).run()
  }
  if (name === TASKS.GMAIL_COMPOSE_TASK_NAME) {
    return new controllers.SelectTemplate({ event }).run()
  }
}

// Drive task configuration actions
export function continueToDriveFolders(event) {
  return new controllers.FoldersList({ event }).run()
}

export function onDriveFolderSelected(event) {
  return new controllers.SelectFolder({ event }).run()
}

export function onFolderSearch(event) {
  return new controllers.FoldersList({ event }).run()
}

export function saveTask(event) {
  return new controllers.SaveDriveTask({ event }).run()
}

// Gmail task configuration actions
export function saveGmailComposeTask(event) {
  return new controllers.SaveGmailTask({ event }).run()
}

export function onSelectedTemplate(event) {
  return new controllers.SelectTemplate({ event }).run()
}

// Executing tasks
// Pending to change this name
export function loadAttachmentList(event) {
  const {
    parameters: { name },
  } = event
  if (name === TASKS.DRIVE_TASK_NAME) {
    return new controllers.AttachmentsList({ event }).run()
  }
  if (name === TASKS.GMAIL_COMPOSE_TASK_NAME) {
    return new controllers.EditTemplate({ event }).run()
  }
}

//Drive
export function submitDriveTask(event) {
  return new controllers.SubmitDriveTask({ event }).run()
}

//Gmail
export function submitGmailTask(event) {
  return new controllers.SubmitGmailTask({ event }).run()
}

//Executing ComposeTasks
export function loadComposeTaskMain(event) {
  return new controllers.InsertTemplate({ event }).run()
}

export function submitComposeTask(event) {
  return new controllers.SubmitComposeTask({ event }).run()
}