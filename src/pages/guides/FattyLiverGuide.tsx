import React from 'react';
import { GuidePageTemplate } from '../../components/GuidePageTemplate';
import { GUIDES } from '../../data/guides';

const FattyLiverGuide: React.FC = () => {
  return <GuidePageTemplate data={GUIDES['fatty-liver']} />;
};

export default FattyLiverGuide;
