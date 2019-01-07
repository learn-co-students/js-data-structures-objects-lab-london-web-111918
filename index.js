// Write your solution in this file!

let driver = {
  name: "Sam"
}

function updateDriverWithKeyAndValue(driver, key, value){
  newDriver = {
    name: "Sam",
    address: "11 Broadway"
  }
  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver.name = "Sam"
  driver.address = "12 Broadway"
  return driver
}

function deleteFromDriverByKey(driver, key){
  newDriver = {
    name: "Sam"
  }
  delete newDriver.name;
  return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver.name;
  return driver
}
