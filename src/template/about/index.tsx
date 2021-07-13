import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My trips</S.Heading>
    <S.Body>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia corrupti,
        delectus consequuntur, eveniet voluptatibus dignissimos asperiores
        aspernatur libero, minus repellendus ipsum nihil a incidunt vero quod.
        Id exercitationem veritatis quibusdam!
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
