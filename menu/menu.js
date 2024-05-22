let menu = [
    {
        img : "images/oreo-cheesecake.PNG",
        title : "Oreo Cheesecake Milkshake",
        price: "Rs. 200",
        description : "Oreo fans, take note: We blended up the cookies with a little cream cheese (use more if you like the tang) to re-create a slice of beloved Oreo cheesecake. Complete the look with a dollop of whipped cream and two Mini Oreos.",
        type : "shakes",
    },
    {
        img : "images/red-vine-milkshake.PNG",
        title : "Red Wine Milkshakes ",
        price: "Rs. 350",
        description : "How much red wine you choose to pour in the blender is entirely up to you—we usually just eyeball it. A fruit-forward red wine like Zinfandel is best for vanilla ice cream, but feel free to experiment with semisweet sparkling red wines too, like Lambrusco or Brachetto D'acqui.",
        type : "shakes",
    },
    {
        img : "images/burboun-milk-punch.PNG",
        title : "Bourbon Milk Punch",
        price: "Rs. 450",
        description : "This boozy milkshake packs a serious punch. Mixed with bourbon and honey, it's like a Southern summer dream, and we can't get enough. ",
        type : "shakes",
    },
    {
        img : "images/idli.PNG",
        title : "Oats Idli ",
        price: "Rs. 50",
        description : "Idli, a staple of South Indian breakfasts, is a steamed rice cake that is light, fluffy, and easy on the stomach. The fermentation process enhances its flavour, making it a canvas for savouring accompanying chutneys and sambar.",
        type : "breakfast",
    },
    {
        img : "images/misal-paav.PNG",
        title : "Misal Pav",
        price: "Rs. 40",
        description : "A traditional Maharashtrian breakfast meal to start your day with. Get the most of flavourful vegetables combined with fluffy pavs.",
        type : "breakfast",
    },
    {
        img : "images/rava-upma.PNG",
        title : "Rava Upma",
        price: "Rs. 60",
        description : "Suji upma cooked with fresh vegetables, tempered with spices, and garnished with fresh herbs. It offers a unique flavour to the classic South Indian breakfast, adding a touch of elegance to your morning routine.",
        type : "breakfast",
    },
    {
        img : "images/vada-paav.PNG",
        title : "Vada Pav ",
        price: "Rs. 90",
        description : "The most popular street food from Mumbai, so much so that Mumbai is almost synonymous to Vada Pav. It is basically Batata Vada sandwiched between slices of a Pav along with a generous amount of sweet and spicy chutneys.",
        type : "breakfast",
    },
    {
        img : "images/veg-pulav.PNG",
        title : "Veg Pulav",
        price: "Rs. 150",
        description : "Veg pulao is another creative lunch menu idea. This delicious dish is so tasty that you can never say no to it. You can add a lot of vegetables like peas, cauliflower, spinach and more to level up the taste of veg pulao. You can even add a lot of spices like pepper, cumin powder and more to make this dish even more flavourful. ",
        type: "lunch",
    },
    {
        img : "images/dam-aalu.PNG",
        title : "Dam Aloo",
        price: "Rs. 190",
        description : "Aloo dishes are the favourite of many kids. So, tweak the taste of potato with dum aloo sabzi which is a special lunch recipe for kids. Dum aloo is so tasty and flavourful that you will always want to make more of it. You can best enjoy dum aloo with chapati or pulao for a delightful experience.  ",
        type: "lunch",
    },
    {
        img : "images/rajma-chaval.PNG",
        title : "Rajma Chaval",
        price: "Rs. 250",
        description : "Aloo dishes are the favourite of many kids. So, tweak the taste of potato with dum aloo sabzi which is a special lunch recipe for kids. Dum aloo is so tasty and flavourful that you will always want to make more of it. You can best enjoy dum aloo with chapati or pulao for a delightful experience.  ",
        type: "lunch",
    },
    {
        img : "images/masala-dosa.PNG",
        title : "Masala Dosa",
        price: "Rs. 300",
        description : "There is no other South Indian dish that can match the taste of masala dosa. You can make dosa by stuffing different ingredients like paneer, potatoes and more. Masala dosa is not only a healthy lunch recipe but you can even make it during any other time of the day. ",
        type: "lunch",
    },
    {
        img : "images/dinner1.PNG",
        title : "Fettuccine Alfredo",
        price: "Rs. 350",
        description : "This fettuccini is served with a homemade sauce that doesn't take much more time than opening a jar. Once you see how easy and delicious it is to make it from scratch, you'll never reach for store-bought again.",
        type: "dinner",
    },
    {
        img : "images/dinner2.PNG",
        title : "Pulled Pork Loaded Baked Potatoes",
        price: "Rs. 400",
        description : "Transform basic baked potatoes into a meal with the addition of pulled pork and veggies. You can also swap in shredded chicken if preferred. ",
        type: "dinner",
    },
    {
        img : "images/dinner3.PNG",
        title : "Fresh Salmon Cakes With Buttermilk Dressing",
        price: "Rs. 300",
        description : "Remember the canned salmon cakes from your childhood? They're all grown up and served alongside tender lettuce and crisp peas and radishes. Drizzle with our homemade Buttermilk Dressing, which you can make ahead of time and will want to add to everything.",
        type: "dinner",
    },
    {
        img : "images/dinner4.PNG",
        title : "Creamy Kale And Pasta Bake",
        price: "Rs. 250",
        description : "This meat-free casserole is one delicious way to enjoy your veggies this week. Even kids love kale mixed with pasta, cheese, and a creamy sauce. The dish primarily comes together on the stovetop, with just a quick broil in the oven.",
        type: "dinner",
    },

];

let article = document.querySelector("#article");
let menuItem = document.querySelector(".menu-item");
let image = document.querySelector(".img");
let menuTitle = document.querySelector(".menu-title");
let price = document.querySelector(".menu-price");
let itemDescription = document.querySelector(".item-description");

let buttons = document.querySelectorAll(".btn");
let allBtn = document.querySelector(".all");
let breakfastBtn = document.querySelector(".breakfast");
let lunchBtn = document.querySelector(".lunch");
let shakesBtn = document.querySelector(".shakes");
let dinnerBtn = document.querySelector(".dinner");

window.addEventListener("DOMContentLoaded",()=>{
   displayMenu(menu);
})

function displayMenu(menuArr){
    menuArr.forEach(element => {
        article.innerHTML += 
        `
        <article class="menu-item">
        <div class="img-div">
        <img src=${element.img} class="img">
        </div>
        <div class="item-info">
            <header class="menu-item-header">
            <p class="menu-title">${element.title}</p>
            <p class="menu-price">${element.price}</p>
            </header> <hr>
            <div class="item-description">${element.description} </div>
        </div>
       </article>
        `
    });
}




buttons.forEach((btn) => {
    let target = btn.classList;

    if (target.contains("breakfast")) {
        btn.addEventListener("click", (e) => {
            let arr = [];
            article.innerHTML = "";
            menu.filter((element) => {
                if (element.type === "breakfast") {
                    arr.push(element);
                }
            });
            displayMenu(arr);
        });
    }

    if (target.contains("lunch")) {
        btn.addEventListener("click", (e) => {
            let arr = [];
            article.innerHTML = "";
            menu.filter((element) => {
                if (element.type === "lunch") {
                    arr.push(element);
                }
            });
            displayMenu(arr);
        });
    }

    if (target.contains("shakes")) {
        btn.addEventListener("click", (e) => {
            let arr = [];
            article.innerHTML = "";
            menu.filter((element) => {
                if (element.type === "shakes") {
                    arr.push(element);
                }
            });
            displayMenu(arr);
        });
    }

    if (target.contains("dinner")) {
        btn.addEventListener("click", (e) => {
            let arr = [];
            article.innerHTML = "";
            menu.filter((element) => {
                if (element.type === "dinner") {
                    arr.push(element);
                }
            });
            displayMenu(arr);
        });
    }

    if (target.contains("all")) {
        btn.addEventListener("click", (e) => {
           article.innerHTML = "";
            displayMenu(menu);
        });
    }
});


