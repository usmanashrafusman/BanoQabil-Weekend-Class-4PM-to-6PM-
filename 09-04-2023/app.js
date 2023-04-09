// const endDate = new Date("Aug 20, 2023");
// const currentDate = new Date();

// const differenceInMS = endDate.getTime() - currentDate.getTime();
// console.log(Math.floor(differenceInMS/(1000*60*60*24*31)))

function printTable(table , till) {
    for (let i = 1; i <= till; i++) {
        console.log(table + " x " + i + " = " + table * i)
    }
}

printTable(5 , 100)
printTable(10 , 5)
printTable(11 , 20)