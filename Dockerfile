from ubuntu:latest

run apt-get update && apt-get install -y \
	curl
run curl -sL https://deb.nodesource.com/setup_10.x | bash -

run apt-get install -y nodejs

<<<<<<< HEAD
volume /home/ddn/
=======
add ddn/ddn/ /home/

volume /home/content/
>>>>>>> 231ac6d5b920cb04db57b0c80058bc7538461785

volume /home/content/

workdir /home/

entrypoint node /home/ddn/main.js
