const fs = require("fs")
const functions = require("./functions")
const yargs = require("yargs")

yargs.command({
    command: "add",
    describe: "add a person",
    builder: {
        id: {
            describe: "person's id",
            demandOption: true,
            type: "string"
        },
        fname: {
            describe: "person's first name",
            demandOption: true,
            type: "string"
        },
        lname: {
            describe: "person's last name",
            demandOption: true,
            type: "string"
        },
        age: {
            describe: "person's age",
            demandOption: true,
            type: "string"
        },
        city: {
            describe: "person's city",
            demandOption: true,
            type: "string"
        },
    },
    handler: (x) => {
        functions.addPerson(x.id, x.fname, x.lname, x.age, x.city)
    }
})

yargs.command({
    command: "delete",
    describe: "delete a person",
    builder: {
        id: {
            describe: "person's id",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        functions.deletePerson(x.id)
    }
})

yargs.command({
    command: "read",
    describe: "read person's data",
    builder: {
        id: {
            describe: "person's id",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        functions.readData(x.id)
    }
})

yargs.command({
    command: "list",
    describe: "displays all data",
    handler: () => {
        functions.listData()
    }
})

yargs.parse()