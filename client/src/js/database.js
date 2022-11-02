import { openDB } from 'idb';

const initdb = async () =>
  openDB('pwa19', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('pwa19')) {
        console.log('pwa19 database already exists');
        return;
      }
      db.createObjectStore('pwa19', { keyPath: 'id', autoIncrement: true });
      console.log('pwa19 database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => console.error('putDb not implemented');

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

initdb();
