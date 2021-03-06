import React from 'react';
import sofaWhite from '../img/sofaWhite.jpg';
import road from '../img/road.jpg';
import carpet from '../img/carpet.jpg';
import cars from '../img/cars.jpg';

export const services = [
  {
    name: 'Meble',
    img: sofaWhite,
  },
  {
    name: 'Wykładziny',
    img: carpet,
  },
  {
    name: 'Samochody',
    img: cars,
  },
  {
    name: 'Dojazd gratis',
    img: road,
  },
];

export const servicesPrices = [
  {
    name: 'Dywan / wykładzina',
    price: '7zł/m2',
  },
  {
    name: 'Fotel',
    price: '40zł',
  },
  {
    name: 'Kanapa / sofa (2os.)',
    price: '100zł',
  },
  {
    name: 'Kanapa / sofa (3os.)',
    price: '120zł',
  },
  {
    name: 'Narożnik typ "L"',
    price: '140zł',
  },
  {
    name: 'Narożnik typ "U"',
    price: '160zł',
  },
  {
    name: 'Krzesło / pufa',
    price: '12zł',
  },
  {
    name: 'Materac (140cm)',
    price: '80zł',
  },
  {
    name: 'Materac (<160cm)',
    price: '100zł',
  },
  {
    name: 'Poduszka',
    price: '10zł',
  },
];

export const carsServicesPrice = [
  {
    name: 'Pranie samochodu osobowego',
    price: '180-250zł',
  },
  {
    name: 'Pranie busa',
    price: '250-400zł',
  },
  {
    name: 'Czyszczenie plastikowych elementów, całe auto',
    price: '+50zł',
  },
];

export const whatPrepare = {
  title: 'Co musisz przygotować?',
  content: `Pracownik przyjeżdżający na zlecenie powinien mieć dostęp do ciepłej, 
            bieżącej wody oraz miejsca gdzie będzie mógł wylać brudną wodę po skończonej pracy. W przypadku prania
            tapicerek samochodowych, potrzebujemy miejsca z dostępem do prądu do 20m (zwykłe gniazdko 230V),
            a samochód by wyschnąć musi zostać z otwartymi oknami przez około 12 godzin minimum.`,
};

export const callToAction = {
  action: 'Odśwież swoje mieszkanie i zadzwoń!',
};

export const extractionWashText = {
  title: 'Pranie ekstrakcyjne',
  content: `to jeden z profejonalnych sposobów na usunięcie zabrudzeń osadzonych głęboko
            we włóknach dywanu czy tkaninie tapicerki każdego rodzaju.`,
  howItWork: `Polega na natryskiwaniu pod ciśnieniem wody z środkiem czyszczącym i jej błyskawiczne
              odsysanie (ekstrakcję) za pomocą odkurzacza piorącego co zapobiega powstawaniu zacieków
              - typowej pozostałości po samodzielnym praniu kanap, sof czy narożników.`,

};

export const topArrow = (
  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
  </svg>
);

export const facebookIcon = (
  <svg
    width="1.5em"
    height="1.5em"
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
  >
    <path d="M452,0H60C26.916,0,0,26.916,0,60v392c0,33.084,26.916,60,60,60h392c33.084,0,60-26.916,60-60V60
   C512,26.916,485.084,0,452,0z M472,452c0,11.028-8.972,20-20,20H338V309h61.79L410,247h-72v-43c0-16.975,13.025-30,30-30h41v-62
   h-41c-50.923,0-91.978,41.25-91.978,92.174V247H216v62h60.022v163H60c-11.028,0-20-8.972-20-20V60c0-11.028,8.972-20,20-20h392
   c11.028,0,20,8.972,20,20V452z"
    />
  </svg>
);
export const githubIcon = (
  <svg enableBackground="new 0 0 24 24" width="1.5em" height="1.5em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" fill="#212121" /></svg>
);

export const mailIcon = (
  <svg
    width="1.5em"
    height="1.5em"
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
  >
    <path d="M467,61H45C20.218,61,0,81.196,0,106v300c0,24.72,20.128,45,45,45h422c24.72,0,45-20.128,45-45V106 C512,81.28,491.872,61,467,61z M460.786,91L256.954,294.833L51.359,91H460.786z M30,399.788V112.069l144.479,143.24L30,399.788z M51.213,421l144.57-144.57l50.657,50.222c5.864,5.814,15.327,5.795,21.167-0.046L317,277.213L460.787,421H51.213z M482,399.787L338.213,256L482,112.212V399.787z" />
  </svg>
);
