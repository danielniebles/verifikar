export function getNavigationActionResponse(card, push = true) {
  const nav = CardService.newNavigation()
  push ? nav.pushCard(card) : nav.popCard().updateCard(card)
  return CardService.newActionResponseBuilder()
    .setNavigation(nav)
    .setStateChanged(true)
    .build()
}

export function goToRootCard() {
  const nav = CardService.newNavigation()
  nav.popToRoot()
  return CardService.newActionResponseBuilder().setNavigation(nav).build()
}
