import { AvatarProps } from "avataaars2";

export const genderList = ["male", "female"] as const;
export type GenderType = typeof genderList[number];

export interface AvaterPreset {
  readonly id: string,
  name: string,
  gender: GenderType
  setting: AvatarProps
}

const avatarPresets: AvaterPreset[] = [
  {
    id: "1",
    name: "나",
    gender: "male",
    setting: {
    }
  },
  {
    id: "2",
    name: "김서연",
    gender: "female",
    setting: {
    }
  },
  {
    id: "3",
    name: "이민준",
    gender: "male",
    setting: {
    }
  },
  {
    id: "4",
    name: "박서윤",
    gender: "female",
    setting: {
    }
  }
]

export default avatarPresets;