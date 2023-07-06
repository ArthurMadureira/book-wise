import Image from "next/image";

import { HomePostContainer, HomePostHeader, PostInfoContainer, PostProfileInfoContainer, PostStar, PostTextContainer, PostTitleContainer, ProfileInfoContainer } from "@/styles/components/post";

import BookTestImage from '/public/images/Book.png'
import { TextWithEllipsis } from "@/utils/edit-post-texts";

interface PostProps {
  username: string
  date: string | Date
  image: string
  bookTitle: string
  bookAuthor: string
  postText: string
}


export function Post(/*{ username, date, image, bookTitle, bookAuthor, postText }: PostProps*/) {
  const testText = "'A Revolução dos Bichos', escrito por George Orwell, é uma fábula satírica que retrata a luta pela liberdade e igualdade entre animais de uma fazenda, liderados pelos porcos, que inicialmente promovem uma revolução contra os humanos opressores. No entanto, à medida que o tempo passa, os porcos assumem o poder de forma autoritária, corrompendo os princípios fundamentais da revolução e tornando-se tão opressores quanto os humanos que antes condenavam. O livro aborda questões como manipulação política, corrupção e o poder corruptor do poder, oferecendo uma crítica contundente aos regimes totalitários e ao abuso de poder em todas as suas formas."

  const newText = TextWithEllipsis(testText)
  return (
    <HomePostContainer>
      <HomePostHeader>
        <PostProfileInfoContainer>
          <Image src='https://www.github.com/ArthurMadureira.png' width={40} height={40} alt='Profile avatar' quality={100} />

          <ProfileInfoContainer>
            <h3>Arthur Madureira</h3>
            <span>Today</span>
          </ProfileInfoContainer>
        </PostProfileInfoContainer>

        <PostStar>
          { /*................................................................*/}
        </PostStar>
      </HomePostHeader>

      <PostInfoContainer>
        <Image src={BookTestImage} width={108} height={152} alt='Book image' />

        <PostTextContainer>

          <PostTitleContainer>

            <h3>The Animal Revolution</h3>
            <span>George Orwell</span>

          </PostTitleContainer>

          <p>{newText}<button>...see more</button></p>
        </PostTextContainer>

      </PostInfoContainer>

    </HomePostContainer>
  )
}