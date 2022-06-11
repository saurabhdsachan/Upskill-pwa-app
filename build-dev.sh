#!/bin/bash

docker build --build-arg TAG=$1 -t 317978929258.dkr.ecr.ap-southeast-1.amazonaws.com/pwa:$1 .

exit 0
