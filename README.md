# Vdesign

Двуезичен статичен сайт за [www.vedesign.eu](https://www.vedesign.eu/). Българската версия е в `index.html`, а английската – в `en/index.html`. Двете версии работят и при изключен JavaScript. JavaScript управлява сгъваемото меню на малки екрани.

## Локален преглед

Разархивирай пакета и отвори `index.html` в браузър. За преглед през локален сървър изпълни `python3 -m http.server 8000` в папката с `index.html` и отвори `http://localhost:8000/`.

## Качване в GitHub Pages

1. Разархивирай пакета. Качи **съдържанието** му в корена на клона `main` на [Va4ko/vdesign-website](https://github.com/Va4ko/vdesign-website). Запази папките `css/`, `js/`, `en/` и скрития файл `.nojekyll`.
2. В [Settings → Pages](https://github.com/Va4ko/vdesign-website/settings/pages) потвърди **Deploy from a branch**, **main** и **/ (root)**.
3. Потвърди **Custom domain** = `www.vedesign.eu`, както е записано в `CNAME`. Провери статуса на **Enforce HTTPS**.
4. След публикуване отвори [българската](https://www.vedesign.eu/) и [английската версия](https://www.vedesign.eu/en/), както и [картата на сайта](https://www.vedesign.eu/sitemap.xml).

[Настройки за публикуване в GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) · [Персонализиран домейн в GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

## Контакти и ParkMe

След като има потвърден публичен имейл, телефон или друг канал за бизнес запитвания, замени текста в секция `#contact` и в двете HTML страници с действителната връзка. Описанието на ParkMe и връзката към проекта са сверени с [официалната страница на ParkMe](https://parkme.vedesign.eu/). Графиката с буквата P е декоративна илюстрация.

## app-ads.txt

Пакетът съдържа `app-ads.txt` с действащия ред, копиран от [публичния файл на ParkMe](https://parkme.vedesign.eu/app-ads.txt). Ако в репото вече има други валидни редове за упълномощени продавачи, запази и тях.

При бъдеща промяна на рекламната конфигурация:

1. Вземи персонализирания ред за `app-ads.txt` от AdMob или потвърдените редове от съответните рекламни мрежи.
2. Запази ги като текстов файл `app-ads.txt` в корена на `main`, до `index.html`.
3. След публикуване провери дали `https://www.vedesign.eu/app-ads.txt` връща самия текст. В AdMob провери адреса, който системата търси за приложението, и статуса на проверката. Той зависи от сайта на разработчика в магазина за приложения.

[Указания на Google AdMob за app-ads.txt](https://support.google.com/admob/answer/9363762) · [Проверка на достъпността за обхождане](https://support.google.com/admob/answer/9679128)
