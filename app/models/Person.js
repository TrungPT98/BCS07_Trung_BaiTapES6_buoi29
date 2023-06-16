export default class Person {
    constructor() {
        this.personID = '';
        this.hoTen = '';
        this.email = '';
        this.diaChi = '';

    }
    // diemTB = () => {
    //     return (this.diemToan + this.diemHoa + this.diemLy) / 3;
    // };
}

export class HocVien extends Person{
    constructor () {
        super(personID, hoTen, email, diaChi);
        this.diemToan = '';
        this.diemHoa = '';
        this.diemLy = '';
    }
    diemTB = () => {
        return ((this.diemToan*1) + (this.diemHoa*1) + (this.diemLy*1)) / 3;
    };
}

export class NhanVien extends Person{
    constructor () {
        super(personID, hoTen, email, diaChi);
        this.soNgayLam = '';
        this.luongNgay = '';

    }
    tinhLuong = () => {
        return ((this.soNgayLam*1) * (this.luongNgay*1));
    };
}

export class KhachHang extends Person{
    constructor () {
        super(personID, hoTen, email, diaChi);
        this.tenCty = '';
        this.giaTriHoaDon = '';
        this.danhGia = '';
    }
}