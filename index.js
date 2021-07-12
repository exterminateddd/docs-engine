let doc = new Documentation(".section-bar", ".section-block");

let sectionsArr = [
    new Section("launch", `Для всех видов операционных систем запуск практически одинаков.`),
    new Section("labels", `**label** - создание метки, endl соответственно её окончание.`)
]

sectionsArr.forEach((s) => {
    doc.addSection(s);
})
