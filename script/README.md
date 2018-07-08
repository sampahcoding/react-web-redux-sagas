- download docker
  - `docker ps -a` [all containers]
    - `docker ps` [all active containers]
    -  `docker rm -f $(docker ps -a -q)` [rm all containers]

  - `docker images` [ all active images]
    - `docker images -a` [ all images]
    - remove <none><none> dandling images listed in docker images (without -a)with: `docker rmi $(docker images -f "dangling=true" -q)`
    - running image as container bash `docker run -i -t 3538b8c69182  /bin/sh`

- create Dockerfile [to create image, volume etc] `touch Dockerfile`
- install with `docker build .` inside script or
  - `docker build -f script/Dockerfile .` in root
- `docker-compose up`
- `docker run -i -t reactwebreduxsagas_bash_1  /bin/sh`
- `cd reactweb`
- `npm i --no-optional && npm dedupe` restart docker-compose
