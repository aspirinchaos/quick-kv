import React from 'react';
import styled from 'styled-components';

import theme from '/imports/core/ui/theme';

const LineDashed = styled.div`
  border-top: 1px dashed ${theme.colors.border};
  color: #ffffff;
  background-color: #ffffff;
  height: 1px;
  margin: 20px 0;
`;

export default LineDashed;
