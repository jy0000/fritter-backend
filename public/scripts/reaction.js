/* eslint-disable @typescript-eslint/restrict-template-expressions */

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

function viewAllReactions(fields) {
  fetch('/api/reactions')
    .then(showResponse)
    .catch(showResponse);
}

// A function viewReactionsByUser(fields) {
//   fetch(`/api/reactions?user=${fields.user}`)
//     .then(showResponse)
//     .catch(showResponse);
// }

function viewReactionsByFreet(fields) {
  fetch(`/api/reactions?freetId=${fields.freetId}`)
    .then(showResponse)
    .catch(showResponse);
}

function createReaction(fields) {
  fetch(`/api/reactions/${fields.freetId}`, {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function editReaction(fields) {
  fetch(`/api/reactions/${fields.freetId}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function deleteReaction(fields) {
  fetch(`/api/reactions/${fields.freetId}`, {method: 'DELETE'})
    .then(showResponse)
    .catch(showResponse);
}
