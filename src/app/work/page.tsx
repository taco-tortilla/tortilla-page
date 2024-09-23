import { PageTitle } from '@/components/PageTitle';
import { WorkItem } from '@/components/work/WorkItem';

import worksData from '../../data/works.json';

export default function Work() {
  return (
    <>
      <PageTitle>Work</PageTitle>
      <div className='grid grid-cols-1 gap-7 laptop:grid-cols-3'>
        {worksData.works.map((item, index) => (
          <WorkItem
            key={index}
            title={item.title}
            image={item.image}
            tech={item.tech}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}
