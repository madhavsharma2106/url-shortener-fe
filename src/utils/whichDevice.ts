import { Devices } from '.';

export const whichDevice = (width: number): Devices => {
  if (width > 800) return Devices.DESKTOP;
  return Devices.MOBILE;
};
