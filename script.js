document.getElementById("calculate").addEventListener("click", function() {
    const height = Number(document.getElementById("height").value);
    const weight = Number(document.getElementById("weight").value);
    const foot = Number(document.getElementById("foot").value);

    // Example formulas (you can adjust to your sizing rules)
    const clothingSize = Math.round((height + weight) / 50);
    const shoeSize = Math.round(foot * 1.5);

    document.getElementById("result").innerHTML =
        `<p>Recommended Clothing Size: ${clothingSize}</p>
         <p>Recommended Shoe Size: ${shoeSize}</p>`;
});
