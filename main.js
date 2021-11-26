let outputSpan;

function submitButton()
{
    const username = document.querySelector('#username').value;
    const note = document.querySelector('#notes').value;

    const url = "http://localhost:3000";
    const params = `?username=${username}&note=${note}`;

    const fetchObject = {
        method: 'GET',
        headers: {
            'Content-Type' : 'text/html'
        }
    };

    fetch(url + params, fetchObject)
        .then(response => response.json())               // obtain json object sent from server
        .then(jsonObject => {                            // use jsonObject and get its message property
            console.log(jsonObject.message);   // set innerHTML of span to message sent in jsonObject
        });
    location.reload();
}

function loadButton()
{
    const username = document.querySelector('#username').value;
    let note = document.querySelector('#notes');
    const url = "http://localhost:3000";
    const params = `?username=${username}`;

    const fetchObject = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        }
    };

    fetch(url + params, fetchObject)
        .then(response => response.json())               // obtain json object sent from server
        .then(jsonObject => {                            // use jsonObject and get its message property
            note.innerHTML = jsonObject.message;   // set innerHTML of span to message sent in jsonObject
        });
}

function deleteButton()
{
    const username = document.querySelector('#username').value;
    const url = "http://localhost:3000";
    const params = `?username=${username}`;

    const fetchObject = {
        method: 'DELETE',
        headers: {
            'Content-Type' : 'application/json'
        }
    };

    fetch(url + params, fetchObject)
        .then(response => response.json())               // obtain json object sent from server
        .then(jsonObject => {                            // use jsonObject and get its message property
            console.log(jsonObject.message);   // set innerHTML of span to message sent in jsonObject
        });
    location.reload();
}