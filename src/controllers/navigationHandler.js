export function getNavigationActionResponse(card) {
  const nav = CardService.newNavigation()
  nav.pushCard(card)
  return CardService.newActionResponseBuilder()
    .setNavigation(nav)
    .setStateChanged(true)
    .build()
}
