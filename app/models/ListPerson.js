import Person from "./Person.js";
import { HocVien } from "./Person.js";
import { NhanVien } from "./Person.js";
import { KhachHang } from "./Person.js";
import removeVietnameseTones from '../controllers/helper.js';
import kiemTraRong from "../controllers/validation.js";
import { kiemTraID } from "../controllers/validation.js";
import { kiemTraHoTen } from "../controllers/validation.js";
import { kiemTraEmail } from "../controllers/validation.js";
import { kiemTraSoDiem } from "../controllers/validation.js";
import { kiemTraSo } from "../controllers/validation.js";

export default class ListPerson {
    constructor() {
        this.arrListPerson = [];
    }
    themPerson(person) {
        // let item = this.arrListPerson;
        // console.log(person.personID);
        let valid = true;
        valid = kiemTraRong(person.personID, 'invalidID') &
        kiemTraRong(person.hoTen, 'invalidTen') &
        kiemTraRong(person.email, 'invalidEmail') &
        kiemTraRong(person.diaChi, 'invalidDiaChi') &
        kiemTraRong(person.loaiPerson, 'invalidLoaiPerson') &
        kiemTraID(person.personID, 'invalidID') &
        kiemTraHoTen(person.hoTen, 'invalidTen') &
        kiemTraEmail(person.email, 'invalidEmail');
        
        if (person.loaiPerson == 'hocVien') {
            let valid = true;
            valid = kiemTraRong(person.diemToan, 'invalidDiemToan') &
            kiemTraRong(person.diemLy, 'invalidDiemLy') &
            kiemTraRong(person.diemHoa, 'invalidDiemHoa') &
            kiemTraSoDiem(person.diemToan, 'invalidDiemToan') &
            kiemTraSoDiem(person.diemLy, 'invalidDiemLy') &
            kiemTraSoDiem(person.diemHoa, 'invalidDiemHoa');

            if (!valid) {
                return
            }
        } else if (person.loaiPerson == 'nhanVien') {
            let valid = true;
            valid = kiemTraRong(person.soNgayLam, 'invalidSoNgayLam') &
            kiemTraRong(person.luongNgay, 'invalidLuongNgay') &
            kiemTraSo(person.soNgayLam, 'invalidSoNgayLam') &
            kiemTraSo(person.luongNgay, 'invalidLuongNgay');

            if (!valid) {
                return
            }
        } else if (person.loaiPerson == 'khachHang') {
            let valid = true;
            valid = kiemTraRong(person.tenCty, 'invalidTenCty') &
            kiemTraRong(person.giaTriHoaDon, 'invalidHoaDon') &
            kiemTraRong(person.danhGia, 'invalidDanhGia') &
            kiemTraSo(person.giaTriHoaDon, 'invalidHoaDon');

            if (!valid) {
                return
            }
        }


        if (!valid) {
            return
        }
        this.arrListPerson.push(person);
    }

    renderPerson() {
        let content = this.arrListPerson.map((item, index) => {
            // let { personID, hoTen, email, diaChi, loaiPerson } = item;
            // console.log(item);
            let person = new Person();
            Object.assign(person, item);
            // console.log(person);
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
                    <td>${loaiPerson == 'hocVien' ? diemTB().toLocaleString() : 'X'}</td>
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
        let arrSort = this.arrListPerson;
        arrSort.sort((a, b) => {
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
        }, []);
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
        }, []);
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
        }, []);
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

    timKiemPerson(keyword) {
        let newKeyWord = removeVietnameseTones(keyword);
        let arrTimKiem = this.arrListPerson.filter((item) => {
            let tenMoi = removeVietnameseTones(item.hoTen);
            return tenMoi
                .toLowerCase()
                .trim()
                .includes(newKeyWord.toLowerCase().trim());
        });
        // console.log(arrTimKiem);
        let content = arrTimKiem.map((item, index) => {
            let person = new Person();
            Object.assign(person, item);
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
        document.getElementById('tbodyPerson').innerHTML = content;
    }


}