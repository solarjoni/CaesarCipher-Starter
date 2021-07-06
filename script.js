// This function, caesar_cipher(), is the function we're writing together. It's your job to fill it in!

function caesar_cipher(string, key) {
    
  // Up to you to write!

}


// Everything below this comment is part of your starter code. It helps our program run but is not part of the concept we're learning. Feel free to play around to understand it!
// ----------------------------

// This code uses the function we've written, caesar_cipher() and manipulates the text in the HTML textboxes to pass as an argument to our function. It also displays the ciphertext and plain text that is generated.

function encrypt() {
  console.log("Encrypted!");
  document.getElementById("encrypt_output").innerText = caesar_cipher(document.getElementById("plaintext").value, parseInt(document.getElementById("encrypt_key").value));
}

function decrypt() {
  console.log("Decrypted!");
  document.getElementById("decrypt_output").innerText = caesar_cipher(document.getElementById("ciphertext").value, -parseInt(document.getElementById("decrypt_key").value));
}


// This code makes sure that we call our functions upon clicking the buttons.

document.getElementById("encrypt").addEventListener("click", function() {encrypt()});

document.getElementById("decrypt").addEventListener("click", function() {decrypt()});