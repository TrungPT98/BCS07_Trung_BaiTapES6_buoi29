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
            let {personID, hoTen, email, diaChi, loaiPerson, diemTB, tinhLuong, tenCty, giaTriHoaDon, danhGia} = person;

            if (loaiPerson == "hocVien") {
                return `
                <tr>
                    <td>${personID}</td>
                    <td>${hoTen}</td>
                    <td>${email}</td>
                    <td>${diaChi}</td>
                    <td>${diemTB()}</td>
                    <td>X</td>
                    <td>X</td>
                    <td>X</td>
                    <td>X</td>
                    <td>
                    <button class="btn btn-danger" onclick="xoaPerson('${personID}')">Xoá</button>
                    <button class="btn btn-warning" onclick="layThongTinPerson('${personID}')">Sửa</button>
                    </td>
                </tr>
                `
            } else if (loaiPerson == "nhanVien") {
                return `
                <tr>
                    <td>${personID}</td>
                    <td>${hoTen}</td>
                    <td>${email}</td>
                    <td>${diaChi}</td>
                    <td>X</td>
                    <td>${tinhLuong()}</td>
                    <td>X</td>
                    <td>X</td>
                    <td>X</td>
                    <td>
                    <button class="btn btn-danger" onclick="xoaPerson('${personID}')">Xoá</button>
                    <button class="btn btn-warning" onclick="layThongTinPerson('${personID}')">Sửa</button>
                    </td>
                </tr>
                `
            } else {
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
                    <td>X</td>
                    <td>X</td>
                    <td>${tenCty}</td>
                    <td>${giaTriHoaDon}</td>
                    <td>${danhGiaVN}</td>
                    <td>
                    <button class="btn btn-danger" onclick="xoaPerson('${personID}')">Xoá</button>
                    <button class="btn btn-warning" onclick="layThongTinPerson('${personID}')">Sửa</button>
                    </td>
                </tr>
                `
            }

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
                let {id} = item;
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

    sortNames(names) {
        // Create a copy of the original array to avoid modifying the input array
        let sortedNames = names;
        
        sortedNames.sort((a, b) => {
          // Convert names to lowercase for case-insensitive sorting
          let nameA = a.toLowerCase();
          let nameB = b.toLowerCase();
          
          // Compare the lowercase names and return the appropriate value
          if (nameA < nameB) {
            return -1; // nameA comes before nameB
          } else if (nameA > nameB) {
            return 1; // nameA comes after nameB
          } else {
            return 0; // names are equal
          }
        });
        
        return sortedNames;
      };
      
      // Example usage:
    //   const names = ["John", "Alice", "bob", "David"];
    //   const sortedNames = sortNames(names);
    //   console.log(sortedNames);
      

}