import { FacvoriteSection } from '@/components/about/section/FavoriteSection';
import { LinksSection } from '@/components/about/section/LinksSection';
import { NameSection } from '@/components/about/section/NameSection';
import { SkillSection } from '@/components/about/section/SkillSection';

export default function About() {
  return (
    <>
      <h1 className='tablte:text-4xl pb-10 text-center text-3xl font-bold'>
        About
      </h1>
      <article className='rounded-lg border-2 border-solid border-zinc-500 bg-zinc-600/70 p-5'>
        <NameSection />
        <SkillSection />
        <FacvoriteSection />
        <LinksSection />
      </article>
    </>
  );
}
