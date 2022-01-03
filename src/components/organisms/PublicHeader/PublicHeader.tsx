import { Devices, useDimension, whichDevice } from '../../../utils';
import { MobileHeader, DesktopHeader } from './components';

export const PublicHeader = () => {
  const [ref, { width }] = useDimension();

  const renderHeaderBasedOnDevice = () => {
    switch (whichDevice(width)) {
      case Devices.MOBILE:
        return <MobileHeader />;
      case Devices.DESKTOP:
        return <DesktopHeader />;
    }
  };

  return <header ref={ref}>{renderHeaderBasedOnDevice()}</header>;
};
