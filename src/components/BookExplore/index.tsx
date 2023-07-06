import { Book, BookInfo } from "@/styles/components/BookExplore";
import Image from "next/image";

import BookImage from '/public/images/Book.png'


export function BookExplore() {
  return (
    <Book>
      <Image src={BookImage} width={108} height={152} alt="Book image" />

      <BookInfo>
        <div>
          <h3>The Animal Revolution</h3>
          <span>George Orwell</span>
        </div>
      </BookInfo>
    </Book>
  )
}