import React from 'react';
import { GuidePageTemplate } from '../../components/GuidePageTemplate';
import { GUIDES } from '../../data/guides';

const InsomniaGuide: React.FC = () => {
  return <GuidePageTemplate data={GUIDES['insomnia']} />;
};

export default InsomniaGuide;
