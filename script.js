let type = "sfw"
let category = "waifu"
const categories = [
    "waifu",
    "neko",
    "shinobu",
    "megumin",
    "bully",
    "cuddle",
    "cry",
    "kiss",
    "lick",
    "hug",
    "awoo",
    "pat",
    "smug",
    "bonk",
    "yeet",
    "blush",
    "smile",
    "wave",
    "highfive",
    "handhold",
    "nom",
    "bite",
    "glomp",
    "slap",
    "kill",
    "kick",
    "happy",
    "wink",
    "poke",
    "dance",
    "cringe"
]
let api;
let imageSection = document.getElementById("imageSection")
let generateWaifuBtn = document.getElementById("generateWaifu")
let loading = document.getElementById("loading")
let downloadLink = document.getElementById("downloadLink")
let select = document.getElementById("select")
let options = ""
for(c of categories){
    options+= `
    <option value="${c}">${c}</option>
    `
}
select.innerHTML = `
<select id="selectInput" style="width: 100%;" class="form-select form-select-sm" aria-label=".form-select-sm example">
<option value="waifu" selected>Choose category</option>
${options}
</select>
`
const imageSkeleton = `
<div class="card" style="width: 300px; background: #fff;border-radius: 30px;">
    <div class="card-body">
        <div class="card-title placeholder-glow">
            <span class="col-12 placeholder" style="height: 430px;"></span>
        </div>
    </div>
</div>
`
let selected = document.getElementById("selectInput")
generateWaifuBtn.addEventListener("click", () => {
    category = selected.value
    api = `https://api.waifu.pics/${type}/${category}`
    generateWaifuBtn.innerHTML = `<div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>`
    imageSection.innerHTML = ""
    imageSection.innerHTML = imageSkeleton
    generateWaifu()
})

function generateWaifu() {
    fetch(api).then(response => {
      return response.json()
    }).then(data => {
        imageSection.innerHTML = `
        <img class="img-thumbnail d-block my-3"
        src="${data.url}" alt="Waifu Image" id="waifuImage">
        `
        downloadLink.href = data.url
        generateWaifuBtn.innerHTML = "Generate more..."
    }).catch(error=> {
        generateWaifuBtn.innerHTML = `Error!`
    })
}