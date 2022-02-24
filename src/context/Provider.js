import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchAPI from '../services';
import TableContext from './TableContext';

function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function api() {
      const data = await fetchAPI();
      setData(data);
    }
    api();
  }, []);
  console.log(data);
  return (
    <main>
      <TableContext.Provider value={ { data } }>
        {children}
      </TableContext.Provider>
    </main>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequire;

export default Provider;