let MainDiv = {
    type: "div",
    class: "container",
    child: [
        {
            type: "div",
            class: "top-div",
            child: [
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
            child: [
                {
                    type: "label",
                    class: "wd-to-text",
                    text: "Withdraw To"
                },
                {
                    type: "select",
                    class: "select-acc",
                    child: [
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
                    child: [
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
            child: [
                {
                    type: "div",
                    class: "bottom-up",
                    child: [
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
                    child: [
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



function create(MainDiv) {
    let temp = document.createElement(MainDiv.type);

    if (MainDiv.class) {
        temp.classList.add(MainDiv.class);
    }
    if (MainDiv.text) {
        temp.innerText = MainDiv.text;
    }
    if (MainDiv.option) {
        temp.option = MainDiv.option;
    }
    if (MainDiv.placeholder) {
        temp.placeholder = MainDiv.placeholder;
    }
    if (MainDiv.child) {
        MainDiv.child.forEach(item => {
            temp.appendChild(create(item));
        })
    }
    return temp;
}

let mainDiv = create(MainDiv);
document.body.appendChild(mainDiv);