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
            <Tags color={ColorTags.INDIGO}>MySQL</Tags>
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
            <Project
        name="Pizza Shop Website (2022)"
        description="A web-based pizza ordering system developed for a Web Development course. Features user authentication, menu browsing, shopping cart, order placement, payment processing, order history, and an admin dashboard."
        link="https://github.com/MaouStan/PizzaShop"
        img={{
          src: 'https://raw.githubusercontent.com/MaouStan/PizzaShop/main/gitResources/3-Pizza_User_Menu.png',
          alt: 'Pizza Shop Website',
        }}
        category={
          <>
            <Tags color={ColorTags.BLUE}>PHP</Tags>
            <Tags color={ColorTags.ORANGE}>HTML</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
            <Tags color={ColorTags.INDIGO}>MySQL</Tags>
            <Tags color={ColorTags.SLATE}>Docker</Tags>
          </>
        }
      />
            <Project
        name="Lucky Flame (2022)"
        description="Collaborated with Pcampus Studio on Project Lucky Flame, a real-world project where I took full responsibility for both front-end and back-end development. The website offers various discounts and promotions for users."
        link="https://momdishcount.com/"
        img={{
          src: '/assets/images/LuckFlame-Banner.jpg', // Replace with actual image path
          alt: 'Lucky Flame Project',
        }}
        category={
          <>
            <Tags color={ColorTags.BLUE}>Next.js</Tags>
            <Tags color={ColorTags.INDIGO}>TypeScript</Tags>
            <Tags color={ColorTags.ORANGE}>Firebase</Tags>
            <Tags color={ColorTags.RED}>Firestore</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
