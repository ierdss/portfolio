import React from 'react'

import { WorkExperienceSectionContent } from '@/constants/SectionContent';

export default function WorkExperience() {
  const { overline, header } = WorkExperienceSectionContent;

  return (
    <div className='w-full sectionPadding'>
        <div className="">
            <h1 className="sectionOverline">{overline}</h1>
            <h1 className="sectionHeader">{header}</h1>
        </div>
    </div>
  )
}