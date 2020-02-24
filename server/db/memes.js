const config =require('../../knexfile').development

const connection = require('knex')(config)


function getMemes(db=connection){
  return db('memes').select()
}

//this fucntion pulls ALL data from database


module.exports = { getMemes}


