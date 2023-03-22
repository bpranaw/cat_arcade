import LoginButton from "./Login";
import LogoutButton from "./Logout";
import UserProfile from "./userProfile";

export default function Home() {
  return (<div>
      <Title/>
      <Subtitle/>
			<LoginButton/>
      <LogoutButton/>
      <UserProfile/>
    </div>
  );
}

export function Title() {
  return (<h1>Cat_Arcade</h1>)
}

export function Subtitle() {
  return (<h3>Where you'll always find a cat and a game to play!</h3>)
}
