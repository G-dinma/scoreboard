let homeBtnOne = document.getElementById('home-btn-1')
let homeSrcEl = document.getElementById("home-score")
let homeScore = 0

function increaseByOne() {
    homeScore += 1
    homeSrcEl.textContent = homeScore
}

let homeBtnTwo = document.getElementById('home-btn-2')
let homeEl = document.getElementById('home-score')

function increaseByTwo() {
    homeScore += 2
    homeEl.textContent = homeScore
}    

let homeBtnThree = document.getElementById('home-btn-3')
let homeSrc = document.getElementById('home-score')

function increaseByThree() {
    homeScore += 3
    homeSrc.textContent = homeScore
}

let guestBtnOne = document.getElementById('guest-btn-1')
let guestSrcEl = document.getElementById("guest-score")
let guestScore = 0

function increaseGuestOne() {
    guestScore += 1
    guestSrcEl.textContent = guestScore
}

let guestBtnTwo = document.getElementById('guest-btn-2')
let guestEl = document.getElementById("guest-score")

function increaseGuestTwo() {
    guestScore += 2
    guestEl.textContent = guestScore
}

let guestBtnThree = document.getElementById('guest-btn-3')
let guestSrc = document.getElementById("guest-score")

function increaseGuestThree() {
    guestScore += 3
    guestSrc.textContent = guestScore
}