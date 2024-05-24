let text = [
    "Barbara had been waiting at the table for twenty minutes. it had been twenty long and excruciating minutes. David had promised that he would be on time today. He never was, but he had promised this one time. She had made him repeat the promise multiple times over the last week until she'd believed his promise. Now she was paying the price.",
    "He read about a hike called the incline in the guidebook. It said it was a strenuous hike and to bring plenty of water. “A beautiful hike to the clouds” described one review. “Not for the faint-hearted,” said another. “Not too bad of a workout”, bragged a third review. I thought I’d hike it when I fly in from Maryland on my day off from the senior citizen's wellness conference. I hiked 2 miles a day around the neighborhood so I could handle a 1.1-mile hike. What a foolish mistake that was for a 70-year-old low-lander.",
    "Sleeping in his car was never the plan but sometimes things don't work out as planned. This had been his life for the last three months and he was just beginning to get used to it. He didn't actually enjoy it, but he had accepted it and come to terms with it. Or at least he thought he had. All that changed when he put the key into the ignition, turned it and the engine didn't make a sound.",
    "Pink ponies and purple giraffes roamed the field. Cotton candy grew from the ground as a chocolate river meandered off to the side. What looked like stones in the pasture were actually rock candy. Everything in her dream seemed to be perfect except for the fact that she had no mouth.",
    "What were they eating? It didn't taste like anything she had ever eaten before and although she was famished, she didn't dare ask. She knew the answer would be one she didn't want to hear.",
    "Dragons don't exist they said. They are the stuff of legend and people's imagination. Greg would have agreed with this assessment without a second thought 24 hours ago. But now that there was a dragon staring directly into his eyes, he questioned everything that he had been told.",
    "There was a leak in the boat. Nobody had yet noticed it, and nobody would for the next couple of hours. This was a problem since the boat was heading out to sea and while the leak was quite small at the moment, it would be much larger when it was ultimately discovered. John had planned it exactly this way.",
    "He collected the plastic trash on a daily basis. It never seemed to end. Even if he cleaned the entire beach, more plastic would cover it the next day after the tide had come in. Although it was a futile effort that would never be done, he continued to pick up the trash each day.",
    "This is important to remember. Love isn't like pie. You don't need to divide it among all your friends and loved ones. No matter how much love you give, you can always give more. It doesn't run out, so don't try to hold back giving it as if it may one day run out. Give it freely and as much as you want.",
    "The paper was blank. It shouldn't have been. There should have been writing on the paper, at least a paragraph if not more. The fact that the writing wasn't there was frustrating. Actually, it was even more than frustrating. It was downright distressing."
];

let btn = document.querySelector(".btn");
let amount = document.querySelector(".amount");
let loremText = document.querySelector(".lorem-text");

btn.addEventListener("click",(e)=>{
    e.preventDefault();

    let val = Number(amount.value);

    if(val>=1 && val<text.length){
        loremText.innerHTML ="";
        for(let i=0; i<val; i++){
            let randomText = Math.floor(Math.random()*text.length);
            loremText.innerHTML += `<p class="generated-para">${text[randomText]}</p> <br>`;
        }
    }
    if (val <= 0){
        alert("Value must be greater than or equal to 1");
    }
    if(val >= text.length){
        alert(`Value must be less than or equal to ${text.length -1}`);
    }
    

})