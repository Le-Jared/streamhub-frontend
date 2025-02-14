# Quickstart
```
git clone
npm install
npm run dev
```

Dont forget to run linter before pushing code.
```
npm run lint
npx eslint . --fix
```

# Screenshot
![image](https://github.com/user-attachments/assets/d397516d-2a4d-4355-bb17-9d099b0dfead)

# Objectives
- Create a project that covers the full SDLC to simulate real-world working environment.
- Adopt an island architecture, each service layer operates independently and can be seamlessly swapped out.
- Unit tested and documented, guaranteeing the system will continue to function correctly after any changes to code or team members.

# Project Roadmap
| Sprint 1                        | Sprint 1.5                   | Sprint 2                   | Sprint 2.5             |
|---------------------------------|------------------------------|----------------------------|------------------------|
| Database Design (ERD)           | Clear Backlog (Setup)        | Clear Backlog (FE)         | Clear Backlog (BE)     |
| Setup FE, BE                    | Setup Component Manager      | Build Database Layer       | API Integration        |
| Connect FE to BE                | Build UI Component Module    | Build Service Layer        | Unit Testing           |
| Setup Error Management          | Unit Testing                 | Unit Testing               |                        |
| Deploy and Host on Vercel       |                              |                            |                        |
| Setup CI, CD                    |                              |                            |                        |

# Features (MVP)
- Dashboard: Display list of movies
- Search: Implement full text search to search for movies
- Video Player: Convert MP4 to HLS, implement streaming and buffering
- Login: Enable users to sign up and login
- Watch History I: Store watch history of user (episodes)
- Watch History II: Store watch history of user (watch duration for each episode)
- Watch Party I: Users can host or join a session to watch a video together
- Watch Party II: Users can trigger interactive games, or events during watch parties
- Live Messaging: Users can send instant messages in watch party

# Features (Extended)
- Comment Section
- Spoiler Flags for Comments
- Review and Ratings
- History Based Recommendation System
- Favourites Page
- Dark Mode
- Sharing Link
- Friend List

# Stack
- BE: SpringBoot
- FE: React, Tailwind, RadixUI
- Testing: Vitest, React-Testing-Library
