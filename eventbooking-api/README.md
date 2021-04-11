<h2>Tail Scraper</h2>
<p>Purpose: Scraping platform/container using node, express, puppeteer,
docker, and kubernetes. Provides a data defined scraping engine, that
uses "navigation flows" to provide a means to quickly define how the engine
flows through and scrapes items/products from a large variety of websites.
Is based off of previously created scraper that used golang/gin-gonic/
gocolly/goquery to perform these tasks. Rewrite is necessary due to
issues scraping SPAs and DDOS protected websites. Puppeteer includes V8
javascript engine in order to better support dynamic scraping actions and
reading from dynamic websites.</p>

#Working Instructions
//add database seed
chmod +x seeder.sh
./seeder.sh
//build and run docker containers
chmod +x setDocker.sh
./setDocker.sh

#shutdown dockersetup
docker-compose down

#Kubernets not working currently on ubuntu


# Run the project. docker

go to root directory

 to create docker image
$ ./setDocker.sh

or

$ chmod +x setDocker.sh
$ ./setDocker.sh

# Kubernets

close project or open another console.

$ ./convert2kub.sh

or

$ chmod +x convert2kub.sh
$ ./convert2kub.sh

# Database Seed

$ ./seeder.sh

or

$ chmod +x seeder.sh
$ ./seeder.sh
