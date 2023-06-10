/* ----------------
Variables
------------------*/
const gridContainer = document.querySelector(".grid-container");
const navContainer = document.querySelector(".nav-container");
const hamburgerIcon = document.getElementById("hamburger-icon");
const hamburgerIconElement = hamburgerIcon.querySelector("i");
const navSmall = document.getElementById("nav-small");
const navSmallIconElement = navSmall.querySelector("i");
const mainContainer = document.querySelector(".main-container");

const headerItem = document.querySelector(".header-item");
const headerLogo = document.querySelector(".header-site");
const searchIcon1 = document.querySelector(".header-search-icon1");
const searchContainer = document.querySelector(".search-container");
const searchBarWrapper = document.querySelector(".search-bar-wrapper");
const searchBar = document.querySelector(".search-input");
const searchIcon2 = document.querySelector(".header-search-icon2");

const microphone = document.querySelector(".header-microphone");
const ellipsis = document.querySelector(".header-ellipsis");
const signBtn = document.querySelector(".btn-signIn");

const navLarge = document.querySelector(".nav-large-container");
const navItemContainer = document.querySelector(".nav-item-container");

/* ----------------
Functions
------------------*/
function toggleNavIcon() {
	hamburgerIconElement.classList.toggle("fa-bars");
	hamburgerIconElement.classList.toggle("fa-xmark");
}
function smallScreenNav(property) {
	navSmall.style.display = `${property}`;
}
function openLargeScreenNav() {
	gridContainer.style.gridTemplateColumns = "65px 160px 1fr";
	gridContainer.style.gridTemplateRows = "65px 1fr";
	gridContainer.style.gridTemplateAreas = `"alias-nav alias-header alias-header"
                                           "alias-nav-items  alias-nav-items  alias-main"`;

	navLarge.style.display = "flex";
	navLarge.style.flexDirection = "column";
	navItemContainer.style.display = "none";
	navContainer.style.height = "auto";
	toggleNavIcon();
}
function closeLargeScreenNav() {
	gridContainer.style.gridTemplateColumns = "65px 1fr";
	gridContainer.style.gridTemplateRows = "65px 1fr";
	gridContainer.style.gridTemplateAreas = `"alias-nav  alias-header"
                                           "alias-nav    alias-main"`;

	navLarge.style.display = "none";
	navItemContainer.style.display = "block";
	navContainer.style.height = "100%";
	toggleNavIcon();
}

// function that removes background filter when menu is closed on small screens(<1200px)
function removeFilter() {
	if (gridContainer.classList.contains("grid-filter")) {
		gridContainer.classList.toggle("grid-filter");
	}
}
// function that adds background filter when menu is open on small screens(<1200px)
function addFilter() {
	if (!gridContainer.classList.contains("grid-filter")) {
		gridContainer.classList.toggle("grid-filter");
	}
}

/* ----------------
Event Listeners
------------------*/

hamburgerIcon.addEventListener("click", () => {
	if (window.innerWidth < 1400) {
		smallScreenNav("block");
		addFilter();
	}
});

navSmallIconElement.addEventListener("click", () => {
	if (window.innerWidth < 1400) {
		smallScreenNav("none");
		removeFilter();
	}
});

hamburgerIcon.addEventListener("click", () => {
	if (window.innerWidth >= 1400) {
		if (hamburgerIconElement.classList.contains("fa-bars")) {
			openLargeScreenNav();
		} else if (hamburgerIconElement.classList.contains("fa-xmark")) {
			closeLargeScreenNav();
		}
	}
});

mainContainer.addEventListener("click", () => {
	if (navSmall.style.display == "block") {
		navSmall.style.display = "none";
		removeFilter();
	}
});

window.addEventListener("resize", () => {
	let smallNav = navSmall.style.display === "block";

	if (window.innerWidth < 768) {
		gridContainer.style.gridTemplateColumns = "65px 1fr";
		gridContainer.style.gridTemplateRows = "65px 1fr";
		gridContainer.style.gridTemplateAreas = `"alias-nav  alias-header"
	"alias-main    alias-main"`;

		if (hamburgerIconElement.classList.contains("fa-xmark")) {
			toggleNavIcon();
		}
		navItemContainer.style.display = "none";
		navContainer.style.height = "auto";
		searchIcon2.style.backgroundColor = "white";
	} else if (window.innerWidth >= 768 && window.innerWidth < 1400) {
		gridContainer.style.gridTemplateColumns = "65px 1fr";
		gridContainer.style.gridTemplateRows = "65px 1fr";
		gridContainer.style.gridTemplateAreas = `"alias-nav  alias-header"
	"alias-nav    alias-main"`;
		if (hamburgerIconElement.classList.contains("fa-xmark")) {
			toggleNavIcon();
		}

		navLarge.style.display = "none";
		navItemContainer.style.display = "block";
		navContainer.style.height = "100%";
	} else if (window.innerWidth >= 1400 && smallNav) {
		gridContainer.style.gridTemplateColumns = "65px 160px 1fr";
		gridContainer.style.gridTemplateRows = "65px 1fr";
		gridContainer.style.gridTemplateAreas = `"alias-nav alias-header alias-header"
	"alias-nav-items alias-nav-items   alias-main"`;

		removeFilter();
		smallScreenNav("none");

		if (hamburgerIconElement.classList.contains("fa-bars")) {
			toggleNavIcon();
		}

		navLarge.style.display = "flex";
		navLarge.style.flexDirection = "column";
		navItemContainer.style.display = "none";
		navContainer.style.height = "auto";
	}
});
