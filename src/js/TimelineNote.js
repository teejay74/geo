/* eslint-disable */
import deleteNote from './functions/deleteNote';

export default class TimelineNote {
  constructor(name, position, el) {
    this.name = name.value;
    this.position = position;
    this.el = el;
    this.date = new Date().toLocaleDateString();
    this.time = new Date().toLocaleTimeString().slice(0, -3);
  }

  createNote(timelineContent, listArray) {
    const timelineContentVar = timelineContent;
    timelineContentVar.innerHTML = '';
    listArray.forEach((notes, index) => {
      const note = document.createElement('div');
      note.classList.add('timeline-note');
      note.innerHTML = ` <span class="timeline-note-time">${notes.date} ${notes.time}</span>
            <div class="timeline-note-content"></div>
            <span class="timeline-note-geolocation">${notes.position}</span>
            <button class="timeline-note-button" type="button">
              <i class="fas fa-times"></i>
            </button>`;

      timelineContentVar.insertAdjacentElement('afterbegin', note);
      note.querySelector('.timeline-note-content').appendChild(notes.el);

      deleteNote(listArray, note, index);
    });
  }
}
