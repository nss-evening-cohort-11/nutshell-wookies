import utils from '../../helpers/utils';

const showDestinationModalForm = () => {
  console.log('adding a new destination');
  let domString = '';
  domString = '<form>';
  domString = '<div class="form-group">';
  domString = '<label for="exampleInputEmail1">Email address</label>';
  domString = '<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">';
  domString = '</div>';
  domString = '<div class="form-group">';
  domString = '<label for="exampleInputPassword1">Password</label>';
  domString = '<input type="password" class="form-control" id="exampleInputPassword1">';
  domString = '</div>';
  domString = '<div class="form-group form-check">';
  domString = '<input type="checkbox" class="form-check-input" id="exampleCheck1">';
  domString = '<label class="form-check-label" for="exampleCheck1">Check me out</label>';
  domString = '</div>';
  domString = '<button id="button-save-destination" type="submit" class="btn btn-primary">Submit</button>';
  domString = '</form>';
  $('#modalAddDestination').modal('show');
  utils.printToDom('modalBodyAddDestination', domString);
};

export default { showDestinationModalForm };
