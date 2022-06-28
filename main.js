function iShoot(enemy){
    enemy.classList.add("dead");
    if (!onlineEnemies().length){
        alert("Good work Avenger , U won!")
        
        window.location.reload();
    } 
    /* this is a funtion to let knw th eplayer has won if the legnth or the ammonut of enemy is below 0 */
    /* if not the enemy div will keep spannning  */
}
function attackAI(enemy) {
   enemy.classList.add("showing");
   setTimeout( ()=> {
       ShootingAI(enemy);
   },1000
   );
   /* a function for enemy behaviours and time or speed  of new enemy spawn  */


   setTimeout(()=>{
       enemy.classList.remove("showing")

   },2000); /*speed of enenmy box showing and being removed */
}

var gunsound;

function ShootingAI(enemy){
   
   if(!enemy.classList.contains("dead"))/*  */ {
   enemy.classList.add("shooting")
   healthpoint(healthpoints - 10);
   setTimeout(()=>{
       enemy.classList.remove("shooting")
       gunsound = new sound("gun.mp3");
       gunsound.play();
   },100);}
}
function onlineEnemies(){
   return document.querySelectorAll(".enemy:not(.dead)");
}
function RandomAI(){
var randomai=Math.random()* onlineEnemies().length;/* random generation of enemy boxs  */
randomai=Math.floor(randomai);
var enemy=onlineEnemies()[randomai];
var randomDelay=Math.random()*100 +1000;

setTimeout(()=> {
   attackAI(enemy);
 RandomAI();

},randomDelay);

}
var healthpoints = 100;

function  healthpoint(points){
   healthpoints=points;
   var hp=document.querySelector("#HP");
   hp.style.width=points + "%";

   if(healthpoints < 0.9) {
       alert("GAME OVER");
       alert("made BY Etsub Y ,Kidst A , Able B , Mesfin s ")
       window.location.reload();
   }
}

function newGame(){
   RandomAI();
   document.querySelector("button").style.display="none";
}
