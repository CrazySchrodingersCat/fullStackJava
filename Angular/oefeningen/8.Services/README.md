## **Oefeningen: Forms & services**
### Oefening 1

Maak een nieuw Angular project h67-oefening1 in de root directory van deze repository.

Maak onderstaand formulier als een template driven form:

*   Type afspraak heeft de keuzes “ontspanning”, “zakelijk” en “andere”. Vul dit op via een ngFor
*   Voorzie volgende validatie:
    *   Omschrijving en datum zijn verplicht
    *   Omschrijving is minstens 3 karakters en maximum 25 karakters
    *   Voorzie de nodige boodschappen onder het input veld indien de validatie niet in orde is.
*   Disable de knop al de validatie niet in orde is.
*   Als er op de knop “aanmaken” geklikt wordt map je de ingevulde waardes naar een Meeting object. Log dit object in de console.

![alt_text](https://i.imgur.com/3W3MPDv.png "image_tooltip")

Controleer na het maken van deze oefening of je alle wijzigingen naar github hebt gepusht.

### Oefening 2
Maak een nieuw Angular project h67-oefening2 in de root directory van deze repository. 

Voorzie 3 components (compA, compB, compC). Elke component heeft een button “Genereer” gekoppeld aan een onClick methode. Voorzie in elke component ook property id van het type number (standaard: 0).

Voorzie een NumberService met een property ‘id’ die start op 0. Voorzie een methode “next()” die de property optelt met 1 en de waarde van id teruggeeft. 

Elke keer als er op de genereer knop gedrukt wordt, wordt de id property van die component opgevuld met het volgende getal uit de service. Een getal kan dus geen 2 keer voorkomen.

Pas vervolgens de oefening aan zodat elke component zijn eigen instantie van de service gebruikt. Hierbij kan hetzelfde getal dus wel voorkomen over de verschillende components heen. Tip: Voorzie de provider op component niveau, niet in de app.module.ts.

![alt_text](https://i.imgur.com/ukeJEWA.png "image_tooltip")

Controleer na het maken van deze oefening of je alle wijzigingen naar github hebt gepusht.

### Oefening 3
Kopier de pokédex oefening uit vorig hoofdstuk naar deze repository. Pas de pokédex oefening aan:

*   De data komt uit een pokemonService.
*   Voeg een formulier toe onder de gridview waarmee je een pokemon kan toevoegen. Het type pokemon wordt gekozen aan de hand van een dropdown menu. Voorzie de nodige validatie & functionaliteit. Je kies zelf of je een template driven of model driven formulier gebuikt. 

Controleer na het maken van deze oefening of je alle wijzigingen naar github hebt gepusht.

### Oefening 4

Ga naar de map H67-oefening-debug. Vervolgens run je onderstaand commando in deze map op alle dependencies te installeren:
```
npm install
```
In dit project zitten verschillende fouten. Probeer aan de hand van de error messages in je IDE & developer console de fouten weg te werken zodat je een werkende applicatie krijgt.

Controleer na het maken van deze oefening of je alle wijzigingen naar github hebt gepusht.
### Oefening 5

Maak een nieuw Angular project h67-oefening3 in de root directory van deze repository.
*   Voor zie een model voor het aanmaken van Klanten. Elke klant heeft een voornaam, achternaam, email, straatnaam, huisnummer, postcode en gemeente.
*   Voorzie een service waarin je een array met dummie klanten plaatst. Voorzie ook methodes voor de lijst op te vragen, elementen toe te voegen aan de array en om klanten te verwijderen van de array.
*   Voorzie 2 nieuwe components. Beide components worden ingeladen vanuit de app.component:
    *   De klant component geeft een overzicht van de details van een klant. 
    *   De nieuwe-klant component is een **reactive** form waarmee je een nieuwe klant kan toevoegen aan de array
*   Voorzie volgende validatie op het formulier:
    *   Alle velden zijn verplicht, indien het form niet valid is, disable je de submit knop.
    *   Email krijgt als default value ‘@email.com’. Voorzie een pattern validator voor een geldig e-mail adres.
    *   Controleer met een custom validator of postcode een getal is tussen 1000 en 8000.
*   Zorg ervoor dat er een rode rand rond de input velden komt die niet in orde zijn op vlak van validatie.
*   De afhandeling van het formulier gebeurt in de app.component.ts file (EventEmitter)
*   Voorzie een knop “verwijderen” in de klant component. Als er op deze knop geklikt wordt, wordt het element uit de array verwijderd.
    *   Extra: voorzie een alert met confirmatie

![alt_text](https://i.imgur.com/qPeHE1W.png "image_tooltip")

Controleer na het maken van deze oefening of je alle wijzigingen naar github hebt gepusht.
