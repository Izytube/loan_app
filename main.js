let firstLb = document.getElementById("firstLb")
let firstId = document.getElementById("firstId")
let secondLb = document.getElementById("secondLb")
let secondId = document.getElementById("secondId")
let thirdLb = document.getElementById("thirdLb")
let thirdId = document.getElementById("thirdId")
let fourthLb = document.getElementById("fourthLb")
let fourthId = document.getElementById("fourthId")
let fifthLb = document.getElementById("fifthLb")
let fifthId = document.getElementById("fifthId")
let sixthLb = document.getElementById("sixthLb")
let sixthId = document.getElementById("sixthId")
let seventhLb = document.getElementById("seventhLb")
let seventhId = document.getElementById("seventhId")
let annualId = document.getElementById("annualId")
let annualLb = document.getElementById("annualLb")
let firstError = document.getElementById("firstError")
let secondError = document.getElementById("secondError")
let annualError = document.getElementById("annualError")
let thirdError = document.getElementById("thirdError")
let fourthError = document.getElementById("fourthError")
let fifthError = document.getElementById("fifthError")
let sixthError = document.getElementById("sixthError")
let seventhError = document.getElementById("seventhError")
let btn = document.getElementById("btn")
let finalResult = document.getElementById("finalResult")

let accountBalance, creditHistory, cDate, depositDate, depositDiff, depositValue, loanDate, loanDiff, loanValue, repaymentDate, repaymentDiff, repaymentValue
let depositResult, collectionResult, repaymentResult, requiredLoan, annualIncome, annualPercent
let firstPoint, secondPoint, thirdPoint, fourthPoint, fifthPoint, seventhPoint, genPoints
btn.addEventListener("click", function () {
    validData()
})

function validData() {
    if (firstId.value == "") {
        firstError.innerHTML = "Your current account balance is required*"
    } else { firstError.innerHTML = "" }

    if (annualId.value == "") {
        annualError.innerHTML = "Your annual income is required*"
    } else { annualError.innerHTML = "" }

    if (secondId.value == "") {
        secondError.innerHTML = "Your credit history is required*"
    } else { secondError.innerHTML = "" }

    if (thirdId.value == "") {
        thirdError.innerHTML = "Your last deposit date is required*"
    } else { thirdError.innerHTML = "" }

    if (fourthId.value == "") {
        fourthError.innerHTML = "Your last loan collection date is required*"
    } else { fourthError.innerHTML = "" }

    if (fifthId.value == "") {
        fifthError.innerHTML = "Your loan repayment date is required*"
    } else { fifthError.innerHTML = "" }

    if (sixthId.value == "") {
        sixthError.innerHTML = "Your account type is required*"
    } else { sixthError.innerHTML = "" }

    if (seventhId.value == "") {
        seventhError.innerHTML = "Your current account balance is required*"
    } else { seventhError.innerHTML = "" }

    if (firstId.value !== "" && secondId.value !== "" && annualId.value !== "" && thirdId.value !== "" && fourthId.value !== "" && fifthId.value !== "" && sixthId.value !== "" && seventhId.value !== "") {
        acceptValues()
    }
}

function acceptValues() {
    accountBalance = parseInt(firstId.value)
    creditHistory = parseInt(secondId.value)
    annualIncome = parseInt(annualId.value)
    annualPercent = 45 / 100 * annualIncome
    cDate = new Date()
    depositDate = new Date(thirdId.value)
    depositDiff = cDate - depositDate
    depositValue = Math.floor(depositDiff / (1000 * 60 * 60 * 24))
    loanDate = new Date(fourthId.value)
    loanDiff = cDate - loanDate
    loanValue = Math.floor(loanDiff / (1000 * 60 * 60 * 24))
    repaymentDate = new Date(fifthId.value)
    repaymentDiff = cDate - repaymentDate
    repaymentValue = Math.floor(repaymentDiff / (1000 * 60 * 60 * 24))
    accountOprated = sixthId.value
    requiredLoan = parseInt(seventhId.value)
    secondPoint = parseInt(secondId.value)
    seventhPoint = parseInt(sixthId.value)
    processValues()
}

function processValues() {
    if (accountBalance > requiredLoan) {
        firstPoint = 10
    } else { firstPoint = 0 }

    if (depositValue <= 30) {
        thirdPoint = 5
    } else { thirdPoint = 0 }

    if (loanValue > 180) {
        fourthPoint = 10
    } else { fourthPoint = 0 }

    if (repaymentValue <= 180) {
        fifthPoint = 5
    } else { fifthPoint = 0 }

    loanStatus()
}


function loanStatus() {
    genPoints = firstPoint + secondPoint + thirdPoint + fourthPoint + fifthPoint + seventhPoint

    if (genPoints > 30 && firstId.value !== "" && secondId.value !== "" && annualId.value !== "" && thirdId.value !== "" && fourthId.value !== "" && fifthId.value !== "" && sixthId.value !== "" && seventhId.value !== "") {
        alert("You are qualified for NGN" + annualPercent + " Loan")
    } else {
        alert("You are not qualified for a Loan")
    }
    exitApp()
}

function exitApp() {
    firstId.value = ""
    secondId.value = ""
    thirdId.value = ""
    fourthId.value = ""
    fifthId.value = ""
    sixthId.value = ""
    seventhId.value = ""
    annualId.value = ""
    firstError.innerHTML = ""
    annualError.innerHTML = ""
    secondError.innerHTML = ""
    thirdError.innerHTML = ""
    fourthError.innerHTML = ""
    fifthError.innerHTML = ""
    sixthError.innerHTML = ""
    seventhError.innerHTML = ""
}