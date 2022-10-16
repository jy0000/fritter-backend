/* eslint-disable @typescript-eslint/restrict-template-expressions */

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

function viewAllDisplays(fields) {
  fetch('/api/displays')
    .then(showResponse)
    .catch(showResponse);
}

function viewDisplaysByAuthor(fields) {
  fetch(`/api/displays?author=${fields.author}`)
    .then(showResponse)
    .catch(showResponse);
}

function editDisplay(fields) {
  fetch(`/api/displays/${fields.id}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

