let subjects = {
    list: "Математика, Физика, Информатика",
    
    // Добавить предмет, если его нет
    addSubject: function(item) {
        let arr = this.list.split(", ");
        if (!arr.includes(item)) {
            arr.push(item);
            this.list = arr.join(", ");
        }
    },
    
    // Удалить предмет, если он есть
    removeSubject: function(item) {
        let arr = this.list.split(", ");
        let index = arr.indexOf(item);
        if (index !== -1) {
            arr.splice(index, 1);
            this.list = arr.join(", ");
        }
    }
};

// Проверяем работу:
subjects.addSubject("Химия");
console.log(subjects.list);

subjects.removeSubject("Физика");
console.log(subjects.list);