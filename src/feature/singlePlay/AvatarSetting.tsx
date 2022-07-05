import Avatar, {AvatarStyle} from "avataaars";
import useRandomAvatar from "hooks/useRandomAvatar";
import { randomSampleOne } from "lib/randUtil";
import { TopType } from "typedef/AvatarType";

export default function AvatarSetting() {
  const [avatarSetting] = useRandomAvatar();
  return <div>
    <Avatar
      {...avatarSetting}
    />
  </div>
}