const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


//Question 1
const cat = 
    {
        complain: function() {
           console.log("Meow!");
       }
    };


cat.complain();

//Question 2
const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

//Question 3
heading.style.fontSize = "2em";

//Question 4
heading.classList.add("subheading");

//Question 5
const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

//Question 6
 const resultsContainer = document.querySelector(".results");

 resultsContainer.innerHTML = `<p>New paragraph</p>`;
 resultsContainer.style.backgroundColor = "yellow";

 //Question 7 
 function listOfCats(list) {
     for(let i = 0; i < list.length; i++) {
         console.log(list[i].name);
     }
 }

 listOfCats(cats)

 //Question 8

let html = "";

function createCats(cats) {
    for(let i = 0; i < cats.length; i++ ) {

        let catAge = cats[i].age;

    if(!cats[i].age) {
        catAge = "Age unknown";
    }
        html += `<div>
                 <h5>${cats[i].name}</5>
                 <p>${catAge}</p>
                 </div>`;

    }
    return html;
}

createCats(cats);
const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = html;