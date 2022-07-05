export interface AvatarSetting {
  topType: typeof TopType[keyof typeof TopType];
  accessoriesType: typeof AccessoriesType[keyof typeof AccessoriesType];
  hairColor: typeof HairColor[keyof typeof HairColor];
  facialHairType: typeof FacialHairColor[keyof typeof FacialHairColor];
  clotheType: typeof ClotheType[keyof typeof ClotheType];
  clotheColor: typeof ClotheColor[keyof typeof ClotheColor];
  eyeType: typeof EyeType[keyof typeof EyeType];
  eyebrowType: typeof EyebrowType[keyof typeof EyebrowType];
  mouthType: typeof MouthType[keyof typeof MouthType];
  skinColor: typeof SkinColor[keyof typeof SkinColor];
}

export const TopType = [
  'Eyepatch',
  'Hat',
  'Hijab',
  'LongHairBigHair',
  'LongHairBob',
  'LongHairBun',
  'LongHairCurly',
  'LongHairCurvy',
  'LongHairDreads',
  'LongHairFrida',
  'LongHairFro',
  'LongHairFroBand',
  'LongHairMiaWallace',
  'LongHairNotTooLong',
  'LongHairShavedSides',
  'LongHairStraight',
  'LongHairStraight2',
  'LongHairStraightStrand',
  'NoHair',
  'ShortHairDreads01',
  'ShortHairDreads02',
  'ShortHairFrizzle',
  'ShortHairShaggyMullet',
  'ShortHairShortCurly',
  'ShortHairShortFlat',
  'ShortHairShortRound',
  'ShortHairShortWaved',
  'ShortHairSides',
  'ShortHairTheCaesar',
  'ShortHairTheCaesarSidePart',
  'Turban',
  'WinterHat1',
  'WinterHat2',
  'WinterHat3',
  'WinterHat4',
] as const;

export const AccessoriesType = [
  'Blank',
  'Kurt',
  'Prescription01',
  'Prescription02',
  'Round',
  'Sunglasses',
  'Wayfarers',
] as const;

export const HairColor = [
  'Auburn',
  'Black',
  'Blonde',
  'BlondeGolden',
  'Brown',
  'BrownDark',
  'PastelPink',
  'Blue',
  'Platinum',
  'Red',
  'SilverGray',
] as const;

export const FacialHairType = [
  'BeardLight',
  'BeardMajestic',
  'BeardMedium',
  'Blank',
  'MoustacheFancy',
  'MoustacheMagnum',
] as const;

export const FacialHairColor = [
  'Auburn',
  'Black',
  'Blonde',
  'BlondeGolden',
  'Brown',
  'BrownDark',
  'Platinum',
  'Red',
  'SilverGray',
]

export const ClotheType = [
  'BlazerShirt',
  'BlazerSweater',
  'CollarSweater',
  'GraphicShirt',
  'Hoodie',
  'Overall',
  'ShirtCrewNeck',
  'ShirtScoopNeck',
  'ShirtVNeck',
] as const;

export const ClotheColor = [
  'Black',
  'Blue01',
  'Blue02',
  'Blue03',
  'Gray01',
  'Gray02',
  'Heather',
  'PastelBlue',
  'PastelGreen',
  'PastelOrange',
  'PastelRed',
  'PastelYellow',
  'Pink',
  'Red',
  'White',
] as const;

export const EyeType = [
  'Close',
  'Cry',
  'Default',
  'Dizzy',
  'EyeRoll',
  'Happy',
  'Hearts',
  'Side',
  'Squint',
  'Surprised',
  'Wink',
  'WinkWacky',
] as const;

export const NeutralEyeType = [
  'Default'
] as const;

export const EyebrowType = [
  'Angry',
  'AngryNatural',
  'Default',
  'DefaultNatural',
  'FlatNatural',
  'RaisedExcited',
  'RaisedExcitedNatural',
  'SadConcerned',
  'SadConcernedNatural',
  'UnibrowNatural',
  'UpDown',
  'UpDownNatural',
] as const;

export const MouthType = [
  'Concerned',
  'Default',
  'Disbelief',
  'Eating',
  'Grimace',
  'Sad',
  'ScreamOpen',
  'Serious',
  'Smile',
  'Tongue',
  'Twinkle',
  'Vomit',
] as const;

export const NeutralMouthType = [
  'Default',
]

export const SkinColor = [
  'Tanned',
  'Yellow',
  'Pale',
  'Light',
  'Brown',
  'DarkBrown',
  'Black',
] as const;
