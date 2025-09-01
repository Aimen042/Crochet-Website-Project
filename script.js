//Making NavBar Responsive
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("closeBtn");

// Toggle sidebar with hamburger
menuBtn.addEventListener("click", () => {
    menu.classList.toggle("translate-x-full");
    menu.classList.toggle("translate-x-0");
});

// Close sidebar with close button inside
closeBtn.addEventListener("click", () => {
    menu.classList.remove("translate-x-0");
    menu.classList.add("translate-x-full");
});

//Buttons Working
//Scroll Btn
function scrollToProducts() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}
//Form Btn
function sendMessage(event) {
    event.preventDefault();
    alert("Your message has been received");
    location.reload();
}
//Products Btn
document.querySelectorAll(".productBtn").forEach(btn => {
    btn.addEventListener("click", () => {
        const page = btn.getAttribute("data-page");
        window.location.href = page;
    });
});

// Select all navbar links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const sectionID = this.getAttribute('href');

        // If we're already on the homepage
        if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
            e.preventDefault(); // Prevent page reload
            const section = document.querySelector(sectionID);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Not on homepage, redirect to homepage + section
            window.location.href = 'index.html' + sectionID;
        }
    });
});

//Image View
const mainImage = document.getElementById('mainImg');
const relatedImages = document.querySelectorAll('#relatedImgs img');

relatedImages.forEach(img => {
    img.addEventListener('click', () => {
        mainImage.src = img.src;
        mainImage.alt = img.alt;
    });
});

//Product Quantity
function decreaseQty() {
    let qty = document.getElementById("pdQuantity");
    if (qty.value > 1) qty.value--;
}

function increaseQty() {
    let qty = document.getElementById("pdQuantity");
    qty.value++;
}

// Characters redirect function
function viewProduct(productName) {
    window.location.href = `products/characters/${productName}.html`;
}

// Accessories redirect function
function viewAccessories(productName) {
    window.location.href = `products/accessories/${productName}.html`;
}

// Bouquets redirect function
function viewBouquets(productName) {
    window.location.href = `products/bouquets/${productName}.html`;
}

// Flowers redirect function
function viewFlowers(productName) {
    window.location.href = `products/flowers/${productName}.html`;
}

// Key-Chains redirect function
function viewKeyChains(productName) {
    window.location.href = `products/keychains/${productName}.html`;
}

// Jewellery redirect function
function viewJewellery(productName) {
    window.location.href = `products/jewellery/${productName}.html`;
}

//Cart.html - with it's relative paths
function viewCart() {
    window.location.href = `cart.html`;
}
function viewCart2() {
    window.location.href = `../../cart.html`;
}

//Add To Cart
function addToCart() {
    const name = document.getElementById("pdName").innerText;
    const priceText = document.getElementById("pdPrice").innerText;
    const price = parseInt(priceText.replace(/\D/g, ""), 10);
    const quantity = parseInt(document.getElementById("pdQuantity").value);
    const image = document.getElementById("pdImage").src;

    // Get current cart from localStorage (or empty array if none)
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if item already exists in cart
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += quantity; // increase qty
    } else {
        cart.push({ name, price, quantity, image });
    }

    // Save back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to cart!");
}

function submitOrder() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let total = 0;
    let orderHTML = "";

    cart.forEach(item => {
        total += item.price * item.quantity;
        orderHTML += `
            <div class="flex justify-between border-b pb-2">
                <span>${item.name} (x${item.quantity})</span>
                <span>Rs ${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        `;
    });

    orderHTML += `
        <div class="flex justify-between font-bold mt-3">
            <span>Total</span>
            <span>Rs ${total.toFixed(2)}</span>
        </div>
    `;
    document.getElementById("orderDetails").innerHTML = orderHTML;
    document.getElementById("cartSection").classList.add("hidden");
    document.getElementById("orderSummarySection").classList.remove("hidden");
    localStorage.removeItem("cart");
}














