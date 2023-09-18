FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
#the dist folder gets build by running 'ng build --configuration production'
#this requares node+npm and npm dependencies by running 'npm install'
COPY ./dist/frontend /usr/share/nginx/html
EXPOSE 80
