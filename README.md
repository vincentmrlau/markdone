# markdone
`author info:413893093@qq.com` 
 `Vincent Lau`
> 记心情，轻社交

### 服务端
####	主要
1.	nodejs	
2.	express

####	数据 
1.	mysql 
2.	sequelize `promise-base`  `数据库操作`  http://docs.sequelizejs.com/en/latest/

####	其他
1.	HTTPS: `openssl`
2.	jwt `https://www.npmjs.com/package/jwt-simple` `处理登录状态` 
3.	crypto `密码加密储存` `http://nodejs.cn/api/crypto.html#crypto_crypto_createhmac_algorithm_key` 
4. socket: socket.io
5. ~~使用 x-www-form-urlecoded 传递数据~~
6. 日志系统： log4js
7. 签名规则： id+过期时间
8. 用户通过socket与后端交互

#### socket 实现方案 (1) 每次都要查表
1. 记录每一个连接自动生成的id（每一个连接都会自动join一个room），记录在user_info的表上
2. 每次发送信息都要查表（找到对应的socket_room_id）
3. 用socket.to(socket_room_id)来选择对应的用户连接的room
4. 客户端连接的时候需要在

#### socket 实现方案（2）每次连接加入一个用userid命名的room


### 客户端
####	设计参考：
1.	antd

####	微信小程序
1.	完整功能
2. ios版本之后

####	web版本
1.	vue及其生态（vuex\vue-router\vue-resource等）
2. 主要开发工具：vue-cli(webpack)

####	APP
1.	react-native: 对比weex 生态丰富，对比cordova 体验更佳
2. weex,cordova,原生开发。
3. react-navigation
4. redux + redux-persist + redux-thunk 
5. ~~mobx + react-mobx）~~
6. react-native-vector-icons 
7. prop-types
8. redux-persist 缓存
9. redux-thunk
10. react-native-push-notifications 处理推送
11. JPush-react-native
12. UI Toolkit: react-native-element 没有风格，不过是大厂风范，文档全

#### 备选
1. react-native-gifted-chat 聊天窗口，长得像苹果短信
2. weex,cordova,原生开发
3. react-native-ui-kitten 喜欢这款，不过star太少，组件不全
4. NativeBase