# helloworld-nodedocker

## How to use
Make sure you have installed Docker on your Operating System.
### Build Docker Image
Do this in your project folder with Dockerfile:
`docker build --tag <your desired name> .`

### Run Docker Image
If you have do steps above, run
`docker run --publish 1337:69 --detach --name <your image name>`

Then, open up your browser and go to `localhost:1337`. You should see a message <b>"Docker Success"</b>. 

If you're done, run `docker rm --force bb`, the docker should stopped running at this moment. Check you localhost if you want to see.

### Additional Notes
Use `sudo` if you have trouble running Docker
