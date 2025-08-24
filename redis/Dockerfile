# Use an existing Redis image as the base
FROM alpine:latest

# Download and install dependencies
RUN apk add --update redis

EXPOSE 6379

# Tell the image what to do when it starts
# as a container
CMD ["redis-server"]
