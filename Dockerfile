FROM golang:latest

RUN mkdir -p /go/src/github.com/longvu/piccolo-web-golang

ADD . /go/src/github.com/lovung/piccolo-web-golang

WORKDIR /go/src/github.com/lovung/piccolo-web-golang
RUN go mod download 
RUN go build -o main main.go 
# RUN go get github.com/canthefason/go-watcher
# RUN go install github.com/canthefason/go-watcher/cmd/watcher

CMD ["./main"]
