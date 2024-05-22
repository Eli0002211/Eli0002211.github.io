// password generator functions


function deskPhonePassword(){
    var password = Math.floor(Math.random() * 1000000000);
    var inputBox = $("#deskphone-password");
    inputBox.val(password);
    inputBox.select();
    document.execCommand("copy");
    $("#deskphone-password-button").text("Copied!")
}


function insurerPassword(){
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'm', 'n',
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let uppercaseLetters = ['A', 'B', 'C', 'D',
    'E', 'F', 'G', 'H', 'J', 'K', 'L','M', 'N', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7','8','9'];

    let symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+'];

    let passwordList = [];

    if ($("select").val() === "16") {
        passwordList = passwordList.concat(letters.sort(() => Math.random() - 0.5).slice(0, 4));
        passwordList = passwordList.concat(numbers.sort(() => Math.random() - 0.5).slice(0, 4));
        passwordList = passwordList.concat(symbols.sort(() => Math.random() - 0.5).slice(0, 4));
        passwordList = passwordList.concat(uppercaseLetters.sort(() => Math.random() - 0.5).slice(0, 4));
    } else {
        if ($("select").val() === "15") {
            passwordList = passwordList.concat(letters.sort(() => Math.random() - 0.5).slice(0, 3));
            passwordList = passwordList.concat(numbers.sort(() => Math.random() - 0.5).slice(0, 4));
            passwordList = passwordList.concat(symbols.sort(() => Math.random() - 0.5).slice(0, 4));
            passwordList = passwordList.concat(uppercaseLetters.sort(() => Math.random() - 0.5).slice(0, 4));
        } else {
            if ($("select").val() === "14") {
                passwordList = passwordList.concat(letters.sort(() => Math.random() - 0.5).slice(0, 3));
                passwordList = passwordList.concat(numbers.sort(() => Math.random() - 0.5).slice(0, 3));
                passwordList = passwordList.concat(symbols.sort(() => Math.random() - 0.5).slice(0, 4));
                passwordList = passwordList.concat(uppercaseLetters.sort(() => Math.random() - 0.5).slice(0, 4));
            } else {
                if ($("select").val() === "13") {
                    passwordList = passwordList.concat(letters.sort(() => Math.random() - 0.5).slice(0, 3));
                    passwordList = passwordList.concat(numbers.sort(() => Math.random() - 0.5).slice(0, 3));
                    passwordList = passwordList.concat(symbols.sort(() => Math.random() - 0.5).slice(0, 3));
                    passwordList = passwordList.concat(uppercaseLetters.sort(() => Math.random() - 0.5).slice(0, 4));
                } else {
                    if ($("select").val() === "12") {
                        passwordList = passwordList.concat(letters.sort(() => Math.random() - 0.5).slice(0, 2));
                        passwordList = passwordList.concat(numbers.sort(() => Math.random() - 0.5).slice(0, 3));
                        passwordList = passwordList.concat(symbols.sort(() => Math.random() - 0.5).slice(0, 3));
                        passwordList = passwordList.concat(uppercaseLetters.sort(() => Math.random() - 0.5).slice(0, 4));
                    }
                }
            }
        }
    }

    passwordList = passwordList.sort(() => Math.random() - 0.5);
    let password = passwordList.join('');

    var inputBox = $("#insurer-password");
    inputBox.val(password);
    inputBox.select();
    document.execCommand("copy");
    $("#insurer-password-button").text("Copied!")
}