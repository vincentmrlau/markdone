# markdone
`author info:413893093@qq.com` 
 `Vincent Lau`
> 记心情，轻社交

## 服务端
###	主要
1.	nodejs	
2.	express

###	数据
1.	mysql 
2.	sequelize `promise-base`  `数据库操作`  http://docs.sequelizejs.com/en/latest/

### 通讯
1. ~~长轮询~~
2. socket

###	其他
1.	HTTPS: `openssl`
2.	jwt `https://www.npmjs.com/package/jwt-simple` `处理登录状态` 
3.	crypto `密码加密储存` `http://nodejs.cn/api/crypto.html#crypto_crypto_createhmac_algorithm_key` 
4. socket: socket.io
5. ~~使用 x-www-form-urlecoded 传递数据~~
6. 日志系统： log4js
7. 签名规则： id+过期时间
8. 用户通过socket与后端交互
9. 对象存储： 七牛云

### socket 实现方案 (1) 每次都要查表
1. 记录每一个连接自动生成的id（每一个连接都会自动join一个room），记录在user_info的表上
2. 每次发送信息都要查表（找到对应的socket_room_id）
3. 用socket.to(socket_room_id)来选择对应的用户连接的room
4. 客户端连接的时候需要在

### socket 实现方案（2）每次连接加入一个用userid命名的room


## 客户端
###	设计参考：
1.	antd

###	微信小程序
1.	完整功能
2. ios版本之后

###	web版本
1.	vue及其生态（vuex\vue-router\vue-resource等）
2. 主要开发工具：vue-cli(webpack)

###	APP
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
13. react-native-message-bar 信息提示框
14. react-native-image-crop-picker 照片选择,裁剪
15. ~~react-native-image-zoom-viewer 图片浏览，预览~~
#### 备选
1. react-native-gifted-chat 聊天窗口，长得像苹果短信
2. weex,cordova,原生开发
3. react-native-ui-kitten 喜欢这款，不过star太少，组件不全
4. NativeBase

#### 数据存储与账号切换
1. 用户基础数据：每次登陆/退出登录/被迫退出登录/的时候更新
2. 其他数据模块：更换账号的时候核对是否与前面账号一致，不一致则清除本地数据

## 坑s
### app

|坑变现|原因|具体解决办法|
|:---|:---|:---|
|在主页渲染是，mount的时候还没有读取本地数据，因此mount无法读取是否已经登录，因此使用其他生命周期来判断，使用react-navigation会造成内存泄漏|使用navigate直接跳转，只是在这个stack上面添加stack，会多次引发其他钩子，每次跳转都会因此新的prop注入（redux）| 使用navigation的Reset Action|