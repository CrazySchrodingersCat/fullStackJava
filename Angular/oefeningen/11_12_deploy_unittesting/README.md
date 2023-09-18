# Oefeningen deployments & unittesting
## Oefening 1
Voeg het project met de afgewerkte code van de `lab routing` toe. Zorg voor een `json-server` of variant die je kan gebruiken in je lokale development omgeving. In de applicatie voorzie je dan ook 2 environments:
- Een development omgeving waarin je werkt met de mock server
- Een staging omgeving waarin je werkt met de live API (denk eraan om te werken met een aparte configuration in `angular.json`)

Zorg ervoor dat je via het `npm run build` commando ook kan builden zodat er op de juiste manier gebruik gemaakt wordt van de environment files.

## Oefening 2
Deze oefening bouwt verder op de code uit `oefening 1`. Neem een production build en zorg ervoor dat je deze in een `nginx` container draait. Voeg deze Dockerfile ook toe aan deze repository.

Voorzie hierna een 2de dockerfile waarin je de applicatie host op een `nodeJS` express webserver.

Challenge? Bouw de API na met java spring boot of Express. Voorzie een Dockerfile voor de frontend in een `nginx` container en een Dockerfile voor de backend. Hierna bouw je een `docker-compose.yml` file die alle services opstart. De compose file zou 3 services moeten bevatten:
- frontend: Gebuilde angular frontend (nginx)
- backend: Java / NodeJS backend (OpenJDK / nodeJS)
- database: MongoDB / Mysql / ...

Denk hierbij ook aan docker networking & de nodige environment variabelen:
- Voor NodeJS zie: https://www.npmjs.com/package/dotenv
- Voor Java zie: https://docs.spring.io/spring-boot/docs/1.5.6.RELEASE/reference/html/boot-features-external-config.html

## Oefening 3
Werk verder op de codebase van `lab routing`. In dit project voorzie je de nodige unittesten:
- Start met het testen van de auth service
- Voorzie daarna de nodige testen in de `group-detail` en `group-list` component
- Bekijk tenslotte de `student.service`

Challenge? Bekijk online hoe je de routing elementen in je project kan unittesten.
