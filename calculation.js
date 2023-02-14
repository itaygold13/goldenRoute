module.exports = function calculation(mass) {
  mass = Number(mass);

  if (isNaN(mass) || mass <= 0) {
    return `
      <p>Invalid mass entered</p>
      <a href="/">Back</a>
    `;
  }

  const acceleration = 100000 / mass;
  const takeOffTime = Math.sqrt(140 / acceleration);
  const takeOffDistance = 0.5 * acceleration * takeOffTime * takeOffTime;

  let output = `
    <p>Take off distance: ${takeOffDistance} meters</p>
    <p>Take off time: ${takeOffTime} seconds</p>
  `;

  if (takeOffTime > 60) {
    const extraMass = 100000 * (takeOffTime - 60) / takeOffTime;
    output += `
      <p>Take off time is greater than 60 seconds. The extra weight that should be taken out is ${extraMass} Newton</p>
    `;
  }

  output += `
    <a href="/">Back</a>
  `;

  return output;
};