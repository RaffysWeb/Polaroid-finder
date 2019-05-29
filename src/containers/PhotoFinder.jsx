import React, { useState, useRef, useEffect } from 'react';

import TextInput from '../components/TextInput';
import { fetchImages } from '../utils/apiRequests';

const PhotoFinder = () => {
  const [state, setState] = useState({});
  const { searchInput } = state;
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const onChange = e => {
    fetchImages(e.target.value).then(result => console.log(result));
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <>
      <header>
        <h1>Polaroid Finder</h1>
      </header>

      <TextInput
        forwardedRef={inputEl}
        name="searchInput"
        value={searchInput}
        placeholder="Cute dogs..."
        onChange={onChange}
      />
      {!searchInput && <h3>Start typing to search...</h3>}
    </>
  );
};

export default PhotoFinder;
