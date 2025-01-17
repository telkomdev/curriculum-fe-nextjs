# Using Docker Compose

- Based on `dockerfile` course
- Use `docker compose` instead of plain `docker build` and `docker run`.
  Easier to manage `ENV` (including secrets), multi container, and 
  dependencies.
- `docker-compose.yaml` in parent directory.
- Use `HOST` and `PORT` from `ENV`

## Project Acceptance Criteria:
- Modify your code from the first project and create docker-compose.yaml file, so this application can run on top of docker and run using docker-compose 
- Web server application should run on docker container using docker-compose

## Quick Start
- Clone this repo
  This will be your local configuration, not synced to git. 
  Necessary because env variables in dev
- Build and start services: 

      docker-compose up --build --force-recreate
- Test: 

      open this url on browser http://localhost:3000
- Stop services: 
      
      docker compose down
