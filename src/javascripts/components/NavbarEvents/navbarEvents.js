const buttonClick = (e) => {
  e.preventDefault();
  const page = e.target.id;
  if (page === 'dashboard') {
    $('#crew').addClass('hide');
    $('#destinations').addClass('hide');
    $('#envReadings').addClass('hide');
    $('#species').addClass('hide');
    $('#dashboard').removeClass('hide');
  } else if (page === 'crewLink') {
    $('#dashboard').addClass('hide');
    $('#destinations').addClass('hide');
    $('#envReadings').addClass('hide');
    $('#crew').removeClass('hide');
    $('#species').addClass('hide');
  } else if (page === 'destinationsLink') {
    $('#dashboard').addClass('hide');
    $('#crew').addClass('hide');
    $('#envReadings').addClass('hide');
    $('#destinations').removeClass('hide');
    $('#species').addClass('hide');
  } else if (page === 'envReadingsLink') {
    $('#dashboard').addClass('hide');
    $('#crew').addClass('hide');
    $('#destinations').addClass('hide');
    $('#envReadings').removeClass('hide');
    $('#species').addClass('hide');
  } else if (page === 'speciesLink') {
    $('#dashboard').addClass('hide');
    $('#crew').addClass('hide');
    $('#destinations').addClass('hide');
    $('#species').removeClass('hide');
    $('#envReadings').addClass('hide');
  }
};

$('#missionsLink').click(buttonClick);
$('#enemiesLink').click(buttonClick);
$('#sectorsLink').click(buttonClick);
$('#systemsLink').click(buttonClick);
$('#weaponsLink').click(buttonClick);
$('#personnelLink').click(buttonClick);
$('#logoLink').click(buttonClick);
