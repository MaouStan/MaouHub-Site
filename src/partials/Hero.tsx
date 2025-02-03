import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Phothiphong Meethonglang</GradientText> 👋
        </>
      }
      description={
        <>
          Hi, I'm Phothiphong Meethonglang, Developer from Thailand
          <br />
          🔬 I'm currently studying for my bachelor's in Computer Science at Mahasarakham University
          <br />
          💻 I love writing code and learn anything about it
          <br />
          {/* 📚 I'm currently learning TrOCR */}
          {/* <br /> */}
          💬 Ask me anything about from,{' '}
          <a
            className="text-cyan-400 hover:underline"
            href="https://github.com/MaouStan/MaouStan/issues"
          >
            Here
          </a>{' '}
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          {/* <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a> */}
          <a href="https://web.facebook.com/zazalnm223/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          {/* <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a> */}
          <a href="https://www.youtube.com/@maoustan">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
          <a href="https://www.instagram.com/maoustan">
            <HeroSocial
              src="/assets/images/instagram-icon.png"
              alt="Instagram icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
