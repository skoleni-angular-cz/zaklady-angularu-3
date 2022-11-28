# Základy Angularu - Cvičení 3 - Uživatelský dotazník

V projektu jsou připraveny formulářové prvky. Vaším úkolem bude tyto formulářové prvky zprovoznit tak, aby spolupracovaly s šablonou řízenými a reaktivními formuláři a aby docházelo k ukládání/načítání dat z backendu.

Soubor `db.json` lze použít ke spuštění mock backend serveru https://www.npmjs.com/package/json-server.

Příkaz: `json-server --watch db.json`.

# Dílčí práce k provedení

## 1. Zaveďte šablonou řízené formuláře do komponenty `TemplateDrivenUserBasicInfoComponent`:
* Definujte model formuláře do šablony za pomoci direktivy `[(ngModel)]`
* Definujte položky kontroléru pro data formuláře
* Pole "Uživatelské jméno" by mělo být povinné
* Pole "E-mail" by mělo být povinné a navíc by mělo být validováno jako e-mail

*Pozor: Formulářové prvky šablonou řízených formulářů musí mít nastaven atribut "name".*

## 2. Zaveďte reaktivní formuláře do komponenty `ReactiveUserAdvancedInfoComponent`:
* Definujte model formuláře pomocí tříd `FormGroup` a `FormControl`
* Napojte model formuláře na prvky šablony pomocí direktiv `[formGroup]`, `[formControlName]` a `[formGroupName]`
* Všechna pole tohoto formuláře nechť jsou povinná
* Pole `age` nechť je minimálně `18`

## 3. Napojte šablonou řízený formulář na backend
* API služba používá `Promise`s
* Načtení dat pomocí `FormApiService.getUserBasicInfo()`
* Uložení dat pomocí `FormApiService.submitUserBasicInfo(userBasicInfo)`

## 4. Napojte reaktivní formulář na backend
* Načtení dat pomocí `FormApiService.getUserAdvancedInfo()`
* Uložení dat pomocí `FormApiService.submitUserAdvancedInfo(userAdvancedInfo)`
* Zkuste navíc implementovat akci vyčištění formuláře pomocí `AbstractControl.reset()`

*Nezapomeňte, že chceme ukládat pouze validní data*
