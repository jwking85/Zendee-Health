import React from 'react';
import { GuidePageTemplate } from '../../components/GuidePageTemplate';
import { GUIDES } from '../../data/guides';

const AcidRefluxGuide: React.FC = () => {
  return <GuidePageTemplate data={GUIDES['acid-reflux']} />;
};

export default AcidRefluxGuide;
