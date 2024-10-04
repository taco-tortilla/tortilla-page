import { FacvoriteSection } from '@/components/about/section/FavoriteSection';
import { ProfileSection } from '@/components/about/section/ProfileSection';
import { SkillSection } from '@/components/about/section/SkillSection';

export default function About() {
  return (
    <div className='tablet:px-20 laptop:px-48'>
      <h1 className='tablte:text-4xl pb-10 text-center text-3xl font-bold'>
        About
      </h1>
      <article className='rounded-lg border-2 border-solid border-zinc-500 bg-zinc-600/70 p-5 '>
        <ProfileSection />
        <SkillSection />
        <FacvoriteSection />
      </article>
    </div>
  );
}
