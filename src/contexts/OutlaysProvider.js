import React, { useState } from 'react';
import PropTypes from 'prop-types';
import OutlaysContext from './OutlaysContext';

const OutlaysProvider = ({ children }) => {
  const [outlays, setOutlays] = useState(
    JSON.parse(localStorage.getItem('entriesAndWithdrawals')) || [],
  );

  const contextValue = {
    outlays,
  };

  return (
    <OutlaysContext.Provider value={ contextValue }>
      { children }
    </OutlaysContext.Provider>
  );
};

OutlaysProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OutlaysProvider;
