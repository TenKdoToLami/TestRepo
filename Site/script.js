function changeContent(buttonNumber) 
{
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
