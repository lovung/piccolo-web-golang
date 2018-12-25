package main

import (
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)

// var router *gin.Engine

func main() {

	router := gin.Default()

	// Serve frontend static files
	router.Use(static.Serve("/", static.LocalFile("./public", true)))

	// Start and run the server
	router.Run(":3000")
}
