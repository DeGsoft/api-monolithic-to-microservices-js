docker build -t database .
docker run -p 8004:8004 --network=microservices --name=database database