/**
 * Created by 41389 on 2017/4/25.
 * 小事
 */

'use strict';

module.exports = function (sequelize,DataTypes) {
    var Trifle = sequelize.define('trifle',{
        trifle_id:{
            type:DataTypes.INTEGER,
            unique:true,
            autoIncrement:true,
            primaryKey:true
        },
        user_id:{
            type:DataTypes.UUID,
            allowNull:false
        },
        content:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        date:{
            type:DataTypes.DATEONLY,
            allowNull:false
        }
    });
    return Trifle;
}
