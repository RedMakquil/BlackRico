FROM fusuf/whatsasena:latest

RUN git clone https://github.com/CyberDraco/BlackRico /root/BlackRico
WORKDIR /root/BlackRico/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "rico.js"]
