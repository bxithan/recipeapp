const menuItems = [
    { name: "แกงเขียวหวาน", ingredients: ["เนื้อไก่", "ตีนไก่", "เลือดไก่", "ลูกชิ้นปลา", "พริกแกงเขียวหวาน", "มะเขือเปาะ", "ใบโหระพา", "กะทิ", "พริก", "ยอดมะพร้าวอ่อน", "ใบมะกรูด", "ขนมจีน"] },

    { name: "ไข่เจียว", ingredients: ["ไข่ไก่", "น้ำมันพืช", "ผงปรุงรส"] },

    { name: "ไข่คน", ingredients: ["ไข่ไก่", "นมสด", "เนย", "เกลือ"] },

    { name: "ไข่กะทะ", ingredients: ["ไข่ไก่", "เนื้อไก่", "เนย", "ข้าวโพดอ่อน", "มะเขือเทศ", "หอม", "ต้นหอม"] },

    { name: "ไข่ตุ๋น", ingredients: ["ไข่ไก่", "ต้นหอม", "หอม", "ผงปรุงรส", "น้ำปลา", "น้ำต้มสุก"] },

    { name: "ต้มยำกุ้งน้ำข้น", ingredients: ["กุ้ง", "ข่า", "ตระไคร้", "ใบมะกรูด", "พริก", "น้ำพริกเผา", "นมสด", "น้ำตาล", "น้ำปลา", "มะนาว", "หอม", "ผักชีฝรั่ง", "เห็ด"] },

    { name: "น้ำพริกกะปิ", ingredients: ["พริก", "กระเทียม", "กะปิ", "มะนาว", "น้ำปลา", "น้ำตาล"] },

    { name: "น้ำพริกปลาทู", ingredients: ["ปลาทู", "กระเทียม", "หอม", "พริก", "น้ำต้มสุก", "มะนาว", "น้ำปลา", "น้ำตาล"] },

    { name: "ผัดกะเพราไก่", ingredients: ["เนื้อไก่", "ใบกะเพรา", "พริก", "กระเทียม", "ซีอิ๊วดำ", "ซอสหอยนางรม", "น้ำปลา", "น้ำตาล", "น้ำมันพืช"] },

    { name: "ผัดกะเพราหมู", ingredients: ["หมู", "พริก", "กระเทียม", "ใบกะเพรา", "น้ำตาล", "ผงปรุงรส", "ซอสหอยนางรม", "ซีอิ๊วดำ", "น้ำมันพืช", "น้ำปลา"] },

    { name: "ผัดไทย", ingredients: ["กุ้ง", "เต้าหู้เหลือง", "กุ้งแห้ง", "เส้นก๋วนเตี๋ยว", "ถั่วงอก", "ใบกุยช่าย", "ไข่ไก่", "น้ำมันพืช", "น้ำมะขามเปียก", "น้ำตาล", "น้ำปลา", "หมูสามชั้น", "ถั่วลิสง"
        , "หอม", "นมสด"] }
];

let ingredients = [];

document.getElementById("ingredientInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const ingredient = this.value.trim();
        if (ingredient) {
            ingredients.push(ingredient);
            updateIngredientList();
            this.value = "";
        }
    }
});

function updateIngredientList() {
    const ingredientList = document.getElementById("ingredientList");
    ingredientList.innerHTML = "";
    ingredients.forEach(item => {
        ingredientList.innerHTML += `<li>${item}</li>`;
    });
}

function searchRecipes() {
    const resultArea = document.getElementById("resultArea");
    resultArea.innerHTML = "";

    const results = menuItems.filter(item => 
        item.ingredients.some(ingredient => ingredients.includes(ingredient))
    );

    if (results.length > 0) {
        results.forEach(item => {
            resultArea.innerHTML += `<p>${item.name}</p>`;
        });
    } else {
        resultArea.innerHTML = "<p>ไม่พบเมนูที่ตรงกับวัตถุดิบ</p>";
    }
}
