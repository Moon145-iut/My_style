const array = [
    "hello", 
    "hi", 
    "baby", 
    "ki koro tumi", 
    "babu khaiso ?", 
    "kemon acho ?", 
    "kemon lagche",
    "Guli korbo kintu",
    "vabi valo ache ?",
    "kotha bondho", 
    "arey baba", 
    "ki obostha", 
    "ki jani",  
    "bhalo achi", 
    "amake chera",  
    "chol pagla", 
    "ki khobor?", 
    "oi ja", 
    "ki bhai?", 
    "ki re?", 
    "jato shala vag", 
    "gadha tui", 
    "jhogra hobe?", 
    "chasmish kothakar", 
    "kichu nai", 
    "dure ja"
];


/*const random = Math.floor(Math.random() * array.length);

const url = "https://cataas.com/cat";

const image = document.getElementById("cat");
image.src = url;

const text = document.getElementById("text");
text.innerHTML = decodeURI(array[random]);*/

const images = [
    'https://imgur.com/CfMbgeC',
    'https://imgur.com/hc3M8ol',
    'https://imgur.com/WuhMSMF',
    'https://imgur.com/y36Ibpq0',
    'https://imgur.com/AMn4aF5',
    'https://imgur.com/jNgShO0',
    'https://imgur.com/r1AamYG',
    'https://imgur.com/OfxGOO4',
    'https://imgur.com/3sAOBuS',
    'https://imgur.com/wmOAmIM',
    'https://imgur.com/dmTYqHL',
    'https://imgur.com/VdBygKp',
];


function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

window.onload = function() {
    const imgElement = document.getElementById('cat');
    imgElement.src = getRandomImage();
}

