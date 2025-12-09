import React from 'react';
import { GuidePageTemplate } from '../../components/GuidePageTemplate';
import { GUIDES } from '../../data/guides';

const JointPainGuide: React.FC = () => {
  return <GuidePageTemplate data={GUIDES['joint-pain']} />;
};

export default JointPainGuide;
