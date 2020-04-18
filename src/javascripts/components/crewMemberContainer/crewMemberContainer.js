import crewData from '../../helpers/data/crewData';
import crewMember from '../crewMember/crewMember';
import utils from '../../helpers/utils';

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
      crewMembers.forEach((item) => {
        domString += '<div class="">';
        domString += crewMember.crewBuilder(item);
        domString += '</div>';
      });
      domString += '</div>';
      domString += '</div>';
      utils.printToDom('crew', domString);
    })
    .catch((error) => console.error('get crew broke', error));
};

export default { buildCrewContainer };
