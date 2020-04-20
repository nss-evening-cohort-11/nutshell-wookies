import utils from '../../helpers/utils';
import crewData from '../../helpers/data/crewData';

const showEditCrewForm = (crewId) => {
  crewData.getSingleCrew(crewId)
    .then((response) => {
      const selectedCrewMember = response.data;
      console.log('single crew', crewId);
      let domString = '';
      domString += `<form id="modalForm" class="edit-crew-form-tag" data-id="${crewId}">`;
      domString += '<div class="form-group">';
      domString += '<label for="edit-crew-firstName">First Name</label>';
      domString += `<input type="text" class="form-control" id="edit-crew-firstName" aria-describedby="firstName" placeholder="Enter First Name" value="${selectedCrewMember.firstName}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-crew-lastName">Last Name</label>';
      domString += `<input type="text" class="form-control" id="edit-crew-lastName" aria-describedby="lastName" placeholder="Enter Last Name" value="${selectedCrewMember.lastName}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-crew-age">Country</label>';
      domString += `<input type="text" class="form-control" id="edit-crew-age" aria-describedby="age" placeholder="Enter Age" value="${selectedCrewMember.age}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-crew-jobTitle">Title</label>';
      domString += `<input type="text" class="form-control" id="edit-crew-jobTitle" aria-describedby="jobTitle" placeholder="Job Title" value="${selectedCrewMember.title}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-crew-imgUrl">Photo</label>';
      domString += `<input type="text" class="form-control" id="edit-crew-imgUrl" aria-describedby="imgUrl" placeholder="Enter an Image Link" value="${selectedCrewMember.imgUrl}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-crew-description">Description</label>';
      domString += `<input type="text" class="form-control" id="edit-crew-description" aria-describedby="description" placeholder="Enter a Description" value="${selectedCrewMember.description}">`;
      domString += '</div>';
      domString += '<div class="form-group form-check">';
      if ($('#crew-gender:checked') !== null) {
        domString += '<input type="checkbox" class="form-check-input" id="edit-crew-gender" checked>';
      } else if ($('#destination-beenThere:checked') === null) {
        domString += '<input type="checkbox" class="form-check-input" id="edit-crew-gender">';
      }
      domString += '<label class="form-check-label" for="edit-crew-gender">Are they Male?</label>';
      domString += '</div>';
      domString += '</form>';
      utils.printToDom('modalBodyEditCrew', domString);
    })
    .catch((error) => console.error('could not edit the selected crew', error));
};

export default { showEditCrewForm };
