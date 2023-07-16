docker build -t characters .
docker run -p 8001:8001 --network=microservices --name=characters characters