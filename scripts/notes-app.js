let notes = getSavedNotes();

const filters = {
  searchText: "",
  sortBy: "byEdited"
};

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", function (e) {
  const id = uuidv4();

  let timeStamp = moment().valueOf()

  notes.push({
    id: id,
    title: "",
    body: "",
    createdAt: timeStamp,
    updatedAt: timeStamp
  });
  saveNotes(notes);
  location.assign(`/edit.html#${id}`);
});

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.sortBy = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", function (e) {
  filters.sortBy = e.target.value
  renderNotes(notes, filters)
});

window.addEventListener("storage", function (e) {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});

// const now = moment()
// console.log(now.toString())
// now.add(1, "days").subtract(20, "year");
// console.log(now.toString())

// console.log(now.format('MMMM Do YYYY'))
// console.log(now.fromNow());
// const nowTimeStamp = now.valueOf()
// console.log(moment(nowTimeStamp))

// const birthday = moment().month(11).date(29).year(1980);
// console.log(birthday.format('MMM D, YYYY'))


