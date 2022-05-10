"use strict";

function passwordStrengthMeter(e){const t=document.createElement("style");document.body.prepend(t),t.innerHTML=`\n\t\t${e.containerElement} {\n\t\t\theight: ${e.height||4}px;\n\t\t\tbackground-color: #e2e9fe;\n\t\t\tposition: relative;\n\t\t\toverflow: hidden;\n\t\t\tborder-radius: ${e.borderRadius.toString()||2}px;\n\t\t}\n    ${e.containerElement} .password-strength-meter-score {\n      height: inherit;\n      width: 0%;\n      transition: .5s ease;\n      background: ${e.colorScore1||"#ea4c62"};\n    }\n    ${e.containerElement} .password-strength-meter-score.psms-25 {width: 25%; background: ${e.colorScore1||"#ea4c62"};}\n    ${e.containerElement} .password-strength-meter-score.psms-50 {width: 50%; background: ${e.colorScore2||"#f1b10f"};}\n    ${e.containerElement} .password-strength-meter-score.psms-75 {width: 75%; background: ${e.colorScore3||"#1787b8"};}\n    ${e.containerElement} .password-strength-meter-score.psms-100 {width: 100%; background: ${e.colorScore4||"#2ecc4a"};}`;const n=document.getElementById(e.containerElement.slice(1));n.classList.add("password-strength-meter");let s=document.createElement("div");s.classList.add("password-strength-meter-score"),n.appendChild(s);const r=document.getElementById(e.passwordInput.slice(1));let o="";r.addEventListener("keyup",function(){o=this.value,function(e){switch(e){case 1:s.className="password-strength-meter-score psms-25",c&&(c.textContent=d[1]||"Too simple"),n.dispatchEvent(new Event("onScore1",{bubbles:!0}));break;case 2:s.className="password-strength-meter-score psms-50",c&&(c.textContent=d[2]||"Simple"),n.dispatchEvent(new Event("onScore2",{bubbles:!0}));break;case 3:s.className="password-strength-meter-score psms-75",c&&(c.textContent=d[3]||"That's OK"),n.dispatchEvent(new Event("onScore3",{bubbles:!0}));break;case 4:s.className="password-strength-meter-score psms-100",c&&(c.textContent=d[4]||"Great password!"),n.dispatchEvent(new Event("onScore4",{bubbles:!0}));break;default:s.className="password-strength-meter-score",c&&(c.textContent=d[0]||"No data"),n.dispatchEvent(new Event("onScore0",{bubbles:!0}))}}(i())});let a=e.pswMinLength||8,c=e.showMessage?document.getElementById(e.messageContainer.slice(1)):null,d=void 0===e.messagesList?["No data","Too simple","Simple","That's OK","Great password!"]:e.messagesList;function i(){let e=0,t=new RegExp("(?=.*[a-z])"),n=new RegExp("(?=.*[A-Z])"),s=new RegExp("(?=.*[0-9])"),r=new RegExp("(?=.{"+a+",})");return o.match(t)&&++e,o.match(n)&&++e,o.match(s)&&++e,o.match(r)&&++e,0===e&&o.length>0&&++e,e}return c&&(c.textContent=d[0]||"No data"),{containerElement:n,getScore:i}}

// => Password Meter Activation

var passwordInputId = document.getElementById("psw-input");
var pswmeter = document.getElementById("pswmeter");
pswmeter.style.display = "none";

passwordInputId.addEventListener("keyup", function(){
    pswmeter.style.display = "block";
});

var passwordStrength = passwordStrengthMeter({
    containerElement: "#pswmeter",
    passwordInput: "#psw-input",
    height: 4,
    borderRadius: 4,
    pswMinLength: 10
});