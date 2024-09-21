document.addEventListener('DOMContentLoaded', () => {
  const formEl = document.querySelector('.feedback-form');
    const localStorageKey = 'feedback-form-state';
    
  let formData = JSON.parse(
    localStorage.getItem('feedback-form-state') || '{}'
  );
  formData.email = formData.email || '';
  formData.message = formData.message || '';

  // Wczytaj dane zapisane w localStorage
  formEl.elements.email.value = formData.email;
  formEl.elements.message.value = formData.message;

  // Zapisz dane do localStorage po każdej zmianie w formularzu
  formEl.addEventListener('input', evt => {
    formData[evt.target.name] = evt.target.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  });

  // Obsługa wysyłania formularza
  formEl.addEventListener('submit', evt => {
    evt.preventDefault();

    // Pobiera wartości z formularza
    const email = formEl.elements.email.value.trim();
    const message = formEl.elements.message.value.trim();

    // Sprawdza, czy oba pola są wypełnione
    if (!email || !message) {
      alert('Proszę wypełnić wszystkie pola formularza.'); // Wyświetla komunikat błędu, jeśli któreś z pól jest puste
      return; // Przerywa funkcję, jeśli pola nie są wypełnione
    }

    // Logika przetwarzania danych
    console.log({ email, message }); // Wyświetla dane w konsoli

    // Czyszczenie danych po przesłaniu
    localStorage.removeItem(localStorageKey);
    formEl.reset();
    formData = { email: '', message: '' }; // Resetuje obiekt formData
  });
});
