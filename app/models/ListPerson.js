import Person from "./Person.js";
import { HocVien } from "./Person.js";
import { NhanVien } from "./Person.js";
import { KhachHang } from "./Person.js";

export default class ListPerson {
    constructor() {
        this.arrListPerson = [];
    }
    themPerson(person) {
        this.arrListPerson.push(person);
    }

    renderPerson() {
        let content = this.arrListPerson.map((item, index) => {
            // let { personID, hoTen, email, diaChi, loaiPerson } = item;
            // console.log(item);
            let person = new Person();
            Object.assign(person, item);
            console.log(person);
            let { personID, hoTen, email, diaChi, loaiPerson, diemTB, tinhLuong, tenCty, giaTriHoaDon, danhGia } = person;
            let danhGiaVN = '';
            if (danhGia == 'danhGia1') {
                danhGiaVN = 'Rất tốt';
            } else if (danhGia == 'danhGia2') {
                danhGiaVN = 'Tốt';
            } else if (danhGia == 'danhGia3') {
                danhGiaVN = 'Bình thường';
            } else if (danhGia == 'danhGia4') {
                danhGiaVN = 'Không tốt';
            } else if (danhGia == 'danhGia5') {
                danhGiaVN = 'Tệ'
            }

            return `
                <tr>
                    <td>${personID}</td>
                    <td>${hoTen}</td>
                    <td>${email}</td>
                    <td>${diaChi}</td>
                    <td>${loaiPerson == 'hocVien' ? diemTB() : 'X'}</td>
                    <td>${loaiPerson == 'nhanVien' ? tinhLuong() : 'X'}</td>
                    <td>${loaiPerson == 'khachHang' ? tenCty : 'X'}</td>
                    <td>${loaiPerson == 'khachHang' ? giaTriHoaDon : 'X'}</td>
                    <td>${loaiPerson == 'khachHang' ? danhGiaVN : 'X'}</td>
                    <td>
                    <button class="btn btn-danger" onclick="xoaPerson('${personID}')">Xoá</button>
                    <button class="btn btn-warning" onclick="layThongTinPerson('${personID}')">Sửa</button>
                    </td>
                </tr>
                `
        }).join("");
        // console.log(content);
        document.getElementById('tbodyPerson').innerHTML = content;

    }

    luuLocal() {
        localStorage.setItem("arrListPerson", JSON.stringify(this.arrListPerson));
    }

    layLocal() {
        let personLocal = JSON.parse(localStorage.getItem("arrListPerson"));
        // console.log(personLocal);
        if (personLocal) {
            this.arrListPerson = [...personLocal];

            this.renderPerson()
        }
    }
    xoaPerson(idPerson) {
        let index = this.arrListPerson.findIndex((item) => item.personID == idPerson);
        if (index != -1) {
            this.arrListPerson.splice(index, 1);
            this.renderPerson();
            this.luuLocal();
        }
    }

    layThongTinPerson(idPerson) {
        let person = this.arrListPerson.find((item) => item.personID == idPerson);
        if (person) {
            document.getElementById('btnThem').click();
            let arrInput = document.querySelectorAll('#personForm input, #personForm select');
            for (let item of arrInput) {
                let { id } = item;
                item.value = person[id];
            }
        }
    }
    chinhSuaPerson(person) {
        let index = this.arrListPerson.findIndex((item) => item.personID == person.personID);
        if (index != -1) {
            this.arrListPerson[index] = person;
            this.renderPerson();
            this.luuLocal();
            document.getElementById('btnClose').click();
        }
    }

    sortNames() {
        this.arrListPerson.sort((a, b) => {
            let nameA = a.hoTen.toLowerCase();
            let nameB = b.hoTen.toLowerCase();

            if (nameA < nameB) {
                return -1;
            } else if (nameA > nameB) {
                return 1;
            } else {
                return 0;
            }
        });

    };

    filterPersonHocVien() {
        // let content = '';
        let arrLocPerson = this.arrListPerson.reduce((arrHocVien, item, index) => {
            if (item.loaiPerson == 'hocVien') {
                arrHocVien.push(item);
            }
            return arrHocVien;
        },[]);
        // console.log(arrLocPerson);
        let content = arrLocPerson.map((item, index) => {
            let person = new Person();
            Object.assign(person, item);
            console.log(person);
            let { personID, hoTen, email, diaChi, loaiPerson, diemTB, tinhLuong, tenCty, giaTriHoaDon, danhGia } = person;
            let danhGiaVN = '';
            if (danhGia == 'danhGia1') {
                danhGiaVN = 'Rất tốt';
            } else if (danhGia == 'danhGia2') {
                danhGiaVN = 'Tốt';
            } else if (danhGia == 'danhGia3') {
                danhGiaVN = 'Bình thường';
            } else if (danhGia == 'danhGia4') {
                danhGiaVN = 'Không tốt';
            } else if (danhGia == 'danhGia5') {
                danhGiaVN = 'Tệ'
            }

            return `
                <tr>
                    <td>${personID}</td>
                    <td>${hoTen}</td>
                    <td>${email}</td>
                    <td>${diaChi}</td>
                    <td>${loaiPerson == 'hocVien' ? diemTB() : 'X'}</td>
                    <td>${loaiPerson == 'nhanVien' ? tinhLuong() : 'X'}</td>
                    <td>${loaiPerson == 'khachHang' ? tenCty : 'X'}</td>
                    <td>${loaiPerson == 'khachHang' ? giaTriHoaDon : 'X'}</td>
                    <td>${loaiPerson == 'khachHang' ? danhGiaVN : 'X'}</td>
                    <td>
                    <button class="btn btn-danger" onclick="xoaPerson('${personID}')">Xoá</button>
                    <button class="btn btn-warning" onclick="layThongTinPerson('${personID}')">Sửa</button>
                    </td>
                </tr>
                `
        }).join("");
        // console.log(content);
        document.getElementById('tbodyPerson').innerHTML = content;
    }
    filterPersonNhanVien() {
        // let content = '';
        let arrLocPerson = this.arrListPerson.reduce((arrNhanVien, item, index) => {
            if (item.loaiPerson == 'nhanVien') {
                arrNhanVien.push(item);
            }
            return arrNhanVien;
        },[]);
        // console.log(arrLocPerson);
        let content = arrLocPerson.map((item, index) => {
            let person = new Person();
            Object.assign(person, item);
            console.log(person);
            let { personID, hoTen, email, diaChi, loaiPerson, diemTB, tinhLuong, tenCty, giaTriHoaDon, danhGia } = person;
            let danhGiaVN = '';
            if (danhGia == 'danhGia1') {
                danhGiaVN = 'Rất tốt';
            } else if (danhGia == 'danhGia2') {
                danhGiaVN = 'Tốt';
            } else if (danhGia == 'danhGia3') {
                danhGiaVN = 'Bình thường';
            } else if (danhGia == 'danhGia4') {
                danhGiaVN = 'Không tốt';
            } else if (danhGia == 'danhGia5') {
                danhGiaVN = 'Tệ'
            }

            return `
                <tr>
                    <td>${personID}</td>
                    <td>${hoTen}</td>
                    <td>${email}</td>
                    <td>${diaChi}</td>
                    <td>${loaiPerson == 'hocVien' ? diemTB() : 'X'}</td>
                    <td>${loaiPerson == 'nhanVien' ? tinhLuong() : 'X'}</td>
                    <td>${loaiPerson == 'khachHang' ? tenCty : 'X'}</td>
                    <td>${loaiPerson == 'khachHang' ? giaTriHoaDon : 'X'}</td>
                    <td>${loaiPerson == 'khachHang' ? danhGiaVN : 'X'}</td>
                    <td>
                    <button class="btn btn-danger" onclick="xoaPerson('${personID}')">Xoá</button>
                    <button class="btn btn-warning" onclick="layThongTinPerson('${personID}')">Sửa</button>
                    </td>
                </tr>
                `
        }).join("");
        // console.log(content);
        document.getElementById('tbodyPerson').innerHTML = content;
    }
    filterPersonKhachHang() {
        // let content = '';
        let arrLocPerson = this.arrListPerson.reduce((arrKhachHang, item, index) => {
            if (item.loaiPerson == 'khachHang') {
                arrKhachHang.push(item);
            }
            return arrKhachHang;
        },[]);
        // console.log(arrLocPerson);
        let content = arrLocPerson.map((item, index) => {
            let person = new Person();
            Object.assign(person, item);
            console.log(person);
            let { personID, hoTen, email, diaChi, loaiPerson, diemTB, tinhLuong, tenCty, giaTriHoaDon, danhGia } = person;
            let danhGiaVN = '';
            if (danhGia == 'danhGia1') {
                danhGiaVN = 'Rất tốt';
            } else if (danhGia == 'danhGia2') {
                danhGiaVN = 'Tốt';
            } else if (danhGia == 'danhGia3') {
                danhGiaVN = 'Bình thường';
            } else if (danhGia == 'danhGia4') {
                danhGiaVN = 'Không tốt';
            } else if (danhGia == 'danhGia5') {
                danhGiaVN = 'Tệ'
            }

            return `
                <tr>
                    <td>${personID}</td>
                    <td>${hoTen}</td>
                    <td>${email}</td>
                    <td>${diaChi}</td>
                    <td>${loaiPerson == 'hocVien' ? diemTB() : 'X'}</td>
                    <td>${loaiPerson == 'nhanVien' ? tinhLuong() : 'X'}</td>
                    <td>${loaiPerson == 'khachHang' ? tenCty : 'X'}</td>
                    <td>${loaiPerson == 'khachHang' ? giaTriHoaDon : 'X'}</td>
                    <td>${loaiPerson == 'khachHang' ? danhGiaVN : 'X'}</td>
                    <td>
                    <button class="btn btn-danger" onclick="xoaPerson('${personID}')">Xoá</button>
                    <button class="btn btn-warning" onclick="layThongTinPerson('${personID}')">Sửa</button>
                    </td>
                </tr>
                `
        }).join("");
        // console.log(content);
        document.getElementById('tbodyPerson').innerHTML = content;
    }

}