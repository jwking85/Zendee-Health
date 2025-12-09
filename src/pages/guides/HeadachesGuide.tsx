import React from 'react';
import { GuidePageTemplate } from '../../components/GuidePageTemplate';
import { GUIDES } from '../../data/guides';

const HeadachesGuide: React.FC = () => {
  return <GuidePageTemplate data={GUIDES['headaches']} />;
};

export default HeadachesGuide;
