import { accessoriesList, AvatarStyleType, clothList, colorStringList, eyebrowList, eyeList, facialHairList, graphicList, hairColorStringList, mouthList, skinColorStringList, topList } from "avataaars2";
import { AvatarProps } from "avataaars2/dist/avatar";
import { randomSampleOne } from "lib/randUtil"
import { useId, useState } from "react"

function getRandomSetting(): AvatarProps {
  const setting: AvatarProps = {
    avatarStyle: "Circle",
    backgroundColor: "Black",
    topType: randomSampleOne(topList),
    accessoriesType: randomSampleOne(accessoriesList),
    graphicType: randomSampleOne(graphicList),
    hairColor: randomSampleOne(hairColorStringList),
    facialHairType: randomSampleOne(facialHairList),
    clothType: randomSampleOne(clothList),
    clothColor: randomSampleOne(colorStringList),
    eyeType: randomSampleOne(eyeList),
    eyebrowType: randomSampleOne(eyebrowList),
    mouthType: randomSampleOne(mouthList),
    skinColor: randomSampleOne(skinColorStringList)
  }
  console.log(setting)
  return setting;
}

export default function useRandomAvatar() {
  const key = useId()
  const [setting, ] = useState(getRandomSetting())
  return [key, setting] as const;
}
