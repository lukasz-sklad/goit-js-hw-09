import"./assets/style-C7w2Rpj5.js";document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".feedback-form"),m="feedback-form-state";let e=JSON.parse(localStorage.getItem("feedback-form-state")||"{}");e.email=e.email||"",e.message=e.message||"",t.elements.email.value=e.email,t.elements.message.value=e.message,t.addEventListener("input",a=>{e[a.target.name]=a.target.value.trim(),localStorage.setItem(m,JSON.stringify(e))}),t.addEventListener("submit",a=>{a.preventDefault();const s=t.elements.email.value.trim(),l=t.elements.message.value.trim();if(!s||!l){alert("Proszę wypełnić wszystkie pola formularza.");return}console.log({email:s,message:l}),localStorage.removeItem(m),t.reset(),e={email:"",message:""}})});
//# sourceMappingURL=02-form.js.map
