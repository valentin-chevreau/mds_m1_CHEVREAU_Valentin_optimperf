FROM alpine:3.7

MAINTAINER Valentin CHEVREAU

RUN apk add --no-cache mongodb
RUN mkdir -p /data/ && chown -R mongodb /data/

VOLUME /data/db

EXPOSE 27017

CMD [ "mongod", "--bind_ip", "0.0.0.0" ]
CMD [ "docker run -d --name dbTest mongo:latest" ]
CMD [ "docker run -it  mongo /bin/sh" ]
CMD [ "db.post.insert([
   {
      title: 'MongoDB Overview', 
      description: 'MongoDB is no sql database',
      by: 'tutorials point',
      url: 'http://www.tutorialspoint.com',
      tags: ['mongodb', 'database', 'NoSQL'],
      likes: 100
   },
	
   {
      title: 'NoSQL Database', 
      description: "NoSQL database doesn't have tables",
      by: 'tutorials point',
      url: 'http://www.tutorialspoint.com',
      tags: ['mongodb', 'database', 'NoSQL'],
      likes: 20, 
      comments: [	
         {
            user:'user1',
            message: 'My first comment',
            dateCreated: new Date(2013,11,10,2,35),
            like: 0 
         }
      ]
   }
])"]
CMD [ "docker inspect dbTest" ]