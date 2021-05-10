import 'core-js'
import controllers from './controllers'

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

export function loadTaskConfiguration({ parameters: { id } }) {
  return new controllers.Drive().run({ id })
}

//This function comes from Cancel button in task configuration
export function loadNextDrive() {
  console.log('next')
}

export function continueToDriveFolders({ formInputs }) {
  return new controllers.FolderList().run({ formInputs })
}

export function onDriveFolderSelected({
  parameters: { folderName, folderId },
}) {
  return new controllers.Drive().run({ folderName, folderId })
}

export function saveTask({
  formInputs,
  parameters: { taskId, folderName, folderId },
}) {
  return new controllers.OnSavedTask().run({
    formInputs,
    folderName,
    folderId,
    taskId,
  })
}

export function loadAttachmentList(event) {
  return new controllers.AttachmentsList({ event }).run()
}

export function submitDriveTask(event) {
  return new controllers.OnSelectedAttachments({ event }).run()
}
