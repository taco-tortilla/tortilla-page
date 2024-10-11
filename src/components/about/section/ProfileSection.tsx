import Image from 'next/image';

import profileImage from '../../../../public/images/profile.jpg';
import links from '../../../data/links.json';
import { Icon } from '../profile/Icon';
import { Vsco } from '../profile/Vsco';
import { Section } from '../Section';

type Links = {
  [key: string]: string;
};

export function ProfileSection() {
  const linkURL: Links = links;
  return (
    <Section>
      <div className='flex flex-col items-center justify-center tablet:py-10 '>
        <div className='size-32 rounded-full bg-neutral-200 tablet:size-40'>
          <Image
            src={profileImage}
            width={1125}
            height={1125}
            alt='profile image'
            placeholder='blur'
            className='size-32 rounded-full tablet:size-40'
          />
        </div>
        <div className='py-5 text-center'>
          <p className='text-2xl font-semibold'>Taisei Hasegawa</p>
          <p className='text-xl font-semibold'>(tortilla)</p>
          <div className='flex items-center justify-center gap-5 pt-8'>
            <Icon url={linkURL.github}>
              <span className='i-ri-github-fill text-3xl transition-transform duration-100 hover:scale-110 tablet:text-4xl' />
            </Icon>
            <Icon url={linkURL.twitter}>
              <span className='i-ri-twitter-x-fill text-3xl transition-transform duration-100 hover:scale-110 tablet:text-4xl' />
            </Icon>
            <Icon url={linkURL.notion}>
              <span className='i-ri-notion-fill text-3xl transition-transform duration-100 hover:scale-110 tablet:text-4xl' />
            </Icon>
            <Icon url={linkURL.vsco}>
              <div className='text-3xl transition-transform duration-100 hover:scale-110 tablet:text-4xl'>
                <Vsco
                  style={{
                    width: '1em',
                    height: '1em',
                    transform: 'scale(0.85)',
                  }}
                  color='#FCFEFE'
                />
              </div>
            </Icon>
            <Icon url='mailto:tortillataco0@gmail.com'>
              <span className='i-ri-mail-fill text-3xl transition-transform duration-100 hover:scale-110 tablet:text-4xl' />
            </Icon>
          </div>
        </div>
      </div>
    </Section>
  );
}
