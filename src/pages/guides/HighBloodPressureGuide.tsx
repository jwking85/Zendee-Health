import React from 'react';
import { GuidePageTemplate } from '../../components/GuidePageTemplate';
import { GUIDES } from '../../data/guides';

const HighBloodPressureGuide: React.FC = () => {
  return <GuidePageTemplate data={GUIDES['high-blood-pressure']} />;
};

export default HighBloodPressureGuide;
