import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components'

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
        name="Anime Mash (2024)"
        description="An interactive web application inspired by Facemash, focusing on anime characters. Users vote for their favorite characters in head-to-head comparisons to determine the most popular ones in the anime world."
        link="/posts/angular-anime-mash-post/"
        img={{
          src: '/assets/images/projects/allstar/banner.jpg',
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
        name="IMDb Clone (2024)"
        description="An Angular-based clone of IMDb, featuring three main pages: Home, Movie Details, and Star Details. It utilizes the OMDb API for fetching movie and actor information."
        link="/posts/angular-imdb-post/"
        img={{
          src: '/assets/images/projects/imdb/clone_imdb_home.jpg',
          alt: 'IMDb Clone Homepage',
        }}
        category={
          <>
            <Tags color={ColorTags.BLUE}>Angular</Tags>
            <Tags color={ColorTags.INDIGO}>TypeScript</Tags>
          </>
        }
      />

      <Project
        name="Galaxy Wars (2024)"
        description="A space-themed shooting game developed as an OOP learning project. Defend your planet by shooting meteors, collect power-ups, and progress through increasingly difficult levels."
        link="/posts/java-galaxy-wars-post/"
        img={{
          src: '/assets/images/projects/galaxy-war/galaxy-war-icon.jpg',
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
        name="Movie App (2024)"
        description="An Angular-based web application that provides users with detailed information about movies and TV shows. It leverages the OMDb API to fetch real-time data, offering users up-to-date content."
        link="/posts/angular-omdb-post/"
        img={{
          src: '/assets/images/projects/movie-app-omdb/moive-app-home.jpg',
          alt: 'Movie App Homepage',
        }}
        category={
          <>
            <Tags color={ColorTags.BLUE}>Angular</Tags>
            <Tags color={ColorTags.INDIGO}>TypeScript</Tags>
          </>
        }
      />
      <Project
        name="Thailand Landmarks Explorer (2023)"
        description="An interactive web application that showcases various landmarks across Thailand. This project not only allowed me to apply various Angular concepts but also resulted in an engaging and informative user experience."
        link="/posts/angular-landmark-post/"
        img={{
          src: '/assets/images/projects/landmarks/landmar_homepage.jpg',
          alt: 'Thailand Landmarks Explorer Homepage',
        }}
        category={
          <>
            <Tags color={ColorTags.BLUE}>Angular</Tags>
            <Tags color={ColorTags.INDIGO}>TypeScript</Tags>
          </>
        }
      />
      <Project
        name="Pizza Shop Website (2023)"
        description="A web-based pizza ordering system developed for a Web Development course. Features user authentication, menu browsing, shopping cart, order placement, payment processing, order history, and an admin dashboard."
        link="/posts/php-pizza-shop-post/"
        img={{
          src: '/assets/images/projects/pizza-shop/3-Pizza_User_Menu.png',
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
        name="Lucky Flame (2023)"
        description="Collaborated with Pcampus Studio on Project Lucky Flame, a real-world project where I took full responsibility for both front-end and back-end development. The website offers various discounts and promotions for users."
        link="https://momdishcount.com/"
        img={{
          src: '/assets/images/projects/LuckFlame-Banner.jpg', // Replace with actual image path
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
)

export { ProjectList }
