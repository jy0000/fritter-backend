/* eslint-disable @typescript-eslint/restrict-template-expressions */

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

function viewAllProfiles(fields) {
  fetch('/api/profiles')
    .then(showResponse)
    .catch(showResponse);
}

function viewProfilesByUser(fields) {
  fetch(`/api/profiles?user=${fields.user}`)
    .then(showResponse)
    .catch(showResponse);
}

function createProfile(fields) {
  fetch('/api/profiles', {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function editProfile(fields) {
  fetch(`/api/profiles/${fields.old_handle}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function deleteProfile(fields) {
  fetch(`/api/profiles/${fields.id}`, {method: 'DELETE'})
    .then(showResponse)
    .catch(showResponse);
}
