console.log("Hello");
// import Person, { HocVien } from "../models/Person.js";
import { HocVien } from "../models/Person.js";
import { NhanVien } from "../models/Person.js";
import { KhachHang } from "../models/Person.js";
import ListPerson from "../models/ListPerson.js";

let listPerson = new ListPerson();

document.getElementById('btnThemHocVien').addEventListener
('click', () => {
    let arrInput = document.querySelectorAll('#personFormHocVien input');

    let hocVien = new HocVien();

    for (let item of arrInput) {
        let { id, value } = item;
        hocVien[id] = value;
    }
    console.log(hocVien);
    listPerson.themHocVien(hocVien);
    listPerson.renderHocVien();
});

document.getElementById('btnThemNhanVien').addEventListener
('click', () => {
    let arrInput = document.querySelectorAll('#personFormNhanVien input');

    let nhanVien = new NhanVien();

    for (let item of arrInput) {
        let { id, value } = item;
        nhanVien[id] = value;
    }
    console.log(nhanVien);
    listPerson.themNhanVien(nhanVien);
    listPerson.renderNhanVien();
});

document.getElementById('btnThemKhachHang').addEventListener
('click', () => {
    let arrInput = document.querySelectorAll('#personFormKhachHang input, #personFormKhachHang select');

    let khachHang = new KhachHang();

    for (let item of arrInput) {
        let { id, value } = item;
        khachHang[id] = value;
    }
    console.log(khachHang);
    listPerson.themKhachHang(khachHang);
    listPerson.renderKhachHang();
});

