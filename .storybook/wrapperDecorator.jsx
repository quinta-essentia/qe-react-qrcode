import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import {
  ApplicationBackgroundColor,
} from '@theme/variablesDerived';

const WrapperDecorator = storyFn => (
  <Router>
    <div style={{
      backgroundColor: ApplicationBackgroundColor,
      minHeight: '100vh',
    }}>
      { storyFn() }
    </div>
  </Router>
);

export default WrapperDecorator;
 