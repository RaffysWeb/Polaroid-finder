import React, { useState, useRef, useEffect } from 'react';

import TextInput from '../components/TextInput';
import Polaroid from '../components/Polaroid';
import { fetchImages } from '../utils/apiRequests';
import { useDebounce } from '../utils/customHooks';

const PhotoFinder = () => {
  const [state, setState] = useState({ fetchedImages: null });
  const { searchInput, fetchedImages } = state;

  const inputEl = useRef(null);

  const debouncedSearchValue = useDebounce(searchInput, 500);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  useEffect(() => {
    if (debouncedSearchValue) {
      setState(oldState => ({ ...oldState }));
      fetchImages(debouncedSearchValue).then(results => {
        setState(oldState => ({
          ...oldState,

          fetchedImages: results
        }));
      });
    } else {
      setState(oldState => ({
        ...oldState,
        fetchedImages: null
      }));
    }
  }, [debouncedSearchValue]);

  const onChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  console.log(fetchedImages);
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
      {fetchedImages && (
        <section className="polaroids-container">
          {fetchedImages.length ? (
            fetchedImages.map(item => <Polaroid item={item} />)
          ) : (
            <h3>Couldn't find any images please try something else...</h3>
          )}
        </section>
      )}
    </>
  );
};

export default PhotoFinder;
