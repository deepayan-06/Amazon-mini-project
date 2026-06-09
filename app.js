// Js - code
// Search functionality
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-icon");

searchBtn.addEventListener("click", () => {
    let searchText = searchInput.value.trim();

    if (searchText === "") {
        alert("Please enter something to search.");
    } else {
        alert("Searching for: " + searchText);
    }
});

searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchBtn.click();
    }
});

// Cart-functionality
let cartCount = 0;
const cart = document.querySelector(".nav-cart");

cart.innerHTML = `
<i class="fa-solid fa-cart-shopping"></i>
Cart (<span id="cart-count">0</span>)
`;

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    const btn = document.createElement("button");
    btn.innerText = "Add to Cart";
    btn.style.marginTop = "10px";
    btn.style.padding = "8px";
    btn.style.cursor = "pointer";

    box.querySelector(".box-content").appendChild(btn);

    btn.addEventListener("click", () => {
        cartCount++;
        document.getElementById("cart-count").textContent = cartCount;

        const productName = box.querySelector("h2").textContent;
        alert(productName + " added to cart!");
    });
});

// Back to top button
const backToTop = document.querySelector(".foot-panel1");

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Hero-message link
const heroLink = document.querySelector(".hero-msg a");

heroLink.addEventListener("click", () => {
    window.open("https://www.amazon.in", "_blank");
});

// Sign In section
const signIn = document.querySelector(".nav-sinin");

signIn.addEventListener("click", () => {
    alert("Sign In functionality will be added later.");
});

// Returns & Orders section
const orders = document.querySelector(".nav-return");

orders.addEventListener("click", () => {
    alert("Orders page will open.");
});
