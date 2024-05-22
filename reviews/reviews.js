let reviews = [
    {
        name : "Brian Smith",
        job : "Web Developer",
        img : "./author img/brian-smith.jpg",
        text : "In addition to providing unmatched user experience, PWAs offer additional benefits such as reduced website development costs and seamless maintenance for the provider. Plus, they visually look and act like a regular web page. "
    },
    {
        name : "Dipika Bhattacharya",
        job : "Web Designer",
        img : "./author img/dipika-bhattacharya.jpg",
        text : "AI chatbots  will become even more sophisticated to meet users' needs. To achieve this, bots will more efficiently match user behavior by leveraging machine learning, natural language processing, and information retrieval techniques. "
    },
    {
        name : "Florian Dieminger",
        job : "Intern",
        img : "./author img/florian-dieminger.jpg",
        text : "Besides assisting companies in performing faster operations using voice or text chats, AI-enabled chatbots also help  improve customer experience . You can use an AI chatbot to collect data, answer frequently asked questions, and solve other issues.  "
    },
    {
        name : "Vadim Makeev",
        job : "Web Developer",
        img : "./author img/vadim-makeev.jpg",
        text : "First launched by Google in 2015, the accelerated mobile page (AMP) provides mobile users with lightning-fast digital experiences. In addition to offering seamless user experiences and decreasing bounce rates,  Google's AMP>  may improve core business metrics."
    },
    {
        name : "Ruth John",
        job : "Web Developer",
        img : "./author img/ruth-john.jpg",
        text : "While AMP usage has been trending slightly down  since 2020, it remains the  most popular mobile technology used worldwide , used on 35% of websites that implement mobile technologies and over half of the most popular 10,000 websites."
    },
];


let img = document.querySelector("#person-img");
let author = document.querySelector("#author");
let job = document.querySelector("#job");
let info = document.querySelector("#info");
let prevbtn = document.querySelector(".prev-btn");
let nextbtn = document.querySelector(".next-btn");
let randombtn = document.querySelector(".random-btn");


let currentItem = 0;

window.addEventListener("DOMContentLoaded",()=>{
    showPerson();
});

function showPerson(){
    let item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.job;
    info.textContent = item.text;
}

nextbtn.addEventListener("click",()=>{
    currentItem++;
    if (currentItem > reviews.length -1){
        currentItem = 0;
    }
    showPerson();
})

prevbtn.addEventListener("click",()=>{
    currentItem--;
    if (currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson();
})

randombtn.addEventListener("click",()=>{
    currentItem = Math.floor(Math.random()*reviews.length);
    showPerson();
})