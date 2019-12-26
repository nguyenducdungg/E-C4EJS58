function getDefaultShoes() {
    return {
        'code': '',
        'name': '',
        'brand': '',
        'price': '',
        'size': '',
        'color': '',
        'desciption': '',
    }
};

let shoes = [] ;

function displayListShoes(ListShoes) {


    let body = document.getElementById("list-clothers");
    let s = '';
    for (let i = 0; i < ListShoes.length; i++) {
        const shoes = ListShoes[i];
        let tr = `
        <tr>
            <td>${i + 1}</td>
            <td>${shoes.code}</td>
            <td>${shoes.name}</td>
            <td>${shoes.price}đ</td>
            <td>${shoes.size}</td>
            <td>${shoes.color}</td>
            <td>${shoes.brand}</td>
            <td>
                <button class="btn btn-outline-success" onclick = "editClother('${shoes.code}')">Edit</button> 
                <button class="btn btn-outline-danger" onclick= "deleteClother('${shoes.code}')">Delete</button> 
                <button class="btn btn-outline-danger" onclick= "deleteClother('${shoes.code}')">Look</button> 
            </td>
        </tr> ` ;
        s += tr;
    }
    body.innerHTML = s;
}
displayListShoes(clothers);

