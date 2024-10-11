import { FacvoriteSection } from '@/components/about/section/FavoriteSection';
import { InterestedSection } from '@/components/about/section/InterestedSection';
import { ProfileSection } from '@/components/about/section/ProfileSection';
import { SkillSection } from '@/components/about/section/SkillSection';
import { PageTitle } from '@/components/PageTitle';

export default function About() {
  return (
    <div className='tablet:px-20 laptop:px-48'>
      <PageTitle>About</PageTitle>
      <article className='rounded-lg border-2 border-solid border-zinc-500 bg-zinc-600/70 p-5 laptop:px-14 '>
        <ProfileSection />
        <SkillSection />
        <InterestedSection />
        <FacvoriteSection />
      </article>
    </div>
  );
}
