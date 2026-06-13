FROM nginx:alpine

# Upgrade all packages to fix known CVEs
RUN apk upgrade --no-cache

RUN rm -rf /usr/share/nginx/html/*
COPY index.html         /usr/share/nginx/html/
COPY skills_temp.html   /usr/share/nginx/html/
COPY css/               /usr/share/nginx/html/css/
COPY js/                /usr/share/nginx/html/js/
COPY images/            /usr/share/nginx/html/images/
COPY files/             /usr/share/nginx/html/files/
COPY projects/          /usr/share/nginx/html/projects/
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
