function hoverEffect(element) {
    element.style.backgroundColor = "#555";
    element.style.color = "#fff";
    element.style.cursor = "pointer";
}

function hoverMain(element) 
{
    element.style.cursor = "pointer";
}

function resetEffect(element) {
    element.style.backgroundColor = "";
    element.style.color = "";
    element.style.cursor = ""; /* Reset cursor to default */
}

function resetContent() {
    var contentSection = document.getElementById('content');
    contentSection.innerHTML = '<p>Ahoj já jsem Bárty a toto je moje testovaci stánka</p>';
}

function changeContent(buttonNumber) {
    var contentSection = document.getElementById('content');

    switch (buttonNumber) {
        case 1:
            contentSection.innerHTML = '<p>About Me content goes here.</p>';
            break;
        case 2:
            contentSection.innerHTML = '<p>Currents Project content goes here.</p>';
            break;
        case 3:
            contentSection.innerHTML = '<p>Documentation content goes here.</p>';
            break;
        case 4:
            contentSection.innerHTML = '<p>Demos content goes here.</p>';
            break;
        default:
            contentSection.innerHTML = '<p>Default content goes here.</p>';
    }
}

function ShowContent(NameOfFile) {
    const contentSection = document.getElementById('content');
    const filePath = '../../Assets/SiteBlocks/' + NameOfFile + '.txt';

    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load file: ${response.status} ${response.statusText}`);
            }
            return response.text();
        })
        .then(fileContent => {
            contentSection.innerText = fileContent;
        })
        .catch(error => {
            console.error(`Error loading file: ${error.message}`);
        });
}

function redirect(page) {
    window.location.href = page;
}