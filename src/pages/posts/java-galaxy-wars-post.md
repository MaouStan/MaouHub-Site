---
layout: '@/templates/BasePost.astro'
title: Galaxy Wars - A Space-Themed Shooting Game
description: Explore the development of Galaxy Wars, an Object-Oriented Programming project that challenges players to defend their planet from incoming meteors.
pubDate: 2024-03-15T00:00:00Z
imgSrc: '/assets/images/projects/galaxy-war/galaxy-war-banner.png'
imgAlt: 'Galaxy Wars Game Banner'
---

![Galaxy Wars Icon](/assets/images/projects/galaxy-war/galaxy-war-icon.jpg)

As part of my Object-Oriented Programming (OOP) class at Mahasarakham University, I had the opportunity to work on an exciting project called Galaxy Wars. This space-themed shooting game not only allowed me to apply various OOP concepts but also resulted in an engaging and fun gameplay experience.

## Game Concept

In Galaxy Wars, players take on the role of a planet's defender, tasked with protecting it from a barrage of incoming meteors. The main objectives are:

1. Shoot meteors to prevent them from hitting the planet
2. Collect power-ups to enhance gameplay
3. Progress through levels with increasing difficulty

## Key Features

- Space-themed graphics and immersive sound effects
- Player-controlled spaceship for shooting meteors
- Various types of meteors with different behaviors
- Power-up items with special effects (e.g., freeze, shield, automatic shooting)
- Multiple difficulty levels to challenge players of all skill levels
- Score tracking and time-based gameplay
- Level progression system
- Customizable planet selection

## Object-Oriented Programming Concepts

Throughout the development of Galaxy Wars, we implemented several key OOP concepts:

1. **Inheritance**: We created an `Entity` base class for game objects like `Player`, `Meteor`, and `Item`.
2. **Encapsulation**: Classes such as `GamePlay` encapsulate game logic and state.
3. **Polymorphism**: The `update()` and `draw()` methods are implemented differently for various game entities.
4. **Interfaces**: We defined an `ItemType` interface for different types of power-ups.
5. **Enums**: A `Difficulty` enum represents different game difficulty levels.

## Project Structure

The project is organized into several packages:

- `game`: Contains the main game logic and components
- `game.controller`: Handles user input
- `game.entity`: Defines game objects (Player, Meteor, Item, etc.)
- `game.gui`: Manages game UI components
- `game.interfaces`: Defines interfaces used in the game
- `game.util`: Provides utility classes for file management, image handling, and sound

## How to Play

1. Use mouse movement to aim the crosshair
2. Left-click to shoot
3. Hold the left mouse button for continuous shooting (when automatic power-up is active)
4. Press ESC to pause the game or return to the main menu

## Try the Game

Want to experience Galaxy Wars for yourself? You can download the game using the link below:

[Download Galaxy Wars](https://static.maouhub.com/GalaxyWars.zip)

To play:
1. Download the ZIP file
2. Extract the contents
3. Run the executable file to start the game

Enjoy defending your planet from the meteor onslaught!

## Development Process

Working on Galaxy Wars was an incredible learning experience. Our team of five collaborated on various aspects of the game:

- Code and Design: Phothiphong Meethonglang and Nitipong Boonprasert
- Design and Assets: Apidsada Laochai and Atsadawut Trakanjun
- Sound and Assets: Wiritphon DuangDusan

We faced challenges in implementing smooth gameplay mechanics, balancing difficulty levels, and creating engaging visual and audio elements. Through teamwork and applying OOP principles, we overcame these obstacles and created a game we're proud of.

## Conclusion

Galaxy Wars showcases the power of Object-Oriented Programming in game development. It demonstrates how concepts like inheritance, encapsulation, and polymorphism can be applied to create a functional and enjoyable game. This project not only enhanced our programming skills but also gave us valuable experience in teamwork and project management.

We hope you enjoy playing Galaxy Wars as much as we enjoyed creating it. Don't forget to download the game and test your skills as a planetary defender!
