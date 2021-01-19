export default function deleteNote(list, note, i) {
  const crossSign = note.querySelector('.timeline-note-button');
  crossSign.onclick = () => {
    note.remove();
    list.splice(i, 1);
  };
}
