import crewData from '../../helpers/data/crewData';
import crewMember from '../crewMember/crewMember';
import utils from '../../helpers/utils';

const removeCrew = (e) => {
  const crewId = e.target.closest('.crewCard').id;
  console.error('crewId', crewId);
  crewData.deleteCrew(crewId)
    .then(() => {
      crewMember.crewBuilder();
    })
    .catch((err) => console.error('could not delete crew', err));
};

const buildCrewContainer = () => {
  crewData.getAllCrew()
    .then((crewMembers) => {
      let domString = '';
      domString += '<div class="pageDisplay">';
      domString += '<h1 class="headingDisplay softEmboss"><p class="typewriter">Crew Members</p></h1>';
      domString += '<div class="text-center m-5">';
      domString += '<input type="button" class="col-6 btn-default btn-lg crudButtonImage glowing hide" value="Add a New Crew Member">';
      domString += '</div>';
      domString += '<div class="d-flex flex-column">';
      crewMembers.forEach((crewMem) => {
        domString += '<div class="">';
        domString += crewMember.crewBuilder(crewMem);
        domString += '</div>';
      });
      domString += '</div>';
      domString += '</div>';
      utils.printToDom('crew', domString);
      $('.pinDiv').on('click', '.delete-crew-button', removeCrew);
      console.error('delete button did not work', removeCrew);
    })
    .catch((error) => console.error('get crew broke', error));
};

export default { buildCrewContainer };
