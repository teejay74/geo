import TimelineNote from '../TimelineNote';
import WidgetError from '../WidgetError';

export default function addNote(notes, timelineContent, timelineFormInput, body, note) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const notePosition = `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;

      const timelinenote = new TimelineNote(timelineFormInput, notePosition, note);
      notes.push(timelinenote);

      timelinenote.createNote(timelineContent, notes, note);

      timelineFormInput.closest('.timeline-form').reset();
    }, (error) => {
      console.log(error);
      const widgetError = new WidgetError();
      widgetError.createFormWidget(body, timelineFormInput, timelineContent, notes, note);
    });
  }
}
