docker network create microservices
docker build -t gateway .
docker run -p 8000:8000 --network=microservices --name=gateway gateway