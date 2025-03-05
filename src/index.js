// 1
document.addEventListener('DOMContentLoaded', () =>{
    const bookmarkInput = document.getElementById('bookmarkInput');
    const addBookmarkBtn = document.getElementById('addBookmarkBtn');
    const bookmarkList = document.getElementById('bookmarkList');

    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

    function renderBookmarks(){
        bookmarkList.innerHTML = '';
        bookmarks.forEach((bookmark, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
            <a target="_blank" href="${bookmark.url}">${bookmark.url}</a>
            <button class="edit" data-index = "${index}">✎</button>
            <button class="delete" data-index = "${index}">X</button>
            `
            bookmarkList.appendChild(li);
        });
    };


    addBookmarkBtn.addEventListener('click', ()=>{
        const url = bookmarkInput.value.trim();
        if(url) {
            bookmarks.push({url});
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
            bookmarkInput.value = ''
            renderBookmarks();
        }
    });


    bookmarkList.addEventListener('click', (event)=>{
        const index = event.target.dataset.index;
        if(event.target.classList.contains('delete')){
            bookmarks.splice(index, 1);
            localStorage.setItem('bookmsrks', JSON.stringify(bookmarks));
            renderBookmarks();
        }
        if(event.target.classList.contains('edit')) {
            const newUrl = prompt('Введіть нове посилання', bookmarks[index].url);
            if(newUrl){
                bookmarks[index].url = newUrl;
                localStorage.setItem('bookmsrks', JSON.stringify(bookmarks));
                renderBookmarks();
            }
        }
    });
    renderBookmarks();
});






// 2
document.addEventListener('DOMContentLoaded', () =>{
    const username = document.getElementById('username');
    const userPassword = document.getElementById('password');
    const saveBtn = document.getElementById('saveBtn');


    let userData = JSON.parse(localStorage.getItem('userData')) || [];
    saveBtn.addEventListener('click', () =>{
        const naming = username.value.trim();
        const password = userPassword.value.trim();
        localStorage.setItem('userData', JSON.stringify({naming, password}))
    });

    username.value = JSON.parse(localStorage.getItem('userData')).naming;
    userPassword.value = JSON.parse(localStorage.getItem('userData')).password;
});