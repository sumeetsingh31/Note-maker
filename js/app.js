let addBtn=document.getElementById("addTxt");
addBtn.addEventListener("click",function(e){

    let addTxt=document.getElementById("addTxt");
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];

    }
    else{
        notesObj=JSON.parse(notes);
    }
    notes.push(addt.value);
})