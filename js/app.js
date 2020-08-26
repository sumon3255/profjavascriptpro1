console.log("Welcomes To note app");
showNotes();
//ShowNotes k abar call krbo Jate Reload krle Update hoi

// If user adds a note, add it to the localStoragege

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', function (e) {

    let addTxt = document.getElementById("addTxt");
    let addTit = document.getElementById("addTit");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        //jodi kono kisu na Tahke null array
        notesObj = [];
       

    } else {
        //jodi kono string Kuje pai Tahole parse koro
        notesObj = JSON.parse(notes);
        
    }
    let myObj = {
        title: addTit.value,
        text: addTxt.value
      }
    //notes a push kre dibo add txt r value
    notesObj.push(myObj);

    //then Update LocalStroage Stringyfy kre string convert krbe notes array k.
    localStorage.setItem("notes", JSON.stringify(notesObj));

    //Then TextArea Vanish hoia Jabe
    addTxt.value = "";
    addTit.value = "";
    console.log(notesObj);

    showNotes();

})


// Function to show elements from localStorage
function showNotes() {

    let notes = localStorage.getItem("notes");
    if (notes == null ) {
        //jodi kono kisu na Tahke null array
        notesObj = [];

    } else {
        //jodi kono string Kuje pai Tahole parse koro
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
       
        //Then Html e Cart add bkre daw(html + mane append hotei thakbe item add krar sathe sathe)
        html +=
            //function call kra hoise 56 no line e and this.id is index count for each index and id o dibo $index
            `

    <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            
    <div class="card-body">
      <h5 class="card-title">Title:  ${element.title}</h5>
      <p class="card-text"> ${element.text}</p>
      <button id="${index}" onclick="deleteNote(${index})" class="btn btn-primary">Delete</button> 
    </div>
  </div>
    `


    });
    let notesElem = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElem.innerHTML = html;
    } else {
        notesElem.innerHTML = `Nothing Is Here Add a Note`
    }
}

// Function to delete a note(index dibo jeta delete krte cai) and Delete krar Por ShowNotes update kre dibo
function deleteNote(index) {

    console.log("This Button is clicked", index);
   //sob notes ase porlo Function e
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        //jodi kono kisu na Tahke null array
        notesObj = [];

    } else {
        //jodi kono string Kuje pai Tahole parse koro
        notesObj = JSON.parse(notes);
    }
    //Splice strat er 1st argument nibe and amount of delete elements
    notesObj.splice(index,1);
    //Now LocalStroage e Update krte hobe
    localStorage.setItem("notes", JSON.stringify(notesObj));
    //call showNotes
    showNotes();
}


let searchTxt = document.getElementById("searchTxt")
//Search e input event lessener korbe input dile event krbe
searchTxt.addEventListener("input",function(){
    
    let inputval = searchTxt.value.toLowerCase();
    // console.log('Input Event are Fired',inputval);
    //Notecard class name sob element de do

    let noteCard = document.getElementsByClassName("noteCard");
    //element functon e cole jabe

    Array.from(noteCard).forEach(function(element){//element means each cards value
        //now we need content from p tag first element Oi element
 
         let cardtxt = element.getElementsByTagName("p")[0].innerText;//for string we use inner Text
         cart = cardtxt.toLowerCase();
        //  console.log(cardtxt);
         //Jodi Cardtxt Incudes kre input Value tahole block kre daw
         if(cart.includes(inputval)){
             element.style.display = "block";
         }
         else{
            element.style.display = "none";
        }
        

    })

})


/*
Further Features:
1. Add Title
2. Mark a note as Important
3. Separate notes by user
4. Sync and host to web server 
*/ 