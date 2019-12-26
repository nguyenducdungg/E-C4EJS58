
function getDefaultClother() {
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


let clothers = [];
let clothers1 = getDefaultClother();
clothers1.code = "CL01";
clothers1.name = "Quần bò";
clothers1.brand = "Adam 001";
clothers1.price = 3e5;
clothers1.size = "M";
clothers1.color = "white";
clothers1.desciption = "Quần bò nam size M, màu trắng";
clothers.push(clothers1);



let clothers2 = getDefaultClother();
clothers2.code = "CL02";
clothers2.name = "Quần kaki";
clothers2.brand = "Adam 002";
clothers2.price = 2e5;
clothers2.size = "L";
clothers2.color = "black";
clothers2.desciption = "Quần kaki nam size M, màu trắng";
clothers.push(clothers2);

function displayListShoes(ListClothers) {


    let body = document.getElementById("list-clothers");
    let s = '';
    for (let i = 0; i < ListClothers.length; i++) {
        const clothers = ListClothers[i];
        let tr = `
        <tr>
            <td>${i + 1}</td>
            <td>${clothers.code}</td>
            <td>${clothers.name}</td>
            <td>${clothers.price}đ</td>
            <td>${clothers.size}</td>
            <td>${clothers.color}</td>
            <td>${clothers.brand}</td>
            <td>
                <button class="btn btn-outline-success" onclick = "editClother('${clothers.code}')">Edit</button> 
                <button class="btn btn-outline-danger" onclick= "deleteClother('${clothers.code}')">Delete</button> 
            </td>
        </tr> ` ;
        s += tr;
    }
    body.innerHTML = s;
}
displayListShoes(clothers);

function deleteClother(code) {
    if (confirm("Bạn có muốn xóa không ?")) {
        for (let i = 0; i < clothers.length; i++) {
            const clother = clothers[i];
            if (clother.code === code) {
                clothers.splice(i, 1);
                break;
            }
        }
        displayListShoes(clothers);
    }
}
function editClother(code) {
    let currentClother;
    for (let i = 0; i < clothers.length; i++) {
        const clother = clothers[i];
        if (clother.code === code) {
            currentClother = clother;
            break;
        }
    }

    $('#editClother').modal('show');
    document.getElementById('txtEditCode').value = currentClother.code;
    document.getElementById('txtEditName').value = currentClother.name;
    document.getElementById('txtEditPrice').value = currentClother.price;
    document.getElementById('txtEditSize').value = currentClother.size;
    document.getElementById('txtEditColer').value = currentClother.color;
    document.getElementById('txtEditBrand').value = currentClother.brand;
    document.getElementById('txtEditDesciption').value = currentClother.desciption;
}

function addClothers(e) {
    e.preventDefault();

    let code = document.getElementById('txtCode').value;
    let name = document.getElementById('txtName').value;
    let price = document.getElementById('txtPrice').value;
    let newClother = getDefaultClother();
    newClother.code = code;
    newClother.name = name
    newClother.price = Number(price);
    clothers.push(newClother);

    displayListShoes(clothers);

    document.getElementById('frmNewClother').reset();
    $('#addClother').modal('hide');
}

function saveClother(e) {
    e.preventDefault();
    let code = document.getElementById('txtEditCode').value;
    let name = document.getElementById('txtEditName').value;
    let price = document.getElementById('txtEditPrice').value;
    let size = document.getElementById('txtEditSize').value;
    let brand = document.getElementById('txtEditBrand').value;
    let desciption = document.getElementById('txtEditDesciption').value;
    
    for (let i = 0; i < clothers.length; i++) {
        const clother = clothers[i];
        if (clother.code === code) {
            clother.name = name ;
            clother.price = price ;
            clother.size = size ;
            clother.brand = brand ;
            clother.desciption = desciption ;
            break;
        }
    }

    displayListShoes(clothers);

    $('#editClother').modal('hide');
    

}
