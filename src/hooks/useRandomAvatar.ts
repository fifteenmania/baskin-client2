import { AvatarStyle } from "avataaars"
import { randomSampleOne } from "lib/randUtil"
import { useState } from "react"
import { TopType, AccessoriesType, HairColor, FacialHairColor, ClotheType, EyebrowType, ClotheColor, SkinColor, NeutralMouthType, NeutralEyeType } from "typedef/AvatarType"

function getRandomSetting() {
  return {
    style: {width: '8rem', height: '8rem'},
    avatarStyle: AvatarStyle.Circle,
    topType: randomSampleOne([...TopType]),
    accessoriesType: randomSampleOne([...AccessoriesType]),
    hairColor: randomSampleOne([...HairColor]),
    facialHairType: randomSampleOne([...FacialHairColor]),
    clotheType: randomSampleOne([...ClotheType]),
    clotheColor: randomSampleOne([...ClotheColor]),
    eyeType: randomSampleOne([...NeutralEyeType]),
    eyebrowType: randomSampleOne([...EyebrowType]),
    mouthType: randomSampleOne([...NeutralMouthType]),
    skinColor: randomSampleOne([...SkinColor])
  }
}

export default function useRandomAvatar() {
  const [setting, ] = useState(getRandomSetting)
  return [setting];
}