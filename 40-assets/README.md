# Using Tailwindcss

- Based on `routing` course
- install and configure tailwindcss using postcss: https://tailwindcss.com/docs/installation/using-postcss

## Project Acceptance Criteria:
- Modify your code from the first project and create docker-compose.yaml file, so this application can run on top of docker and run using docker-compose 
- Web server application should run on docker container using docker-compose
- Implement tailwind classes to improve web UI
- Use Image component from next/Image: https://nextjs.org/docs/api-reference/next/image

## Quick Start
- Clone this repo
  This will be your local configuration, not synced to git. 
  Necessary because env variables in dev
- Build and start services: 

      docker-compose up --build --force-recreate
- Test: 

      open this url on browser http://localhost:3000
      
![](https://images2.imgbox.com/a5/85/gcHU1w9Q_o.gif)

- Stop services: 
      
      docker compose down
