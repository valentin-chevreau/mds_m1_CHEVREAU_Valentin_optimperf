FROM alpine:3.7

MAINTAINER Valentin CHEVREAU

RUN apk add --no-cache mongodb
RUN mkdir -p /data/ && chown -R mongodb /data/

VOLUME /data/db

EXPOSE 27017

CMD [ "mongod", "--bind_ip", "0.0.0.0" ]
CMD [ "docker run -d --name dbTest mongo:latest" ]
CMD [ "docker inspect dbTest" ]