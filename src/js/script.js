const selectInputList = document.querySelectorAll('.input');
const selectPList = document.querySelectorAll('.insert-p');
const selectSpanList = document.querySelectorAll('.insert-span');
const selectBtns = document.querySelectorAll('.btn');
const selectComplete = document.querySelector('.info-complete');
const currentDate = new Date();
const currentYear = currentDate.getFullYear().toString().slice(-2);
const currentMonth = currentDate.getMonth()+1;
const borderNormal = "1px solid var(--Light-grayish-violet)";
const borderError = "1px solid var(--Red-Error)";
const textErrorBlank = `<p class="error-message">Can't be blank</p>`;
const textErrorLyrics = `<p class="error-message">Wrong format, numbers only</p>`;
const textErrorNumber = `<p class="error-message">Wrong format, lyrics only</p>`;

insertCard();

selectBtns[0].addEventListener('click', checkdEnvie);
selectBtns[1].addEventListener('click', selectCompleteOk);

function insertCard() {

    selectInputList[0].addEventListener('input', () => {

        selectPList[1].textContent = selectInputList[0].value;

        if (selectInputList[0].value === " " ||
            selectInputList[0].value === ""){

            removeMessageError(0);
            
            selectInputList[0].style.border = borderError;
            selectInputList[0].insertAdjacentHTML('afterend', textErrorBlank);
        } else if (/[^A-z|^\s]/g.test(selectInputList[0].value)) {

            removeMessageError(0);
            
            selectInputList[0].style.border = borderError;
            selectInputList[0].insertAdjacentHTML('afterend', textErrorNumber);
        } else {

            selectInputList[0].style.border = borderNormal;
            removeMessageError(0);
        };
    });

    selectInputList[1].addEventListener('input', () => {

        selectPList[0].textContent = selectInputList[1].value;
        
        if (selectInputList[1].value === " " ||
            selectInputList[1].value === "") {

            removeMessageError(1);

            selectInputList[1].style.border = borderError;
            selectInputList[1].insertAdjacentHTML('afterend', textErrorBlank);
        } else if (/[^0-9|^\s]/g.test(selectInputList[1].value)) {

            removeMessageError(1);

            selectInputList[1].style.border = borderError;
            selectInputList[1].insertAdjacentHTML('afterend', textErrorLyrics);
        } else {

            selectInputList[1].style.border = borderNormal;
            removeMessageError(1);
        };
    });

    selectInputList[2].addEventListener('input', () => {
        
        const textErrorMonth = `<p class="error-message">Report from 01 to 12</p>`;
        
        removeEspaceInputs(2);

        selectSpanList[0].textContent = selectInputList[2].value;

        if (selectInputList[2].value === " " ||
            isNaN(selectInputList[2].value) ||
            selectInputList[2].value === "") {

            removeMessageError(3);

            selectInputList[2].style.border = borderError;
            selectInputList[3].insertAdjacentHTML('afterend', textErrorBlank);
        } else if (selectInputList[2].value <= 0 ||
                   selectInputList[2].value > 12) {

            removeMessageError(3);

            selectInputList[2].style.border = borderError;
            selectInputList[3].insertAdjacentHTML('afterend', textErrorMonth);
        } else {
            selectInputList[2].style.border = borderNormal;
            removeMessageError(3);
        };
    });

    selectInputList[3].addEventListener('input', () => {

        const textErrorYear = `<p class="error-message">Can't be less than ${currentYear}</p>`;
        
        removeEspaceInputs(3);

        selectSpanList[1].textContent = selectInputList[3].value;

        if (selectInputList[3].value === "") {

            removeMessageError(3);

            selectInputList[3].style.border = borderError;
            selectInputList[3].insertAdjacentHTML('afterend', textErrorBlank);
        } else if (selectInputList[3].value <= 0 ||
                   isNaN(selectInputList[3].value) ||
                   selectInputList[3].value < currentYear) {

            removeMessageError(3);

            selectInputList[3].style.border = borderError;
            selectInputList[3].insertAdjacentHTML('afterend', textErrorYear);
        } else {
            selectInputList[3].style.border = borderNormal;
            removeMessageError(3);
        };
    });

    selectInputList[4].addEventListener('input', () => {

        removeEspaceInputs(4);

        selectPList[2].textContent = selectInputList[4].value;

        if (selectInputList[4].value === " " ||
            isNaN(selectInputList[4].value) ||
            selectInputList[4].value === "") {

            removeMessageError(4);

            selectInputList[4].style.border = borderError;
            selectInputList[4].insertAdjacentHTML('afterend', textErrorBlank);
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

    if (selectInputList[0].value === "" ||
        selectInputList[0].value === " ") {
        
        removeMessageError(0);

        selectInputList[0].focus();
        selectInputList[0].style.border = borderError;
        selectInputList[0].insertAdjacentHTML('afterend', textErrorBlank);
    } else if (/[^A-z|^\s]/.test(selectInputList[0].value)) {
        
        removeMessageError(0);

        selectInputList[0].focus();
        selectInputList[0].style.border = borderError;
        selectInputList[0].insertAdjacentHTML('afterend', textErrorNumber);
    } else if (selectInputList[1].value === "" ||
               selectInputList[1].value === " ") {
        
        removeMessageError(1);

        selectInputList[1].focus();
        selectInputList[1].style.border = borderError;
        selectInputList[1].insertAdjacentHTML('afterend', textErrorBlank);
    } else if (/[^0-9|^\s]/.test(selectInputList[1].value)) {

        removeMessageError(1);

        selectInputList[1].focus();
        selectInputList[1].style.border = borderError;
        selectInputList[1].insertAdjacentHTML('afterend', textErrorLyrics);
    } else if (selectInputList[2].value === "" ||
               selectInputList[2].value === " " ||
               selectInputList[2].value <= 0 ||
               selectInputList[2].value > 12) {

        removeMessageError(3);

        selectInputList[2].focus();
        selectInputList[2].style.border = borderError;
        selectInputList[3].insertAdjacentHTML('afterend', textErrorBlank);
    } else if (selectInputList[3].value === "" ||
               selectInputList[3].value === " ") {
                removeMessageError(3);

                selectInputList[3].focus();
                selectInputList[3].style.border = borderError;
                selectInputList[3].insertAdjacentHTML('afterend', textErrorBlank);
    } else if (selectInputList[2].value < currentMonth &&
               selectInputList[3].value <= currentYear) {

                const textErrorDate = `<p class="error-message">Card has expired</p>`;
                removeMessageError(3);

                selectInputList[3].focus();
                selectInputList[3].style.border = borderError;
                selectInputList[3].insertAdjacentHTML('afterend', textErrorDate);
    };
};

selectInputList[1].addEventListener('input', function (e) {
    let numberValue = e.target.value.replace(/\s/g, '');
    numberValue = numberValue.replace(/(\w{4})/g, '$1 ').trim();
    e.target.value = numberValue;
});

function removeEspaceInputs(indece) {
    selectInputList[indece].addEventListener('input', function (e) {
        let numberValue = e.target.value.replace(/[^0-9]/g, '');
        e.target.value = numberValue;
    });
};

function selectCompleteOk() {
    document.location.reload(true);
};