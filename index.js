const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const driver1 = {
    'name': 'Sam',
    'address': '11 Broadway'
  }
  return driver1
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  const driver1 = {}
  delete driver1.name;
  return driver1
}


function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver.name;
  return driver
}
