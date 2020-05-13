import { AuthRoute, Route } from '/imports/core/api/route';

import StageListPage from '../ui/pages/StageListPage';
import StageResultPage from '../ui/pages/StageResultPage';
import StageParticipantListPage from '../ui/pages/StageParticipantListPage';
import ParticipantListPage from '../ui/pages/ParticipantListPage';

const StageListRoute = new AuthRoute({
  name: 'stage.admin',
  path: '/stages',
  Page: StageListPage,
  title: 'QKVS - Stages',
});

const StageResultRoute = new Route({
  name: 'stage.result',
  path: '/stages/:_id/result',
  Page: StageResultPage,
  title: 'QKVS - Stage Result',
});

const StageParticipantListRoute = new AuthRoute({
  name: 'stage.participant',
  path: '/stages/:_id/participants',
  Page: StageParticipantListPage,
  title: 'QKVS - Stage Participant',
});

const ParticipantListRoute = new AuthRoute({
  name: 'participant.admin',
  path: '/participants',
  Page: ParticipantListPage,
  title: 'QKVS - Participants',
});

export {
  StageListRoute,
  StageResultRoute,
  StageParticipantListRoute,
  ParticipantListRoute,
};
