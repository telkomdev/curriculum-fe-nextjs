# Managing NextJs Container with Dockerfile

A basic nodejs express webapp, packed as docker container
This project is a simple Hello World web server application develop with ReactJs and NextJs.

## Project Criteria:

- Web server developed with ReactJs and NextJs
- Web server should response with string "Wellcome to Next.js" when client open the server URL
- Web server application should run in docker container

## Prequisite

Docker Desktop or other docker variants working. See `docker desktop` course

## Build & Run Example

- Build container, tag it as `dockerfile-image`

      docker build . -t dockerfile-image
- Run built image, name it `dockerfile-test`

      docker run --name dockerfile-test --rm -d -p 3000:3000 dockerfile-image

![](https://images2.imgbox.com/c8/ae/UA2f114Z_o.png)

- Access web server

      open this url on browser http://localhost:3000

![](https://images2.imgbox.com/16/23/RF44crOx_o.png)

- Stop container. Since we start the container with `--rm`, it will be automatically deleted when stopped

      docker kill dockerfile-test
