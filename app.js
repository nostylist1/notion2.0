const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')
// function render (){
//     for(i = 0; i < notes.length; i++) {
//         listElement.insertAdjacentHTML("beforeend",getNoteTemplate(notes[i]) ) 
//     }
// }

// render()

// createBtn.onclick = function() {
//     if (inputElement.value.length === 0) {
//         return 
//     }
//     listElement.insertAdjacentHTML("beforeend", getNoteTemplate(inputElement.value)) 
//     inputElement.value = ''
// }

// function getNoteTemplate(title) {
//     return`             
//         <li
//             class="list-group-item d-flex justify-content-between align-items-center"
//             >
//             <span>${title}</span>
//             <span>
//             <span class="btn btn-small btn-success">&check;</span>
//             <span class="btn btn-small btn-danger">&times;</span>
//             </span>
//         </li>`
// }

// const person = {
//     firstName: 'Vlad',
//     lastName: 'Krapko',
//     nickName: 'nostylist',
//     year: 20,
//     getFullName: function() {
//         console.log(person.firstName + ' ' + person.lastName)
//     },
// }

const notes = [
    {
        title: 'досмотреть видос',
        progress: false,
    }, 
    {
        title: 'залить код на гитхаб',
        progress: true,
    }
]

function render (){
    listElement.innerHTML = ''
    if (notes.length === 0) {
        listElement.insertAdjacentHTML("beforeend",'Пока что пусто :(')
    }
    for(i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML("beforeend",getNoteTemplate(notes[i], i) ) 
    }
}

render()

function getNoteTemplate(notes, index) {
    return`             
        <li
            class="list-group-item d-flex justify-content-between align-items-center"
            >
            <span class='${notes.progress ? 'text-decoration-line-through' : ''}'>${notes.title}</span>
            <span>
            <span class="btn btn-small btn-${notes.progress ? 'warning' : 'success'}" data-index='${index}' data-type='toggle'>&check;</span>
            <span class="btn btn-small btn-danger" data-index='${index}' data-type='remove'>&times;</span>
            </span>
        </li>`
}

listElement.onclick = function (event) {   
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type
        
        if (type === 'toggle') {
            notes[index].progress = !notes[index].progress
            console.log('toggle', index)
        } else if (type === 'remove') {
            notes.splice(index, 1)    // откуда, сколько
            console.log('remove', index)
        }
    render()
    }
}

createBtn.onclick = function() {
    if (inputElement.value.length === 0) {
        return 
    }
    const newNote =
        {
            title: inputElement.value,
            progress: false,
        }
    notes.push(newNote) 
    render()
    inputElement.value = ''
}
