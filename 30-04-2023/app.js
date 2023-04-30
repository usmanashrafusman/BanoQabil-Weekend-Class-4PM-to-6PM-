// //0 false
// //1.... true
// //null false
// // undefined false
// // [] true
// //{} true
// // "" false
// // "fasdf" true

// const obj = {
//     name: "Ali",
//     age: 20,
//     subject: [
//         "Urdu",
//         "Islamiat"
//     ],
//     address: {
//         area: "Gulshan",
//         city: "Karachi"
//     }
// }

// function Student(name, age, subject, area, city) {
//     this.name = name;
//     this.age = age;
//     this.subject = subject;
//     this.address = {};
//     this.address.area = area;
//     this.address.city = city;
//     this.school = "ABC School"
//     this.setName = function(newName){
//         this.name = newName;
//     }
// };

// const student1 = new Student("Ahmed" , 22 , ["English" , "Science"] , "Bhaduabad" , "Karachi");
// console.log(student1);
// const student2 = new Student("Raza" , 21 , ["Islamit" , "Science"] , "Garden" , "Karachi");
// console.log(student2);
// student2.setName("Abdullah")
// console.log(student2);
const todos = [{todo : "Learn JS" , createdAt:new Date()}];

const createNewTodo = (todo) => {
    const todosWrapper = document.querySelector(".todos");
    const todoEle = document.createElement("div");
    const todoText = document.createElement("p");
    const todoTime = document.createElement("p");
    todoText.innerText = todo.todo;
    todoTime.innerText = todo.createdAt.toLocaleDateString();
    todoEle.appendChild(todoText);
    todoEle.appendChild(todoTime);
    todosWrapper.appendChild(todoEle);
}
document.querySelector("#add").addEventListener("click", () => {
    const todoEle = document.querySelector("#todo");

    if (todoEle.value === "") {
        return alert("Todo can't be empty")
    }

    const newTodo = {
        todo: todoEle.value,
        createdAt: new Date()
    }
    createNewTodo(newTodo);
    todoEle.value = "";
    todos.push(newTodo);
})

todos.forEach((todo , index)=>{
    createNewTodo(todo)
})
