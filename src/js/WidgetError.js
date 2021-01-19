import TimelineNote from './TimelineNote';
import checkValidity from './functions/checkValidity';
import showError from './functions/showError';

export default class WidgetError {
  constructor() {
    this.value = null;
  }

  createFormWidget(body, timelineFormInput, timelineContent, mesArray, elem) {
    const el = document.createElement('form');
    el.classList.add('widget-error');
    el.innerHTML = `<h2>Координаты не определены</h2>
            <p class="widget-text">
                Пожалуйста введите Ваши координаты вручную.
            </p>
            <input class="widget-input" type="text" placeholder="Например: 51.50851, 0.12572" required>
            <div class="btn-container">
                <button type="reset" class="btn btn-reset">Отмена</button>
                <button type="submit" class="btn btn-submit">ОК</button>
            </div>`;

    body.insertAdjacentElement('afterbegin', el);

    this.interactForm(el, timelineFormInput, timelineContent, mesArray, elem);
  }

  interactForm(form, timelineFormInput, chatContainer, listArray, elem) {
    const timelineFormInputVar = timelineFormInput;
    const input = form.querySelector('.widget-input');
    const reset = form.querySelector('.btn-reset');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (input.value) {
        this.value = checkValidity(input.value);

        if (this.value) {
          this.value = this.value[0].split(',');

          const latitude = this.value[0].trim();
          const longitude = this.value[1].trim();

          const newnote = new TimelineNote(timelineFormInputVar.value, `${latitude}, ${longitude}`, elem);
          listArray.push(newnote);
          newnote.createNote(chatContainer, listArray);
          timelineFormInputVar.closest('.timeline-form').reset();

          form.reset();
          form.remove();
        } else {
          showError(form, input, 'Координаты введены не верно');
        }
      }
    });

    reset.addEventListener('click', () => {
      timelineFormInputVar.value = '';
      form.reset();
      form.remove();
    });
  }
}
