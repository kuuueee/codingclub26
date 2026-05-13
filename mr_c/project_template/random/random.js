 //This is where you define what the tiers are called.
 //Start with the best tier first, if you want the list to go up,
 //Start witht the worst if you want the list to go down
 
 
 
 //ONLY MAKE YOUR EDITS HERE 
 const tiers = ["S", "A", "B", "C", "D", "E", "F"];
 //ONLY MAKE YOUR EDITS HERE 




function outputToArray() {
      //The constant named input is the value of the text box in randomize.html with the id "inputText"
      //This is the text box where the user enters a list of things
      const input = document.getElementById("inputText").value;

      //Send the text to the function "convertToArray" and get back a converted array
      var array = convertToArray(input);

      //Take the converted array and send it to the output element, where the users views it in the webpage
      document.getElementById("output").textContent =
      JSON.stringify(array, null, 2);
}

//Simple function to take in a string and quanitfy it based on commas.
//***DONT EDIT THIS UNLESS YOU YOU WANT TO CHANGE THE DELIMITER */
function convertToArray(stringArray) {

      var array = stringArray
        .split(",")
        .map(item => item.trim())
        .filter(item => item !== "");

      return array;
}

function outputToTiers(){
      //The input text id is different here

      const input = document.getElementById("tierEntry").value;

      //Send the text to the function "convertToArray" and get back a converted array
      var array = convertToArray(input);
      var new_array = shuffleArray(array);
      
    console.log("new array length : " + new_array.length);

      var tierString = "";
      for (var i = 0; i < new_array.length; i++)
      {
        tierString += tiers[i] + " Tier :\n";
        tierString += " - " + new_array[i] + "\n\n";
      }


    document.getElementById("tierList").textContent = tierString

}

function shuffleArray(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}


//The above functionality only shuffles the array of tiers, and only allows one item per tier.
//I want you to use this psuedo code to make it so that the new way to randomize tiers is item by item,
//Allowing one tier to have many items ranked with it.
function newRandomTiers()
{
    //The current function is defined exactly the same as outputToTiers

      const input = document.getElementById("newtierEntry").value;

      //Send the text to the function "convertToArray" and get back a converted array
      var array = convertToArray(input);
      var new_array = shuffleArray(array);
      
    console.log("new array length : " + new_array.length);



    //ONLY MAKE YOUR EDITS HERE 
      var tierString = "";
      for (var i = 0; i < new_array.length; i++)
      {
        tierString += tiers[i] + " Tier :\n";
        tierString += " - " + new_array[i] + "\n\n";
      }
    //ONLY MAKE YOUR EDITS HERE

      //psudo code

      /*
      for (var i =0; i < new_array.length: i++)
      {
            //add math.random (look up "how to get random value in javascript")
      }
      */



    tierString = "This has no functionality yet"; //remove this line
    document.getElementById("newtierList").textContent = tierString;

}