let addbtn=document.getElementById("addbtn");
addbtn.addEventListener("click",function(e){
  let addtxt=document.getElementById("addtxt");
  let notes=localStorage.getItem("notes");
  if(notes==null){
    noteObject=[];
  }
  else{
    noteObject=JSON.parse(notes);  //the data becomes a JavaScript object
  }
  noteObject.push(addtxt.value);
  localStorage.setItem("notes",JSON.stringify(noteObject)); //Convert a JavaScript object into a string
  addtxt.value="";
  showNotes();
});
function showNotes(){
  let notes=localStorage.getItem("notes");
  if(notes==null){
    noteObject=[];
  }
  else{
    noteObject=JSON.parse(notes);
  }
  let html="";
  noteObject.forEach(function(element,index){
    html+=`
    <div class="noteCard my-2 mx-2 card" style="width:18rem;">
    <div class="card-body">
    <h2 class="card-title">Note ${index+1}</h2>
    <p class="card-text">${element}</p>
    <button id="${index}" class="btn btn-primary" onclick="deletenote(this.id)">Delete note</button>
    </div>
    </div>`;

  });
  let notesE=document.getElementById("notes");
  if(noteObject.length!=0){
    notesE.innerHTML=html;
  }
  else {
    notesE.innerHTML=`Your notes collection is empty!!`
  }
}
function deletenote(index){
  let notes=localStorage.getItem("notes");
  if(notes==null){
    noteObject=[];
  }
  else{
    noteObject=JSON.parse(notes);
  }
  noteObject.splice(index,1);//splice method adds and/or removes array elements.
  localStorage.setItem("notes",JSON.stringify(noteObject));
  showNotes();
}
