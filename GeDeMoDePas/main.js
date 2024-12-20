
    let charLengthSpan = document.getElementById("charLengthSpan");
    let charLengthInput = document.getElementById("charLengthInput");
    let generatedPassword = document.getElementById("generatedPassword");
    let generateBtn = document.getElementById("generateBtn");
    let copyBtn = document.getElementById("copyButton");
    let copiedAlert = document.getElementById("copiedAlert");
    
    let includeUpper = document.getElementById("includeUpper");
    let includeLower = document.getElementById("includeLower");
    let includeNumber = document.getElementById("includeNumber");
    let includeSymbol = document.getElementById("includeSymbol");
    let excludeSimilars = document.getElementById("excludeSimilars");
    
    let passwordLength = 0,
        options = {
        lower: includeLower.checked,
        upper: includeUpper.checked,
        number: includeNumber.checked,
        symbol: includeSymbol.checked,
        noSimilars: excludeSimilars.checked
        };
    
    // Callback pour changement de taille de mdp
    function charLengthChange(value) {
        charLengthSpan.innerHTML = parseInt(value);
        passwordLength = value;
    }
    
    // Genere le mot de passe
    function generatePassword(length, params) {
        let generated = Random.string(length, params);
        generated = options.noSimilars
        ? generated.replace(/i|I|1|l|o|O|0|S/, "")
        : generated;
        generatedPassword.innerHTML = generated;
    }
    
    // Souscrit aux changements pour les checkbox
    [includeLower, includeUpper, includeNumber, includeSymbol].forEach((input) => {
        input.addEventListener("change", (evt) => {
        const property = input.id.toLowerCase().replace("include", "");
        options[property] = input.checked;
        });
    });
    
    excludeSimilars.addEventListener("change", (evt) => {
        options.noSimilars = excludeSimilars.checked;
    });
    
    generateBtn.addEventListener("click", (evt) => {
        evt.preventDefault();
        generatePassword(passwordLength, options);
    });
    
    copyBtn.addEventListener("click", (evt) => {
        navigator.clipboard.writeText(generatedPassword.textContent);
        copiedAlert.classList.remove("hidden");
    
        let t = setTimeout(() => {
        copiedAlert.classList.add("hidden");
        clearTimeout(t);
        }, 3000);
    });
    
    charLengthChange(charLengthInput.value);
    generatePassword(passwordLength, options);
    