docker build -t films .
docker run -p 8002:8002 --network=microservices --name=films films