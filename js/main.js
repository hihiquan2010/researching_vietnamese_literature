const data = [
  "Bình Ngô đại cáo",
  "Dục Thúy sơn",
  "Hiền tài là nguyên khí của quốc gia",
  "Nghệ thuật truyền thống của người Việt",
  "Tản Viên từ Phán sự lục",
  "Thần Trụ Trời",
  "Xúy Vân giả dại",
];
// khung nhập liệu
const input = document.querySelector(
  ".widgetbar .search-group .searchbar #search",
);
// nút tìm kiếm
const btn = document.querySelector(".widgetbar .search-group #submit");

// bảng gợi ý
const bangdx = document.querySelector(
  ".widgetbar .search-group .searchbar #bangdexuat",
);

input.addEventListener("input", function () {
  const ainput = this.value.toLowerCase();
  bangdx.innerHTML = "";
  if (!ainput) return;

  const matches = data.filter((tacpham) =>
    tacpham.toLowerCase().includes(ainput),
  );

  matches.forEach((match) => {
    const tpgoiy = document.createElement("div");
    tpgoiy.classList.add("nddx");
    tpgoiy.textContent = match;

    tpgoiy.addEventListener("click", function () {
      input.value = match;
      bangdx.innerHTML = "";
    });

    bangdx.appendChild(tpgoiy);
  });
});

document.addEventListener("click", function (e) {
  if (e.target !== input) {
    bangdx.innerHTML = "";
  }
});

btn.addEventListener("click", function () {
  const inpval = input.value.trim();

  if (!inpval) {
    alert("Hãy nhập tên tác phẩm!");
  }
  switch (inpval) {
    // BNDC
    case "Bình Ngô đại cáo":
      console.log("Người dùng đã chọn", "Bình Ngô đại cáo");
      window.location.href = "/html/Bình Ngô đại cáo.html";
      break;
    // DTS
    case "Dục Thúy sơn":
      console.log("Người dùng đã chọn", "Dục Thúy sơn");
      window.location.href = "/html/Dục Thúy sơn.html";
      break;
    // HTLNKCQG
    case "Hiền tài là nguyên khí của quốc gia":
      console.log("Người dùng đã chọn", "Hiền tài là nguyên khí của quốc gia");
      window.location.href = "/html/Hiền tài là nguyên khí của quốc gia.html";
      break;
    // NTTTCNV
    case "Nghệ thuật truyền thống của người Việt":
      console.log(
        "Người dùng đã chọn",
        "Nghệ thuật truyền thống của người Việt",
      );
      window.location.href =
        "/html/Nghệ thuật truyền thống của người Việt.html";
      break;
    // TVTPSL
    case "Tản Viên từ Phán sự lục":
      console.log("Người dùng đã chọn", "Tản Viên từ Phán sự lục");
      window.location.href = "/html/Tản Viên từ Phán sự lục.html";
      break;
    // TTT
    case "Thần Trụ Trời":
      console.log("Người dùng đã chọn", "Thần Trụ Trời");
      window.location.href = "/html/Thần Trụ Trời.html";
      break;
    // XVGD
    case "Xúy Vân giả dại":
      console.log("Người dùng đã chọn", "Xúy Vân giả dại");
      window.location.href = "/html/Xúy Vân giả dại.html";
      break;
  }
});
