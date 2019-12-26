let sanPham = [
    {
        'title' : 'iphone X',
        'description' : 'Apple'
    },
    {
        'title' : 'iphone 8',
        'description' : 'Apple'
    },
    {
        'title' : 'Glaxy A7',
        'description' : 'Samsung'
    },
   
];
//Lưu dữ liệu mẫu vào localstorage .

localStorage.setItem('listSanPham', JSON.stringify(sanPham)) ;

// Hiển thị danh sách sản phẩm lên Html .

let ul = document.getElementById('thongTin');
ul.innerHTML= '' ;
for (let index = 0; index < sanPham.length; index++) {
    const element = sanPham[index];
    let html = `
        <li><a href="#" onclick = "goToChiTiet('${element.title}')">${element.title}</a></li>
    `;
    ul.innerHTML += html ;
}
function goToChiTiet(title) {
    localStorage.setItem("sanPhamDangChon", title);
    window.location.href = "chitiet.html";
}
