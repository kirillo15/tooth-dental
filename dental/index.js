
const arrToth = [
    {
        name: '46',
        title: 'Мега зуб',
        price: 1990,
        src: '0d34e600652c236840c6df1f4271.jpg'
    },
    {
        name: '48',
        title: 'такой зуб',
        price: 1988,
        src: '016-киста-фолик-1-Clip.jpg'
    },
]

const arrItemLink = document.querySelectorAll('.link-img')
const leftWrapInfo = document.querySelector('.info')


arrItemLink.forEach(item => {

    item.addEventListener('click', () => {
        getItemToth(arrToth, item.dataset.tooth)
    })
    
})

function getItemToth(arr, data) {
    leftWrapInfo.innerHTML = ''
  let item = arr.filter(item => {
        return item.name == data
    })

    let div = document.createElement('div')
    div.classList.add('left-info')

    div.innerHTML = `
    <span class="info-title">Название: ${item[0].title}</span>
    <span class="info-price">Цена: ${item[0].price}</span>
    <div class="info-img">
    <img src="img/${item[0].src}" alt="">
    </div>
    `

    leftWrapInfo.append(div) 
}

