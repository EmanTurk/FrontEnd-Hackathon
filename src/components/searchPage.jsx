import React, { useState } from 'react';
import { Box, TextField, Paper, Typography } from '@mui/material';

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Paper sx={{ p: 3, width: '100%', maxWidth: 600, mb: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Look for volunteering activity..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </Paper>
      {searchTerm === '' && (
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          Enter keywords to search for volunteering activities
        </Typography>
      )}
      {}
    </Box>
  );
}

export default SearchPage;
