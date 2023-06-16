import Person from "./Person.js";
import { HocVien } from "./Person.js";
import { NhanVien } from "./Person.js";
import { KhachHang } from "./Person.js";

export default class ListPerson {
    constructor() {
        this.arrListHocVien = [];
        this.arrListNhanVien = [];
        this.arrListKhachHang = [];
    }
    themHocVien(person) {
        this.arrListHocVien.push(person);
    }
    
    renderHocVien() {
        let content = this.arrListHocVien.map((item, index) => {
            let hocVien = new HocVien();
            Object.assign(hocVien, item);

            let {personID, hoTen, email, diaChi, diemTB} = hocVien;
            console.log(hocVien);
            return `
            <tr>
                <td>${personID}</td>
                <td>${hoTen}</td>
                <td>${email}</td>
                <td>${diaChi}</td>
                <td>${diemTB()}</td>
                <td></td>
                <td>
                <button class="btn btn-danger" onclick="xoaPerson('${personID}')">Xoá</button>
                <button class="btn btn-warning" onclick="layThongTinPerson('${personID}')">Sửa</button>
                </td>
            </tr>
            `
        });
        console.log(content);
        document.getElementById('tbodyPerson').innerHTML = content;
    }

    themNhanVien(person) {
        this.arrListNhanVien.push(person);
    }
    renderNhanVien() {
        let content = this.arrListNhanVien.map((item, index) => {
            let nhanVien = new NhanVien();
            Object.assign(nhanVien, item);

            let {personID, hoTen, email, diaChi, tinhLuong} = nhanVien;
            console.log(nhanVien);
            return `
            <tr>
                <td>${personID}</td>
                <td>${hoTen}</td>
                <td>${email}</td>
                <td>${diaChi}</td>
                <td></td>
                <td>${tinhLuong()}</td>
                <td>
                <button class="btn btn-danger" onclick="xoaPerson('${personID}')">Xoá</button>
                <button class="btn btn-warning" onclick="layThongTinPerson('${personID}')">Sửa</button>
                </td>
            </tr>
            `
        });
        console.log(content);
        document.getElementById('tbodyPerson').innerHTML = content;
    }

    themKhachHang(person) {
        this.arrListKhachHang.push(person);
    }
    renderKhachHang() {
        let content = this.arrListKhachHang.map((item, index) => {
            let khachHang = new KhachHang();
            Object.assign(khachHang, item);

            let {personID, hoTen, email, diaChi, tenCty, giaTriHoaDon, danhGia} = khachHang;
            console.log(khachHang);
            return `
            <tr>
                <td>${personID}</td>
                <td>${hoTen}</td>
                <td>${email}</td>
                <td>${diaChi}</td>
                <td></td>
                <td></td>
                <td>${tenCty}</td>
                <td>${danhGia}</td>
                <td>
                <button class="btn btn-danger" onclick="xoaPerson('${personID}')">Xoá</button>
                <button class="btn btn-warning" onclick="layThongTinPerson('${personID}')">Sửa</button>
                </td>
            </tr>
            `
        });
        console.log(content);
        document.getElementById('tbodyPerson').innerHTML = content;
    }
}