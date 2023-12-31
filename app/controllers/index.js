// console.log("Hello");
// import Person, { HocVien } from "../models/Person.js";
import Person from "../models/Person.js";
import { HocVien } from "../models/Person.js";
import { NhanVien } from "../models/Person.js";
import { KhachHang } from "../models/Person.js";
import ListPerson from "../models/ListPerson.js";

let listPerson = new ListPerson();

listPerson.layLocal();

document.getElementById('btnThemPerson').addEventListener
    ('click', () => {
        let arrInput = document.querySelectorAll('#personForm input, #personForm select');
        let person = new Person();

        for (let item of arrInput) {
            let { id, value } = item;
            person[id] = value;
        }
        // console.log(person);
        listPerson.themPerson(person);
        listPerson.renderPerson();
        listPerson.luuLocal();

    });

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
});

window.xoaPerson = (idPerson) => {
    listPerson.xoaPerson(idPerson);
}

window.layThongTinPerson = (idPerson) => {
    listPerson.layThongTinPerson(idPerson);
}
window.chinhSuaPerson = (person) => {
    listPerson.chinhSuaPerson(person);
}

document.getElementById('btnCapNhatPerson').onclick = () => {
    let arrInput = document.querySelectorAll('#personForm input, #personForm select');

    let person = new Person();
    for (let item of arrInput) {
        let { id, value } = item;
        person[id] = value;
    }
    // console.log(person);
    listPerson.chinhSuaPerson(person);
}

document.getElementById('sapXep').onclick = () => {
    listPerson.sortNames();
    listPerson.renderPerson();

}

document.getElementById('locPerson').onclick = () => {


    let locPerson = document.getElementById('selLoai').value * 1;

    if (locPerson == 1) {
        listPerson.filterPersonHocVien();
    } else if (locPerson == 2) {
        listPerson.filterPersonNhanVien();
    } else if (locPerson == 3) {
        listPerson.filterPersonKhachHang();
    }

}
document.getElementById('reset').onclick = () => {
    listPerson.renderPerson();
}

window.timKiemPerson = (event) => {
    let value = event.target.value;
    // console.log(value);
    listPerson.timKiemPerson(value);

};