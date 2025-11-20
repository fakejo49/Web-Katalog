const products = [
  { id: 1, name: "Standee Akrilik Ucapan Milad", priceBuy: 350000, priceRent: 75000, category: "Standee", img: "img/standee.jpg", rent: true },
  { id: 2, name: "Standee Akrilik Table", priceBuy: 50000, priceRent: 15000, category: "Standee", img: "img/standee_meja.jpg", rent: true },
  { id: 3, name: "Bunga Kawat Bulu", priceBuy: 45000, priceRent: 15000, category: "Standee", img: "img/bunga.jpg", rent: true },
  { id: 4, name: "Klepon 1 Toples", priceBuy: 50000, category: "Manisan", img: "img/klepon.jpg" },
  { id: 5, name: "Anyaman Piring", priceBuy: 5000, category: "Anyaman", img: "img/piring.jpg" },
  { id: 6, name: "Standee Akrilik - Blade", priceBuy: 35000, category: "Standee", img: "img/standee_blade.png" },
  { id: 7, name: "Standee Akrilik - Yelan", priceBuy: 30000, category: "Standee", img: "img/standee_yelan.png" },
  { id: 8, name: "Standee Akrilik - Kazuha", priceBuy: 30000, category: "Standee", img: "img/standee_kazuha.png" },
  { id: 9, name: "Permen", priceBuy: 500, category: "Manisan", img: "img/permen.jpg" },
  { id: 10, name: "Skincare", priceBuy: 45000, category: "Perawatan", img: "img/skincare.jpg" },
  { id: 11, name: "Gantungan Kunci - Jingliu", priceBuy: 10000, category: "Keychain", img: "img/ganci_jingliu.png" },
  { id: 12, name: "Gantungan Kunci - Jade", priceBuy: 12000, category: "Keychain", img: "img/ganci_jade.png" },
  { id: 13, name: "Poster A3 - Cinderella Gray", priceBuy: 15000, category: "Poster", img: "img/cinray.jpg" },
  { id: 14, name: "Poster A3 - Umamusume Season 3", priceBuy: 15000, category: "Poster", img: "img/s3.jpg" },
  { id: 15, name: "Poster A3 - Road to the Top", priceBuy: 15000, category: "Poster", img: "img/ova.jpg" },
  { id: 16, name: "Supoka Kitasan Black", priceBuy: 2500, category: "Photocard", img: "img/kitasan.jpg" },
  { id: 17, name: "Supoka Manhattan Cafe 1", priceBuy: 2500, category: "Photocard", img: "img/cafe.jpg" },
  { id: 18, name: "Supoka Manhattan Cafe 2", priceBuy: 2500, category: "Photocard", img: "img/cafe1.jpg" },
  { id: 19, name: "Supoka Eishin Flash 1", priceBuy: 2500, category: "Photocard", img: "img/eishin.jpg" },
  { id: 20, name: "Supoka Eishin Flash 2", priceBuy: 2500, category: "Photocard", img: "img/eishin1.jpg" },
  { id: 21, name: "Supoka El Condor Pasa", priceBuy: 2500, category: "Photocard", img: "img/elcondor.jpg" },
  { id: 22, name: "Supoka Fine Motion", priceBuy: 2500, category: "Photocard", img: "img/finemotion.jpg" },
  { id: 23, name: "Supoka Gold Ship", priceBuy: 2500, category: "Photocard", img: "img/golshi.jpg" },
  { id: 24, name: "Supoka Grass Wonder", priceBuy: 2500, category: "Photocard", img: "img/grass.jpg" },
  { id: 25, name: "Supoka Oguri Cap", priceBuy: 2500, category: "Photocard", img: "img/oguricap.jpg" },
  { id: 26, name: "Supoka T.M. Opera O", priceBuy: 2500, category: "Photocard", img: "img/operao.jpg" },
  { id: 27, name: "Supoka Orfevre", priceBuy: 2500, category: "Photocard", img: "img/orfevre.jpg" },
  { id: 28, name: "Supoka Symboli Rudolf", priceBuy: 2500, category: "Photocard", img: "img/rudolf.jpg" },
  { id: 29, name: "Supoka Satono Diamond", priceBuy: 2500, category: "Photocard", img: "img/satono.jpg" },
  { id: 30, name: "Supoka Seiun Sky", priceBuy: 2500, category: "Photocard", img: "img/seiunsky.jpg" },
  { id: 31, name: "Supoka Special Week", priceBuy: 2500, category: "Photocard", img: "img/spechan.jpg" },
  { id: 32, name: "Supoka Haru Urara", priceBuy: 2500, category: "Photocard", img: "img/urara.jpg" },
  { id: 33, name: "Supoka Yaeno Muteki", priceBuy: 2500, category: "Photocard", img: "img/yaeno.jpg" },
  { id: 34, name: "Supoka Super Creek", priceBuy: 2500, category: "Photocard", img: "img/supercreek.jpg" },
  { id: 35, name: "Supoka Silence Suzuka 1", priceBuy: 2500, category: "Photocard", img: "img/suzuka.jpg" },
  { id: 36, name: "Supoka Silence Suzuka 2", priceBuy: 2500, category: "Photocard", img: "img/suzuka1.jpg" },
  { id: 37, name: "Supoka Agnes Tachyon", priceBuy: 2500, category: "Photocard", img: "img/tachyon.jpg" },
  { id: 38, name: "Supoka Tamamo Cross", priceBuy: 2500, category: "Photocard", img: "img/tamamo.jpg" },
  { id: 38, name: "Supoka Tokai Teio", priceBuy: 2500, category: "Photocard", img: "img/teio.jpg" },
  { id: 39, name: "Light Cone - Aventurine", priceBuy: 2000, category: "Photocard", img: "img/lc_aven.jpg" },
  { id: 40, name: "Light Cone - Argenti", priceBuy: 2000, category: "Photocard", img: "img/lc_argenti.jpg" },
  { id: 41, name: "Light Cone - Boothill", priceBuy: 2000, category: "Photocard", img: "img/lc_boothill.jpg" },
  { id: 42, name: "Light Cone - Dan Heng IL", priceBuy: 2000, category: "Photocard", img: "img/lc_danil.jpg" },
  { id: 43, name: "Light Cone - Fu Xuan", priceBuy: 2000, category: "Photocard", img: "img/lc_fuxuan.jpg" },
  { id: 44, name: "Light Cone - Himeko", priceBuy: 2000, category: "Photocard", img: "img/lc_himeko.jpg" },
  { id: 45, name: "Light Cone - Jade", priceBuy: 2000, category: "Photocard", img: "img/lc_jade.jpg" },
  { id: 46, name: "Light Cone - Jingliu", priceBuy: 2000, category: "Photocard", img: "img/lc_jingliu.jpg" },
  { id: 47, name: "Light Cone - Kafka", priceBuy: 2000, category: "Photocard", img: "img/lc_kafka.jpg" },
  { id: 48, name: "Light Cone - Jing Yuan", priceBuy: 2000, category: "Photocard", img: "img/lc_kingyuan.jpg" },
  { id: 49, name: "Light Cone - Luocha", priceBuy: 2000, category: "Photocard", img: "img/lc_luocha.jpg" },
  { id: 50, name: "Light Cone - Dr. Ratio", priceBuy: 2000, category: "Photocard", img: "img/lc_ratio.jpg" },
  { id: 51, name: "Light Cone - Seele", priceBuy: 2000, category: "Photocard", img: "img/lc_seele.jpg" },
  { id: 52, name: "Light Cone - Silver Wolf", priceBuy: 2000, category: "Photocard", img: "img/lc_siwol.jpg" },
  { id: 53, name: "Light Cone - Topaz & Numby", priceBuy: 2000, category: "Photocard", img: "img/lc_topaz.jpg" },
  { id: 54, name: "Light Cone - Yunli", priceBuy: 2000, category: "Photocard", img: "img/lc_yunli.jpg" },
  { id: 55, name: "Sketch - Ruan Mei", priceBuy: 35000, category: "Sketch", img: "img/sketch_rm.jpg" },
  { id: 56, name: "Sketch - Phainon", priceBuy: 30000, category: "Sketch", img: "img/sketch_phainon.jpg" },
  { id: 57, name: "Sketch - Castorice", priceBuy: 35000, category: "Sketch", img: "img/sketch_casto.jpg" },
  { id: 58, name: "Sketch - Firefly", priceBuy: 30000, category: "Sketch", img: "img/sketch_firefly.jpg" },
  { id: 59, name: "Sketch - Blade", priceBuy: 30000, category: "Sketch", img: "img/sketch_blade.jpg" },
  { id: 60, name: "Sketch - Black Swan", priceBuy: 35000, category: "Sketch", img: "img/sketch_bs.jpg" },
  { id: 60, name: "Sketch - Saber", priceBuy: 30000, category: "Sketch", img: "img/sketch_saber.jpg" },
  { id: 60, name: "Sketch - Cipher", priceBuy: 30000, category: "Sketch", img: "img/sketch_cipher.jpg" },
  { id: 60, name: "Sketch - Jingliu", priceBuy: 30000, category: "Sketch", img: "img/sketch_jingliu.jpg" },
  { id: 60, name: "Sketch - Fugue", priceBuy: 35000, category: "Sketch", img: "img/sketch_fugue.jpg" },
  { id: 60, name: "Sketch - Kafka", priceBuy: 30000, category: "Sketch", img: "img/sketch_kafka.jpg" },
  { id: 60, name: "Sketch - Feixiao", priceBuy: 35000, category: "Sketch", img: "img/sketch_feixiao.jpg" },
  { id: 60, name: "Sketch - The Herta", priceBuy: 35000, category: "Sketch", img: "img/sketch_therta.jpg" },
  { id: 60, name: "Sketch - Robin", priceBuy: 30000, category: "Sketch", img: "img/sketch_robin.jpg" },
  { id: 60, name: "Sketch - Jiaoqiu", priceBuy: 30000, category: "Sketch", img: "img/sketch_jiaoqiu.jpg" },
  { id: 60, name: "Sketch - Jade", priceBuy: 35000, category: "Sketch", img: "img/sketch_jade.jpg" },
  { id: 60, name: "Sketch - Dr. Ratio", priceBuy: 30000, category: "Sketch", img: "img/sketch_ratio.jpg" },
  { id: 60, name: "Sketch - Aventurine", priceBuy: 35000, category: "Sketch", img: "img/sketch_aven.jpg" },
  { id: 61, name: "Stiker Aventurine", priceBuy: 1000, category: "Sticker", img: "img/aven.png" },
  { id: 62, name: "Stiker Sparkle", priceBuy: 1000, category: "Sticker", img: "img/sparkle.png" },
  { id: 63, name: "Stiker Silver Wolf", priceBuy: 1000, category: "Sticker", img: "img/siwol.png" },
  { id: 64, name: "Stiker Topaz", priceBuy: 1000, category: "Sticker", img: "img/topaz.png" },
];

const container = document.getElementById("product-list");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");

let cart = [];

// Render produk
function renderProducts(list) {
  container.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
  <img src="${p.img}" alt="${p.name}">
  <h3>${p.name}</h3>

  <p>
    ${
      p.rent
        ? `Beli: Rp ${p.priceBuy.toLocaleString()}<br>Sewa: Rp ${p.priceRent.toLocaleString()} / hari`
        : `Rp ${p.priceBuy.toLocaleString()}`
    }
  </p>

  <div class="btn-group">
    <button class="buy-btn">Beli</button>
    ${p.rent ? `<button class="rent-btn">Sewa</button>` : ""}
  </div>
`;


    // Tombol beli
    card.querySelector(".buy-btn").addEventListener("click", () => {
  addToCart({ ...p, price: p.priceBuy, mode: "buy" });
    });

    // Tombol sewa
    if (p.rent) {
      card.querySelector(".rent-btn").addEventListener("click", () => {
        addToCart({ ...p, price: p.priceRent, mode: "rent" });
      });
    }

    container.appendChild(card);
  });
}

// Tambahkan barang ke keranjang
function addToCart(product) {
  let days = 1;

  // Kalau mode sewa → minta jumlah hari
  if (product.mode === "rent") {
    days = parseInt(prompt("Berapa hari sewa?"), 10);
    if (isNaN(days) || days <= 0) days = 1;
  }

  const existing = cart.find(
    item => item.id === product.id && item.mode === product.mode
  );

  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      ...product,
      qty: 1,
      days: product.mode === "rent" ? days : 1
    });
  }

  updateCartModal();
}


// Update isi modal keranjang
function updateCartModal() {
  const list = document.getElementById("cart-items");
  const total = document.getElementById("cart-total");

  list.innerHTML = "";
  let sum = 0;

  cart.forEach(item => {
    const subtotal =
      item.mode === "rent"
        ? item.price * item.days * item.qty
        : item.price * item.qty;

    sum += subtotal;

    const li = document.createElement("li");
    li.classList.add("cart-row");

    li.innerHTML = `
      <span class="cart-name">
        ${item.name}
        ${
          item.mode === "rent"
            ? `<small>(Sewa ${item.days} hari)</small>`
            : `<small>(Beli)</small>`
        }
      </span>

      <div class="cart-controls">
        <button class="qty-minus">−</button>
        <span class="qty">${item.qty}</span>
        <button class="qty-plus">+</button>
      </div>

      <span class="cart-price">Rp ${subtotal.toLocaleString()}</span>

      <button class="remove-item">✖</button>
    `;

    // Tambah jumlah
    li.querySelector(".qty-plus").addEventListener("click", () => {
      item.qty++;
      updateCartModal();
    });

    // Kurangi jumlah
    li.querySelector(".qty-minus").addEventListener("click", () => {
      if (item.qty > 1) {
        item.qty--;
      } else {
        cart = cart.filter(
          x => !(x.id === item.id && x.mode === item.mode)
        );
      }
      updateCartModal();
    });

    // Hapus item
    li.querySelector(".remove-item").addEventListener("click", () => {
      cart = cart.filter(
        x => !(x.id === item.id && x.mode === item.mode)
      );
      updateCartModal();
    });

    list.appendChild(li);
  });

  // Total harga
  total.textContent = "Total: Rp " + sum.toLocaleString();

  // Badge jumlah item
  document.getElementById("cart-count").textContent = cart.reduce(
    (a, b) => a + b.qty,
    0
  );
}

// Filter produk
function filterProducts() {
  const q = searchInput.value.toLowerCase();
  const cat = categorySelect.value;

  const filtered = products.filter(p => {
    const matchesQuery = p.name.toLowerCase().includes(q);
    const matchesCat = cat === "Semua" || p.category === cat;
    return matchesQuery && matchesCat;
  });

  renderProducts(filtered);
}

searchInput.addEventListener("input", filterProducts);
categorySelect.addEventListener("change", filterProducts);

renderProducts(products);

// Modal
const openCartBtn = document.getElementById("open-cart");
const cartModal = document.getElementById("cart-modal");
const closeCartBtn = document.getElementById("close-cart");

openCartBtn.addEventListener("click", () => {
  cartModal.classList.remove("hidden");
});

closeCartBtn.addEventListener("click", () => {
  cartModal.classList.add("hidden");
});



// ============================
// CHECKOUT
// ============================

// Apakah ada barang sewaan?
function isRentCart() {
  return cart.some(i => i.rent);
}

document.getElementById("wa-checkout").onclick = () => {
  let msg = "";

  cart.forEach(i => {
    if (i.rent) {
      msg += `${i.name} (Sewa ${i.days} hari, qty ${i.qty}) - Rp ${(i.price * i.days * i.qty).toLocaleString()}\n`;
    } else {
      msg += `${i.name} x${i.qty} - Rp ${(i.price * i.qty).toLocaleString()}\n`;
    }
  });

  msg = isRentCart()
    ? "*PESANAN SEWA*\n" + msg
    : "*PESANAN BELI*\n" + msg;

  window.open(
    `https://wa.me/62895806601800?text=${encodeURIComponent(msg)}`,
    "_blank"
  );
};

document.getElementById("email-checkout").onclick = () => {
  let msg = "";

  cart.forEach(i => {
    if (i.rent) {
      msg += `${i.name} (Sewa ${i.days} hari, qty ${i.qty}) - Rp ${(i.price * i.days * i.qty).toLocaleString()}\n`;
    } else {
      msg += `${i.name} x${i.qty} - Rp ${(i.price * i.qty).toLocaleString()}\n`;
    }
  });

  msg = isRentCart()
    ? "PESANAN SEWA\n\n" + msg
    : "PESANAN BELI\n\n" + msg;

  window.location.href =
    `mailto:alfan32220@gmail.com?subject=Order&body=${encodeURIComponent(msg)}`;
};

document.getElementById("ig-checkout").onclick = () => {
  window.open("https://instagram.com/sunaookamii", "_blank");
};



