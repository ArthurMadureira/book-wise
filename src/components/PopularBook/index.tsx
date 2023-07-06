import Image from 'next/image'
import BookTestImage from '/public/images/Book.png'
import { PopularBookContent, PopularBookInfos, PopularBookTitle } from '@/styles/components/popularBookStyle'


export function PopularBook() {
  return (
    <PopularBookContent>
      <Image src={BookTestImage} width={64} height={94} quality={100} alt='Book image' />

      <PopularBookInfos>
        <PopularBookTitle>
          <h3>The Animal Revolution</h3>
          <span>George Orwell</span>
        </PopularBookTitle>
      </PopularBookInfos>
    </PopularBookContent>
  )
}