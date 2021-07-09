document.querySelector(".actions ul li:nth-child(2) a").onclick = function () {
    let arrInput = document.querySelectorAll("fieldset input, fieldset select");
    let thongTin = {};
    for (let i = 0; i < arrInput.length; i++) {
        let input = arrInput[i];
        let { name, value } = input;
        thongTin = { ...thongTin, [name]: value };
    }

    let content = ``;
    for (let key in thongTin) {
        content += `
        <table>
            <tr>
                <td><strong>${key}:</strong></td>
                <td>${thongTin[key]}</td>
            </tr>
        </table>
    `;
    }

    document.querySelector(".donate-us").innerHTML = content;
    console.log('thongTin', thongTin);
}