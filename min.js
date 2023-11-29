const lists = document.getElementsByClassName('lists')[0];
const input = document.getElementsByTagName('input')[0];
const bot = document.getElementsByTagName('button')[0];
console.log(input)
lists.innerHTML = localStorage.getItem('data');
let sp = document.createElement('span');
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        bot.click();
        console.log('hello');
    }
})
const hell = () => {
    if (input.value === '') {
        alert('please enter something');
    }
    else {
        let li = document.createElement('li');
        sp = document.createElement('span');
        sp.innerHTML = '❌';
        li.innerHTML = input.value;
        li.appendChild(sp);
        // console.log(input.value.replace(/(\s)\n/g, '$1 '));
        lists.appendChild(li);

        localStorage.setItem("data", lists.innerHTML);
    }
}
lists.addEventListener('click', (e) => {
    let li = document.createElement('li');
    li.innerHTML = e.target.innerHTML;
    console.log(e.target.parentNode[0]);
    const listItem = e.target.parentNode;
    if (e.target.classList === 'checked') e.target.classList.toggle('');
    else if (e.target.tagName === 'LI') { e.target.classList.toggle('checked'); localStorage.setItem("data", lists.innerHTML); }
    else if (e.target.tagName === 'SPAN') { lists.removeChild(listItem); localStorage.setItem("data", lists.innerHTML); }
})
// lists.addEventListener('click', (e) => {
//     console.log('check');
//     lists.removeChild(e.target.parentNode);
//     localStorage.setItem("data", lists.innerHTML);
// })