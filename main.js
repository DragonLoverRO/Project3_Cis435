let outputSpan;

function handleLoadButton(){
    const username = document.querySelector('#username').value;
    const url = "http://localhost:3000";
    const params = `?username = ${username}`;
    
    const fetchObject = {
        method: 'GET',
        headers: {
            'Content-Type' : 'text/html'
        }
    };

    fetch(url + params, fetchObject)
    .then(response => response.json())               // obtain json object sent from server
    .then(jsonObject => {                            // use jsonObject and get its message property
        outputSpan.innerHTML = jsonObject.message;   // set innerHTML of span to message sent in jsonObject
    });

}

function handleRemoveButton(){
    const username = document.querySelector('#username').value;

    const url = "http://localhost:3000/add-name";

    const dataObject = {
        firstName: firstName,
        lastName: lastName
    };

    const fetchObject = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(dataObject)
    };

        fetch(url, fetchObject)
        .then(response => response.json())               // obtain json object sent from server
        .then(jsonObject => {                            // use jsonObject and get its message property
            outputSpan.innerHTML = jsonObject.message;   // set innerHTML of span to message sent in jsonObject
        });

}

function start(){
    const loadButton = document.querySelector('#handle_load_button');
    const removeButton = document.querySelector('#handle_remove_button');

    loadButton.onclick = handleLoadButton;
    removeButton.onclick = handleRemoveButton;

    //initialize global outputSpan
    outputSpan = document.querySelector('#notice');

}

window.onload = start;