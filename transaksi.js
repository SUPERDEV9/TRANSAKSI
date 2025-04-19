const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const imageContainer = document.getElementById("imageContainer");

const images = {
  08895941705: ["https://cdn.discordapp.com/attachments/1336446691599056978/1362698363396689920/IMG-20250418-WA0014.jpg?ex=6803573f&is=680205bf&hm=0468896ab63fe7511302e09d1a25a482c666e2e250e5cc4c1b9742de11d75bc3&"], // Hapus leading zero
  
  081542070143: ["https://cdn.discordapp.com/attachments/1336446691599056978/1362700987315257414/IMG-20250418-WA0015.jpg?ex=680359b1&is=68020831&hm=6d6886b16d0e6f5ae815219e3c61b7a83dae5d52cf33a7a9e6f207f8c2f95f72&",
                "https://cdn.discordapp.com/attachments/1336446691599056978/1362701017568776252/IMG-20250418-WA0016.jpg?ex=680359b8&is=68020838&hm=8dacc217f1d43ca4bfded95ae41a73c8cf5b1e6464e2da5ab5afe0647bccba00&",
                "https://cdn.discordapp.com/attachments/1336446691599056978/1362701030906794026/IMG-20250418-WA0017.jpg?ex=680359bb&is=6802083b&hm=f3de74860fee22a072f07666f8a5e2f19e1eadd7088d5671e56169bb4a60a00a&"
  ], // Hapus leading zero
  //Semua transaksi akan mengambil dari database ini hanyalah contoh
};

searchButton.addEventListener("click", searchImages);
searchInput.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    searchImages();
  }
});

function searchImages() {
  const searchNumberString = searchInput.value.trim();
  imageContainer.innerHTML = '';

  // Validasi input: Pastikan input hanya angka dan tidak kosong
  if (!searchNumberString) {
    imageContainer.innerHTML = "<p>Masukkan nomor!</p>";
    return;
  }

  const searchNumber = parseInt(searchNumberString, 10);

  if (isNaN(searchNumber)) {
    imageContainer.innerHTML = "<p>Masukkan nomor yang valid!</p>";
    return;
  }

  if (images[searchNumber]) {
    let imageHTML = '';
    images[searchNumber].forEach((imagePath, index) => {
      imageHTML += `
        <div class="image-item">
          <p class="image-number">${index + 1}</p>
          <img src="${imagePath}" alt="topgems">
        </div>
      `;
    });
    imageContainer.innerHTML = imageHTML;
  } else {
    imageContainer.innerHTML = "<p>Transaksi tidak di temukan.</p>";
  }
}
