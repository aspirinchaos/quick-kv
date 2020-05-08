import { FlowRouter } from 'meteor/kadira:flow-router';
import { useTracker } from 'meteor/react-meteor-data';

const useRouter = (key) => useTracker(() => FlowRouter.getParam(key), []);

export default useRouter;
