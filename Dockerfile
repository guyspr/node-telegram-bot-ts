FROM node:4-onbuild

ARG BOT_TOKEN
ARG FORECAST_API
ARG GEOCODE_PROVIDER=google
ARG GEOCODE_APIKEY
ARG SUPERUSER

ENV BOT_TOKEN=$BOT_TOKEN
ENV FORECAST_API=$FORECAST_API
ENV GEOCODE_PROVIDER=$GEOCODE_PROVIDER
ENV GEOCODE_APIKEY=$GEOCODE_APIKEY
ENV SUPERUSER=$SUPERUSER