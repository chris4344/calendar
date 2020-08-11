var date = new Date()
var lastDay = new Date()
var toDate = { day: date.getDate(), mouth: date.getMonth(), year: date.getFullYear() }
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
var mouths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var todaysDate = date.getDate()
var thisMonth = date.getMonth()
var thisYear = date.getFullYear()
var mouthCount = toDate.mouth
var yearCount = toDate.year
var currentCell
var dateCount = 1
var leapYear = 0
document.getElementById('date').innerHTML = mouths[mouthCount] + ' ' + yearCount
loadMonth()

function loadMonth() {
    date.setFullYear(toDate.year, toDate.mouth, 1)
    var subDay = date.toString().substring(0, 3)
    var firstDay = days.indexOf(subDay)

    lastDay.setFullYear(toDate.year, toDate.mouth + 1, 0)
    var subDayL = lastDay.toString().substring(7, 10)
    console.log(subDayL)

    var main = document.createElement('div')
    main.setAttribute('class', 'grid')
    document.querySelector('main').appendChild(main)
    dateCount = 0
    for (i = 0; i < 42; i++) {
        var dateCell = document.createElement("div")
        dateCell.setAttribute('class', 'date-cell')
        main.appendChild(dateCell)

        if (i >= firstDay && dateCount < parseInt(subDayL)) {
            dateCount += 1
            var dateNumber = document.createElement('p')
            if (dateCount == todaysDate && mouthCount == thisMonth && yearCount == thisYear) {
                dateNumber.setAttribute('class', 'number' + ' today')
            } else {
                dateNumber.setAttribute('class', 'number')
            }
            dateNumber.innerHTML = dateCount
            dateCell.appendChild(dateNumber)

        }

    }
}

document.getElementById('next').addEventListener('click', () => {
    mouthCount += 1
    toDate.mouth = mouthCount
    year()
    console.log(toDate.mouth)

    console.log(mouthCount)


})

document.getElementById('last').addEventListener('click', () => {

    mouthCount -= 1
    toDate.mouth = mouthCount
    year()


    console.log(mouthCount)

})


function year() {
    var remove = document.querySelector('main')
    remove.removeChild(remove.childNodes[1])
    console.log('ll')
    loadMonth()


    if (mouthCount > 11) {
        mouthCount = 0
        yearCount += 1
        toDate.year = yearCount
    } else if (mouthCount < 0) {
        mouthCount = 11
        yearCount -= 1
        toDate.year = yearCount
    }
    document.getElementById('date').innerHTML = mouths[mouthCount] + ' ' + yearCount

}