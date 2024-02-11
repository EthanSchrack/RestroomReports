export function createStars(name, rating) {
    let starsContainer = document.getElementById(name);
    let text = "";
    for (let i = 0; i < rating - .99; i++) {
        var star = '<p style="display:inline">⭐</p>';
        var test = '<p>Testing text for stars</p>'
        text += "⭐";        
    }
    
    for (let i = text.length; i < 5; i++) {
        text += "☆";
    }

    if (starsContainer.innerHTML.length < rating - .99) {
        starsContainer.innerHTML += text;
    }
    console.log(starsContainer.innerHTML);
}
