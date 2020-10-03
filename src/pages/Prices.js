import React from 'react';
import { Alert } from 'react-bootstrap';
import { servicesPrices, carsServicesPrice } from '../content/content';
import { StyledTable } from './styled';

const Prices = () => (
  <>
    <h2>Cennik mieszkania:</h2>
    <StyledTable borderless hover striped size="sm">
      <thead>
        <tr>
          <th>Rodzaj usługi</th>
          <th>Cena</th>
        </tr>
      </thead>
      <tbody>
        {servicesPrices.map(({ name, price }) => (
          <tr key={name}>
            <td id={name}>{name}</td>
            <td>{price}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
    <div>
      <h2>Cennik samochody:</h2>
      <div>
        <b>Prane są:</b>
        {' '}
        2 fotele + kanapa, podłoga, bagażnik, boczki drzwi jeśli materiał na to pozwala.
        <div><i>*Nie pierzemy podsufitki w samochodach, aby jej nie uszkodzić.</i></div>
      </div>
    </div>
    <StyledTable className="Cars" borderless hover striped size="sm">
      <tbody>
        {carsServicesPrice.map(({ name, price }) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{price}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
    <Alert variant="light">
      <Alert.Heading>Uwaga!</Alert.Heading>
      <hr />
      <div>
        Doliczamy
        {' '}
        <b>50%</b>
        {' '}
        do czyszczenia danej rzeczy, gdy czyszczona będzie:
        gęsta sierść zwierząt czy stare zaschnięte plamy.
        <div>(szczególnie wystawione na działanie promieni słonecznych)</div>
      </div>
      <div>
        Minimalna wartość zamówienia:
        {' '}
        <b>100 zł</b>
        {' '}
        (wszystkie kwoty są cenami brutto)
      </div>
    </Alert>
  </>
);

export default Prices;
