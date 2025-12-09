import React from 'react';
import { GuidePageTemplate } from '../../components/GuidePageTemplate';
import { GUIDES } from '../../data/guides';

const HormoneImbalanceGuide: React.FC = () => {
  return <GuidePageTemplate data={GUIDES['hormone-imbalance']} />;
};

export default HormoneImbalanceGuide;
