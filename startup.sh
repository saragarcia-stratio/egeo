#!/usr/bin/env bash

set -u -e -o pipefail

set +x

while true; do
    read -p "Do you want to download the latest of repo? (CAUTION!!! This erase any local change) [y/n] " yn
    case $yn in
        [Yy]* ) git checkout -- . && git clean -fd && git pull; break;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
    esac
done

# Generate package
npm run build:demo-app

# Remove old image if exists
IMG_ID=`docker ps -aq --filter "ancestor=egeo-demos"`
if [[ $IMG_ID ]]; then
   docker rm -f $IMG_ID
fi

# Generate docker and run
docker build -t egeo-demos .
docker run -p 8080:8080 -itd egeo-demos

set -x
