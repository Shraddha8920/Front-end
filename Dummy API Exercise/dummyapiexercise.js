const wordapi = [
  {
    word: "hello",
    definition: "used as a greeting or to begin a phone conversation.",
  },
  {
    word: "cloud",
    definition:
      "a visible mass of condensed watery vapour floating in the atmosphere, typically high above the general level of the ground.",
  },
  {
    word: "garden",
    definition:
      "a piece of ground adjoining a house, in which grass, flowers, and shrubs may be grown.",
  },
  {
    word: "lock",
    definition:
      " a mechanism for keeping a door, window, lid, or container fastened, typically operated by a key",
  },
];

let input = document.getElementById("input");
let submit=document.getElementById('submit');
let ans=document.getElementById('ans');
ans.innerHTML=`Please Enter Meaningful Word to get Definition<br>Eg. hello, cloud, garden, lock`;
submit.addEventListener('click',function(e){
  wordapi.forEach(function(element){
    if(element.word==input.value){
      ans.innerHTML=`<hr><br><b><u>Definition</u> : </b>${element.definition} .<br><br><hr>`;
    }
  })
  e.preventDefault();  
})
