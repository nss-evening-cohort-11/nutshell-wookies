const crewBuilder = (crew) => {
  let domString = '';
  domString += `<div id="${crew.id}" class="d-flex flex-wrap">`;
  domString += `<img src="${crew.imgUrl}" alt="">`;
  domString += '<div class="card text-center">';
  domString += '<div class="card-header">';
  domString += `${crew.title}`;
  domString += '</div>';
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">${crew.firstName} ${crew.lastName}</h5>`;
  domString += `<p class="card-text">Age: ${crew.age}</p>`;
  domString += `<p class="card-text">${crew.description}</p>`;
  domString += '<a href="#" class="btn btn-danger">DELETE</a>';
  domString += '</div>';
  domString += '<div class="card-footer text-muted">';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};

export default { crewBuilder };
