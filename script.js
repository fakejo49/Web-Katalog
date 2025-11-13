const products = [
  { id: 1, name: "Standee Akrilik Ucapan Milad", price: 350000, category: "Standee", img: "img/standee.jpg" },
  { id: 2, name: "Standee Akrilik Table", price: 50000, category: "Standee", img: "img/standee_meja.jpg" },
  { id: 3, name: "Bunga Kawat Bulu", price: 45000, category: "", img: "img/bunga.jpg" },
  { id: 4, name: "Klepon 1 Toples", price: 50000, category: "Manisan", img: "img/klepon.jpg" },
  { id: 5, name: "Anyaman Piring", price: 5000, category: "Anyaman", img: "img/piring.jpg" },
  { id: 6, name: "Standee Akrilik - Blade", price: 35000, category: "Standee", img: "img/standee_blade.png" },
  { id: 7, name: "Standee Akrilik - Yelan", price: 30000, category: "Standee", img: "img/standee_yelan.png" },
  { id: 8, name: "Standee Akrilik - Kazuha", price: 30000, category: "Standee", img: "img/standee_kazuha.png" },
  { id: 9, name: "Kabel Rol", price: 30000, category: "Material", img: "img/rolan.jpg" },
  { id: 10, name: "Kayu Dolken Gelam", price: 45000, category: "Material", img: "img/dolken.jpg" },
  { id: 11, name: "Set Perkakas", price: 50000, category: "Material", img: "img/perkakas.jpg" },
  { id: 12, name: "Semen 1 sack", price: 40000, category: "Material", img: "img/semen.jpg" },
  { id: 13, name: "Permen", price: 500, category: "Manisan", img: "img/permen.jpg" },
  { id: 14, name: "Skincare", price: 45000, category: "Perawatan", img: "img/skincare.jpg" },
  { id: 15, name: "Gantungan Kunci - Jingliu", price: 10000, category: "Keychain", img: "img/ganci_jingliu.png" },
  { id: 16, name: "Gantungan Kunci - Jade", price: 12000, category: "Keychain", img: "img/ganci_jade.png" },
  { id: 17, name: "Poster A3 - Cinderella Gray", price: 15000, category: "Poster", img: "img/cinray.jpg" },
  { id: 18, name: "Poster A3 - Umamusume Season 3", price: 15000, category: "Poster", img: "img/s3.jpg" },
  { id: 19, name: "Poster A3 - Road to the Top", price: 15000, category: "Poster", img: "img/ova.jpg" },
  { id: 19, name: "Supoka Kitasan", price: 2500, category: "Photocard", img: "img/kitasan.jpg" },
  { id: 19, name: "Light Cone - Aventurine", price: 2000, category: "Photocard", img: "img/lc_aven.jpg" },
  { id: 20, name: "Sketch - Ruan Mei", price: 30000, category: "Sketch", img: "img/sketch_rm.jpg" },
  { id: 20, name: "Sketch - Phainon", price: 30000, category: "Sketch", img: "img/sketch_phainon.jpg" },
  { id: 20, name: "Sketch - Castorice", price: 30000, category: "Sketch", img: "img/sketch_casto.jpg" },
  { id: 20, name: "Sketch - Firefly", price: 30000, category: "Sketch", img: "img/sketch_firefly.jpg" },
  { id: 20, name: "Sketch - Blade", price: 30000, category: "Sketch", img: "img/sketch_blade.jpg" },
  { id: 20, name: "Sketch - Black Swan", price: 30000, category: "Sketch", img: "img/sketch_bs.jpg" },
  { id: 21, name: "Stiker Aventurine", price: 1000, category: "Sticker", img: "img/aven.png" },
  { id: 21, name: "Stiker Sparkle", price: 1000, category: "Sticker", img: "img/sparkle.png" },
  { id: 21, name: "Stiker Silver Wolf", price: 1000, category: "Sticker", img: "img/siwol.png" },
  { id: 21, name: "Stiker Topaz", price: 1000, category: "Sticker", img: "img/topaz.png" },
];

const container = document.getElementById("product-list");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");

function renderProducts(list) {
  container.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src=\"${p.img}\" alt=\"${p.name}\">
      <h3>${p.name}</h3>
      <p>Rp ${p.price.toLocaleString()}</p>
      <button>Beli Sekarang</button>
    `;
    container.appendChild(card);
  });
}

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
