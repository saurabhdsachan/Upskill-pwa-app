import SectionTitle from '@components/Shared/SectionTitle';
import React from 'react';
import { Controller } from 'react-scrollmagic';
import DesignTeamData from '../../mocks/DesignTeamData';
import TeamMember from './TeamMember';

const DesignTeam: React.FC = () => (
  <div className="bg-white">
    <div className="container mx-auto px-4">
      <SectionTitle
        feature="The People"
        title="Meet our growing team of interior designers"
        description="Spacejoy's interior designers are handpicked from across the country. While our team is a diverse mix of professionals with varied interests, there is a common thread - They are all passionate about interior and design and love transforming spaces. Our designers continue to design homes across the country to bring our clients' vision to life through mindful and personalized designs. Start a project and allow them to work their magic in your actual space."
      />
    </div>
    <div className="max-w-7xl mx-auto px-4 text-center sm:px-6 lg:px-8">
      <div className="space-y-8 sm:space-y-12">
        <ul className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
          <Controller>
            {DesignTeamData.map((designer, index) => (
              <TeamMember designer={designer} key={`${designer.firstName}-${index}`} />
            ))}
          </Controller>
        </ul>
      </div>
    </div>
  </div>
);

export default DesignTeam;
