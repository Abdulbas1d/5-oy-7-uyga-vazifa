const container = document.querySelector("#container");
const loaderContainer = document.querySelector("#loaderContainer")
const loader = document.querySelector("#loader")
const data = document.querySelector("#data");
const forms = document.querySelector("#forms");
const form = document.querySelector("#form");
const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const age = document.querySelector("#age");
const number = document.querySelector("#number");
const email = document.querySelector("#email");
const locationn = document.querySelector("#locationn");
const nationality = document.querySelector("#nationality");
const image = document.querySelector("#forImg");
const imgEl = document.querySelector("#img1");
const imgEll = document.querySelector("#img2");
const button = document.querySelector("#btn");
const cards = document.querySelector("#cards");

loader.setAttribute('alt', 'laoding')
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        loaderContainer.remove()
    }, 2000)
});

function getImage() {
    if (imgEl.value) {
        return image.value
    } else if (imgEll.files.length > 0) {
        return URL.createObjectURL(imgEll.files[0])
    } else {
        return ""
    }
}

function validate() {
    if (name.value.length < 3 && typeof name.value === 'string') {
        alert("Ism eng kamida 3 ta harfdan iborat va String da bo'lishi kerak");
        name.focus();
        name.style.outLineColor = 'red';
        return false
    }

    if (surname.value.length < 6 && typeof surname.value === 'string') {
        alert("Familya eng kamida 6 ta harfdan iborat va String bo'lishi kerak");
        surname.focus();
        surname.style.outLineColor = 'red';
        return false
    }

    if (age.value < 0 &&  age.value > 150 && typeof age.value === 'number') {
        alert("Yosh eng kamida 1 yosh eng ko'pi bilan 150 yosh bo'lishi hamda raqamda bo'lishi kerak");
        surname.focus();
        surname.style.outLineColor = 'red';
        return false
    }

    if (number.length < 7) {
        alert("Telefon nomer eng kamdida 7 xonali bolishi va number bo'lishi kerak!");
        number.focus();
        number.style.outLineColor = 'red';
        return false
    }

    if (email.length < 12 && typeof email === 'string') {
        alert("Email Address eng kamida 13 ta belgi va String bo'lishi kerak");
        email.focus();
        email.style.outLineColor = 'red';
        return false
    }

    if (locationn.value == '' && !locationn.value) {
        alert("Qayerda istiqomat qilishingizni kiriting");
        locationn.focus();
        locationn.style.outLineColor = 'red';
        return false
    }

    if (nationality.value == '' && !nationality.value) {
        alert("Millatizi kiriting");
        nationality.focus();
        nationality.style.outLineColor = 'red';
        return false
    }

    if ((imgEll.value == '' && !imgEll.value)) {
        alert("Sur'atigizni kiritishingiz zarur!")
        imgEl.focus();
        imgEl.style.outLineColor = 'red';
        return false;
    }

    return true    
}

function createCard(data) {
    return `
        <div id="card" class="card">
            <img class="card-picture" src="${data.img}" alt="">
            <h3>Ismi: ${data.name}</h3>
            <h3>Familyasi: ${data.surname}</h3>
            <h3>Yoshi: ${data.age}</h3>
            <h3>Telefon Nomeri: ${data.phoneNumber}</h3>
            <h3>Email Adresi: ${data.email}</h3>
            <h3>Yashash Joyi: ${data.locationn}</h3>
            <h3>Millati: ${data.nationality}</h3>
        </div>
    `
}

button && button.addEventListener('click', function(event) {
    event.preventDefault();

    const isValid = validate();
    if (!isValid) {
        alert("Barcha maydonlarni to'ldiring!");
        return
    }
    
    let data = {
        img: getImage(),
        name: name.value,
        surname: surname.value,
        age: age.value,
        number: number.value,
        email: email.value,
        locationn: locationn.value,
        nationality: nationality.value
    }

    form.reset();
    let card = createCard(data)
    cards.innerHTML += card;
})