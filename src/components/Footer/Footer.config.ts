import { AwardsIcon, BoostIcon, EarnIcon, MoneyIcon } from '../../assets/icons';

const classNameActiveWrapper =
  'before:bg-gradient-to-r before:from-[#5A60FF] before:to-[#888CFB]';
const classNameWrapper = 'before:bg-[#ABABAB]';
const classNameActiveText =
  'bg-gradient-to-r from-[#5A60FF] to-[#888CFB] text-transparent bg-clip-text';

export const navigateList = [
  {
    title: 'Earn',
    icon: EarnIcon,
    classNameWrapper: classNameActiveWrapper,
    classNameActiveText,
  },
  {
    title: 'Boost',
    icon: BoostIcon,
    classNameWrapper: classNameWrapper,
  },
  {
    title: 'Awards',
    icon: AwardsIcon,
    classNameWrapper: classNameWrapper,
  },
  {
    title: 'Money',
    icon: MoneyIcon,
    classNameWrapper: classNameWrapper,
  },
];
