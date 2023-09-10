const close=document.querySelector("#close");
const login=document.querySelector('#login-btn');
const modal=document.querySelector('#modal');

const openModal = () => {
    modal.style.display="block";
}

const closeModal = () => {
    modal.style.display="none";
}

const windowClose = (e) => {
  if(e.target===modal){
    closeModal();
  }
}

login.addEventListener("click",openModal);
close.addEventListener("click",closeModal);
window.addEventListener("click",windowClose);