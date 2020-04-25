const buildExcursionCards = (excursionCardInfo) => {
  let domString = '';
  domString += `<h1>${excursionCardInfo.name}</h1>`;
  domString += `<h1>${excursionCardInfo.country}</h1>`;
  domString += `<h1>${excursionCardInfo.date}</h1>`;

  return domString;
};

export default { buildExcursionCards };
