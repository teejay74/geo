import addNote from './functions/addNote';

const body = document.querySelector('body');
const timelineContent = document.querySelector('.timeline-content');
const timelineForm = document.querySelector('.timeline-form');
const timelineFormInput = timelineForm.querySelector('.timeline-form-input');
const notes = [];

timelineForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (timelineFormInput.value) {
    const note = document.createElement('p');
    note.classList.add('timeline-note-text');
    note.textContent = timelineFormInput.value;

    addNote(notes, timelineContent, timelineFormInput, body, note);
  }
});
