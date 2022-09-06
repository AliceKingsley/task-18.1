const button = document.querySelector('.button');
const form = document.querySelector('form');

button.addEventListener("submit", async function () {

    let response = await fetch('https://httpbin.org/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data;charset=utf-8'
            },
            body: new FormData(form)
        });

    let result = await response.formData();
    console.log(result);
});