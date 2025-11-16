const wrapper = document.querySelector(".wrapper");
const btn = document.querySelector(".btn");


btn.addEventListener('click', (e) => {
    const data = fetchData();
    if(!data){
        console.log("unable to get data from fetchData() fn");
    }
    else{
        console.log("data displayed on webpage successfully")
    }
})


const fetchData = async () => {
    // console.log("fetch called")
    try{
        const response = await fetch("https://randomuser.me/api/")
        const data = await response.json();
        // console.log(data);
        displayData(data);
        
    }
    catch(e){
        console.log("error in fetching data");
        
    }
}
function displayData(data){
    // console.log("entered in display")
    let title = data.results[0].name.title
    let first = data.results[0].name.first
    let last = data.results[0].name.last
    let name = `${title} ${first} ${last}`;
    let email = data.results[0].email;
    let imgLink = data.results[0].picture.large;

    let div = document.createElement("div")
    let pname = document.createElement("p");
    let pemail = document.createElement("p")
    let img = document.createElement("img");

    pname.textContent = `Name : ${name}`
    pemail.textContent = `Email: ${email}`
    img.setAttribute("src", imgLink);
    div.classList.add('active');

    div.appendChild(img);
    div.appendChild(pname);
    div.appendChild(pemail);
    wrapper.appendChild(div);
}

