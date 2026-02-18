

function convertbase10()
{
    var base10Id ="base10input";
    var base10value = document.getElementById(base10Id).value;

    var base16Id = "base16output";
    var squareId = "colourSquare";

    var hexString = decimalToHexColor(base10value);

    document.getElementById(base16Id).value = hexString;

    document.getElementById(squareId).style.backgroundColor = hexString;
}



function decimalToHexColor(decimalNumber) {
    // Ensure the number is within the valid range (0 to 16777215 for #000000 to #FFFFFF)
    if (decimalNumber < 0 || decimalNumber > 0xFFFFFF) {
        console.error("Decimal number is outside the valid range for a 6-digit hex color.");
        return null;
    }

    // Convert the number to a hexadecimal string
    let hex = decimalNumber.toString(16); //

    // Pad the string with leading zeros to ensure it is 6 digits long
    // The padStart() method is ideal for this
    while (hex.length < 6) {
        hex = "0" + hex;
    }
    
    // Alternatively, use the padStart() method (more modern):
    // hex = hex.padStart(6, '0'); //

    return "#" + hex;
}