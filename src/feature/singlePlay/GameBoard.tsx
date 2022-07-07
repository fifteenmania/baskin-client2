import useRandomAvatar from "hooks/useRandomAvatar";
import GameSetting from "typedef/GameSetting";
import Avatar, { topList } from "avataaars2"
import { randomSampleOne } from "lib/randUtil";

export function RandomAvatar() {
  const [avatarSetting] = useRandomAvatar();
  return <div className="w-fit h-fit mx-2">
    <Avatar
      {...avatarSetting}
    />
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
