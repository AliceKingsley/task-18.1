const button = document.querySelector('.button');

button.addEventListener("submit", async function () {

    let response = await fetch('https://httpbin.org/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data;charset=utf-8'
            },
            body: new FormData(formElem)
        });

    let result = await response;
    console.log(response);
});