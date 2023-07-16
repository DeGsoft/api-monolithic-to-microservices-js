docker build -t planets .
docker run -p 8003:8003 --network=microservices --name=planets planets