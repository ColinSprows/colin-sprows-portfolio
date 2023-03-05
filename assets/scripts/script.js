const timeDiv = document.querySelector("#dayjs")

const now = dayjs();

timeDiv.innerHTML = now.format('H:mm')

let $modal = $("#myModal");
$modal.draggable({
  handle: ".modal-header",
});

$modal.resizable({
    minWidth: 500, 
    maxWidth: 800,
    minHeight: 400, 
    maxHeight: 600,
});