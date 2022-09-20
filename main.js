// Change the font of the body element.
document.body.style.fontFamily = "Arial";


// Center the text of h1 on the page.
document.querySelector('h1').style.textAlign = 'center'

// Select the elements by class name. Then, change the color and font-style of each element.
const categories = document.querySelectorAll('.category')
// console.log(categories);
for(const item of categories) {
    item.style.color = 'black'
    item.style.textDecoration = 'underline'
    item.style.fontSize = '1.5rem'
    item.style.fontStyle = "italic"
    
}

const foodItem = document.querySelectorAll('.food-item');
for(const item of foodItem) {
    item.style.color = 'black'
    item.style.padding = "7px"
    item.style.marginTop = "5px"
    
}

// Create a function named "colorGenerator" that returns a different color.
function generateRandomColor()
{
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    randomColor += "50"
    return randomColor;
}
const foodCategory = document.querySelectorAll('.food-category')
// console.log(foodCategory);
for(const item of foodCategory) {
    item.style.backgroundColor = generateRandomColor()
}

// Align the food-category lists in a row on desktop. 

const main = document.querySelector(".main")
main.style.display = "flex"
main.style.justifyContent = "center"
main.style.alignItems = "center"
main.style.gap = '40px'


for (const item of foodCategory){
    item.style.width = '360px'
    item.style.height = '150px'
    item.style.paddingTop = "3px"

}

// Select the warning at the end of the page by its id warning. Select the id without using a querySelector. Change the size and font of the warning.

const warningId = document.getElementById('warning');
warningId.style.fontSize = '2rem'
warningId.style.fontFamily = 'Gill Sans'



// Select all even allergy-info items. Give the even items a different background color.

const allergies = document.querySelector(".allergies")
allergies.style.listStyle = "none"
allergies.style.width = "300px"





const allergyInfo = document.querySelectorAll(".allergy-info");
// allergyInfo.style.listStyle = "none"
allergyInfo.forEach(({style: item}, i) => {
  if (i % 2 === 1) {
    item.backgroundColor = "#87C8EE";
    item
  }

})






// Make the allergy-warning appear as a column in the center of the page.



const warning = document.querySelector("#warning")
warning.style.display = "flex"
warning.style.justifyContent = "center"
warning.style.alignItems = "center"

const allergyWarning = document.querySelector(".allergy-warning");
allergyWarning.style.display = "flex";
allergyWarning.style.flexFlow = "column";
allergyWarning.style.justifyContent = "center";
allergyWarning.style.alignItems = "center";




// The descriptions in the footer should also be styled, e.g. a rounded border with a background color. They should appear in a column for mobile and in a row for desktop.

const footer = document.querySelector(".footer")
footer.style.display = "flex"
footer.style.display = "flex-row"
footer.style.justifyContent = "center"

const foodDesc = document.querySelectorAll(".food-desc")

foodDesc.forEach(({style: desc}) => {
    desc.border = "4px solid orange"
    desc.borderRadius = "100%"
    desc.padding = "2.5rem"
    desc.margin = "1rem"
    desc.height = "50px"
    desc.width = "50px"
    desc.display = "flex"
    desc.justifyContent = "center"
    desc.alignItems = "center"
})
