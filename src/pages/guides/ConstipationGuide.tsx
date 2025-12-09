import React from 'react';
import { GuidePageTemplate } from '../../components/GuidePageTemplate';
import { GUIDES } from '../../data/guides';

const ConstipationGuide: React.FC = () => {
  return <GuidePageTemplate data={GUIDES['constipation']} />;
};

export default ConstipationGuide;
