# Aiursoft Homepage by Herbert

[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://gitlab.aiursoft.com/aiursoft/homepage/-/blob/master/LICENSE)
[![Pipeline stat](https://gitlab.aiursoft.com/aiursoft/homepage/badges/master/pipeline.svg)](https://gitlab.aiursoft.com/aiursoft/homepage/-/pipelines)
[![ManHours](https://manhours.aiursoft.cn/r/gitlab.aiursoft.com/aiursoft/homepage.svg)](https://gitlab.aiursoft.com/aiursoft/homepage/-/commits/master?ref_type=heads)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fwww.aiursoft.cn%2F)](https://www.aiursoft.cn)
[![Docker](https://img.shields.io/docker/pulls/aiursoft/homepage.svg)](https://hub.docker.com/r/aiursoft/homepage)

## Run in Docker

First, install Docker [here](https://docs.docker.com/get-docker/).

Then run the following commands in a Linux shell:

```bash
image=aiursoft/homepage
appName=homepage
sudo docker pull $image
sudo docker run -d --name $appName --restart unless-stopped -p 5000:5000 -v /var/www/$appName:/data $image
```

That will start a web server at `http://localhost:5000` and you can test the app.

The docker image has the following context:

| Properties  | Value                                  |
|-------------|----------------------------------------|
| Image       | aiursoft/homepage      |
| Ports       | 5000                                   |
| Binary path | /app                                   |
| Data path   | /data                                  |
