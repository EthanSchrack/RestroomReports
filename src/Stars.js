export function createStars(name, rating) {
    let starsContainer = document.getElementById(name);
    let text = "";
    for (let i = 0; i < rating; i++) {
        var star = '<p style="display:inline">⭐</p>';
        var test = '<p>Testing text for stars</p>'
        text += "⭐";
        // starsContainer.insertAdjacentHTML('beforeend', star);
        
    }
    // starsContainer.insertAdjacentHTML('beforeend', text);

    console.log("length: " + starsContainer.innerHTML.length);
    if (starsContainer.innerHTML.length < rating) {
        starsContainer.innerHTML += text;
    }
    console.log(starsContainer.innerHTML);
    // alert("works");

}
