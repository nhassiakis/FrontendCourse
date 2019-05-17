const button = document.querySelector("#green-button");

let clickCount = 0;
// button.onclick = () => {
//     const article = document.querySelector("#the-article")
//     //article.style.backgroundColor = "green";
//     article.classList.toggle("selected");

    // gör samma sak som toggle.
    // if(article.classList.contains("selected"){
    //     article.classList.remove("selected");
    // }
    // else{
    //     article.classList.add("selected");
    // }
//};

button.addEventListener("click", () => {
    const article = document.querySelectorAll("#recommended article");
    clickCount +=1;

    article.forEach((a, i)=> {
        if (i === clickCount -1) {
            a.classList.add("selected");
        }
        else{
            a.classList.remove("selected");
        }


    });

    if (clickCount === article.length) {
        clickCount = 0;
    }

    // if (clicked) {
    //     article.classList.add("selected");
    //     clicked = false;
    // }
    // else{
    //     article.classList.remove("selected");
    //     clicked = true;
    // }
});

//
// button.addEventListener("click",event => {

//     const article = document.querySelector("#the-article")
//     //article.style.backgroundColor = "green";
//     article.classList.toggle("selected2");
// });