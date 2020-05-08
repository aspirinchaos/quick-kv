import { FilesCollection } from 'meteor/ostrio:files';
import { Meteor } from 'meteor/meteor';

const path = Meteor.isDevelopment ? `${Meteor.absolutePath}/.uploads` : '/home';

const Files = new FilesCollection({
  storagePath: `${path}/files/`,
  collectionName: 'File',
  allowClientCode: false,
});

Files.methods = {};

Files.publications = {};


export { Files as default };
