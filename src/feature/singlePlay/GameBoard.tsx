import useRandomAvatar from "hooks/useRandomAvatar";
import GameSetting from "typedef/GameSetting";
import Avatar from "avataaars2"

export function RandomAvatar() {
  const [avatarSetting] = useRandomAvatar();
  return <div className="w-fit h-fit mx-2">
    <Avatar avatarStyle="circle"/>
  </div>
}

export function ComputerAvatars({gameSetting}: {gameSetting: GameSetting}) {
  return <div className="flex flex-row flex-wrap mt-4">
    {Array.from({length: gameSetting.numPlayer}).map((value, i) => <RandomAvatar key={i}/>)}
  </div>
}

export default function GameBoard({gameSetting}: {gameSetting: GameSetting}) {
  return <div className="mt-4">
    <ComputerAvatars gameSetting={gameSetting}/>
  </div>
}
