const fs = require("fs")
const addPerson = (id, fname, lname, age, city) => {
  const allData = loadData()
  const duplicatedDate = allData.filter((obj) => {
    return obj.id === id
  })
  if (duplicatedDate.length == 0) {
    allData.push({
      id: id,
      fname: fname,
      lname: lname,
      age: age,
      city: city
    })
    savaAllData(allData)
  } else {
    console.log("ERROR: this id is already exist")
  }

}
const deletePerson = (id) => {
  const allData = loadData()
  const dataToKeep = allData.filter((obj) => {
    return obj.id !== id
  })
  savaAllData(dataToKeep)
  if (dataToKeep.length == allData.length) {
    console.log("ERROR: this id is note exist");
  } else {
    console.log(`you have already deleted an person data with id:${id}`)
  }
}
const readPerson = (id) => {

  const allData = loadData()

  const itemNeeded = allData.find((obj) => {
    return obj.id == id
  })
  if (itemNeeded) {
    console.log(itemNeeded)
  } else {
    console.log("ERROR: id needed not found")
  }

}
const listPerson = () => {
  const allData = loadData()
  if (allData.length > 0) {
    allData.forEach((obj) => {
      console.log(obj.fname, obj.age, obj.city)
    })
  } else {
    console.log("there is no data")
  }
  
}
const loadData = () => {
  try {
    const DataJson = fs.readFileSync("data.json").toString()
    return JSON.parse(DataJson)
  }
  catch {
    return []
  }
}
const savaAllData = (allData) => {
  const AllDataJson = JSON.stringify(allData)
  fs.writeFileSync("data.json", AllDataJson)
}
module.exports = {
  addPerson,
  deletePerson,
  readPerson,
  listPerson
}



