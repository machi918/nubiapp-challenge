import {FC} from 'react';

import {CenteredView} from '@src/components';

export const DummyComponentWError: FC = () => {
  const error: string[] | undefined = undefined;
  return (
    <CenteredView>{error!.find(item => item === 'Hello World')}</CenteredView>
  );
};
