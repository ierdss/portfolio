import React from 'react'

import { WorkExperienceSectionHeading } from '@/constants/SectionHeading';

export default function WorkExperience() {
  const { overline, header } = WorkExperienceSectionHeading;

  return (
    <div className='w-full sectionPadding'>
        <div className="">
            <h1 className="sectionOverline">{overline}</h1>
            <h1 className="sectionHeader">{header}</h1>
        </div>
    </div>
  )
}