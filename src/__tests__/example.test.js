import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Furniture from '../containers/Furniture/Furniture';

afterEach(cleanup);

// it('make sure I render one ul with the furniture list', () => {
//   const { asFragment } = render(<Furniture />);
//   expect(asFragment()).toMatchSnapshot();
// });

it('p tag with the id of "ptag" contains Hello', () => {
  const { getByTestId, getByText } = render(<Furniture />);

  expect(getByTestId('ptag')).toHaveTextContent('dfgdfgfg');
  //   expect(getByText('Helloo!')).toHaveClass('fnacy-h1');
});
