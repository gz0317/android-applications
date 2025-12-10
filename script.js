document.getElementById("calculate").addEventListener("click", function() {
    const gender = document.getElementById("gender").value;
    const height = Number(document.getElementById("height").value);
    const weight = Number(document.getElementById("weight").value);
    const chest = Number(document.getElementById("chest").value);
    const waist = Number(document.getElementById("waist").value);
    const foot = Number(document.getElementById("foot").value);

    // Basic validation
    if (!height || !weight || !chest || !waist || !foot) {
        alert("Please fill in all fields!");
        return;
    }

    // Clothing size calculation (example formula)
    let clothingSize;
    if (gender === "male") {
        clothingSize = Math.round((height + chest + waist) / 60);
    } else {
        clothingSize = Math.round((height + chest + waist) / 65);
    }

    // Shoe size calculation (example formula)
    let shoeSize;
    if (gender === "male") {
        shoeSize = Math.round(foot * 1.5);
    } else {
        shoeSize = Math.round(foot * 1.55);
    }

    document.getElementById("result").innerHTML =
        `<p>Recommended Clothing Size: ${clothingSize}</p>
         <p>Recommended Shoe Size: ${shoeSize}</p>`;
});
