 
let optionsData = []; // Array to store option data (name and URL)

function showOption() {
    const optionsDiv = document.getElementById("options");
    optionsDiv.style.display = "block";
}

function saveOption() {
    const optionName = document.getElementById("optionName").value;
    const optionURL = document.getElementById("optionURL").value;

    // Save data to the optionsData array
    optionsData.push({
        name: optionName,
        url: optionURL
    });

    // Clear input fields
    document.getElementById("optionName").value = "";
    document.getElementById("optionURL").value = "";

    // Update the favicon display
    updateFavicons();

    // Hide the options div
    const optionsDiv = document.getElementById("options");
    optionsDiv.style.display = "none";
}

function updateFavicons() {
    const faviconsDiv = document.getElementById("favicons");
    faviconsDiv.innerHTML = ""; // Clear previous favicons

    optionsData.forEach(option => {
        const iconDiv = document.createElement("div");
        iconDiv.className = "icon";

        const faviconImg = document.createElement("img");
        faviconImg.src = `https://www.google.com/s2/favicons?domain=${option.url}`;

        const iconName = document.createElement("p");
        iconName.textContent = option.name;

        iconDiv.appendChild(faviconImg);
        iconDiv.appendChild(iconName);
        faviconsDiv.appendChild(iconDiv);
    });
}
