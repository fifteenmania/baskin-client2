import { accessoriesList, AvatarStyleType, clothList, colorStringList, eyebrowList, eyeList, facialHairList, hairColorStringList, mouthList, skinColorStringList, topList } from "avataaars2";
import { randomSampleOne } from "lib/randUtil"
import { useState } from "react"

function getRandomSetting() {
  return {
    avatarStyle: "Circle" as AvatarStyleType,
    topType: randomSampleOne(topList),
    accessoriesType: randomSampleOne(accessoriesList),
    hairColor: randomSampleOne(hairColorStringList),
    facialHairType: randomSampleOne(facialHairList),
    clothType: randomSampleOne(clothList),
    clothColor: randomSampleOne(colorStringList),
    eyeType: randomSampleOne(eyeList),
    eyebrowType: randomSampleOne(eyebrowList),
    mouthType: randomSampleOne(mouthList),
    skinColor: randomSampleOne(skinColorStringList)
  }
}

export default function useRandomAvatar() {
  const [setting, ] = useState(getRandomSetting)
  return [setting];
}