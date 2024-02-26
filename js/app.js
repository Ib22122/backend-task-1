const yargs = require("yargs")
const {addPerson , deletePerson ,readPerson , listPerson} = require("./data")

yargs.command ({
    command : "add",
    describe : "to add an person data",
    builder: {
      id : {
         describe: "this is the id description in add command",
         demandOption: true,
         type : "number"
      },
      fname : {
         describe: "this is the first name description in add command",
         demandOption: true,
         type : "string"
      },
      lname : {
        describe: "this is the last name description in add command",
        demandOption: true,
        type : "string"
     }
    },
    handler:(x)=> {
      addPerson(x.id , x.fname , x.lname,x.age , x.city)
    }
})
yargs.command({
  command : "delete",
  describe : "to delete an person data",
  builder : {
    id : {
      describe : "this is id desc in delete command",
      demandOption : true,
      type : "number"
    }
 },
  handler:(x)=> {
     deletePerson(x.id)
  }

})
yargs.command({
    command: "read",
    describe : "to read an person data",
    builder : {
       id : {
         describe : "this is id desc in read command",
         demandOption : true,
         type : "number"
       }
    },
    handler: (x)=> {
       readPerson(x.id)
    }
})
  yargs.command ({
    command : "list",
    describe : "to list all persons data" ,
    handler : () => {
      listPerson()
    }
  })

  yargs.parse()