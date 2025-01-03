import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { ASSETS_URL } from '../../constants';

const Head: FC = () => {
  return (
    <Helmet>
      <link 
        rel="icon" 
        type="image/png" 
        href={`${ASSETS_URL}/images/favicon/favicon.png`}
      />
    </Helmet>
  );
};

export default Head; 