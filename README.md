# Drinkup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# API

API used in this project: https://rapidapi.com/thecocktaildb/api/the-cocktail-db/ - docs and all.
It's far from perfect - responses are terrible, lots of empty key-value added just in case, but kinda works - enough for this project.

v 1.0:
Home component - show 10 random drinks each time, so there is no possibility to go back to same results. Each drink is displayed with basic data and link to see it's full description.

Search component - allows to search using name/part of the name of the drink like "bloody" will show at this point 3 entries: bloody mary, bloody maria and bloody punch. If you type just "w" it will show all drinks containing "w" in their name no matter where it is positioned. As in home component each drink is displayed with basic data and link to see it's full description.basic data and link to see it's full description.

Coctail-details component - shows full description of the drink along with ingredients, recipie, category and glass type. Data for component are taken thru id number while clicking on link available both in home and search components.

Not-found component - well, it's just 404.

# TO DO

Future version will contain searching using ingredient in seperate search-box and modal component to take a quick look at coctail ingredients while shopping for them or so.
Also I'm thinking about adding button to print all coctail data with/without picture.

Later on (mayby using node.js) I will do "add to favourites", but I need DB to actually store it and somekind of user identification (mayby by email, without creating an account at that point).
