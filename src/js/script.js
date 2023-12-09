const selectInputList = document.querySelectorAll('.input');
const selectPList = document.querySelectorAll('.insert-p');
const selectSpanList = document.querySelectorAll('.insert-span');

insertCard();

selectInputList[1].addEventListener('input', function (e) {

    let numberValue = e.target.value.replace(/\s/g, '');
    numberValue = numberValue.replace(/(\d{4})/g, '$1 ').trim();
    e.target.value = numberValue;
});

function insertCard() {

    const borderNormal = "1px solid var(--Light-grayish-violet)";
    const borderError = "1px solid var(--Red-Error)";

    selectInputList[0].addEventListener('input', () => {
        const textErrorName = `<p class="error-message">Name blank only</p>`;

        selectPList[1].textContent = selectInputList[0].value;

        if (selectInputList[0].value === " " || selectInputList[0].value === null){
            removeMessageError(0);
            selectInputList[0].style.border = borderError;
            selectInputList[0].insertAdjacentHTML('afterend', textErrorName);
        } else {
            selectInputList[0].style.border = borderNormal;
            removeMessageError(0);
        };
    });

    selectInputList[1].addEventListener('input', () => {
        const textErrorNumber = `<p class="error-message">Wrong format, numbers only</p>`;

        selectPList[0].textContent = selectInputList[1].value;
        
        if (selectInputList[1].value === " " || selectInputList[1].value === null) {
            removeMessageError(1);
            selectInputList[1].style.border = borderError;
            selectInputList[1].insertAdjacentHTML('afterend', textErrorNumber);
        } else {
            selectInputList[1].style.border = borderNormal;
            removeMessageError(1);
        };
    });

    selectInputList[2].addEventListener('input', () => {
        const textErrorMonth = `<p class="error-message">Can't be blank</p>`;

        selectSpanList[0].textContent = selectInputList[2].value;

        if (selectInputList[2].value === null || selectInputList[2].value > 12 || isNaN(selectInputList[2].value)) {
            removeMessageError(3);
            selectInputList[2].style.border = borderError;
            selectInputList[3].insertAdjacentHTML('afterend', textErrorMonth);
        } else {
            selectInputList[2].style.border = borderNormal;
            removeMessageError(3);
        };
    });

    selectInputList[3].addEventListener('input', () => {
        const textErrorYear = `<p class="error-message">Can't be blank</p>`;

        selectSpanList[1].textContent = selectInputList[3].value;

        if (selectInputList[3].value === null || isNaN(selectInputList[3].value)) {
            removeMessageError(3);
            selectInputList[3].style.border = borderError;
            selectInputList[3].insertAdjacentHTML('afterend', textErrorYear);
        } else {
            selectInputList[3].style.border = borderNormal;
            removeMessageError(3);
        };
    });

    selectInputList[4].addEventListener('input', () => {
        const textErrorCode = `<p class="error-message">Can't be blank</p>`;

        selectPList[2].textContent = selectInputList[4].value;

        if (selectInputList[4].value === null || isNaN(selectInputList[4].value)) {
            removeMessageError(4);
            selectInputList[4].style.border = borderError;
            selectInputList[4].insertAdjacentHTML('afterend', textErrorCode);
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