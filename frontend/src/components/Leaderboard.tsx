import {useEffect, useState} from "react";
import axios from "axios";

export default function Leaderboard() {
    return (<div>
        <Title/>
        <Subtitle/>
        <CatJumpLeaderboard/>
      </div>
    );
}

export function Title() {
    return (<h1>Leaderboard</h1>)
}
      
export function Subtitle() {
    return (<h3>Check your highscore!</h3>)
}

export const CatJumpLeaderboard = () => {
	return (retrieve_cat_jump_leaderboard());
}

function retrieve_cat_jump_leaderboard()
{
    const [high_scores, setScores] = useState([]);

	useEffect(() => {
		const get_cat_jump_leaderboard = async () => {
			const scores = await axios.get(
				"http://localhost:8080/leaderboard/catjump"
			);

			setScores(await scores.data);
		};
		void get_cat_jump_leaderboard();
	}, []);

    return (
		<div>
			<h2>Cat Jump High Scores:</h2>
			{    high_scores ?
				<ul>{high_scores.map((score: {name: string, high_score: number}) => <li key={score.name.toString()}>{score.name} - {score.high_score}</li>)}</ul>
				: null
			}
		</div> );
}