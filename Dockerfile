FROM nginx:alpine
COPY ./dist/ /usr/share/nginx/html/
RUN echo 'Doing the will of the Father'
