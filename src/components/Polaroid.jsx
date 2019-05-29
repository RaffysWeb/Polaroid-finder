import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import shortid from 'shortid';

const Polaroid = ({ item, fetchByTag }) => {
  const {
    author,
    date_taken,
    tags,
    link,
    media: { m }
  } = item;

  const newTags = tags.split(' ').splice(0, 4);
  const parsedName = author.match(/(?:"[^"]*"|^[^"]*$)/)[0].replace(/"/g, '');

  return (
    <StyledPolaroid>
      <a rel="noopener noreferrer" target="_blank" href={link}>
        <ImageContainer image={m} />
      </a>
      {newTags.map(tag => (
        <button
          type="button"
          className="tag-button"
          key={shortid.generate()}
          onClick={() => fetchByTag(tag)}
        >
          #{tag}
        </button>
      ))}
      <footer>
        <p>{parsedName}</p>
        <p>{moment(date_taken).format('DD/MM/YYYY')}</p>
      </footer>
    </StyledPolaroid>
  );
};

const StyledPolaroid = styled.div`
  width: 15rem;
  height: 20rem;
  border-radius: 0.05rem;
  background-size: cover;
  background-position: center center;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  border: 1rem solid white;
  margin-bottom: 2rem;

  &:hover {
    position: relative;
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.7);
  }

  .tag-button {
    background: none;
    border: none;
    cursor: pointer;
    color: blue;

    &:hover {
      text-decoration: underline;
      color: darkBlue;
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    p {
      margin: 0;
      font-family: 'Kaushan Script', cursive;
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 75%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

Polaroid.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  fetchByTag: PropTypes.func.isRequired
};

export default Polaroid;
