import {State, ProfileType} from "./types/Cat_ArcadeTypes";


const initialState: { likeHistory: ProfileType[]; currentProfile: ProfileType } = {
	currentProfile: getRandomProfile(),
	likeHistory: [getRandomProfile(), getRandomProfile()],
};

export default initialState;

export function getRandomProfile(): ProfileType {
	const idNum = Math.random() * 10000;

	return {
		imgUri: `https://loremflickr.com/300/300/animal?lock=${idNum}`,
		thumbUri: `https://loremflickr.com/75/75/animal?lock=${idNum}`,
		name: `Cat_Arcade${idNum}`,
		id: idNum,
	};
}
