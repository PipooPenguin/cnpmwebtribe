#!/bin/bash

echo "Starting Docker cleanup process..."

# Stop all running containers
echo "Stopping all running containers..."
docker stop $(docker ps -aq) 2>/dev/null || echo "No running containers to stop"

# Remove all containers
echo "Removing all containers..."
docker rm $(docker ps -aq) 2>/dev/null || echo "No containers to remove"

# Remove all images
echo "Removing all images..."
docker rmi $(docker images -q) --force 2>/dev/null || echo "No images to remove"

# Remove all volumes
echo "Removing all volumes..."
docker volume rm $(docker volume ls -q) 2>/dev/null || echo "No volumes to remove"

# Remove all networks
echo "Removing unused networks..."
docker network prune -f 2>/dev/null || echo "No networks to remove"

# Clean up system
echo "Performing system cleanup..."
docker system prune -af --volumes

# Clean build cache
echo "Cleaning build cache..."
docker builder prune -af

# Remove temporary files
echo "Removing temporary files..."
rm -rf /var/lib/docker/tmp/* 2>/dev/null || echo "No temporary files to remove"

# Display current disk usage
echo -e "\nCurrent Docker disk usage:"
docker system df

echo -e "\nDocker cleanup completed!"