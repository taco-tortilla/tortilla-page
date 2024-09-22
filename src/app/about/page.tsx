import { InterestedSection } from '@/components/about/section/InterestedSection';
import { LinksSection } from '@/components/about/section/LinksSection';
import { MyLoveSection } from '@/components/about/section/MyLoveSection';
import { NameSection } from '@/components/about/section/NameSection';
import { SkillSection } from '@/components/about/section/SkillSection';

export default function About() {
  return (
    <div className='min-h-screen'>
      <h1 className='tablte:text-4xl pb-10 text-center text-3xl font-bold'>
        About
      </h1>
      <article className='rounded-lg border-2 border-solid border-zinc-500 bg-zinc-600/70 p-5'>
        <NameSection />
        <SkillSection />
        <InterestedSection />
        <MyLoveSection />
        <LinksSection />
      </article>
    </div>
  );
}
