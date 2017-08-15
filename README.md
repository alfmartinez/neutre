# neutre
This is a project of basic back and front setup.

## Installation
### MongoDB Container
<code>docker-compose up -d</code>
This command will fetch the official MongoDB image and start a container with it.
The /data/db folder of the container is mounted from the host's ./data/mongodb folder so data will be persisted even if the container crashes or is restarted.
### Node packages
From the root directory of the project:
<code>npm i && cd client && npm i</code>

## Run
From the root directory of the project:
<code>npm start</code>
