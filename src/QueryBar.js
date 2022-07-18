import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function QueryBar({ value, setValue }) {
  const submitQuery = () => {
    setValue(searchValue);
  };

  const [searchValue, setSearchValue] = useState(value);
  const changeSearchValue = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Pokemon"
        inputProps={{ 'aria-label': 'search pokemon' }}
        value={ searchValue }
        onChange={ changeSearchValue }
      />
      <IconButton sx={{ p: '10px' }} aria-label="search" onClick={ submitQuery }>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default QueryBar;
