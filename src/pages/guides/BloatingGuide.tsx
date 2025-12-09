import React from 'react';
import { GuidePageTemplate } from '../../components/GuidePageTemplate';
import { GUIDES } from '../../data/guides';

const BloatingGuide: React.FC = () => {
  return <GuidePageTemplate data={GUIDES['bloating']} />;
};

export default BloatingGuide;
