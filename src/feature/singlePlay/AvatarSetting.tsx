import Avatar, {AvatarStyle} from "avataaars";

export default function AvatarSetting() {
  return <div>
    <Avatar
      style={{width: '100px', height: '100px'}}
      avatarStyle={AvatarStyle.Circle}
      topType='LongHairMiaWallace'
      accessoriesType='Prescription02'
      hairColor='BrownDark'
      facialHairType='Blank'
      clotheType='Hoodie'
      clotheColor='PastelBlue'
      eyeType='Happy'
      eyebrowType='Default'
      mouthType='Smile'
      skinColor='Light'
    />
  </div>
}