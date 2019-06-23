import * as React from 'react';

interface ISearchBoxProps {
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

const SearchBox = ({ searchChange }: ISearchBoxProps) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba bg-light-yellow'
        type='search'
        placeholder='search starships'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;