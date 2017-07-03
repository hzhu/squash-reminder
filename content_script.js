/**
 * This script is loaded on the onHistoryStateUpdated event.
 */

;(function () {
  const message = `
    IMPORTANT: DID YOU SQUASH YOUR COMMITS?
    Click CANCEL if you did not.
    Click OK if you did.
  `
  const buttonsClass = '.btn-group-rebase button'
  const buttonsList = [...document.querySelectorAll(buttonsClass)]

  const isPullRequestPage = window.location.pathname.includes('/pull/')
  const hasButtons = buttonsList.length

  if (isPullRequestPage && hasButtons) {
    buttonsList
      .reduce((confirmBtn, btn) => btn.innerText.trim() === 'Confirm rebase and merge' ? btn : undefined)
      .onclick = event => !window.confirm(message) ? event.preventDefault() : undefined
  }
})()
