package main

import (
	"github.com/gin-contrib/gzip"
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)

// var router *gin.Engine

func main() {

	router := gin.Default()
	router.Use(gzip.Gzip(gzip.DefaultCompression))
	// Serve frontend static files
	router.Use(static.Serve("/", static.LocalFile("./public", true)))

	// Start and run the server
	go router.Run(":3000")
	router.RunTLS(":3443", "./cert/server.pem", "./cert/server.key")
}
