let note=document.querySelector("#content")
let cntNote=document.querySelector(".note")
let btnSave=document.querySelector(".save")
let cNote=document.querySelector("#change-note")
let dNote=document.querySelector(".contain-change-note")
let notes = JSON.parse(localStorage.getItem("notes")) || [];
let saveChange=document.querySelector("#save-2")
let noteChange;
let pin=document.querySelector("#pin")
let pin2=document.querySelector("#pin2")
let dNotePin=document.querySelector(".note-pin")
autosize(document.querySelectorAll("textarea"));
notes.forEach(content => renderNote(content))
// luu ghi chu moi
btnSave.addEventListener("click",()=>{
    const newNote={
        id: Date.now(),
        content: note.value,
        check: pin.checked
    };
    renderNote(newNote);
    notes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(notes));
    note.value=""
    pin.checked=false;
})
//tao ghi chu
function renderNote(noteObj){
    // let p=document.createElement("p");
    // p.textContent=content;
    // p.classList.add("newP");
    let d=document.createElement("div")
    d.classList.add("newNote")
    d.dataset.id=noteObj.id;
    creatNote(d, noteObj.content);
    // tao icon
    // let dltIcon=document.createElement("i")
    // dltIcon.classList.add("fa-solid", "fa-trash");
    // dltIcon.classList.add("trash");
    //dltIcon.style.display="none";
    // d.append(p);
    //d.append(dltIcon)
    creatIcon(d);
    if(noteObj.check)
    {
        dNotePin.append(d);
        d.style.backgroundColor="#FCB53B"
    }
    else
    {cntNote.append(d)}
    eventD(d)
    // xoa ghi chu
    // dltIcon.addEventListener("click",(e)=>{
    //     e.stopPropagation();
    //     let index=listNote.indexOf(e.target.parentElement);// lay vi tri phan tu
    //     notes.splice(index,1); // xoa khoi mang
    //     localStorage.setItem("notes", JSON.stringify(notes));// cap nhat lai storage
    //     e.target.parentElement.remove();
    // })
    // ẩn hiện khi rê chuột vào
    // d.addEventListener("mouseover",()=>{
    //     d.querySelector(".newP").classList.toggle("margin");
    // })
    // d.addEventListener("mouseout",()=>{
    //      d.querySelector(".newP").classList.toggle("margin");
    // })
    // d.addEventListener("click",()=>{
    //     cNote.value=d.querySelector("p").textContent;
    //     cNote.style.height="0px"
    //      autosize.update(cNote); 
    //     dNote.style.display="inline-block";
    //     d.style.display="none";
    //     noteChange=d
        
    // })
}

//chinh sua ghi chu

saveChange.addEventListener("click",()=>{
    noteChange.querySelector("p").textContent=cNote.value
    //let index=listNote.indexOf(noteChange);// lay index phan tử vừa sửa\\
    let id=noteChange.dataset.id
    let objNote=notes.find(n=>n.id==id);// objNote tro toi phan tu co id trong mang notes
    if(objNote.check==pin2.checked)
    {
        noteChange.style.display="inline-block"
    }
    else{
        objNote.check=pin2.checked;
        noteChange.remove()
        renderNote(objNote)
    }
    objNote.content=cNote.value; //cập nhật lại phần tử
    cNote.value="";
    localStorage.setItem("notes", JSON.stringify(notes));// cap nhat lai storage
    dNote.style.display="none";
    pin2.checked=false;
})
function creatIcon(d){
    let dltIcon=document.createElement("i")
    dltIcon.classList.add("fa-solid", "fa-trash");
    dltIcon.classList.add("trash");
    d.append(dltIcon)
    dltIcon.addEventListener("click",(e)=>{
        e.stopPropagation();
        //let index=listNote.indexOf(e.target.parentElement);// lay vi tri phan tu
        let id=e.target.parentElement.dataset.id;
        notes=notes.filter(n=>n.id!=id);
        // notes.splice(index,1); // xoa khoi mang
        localStorage.setItem("notes", JSON.stringify(notes));// cap nhat lai storage
        e.target.parentElement.remove();
    })
}
function creatNote(d, content){
     let p=document.createElement("p");
    p.textContent=content;
    p.classList.add("newP");
    d.append(p);
}
function eventD(d){
     d.addEventListener("mouseover",()=>{
        d.querySelector(".newP").classList.toggle("margin");
    })
    d.addEventListener("mouseout",()=>{
         d.querySelector(".newP").classList.toggle("margin");
    })
    d.addEventListener("click",()=>{
        cNote.value=d.querySelector("p").textContent;
        cNote.style.height="0px"
        autosize.update(cNote); 
        dNote.style.display="inline-block";
        let id=d.dataset.id;
        let objNote=notes.find(n=>n.id==id);
        pin2.checked=objNote.check
        d.style.display="none";
        noteChange=d  
    })
}
