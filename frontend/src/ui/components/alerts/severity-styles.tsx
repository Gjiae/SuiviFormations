import { FaCircleInfo, FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { IoIosWarning } from "react-icons/io";

export const classNames = {
  info: 'bg-secondary border-secondary text-dark',
  success: 'bg-green border-green text-dark',
  warning: 'bg-yellow border-yellow text-dark',
  error: 'bg-red border-red text-dark  ',
}

export const svgPaths = {
  info: <FaCircleInfo size="2.5rem"/>,
  success: <FaCircleCheck size="2.5rem"/>,
  warning: <IoIosWarning size="2.5rem"/>,
  error: <FaCircleXmark size="2.5rem"/>,
}