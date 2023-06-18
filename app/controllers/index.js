// console.log("Hello");
// import Person, { HocVien } from "../models/Person.js";
import { HocVien } from "../models/Person.js";
import { NhanVien } from "../models/Person.js";
import { KhachHang } from "../models/Person.js";
import ListPerson from "../models/ListPerson.js";

let listPerson = new ListPerson();

// document.getElementById('firstDisabled').addEventListener('click', () => {
//     document.getElementById('soNgayLam').disabled = true;
//     document.getElementById('luongNgay').disabled = true;
//     document.getElementById('tenCty').disabled = true;
//     document.getElementById('triGiaHoaDon').disabled = true;
//     document.getElementById('danhGia').disabled = true;
// })

document.getElementById('btnThemHocVien').addEventListener
    ('click', () => {

        let loaiPerson = document.getElementById('loaiPerson').value;
        let arrInput = document.querySelectorAll('#personForm input, #personForm select');

        if (loaiPerson == "hocVien") {
            // let arrInput = document.querySelectorAll('#personForm input');

            let hocVien = new HocVien();

            for (let item of arrInput) {
                let { id, value } = item;
                hocVien[id] = value;
            }
            console.log(hocVien);
            listPerson.themPerson(hocVien);
            // listPerson.renderPerson();
        } else if (loaiPerson == "nhanVien") {
            // let arrInput = document.querySelectorAll('#personForm input');

            let nhanVien = new NhanVien();

            for (let item of arrInput) {
                let { id, value } = item;
                nhanVien[id] = value;
            }
            console.log(nhanVien);
            listPerson.themPerson(nhanVien);
            // listPerson.renderPerson();
        } else if (loaiPerson == "khachHang") {
            // let arrInput = document.querySelectorAll('#personForm input, #personForm select');

            let khachHang = new KhachHang();

            for (let item of arrInput) {
                let { id, value } = item;
                khachHang[id] = value;
            }
            console.log(khachHang);
            listPerson.themPerson(khachHang);
        }
        console.log(arrInput);
        listPerson.renderPerson();


    });

// document.getElementById('btnThemNhanVien').addEventListener
//     ('click', () => {
//         let arrInput = document.querySelectorAll('#personFormNhanVien input');

//         let nhanVien = new NhanVien();

//         for (let item of arrInput) {
//             let { id, value } = item;
//             nhanVien[id] = value;
//         }
//         console.log(nhanVien);
//         listPerson.themNhanVien(nhanVien);
//         listPerson.renderNhanVien();
//     });

// document.getElementById('btnThemKhachHang').addEventListener
//     ('click', () => {
//         let arrInput = document.querySelectorAll('#personFormKhachHang input, #personFormKhachHang select');

//         let khachHang = new KhachHang();

//         for (let item of arrInput) {
//             let { id, value } = item;
//             khachHang[id] = value;
//         }
//         console.log(khachHang);
//         listPerson.themKhachHang(khachHang);
//         listPerson.renderKhachHang();
//     });

// VD về Destructuring
// let pet = {
//     name: 'Gâu',
//     age: 3,
//     size: {
//         wei: '30kg',
//         hei: '56cm'
//     }
// }

// let { name, age } = pet;
// let { wei, hei } = pet.size;
// console.log(name, age);
// console.log(wei, hei);

document.getElementById('loaiPerson').addEventListener('change', () => {
    let loaiPerson = document.getElementById('loaiPerson').value;
    if (loaiPerson == "hocVien") {
        document.getElementById('diemToan').disabled = false;
        document.getElementById('diemLy').disabled = false;
        document.getElementById('diemHoa').disabled = false;

        document.getElementById('soNgayLam').disabled = true;
        document.getElementById('luongNgay').disabled = true;
        document.getElementById('tenCty').disabled = true;
        document.getElementById('giaTriHoaDon').disabled = true;
        document.getElementById('danhGia').disabled = true;
    } else if (loaiPerson == "nhanVien") {
        document.getElementById('soNgayLam').disabled = false;
        document.getElementById('luongNgay').disabled = false;

        document.getElementById('diemToan').disabled = true;
        document.getElementById('diemLy').disabled = true;
        document.getElementById('diemHoa').disabled = true;
        document.getElementById('tenCty').disabled = true;
        document.getElementById('giaTriHoaDon').disabled = true;
        document.getElementById('danhGia').disabled = true;
    } else if (loaiPerson == "khachHang") {
        document.getElementById('tenCty').disabled = false;
        document.getElementById('giaTriHoaDon').disabled = false;
        document.getElementById('danhGia').disabled = false;

        document.getElementById('diemToan').disabled = true;
        document.getElementById('diemLy').disabled = true;
        document.getElementById('diemHoa').disabled = true;
        document.getElementById('soNgayLam').disabled = true;
        document.getElementById('luongNgay').disabled = true;
    }
})
// function chonLoaiPerson() {
//     var loaiPerson = document.getElementById('loaiPerson').value * 1;
//     if (loaiPerson == "hocVien") {
//         document.getElementById('diemToan').disabled = false;
//         document.getElementById('diemLy').disabled = false;
//         document.getElementById('diemHoa').disabled = false;

//         document.getElementById('soNgayLam').disabled = true;
//         document.getElementById('luongNgay').disabled = true;
//         document.getElementById('tenCty').disabled = true;
//         document.getElementById('triGiaHoaDon').disabled = true;
//         document.getElementById('danhGia').disabled = true;
//     } else if (loaiPerson == "nhanVien") {
//         document.getElementById('soNgayLam').disabled = false;
//         document.getElementById('luongNgay').disabled = false;
//     } else if (loaiPerson == "khachHang") {
//         document.getElementById('tenCty').disabled = false;
//         document.getElementById('triGiaHoaDon').disabled = false;
//         document.getElementById('danhGia').disabled = false;
//     }
// }

