
const fs = require("fs")

const addPerson = (id, fname, lname, age, city) => {
    const dataObject = loadData();
    const duplicate = dataObject.filter((person) => {
        return person.id == id
    })

    if (duplicate.length == 0) {
        dataObject.push({
            id: id,
            fname: fname,
            lname: lname,
            age: age,
            city: city
        })
        saveData(dataObject)
        console.log("Person added successfully")
    }
    else {
        console.log("Error: ID already exists")
    }
}

const deletePerson = (id) => {
    const dataObject = loadData()
    const dataToKeep = dataObject.filter((person) => {
        return person.id !== id
    })
    saveData(dataToKeep);
    console.log("Successfully deleted id: ", id)
}

const readData = (id) => {
    const dataObject = loadData()
    const targetedPerson = dataObject.find((person) => {
        return person.id == id
    })

    if (targetedPerson) {
        console.log(targetedPerson)
    }
    else {
        console.log("ID not found")
    }
}

const listData = () => {
    const dataObject = loadData();
    dataObject.forEach((person) => {
        console.log(person.fname, person.lname, person.age, person.city)
    })
}


const loadData = () => {
    try {
        const dataJSON = fs.readFileSync("data.json").toString()
        return JSON.parse(dataJSON)
    }
    catch {
        return []
    }
}

const saveData = (dataFile) => {
    const dataJSON = JSON.stringify(dataFile);
    fs.writeFileSync("data.json", dataJSON)
}

module.exports = {
    addPerson,
    deletePerson,
    readData,
    listData
}