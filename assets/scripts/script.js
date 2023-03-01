const timeDiv = document.querySelector("#dayjs")

const now = dayjs();

timeDiv.innerHTML = now.format('H:mm')