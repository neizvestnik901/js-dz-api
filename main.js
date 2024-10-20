
let comments = document.querySelector('.comments')


async function getComments() {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/comments')
        let data = await res.json()
        data.forEach((item) => {
            let comment = document.createElement('div')
            comment.classList.add('comment')
              

            let name = document.createElement('h2')
            let email = document.createElement('a')
            let body = document.createElement('p')

            name.textContent  = item.name
            email.textContent = item.email
            body.textContent =  item.body
            email.href=`mailto:${item.emaill}`

            comment.append(name,email,body)
            comments.append(comment)
        });
    } catch {
        console.log('Ошибка при получении данных');
    }
}

window.addEventListener('DOMContentLoaded', () => getComments())