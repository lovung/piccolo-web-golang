FROM golang:latest

RUN mkdir -p /piccolo-web-golang

ADD . /piccolo-web-golang

WORKDIR /piccolo-web-golang
RUN go mod tidy 
RUN go build -o main main.go 
# RUN go get github.com/canthefason/go-watcher
# RUN go install github.com/canthefason/go-watcher/cmd/watcher

CMD ["./main"]
