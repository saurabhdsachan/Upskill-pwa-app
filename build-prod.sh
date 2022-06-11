#!/bin/bash

docker build --platform=linux/amd64 --build-arg TAG=$1 -t 317978929258.dkr.ecr.ap-south-1.amazonaws.com/pwa:$1 .

exit 0
