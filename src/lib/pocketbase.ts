import PocketBase from 'pocketbase';

export function createInstance() {
	return new PocketBase('https://dev2.samueladitia.com');
}

const pb = createInstance();

pb.autoCancellation(false);

export { pb };
