import React from 'react';

export const defaultProps = {
  separator: ',',
  filename: 'generatedBy_react-csv.csv',
  uFEFF: true,
  asyncOnClick: false
};

export const PropsNotForwarded = [
  `data`,
  `headers`
];

// export const DownloadPropTypes = Object.assign(
//   {},
//   PropTypes,
//   {
//     : ,
//   }
// );
