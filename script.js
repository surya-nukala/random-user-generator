var image=document.querySelector("#profilepic");
var fullname=document.querySelector('#fullname');
var Email=document.querySelector('#Email')
var phone=document.querySelector('#phone');
var gender=document.querySelector('#Gender');

fullname.innerHTML=''
Email.innerHTML=''
phone.innerHTML=''
gender.innerHTML=''

async function fetchuser(){
    var rawRes=await fetch('https://randomuser.me/api/');
    var res=await rawRes.json();
    console.log(res);
    var user=res.results[0];
    image.src=user.picture.large;
    fullname.innerHTML=` ${user.name.title}.${user.name.first} ${user.name.last}`;
    Email.innerHTML=user.email;
    phone.innerHTML=user.phone  
    gender.innerHTML=user.gender
}
fetchuser()