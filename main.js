const type1Post = document.querySelector('.tweet-card.type1')
const type2Post = document.querySelector('.tweet-card.type2')
const tweetsContainer = document.querySelector('.main-content__tweets');
const mainContainer = document.querySelector('.main-content');
const themeSwitchers = document.querySelectorAll('.theme-switcher');

const theme = localStorage.getItem('theme')
document.body.classList.toggle(theme)

if (document.body.classList.contains('dark')) {
    themeSwitchers.forEach(switcher => {
        switcher.classList.replace('bx-moon', 'bx-sun')
    })
} else {
    themeSwitchers.forEach(switcher => {
        switcher.classList.replace('bx-sun', 'bx-moon')
    })
}

themeSwitchers.forEach(switcher => {
    switcher.addEventListener('click', function () {
        document.body.classList.toggle('dark')
        if (document.body.classList.contains('dark')) {
            this.classList.replace('bx-moon', 'bx-sun')
            localStorage.setItem('theme', 'dark')
        } else {
            this.classList.replace('bx-sun', 'bx-moon')
            localStorage.removeItem('theme')
        }
    })
})

