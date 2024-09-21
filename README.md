# goit-js-hw-09
### Zadanie domowe nr 9

_Wow, jesteś już na module 9!_

_Podsumujmy nasze dotychczasowe wyniki. Ty już:_

* rozumiesz specyfikę formatu JSON;
* znasz i używasz metod obiektów JSON;
* rozróżniasz pamięć lokalną i pamięć sesji;
* zainstalował node.js i korzystał z NPM (node package manager);
* rozumiesz pojęcie modularności kodu;
* używasz składni ECMAScript Modules;
* wiesz, jak instalować i odinstalowywać pakiety oraz używać ich w kodzie.
_Czas poćwiczyć! Czeka Cię zadanie stworzenia galerii obrazów i zapisania danych formularza._


__Zadanie domowe №9__

1. Utwórz repozytorium `goit-js-hw-09`
2. Zbuduj swój projekt za pomocą [Vite](https://vitejs.dev/). Przygotowaliśmy dla Ciebie [gotową kompilację](https://github.com/goitacademy/vanilla-app-template) ze wszystkimi dodatkowymi ustawieniami projektu i zalecamy jej użycie.
3. Przeczytaj zadanie i wykonaj je w edytorze kodu.
4. Upewnij się, że kod jest formatowany za pomocą `Prettier`, i że nie ma żadnych błędów ani ostrzeżeń w konsoli po otwarciu żywej strony zadania.
5. Przekaż pracę domową do sprawdzenia.


__Format przesyłania.__ Praca domowa zawiera dwa linki: do plików źródłowych oraz do strony roboczej na `GitHub Pages`.

<pre>
! Wykorzystaj ten <a href="https://www.figma.com/file/m8k9NQV7qZrtYDCvxfD68B/%D0%94%D0%97-JavaScript?type=design&amp;node-id=3-969&amp;mode=design" rel="noopener noreferrer" target="_blank">układ</a> do stylizacji własnego zadania.
</pre>

Niech struktura folderów i plików projektu w folderze `src` wygląda następująco. Przykład podłączenia plików do index.html można zobaczyć w poprzednim zadaniu domowym.

__Zadanie 1. Galeria obrazów__

Wykonaj to zadanie w plikach `01-gallery.html` i `01-gallery.js`.

W poprzednim zadaniu domowym utworzyłeś/aś galerię obrazów przy użyciu delegowania zdarzeń i dodałeś/aś okno modalne za pośrednictwem biblioteki CDN, aby wyświetlać pełnowymiarową wersję obrazu.


Tworzenie galerii jest codziennym zadaniem dla programistów, ale ręczne pisanie ich za każdym razem jest zbyt czasochłonne. W tym celu istnieją biblioteki, które implementują całą logikę galerii.


Utwórz tę samą galerię, ale przy użyciu biblioteki [SimpleLightbox](https://simplelightbox.com/), która zajmie się kliknięciami obrazów, otwieraniem i zamykaniem okna modalnego oraz przewijaniem obrazów za pomocą klawiatury.


Zwróć uwagę na następujące niuanse:

* Nie trzeba już wdrażać delegowania zdarzeń, biblioteka [SimpleLightbox](https://simplelightbox.com/) sama będzie śledzić kliknięcia na kartach galerii.
* Nie potrzebujesz już biblioteki do tworzenia okna modalnego, ta funkcjonalność jest wbudowana w bibliotece [SimpleLightbox](https://simplelightbox.com/).
Wykonaj to zadanie w plikach `gallery.html` i `gallery.js`. Podziel to zadanie na kilka podzadań.

Użyj kodu z poprzedniego zadania domowego i dokonaj jego refaktoryzacji. Nie musisz pisać wszystkiego od nowa. Na przykład, tworzenie elementów galerii pozostanie bez zmian. Ale kod delegujący i otwierający okno modalne powinien zostać usunięty.

Aby zmienić nieco układ karty galerii, skorzystaj z tego szablonu.

```html
<li class="gallery-item">
	<a class="gallery-link" href="large-image.jpg">
		<img 
			class="gallery-image" 
			src="small-image.jpg" 
			alt="Image description" 
			/>
	</a>
</li>
```


Dodaj bibliotekę [SimpleLightbox](https://simplelightbox.com/) jako zależność projektu za pomocą `npm`. Aby dołączyć kod CSS biblioteki do projektu, należy dodać kolejny import, oprócz tego opisanego w dokumentacji.


```javascript
// Opisany w dokumentacji
import SimpleLightbox from "simplelightbox";
// Opcjonalny import stylów
import "simplelightbox/dist/simple-lightbox.min.css";
```


Następnym krokiem jest inicjalizacja biblioteki po utworzeniu i dodaniu elementów galerii do `ul.gallery`. Aby to zrobić, przeczytaj dokumentację [SimpleLightbox](https://simplelightbox.com/), zwłaszcza sekcje „Usage” i „Markup”.



Następnie zapoznaj się z dokumentacją w sekcji „Opcje” i dodaj wyświetlane podpisy do obrazów z atrybutu 'alt'. Niech podpis będzie na dole i pojawi się 250 milisekund po otwarciu okna modalnego.


Na co będzie zwracał uwagę mentor podczas sprawdzania zadania:

* Na żywej stronie wyświetlana jest galeria obrazów ze zbioru danych `images`.
* Galeria obrazów jest stylizowana zgodnie z układem.
* Dane dla galerii są tworzone dynamicznie w JS.
* Nie ma niestandardowych słuchaczy.
Biblioteka SimpleLightbox jest podłączona za pomocą `npm`.
Instancja biblioteki jest inicjowana po dodaniu elementów galerii do DOM i poza jakimikolwiek funkcjami.
* Po kliknięciu elementu galerii otwiera się okno modalne podłączonej biblioteki, które zawiera powiększoną wersję klikniętego obrazu. Dostępne są wszystkie podstawowe funkcje biblioteki.
* Po 250 milisekundach od otwarcia okna modalnego zawartość atrybutu `alt` pojawia się na dole jako podpis do obrazu.

__Zadanie 2. Formularz zwrotny__



Wykonaj to zadanie w plikach `02-form.html` i `02-form.js`.

Dodaj do HTML znaczniki formularza. W JS napisz skrypt, który będzie zapisywał wartości pól w pamięci lokalnej, gdy użytkownik coś wpisze.


```html
<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>
```


Wykonaj to zadanie w plikach `feedback.html` i `feedback.js`.

Podziel go na kilka podzadań:

1. Korzystając z delegowania, śledź zdarzenie input w formularzu i za każdym razem zapisuj obiekt z polami `email` i `message` do pamięci lokalnej, w której przechowywane są bieżące wartości pól formularza. Niech kluczem dla magazynu będzie ciąg `„feedback-form-state”`.
2. Po załadowaniu strony sprawdź stan pamięci, a jeśli są tam przechowywane dane, wypełnij nimi pola formularza. W przeciwnym razie pola powinny być puste.
3. Podczas submitu formularza wyczyść pamięć formularza i pola, a następnie wyświetl w konsoli obiekt z polami `e-mail`, `message` i ich aktualnymi wartościami.


Na co będzie zwracał uwagę mentor podczas sprawdzania zadania:

* Na żywej stronie wyświetlany jest formularz z dwoma elementami formularza i przyciskiem typu `submit`.
* Formularz jest stylizowany zgodnie z układem.
* Formularz nasłuchuje zdarzeń `input` i `submit`.
* Podczas wprowadzania danych do dowolnego elementu formularza, są one zapisywane do lokalnej pamięci pod kluczem `"feedback-form-state"`. Zapisane dane nie zawierają spacji wokół krawędzi.
* Wprowadzanie danych w jednym polu formularza nie usuwa danych w pamięci dla innego pola.
* Podczas odświeżania strony dane z pamięci lokalnej są zastępowane do elementów formularza. W polach formularza nie ma `undefined`.
* Podczas submitu formularza sprawdzane jest, czy oba elementy formularza są wypełnione.
* Podczas wysyłania formularza, jeśli oba elementy formularza są wypełnione, obiekt z polami `email`, `message` i ich aktualnymi wartościami jest wyświetlany w konsoli, a pamięć i pola formularza są czyszczone.
* Jeśli wprowadzisz dane do dowolnego elementu formularza po submicie, dane z poprzedniego formularza nie pojawią się w pamięci lokalnej.

https://lukasz-sklad.github.io/goit-js-hw-09/

https://github.com/lukasz-sklad/goit-js-hw-09/