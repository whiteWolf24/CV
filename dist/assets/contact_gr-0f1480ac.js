import{r as d,j as t}from"./index-ac00ef2f.js";import{u as f,e as _}from"./index-cd31d88c.js";const h=()=>{const o=d.useRef(),{handleSubmit:l,formState:i}=f(),{isSubmitting:r}=i;onload=()=>{const e=document.querySelector(".email_form"),s=document.querySelector(".msg_form");e.style.color="black",s.style.color="black"};function n(e,s){s.preventDefault();const m=document.querySelector(".submit_butt"),a=document.querySelector(".success_message");return m.classList.add("submit_butt_anime"),new Promise(c=>{setTimeout(()=>{_.sendForm("service_csf2yrt","template_vz3nrl7",o.current,"vlmZE8H22O2e_lQFj").then(()=>{m.classList.remove("submit_butt_anime"),s.target.reset()}).catch(u=>{console.error("Error:",u)}),c(),a.removeAttribute("hidden")},4e3)})}return onresize=()=>{window.innerHeight<=430?document.body.style.overflowY="scroll":document.body.style.overflowY="hidden"},window.innerHeight<=430?document.body.style.overflowY="scroll":document.body.style.overflowY="hidden",t.jsx("div",{className:"content",children:t.jsx("div",{className:"content_contact",children:t.jsxs("form",{className:"contact_form",ref:o,onSubmit:l(n),children:[t.jsx("div",{children:t.jsx("input",{className:"email_form",type:"email",name:"email",placeholder:"Email Επικοινωνίας",title:"",required:!0,onInput:()=>{const e=document.querySelector(".email_form");e.value.length===0||e.value.trim()==""||e.validity.typeMismatch?e.setCustomValidity("Συμπληρώστε αυτό το πεδίο με ένα έγκυρο email"):e.setCustomValidity("")}})}),t.jsx("div",{children:t.jsx("textarea",{className:"msg_form",name:"message",placeholder:"Μήνυμα",title:"",required:!0,onInput:()=>{const e=document.querySelector(".msg_form");e.value.length===0||e.value.trim()==""?e.setCustomValidity("Συμπληρώστε αυτό το πεδίο"):e.setCustomValidity("")}})}),t.jsxs("button",{className:"submit_butt",disabled:r,type:"submit",value:"Send",children:[r,"Aποστολή"]}),t.jsx("p",{className:"success_message",hidden:!0,children:"Μήνυμα εστάλη"})]})})})};export{h as default};
