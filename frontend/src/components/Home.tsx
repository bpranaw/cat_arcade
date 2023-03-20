import {Users} from "./User";

export default function Home() {
  return (<div>
      <Title/>
      <Subtitle/>
			<Users/>
    </div>
  );
}

export function Title() {
  return (<h1>Cat_Arcade</h1>)
}

export function Subtitle() {
  return (<h3>Where you'll always find a cat and a game to play!(tm)</h3>)
}
