
/*
    todos=[
        title:string,
        description:string
    ]

    Iterate over the array and get the elements out 
    To acheieve that we use map function and pass another function as call backs

*/




export function Todos({todos}){ //object destructing
    return <div>
       {todos.map(function(todo){
            return (
              <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "completed":"Mark as completed"}</button>
              </div>
            );
       })}
    </div>
}