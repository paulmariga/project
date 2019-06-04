var todos = ["Sleep"];
var input = prompt("What Would you Like To Do?");
while(input !=="quit"){
if( input==-"list"){
    listTodo();
 } else if(input ==="new"){
     addTodo ();
 } else if (input=="delete"){
     deleteTodo();
 }
     
    
 input= prompt(" What Would you Like To Do?");
}
 console.log("OKAY YOU ARE A QUITTER!") ;

 function listTodos(){
     console.log("++++++++++++++++++++++++")
     todos.forEach(function(todo,i){
         console.log(i + " :") + todo;
     });
     console.log("++++++++++++++++++++++++")
      }

      function addTodos(){
          var newTodo = prompt(" Enter New todo");
          todos.push(newTodo);
          console.log("Added Todo");
      }

      function deleteTodo(){
          var index = prompt("Enter the index of todo to delete");
          todos.splice(index,1);
          console.log("Deleted Todo");
      }
