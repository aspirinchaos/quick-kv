// Import server startup through a single index entry point

// user module come first
import '/imports/user/api/models/User/server';
import '/imports/participant/api/models/Stage/server';
import '/imports/participant/api/models/Participant/server';
import '/imports/participant/api/models/File/server';
import '/imports/participant/api/models/Score/server';
