import { AuthRoute } from '/imports/core/api/route';

import StageListPage from '../ui/pages/StageListPage';
import StageParticipantListPage from '../ui/pages/StageParticipantListPage';
import ParticipantListPage from '../ui/pages/ParticipantListPage';

const StageListRoute = new AuthRoute({
  name: 'stage.admin',
  path: '/stages',
  Page: StageListPage,
  title: 'QKVS - Stages',
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
  ParticipantListRoute,
  StageParticipantListRoute,
};
