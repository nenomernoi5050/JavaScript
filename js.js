let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    question1 = prompt("Введите обязательную статью в этом месяце", ""),
    question2 = prompt("Во сколько обойдется?", ""),
    appData = {
        money: +money,
        timeData: time,
        expenses:{
            question1: +question2
                 },
        optionalExpense: "",
        income: "",
        savings: false

    },
result = (appData.money - appData.expenses.question1) / 30;
alert("Ваш дневной бюджет составит - " + result + " рублей");
