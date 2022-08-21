class Cat {
    constructor(nikname, name, contacts, breed, feed, sex, comments, photo) {
        this.nikname = nikname;
        this.name = name;
        this.contacts = contacts;
        this.breed = breed;
        this.feed = feed;
        this.sex = sex;
        this.comments = comments;
        this.photo = photo;
    }
}

const form = document.querySelector('.form');
form.addEventListener("submit", e => { 
    e.preventDefault(); 
    e.target.reset(); 
});

const button = document.querySelector('.button');
button.addEventListener("click", createCat);

function createCat() {
    let nikname = document.querySelector('#nikname-field').value;
    let name = document.querySelector('#name-field').value;
    let contacts = document.querySelector('#contacts-field').value;
    let breed = document.querySelector('#breed-field').value;
    let feedInput = document.querySelectorAll('[name="feed"]');
    let feed = [];
    for (const item of feedInput) {
        if (item.checked) {
            feed.push(item.value);
        }
    }
    let sex = document.querySelector('[name="sex"]').value;
    let comments = document.querySelector('#comments-field').value;
    let photo = document.querySelector('#photo-field').value;

    let kitty = new Cat(nikname, name, contacts, breed, feed, sex, comments, photo);
    console.log(kitty);
}