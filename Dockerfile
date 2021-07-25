## Select the base image
FROM node:12-alpine

## Set the working directory of the application
WORKDIR /simple

## Copy the package json files
COPY package.json /simple/
COPY *.lock /simple/

## Install packages from the package json file
RUN yarn install

## Copy the rest of the application, ignorning files
##  stored in the .dockerignore
## This works similar to the .gitignore
COPY . /simple/