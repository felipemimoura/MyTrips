import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Image de um átomo e Reaact Avançado escrito ao lado"
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS e Styled Componentes
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Imagem de um desenvolvedor sentado com telas de código em sua frente"
    />
  </S.Wrapper>
)

export default Main
