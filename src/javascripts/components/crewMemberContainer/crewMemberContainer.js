import firebase from 'firebase/app';
import moment from 'moment';
import crewData from '../../helpers/data/crewData';
import crewMember from '../crewMember/crewMember';
import crewModalForm from '../crewModalForm.js/crewModalForm';
import utils from '../../helpers/utils';

const removeCrew = (e) => {
  const crewId = e.target.closest('.crewDiv').id;
  console.error('crewId?', crewId);
  crewData.deleteCrew(crewId)
    .then(() => {
    // eslint-disable-next-line no-use-before-define
      buildCrewContainer();
    })
    .catch((err) => console.error('could not delete crew', err));
};

const makeCrewMember = (e) => {
  e.preventDefault();
  const newCrew = {
    firstName: $('#crew-firstName').val(),
    lastName: $('#crew-LastName').val(),
    age: $('#crew-age').val(),
    title: $('#crew-jobTitle').val(),
    imgUrl: $('#crew-imageUrl').val(),
    description: $('#crew-description').val(),
    gender: $('#crew-male:checked').val(),
    timestamp: moment().format(),
    uid: firebase.auth().currentUser.uid,
  };
  crewData.addNewCrew(newCrew)
    .then(() => {
      $('#modalBodyAddCrew input').val('');
      $('#modalAddCrew').modal('hide');
      // eslint-disable-next-line no-use-before-define
      buildCrewContainer();
    })
    .catch((error) => console.error('could not add a new crew', error));
};

const buildCrewContainer = () => {
  crewData.getAllCrew()
    .then((crewMembers) => {
      let domString = '';
      domString += '<div class="pageDisplay">';
      domString += '<h1 class="headingDisplay softEmboss"><p class="typewriter">Crew Members</p></h1>';
      domString += '<div class="text-center m-5">';
      domString += '<button id="button-add-crew" type="button" class="btn-default btn-lg crudButtonColor glowing mt-5 mr-2" data-toggle="modal" data-target="#modalAddCrew"><i class="fas fa-calendar-plus"></i></button>';
      domString += '</div>';
      domString += '<div class="d-flex flex-column">';
      crewMembers.forEach((item) => {
        // domString += '<div class="">';
        domString += crewMember.crewBuilder(item);
        // domString += '</div>';
      });
      domString += '</div>';
      domString += '</div>';
      utils.printToDom('crew', domString);
    })
    .catch((error) => console.error('get crew broke', error));
};

const crewEvents = () => {
  $('body').on('click', '.delete-crew', removeCrew);
  $('body').on('click', '#button-add-crew', crewModalForm.showAddCrewModalForm);
  $('body').on('click', '#button-save-crew', makeCrewMember);
  console.error('save button working?', makeCrewMember);
};

export default { buildCrewContainer, crewEvents };
