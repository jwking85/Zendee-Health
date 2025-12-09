import React from 'react';
import { GuidePageTemplate } from '../../components/GuidePageTemplate';
import { GUIDES } from '../../data/guides';

const AnxietyGuide: React.FC = () => {
  return <GuidePageTemplate data={GUIDES['anxiety']} />;
};

export default AnxietyGuide;
