showNotes();
let txt = document.getElementById("note");
let txttitle=document.getElementById("title");
function addnote() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  let myObj={
    title : txttitle.value,
    text : txt.value
  }
  notesobj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  txt.value = "";
  txttitle.value= "";
  showNotes();
}

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  let html = "";
  notesobj.forEach(function (element, index) {
    html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text"> ${element.text}</p>
            <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>
        `;
  });
  let notesElem = document.getElementById("notes");
  if (notesobj.length == 0) {
    notesElem.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  } else {
    notesElem.innerHTML = html;
  }
}

function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  notesobj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  showNotes();
}
  let search = document.getElementById("searchTxt");
  search.addEventListener("input", function () {
    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function (element) {
      let cardTxt = element.getElementsByTagName("p")[0].innerText;
      if (cardTxt.includes(inputVal)) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });
  });
