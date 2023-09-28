FROM python:3.11.5-slim-bookworm

COPY . /app 
WORKDIR /app 

RUN python3 -m venv /opt/env 

RUN /opt/env/bin/pip install pip --upgrade \
    && /opt/env/bin/pip install -r requirements.txt

CMD ["/app/entrypoint.sh"]


