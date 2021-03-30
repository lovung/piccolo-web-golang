FROM golang:latest

RUN mkdir -p /go/src/github.com/vu-long/piccolo-web-golang

ADD . /go/src/github.com/vu-long/piccolo-web-golang

WORKDIR /go/src/github.com/vu-long/piccolo-web-golang
RUN go mod download 
# RUN go get github.com/canthefason/go-watcher
# RUN go install github.com/canthefason/go-watcher/cmd/watcher

# ENTRYPOINT  watcher -run github.com/vu-long/piccolo-web-golang  -watch github.com/vu-long/piccolo-web-golang
ENTRYPOINT go run main.go
