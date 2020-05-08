import { AuthRoute } from '/imports/core/api/route';

import JudgeListPage from '../ui/pages/JudgeListPage';

const JudgesListRoute = new AuthRoute({
  name: 'adjudicators.admin',
  path: '/adjudicators',
  Page: JudgeListPage,
  title: 'QKVS - Adjudicators',
});

export {
  JudgesListRoute,
};
