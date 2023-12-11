const selectInputList = document.querySelectorAll('.input');
const selectPList = document.querySelectorAll('.insert-p');
const selectSpanList = document.querySelectorAll('.insert-span');
const selectBtns = document.querySelectorAll('.btn');
const selectComplete = document.querySelector('.info-complete');
const borderNormal = "1px solid var(--Light-grayish-violet)";
const borderError = "1px solid var(--Red-Error)";

insertCard();

selectBtns[0].addEventListener('click', checkdEnvie);
selectBtns[1].addEventListener('click', selectCompleteOk);

function insertCard() {
    const textErrorSpace = `<p class="error-message">can't contain space</p>`;
    const textErrorLyrics = `<p class="error-message">can't contain lyrics</p>`;

    selectInputList[0].addEventListener('input', () => {

        selectPList[1].textContent = selectInputList[0].value;

        if (selectInputList[0].value === " " ||
            selectInputList[0].value === ""){
            const textErrorMessage = `<p class="error-message">Can't be blank</p>`;
            removeMessageError(0);
            selectInputList[0].style.border = borderError;
            selectInputList[0].insertAdjacentHTML('afterend', textErrorMessage);
        } else {
            selectInputList[0].style.border = borderNormal;
            removeMessageError(0);
        };
    });

    selectInputList[1].addEventListener('input', () => {

        selectPList[0].textContent = selectInputList[1].value;
        
        if (selectInputList[1].value === " " ||
            selectInputList[1].value === null) {
            removeMessageError(1);
            selectInputList[1].style.border = borderError;
            selectInputList[1].insertAdjacentHTML('afterend', textErrorSpace);
        } else {
            selectInputList[1].style.border = borderNormal;
            removeMessageError(1);
        };
    });

    selectInputList[2].addEventListener('input', () => {

        removeEspaceInputs(2);

        selectSpanList[0].textContent = selectInputList[2].value;

        if (selectInputList[2].value === null ||
            selectInputList[2].value <= 0 ||
            selectInputList[2].value > 12) {
            removeMessageError(3);
            selectInputList[2].style.border = borderError;
            selectInputList[3].insertAdjacentHTML('afterend', textErrorSpace);
        } else if (isNaN(selectInputList[2].value)) {
            removeMessageError(3);
            selectInputList[2].style.border = borderError;
            selectInputList[3].insertAdjacentHTML('afterend', textErrorLyrics);
        } else {
            selectInputList[2].style.border = borderNormal;
            removeMessageError(3);
        };
    });

    selectInputList[3].addEventListener('input', () => {

        const anoAtual = new Date().getFullYear().toString().slice(-2);
        removeEspaceInputs(3);

        selectSpanList[1].textContent = selectInputList[3].value;

        if (selectInputList[3].value <= 0 ||
            selectInputList[3].value <= anoAtual ||
            selectInputList[3].value === null) {
            removeMessageError(3);
            selectInputList[3].style.border = borderError;
            selectInputList[3].insertAdjacentHTML('afterend', textErrorSpace);
        } else if (isNaN(selectInputList[3].value)) {
            removeMessageError(3);
            selectInputList[3].style.border = borderError;
            selectInputList[3].insertAdjacentHTML('afterend', textErrorLyrics);
        } else {
            selectInputList[3].style.border = borderNormal;
            removeMessageError(3);
        };
    });

    selectInputList[4].addEventListener('input', () => {

        removeEspaceInputs(4);

        selectPList[2].textContent = selectInputList[4].value;

        if (selectInputList[4].value === " " ||
            selectInputList[4].value === null) {
            removeMessageError(4);
            selectInputList[4].style.border = borderError;
            selectInputList[4].insertAdjacentHTML('afterend', textErrorSpace);
        } else if (isNaN(selectInputList[4].value)) {
            removeMessageError(4);
            selectInputList[4].style.border = borderError;
            selectInputList[4].insertAdjacentHTML('afterend', textErrorLyrics);
        } else {
            selectInputList[4].style.border = borderNormal;
            removeMessageError(4);
        };
    });
};

function removeMessageError(indece) {

    if (selectInputList[indece].nextElementSibling === null) {
        return;
    };

    if (selectInputList[indece].nextElementSibling.classList.value.includes("error-message")) {
        selectInputList[indece].nextElementSibling.remove("error-message");
    };
};

function checkdEnvie() {
    if (selectInputList[0].value === "" ) {
        const textErrorMessage = `<p class="error-message">Can't be blank</p>`;

        selectInputList[0].focus();
        selectInputList[0].style.border = borderError;
        selectInputList[0].insertAdjacentHTML('afterend', textErrorMessage);
    };
    if (selectSpanList[0].value === null) {
        const textErrorMessage = `<p class="error-message">can't contain number</p>`;
        selectInputList[0].focus();
        selectInputList[0].style.border = borderError;
        selectInputList[0].insertAdjacentHTML('afterend', textErrorMessage);
    }; 
    
    // isNaN(selectInputList[4].value)
    // const textErrorNumber = `<p class="error-message">Wrong format, numbers only</p>`;
};

selectInputList[1].addEventListener('input', function (e) {
    let numberValue = e.target.value.replace(/\s/g, '');
    numberValue = numberValue.replace(/(\d{4})/g, '$1 ').trim();
    e.target.value = numberValue;
});

function removeEspaceInputs(indece) {
    selectInputList[indece].addEventListener('input', function (e) {
        let numberValue = e.target.value.replace(/\s/g, '');
        e.target.value = numberValue;
    });
};

function selectCompleteOk() {
    document.location.reload(true);
};