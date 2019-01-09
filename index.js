const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  //not mutate driver, return new driver
  //const newDriver = driver;
  return Object.assign({}, driver, {[key]: value});

}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  //DO mutate driver, return this driver
  return Object.assign(driver, {[key]: value});
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = Object.assign({}, driver);
  delete newDriver[key];
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
