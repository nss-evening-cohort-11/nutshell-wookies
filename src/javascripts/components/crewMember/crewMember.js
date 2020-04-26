import firebase from 'firebase';

const crewBuilder = (crew) => {
  let domString = '';
  const user = firebase.auth().currentUser;
  if (user != null) {
    domString += `<div id="${crew.id}" class="crewDiv d-flex flex-start crewCard">`;
    domString += `<img class="crewImg" src="${crew.imgUrl}" alt="">`;
    domString += '<div class="card text-center w-75 cardDisplay">';
    domString += '<div class="card-header headingDisplay">';
    domString += `${crew.title}`;
    domString += '</div>';
    domString += '<div class="card-body card-display">';
    domString += `<div class=""><h5 class="card-title">${crew.firstName} ${crew.lastName}</h5></div>`;
    domString += `<div class="><p class="card-text">Age: ${crew.age}</p></div>`;
    domString += `<div class="><p class="card-text">${crew.description}</p></div>`;
    domString += '<button type="button" class="edit-crew btn-default btn-lg crudButtonColor glowing"><i class="fas fa-feather-alt"></i> Edit Crew</button>';
    domString += '<button type="button" class="delete-crew btn-default btn-lg crudButtonColor glowing"><i class="fas fa-skull-crossbones"></i> Delete Crew</button>';
    domString += '</div>';
    domString += '<div class="card-footer text-muted">';
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  } else {
    domString += `<div id="${crew.id}" class="crewDiv d-flex flex-start crewCard">`;
    domString += `<img class="crewImg" src="${crew.imgUrl}" alt="">`;
    domString += '<div class="card text-center w-75 cardDisplay">';
    domString += '<div class="card-header headingDisplay">';
    domString += `${crew.title}`;
    domString += '</div>';
    domString += '<div class="card-body card-display">';
    domString += `<div class=""><h5 class="card-title">${crew.firstName} ${crew.lastName}</h5></div>`;
    domString += `<div class="><p class="card-text">Age: ${crew.age}</p></div>`;
    domString += `<div class="><p class="card-text">${crew.description}</p></div>`;
    domString += '</div>';
    domString += '<div class="card-footer text-muted">';
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  }
  return domString;
};

export default { crewBuilder };
