import { PageTitle } from '@/components/PageTitle';
import { WorkItem } from '@/components/work/WorkItem';
import { ProductInfo } from '@/types/works.types';

import products from '../../data/products.json';

export default function Work() {
  return (
    <>
      <PageTitle>Work</PageTitle>
      <div className='grid grid-cols-1 gap-7 laptop:grid-cols-3'>
        {products.products.map((item: ProductInfo, index) => (
          <WorkItem key={index} productInfo={item} />
        ))}
      </div>
    </>
  );
}
