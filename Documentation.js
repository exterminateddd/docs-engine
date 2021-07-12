class Documentation {
    constructor(sectionBarSelector, sectionBlock) {
        this.sections = [];
        this.sectionBar = document.querySelector(sectionBarSelector);
        this.sectionBlock = document.querySelector(sectionBlock);
        this.updateSections();
    }
    addSection(section) {
        this.sections.push(section);
        this.updateSections();
    }
    updateSections() {
        this.sectionBar.innerHTML = ``;
        this.sections.forEach(
            (s) => {
                let sect = document.createElement("div");
                sect.classList.toggle("section-btn");
                sect.textContent = s.title;
                sect.addEventListener('click', (e) => {
                    this.setCurrentSection(s);
                })
                this.sectionBar.appendChild(sect);
        }
        )
    }
    setCurrentSection(section) {
        let markedContent = marked(`
        ${section.pageContent}
        `);
        this.sectionBlock.innerHTML = markedContent;
    }
}