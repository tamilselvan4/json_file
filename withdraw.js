let MainDiv = {
    type: "div",
    class: "container",
    container: [
        {
            type: "div",
            class: "top-div",
            topDiv: [
                {
                    type: "label",
                    class: "display-amount",
                    text: "$2956.00"
                },
                {
                    type: "label",
                    class: "balance-text",
                    text: "Available Balance"
                },
                {
                    type: "a",
                    class: "wd-full-amount",
                    text: "WITHDRAW FULL AMOUNT"
                }
            ]
        },
        {
            type: "div",
            class: "middle-div",
            middleDiv: [
                {
                    type: "label",
                    class: "wd-to-text",
                    text: "Withdraw To"
                },
                {
                    type: "select",
                    class: "select-acc",
                    selectAccount: [
                        {
                            type: "option",
                            text: "HDFC Bank - XXXXXXXXXXXX-9025"
                        },
                        {
                            type: "option",
                            text: "Bank A/c 2 - XXXXXX-1211"
                        },
                        {
                            type: "option",
                            text: "Bank A/c 3 - XXXXXX-2011"
                        },
                        {
                            type: "option",
                            text: "Bank A/c 4 - XXXXXX-2011"
                        }
                    ]
                },
                {
                    type: "label",
                    class: "enter-amount",
                    text: "Amount"
                },
                {
                    type: "div",
                    class: "input-div",
                    inputDiv: [
                        {
                            type: "span",
                            class: "input-front",
                            text: "$"
                        },
                        {
                            type: "input",
                            class: "input-amount",
                            placeholder: "1,000"
                        }
                    ]
                }
            ]
        },
        {
            type: "div",
            class: "bottom-div",
            bottomDiv: [
                {
                    type: "div",
                    class: "bottom-up",
                    bottomUp: [
                        {
                            type: "label",
                            class: "top-left",
                            text: "Transaction fees"
                        },
                        {
                            type: "label",
                            class: "top-right",
                            text: "5.00 USD"
                        }
                    ]
                },
                {
                    type: "div",
                    class: "bottom-down",
                    bottomDown: [
                        {
                            type: "label",
                            class: "down-left",
                            text: "Amount to Withdraw"
                        },
                        {
                            type: "label",
                            class: "down-right",
                            text: "1,000.00 USD"
                        }
                    ]
                },
                {
                    type: "button",
                    class: "continue-buttom",
                    text: "Continue"
                }
            ]
        }
    ]
}

function create(elementData) {
    if (typeof elementData === 'string') {
        return document.createTextNode(elementData);
    }

    const element = document.createElement(elementData.type);

    if (elementData.class) {
        element.classList.add(elementData.class);
    }
    if (elementData.text) {
        element.innerText = elementData.text;
    }
    if (elementData.placeholder) {
        element.placeholder = elementData.placeholder;
    }
    if (elementData.container) {
        elementData.container.forEach(item => {
            element.appendChild(create(item));
        });
    }
    if (elementData.selectAccount) {
        elementData.selectAccount.forEach(item => {
            element.appendChild(create(item));
        });
    }
    if (elementData.inputDiv) {
        elementData.inputDiv.forEach(item => {
            element.appendChild(create(item));
        });
    }
    if (elementData.topDiv) {
        elementData.topDiv.forEach(item => {
            element.appendChild(create(item));
        });
    }
    if (elementData.middleDiv) {
        elementData.middleDiv.forEach(item => {
            element.appendChild(create(item));
        });
    }
    if (elementData.bottomDiv) {
        elementData.bottomDiv.forEach(item => {
            element.appendChild(create(item));
        });
    }
    if (elementData.bottomUp) {
        elementData.bottomUp.forEach(item => {
            element.appendChild(create(item));
        });
    }
    if (elementData.bottomDown) {
        elementData.bottomDown.forEach(item => {
            element.appendChild(create(item));
        });
    }

    return element;
}

let mainDiv = create(MainDiv);
document.body.appendChild(mainDiv);
