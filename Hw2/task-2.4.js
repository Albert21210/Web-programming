let week = {
    1: "Понедельник",
    2: "Вторник",
    3: "Среда",
    4: "Четверг",
    5: "Пятница",
    6: "Суббота",
    7: "Воскресенье",
    
    getCurrentDay: function() {
        let date = new Date();
        let dayNum = date.getDay();
        if (dayNum === 0) {
            dayNum = 7;
        }
        return this[dayNum];
    }
};

console.log("Сегодня: " + week.getCurrentDay());