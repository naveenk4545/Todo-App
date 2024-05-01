/*
    *Todo{
        title:string,
        description:string,
        completed:boolean

    }
*/

const mongoose = require("mongoose");
// const { string } = require("zod");

//mongodb url
mongoose.connect(
  "mongodb+srv://admin:Fdfz14kDNkZjpPMi@cluster0.3smvkto.mongodb.net/Todo"
);
const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports={
    todo
}