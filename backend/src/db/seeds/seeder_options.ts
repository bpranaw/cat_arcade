/** @module SeedManager */
import {UserSeed} from "./user_seeder";
import {IPHistorySeed} from "./ip_history_seeder";
import {Seeder} from "../../lib/seed_manager";
import {ProfileSeed} from "./profile_seeder";
import {MatchSeed} from "./match_seeder";
import {MessageSeed} from "./message_seeder";
import {GameSeed} from "./game_seeder";

export type SeederOptionsType = {
	seeds: Array<Seeder>;
}

/**
 * Options bag for configuring which seeds to run during `pnpm seed`
 */
const SeederOptions: any = {
	seeds: [
		UserSeed,
		IPHistorySeed,
		ProfileSeed,
		MatchSeed,
		MessageSeed,
		GameSeed
	]
};

export default SeederOptions;
