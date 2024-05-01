const zod = require("zod");

// {
//     title:string,
//     description:string
// }
// {
//     id:zod.string
// }

const createTodo = zod.object({
    title:zod.string(),
    description:zod.string()
})
const UpdateTodo = zod.object({
    id:zod.string()
})

module.exports={
    createTodo:createTodo,
    UpdateTodo:UpdateTodo
}