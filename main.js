const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const panes = $$('.tab-pane');

const activeTab = $('.tab-item.active');
const line = $('.line');

/* tabs.forEach((item) => {
    console.log(item.offsetLeft);
    console.log(item.offsetWidth);
    console.log(item);
}); */

line.style.left = activeTab.offsetLeft + 'px';
line.style.width = (activeTab.offsetWidth + 37) + 'px';

tabs.forEach((tab, index) => {
    const pane = panes[index];
    tab.onclick = function () {
        $('.tab-item.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');

        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';

        this.classList.add('active');
        pane.classList.add('active');
    };
});