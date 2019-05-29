import React, { useState, useRef, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import shortid from 'shortid';
import styled from 'styled-components';

import TextInput from '../components/TextInput';
import Polaroid from '../components/Polaroid';
import { fetchImages } from '../utils/apiRequests';
import useDebounce from '../utils/customHooks';

const PhotoFinder = () => {
  const [state, setState] = useState({ fetchedImages: null });
  const { searchInput, fetchedImages, loading } = state;
  const inputEl = useRef(null);

  const debouncedSearchValue = useDebounce(searchInput, 500);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  useEffect(() => {
    if (debouncedSearchValue) {
      setState(oldState => ({ ...oldState, loading: true }));
      fetchImages(debouncedSearchValue).then(results => {
        setState(oldState => ({
          ...oldState,
          loading: false,
          fetchedImages: results
        }));
      });
    } else {
      setState(oldState => ({
        ...oldState,
        loading: false,
        fetchedImages: null
      }));
    }
  }, [debouncedSearchValue]);

  const fetchByTag = tag => {
    setState(oldState => ({
      ...oldState,
      debouncedSearchValue: tag,
      searchInput: tag
    }));
  };

  const onChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <StyledContainer>
      <header>
        <img src="/images/polaroid.svg" alt="" />
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

      {loading ? (
        <section className="react-spinner">
          <Loader type="Circles" color="#00BFFF" height="100" width="100" />
        </section>
      ) : (
        fetchedImages && (
          <section className="polaroids-container">
            {fetchedImages.length ? (
              fetchedImages.map(item => (
                <Polaroid key={shortid.generate()} item={item} fetchByTag={fetchByTag} />
              ))
            ) : (
              <h3>Couldn't find any images please try something else...</h3>
            )}
          </section>
        )
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding-top: 2rem;

  header {
    display: flex;
    align-items: center;
    img {
      height: 50px;
      width: 50px;
      margin-right: 25px;
    }
  }

  h1 {
    font-size: 2rem;
  }

  .react-spinner {
    margin-top: 1rem;
  }

  .polaroids-container {
    display: flex;
    flex: 1;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 3rem;
  }
`;

export default PhotoFinder;
