import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
    <Project
        name="Anime Mash (2023)"
        description="An interactive web application inspired by Facemash, focusing on anime characters. Users vote for their favorite characters in head-to-head comparisons to determine the most popular ones in the anime world."
        link="https://github.com/MaouStan/Angular-AllStar"
        img={{
          src: 'https://github.com/MaouStan/Angular-AllStar/raw/main/banner.jpg',
          alt: 'Anime Mash Banner',
        }}
        category={
          <>
            <Tags color={ColorTags.RED}>Angular</Tags>
            <Tags color={ColorTags.GREEN}>Node.js</Tags>
            <Tags color={ColorTags.BLUE}>TypeScript</Tags>
            <Tags color={ColorTags.PURPLE}>Firebase</Tags>
          </>
        }
      />
      <Project
        name="Galaxy Wars (2023)"
        description="A space-themed shooting game developed as an OOP learning project. Defend your planet by shooting meteors, collect power-ups, and progress through increasingly difficult levels."
        link="https://github.com/MaouStan/GalaxyWars"
        img={{
          src: 'https://github.com/MaouStan/GalaxyWars/raw/master/res/images/icon.jpg',
          alt: 'Galaxy Wars Game',
        }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Java</Tags>
            <Tags color={ColorTags.EMERALD}>OOP</Tags>
            <Tags color={ColorTags.YELLOW}>Game Dev</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
