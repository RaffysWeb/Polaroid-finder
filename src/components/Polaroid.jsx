import React from 'react';
import PropTypes from 'prop-types';

const Polaroid = ({ item }) => {
  const {
    author,
    date_taken,
    tags,
    link,
    media: { m }
  } = item;
  console.log(item);
  const newTags = tags.split(' ').splice(0, 4);
  const parsedName = author.match(/(?:"[^"]*"|^[^"]*$)/)[0].replace(/"/g, '');

  return (
    <>
      <a rel="noopener noreferrer" target="_blank" href={link}>
        <img src={m} alt="" />
      </a>
      {newTags.map(tag => (
        <p>{tag}</p>
      ))}
      <footer>
        <p>{parsedName}</p>
        <p>{date_taken}</p>
      </footer>
    </>
  );
};

Polaroid.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  fetchByTag: PropTypes.func.isRequired
};

export default Polaroid;
