const addBtn = document.querySelector("#addBtn")
const main = document.querySelector("#main")
addBtn.addEventListener(
    "click",
    function() {
        addNote()
    }
)
const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    // console.log(notes);
    const data = [];
    notes.forEach(
            (note) => {
                data.push(note.value)
            }
        )
        // a 1 note page upper rakhav amate nu che niche last function 
              //sathe jovanu

    if (data.length === 0) {
        localStorage.removeItem("notes")
    } else {
        // Local storage ma data nakhava mate.....
        localStorage.setItem("notes", JSON.stringify(data))
    }
}



// aya texaream text che eno use ke local storage mathi 
   //data retun ave apde save kariye tyre and refrace kariye to 
     //screen upper batave ena ,mate line no :-49 and 40 line text="' empty
      // che kem ke e click button marte che starting ma apde click kariye 
           // tyre note na hoi khali box j hoi

const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
    <div class="tool">
         <i class="save fas fa-save"></i>
         <i class="trash fas fa-trash"></i> 
    </div>
    
    <textarea>${text}</textarea>
    `;

    note.querySelector(".trash").addEventListener(
        "click",
        function() {
            note.remove()

            saveNotes()
        }
    )

    note.querySelector(".save").addEventListener(
        "click",
        function() {
           //  A to simple che delete thai pachi update
         saveNotes()
        }
    )


    // a fn no use e che ke apde note type kari ane save no kariye save button thi pan 
    //outside note click kariye to pan savr thai jai jethi refrace kariye to pan note ty 
    //screen upper show thaiu
    note.querySelector("textarea").addEventListener(
        "focusout",
        function() {
            saveNotes()
        }
    )

    main.appendChild(note);
    // For empty note mate kai lakhe nai to pan save thai jai local storage ma
    saveNotes()
}


(
    function() {
        // ano use ke ls ma data save karya pan ene have apde screen 
        //refrace kariye to screen upper re chalya no jai ena mate ene 
        // scrren upper send karva ....json.parse no use ek array tarike che
        //line no 87 and else condition.....   and upper addnote function ma apde text empty
        // che kem ke jo user add note upper click kare to black note avve and and jo note ene type kari 
        // hoi to e ls ma store hase to e apde ene scrren upper show karavi apish by this slef function 
        //  if condition alag che       
        const lsNotes = JSON.parse(localStorage.getItem("notes"));


         //A no use e che ke jyre localstorage ma kai no hoi end screen upper pan ek pan note
         //na hoi to client refrace kare to atleast 1 note batave ena mate if condition
         // simple che apde ls no data je rite sceen upper a note show kariye e j rite apde 
         //aya black note show karaviye chie.......
        if (lsNotes === null) {
            addNote()
        } 
        
        
        else {
            lsNotes.forEach(
                (lsNote) => {
                    addNote(lsNote)
                }
            )
        }

    }
)()
