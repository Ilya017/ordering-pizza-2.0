function orderingPizza(str, n) {
    var pizza = [
        "фирменная пицца",
        "пицца с ананасом",
        "пицца с яйцом",
        "пицца с курицей",
        "пицца с рыбой"
];
if (str == "" && n == "") {
    str = 0;
    n = 1;
}
if (n == "") {
    n = 1;
}
if (str > 4 || str < 0 || isNaN(str) || isNaN(n) || n <= 0) {
    alert("Произошла ошибка, повторите заказ.");
}
document.write("Ваш заказ: " + pizza[str] + " - " + n + "шт.");
}
let p = prompt("Выберите пиццу от 0 до 4");
let z = prompt("Укажите кол-во пиц");
orderingPizza(p,z);