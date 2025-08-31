const objectProject ={
    objectOne:{ 
    id: "0",
    city: "Rostov-on-Don LCD admiral",
    repairtime:"3.5 months",
    apartmentArea:"81 m2",
    repairCost: "Upon request",
    linkName: "Rostov-on-Don",
    img: "./images/1.png"
    },
    sochiThieves: {
        id: "1",
        city: "Sochi Thieves",
        repairtime:"4 months",
        apartmentArea:"105 m2",
        repairCost: "Upon request",
        linkName: "Sochi Thieves",
        img: "./images/2.png"
    },
    rostovOnDonPatriotic: {
        id: "2",
        city: "Rostov-on-Don Patriotic",
        repairtime:"3 months",
        apartmentArea:"93 m2",
        repairCost: "Upon request",
        linkName: "Rostov-on-Don Patriotic",
        img: "./images/3.png"
    }
}

const points = document.querySelector('.slider-dots');
const navLink = document.querySelector('.titleProjectName')
let spanPoint = document.querySelectorAll('.pointSlider')
const arows =document.querySelector('.arow');
const arowsReverse =document.querySelector('.reverse');
const cityDescription = document.querySelector('.cityDesctription')
const repairTime = document.querySelector('.repairTime')
const apartmentArea = document.querySelector('.apartmentArea')
const repairCost = document.querySelector('.repairCost')
const imgProject = document.querySelector('.imgProject')
let startSlider = 0;






function sliderPoints(obj){
for(let key in obj){
        //отображение кружочков
        const span = document.createElement("span")
        span.classList.add('pointSlider')
        span.dataset.point =obj[key].id
        points.appendChild(span)
        
        //отображение ссылок
        const link = document.createElement("a")
        link.classList.add('navLink')
        link.dataset.point =obj[key].id
        link.textContent =obj[key].city
        navLink.appendChild(link)
        spanPoint = document.querySelectorAll('.pointSlider')

}
}

sliderPoints(objectProject)



function show(index){

    const projects = Object.values(objectProject)
    const length = projects.length
  
        if(index<0){
            index=length-1
        }

        if(index>=length){
            index=0
        }

    startSlider=index


    const elem =projects[index]
  
        cityDescription.innerHTML = `${elem.city}`
        repairTime.innerHTML = `${elem.repairtime}`
        apartmentArea.innerHTML = `${elem.apartmentArea}`
        repairCost.innerHTML = `${elem.repairCost}`
        imgProject.src=`${elem.img}`
    
    
    const link = document.querySelectorAll('.navLink')
    link.forEach(elem => elem.classList.remove('activeLink'))
    link[index].classList.add('activeLink')

    const pointsArr = document.querySelectorAll('.pointSlider')
    pointsArr.forEach(elem => elem.classList.remove('activePoint'))
    pointsArr[index].classList.add('activePoint')
}

show(startSlider)



arows.addEventListener('click', ()=>{
    startSlider  -= 1;
    show(startSlider)
})

arowsReverse.addEventListener('click', ()=>{
    startSlider += 1;
    show(startSlider)
})




document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('pointSlider')){
        let index = parseInt(e.target.dataset.point)
        show(index)
    }

    if(e.target.classList.contains('navLink')){
        let index = parseInt(e.target.dataset.point)
        show(index)
    }
})