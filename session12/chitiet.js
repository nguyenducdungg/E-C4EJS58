let listSanPham =JSON.parse(localStorage.getItem("listSanPham")) ;

let sanPhamDangChon = localStorage.getItem("sanPhamDangChon") ;

let sanPham ;
for (let index = 0; index < listSanPham.length; index++) {
    const element = listSanPham[index];
    if (element.title === sanPhamDangChon) {
        sanPham = element;
        break ;
    }
}

document.getElementById('title').innerHTML = sanPham.title ; 
document.getElementById('description').innerHTML = sanPham.description ; 

