import React from 'react';
import { Button } from 'react-bootstrap';
import { whatPrepare, callToAction } from '../content/content';
import { StyledJumbotron } from '../content/styled';
import { PHONE_NUMBER } from '../content/consts';

const { content, title } = whatPrepare;
const { action } = callToAction;

const Prepare = ({ version }) => (
  <>
    <StyledJumbotron fluid className={version}>
      {version === 'photoCover' ? (
        <div>
          <h2>{action}</h2>
          <h2><Button variant="light" size="lg" href={PHONE_NUMBER}>{PHONE_NUMBER.slice(7)}</Button></h2>
        </div>
      ) : (
        <div>
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      )}
    </StyledJumbotron>
  </>
);

export default Prepare;
