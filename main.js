let note=document.querySelector("#content")
let cntNote=document.querySelector(".note")
let btnSave=document.querySelector(".save")
let cNote=document.querySelector("#change-note")
let dNote=document.querySelector(".contain-change-note")
let notes = JSON.parse(localStorage.getItem("notes")) || [];
let listNote=[]
let saveChange=document.querySelector("#save-2")
let noteChange;
autosize(document.querySelectorAll("textarea"));
btnSave.addEventListener("click",()=>{
    renderNote(note.value);
    notes.push(note.value);
    localStorage.setItem("notes", JSON.stringify(notes));
    note.value=""
})
//tao ghi chu
function renderNote(content){
    let p=document.createElement("p");
    p.textContent=content;
    p.classList.add("newP");
    let d=document.createElement("div")
    d.classList.add("newNote")
    // tao icon
    let dltIcon=document.createElement("i")
    dltIcon.classList.add("fa-solid", "fa-trash");
    dltIcon.classList.add("trash");
    dltIcon.style.display="none";
    d.append(p);
    d.append(dltIcon)
    cntNote.append(d);
    listNote.push(d);
    // xoa ghi chu
    dltIcon.addEventListener("click",(e)=>{
        e.stopPropagation();
        let index=listNote.indexOf(e.target.parentElement);// lay vi tri phan tu
        notes.splice(index,1); // xoa khoi mang
        localStorage.setItem("notes", JSON.stringify(notes));// cap nhat lai storage
        e.target.parentElement.remove();
    })
    // ẩn hiện khi rê chuột vào
    d.addEventListener("mouseover",()=>{
        d.querySelector(".trash").style.display="inline-block"
        d.querySelector(".newP").classList.toggle("margin");
    })
    d.addEventListener("mouseout",()=>{
        d.querySelector(".trash").style.display="none"
         d.querySelector(".newP").classList.toggle("margin");
    })
    d.addEventListener("click",()=>{
        cNote.value=d.querySelector("p").textContent;
        cNote.style.height="fit-content"
         autosize.update(cNote); 
        dNote.style.display="inline-block";
        d.style.display="none";
        noteChange=d
        
    })
}
notes.forEach(content => renderNote(content))
//chinh sua ghi chu

saveChange.addEventListener("click",()=>{
    noteChange.querySelector("p").textContent=cNote.value
    let index=listNote.indexOf(noteChange);// lay index phan tử vừa sửa
    notes[index]=cNote.value; //cập nhật lại phần tử
    cNote.value="";
   localStorage.setItem("notes", JSON.stringify(notes));// cap nhat lai storage
    noteChange.style.display="inline-block"
    dNote.style.display="none";
})