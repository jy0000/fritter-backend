/* eslint-disable @typescript-eslint/restrict-template-expressions */

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for deleteIncognito, fields has properites incognito id
 */

function viewIncognito(fields) {
  fetch('/api/incognitos', {method: 'GET'})
    .then(showResponse)
    .catch(showResponse);
}
// Function viewIncognito(fields) {
//   let responseClone; // 1
//   fetch('/api/incognitos', {method: 'GET'})
//     .then(async response => {
//       responseClone = response.clone(); // 2
//       return response.json();
//     })
//     .then(data => {
//       // Do something with data
//     }, rejectionReason => { // 3
//       console.log('Error parsing JSON from response:', rejectionReason, responseClone); // 4
//       responseClone.text() // 5
//         .then(bodyText => {
//           console.log('Received the following instead of valid JSON:', bodyText); // 6
//         });
//     });
// }

function createIncognito(fields) {
  fetch('/api/incognitos', {method: 'POST', headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function deleteIncognito(fields) {
  fetch(`/api/incognitos?id=${fields.id}`, {method: 'DELETE'})
    .then(showResponse)
    .catch(showResponse);
}

function deleteAllIncognito(fields) {
  fetch('/api/incognitos', {method: 'DELETE'})
    .then(showResponse)
    .catch(showResponse);
}

