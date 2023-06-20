export default function kiemTraRong(checkInput, idThongBao) {
    if (checkInput) {
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
        document.getElementById(idThongBao).style = "display: inline";
        document.getElementById(idThongBao).innerHTML = "Vui lòng nhập dữ liệu";
        return false;
    }
}

export function kiemTraID(checkInput, idThongBao) {
    const number = String(checkInput);
    if (number.length >= 4 && number.length <= 6) {
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
        document.getElementById(idThongBao).style = "display: inline";
        document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đúng 4 đến 6 ký số";
        return false;
    }
}

export function kiemTraHoTen(checkInput, idThongBao) {
    const namePattern = /^[A-Za-z\s']+$/;
    const vietnameseNamePattern = /^[\p{L}\p{M}'\s]+$/u;
    const englishNamePattern = /^[A-Za-z\s']+$/;
    if (vietnameseNamePattern.test(checkInput) || englishNamePattern.test(checkInput)) {
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
        document.getElementById(idThongBao).style = "display: inline";
        document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đúng họ tên";
        return false;
    }
}

export function kiemTraEmail(checkInput, idThongBao) {
    var regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var hopLe = regexEmail.test(checkInput);
    if (hopLe) {
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
        document.getElementById(idThongBao).style = "display: inline";
        document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đúng Email";
        return false;
    }
}

export function kiemTraSoDiem(checkInput, idThongBao) {
    const numberPattern = /^(?:10(?:\.0+)?|\d(?:\.\d+)?)$/;
    if (numberPattern.test(checkInput)) {
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
        document.getElementById(idThongBao).style = "display: inline";
        document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đúng số điểm";
        return false;
    }
}

export function kiemTraSo(checkInput, idThongBao) {
    const numberPattern = /^(?!0+(\.0+)?$)\d+(\.\d+)?$/;
    if (numberPattern.test(checkInput)) {
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
        document.getElementById(idThongBao).style = "display: inline";
        document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đúng số";
        return false;
    }
}

