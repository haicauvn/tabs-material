const $  = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tabs = $$('.tab-item');
const panes = $$('.tab-pane');

const tabLine = $('.tab-line');
const tabActive = $('.tab-item.active');

tabLine.style.width = tabActive.offsetWidth + 'px';
tabLine.style.left = tabActive.offsetLeft + 'px';

tabs.forEach((tab, index) => {
    tab.onclick = () => {
        $('.tab-pane.active').classList.remove('active');
        panes[index].classList.add('active');
        tabLine.style.width = tab.offsetWidth + 'px';
        tabLine.style.left = tab.offsetLeft + 'px';
    }
})

