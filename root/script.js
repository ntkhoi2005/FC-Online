// Định nghĩa trọng số chỉ số cho từng vị trí
const weights = {
    "GK": {
        "TM đổ người": 21,
        "TM bắt bóng": 21,
        "TM chọn vị trí": 21,
        "TM phản xạ": 21,
        "Phản ứng": 11,
        "TM phát bóng": 5
    },
    "CB": {
        "Kèm người": 17,
        "Cắt bóng": 14,
        "Lấy bóng": 13,
        "Xoạc bóng": 10,
        "Đánh đầu": 10,
        "Sức mạnh": 10,
        "Quyết đoán": 7,
        "Phản ứng": 5,
        "Chuyền ngắn": 5,
        "Giữ bóng": 4,
        "Nhảy": 3,
        "Tốc độ": 2
    },
    "LB/RB": {
        "Xoạc bóng": 14,
        "Cắt bóng": 12,
        "Lấy bóng": 11,
        "Tạt bóng": 9,
        "Thể lực": 8,
        "Phản ứng": 8,
        "Kèm người": 8,
        "Chuyền ngắn": 7,
        "Giữ bóng": 7,
        "Tốc độ": 7,
        "Tăng tốc": 5,
        "Đánh đầu": 4
    },
    "LWB/RWB": {
        "Cắt bóng": 12,
        "Tạt bóng": 12,
        "Xoạc bóng": 11,
        "Chuyền ngắn": 10,
        "Thể lực": 10,
        "Lấy bóng": 8,
        "Giữ bóng": 8,
        "Phản ứng": 8,
        "Kèm người": 7,
        "Tốc độ": 6,
        "Rê bóng": 4,
        "Tăng tốc": 4
    },
    "CDM": {
        "Chuyền ngắn": 14,
        "Cắt bóng": 14,
        "Lấy bóng": 12,
        "Giữ bóng": 10,
        "Chuyền dài": 10,
        "Kèm người": 9,
        "Phản ứng": 7,
        "Thể lực": 6,
        "Xoạc bóng": 5,
        "Quyết đoán": 5,
        "Tầm nhìn": 4,
        "Sức mạnh": 4
    },
    "CM": {
        "Chuyền ngắn": 17,
        "Giữ bóng": 14,
        "Tầm nhìn": 13,
        "Chuyền dài": 13,
        "Phản ứng": 8,
        "Rê bóng": 7,
        "Chọn vị trí": 6,
        "Thể lực": 6,
        "Lấy bóng": 5,
        "Cắt bóng": 5,
        "Sút xa": 4,
        "Dứt điểm": 2
    },
    "LM/RM": {
        "Rê bóng": 15,
        "Giữ bóng": 13,
        "Chuyền ngắn": 11,
        "Tạt bóng": 10,
        "Chọn vị trí": 8,
        "Phản ứng": 7,
        "Tăng tốc": 7,
        "Tầm nhìn": 7,
        "Dứt điểm": 6,
        "Tốc độ": 6,
        "Thể lực": 5,
        "Chuyền dài": 5
    },
    "CAM": {
        "Chuyền ngắn": 16,
        "Giữ bóng": 15,
        "Tầm nhìn": 14,
        "Rê bóng": 13,
        "Chọn vị trí": 9,
        "Phản ứng": 7,
        "Dứt điểm": 7,
        "Sút xa": 5,
        "Tăng tốc": 4,
        "Chuyền dài": 4,
        "Tốc độ": 3,
        "Khéo léo": 3
    },
    "LW/RW": {
        "Rê bóng": 16,
        "Giữ bóng": 14,
        "Dứt điểm": 10,
        "Chọn vị trí": 9,
        "Chuyền ngắn": 9,
        "Tạt bóng": 9,
        "Phản ứng": 7,
        "Tăng tốc": 7,
        "Tầm nhìn": 6,
        "Tốc độ": 6,
        "Sút xa": 4,
        "Khéo léo": 3
    },
    "CF": {
        "Giữ bóng": 15,
        "Rê bóng": 14,
        "Chọn vị trí": 13,
        "Dứt điểm": 11,
        "Phản ứng": 9,
        "Chuyền ngắn": 9,
        "Tầm nhìn": 8,
        "Lực sút": 5,
        "Tốc độ": 5,
        "Tăng tốc": 5,
        "Sút xa": 4,
        "Đánh đầu": 2
    },
    "ST": {
        "Dứt điểm": 18,
        "Chọn vị trí": 13,
        "Giữ bóng": 10,
        "Lực sút": 10,
        "Đánh đầu": 10,
        "Phản ứng": 8,
        "Rê bóng": 7,
        "Sức mạnh": 5,
        "Tốc độ": 5,
        "Chuyền ngắn": 5,
        "Tăng tốc": 4,
        "Sút xa": 3,
        "Vô lê": 2
    },
    "SW": {
        "Xoạc bóng": 15,
        "Kèm người": 15,
        "Lấy bóng": 15,
        "Đánh đầu": 10,
        "Sức mạnh": 10,
        "Cắt bóng": 8,
        "Quyết đoán": 8,
        "Phản ứng": 5,
        "Chuyền ngắn": 5,
        "Giữ bóng": 5,
        "Nhảy": 4
    }
};

// Render bảng chỉ số theo vị trí
const statsTable = document.getElementById("statsTable");
let values = {};
let training = {};

function renderTable(position) {
    const posStats = weights[position];
    statsTable.innerHTML = "";
    values = {};
    training = {};
    Object.keys(posStats).forEach(stat => {
        values[stat] = 0;
        training[stat] = 0;
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${stat}</td>
        <td>
          <input type="number" value="0" min="0" max="99" id="val-${stat}">
        </td>
        <td class="training-cell">
          <button onclick="updateTraining('${stat}', -1)">-</button>
          <span id="train-${stat}">0</span>
          <button onclick="updateTraining('${stat}', 1)">+</button>
        </td>
      `;

        statsTable.appendChild(row);

        const input = document.getElementById(`val-${stat}`);

        input.addEventListener("focus", e => {
            if (e.target.value === "0") {
                e.target.value = ""; // clear khi bấm vào nếu là 0
            }
        });

        input.addEventListener("blur", e => {
            if (e.target.value === "" || isNaN(e.target.value)) {
                e.target.value = "0"; // nếu để trống thì trả lại 0
            }
            values[stat] = parseInt(e.target.value) || 0;
            updateOVR();
        });

        input.addEventListener("input", e => {
            values[stat] = parseInt(e.target.value) || 0;
            updateOVR();
        });


    });
    updateOVR();
}

function updateTraining(stat, change) {
    training[stat] += change;
    if (training[stat] < 0) training[stat] = 0;
    if (training[stat] > 2) training[stat] = 2;
    document.getElementById(`train-${stat}`).textContent = training[stat];
    updateOVR();
}

function updateOVR() {
    const position = document.getElementById("position").value;
    const posStats = weights[position];

    let total = 0;
    let newTotal = 0;

    Object.keys(posStats).forEach(stat => {
        const weight = posStats[stat];
        const base = values[stat] || 0;
        const extra = training[stat] || 0;

        total += base * weight;
        newTotal += (base + extra) * weight;
    });

    total = (total / 100).toFixed(2);
    newTotal = (newTotal / 100).toFixed(2);

    document.getElementById("totalOvr").textContent = `Tổng OVR: ${total}`;
    document.getElementById("newOvr").textContent = `Tổng OVR mới: ${newTotal}`;
}

// Sự kiện đổi vị trí
document.getElementById("position").addEventListener("change", e => {
    document.getElementById("positionName").textContent = e.target.value;
    renderTable(e.target.value);
});

// Render mặc định vị trí đầu tiên
renderTable(document.getElementById("position").value);