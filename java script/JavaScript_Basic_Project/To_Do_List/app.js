const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")

item.addEventListener(
    "keyup",
    // A function use e che ke apde kai type kariye to e console ma avi jai
    // and type na box mathi delete thai jai.....je 
    //this.value="" empty ena ,mate karyu che
    function(event) {
        if (event.key == "Enter") {
            addToDo(this.value)
            this.value = ""
        }
    }
)

const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
         ${item}
        <i class="fas fa-times"></i>
    `;


    listItem.addEventListener(
        "click",
        function() {
            this.classList.toggle("done");
        }
    )


    listItem.querySelector("i").addEventListener(
        "click",
        function() {
            listItem.remove()
        }
    )

    
    toDoBox.appendChild(listItem)
}