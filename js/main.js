const toggleBtn = document.getElementById("toggleBtn");
const menuList = document.getElementById("menuList");

toggleBtn.addEventListener("click", function () {
  menuList.classList.toggle("open");
});

//-----------------------------\\
const data = [
  "Bình Ngô Đại Cáo",
  "Dục Thúy Sơn",
  "Hiền tài là nguyên khí của quốc gia",
  "Nghệ thuật truyền thống của người Việt",
  "Tản viên từ phán sự lục",
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
    case "Bình Ngô Đại Cáo":
      console.log("Người dùng đã chọn", "Bình Ngô đại cáo");
      window.location.href = "./html/tacphamlop10/binh_ngo_dai_cao.html";
      break;
    // DTS
    case "Dục Thúy Sơn":
      console.log("Người dùng đã chọn", "Dục Thúy sơn");
      window.location.href = "./html/tacphamlop10/duc_thuy_son.html";
      break;
    // HTLNKCQG
    case "Hiền tài là nguyên khí của quốc gia":
      console.log("Người dùng đã chọn", "Hiền tài là nguyên khí của quốc gia");
      window.location.href = "./html/hien_tai_la_nguyen_khi_cua_quoc_gia.html";
      break;
    // NTTTCNV
    case "Nghệ thuật truyền thống của người Việt":
      console.log(
        "Người dùng đã chọn",
        "Nghệ thuật truyền thống của người Việt",
      );
      window.location.href =
        "./html/nghe_thuat_truyen_thong_cua_nguoi_Viet.html";
      break;
    // TVTPSL
    case "Tản Viên từ Phán sự lục":
      console.log("Người dùng đã chọn", "Tản Viên từ Phán sự lục");
      window.location.href = "./html/Tan_Vien_tu_Phan_su_luc.html";
      break;
    // TTT
    case "Thần Trụ Trời":
      console.log("Người dùng đã chọn", "Thần Trụ Trời");
      window.location.href = "./html/Than_Tru_Troi.html";
      break;
    // XVGD
    case "Xúy Vân giả dại":
      console.log("Người dùng đã chọn", "Xúy Vân giả dại");
      window.location.href = "./html/Xuy_Van_gia_dai.html";
      break;
    default:
      console.log("Không thấy đường dẫn liên quan!");
  }
});
