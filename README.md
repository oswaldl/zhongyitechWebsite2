代码可以随便拿去研究修改，但是希望对项目做出贡献，希望提交到主库，最好能先跟楼主联系，以保证持续贡献。
you can change the code whatever you like, but if you want to do some contribute and merge your code here,
please contact me first, let me know what you gonna do or what task i plan for you if you have no idea.


script to setup env:

# install system npm plugin
npm install --global bower       # system package mananger
npm install --global gulp        # system builder
npm install --save-dev gulp
npm install --global http-server

# install js plugin
bower init
bower install jquery --save
bower install angular --save


# run local server
http-server
visit http://localhost:8080/index.html