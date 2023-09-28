#!/bin/bash 

echo "Stopping docker..." 
docker compose down 
docker system prune 
