# Nginx Alpine — tiny (~23MB) and production-ready
FROM nginx:alpine

# Remove the default Nginx test page
RUN rm -rf /usr/share/nginx/html/*

# Copy your portfolio files
COPY index.html         /usr/share/nginx/html/
COPY skills_temp.html   /usr/share/nginx/html/
COPY css/               /usr/share/nginx/html/css/
COPY js/                /usr/share/nginx/html/js/
COPY images/            /usr/share/nginx/html/images/
COPY files/             /usr/share/nginx/html/files/
COPY projects/          /usr/share/nginx/html/projects/

# Copy our custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Port 80 is the standard HTTP port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
