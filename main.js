(()=>{"use strict";class t{constructor(){this.board=null,this.boardEl=document.getElementById("board")}initiationBoard(t){const e=[];for(let s=0;s<t;s++){e.push([]);for(let n=0;n<t;n++)e[s].push("")}this.board=e,this.renderBoard(this.board)}renderBoard(t){const e=[];for(const[s,n]of t.entries())for(const[t,o]of n.entries())e.push(`\n          <div class="field" \n            data-row="${s}" \n            data-col="${t}"\n            style="grid-row:${s+1};grid-column:${t+1};">\n            ${o||""}\n          </div>\n        `);this.boardEl.innerHTML=e.join("")}}class e{constructor(){this.sprite="sprite",this.positionSprite=-1}randomPositionSprite(t){const e=document.querySelectorAll(".field"),s=Math.floor(Math.random()*t**2);this.positionSprite>=0&&(e[this.positionSprite].classList.remove(this.sprite),this.positionSprite=-1),e[s].classList.add(this.sprite),this.positionSprite=s}}(new class{constructor(){this.size=4,this.modalEl=document.getElementById("modal"),this.countDead=null,this.countLost=null,this.count=null}startGame(){(new t).initiationBoard(this.size);const s=new e;this.onCellClick(),this.onButtonClick(),setInterval((()=>{s.randomPositionSprite(this.size),this.countLost.textContent=+this.countLost.textContent+this.count,1!==this.count&&setTimeout(this.count=1,1e3),this.checkWinner()}),1e3)}onCellClick(){const t=document.querySelectorAll(".field");this.countDead=document.getElementById("dead"),this.countLost=document.getElementById("lost");for(let e=0;e<t.length;e++)t[e].addEventListener("click",(()=>{t[e].classList.contains("sprite")?(t[e].classList.remove("sprite"),this.countDead.textContent=+this.countDead.textContent+1):this.countLost.textContent=+this.countLost.textContent+1,this.checkWinner(),this.count=0}))}onButtonClick(){const t=document.querySelectorAll(".reset");for(const e of t)e.addEventListener("click",(()=>{this.modalEl.classList.contains("hidden")||this.modalEl.classList.add("hidden"),this.reset()}))}reset(){this.countDead.textContent=0,this.countLost.textContent=0}checkWinner(){5==this.countDead.textContent&&this.showWinner("🍾 Победа! 🍾"),this.countLost.textContent>5&&this.showWinner("Вы проиграли!")}showWinner(t){this.modalEl.getElementsByTagName("h2")[0].textContent=t,this.modalEl.classList.remove("hidden"),this.reset()}}).startGame()})();