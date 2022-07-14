import AboutStyle, { AboutContainer, InfoContainer, StyledImage } from './About.style'
import codingSvg from '../../assets/coding.svg'

const About = () => {
  return (
    <AboutContainer>
      <StyledImage src={codingSvg}></StyledImage>
      <InfoContainer>
        <h1>Hei I am abdurrahman</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, fugit! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque aperiam nulla quia accusamus facere natus ipsa recusandae, beatae magni sit!</p>
      </InfoContainer>
    </AboutContainer>
  )
}

export default About