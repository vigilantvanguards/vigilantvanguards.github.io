const masterAgents = groups.map(({ identity, owner, groupID }) => {
  return {
    identity: {
      companyName: identity.companyName,
      station: identity.station,
      iataCode: identity.iataCode,
      cassCode: identity.cassCode,
      type: identity.type,
      companyCode: identity.companyCode,
      accountNos: identity.accountNos ? identity.accountNos : [],
      pima: identity.pima,
    },
    owner: owner,
    groupID: groupID,
  };
});

let resultArray = [];
for (i = 0; i < masterAgents.length; i++) {
  const coy = masterAgents[i];
  const result =
    JSON.stringify(
      coy.identity.companyName +
        "," +
        coy.identity.station +
        "," +
        coy.owner +
        "," +
        coy.groupID +
        "," +
        coy.identity.iataCode +
        "," +
        coy.identity.cassCode +
        "," +
        coy.identity.companyCode +
        "," +
        coy.identity.type +
        "," +
        coy.identity.pima
    ) +
    "," +
    coy.identity.accountNos[0];

  resultArray.push(result.replace(/["]/g, ""));
}
bubble_fn_getMasterAgents(resultArray);

// Page is loaded
bubble_fn_getAgentName(response.data?.identity.companyName.toUpperCase());
bubble_fn_defaultShipperSig(response.data?.identity.companyName.toUpperCase());
bubble_fn_getAgentPlaceCity(response.data?.identity.station.toUpperCase());
bubble_fn_defaultExecutePlace(response.data?.identity.station.toUpperCase());
bubble_fn_getAgentIATACode(response.data?.identity.iataCode.toUpperCase());
bubble_fn_getAgentCASSCode(response.data?.identity.cassCode.toUpperCase());
bubble_fn_getAgentType(response.data?.identity.type.toUpperCase());
bubble_fn_getDefaultCompany(response.data?.identity.pima.toUpperCase());
bubble_fn_getAgentPIMA(response.data?.identity.pima.toUpperCase());
bubble_fn_getAgentCompanyCode(
  response.data?.identity.companyCode.toUpperCase()
);
bubble_fn_getOriginAirport(response.data?.identity.station.toUpperCase());
//bubble_fn_getAirportCityCode(response.data?.identity.station.toUpperCase());
//bubble_fn_getAgentStation(response.data?.identity.station.toUpperCase());
bubble_fn_getAgentGroupId(response.data?.groupID);
bubble_fn_getAgentAccountNo(
  response.data?.identity.accountCode[0]?.accountNo.toUpperCase()
);
bubble_fn_getViaEmail(response.data?.owner.toUpperCase());
