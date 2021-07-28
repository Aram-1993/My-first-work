' use strict ';

let startBtn = document.getElementById("start"),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


	expensesItem = document.getElementsByClassName('expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

	let money, time;

    // expensesBtn.disabled = true;
    // countBtn.disabled = true;
    // optionalExpensesBtn.disabled = true;


startBtn.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY - MM - DD", "");   
    money = +prompt("Ваш бюджет на месяц?", "");
       
    while (isNaN(money) || money =="" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
       }

       appData.budget = money;
       appData.timeData = time;
       budgetValue.textContent = money.toFixed();
       yearValue.value = new Date(Date.parse(time)).getFullYear();
       monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
       dayValue.value = new Date(Date.parse(time)).getDate();

    //    expensesBtn.disabled = false;
    //    countBtn.disabled = false;
    //    optionalExpensesBtn.disabled = false;

});

    expensesBtn.addEventListener('click',  function() {
        let sum = 0;
        for(let i = 0; i < expensesItem.length; i++) {
            let a = expensesItem[i].value,
                b = expensesItem[++i].value;
    
        if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        }else {
            i = i - 1;
          }
          expensesValue.textContent = sum;
        }

        
    });       

    optionalExpensesBtn.addEventListener('click', function() {                                             // Функция для определения необязательных расходов
        for(let i = 0; i <= optionalExpensesItem.length; i++) {
            let opt = optionalExpensesItem[i].value;
            appData.optionalExpenses[i] = opt;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        }       
    });
      
        countBtn.addEventListener('click', function() {                                             // Расчет дневного бюджета
              
        if(appData.budget != undefined) {
            appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
            dayBudgetValue.textContent = appData.moneyPerDay;                                                // Расчет уровня достатка
            if (appData.moneyPerDay < 100) {
                levelValue.textContent = "Это минимальный уровень достака!";
            }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                levelValue.textContent = "Это средный уровень достака!";
            }else if (appData.moneyPerDay > 2000) {
                levelValue.textContent = "Это высокий уровень достака!";
            }else {
                levelValue.textContent = "Произошло ошибка";
            }
        }else {
                dayBudgetValue.textContent = "Произошло ошибка";  
            }
        
    });

    incomeItem.addEventListener('input', function() {
        let items = incomeItem.value;
        console.log(1);       
        if(isNaN(items) || items != '') {           
            appData.income = items.split(', ');
           incomeValue.textContent = appData.income;
        } 
    });

        checkSavings.addEventListener('click', function() {
            if (appData.savings == true) {
                appData.savings = false;
            }else {
                appData.savings = true;
            }
        });
        
        sumValue.addEventListener('input', function() {
            if(appData.savings == true) {
                let sum = +sumValue.value;
                let percent = +percentValue.value;
                appData.monthIcome = sum/100*percent;
                appData.yearIncome = sum/100/12*percent;
                monthSavingsValue.textContent =  appData.monthIcome.toFixed();
                yearSavingsValue.textContent = appData.yearIncome.toFixed();
             }
            });
            
            
            percentValue.addEventListener('input', function() {
                if(appData.savings == true) {
                    let sum = +sumValue.value;
                    let percent = +percentValue.value;
                    appData.monthIcome = sum/100*percent;
                    appData.yearIncome = sum/100/12*percent;
                    monthSavingsValue.textContent =  appData.monthIcome.toFixed();
                    yearSavingsValue.textContent = appData.yearIncome.toFixed();
                 }
                });
            
      const appData = {
            budget: money,
            timeData: time,
            expenses: {},
            optionalExpenses: {},
            income: [],
            savings: false
      };
    






    