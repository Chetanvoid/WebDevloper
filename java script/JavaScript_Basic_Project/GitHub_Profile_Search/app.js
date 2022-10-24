const APIURL = "https://api.github.com/users/";

// For api call line:-1
const main = document.querySelector("#main");
const searchBox = document.querySelector("#search")

const getUser = async(username) => {
    // Niche ni 2 line for data and username ne barobar leva yad rakheje 
    const response = await fetch(APIURL + username);
    const data = await response.json()
    console.log(data);
   
    const card = `
        <div class="card">
            <div>
                <img class="avatar" src="${data.avatar_url}" alt="Florin Pop">
            </div>
            <div class="user-info">
                <h2>${data.name}</h2>
                <p>${data.bio}</p>
                <ul class="info">
                    <li>${data.followers}<strong>Followers</strong></li>
                    <li>${data.following}<strong>Following</strong></li>
                    <li>${data.public_repos}<strong>Repos</strong></li>
                </ul>
                <div id="repos">
                  
                </div>
            </div>
        </div>
    `
    main.innerHTML = card;
    getRepos(username)
}


// init call

getUser("chetanvoid")


const getRepos = async(username) => {
    const repos = document.querySelector("#repos")
    //Niche ni line for data and  apdi reposatory ketli che e pan leva mate"/repos"
    //use karyu che
    const response = await fetch(APIURL + username + "/repos")
    const data = await response.json();

    data.forEach(
        (item) => {

            const elem = document.createElement("a")
            elem.classList.add("repo")
            elem.href = item.html_url
            elem.innerText = item.name
            elem.target = "_blank"
            repos.appendChild(elem)
        }
    )
}

const formSubmit = () => {
    if (searchBox.value != "") {
        getUser(searchBox.value);
        // Ano use che ke apde serarch kariye pachi enter kariye atele
        // Niche detail ave ane search box m aki no batave
        searchBox.value = ""
    }
    // form submit thaii tyre refrace no thai ena mate
    return false;
}

// A function bov must che matlab khali apde search box ma search ne enter press no 
//kariye ane search box ni bahar click thai to pan details avi jase.......
searchBox.addEventListener(
        "focusout",
        function() {
            formSubmit()
        }
    )
   