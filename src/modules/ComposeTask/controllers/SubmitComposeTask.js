import Controller from '../../Common/controllers/Controller'

export default class SubmitComposeTask extends Controller {
    execute() {
        const { formInput: { message } } = this.event

        const response = CardService.newUpdateDraftActionResponseBuilder()
        response.setUpdateDraftBodyAction(CardService.newUpdateDraftBodyAction()
            .addUpdateContent(
                message,
                CardService.ContentType.TEXT)
            .setUpdateType(CardService.UpdateDraftBodyType.IN_PLACE_INSERT))

        return response

    }
    navigateTo(response) {
        return response.build();

    }

}
