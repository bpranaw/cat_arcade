/** @module Seeds/Game */

import {faker} from "@faker-js/faker";
import {Seeder} from "../../lib/seed_manager";
import {Game} from "../models/game";
import {User} from "../models/user";
import {FastifyInstance} from "fastify";

// note here that using faker makes testing a bit...hard
// We can set a particular seed for faker, then use it later in our testing!
faker.seed(100);

/**
 * Seeds the game table
 */
export class GameSeeder extends Seeder {

	/**
	 * Runs the Game table's seed
	 * @function
	 * @param {FastifyInstance} app
	 * @returns {Promise<void>}
	 */
	override async run(app: FastifyInstance) {
		app.log.info("Seeding Games...");
		// Remove everything in there currently
		await app.db.game.delete({});
		// get our users and make each a few IPs
		const users = await User.find();

		for (let i = 0; i < users.length; i++) {
			let newGame = new Game();
			newGame.user = users[i];
			newGame.name = users[i].name;
			newGame.game_name = "catjump";
            newGame.high_score = Math.floor(Math.random() * 10);

            let date = new Date();
            newGame.date_score_achieved = date.toLocaleString();

			await newGame.save();
			app.log.info("Finished seeding game: " + i);
		}
	}
}

export const GameSeed = new GameSeeder();

 
