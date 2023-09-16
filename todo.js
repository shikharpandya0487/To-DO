let inputTag=document.querySelector('#inputid');
let buttonTag=document.querySelector('#Add');
let listcontainer=document.querySelector("#list-container");
console.log(inputTag);
console.log(buttonTag);
console.log(listcontainer);



let check="";
function add()
{
    var checked=false;
    let list=document.createElement('li');
if(inputTag.value=='')
{
alert("u must write something");
}
else if(inputTag.value!='' && list.innerText=='' && check!=inputTag.value)
{
    list.innerText=inputTag.value;
    insert=false;
    listcontainer.appendChild(list);
    var span=document.createElement("span");
    span.innerHTML="&#10060";
    check=list.innerText;
    list.appendChild(span);
    checked=true;

    span.addEventListener("click",operationDelete);
     
    function operationDelete()
    {
        listcontainer.removeChild(list);
    }
}


}
buttonTag.addEventListener('click',add);

// listcontainer.addEventListener("click",function(e)=>{
//     if(e.target.tagName=="li" && checked)
//     {
        
//     }
// })